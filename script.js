document.addEventListener("DOMContentLoaded", function () {
    // Obtém a URL base do site
    let basePath = window.location.origin + "/";

    // Inserindo o menu diretamente via JavaScript
    document.getElementById("menu-container").innerHTML = `
<div class="sidebar">
    <h2>Somar Alfa 2</h2>
    <ul class="menu">
        <li>
            <a href="#" class="menu-item">Gestão de Usuários <span class="arrow">▼</span></a>
            <ul class="submenu">
                 à <li><a href="${basePath}/Somar-Alfa/gestao-usuarios/cadastro.html">Cadastro</a></li>
                 à <li><a href="${basePath}/Somar-Alfa/gestao-usuarios/ativacao-inativacao.html">Ativação e Inativação</a></li>
                 à <li><a href="${basePath}/Somar-Alfa/gestao-usuarios/movimentacao.html">Movimentação</a></li>
                 à <li><a href="${basePath}/Somar-Alfa/gestao-usuarios/funcoes.html">Funções</a></li>
                 à <li><a href="${basePath}/Somar-Alfa/gestao-usuarios/log-atividades.html">Log de atividades</a></li>
            </ul>
        </li>

        <li>
            <a href="#" class="menu-item">Plano de Ação e Monitoramento <span class="arrow">▼</span></a>
            <ul class="submenu">
                 à <li><a href="${basePath}/Somar-Alfa/plano-acao/diagnostico.html">Diagnóstico</a></li>
                 à <li><a href="${basePath}/Somar-Alfa/plano-acao/problemas-desafios.html">Problemas e Desafios</a></li>
                 à <li><a href="${basePath}/Somar-Alfa/plano-acao/mapa-acao.html">Mapa de Ação</a></li>
                 à <li><a href="${basePath}/Somar-Alfa/plano-acao/teste-consistencia.html">Teste de Consistência</a></li>
                 à <li><a href="${basePath}/Somar-Alfa/plano-acao/dashboard-progresso.html">Dashboard de Progresso</a></li>
            </ul>
        </li>

        <li>
            <a href="#" class="menu-item">Visitas Técnicas <span class="arrow">▼</span></a>
            <ul class="submenu">
                 à <li><a href="${basePath}/Somar-Alfa/visitas-tecnicas/calendario.html">Calendário</a></li>
                 à <li><a href="${basePath}/Somar-Alfa/visitas-tecnicas/agendamento.html">Agendamento</a></li>
                 à <li><a href="${basePath}/Somar-Alfa/visitas-tecnicas/linha-tempo.html">Linha do Tempo</a></li>
                 à <li><a href="${basePath}/Somar-Alfa/visitas-tecnicas/modelos-atas.html">Modelos de Atas</a></li>
            </ul>
        </li>

        <li>
            <a href="#" class="menu-item">Comunicação <span class="arrow">▼</span></a>
            <ul class="submenu">
                 à <li><a href="${basePath}/Somar-Alfa/comunicacao/caixa-entrada.html">Caixa de Entrada</a></li>
                 à <li><a href="${basePath}/Somar-Alfa/comunicacao/envio-mensagens.html">Envio de mensagens</a></li>
                 à <li><a href="${basePath}/Somar-Alfa/comunicacao/relatorios-comunicacao.html">Relatórios de Comunicação</a></li>
                 à <li><a href="${basePath}/Somar-Alfa/comunicacao/tutoriais.html">Tutoriais</a></li>
            </ul>
        </li>

        <li>
            <a href="#" class="menu-item">Painel de Controle e BI <span class="arrow">▼</span></a>
            <ul class="submenu">
                 à <li><a href="${basePath}/Somar-Alfa/painel-controle/dashboards.html">Dashboards</a></li>
                 à <li><a href="${basePath}/Somar-Alfa/painel-controle/indicadores-estruturantes.html">Indicadores Estruturantes</a></li>
                 à <li><a href="${basePath}/Somar-Alfa/painel-controle/indicadores-execucao.html">Indicadores de Execução</a></li>
                 à <li><a href="${basePath}/Somar-Alfa/painel-controle/resultados-avaliacoes.html">Resultados: Avaliações Externas</a></li>
                 à <li><a href="${basePath}/Somar-Alfa/painel-controle/exportar-dados.html">Exportar dados</a></li>
            </ul>
        </li>

        <li>
            <a href="#" class="menu-item">Diagnóstico e Gestão de Dados <span class="arrow">▼</span></a>
            <ul class="submenu">
                 à <li><a href="${basePath}/Somar-Alfa/diagnostico-gestao-dados/matriculas-abandono-aprovacao.html">Matrículas, abandono, aprovação</a></li>
                 à <li><a href="${basePath}/Somar-Alfa/diagnostico-gestao-dados/avaliacoes-externas.html">Avaliações Externas</a></li>
                 à <li><a href="${basePath}/Somar-Alfa/diagnostico-gestao-dados/distorcao-idade-serie.html">Distorção Idade-Série</a></li>
                 à <li><a href="${basePath}/Somar-Alfa/diagnostico-gestao-dados/questoes-etnico-raciais.html">Questões Étnico-Raciais</a></li>
                 à <li><a href="${basePath}/Somar-Alfa/diagnostico-gestao-dados/importar-exportar-dados.html">Importar/Exportar dados</a></li>
            </ul>
        </li>

        <li>
            <a href="#" class="menu-item">Indicadores e Relatórios <span class="arrow">▼</span></a>
            <ul class="submenu">
                <li><a href="#">Indicadores Estruturantes<span class="arrow">▼</span></a>
                    <ul class="submenu">
                         à <li><a href="${basePath}/Somar-Alfa/indicadores-relatorios/aulas-frequencia.html">Aulas Dadas e Frequência</a></li>
                         à <li><a href="${basePath}/Somar-Alfa/indicadores-relatorios/proficiencia.html">Proficiência</a></li>
                    </ul>
                </li>
                <li><a href="#">Indicadores de Execução<span class="arrow">▼</span></a></li>
                    <ul class="submenu">
                         à <li><a href="${basePath}/Somar-Alfa/indicadores-relatorios/atas.html">Atas</a></li>
                         à <li><a href="${basePath}/Somar-Alfa/indicadores-relatorios/tarefas.html">Tarefas</a></li>
                         à <li><a href="${basePath}/Somar-Alfa/indicadores-relatorios/produtos.html">Produtos</a></li>                      
                         à <li><a href="${basePath}/Somar-Alfa/indicadores-relatorios/planos-acao.html">Planos de Ação</a></li>
                         à <li><a href="${basePath}/Somar-Alfa/indicadores-relatorios/mapas-acao.html">Mapas de Ação</a></li>
                         à <li><a href="${basePath}/Somar-Alfa/indicadores-relatorios/teste-consistencia.html">Teste de Consistência</a></li>                      
                    </ul>
              
                 à <li><a href="${basePath}/Somar-Alfa/indicadores-relatorios/exportar-relatorios.html">Exportar Relatórios</a></li>
            </ul>
        </li>
    </ul>
</div>
    `;

    // Ativação dos eventos do menu (expandir/recolher)
    ativarEventosMenu();
});

// Função que ativa os submenus
function ativarEventosMenu() {
    let menuItems = document.querySelectorAll(".menu-item");

    menuItems.forEach(item => {
        item.addEventListener("click", function (event) {
            event.preventDefault(); // Evita comportamento padrão do link

            let submenu = this.nextElementSibling;
            
            if (submenu && submenu.classList.contains("submenu")) {
                // Fecha outros submenus no mesmo nível
                let parent = this.closest("ul");
                let submenusAbertos = parent.querySelectorAll(".submenu");
                
                submenusAbertos.forEach(sub => {
                    if (sub !== submenu) {
                        sub.style.maxHeight = null;
                        sub.previousElementSibling.classList.remove("active");
                    }
                });

                // Alterna o submenu atual
                if (submenu.style.maxHeight) {
                    submenu.style.maxHeight = null;
                    this.classList.remove("active");
                } else {
                    submenu.style.maxHeight = submenu.scrollHeight + "px";
                    this.classList.add("active");
                }
            }
        });
    });
}
