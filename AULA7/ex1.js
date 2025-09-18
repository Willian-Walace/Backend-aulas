class Usuario{

    constructor(){
        this.usuario = null
        this.senha = null;
    }

    autentica(){
        const usuario = "admin"
        const senha = "admin123"
        if (this.usuario === usuario && this.senha === senha){
            console.log("Login realizado com sucesso!");
        }
        else{
            console.log("Usuário ou senha inválidos!");
        }
    }
}    

user = new Usuario();
user.usuario = "admin"
user.senha = "admin123"
user.autentica()