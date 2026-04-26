// ===============================
// FUNÇÃO PARA MOSTRAR DICAS
// ===============================
function mostrarDicas(lista) {

  let div = document.getElementById("listaIngles")
  div.innerHTML = ""

  for (let i = 0; i < lista.length; i++) {

    let dica = lista[i]

    div.innerHTML += `
      <div class="livro">

        <img src="${dica.imagem}" class="capa">

        <h3>${dica.titulo}</h3>

        <div class="linksBox">
          <a href="${dica.link}" target="_blank">🔗 Acessar</a>
        </div>

      </div>
    `
  }
}


// ===============================
// LISTA DE DICAS
// ===============================
let dicas = [
  {
    titulo: "Aprenda inglês básico",
    imagem: "https://picsum.photos/200/300",
    link: "https://google.com"
  },
  {
    titulo: "Verbos mais usados",
    imagem: "https://picsum.photos/200/301",
    link: "https://youtube.com"
  },
  {
    titulo: "Frases do dia a dia",
    imagem: "https://picsum.photos/200/302",
    link: "https://duolingo.com"
  },
  {
    titulo: "Dicas de pronúncia",
    imagem: "https://picsum.photos/200/303",
    link: "https://bbc.com"
  }
]

// ===============================
// VOLTAR
// ===============================
function voltar() {
  window.location.href = "index.html"
}

// INICIAL
mostrarDicas(dicas)
