
let btn = document.getElementById('btn');

let rdo = document.querySelector('.rdo');
let ObAndamento = document.querySelector('.ObAndamento');
let btnRDOs = document.querySelector('#btnRDO');
let mensagem = document.querySelector('.mensagem');







document.querySelector('form').addEventListener('submit', function uploadImage(event) {
  event.preventDefault();
  var data = new FormData(event.target);
  fetch('https://sheetdb.io/api/v1/xe8dsai9xxogg', {
    method: 'POST',
    body: data
  }).then(function (response) {
    enviado()
    mensagem.showModal()
  });
})



function CloseMensagem() {
  mensagem.close()
}

function enviado() {
  let audio = new Audio('../audio/enviado.mp3')
  audio.play()
}

//todo

const texto = document.querySelector('#todolist')
const Todo = document.querySelector('.to-do')
const btnInsert = document.querySelector('.divInsert button')
const btnDeleteAll = document.querySelector('.header button')
const novaTarefa = document.querySelector('.novatarefa')

var itensDB = []

btnDeleteAll.onclick = () => {
  itensDB = []
  updateDB()
}

texto.addEventListener('keypress', e => {
  if (e.key == 'Enter' && texto.value != '') {
    setItemDB()
  }
})

btnInsert.onclick = () => {
  if (texto.value != '') {
    setItemDB()
  }
}

function setItemDB() {
  if (itensDB.length >= 20) {
    alert('Limite máximo de 20 itens atingido!')
    return
  }

  itensDB.push({ 'item': texto.value, 'status': '' })
  updateDB()
}

function updateDB() {
  localStorage.setItem('todolist', JSON.stringify(itensDB))
  loadItens()
}

function loadItens() {
  novaTarefa.innerHTML = "";
  itensDB = JSON.parse(localStorage.getItem('todolist')) ?? []
  itensDB.forEach((item, i) => {
    insertItemTela(item.item, item.status, i)
  })
}

function insertItemTela(text, status, i) {
  const P = document.createElement('li')


  P.innerHTML = `
    <div class="divLi">
      <input type="checkbox" ${status} data-i=${i} onchange="done(this, ${i});" />
      <span data-si=${i}>${text}</span>
      <button onclick="removeItem(${i})" data-i=${i}><i class='bx bx-trash'></i></button>
    </div>
    `
  novaTarefa.appendChild(P)

  if (status) {
    document.querySelector(`[data-si="${i}"]`).classList.add('line-through')
  } else {
    document.querySelector(`[data-si="${i}"]`).classList.remove('line-through')
  }

  texto.value = ''
}

function done(chk, i) {

  if (chk.checked) {
    itensDB[i].status = 'checked'
  } else {
    itensDB[i].status = ''
  }

  updateDB()
}

function removeItem(i) {
  itensDB.splice(i, 1)
  updateDB()
}
let openTodo = document.querySelector("#openTodo")
let openRDO = document.querySelector("#openRDO")
let openObras = document.querySelector("#openObras")
let openAndamento = document.querySelector("#openAndamento")
let googlesheet = document.querySelector("#minhaLista")
let footer = document.querySelector("footer")


openAndamento.addEventListener('click', () => {
  
    ObAndamento.style.display = 'block'
    rdo.style.display = 'none'
    Todo.style.display = 'none'

})
openTodo.addEventListener('click', () => {
  if (Todo) {
    Todo.style.display = 'block'
    rdo.style.display = 'none'
    ObAndamento.style.display = 'none'
    footer.style.display = 'none'

  }

})

var form = document.querySelector('form');
form.addEventListener('submit', function (event) {
  event.preventDefault();
  var inputs = form.querySelectorAll('input');
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].value = '';
  }
});


openRDO.addEventListener('click', () => {

  rdo.style.display = 'flex'
  Todo.style.display = 'none'
  ObAndamento.style.display = 'none'
  footer.style.display = 'block'
})
// 


loadItens()



//menu celular
const closeBtn = document.querySelector(".close-btn");
const openBtn = document.querySelector(".open-btn");

function openNav() {
  document.querySelector('.ul').style.left = '0';
  closeBtn.style.display = 'block'
  openBtn.style.display = 'none'


}
function closeNav() {
  document.querySelector('.ul').style.left = '-100%';
  closeBtn.style.display = 'none'
  openBtn.style.display = 'block'
}
//PDF
const canva = document.getElementById('print')
const imprimirPDF = document.getElementById('imprime')
const dialog = document.querySelector('dialog')
function pdf() {

  const resposta = document.getElementById('res')
  const dia = document.getElementById('dia').value
  const local = document.getElementById('Local').value
  const descricao = document.getElementById('descricao').value
  const inicio = document.getElementById('inicio').value
  const fim = document.getElementById('fim').value
  const paralizacao = document.getElementById('Paralizacao').value
  const Insumos = document.getElementById('Insumos').value
  const Encarregado = document.getElementById('Encarregado').value
  const Líder = document.getElementById('Líder').value
  const Pintor = document.getElementById('Pintor').value
  const ajudante = document.getElementById('ajudante').value
  const Soldador = document.getElementById('Soldador').value
  const Mecânico_Montador = document.getElementById('Mecânico_Montador').value
  const Caldeireiro = document.getElementById('Caldeireiro').value
  const Munk = document.getElementById('Munk').value
  const Responsável = document.getElementById('Responsável').value

  const valoresHTML = `
<div id="imprime">
<h2>Relatorios</h2>
<br>
<p>Data: ${dia}</p>
<p>Descrição do Trabalho: ${descricao}</p>
<p>Local da Obra: ${local}</p>
<p>Inicio: ${inicio}</p>
<p>Fim: ${fim}</p>
<p>Paralizacao: ${paralizacao}</p>
<p>Insumos: ${Insumos}</p>
<br>
<h2>Quantidade de funcionários</h2>
<br>
<p>Encarregado: ${Encarregado}</p>
<p>Líder: ${Líder}</p>
<p>Pintor: ${Pintor}</p>
<p>Ajudante: ${ajudante}</p>
<p>Soldador: ${Soldador}</p>
<p> Mecânico_Montador: ${Mecânico_Montador}</p>
<p>Caldeireiro: ${Caldeireiro}</p>
<p>Munk: ${Munk}</p>
<p>Responsável: ${Responsável}</p>
<button onclick="gerarPDF()" id="gerar">Gerar PDF</butoon>
</div>
`;


  document.getElementById('res').innerHTML = valoresHTML;



  dialog.showModal()



}
function voltarRDO() {

  dialog.close()


}
function gerarPDF() {

  const conteudo = document.getElementById('imprime').innerHTML;
  let estilo = "<style>";
  estilo += "#imprime {width: 800px; font-size: 25px; font-family: Calibri;}"
  estilo += "#gerar {display:none}"
  estilo += "</style>";

  const win = window.open('', '', 'height=900,width=900');
  win.document.write('<html><head>');
  win.document.write('<title>PDF</title>');
  win.document.write(estilo);
  win.document.write('</head><body>');
  win.document.write(conteudo);
  win.document.write('</body></html>');

  win.print()
}
