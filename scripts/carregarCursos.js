// Carrega os cursos da JSON principal
fetch('./data/cursos.json')
  .then(response => response.json())
  .then(cursos => {
    const container = document.getElementById('cursos-container');
    cursos.forEach(curso => {
      const article = document.createElement('article');
      article.classList.add('col-md-6', 'col-lg-4', 'mb-4');

      // Cria o card de cada curso
      article.innerHTML = `
        <div class="card h-100">
          <header class="card-header text-center">${curso.titulo}</header>
          <img src="${curso.imagem}" alt="Imagem de ${curso.titulo}" class="card-img-top" />
          <div class="card-body">
            <h4 class="card-title">${curso.titulo}</h4>
            <p class="card-text">${curso.descricao}</p>
            <button class="btn btn-primary" data-id="${curso.id}" data-bs-toggle="modal" data-bs-target="#modalCurso${curso.id}">Saiba mais</button>
          </div>
        </div>
      `;
      container.appendChild(article);
    });
  })
  .catch(error => console.error('Erro ao carregar os cursos:', error));
