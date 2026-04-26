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
    link: "ingles/a2.mp4"
  },
  {
    titulo: "Verbos mais usados",
    imagem: "https://picsum.photos/200/301",
    link: "ingles/a3.mp4"
  },
  {
    titulo: "Frases do dia a dia",
    imagem: "https://picsum.photos/200/302",
    link: "ingles/a4.jpg"
  },  
  {
    titulo: "Verbos mais usados",
    imagem: "https://picsum.photos/200/301",
    link: "ingles/a5.jpg"
  },
  {
    titulo: "Frases do dia a dia",
    imagem: "https://picsum.photos/200/302",
    link: "ingles/a6.jpg"
  },  
  {
    titulo: "Verbos mais usados",
    imagem: "https://picsum.photos/200/301",
    link: "ingles/a7.jpg"
  },
  {
    titulo: "Frases do dia a dia",
    imagem: "https://picsum.photos/200/302",
    link: "ingles/a8.jpg"
  },
  {
    titulo: "Dicas de pronúncia",
    imagem: "https://picsum.photos/200/303",
    link: "ingles/a2.mp4"
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
