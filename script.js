class BTreeNode {
    constructor(t, leaf = false) {
        this.t = t;
        this.leaf = leaf;
        this.keys = [];
        this.values = [];
        this.children = [];
    }

    findKey(key) {
        let idx = 0;
        while (idx < this.keys.length && this.keys[idx] < key) {
            ++idx;
        }
        return idx;
    }

    remove(key) {
        const idx = this.findKey(key);
        if (idx < this.keys.length && this.keys[idx] === key) {
            if (this.leaf) {
                this.removeFromLeaf(idx);
            } else {
                this.removeFromNonLeaf(idx);
            }
        } else {
            if (this.leaf) {
                console.log(`A chave ${key} não existe na árvore.`);
                return;
            }
            const flag = (idx === this.keys.length);
            if (this.children[idx].keys.length < this.t) {
                this.fill(idx);
            }
            if (flag && idx > this.keys.length) {
                this.children[idx - 1].remove(key);
            } else {
                this.children[idx].remove(key);
            }
        }
    }

    removeFromLeaf(idx) {
        this.keys.splice(idx, 1);
        this.values.splice(idx, 1);
    }

    removeFromNonLeaf(idx) {
        const key = this.keys[idx];
        if (this.children[idx].keys.length >= this.t) {
            const pred = this.getPred(idx);
            this.keys[idx] = pred.key;
            this.values[idx] = pred.value;
            this.children[idx].remove(pred.key);
        } else if (this.children[idx + 1].keys.length >= this.t) {
            const succ = this.getSucc(idx);
            this.keys[idx] = succ.key;
            this.values[idx] = succ.value;
            this.children[idx + 1].remove(succ.key);
        } else {
            this.merge(idx);
            this.children[idx].remove(key);
        }
    }

    getPred(idx) {
        let cur = this.children[idx];
        while (!cur.leaf) {
            cur = cur.children[cur.keys.length];
        }
        return { key: cur.keys[cur.keys.length - 1], value: cur.values[cur.values.length - 1] };
    }

    getSucc(idx) {
        let cur = this.children[idx + 1];
        while (!cur.leaf) {
            cur = cur.children[0];
        }
        return { key: cur.keys[0], value: cur.values[0] };
    }

    fill(idx) {
        if (idx !== 0 && this.children[idx - 1].keys.length >= this.t) {
            this.borrowFromPrev(idx);
        } else if (idx !== this.keys.length && this.children[idx + 1].keys.length >= this.t) {
            this.borrowFromNext(idx);
        } else {
            if (idx !== this.keys.length) {
                this.merge(idx);
            } else {
                this.merge(idx - 1);
            }
        }
    }

    borrowFromPrev(idx) {
        const child = this.children[idx];
        const sibling = this.children[idx - 1];
        child.keys.unshift(this.keys[idx - 1]);
        child.values.unshift(this.values[idx - 1]);
        if (!child.leaf) {
            child.children.unshift(sibling.children.pop());
        }
        this.keys[idx - 1] = sibling.keys.pop();
        this.values[idx - 1] = sibling.values.pop();
    }

    borrowFromNext(idx) {
        const child = this.children[idx];
        const sibling = this.children[idx + 1];
        child.keys.push(this.keys[idx]);
        child.values.push(this.values[idx]);
        if (!child.leaf) {
            child.children.push(sibling.children.shift());
        }
        this.keys[idx] = sibling.keys.shift();
        this.values[idx] = sibling.values.shift();
    }

    merge(idx) {
        const child = this.children[idx];
        const sibling = this.children[idx + 1];
        child.keys.push(this.keys[idx]);
        child.values.push(this.values[idx]);
        child.keys = child.keys.concat(sibling.keys);
        child.values = child.values.concat(sibling.values);
        if (!child.leaf) {
            child.children = child.children.concat(sibling.children);
        }
        this.keys.splice(idx, 1);
        this.values.splice(idx, 1);
        this.children.splice(idx + 1, 1);
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
                this.splitChild(i, this.children[i]);
                if (key > this.keys[i]) i++;
            }
            this.children[i].insertNonFull(key, value);
        }
    }
    
    splitChild(i, y) {
        const z = new BTreeNode(y.t, y.leaf);
        const t = this.t;
        
        z.keys = y.keys.splice(t, t - 1);
        z.values = y.values.splice(t, t - 1);

        if (!y.leaf) {
            z.children = y.children.splice(t, t);
        }
        
        this.children.splice(i + 1, 0, z);
        
        this.keys.splice(i, 0, y.keys.pop());
        this.values.splice(i, 0, y.values.pop());
    }
    
    prefixSearchNode(prefix, results) {
        let i = 0;
        for (i = 0; i < this.keys.length; i++) {
            if (this.keys[i] > prefix && !this.keys[i].startsWith(prefix)) {
                break;
            }
            if (!this.leaf) {
                this.children[i].prefixSearchNode(prefix, results);
            }
            if (this.keys[i].startsWith(prefix)) {
                results.push(this.values[i]);
            }
        }
        if (!this.leaf) {
            this.children[i].prefixSearchNode(prefix, results);
        }
    }
}

