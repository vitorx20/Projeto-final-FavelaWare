// Função para abrir o modal com detalhes do curso a partir do arquivo cursos_modal.json
document.addEventListener('click', function (event) {
    if (event.target.matches('.btn-primary')) {
      const cursoId = event.target.getAttribute('data-id');
  
      // Carrega os detalhes do modal a partir do JSON cursos_modal.json
      fetch('./data/cursos_modal.json')
        .then(response => response.json())
        .then(cursosModal => {
          const curso = cursosModal.find(c => c.id == cursoId);
          if (curso) {
            const modalContainer = document.createElement('div');
            modalContainer.innerHTML = `
              <!-- Modal para este curso -->
              <div class="modal fade" id="modalCurso${curso.id}" tabindex="-1" aria-labelledby="cursoModalLabel${curso.id}" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="cursoModalLabel${curso.id}">Detalhes do Curso</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      ${curso.imagem ? `<img src="${curso.imagem}" alt="Imagem de ${curso.titulo}" class="modal-img-top">` : ''}
                      <h4>${curso.titulo}</h4>
                      <ul>
                        <li><strong>Duração:</strong> ${curso.duracao}</li>
                        <li><strong>Pré-requisitos:</strong> ${curso.preRequisitos}</li>
                        <li><strong>Certificação:</strong> ${curso.certificacao}</li>
                      </ul>
                      <a href="Formulário Eletrônico para Matrículas na AOPA.html" class="btn btn-inscreva-se">Inscreva-se</a>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                    </div>
                  </div>
                </div>
              </div>
            `;
            document.body.appendChild(modalContainer);
  
            // Exibe o modal correspondente
            const modal = new bootstrap.Modal(document.getElementById(`modalCurso${curso.id}`));
            modal.show();
          }
        })
        .catch(error => console.error('Erro ao carregar os detalhes do curso:', error));
    }
  });
  