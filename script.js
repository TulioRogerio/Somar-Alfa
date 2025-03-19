document.addEventListener("DOMContentLoaded", function () {
    // Inserindo o menu diretamente via JavaScript
    document.getElementById("menu-container").innerHTML = `
<div class="sidebar">
    <h2>Menu</h2>
    <ul class="menu">
        <li>
            <a href="#" class="menu-item">Gestão de Usuários <span class="arrow">▼</span></a>
            <ul class="submenu">
                <li><a href="gestao-usuarios/cadastro.html">Cadastro</a></li>
                <li><a href="gestao-usuarios/ativacao-inativacao.html">Ativação e Inativação</a></li>
                <li><a href="gestao-usuarios/movimentacao.html">Movimentação</a></li>
                <li><a href="gestao-usuarios/funcoes.html">Funções</a></li>
                <li><a href="gestao-usuarios/log-atividades.html">Log de atividades</a></li>
            </ul>
        </li>

        <li>
            <a href="#" class="menu-item">Plano de Ação e Monitoramento <span class="arrow">▼</span></a>
            <ul class="submenu">
                <li><a href="plano-acao/diagnostico.html">Diagnóstico</a></li>
                <li><a href="plano-acao/problemas-desafios.html">Problemas e Desafios</a></li>
                <li><a href="plano-acao/mapa-acao.html">Mapa de Ação</a></li>
                <li><a href="plano-acao/teste-consistencia.html">Teste de Consistência</a></li>
                <li><a href="plano-acao/dashboard-progresso.html">Dashboard de Progresso</a></li>
            </ul>
        </li>

        <li>
            <a href="#" class="menu-item">Visitas Técnicas <span class="arrow">▼</span></a>
            <ul class="submenu">
                <li><a href="visitas-tecnicas/calendario.html">Calendário</a></li>
                <li><a href="visitas-tecnicas/agendamento.html">Agendamento</a></li>
                <li><a href="visitas-tecnicas/linha-tempo.html">Linha do Tempo</a></li>
                <li><a href="visitas-tecnicas/modelos-atas.html">Modelos de Atas</a></li>
            </ul>
        </li>

        <li>
            <a href="#" class="menu-item">Comunicação <span class="arrow">▼</span></a>
            <ul class="submenu">
                <li><a href="comunicacao/caixa-entrada.html">Caixa de Entrada</a></li>
                <li><a href="comunicacao/envio-mensagens.html">Envio de mensagens</a></li>
                <li><a href="comunicacao/relatorios-comunicacao.html">Relatórios de Comunicação</a></li>
                <li><a href="comunicacao/tutoriais.html">Tutoriais</a></li>
            </ul>
        </li>

        <li>
            <a href="#" class="menu-item">Painel de Controle e BI <span class="arrow">▼</span></a>
            <ul class="submenu">
                <li><a href="painel-controle/dashboards.html">Dashboards</a></li>
                <li><a href="painel-controle/indicadores-estruturantes.html">Indicadores Estruturantes</a></li>
                <li><a href="painel-controle/indicadores-execucao.html">Indicadores de Execução</a></li>
                <li><a href="painel-controle/resultados-avaliacoes.html">Resultados: Avaliações Externas</a></li>
                <li><a href="painel-controle/exportar-dados.html">Exportar dados</a></li>
            </ul>
        </li>

        <li>
            <a href="#" class="menu-item">Diagnóstico e Gestão de Dados <span class="arrow">▼</span></a>
            <ul class="submenu">
                <li><a href="diagnostico-gestao-dados/matriculas-abandono-aprovacao.html">Matrículas, abandono, aprovação</a></li>
                <li><a href="diagnostico-gestao-dados/avaliacoes-externas.html">Avaliações Externas</a></li>
                <li><a href="diagnostico-gestao-dados/distorcao-idade-serie.html">Distorção Idade-Série</a></li>
                <li><a href="diagnostico-gestao-dados/questoes-etnico-raciais.html">Questões Étnico-Raciais</a></li>
                <li><a href="diagnostico-gestao-dados/importar-exportar-dados.html">Importar/Exportar dados</a></li>
            </ul>
        </li>

        <li>
            <a href="#" class="menu-item">Indicadores e Relatórios <span class="arrow">▼</span></a>
            <ul class="submenu">
                <li><a href="indicadores-relatorios/indicadores-estruturantes.html">Indicadores Estruturantes<span class="arrow">▼</span></a>
                    <ul class="submenu">
                        <li><a href="indicadores-relatorios/aulas-frequencia.html">Aulas Dadas e Frequência</a></li>
                        <li><a href="indicadores-relatorios/proficiencia.html">Proficiência</a></li>
                    </ul>
                </li>
                <li><a href="indicadores-relatorios/indicadores-execucao.html">Indicadores de Execução<span class="arrow">▼</span></a></li>
                    <ul class="submenu">
                        <li><a href="indicadores-relatorios/atas.html">Atas</a></li>
                        <li><a href="indicadores-relatorios/tarefas.html">Tarefas</a></li>
                        <li><a href="indicadores-relatorios/produtos.html">Produtos</a></li>                      
                        <li><a href="indicadores-relatorios/planos-acao.html">Planos de Ação</a></li>
                        <li><a href="indicadores-relatorios/mapas-acao.html">Mapas de Ação</a></li>
                        <li><a href="indicadores-relatorios/teste-consistencia.html">Teste de Consistência</a></li>                      
                    </ul>
              
                <li><a href="indicadores-relatorios/exportar-relatorios.html">Exportar Relatórios</a></li>
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
