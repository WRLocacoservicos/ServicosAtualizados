
let btn = document.getElementById('btn');
let res = document.getElementById('res');
let rdo = document.querySelector('.rdo');
let obras = document.querySelector('.obras');
let ObAndamento = document.querySelector('.ObAndamento');
let btnRDOs = document.querySelector('#btnRDO');




document.querySelector('form').addEventListener('submit', function uploadImage(event) {
  event.preventDefault();
  var data = new FormData(event.target);
  fetch('https://sheetdb.io/api/v1/xe8dsai9xxogg', {
      method: 'POST',
      body: data
  }).then(function(response) {
    uploadImage()
    alerta()
   
  });
})

function alerta() {
  Swal.fire({
    // position: 'top-end',
    icon: 'success',
    title: 'Salvo com sucesso',
    showConfirmButton: false,
    timer: 1500
  })
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

var form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    var inputs = form.querySelectorAll('input');
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = '';
    }
});


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