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
    titulo: "Dia 1",
    imagem: "https://picsum.photos/200/300",
    link: "ingles/a2.mp4"
  },
  {
    titulo: "Dia 2",
    imagem: "https://picsum.photos/200/301",
    link: "ingles/a3.mp4"
  },
  {
    titulo: "Dia 3",
    imagem: "https://picsum.photos/200/302",
    link: "ingles/a4.jpg"
  },  
  {
    titulo: "Dia 4",
    imagem: "https://picsum.photos/200/301",
    link: "ingles/a5.jpg"
  },
  {
    titulo: "Dia 5",
    imagem: "https://picsum.photos/200/302",
    link: "ingles/a6.jpg"
  },  
  {
    titulo: "Dia 6",
    imagem: "https://picsum.photos/200/301",
    link: "ingles/a7.jpg"
  },
  {
    titulo: "Dia 7",
    imagem: "https://picsum.photos/200/302",
    link: "ingles/a8.jpg"
  },
  {
    titulo: "Dia 8",
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
