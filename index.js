class Contato{
    //Atributos;
    constructor() {
        this.nome = null;
        this.email = null;
        this.fone = null;
        this.mensagem = null;
        this.data_cadastro = new date(); /* pega data atual do sistema operacional */
        this.tipo_cadastro = null;
    }

    //Metodos;
    Enviar(){
        //if (nome esta vazio)mandar uma mensagem de erro;
        // o '===' valida o valor e tipo da variavel;
            
        this.nome = document.getElementById("nome").value;
        if (this.nome === ''){
        alert += ', nome';
        }
        this.email = document.getElementById("email").value;
        if (this.email === ''){
        alert += ', email';
        }
        this.fone = document.getElementById("fone").value;
        if (this.fone === ''){
        alert += ', fone';
        }
        this.mensagem = document.getElementById("mensagem").value;
        if (this.mensagem === ''){
        alert += ', mensagem';
        }
        //this.data_cadastro = new date()
        this.tipo_contato = document.getElementById("tipo_contato").value;
        if (this.tipo_contato === '')
        alert += ', tipo_contato';
        }

        if ('alert !=') 
            alert('Os seguintes campos estõ com problema' + alerta);
    }

}

let tale = document.getElementById('dados');
let linha = tabela.insertRow();
linha.insertCell();
linha.innerHtml = this.nome;
let linha = tabela.insertRow();
linha.insertCell();
linha.innerHtml = this.email;
let linha = tabela.insertRow();
linha.insertCell();
linha.innerHtml = this.fone;
let linha = tabela.insertRow();
linha.insertCell();
linha.innerHtml = this.mensagem;
let linha = tabela.insertRow();
linha.insertCell();
linha.innerHtml = this.tipo_cadastro;

// Instanciar a classe
contato = new Contato();

/*function submeter(){
    var alerta = document.getElementById("nome").value;
    alert("mensagem de aviso: " + alerta)
}
*/    
