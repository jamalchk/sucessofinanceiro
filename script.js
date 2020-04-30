/*
    O usuário deverá informar o salário (como valor float).

    Deste montante, faremos o cálculo para cada uma das categorias abaixo:
    1. Gastos essenciais (55% do salário)
        - 
    
    2. Aposentadoria (10% do montante)
        -
    
    3. Educação (5% do montante)
    
    4. Planos pessoais (20% do montante)
        - Objetivos de curto, médio e longo prazo

    5. Dinheiro livre (10% do montante)
        -


MODO DE PREPARO
================

1. Faça inicialmente a reserva de 30% do salário: 
- 10% que vão para a aposentadoria 
- 20% para os planos de curto prazo (até 2 anos), médio prazo (2 a 7) e longo prazo (acima de 8 anos) 

2. 55% de tudo que você ganha vai para o que é essencial:
se você consegue viver com 55% do que ganha, você tá bem. 

3. 5% vai para a sua educação:
- para aprimorar seus conhecimentos, para aumentar seu valor de mercado, que cursos você pode fazer? Quais livros você pode comprar?

4. Os últimos 10%:
- Você gasta com o que você quiser. É a recompensa por ter feito tudo certo nas outras porcentagens.

*/

let campoSalario = document.querySelector('#salario');
let botaoCalcular = document.querySelector('.formulario__enviar');

function calcular(){
    let salario = parseFloat(campoSalario.value);
    
    if(!salario){
        salario = 0;
    }
    
    let resultados = {
        essencial:      salario * 0.55,
        aposentadoria:  salario * 0.1,
        educacao:       salario * 0.05,
        planosPessoais: salario * 0.2,
        dinheiroLivre: function(){
            return salario - (this.essencial + this.aposentadoria + this.educacao + this.planosPessoais);
        }
    }

    let exibicao = {
        essencial:      document.querySelector('.resultado__essencial       .valor'),
        aposentadoria:  document.querySelector('.resultado__aposentadoria   .valor'),
        educacao:       document.querySelector('.resultado__educacao        .valor'),
        planosPessoais: document.querySelector('.resultado__planos-pessoais .valor'),
        dinheiroLivre:  document.querySelector('.resultado__dinheiro-livre  .valor')
    }

    let exibicaoArray = Object.values(exibicao);

    for(let i = 0; i < exibicaoArray.length; i++){
        exibicaoArray[i].classList.add('animar-valores-da-tabela');
    }

    exibicao.essencial.     innerText = resultados.essencial.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'});
    exibicao.aposentadoria. innerText = resultados.aposentadoria.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'});
    exibicao.educacao.      innerText = resultados.educacao.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'});
    exibicao.planosPessoais.innerText = resultados.planosPessoais.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'});
    exibicao.dinheiroLivre. innerText = resultados.dinheiroLivre().toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'});
}

botaoCalcular.addEventListener('click', calcular);
