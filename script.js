





  
  const apiUrl = 'http://localhost:8080/socios';

  // Função para buscar os dados da API
  function buscarDadosDaAPI() {

    // Limpa a tabela antes de adicionar novos dados
    const tabela = document.getElementById('tabelaDados').getElementsByTagName('tbody')[0];
    tabela.innerHTML = '';
    
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao buscar os dados da API');
        }
        return response.json();
      })
      .then(data => {
        
        console.log(data);
  
        // Adiciona os novos dados à tabela
        data.forEach(socio => {
          const novaLinha = tabela.insertRow();
          novaLinha.insertCell(0).textContent = socio.id;
          novaLinha.insertCell(1).textContent = socio.nome;
          novaLinha.insertCell(2).textContent = socio.email;
          novaLinha.insertCell(3).textContent = socio.telefone;
  
            console.log(data);
        });
      })
      .catch(error => {
        console.error('Erro ao buscar os dados da API:', error);
      });
  }

