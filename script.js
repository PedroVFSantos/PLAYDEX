let jogos = [];

async function loadGames() {
  const response = await fetch('jogos.json');
  jogos = await response.json();
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

  const filtered = jogos.filter(jogo => {
    const titleMatch = jogo.titulo.toLowerCase().includes(input);
    const platformMatch = platformFilter === "" ? true : jogo.plataforma.toLowerCase().includes(platformFilter);
    return titleMatch && platformMatch;
  });

  displayGames(filtered);
}

window.onload = () => {
  loadGames();
};
