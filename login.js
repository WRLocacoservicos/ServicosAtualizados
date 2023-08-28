

function logar() {


    let User = document.getElementById('user').value
    let password = document.getElementById('password').value;


  
    const users =
    {
      name: 'Admin',
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
      logado()
    }   
    }
  
    
    function logado() { 
      swal.fire({
  
          icon: "error",
          title: "Senha incorreta"
      });
      }