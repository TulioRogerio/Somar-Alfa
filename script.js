document.addEventListener("DOMContentLoaded", function () {
    // Obtém a URL base do site
    let basePath = window.location.origin + "/Somar-Alfa/";

    // Inserindo o menu diretamente via JavaScript
    document.getElementById("menu-container").innerHTML = `
<div class="sidebar">
    <h2>Somar Alfa 2</h2>
    <ul class="menu">
<li>
     <a href="${basePath}/index.html" class="menu-item">Início</a>                        
            <a href="#" class="menu-item">Gestão de Usuários <span class="arrow">▼</span></a>
            <ul class="submenu">
                 <li><a href="${basePath}/gestao-usuarios/cadastro.html">Cadastro</a></li>
                 <li><a href="${basePath}/gestao-usuarios/ativacao-inativacao.html">Ativação e Inativação</a></li>
                 <li><a href="${basePath}/gestao-usuarios/movimentacao.html">Movimentação</a></li>
                 <li><a href="${basePath}/gestao-usuarios/funcoes.html">Funções</a></li>
                 <li><a href="${basePath}/gestao-usuarios/log-atividades.html">Log de atividades</a></li>
            </ul>
        </li>

        <li>
            <a href="#" class="menu-item">Plano de Ação e Monitoramento <span class="arrow">▼</span></a>
            <ul class="submenu">
                 <li><a href="${basePath}/plano-acao/diagnostico.html">Diagnóstico</a></li>
                 <li><a href="${basePath}/plano-acao/problemas-desafios.html">Problemas e Desafios</a></li>
                 <li><a href="${basePath}/plano-acao/mapa-acao.html">Mapa de Ação</a></li>
                 <li><a href="${basePath}/plano-acao/teste-consistencia.html">Teste de Consistência</a></li>
                 <li><a href="${basePath}/plano-acao/produtos.html">Produtos</a></li>
                 <li><a href="${basePath}/plano-acao/dashboard-progresso.html">Dashboard de Progresso</a></li>
            </ul>
        </li>

        <li>
            <a href="#" class="menu-item">Indicadores de Execução<span class="arrow">▼</span></a>
            <ul class="submenu">
                 <li><a href="${basePath}/indicadores-execucao/frequencia.html">Frequência</a></li>
                 <li><a href="${basePath}/indicadores-execucao/proficiencia.html">Proficiência</a></li>                 
            </ul>
        </li>
        
        <li>
            <a href="#" class="menu-item">Visitas Técnicas <span class="arrow">▼</span></a>
            <ul class="submenu">
                 <li><a href="${basePath}/visitas-tecnicas/agendamento.html">Agendamento de V.T.</a></li>
                 <li><a href="${basePath}/visitas-tecnicas/atas.html">Upload de Atas</a></li>
                 <li><a href="${basePath}/visitas-tecnicas/exportar-atas.html">Visualização de Atas</a></li>
                 <li><a href="${basePath}/visitas-tecnicas/modelos-atas.html">Modelos de Atas</a></li>
            </ul>
        </li>

        <li>
            <a href="#" class="menu-item">Comunicação <span class="arrow">▼</span></a>
            <ul class="submenu">
                 <li><a href="${basePath}/comunicacao/caixa-entrada.html">Caixa de Entrada</a></li>
                 <li><a href="${basePath}/comunicacao/envio-mensagens.html">Envio de mensagens</a></li>
                 <li><a href="${basePath}/comunicacao/relatorios-comunicacao.html">Relatórios de Comunicação</a></li>
                 <li><a href="${basePath}/comunicacao/tutoriais.html">Tutoriais</a></li>
            </ul>
        </li>

        <li>
            <a href="#" class="menu-item">Painéis e BI <span class="arrow">▼</span></a>
            <ul class="submenu">
                 <li><a href="${basePath}/painel-controle/dashboards.html">Dashboards</a></li>
                 <li><a href="${basePath}/painel-controle/indicadores-estruturantes.html">Indicadores Estruturantes</a></li>
                 <li><a href="${basePath}/painel-controle/resultados-avaliacoes.html">Resultados: Avaliações Externas</a></li>
                 <li><a href="${basePath}/painel-controle/exportar-dados.html">Exportar dados</a></li>
                 <li><a href="${basePath}/painel-controle/afa.html">AFA</a></li>
                 <li><a href="${basePath}/painel-controle/v_fluencia-leitora.html">Verificação de Fluência Leitora</a></li>
            </ul>
        </li>

        <li>
            <a href="#" class="menu-item">Diagnóstico e Gestão de Dados <span class="arrow">▼</span></a>
            <ul class="submenu">
                 <li><a href="${basePath}/diagnostico-gestao-dados/matriculas-abandono-aprovacao.html">Matrículas, abandono, aprovação</a></li>
                 <li><a href="${basePath}/diagnostico-gestao-dados/avaliacoes-externas.html">Avaliações Externas</a></li>
                 <li><a href="${basePath}/diagnostico-gestao-dados/distorcao-idade-serie.html">Distorção Idade-Série</a></li>
                 <li><a href="${basePath}/diagnostico-gestao-dados/questoes-etnico-raciais.html">Questões Étnico-Raciais</a></li>
                 <li><a href="${basePath}/diagnostico-gestao-dados/importar-exportar-dados.html">Importar/Exportar dados</a></li>
            </ul>
        </li>

        <li>
            <a href="#" class="menu-item">Indicadores e Relatórios <span class="arrow">▼</span></a>
            <ul class="submenu">
                <li><a href="#">Indicadores Estruturantes<span class="arrow">▼</span></a>
                    <ul class="submenu">
                         <li><a href="${basePath}/indicadores-relatorios/aulas-frequencia.html">Aulas Dadas e Frequência</a></li>
                         <li><a href="${basePath}/indicadores-relatorios/proficiencia.html">Proficiência</a></li>
                    </ul>
                </li>
                <li><a href="#">Indicadores de Execução<span class="arrow">▼</span></a></li>
                    <ul class="submenu">
                         <li><a href="${basePath}/indicadores-relatorios/atas.html">Atas</a></li>
                         <li><a href="${basePath}/indicadores-relatorios/tarefas.html">Tarefas</a></li>
                         <li><a href="${basePath}/indicadores-relatorios/produtos.html">Produtos</a></li>                      
                         <li><a href="${basePath}/indicadores-relatorios/planos-acao.html">Planos de Ação</a></li>
                         <li><a href="${basePath}/indicadores-relatorios/mapas-acao.html">Mapas de Ação</a></li>
                         <li><a href="${basePath}/indicadores-relatorios/teste-consistencia.html">Teste de Consistência</a></li>                      
                    </ul>
              
                 <li><a href="${basePath}/indicadores-relatorios/exportar-relatorios.html">Exportar Relatórios</a></li>
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
