

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
      logado()
    }   
    }
  
    
    function logado() { 
      swal.fire({
  
          icon: "error",
          title: "Senha incorreta"
      });
      }