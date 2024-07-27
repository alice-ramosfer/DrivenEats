
let prato=null;
let bebida=null;
let sobremesa=null;
let nome_prato;
let nome_bebida;
let nome_sobremesa;
let total;


function selecionadoPrato(botao){
    const botaoSelecAntes = document.querySelector(".opcoes_produtos_prato .selecionado");
    if(botaoSelecAntes !== null){
        botaoSelecAntes.classList.remove("selecionado");
    }
    botao.classList.add("selecionado");
    verifica_selecinado();
}

function selecionadoBebida(botao){
    const botaoSelecAntes = document.querySelector(".opcoes_produtos_bebida .selecionado");
    if(botaoSelecAntes !== null){
        botaoSelecAntes.classList.remove("selecionado");
    }
    botao.classList.add("selecionado");
    verifica_selecinado();
    
}

function selecionadoSobremesa(botao){
    const botaoSelecAntes = document.querySelector(".opcoes_produtos_sobremesa .selecionado");
    if(botaoSelecAntes !== null){
        botaoSelecAntes.classList.remove("selecionado");
    }
    botao.classList.add("selecionado"); 
    verifica_selecinado();
    
}


function verifica_selecinado(){
    prato= document.querySelector(".opcoes_produtos_prato .selecionado p");
    bebida= document.querySelector(".opcoes_produtos_bebida .selecionado p");
    sobremesa= document.querySelector(".opcoes_produtos_sobremesa .selecionado p");
    if (prato!==null && bebida!==null && sobremesa!==null){
        let botao_fecharPedido=document.querySelector(".botao_fechar");
        botao_fecharPedido.classList.add("color_botaoFechar")
        botao_fecharPedido.innerHTML= "Fechar Pedido"
    }

}

function fecharPedido(){ 

    if (prato!==null && bebida!==null && sobremesa!==null){
        const telaFinal=document.querySelector(".tela_final");
        telaFinal.classList.add("abrir_telaFinal");
        const fundo_telaFinal=document.querySelector(".borrar_fundo");
        fundo_telaFinal.classList.add("fundo");
        let total_b=bebida.innerHTML;
        let total_p=prato.innerHTML;
        let total_s=sobremesa.innerHTML;
        
        total = (parseFloat(total_p.replace("R$", "").replace(",", ".").trim()))+(parseFloat(total_b.replace("R$", "").replace(",", ".").trim()))+(parseFloat(total_s.replace("R$", "").replace(",", ".").trim()));
        
        const prato_m= document.querySelector(".opcoes_produtos_prato .selecionado h1");
        const bebida_m= document.querySelector(".opcoes_produtos_bebida .selecionado h1");
        const sobremesa_m= document.querySelector(".opcoes_produtos_sobremesa .selecionado h1");
        
        let prato_selecionado=document.querySelector(".prato_selecionado");
        let total_prato_selecionado=document.querySelector(".total_prato_selecionado");
        let bebida_selecionado=document.querySelector(".bebida_selecionado");
        let total_bebida_selecionado=document.querySelector(".total_bebida_selecionado");
        let sobremesa_selecionado=document.querySelector(".sobremesa_selecionado");
        let total_sobremesa_selecionado=document.querySelector(".total_sobremesa_selecionado");

        nome_prato=prato_m.innerHTML;
        prato_selecionado.innerHTML= nome_prato;
        total_prato_selecionado.innerHTML=total_p;

        nome_bebida=bebida_m.innerHTML;
        bebida_selecionado.innerHTML=nome_bebida;
        total_bebida_selecionado.innerHTML=total_b;

        nome_sobremesa=sobremesa_m.innerHTML;
        sobremesa_selecionado.innerHTML=nome_sobremesa
        total_sobremesa_selecionado.innerHTML=total_s;

        let total_pedido=document.querySelector(".total");
        total=`${total.toFixed(2)}`
        total_pedido.innerHTML=`R$ ${(total.replace(".", ",").trim())}`;
    }
}

function enviarMensagem(){
    let number="55032991155879";
    let msg=`Olá, gostaria de fazer o pedido:\n
        - Prato: ${nome_prato}\n
        - Bebida: ${nome_bebida}\n
        - Sobremesa: ${nome_sobremesa}\n
        Total: R$ ${(total.replace(".", ",").trim())}`
    let link= `https://wa.me//${number}?text=${encodeURIComponent(msg)}`;
    window.open(link, '_blank');
}

function cancelarPedido(){
    const telaFinal=document.querySelector(".tela_final");
    telaFinal.classList.remove("abrir_telaFinal");
    const fundo_telaFinal=document.querySelector(".borrar_fundo");
    fundo_telaFinal.classList.remove("fundo");
}

