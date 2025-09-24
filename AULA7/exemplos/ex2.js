class usuario{

    constructor(){
        this.login;
        this.senha;
        this.cpf;   
        this.celular;
    }

    exibir_info(){
        console.log(`Nome do usuário: ${this.nome}`);
        console.log(`Login: ${this.login}`);
        console.log(`Senha: ${this.senha}`);
        console.log(`CPF: ${this.cpf}`);
        console.log(`Celular: ${this.celular}`);
    }

    verifica_login(user,senha){
        if (user === this.login && senha === this.senha){
            console.log("Login realizado com sucesso! , seja bem vindo(a) " + this.nome);
        }
        else{
            console.log("Usuário ou senha inválidos!");
        }
    }    
}

Usuario1 = new usuario();
Usuario1.nome = "Ana";
Usuario1.login = "ana123";
Usuario1.senha = "ana123";
Usuario1.cpf = "123.456.789-00";
Usuario1.celular = "(11) 91234-5678";
Usuario1.exibir_info();
Usuario1.verifica_login("ana123","ana12");