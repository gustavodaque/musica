document.addEventListener("DOMContentLoaded", () => {
    displayMusic(); // Exibir músicas ao carregar a página

    const form = document.getElementById("musicForm");
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Impede o envio do formulário

        const title = document.getElementById("title").value;
        const artist = document.getElementById("artist").value;
        const genre = document.getElementById("genre").value;
        const duration = document.getElementById("duration").value;
        const link = document.getElementById("link").value;

        const music = {
            title,
            artist,
            genre,
            duration,
            link
        };

        addMusic(music); // Adiciona a música
        form.reset(); // Limpa o formulário
    });
});

function addMusic(music) {
    let musicList = JSON.parse(localStorage.getItem("musicList")) || []; // Recupera a lista do localStorage
    musicList.push(music); // Adiciona a nova música
    localStorage.setItem("musicList", JSON.stringify(musicList)); // Armazena de volta no localStorage
    displayMusic(); // Atualiza a lista exibida
}

function displayMusic() {
    const musicList = JSON.parse(localStorage.getItem("musicList")) || []; // Recupera a lista
    const musicListElement = document.getElementById("musicList");
    musicListElement.innerHTML = ""; // Limpa a lista atual

    musicList.forEach(music => {
        const li = document.createElement("li");
        li.innerHTML = `
            <strong>Título:</strong> ${music.title}<br>
            <strong>Artista:</strong> ${music.artist}<br>
            <strong>Gênero:</strong> ${music.genre}<br>
            <strong>Duração:</strong> ${music.duration} min<br>
            <strong>Link:</strong> <a href="${music.link}" target="_blank">Ouvir</a>
        `;
        musicListElement.appendChild(li); // Adiciona a música à lista
    });
}
