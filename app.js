function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById
    ("campo-pesquisa").value;

    if (!campoPesquisa) {
        section.innerHTML = "<p class='sem-resultados'>Nenhum Personagem Pesquisado</p>";
        return;
    }
  
     campoPesquisa = campoPesquisa .toLowerCase()

    // Inicializa uma string para armazenar o HTML dos resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre os dados da pesquisa e gera o HTML para cada resultado
    for (let dado of dados) {
        titulo = dado.titulo.toLocaleLowerCase()
        descricao = dado.descricao.toLocaleLowerCase()
        tags = dado.tags.toLocaleLowerCase()
          // Assumindo que tags é um array de strings
          const tagsArray = dado.tags;


        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)  ) {
            //cria um novo elemento
            resultados += `
            <div class="item-resultado">
              <h2>
                <a href="#" target="_blank">${dado.titulo}</a>
              </h2>
              <p class="descricao-meta">${dado.descricao}</p> 
              <a href="${dado.link} "target="_blank">Mais Informações</a>
            </div>`;
        }
        
    }

    if (!resultados) {
        resultados = "<p class='nenhum-resultado'>Nenhum Personagem Encontrado</p>";

    }
  
    // Atualiza o conteúdo da seção com os resultados gerados
    section.innerHTML = resultados;
  }