class BTree {
    constructor(t) {
        this.root = null;
        this.t = t;
    }

    insert(key, value) {
        if (this.root == null) {
            this.root = new BTreeNode(this.t, true);
            this.root.keys[0] = key;
            this.root.values[0] = value;
        } else {
            if (this.root.keys.length === 2 * this.t - 1) {
                const s = new BTreeNode(this.t, false);
                s.children[0] = this.root;
                s.splitChild(0, this.root);
                let i = 0;
                if (s.keys[0] < key) i++;
                s.children[i].insertNonFull(key, value);
                this.root = s;
            } else {
                this.root.insertNonFull(key, value);
            }
        }
    }
    
    remove(key) {
        if (!this.root) {
            console.log("A árvore está vazia.");
            return;
        }
        this.root.remove(key);
        if (this.root.keys.length === 0) {
            if (this.root.leaf) {
                this.root = null;
            } else {
                this.root = this.root.children[0];
            }
        }
    }

    search(key) {
        return this.root == null ? null : this.root.search(key);
    }
    
    prefixSearch(prefix) {
        const results = [];
        if (this.root && prefix) {
            this.root.prefixSearchNode(prefix.toLowerCase(), results);
        }
        return results;
    }
    
    traverse(callback) {
        if (this.root != null) this.root.traverse(callback);
    }
}

let btree;
let allGames = [];

function loadGames() {
    btree = new BTree(3);
    allGames = [...jogos]; 
    allGames.forEach(jogo => {
        btree.insert(jogo.titulo.toLowerCase(), jogo);
    });
    displayGames(allGames);
}

function displayGames(lista) {
    const results = document.getElementById("results");
    results.innerHTML = "";
    if (!lista || lista.length === 0) {
        results.innerHTML = "<p>Nenhum jogo encontrado.</p>";
        return;
    }
    const sortedList = [...lista].sort((a, b) => a.titulo.localeCompare(b.titulo));
    sortedList.forEach(jogo => {
        const card = document.createElement("div");
        card.className = "game-card";
        card.innerHTML = `
      <img src="${jogo.image}" alt="${jogo.titulo}" onerror="this.onerror=null;this.src='https://via.placeholder.com/200x140.png?text=Imagem+inválida';">
      <div class="card-content">
        <h4>${jogo.titulo}</h4>
        <p><strong>Gênero:</strong> ${jogo.genero}</p>
        <p><strong>Plataforma:</strong> ${jogo.plataforma}</p>
      </div>
      <button class="remove-btn" data-id="${jogo.id}">Remover</button>
    `;
        results.appendChild(card);
    });
}

function searchGame() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const platformFilter = document.getElementById("platformFilter").value.toLowerCase();

    let results = [];
    if (input.trim() === "") {
        results = [...allGames];
    } else {
        results = btree.prefixSearch(input);
    }

    if (platformFilter !== "") {
        results = results.filter(j => j.plataforma.toLowerCase().includes(platformFilter));
    }

    displayGames(results);
}

function addUserGame(event) {
    event.preventDefault();

    const title = document.getElementById('gameTitle').value;
    const genre = document.getElementById('gameGenre').value;
    const platform = document.getElementById('gamePlatform').value;
    const image = document.getElementById('gameImage').value;

    if (!title || !genre || !platform || !image) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    const newGame = {
        id: Date.now(),
        titulo: title,
        genero: genre,
        plataforma: platform,
        image: image
    };

    btree.insert(newGame.titulo.toLowerCase(), newGame);
    allGames.push(newGame);

    document.getElementById('addGameForm').reset();
    alert(`Jogo "${newGame.titulo}" adicionado com sucesso!`);
    displayGames(allGames);
}

function removeGameById(gameId) {
    const id = parseInt(gameId, 10);
    const gameIndex = allGames.findIndex(j => j.id === id);

    if (gameIndex === -1) {
        return;
    }

    const gameToRemove = allGames[gameIndex];
    const keyToRemove = gameToRemove.titulo.toLowerCase();

    btree.remove(keyToRemove);
    allGames.splice(gameIndex, 1);
    
    alert(`Jogo "${gameToRemove.titulo}" removido com sucesso!`);
    displayGames(allGames);
}


// Event Listeners
window.onload = () => {
    loadGames();

    document.getElementById('addGameForm').addEventListener('submit', addUserGame);

    document.getElementById('results').addEventListener('click', function(event) {
        if (event.target && event.target.classList.contains('remove-btn')) {
            const gameId = event.target.getAttribute('data-id');
            if (confirm("Tem certeza que deseja remover este jogo?")) {
                removeGameById(gameId);
            }
        }
    });
};