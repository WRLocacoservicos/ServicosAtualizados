

function logar() {


  let User = document.getElementById('user').value
  let password = document.getElementById('password').value;



  const users =
  {
    name: 'Admin',
    password: '1234',
  }


  if (User === users.name && password === users.password) {
    location.href = './logado.html'
  } else {
    dialog.showModal()
  }
}
const dialog = document.querySelector('dialog')
const Btn = document.querySelector('#fechar')

function Close() {
  dialog.close()
}

var button = document.querySelector('button');
button.addEventListener('touchstart', function () {
  button.classList.add('hover');
});
button.addEventListener('touchend', function () {
  button.classList.remove('hover');
});
