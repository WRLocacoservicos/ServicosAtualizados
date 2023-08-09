
let btn = document.getElementById('btn');
let res = document.getElementById('res');
let rdo = document.querySelector('.rdo');
let obras = document.querySelector('.obras');
let ObAndamento = document.querySelector('.ObAndamento');
// let usuario = document.getElementById('user').value;


// res.innerHTML=`${usuario}`

function logar() {


  let User = document.getElementById('user').value
  let password = document.getElementById('password').value;

  const users =
  {
    name: 'ismaile',
    password: '1234',
    name2: 'Ruy',
    password2: '4321',
    name3: 'Alan',
    password3: '1243'
  }


  if (User === users.name && password === users.password) {
    location.href = './logado.html'
  } else if (User === users.name2 && password === users.password2) {
    location.href = './logado.html'
  } else if (User === users.name3 && password === users.password3) {
    location.href = './logado.html'
  } else {
    alert('SENHA INCORRETA')
  }



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


openAndamento.addEventListener('click', () => {
  if (ObAndamento) {
    ObAndamento.style.display = 'block'
    rdo.style.display = 'none'
    obras.style.display = 'none'
    Todo.style.display = 'none'

  }

})
openTodo.addEventListener('click', () => {
  if (Todo) {
    Todo.style.display = 'block'
    rdo.style.display = 'none'
    ObAndamento.style.display = 'none'
    obras.style.display = 'none'

  }

})



openRDO.addEventListener('click', () => {
  if (rdo) {
    rdo.style.display = 'flex'
    Todo.style.display = 'none'
    obras.style.display = 'none'
    ObAndamento.style.display = 'none'
  }
})
openObras.addEventListener('click', () => {
  if (openObras) {
    obras.style.display = 'flex'
    rdo.style.display = 'none'
    Todo.style.display = 'none'
    ObAndamento.style.display = 'none'
  }
})


loadItens()



//grafico
//  function go(){
//   let graficoCirculo = document.getElementById('graficoCirculo')
//   let circle = document.getElementById('circleProgress')
//   let number = document.getElementById('number').value
//   document.querySelector('.number').innerHTML = number + '%'

//   circle.style.strokeDashoffset =440 -  (440 * number / 100);
//   localStorage.setItem('progressValue', number); 
//  }

//  function loadFromLocalStorage() {
//   let savedValue = localStorage.getItem('progressValue');
//   if (savedValue !== null) {
//     document.getElementById('number').value = savedValue;
//     go(); // Chamando a função go() para atualizar o gráfico
//   }
// }

// // Chame essa função quando a página carregar
// window.onload = loadFromLocalStorage;


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












