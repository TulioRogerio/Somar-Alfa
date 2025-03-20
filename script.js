  document.addEventListener("DOMContentLoaded", function () {
    // Obtém a URL base do site
    let basePath = window.location.origin + "/Somar-Alfa/";

    // Inserindo o menu diretamente via JavaScript
    document.getElementById("menu-container").innerHTML = `
      <div class="sidebar">
        <h2>Somar Alfa 2</h2>
        <ul class="menu">

          <li>
            <a href="\${basePath}/index.html" class="menu-item">Início</a>
          </li>

          <li>
            <a href="#" class="menu-item">Gestão de Usuários <span class="arrow">▼</span></a>
            <ul class="submenu">
              <li><a href="\${basePath}gestao-usuarios/cadastro.html">Cadastro</a></li>
              <li><a href="\${basePath}gestao-usuarios/ativacao-inativacao.html">Ativação e Inativação</a></li>
              <li><a href="\${basePath}gestao-usuarios/movimentacao.html">Movimentação</a></li>
              <li><a href="\${basePath}gestao-usuarios/funcoes.html">Funções</a></li>
              <li><a href="\${basePath}gestao-usuarios/log-atividades.html">Log de atividades</a></li>
            </ul>
          </li>

          <li>
            <a href="#" class="menu-item">Plano de Ação e Monitoramento <span class="arrow">▼</span></a>
            <ul class="submenu">
              <li><a href="\${basePath}plano-acao/diagnostico.html">Diagnóstico</a></li>
              <li><a href="\${basePath}plano-acao/problemas-desafios.html">Problemas e Desafios</a></li>
              <li><a href="\${basePath}plano-acao/mapa-acao.html">Mapa de Ação</a></li>
              <li><a href="\${basePath}plano-acao/teste-consistencia.html">Teste de Consistência</a></li>
              <li><a href="\${basePath}plano-acao/produtos.html">Produtos</a></li>
              <li><a href="\${basePath}plano-acao/status.html">Status</a></li>
            </ul>
          </li>

          <li>
            <a href="#" class="menu-item">Indicadores de Execução <span class="arrow">▼</span></a>
            <ul class="submenu">
              <li><a href="\${basePath}indicadores-execucao/frequencia.html">Frequência</a></li>
              <li><a href="\${basePath}indicadores-execucao/proficiencia.html">Proficiência</a></li>
            </ul>
          </li>

          <li>
            <a href="#" class="menu-item">Visitas Técnicas <span class="arrow">▼</span></a>
            <ul class="submenu">
              <li><a href="\${basePath}visitas-tecnicas/calendario.html">Calendário</a></li>
              <li><a href="\${basePath}visitas-tecnicas/atas.html">Upload de Atas</a></li>
              <li><a href="\${basePath}visitas-tecnicas/exportar-atas.html">Visualização de Atas</a></li>
              <li><a href="\${basePath}visitas-tecnicas/modelos-atas.html">Modelos de Atas</a></li>
            </ul>
          </li>

          <li>
            <a href="#" class="menu-item">Comunicação <span class="arrow">▼</span></a>
            <ul class="submenu">
              <li><a href="\${basePath}comunicacao/caixa-entrada.html">Caixa de Entrada</a></li>
              <li><a href="\${basePath}comunicacao/envio-mensagens.html">Envio de mensagens</a></li>
              <li><a href="\${basePath}comunicacao/relatorios-comunicacao.html">Relatórios de Comunicação</a></li>
              <li><a href="\${basePath}comunicacao/tutoriais.html">Tutoriais</a></li>
            </ul>
          </li>

          <li>
            <a href="#" class="menu-item">Painéis e BI <span class="arrow">▼</span></a>
            <ul class="submenu">
              <li><a href="\${basePath}painel-controle/dashboards.html">Dashboards</a></li>
              <li><a href="\${basePath}painel-controle/resultados-avaliacoes.html">Resultados: Avaliações Externas</a></li>
              <li><a href="\${basePath}painel-controle/afa.html">AFA</a></li>
              <li><a href="\${basePath}painel-controle/v_fluencia-leitora.html">Verificação de Fluência Leitora</a></li>
              <li><a href="\${basePath}painel-controle/exportar-dados.html">Exportar dados</a></li>
            </ul>
          </li>

          <li>
            <a href="#" class="menu-item">SAAR <span class="arrow">▼</span></a>
            <ul class="submenu">
              <li><a href="\${basePath}saar/config.html">Configurações dos Ciclos</a></li>
              <li><a href="\${basePath}saar/Ciclo1.html">Ciclo 1</a></li>
              <li><a href="\${basePath}saar/Ciclo2.html">Ciclo 2</a></li>
              <li><a href="\${basePath}saar/Balanco_final.html">Balanço Final</a></li>
            </ul>
          </li>

          <li>
            <a href="#" class="menu-item">Acompanhamento de Processos <span class="arrow">▼</span></a>
            <ul class="submenu">
              <li><a href="\${basePath}acompanhamento-de-processos/Regional.html">Acompanhamento Regional</a></li>
              <li><a href="\${basePath}acompanhamento-de-processos/Municipal.html">Acompanhamento Municipal</a></li>
            </ul>
          </li>

        </ul>
      </div>
    `;

    // Ativação dos eventos do menu
    ativarEventosMenu();
  });

  // Função para ativar submenus
  function ativarEventosMenu() {
    let menuItems = document.querySelectorAll(".menu-item");

    menuItems.forEach(item => {
      item.addEventListener("click", function (event) {
        // Verifica se há um submenu logo após este link
        let submenu = this.nextElementSibling;

        // Somente previne o comportamento padrão se existir submenu:
        if (submenu && submenu.classList.contains("submenu")) {
          event.preventDefault();

          // Fecha outros submenus no mesmo nível
          let parent = this.closest("ul");
          let submenusAbertos = parent.querySelectorAll(".submenu");
          submenusAbertos.forEach(sub => {
            // Fecha todos menos o submenu atual
            if (sub !== submenu) {
              sub.style.maxHeight = null;
              if (sub.previousElementSibling) {
                sub.previousElementSibling.classList.remove("active");
              }
            }
          });

          // Abre/fecha o submenu atual
          if (submenu.style.maxHeight) {
            submenu.style.maxHeight = null;
            this.classList.remove("active");
          } else {
            submenu.style.maxHeight = submenu.scrollHeight + "px";
            this.classList.add("active");
          }
        }
        // Se não tiver submenu, cai fora e deixa o link funcionar normalmente
      });
    });
  }
