

const pesquisar = document.querySelector('#pesquisar')
const divMinhalista = document.getElementById('minhaLista');
const pesquisando = document.getElementById('pesquisando');




pesquisando.addEventListener('click', () => {
  pesquisar.style.display = "flex"
 pesquisando.style.display = "none"
fetch('https://sheetdb.io/api/v1/xe8dsai9xxogg')
  .then(response => response.json())
  .then(data => {
 
    // Evento de escuta para o campo de entrada
    pesquisar.addEventListener('input', (e) => {
      const searchTerm = e.target.value.toLowerCase();

      // Limpa a lista antes de adicionar itens filtrados
      divMinhalista.innerHTML = '';
    

      data.filter(item => item.Local_da_Obra.toLowerCase().includes(searchTerm)).forEach(item => {
        const descricao = document.createElement('p');
        const dia = document.createElement('p');
        const local = document.createElement('h2');
        const Responsavel = document.createElement('h4');
        descricao.textContent = item.Descrição_do_Trabalho;
        local.textContent = item.Local_da_Obra;
        dia.textContent = `Dia ${item.Dia}:`
        Responsavel.textContent = `${item.Nome_Do_Responsavel}`

        divMinhalista.appendChild(local);
        divMinhalista.appendChild(dia);
        divMinhalista.appendChild(descricao);
        divMinhalista.appendChild(Responsavel);
      });
    });
    
  })
  .catch(error => console.error('Erro:', error));
});

// pesquisando()