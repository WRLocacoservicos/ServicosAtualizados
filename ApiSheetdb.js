
fetch('https://sheetdb.io/api/v1/xe8dsai9xxogg')
  .then(response => response.json())
  .then(data => {
    const divMinhalista = document.getElementById('minhaLista');
    data.forEach(item => {
      const descricao = document.createElement('p');
      const dia = document.createElement('p');
      const local = document.createElement('h2');
      descricao.textContent = item.Descrição_do_Trabalho;
      local.textContent = item.Local_da_Obra;
      dia.textContent = `Dia ${item.Dia}`
    //   p.textContent = item.Dia; 
    divMinhalista.appendChild(local);
    divMinhalista.appendChild(dia);
      divMinhalista.appendChild(descricao);
      console.log(
        item.Dia

      )
    });
  })
  .catch(error => console.error('Erro:', error));
