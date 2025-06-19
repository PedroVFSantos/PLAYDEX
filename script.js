class BTreeNode {
  constructor(t, leaf = false) {
    this.t = t;
    this.leaf = leaf;
    this.keys = [];
    this.children = [];
    this.values = [];
  }

  traverse(callback) {
    let i;
    for (i = 0; i < this.keys.length; i++) {
      if (!this.leaf) this.children[i].traverse(callback);
      callback(this.values[i]);
    }
    if (!this.leaf) this.children[i].traverse(callback);
  }

  search(key) {
    let i = 0;
    while (i < this.keys.length && key > this.keys[i]) i++;
    if (i < this.keys.length && this.keys[i] === key) return this.values[i];
    if (this.leaf) return null;
    return this.children[i].search(key);
  }

  insertNonFull(key, value) {
    let i = this.keys.length - 1;
    if (this.leaf) {
      while (i >= 0 && this.keys[i] > key) i--;
      this.keys.splice(i + 1, 0, key);
      this.values.splice(i + 1, 0, value);
    } else {
      while (i >= 0 && this.keys[i] > key) i--;
      i++;
      if (this.children[i].keys.length === 2 * this.t - 1) {
        this.splitChild(i);
        if (key > this.keys[i]) i++;
      }
      this.children[i].insertNonFull(key, value);
    }
  }

  splitChild(i) {
    const y = this.children[i];
    const z = new BTreeNode(y.t, y.leaf);
    const t = this.t;

    z.keys = y.keys.splice(t);
    z.values = y.values.splice(t);
    if (!y.leaf) z.children = y.children.splice(t);

    this.children.splice(i + 1, 0, z);
    this.keys.splice(i, 0, y.keys.splice(t - 1, 1)[0]);
    this.values.splice(i, 0, y.values.splice(t - 1, 1)[0]);
  }
}

class BTree {
  constructor(t) {
    this.root = new BTreeNode(t, true);
    this.t = t;
  }

  insert(key, value) {
    const r = this.root;
    if (r.keys.length === 2 * this.t - 1) {
      const s = new BTreeNode(this.t, false);
      s.children.push(r);
      s.splitChild(0);
      this.root = s;
    }
    this.root.insertNonFull(key, value);
  }

  search(key) {
    return this.root.search(key);
  }

  traverse(callback) {
    this.root.traverse(callback);
  }

  prefixSearch(prefix) {
    const results = [];
    this.traverse(value => {
      if (value.titulo.toLowerCase().startsWith(prefix)) {
        results.push(value);
      }
    });
    return results;
  }
}

let jogos = [];
let btree;

async function loadGames() {
  const response = await fetch('jogos.json');
  jogos = await response.json();
  btree = new BTree(2);
  jogos.forEach(jogo => {
    btree.insert(jogo.titulo.toLowerCase(), jogo);
  });
  displayGames(jogos);
}

function displayGames(lista) {
  const results = document.getElementById("results");
  results.innerHTML = "";
  if (lista.length === 0) {
    results.innerHTML = "<p>Nenhum jogo encontrado.</p>";
    return;
  }
  lista.forEach(jogo => {
    const card = document.createElement("div");
    card.className = "game-card";
    card.innerHTML = `
      <img src="${jogo.image}" alt="${jogo.titulo}">
      <h4>${jogo.titulo}</h4>
      <p><strong>Gênero:</strong> ${jogo.genero}</p>
      <p><strong>Plataforma:</strong> ${jogo.plataforma}</p>
    `;
    results.appendChild(card);
  });
}

function searchGame() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const platformFilter = document.getElementById("platformFilter").value.toLowerCase();

  if (input.trim() === "") {
    const all = [];
    btree.traverse(j => {
      if (platformFilter === "" || j.plataforma.toLowerCase().includes(platformFilter)) {
        all.push(j);
      }
    });
    displayGames(all);
    return;
  }

  const results = btree.prefixSearch(input).filter(j =>
    platformFilter === "" || j.plataforma.toLowerCase().includes(platformFilter)
  );

  displayGames(results);
}

window.onload = () => {
  loadGames();
};
