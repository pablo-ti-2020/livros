// ===============================
// FUNÇÃO PARA RENDERIZAR LIVROS
// ===============================
function mostrar(listaFiltrada) {

  let lista = document.getElementById("lista")
  lista.innerHTML = ""

  for (let i = 0; i < listaFiltrada.length; i++) {

    let livro = listaFiltrada[i]

    lista.innerHTML += `
      <div class="livro">

        <!-- IMAGEM -->
        <img src="${livro.imagem}" class="capa">

        <!-- TITULO -->
        <h3>${livro.titulo}</h3>
        <p>${livro.categoria}</p>

        <!-- SUBCARD AUDIO -->
        <div class="audioBox">
          <p>🎧 Resumo em áudio</p>
          <audio controls src="${livro.audio}"></audio>
        </div>

        <!-- SUBCARD LINKS -->
        <div class="linksBox">
          <a href="${livro.pdf}" target="_blank">📄 PDF</a>
          <a href="${livro.youtube}" target="_blank">▶️ Audiolivro</a>
        </div>

      </div>
    `
  }
}


// ===============================
// FILTROS
// ===============================
function filtrarCategoria(cat) {

  if (cat === "todos") {
    mostrar(livros)
    return
  }

  let filtrados = []

  for (let i = 0; i < livros.length; i++) {
    if (livros[i].categoria.toLowerCase() === cat) {
      filtrados.push(livros[i])
    }
  }

  mostrar(filtrados)
}


function buscar() {

  let texto = document.getElementById("busca").value.toLowerCase()
  let filtrados = []

  for (let i = 0; i < livros.length; i++) {

    let livro = livros[i]

    if (
      livro.titulo.toLowerCase().includes(texto) ||
      livro.categoria.toLowerCase().includes(texto)
    ) {
      filtrados.push(livro)
    }
  }

  mostrar(filtrados)
}


// ===============================
// LISTA DE LIVROS (OBJETO FINAL)
// ===============================
let livros = [

  {
    titulo: "A Odisseia",
    categoria: "fantasia",
    imagem: "https://tocalivros.s3.amazonaws.com/images/audiolivros/200/a/-/a-odisseia-homero-1048714.jpg",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    pdf: "https://www.dominiopublico.gov.br/download/texto/bn000002.pdf",
    youtube: "https://www.youtube.com/watch?v=AXIseb1w69Q"
  },

  {
    titulo: "O Alquimista",
    categoria: "filosofia",
    imagem: "https://www.fflch.usp.br/sites/fflch.usp.br/files/2023-12/Capa%20O%20alquimista.jpg",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    pdf: "https://www.pdfdrive.com/o-alquimista-e187547254.html",
    youtube: "https://www.youtube.com/watch?v=-7vsi2WL9Lw"
  },

  {
    titulo: "A Divina Comedia",
    categoria: "fantasia",
    imagem: "https://tocalivros.s3.amazonaws.com/images/audiolivros/200/a/-/a-divina-comedia-dante-alighieri-jose-pedro-xavier-pinheiro-1048562.jpg",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    pdf: "https://www.pdfdrive.com/game-of-thrones-e187547252.html",
    youtube: "https://www.youtube.com/watch?v=e46VHHXzX_A"
  },


  {
    titulo: "Entre deuses e monstros",
    categoria: "fantasia",
    imagem: "https://m.media-amazon.com/images/I/91h74NzbZCL._AC_UF1000,1000_QL80_.jpg",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    pdf: "https://www.pdfdrive.com/game-of-thrones-e187547252.html",
    youtube: "https://www.youtube.com/watch?v=1RJJ3P79aEs&list=PLjQNMUXdBChAE1QFqH7fukWCVoEUHcUuk"
  },
  {
    titulo: "Game of Thrones",
    categoria: "fantasia",
    imagem: "https://down-br.img.susercontent.com/file/22486b8724790b12894326aafe26846d",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    pdf: "https://www.pdfdrive.com/game-of-thrones-e187547252.html",
    youtube: "https://www.youtube.com/watch?v=e_jWyz2pdRc&list=PLT78GeVq1FMjmQZyjQqIheq6Ee8D377QA"
  },
  {
    titulo: "Porque as Zebras Não Têm Úlceras",
    categoria: "auto-ajuda",
    imagem: "https://i.ytimg.com/vi/xAtfAsyOOxk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBUt7Yy2euAcalR0PuIZ39P3tY2nw",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    pdf: "https://www.pdfdrive.com/game-of-thrones-e187547252.html",
    youtube: "https://www.youtube.com/watch?v=xAtfAsyOOxk"
  },

  {
    titulo: "A Revolução dos Bichos",
    categoria: "filosofia",
    imagem: "https://m.media-amazon.com/images/I/91BsZhxCRjL.jpg",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    pdf: "https://www.dominiopublico.gov.br/download/texto/bn000002.pdf",
    youtube: "https://www.youtube.com/watch?v=P71PBJxR0TA"
  }

]

// INICIAL
mostrar(livros)
