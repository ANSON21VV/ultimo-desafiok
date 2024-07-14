class generico{
    constructor(nome,idade,tippo){
        this.nome= nome
        this.idade= idade
        this.tippo= tippo
    } 
    TipoDano(){
        switch (this.tippo) {
            case "Mago":
                console.log("Mago atacou usando magia");
                break;
            case "Guerreiro":
                console.log("Guerreiro atacou usando espada ");
                break;
            case "Monge":
                console.log("Monge atacou usando artes marciais");
                break;
            case "Ninja":
                console.log("Ninja atacou usando shuriken");
                break;
                default:
                    console.log("Não identificamos o ataque")        
    
        }
    
    }
}




let her= new generico("ciri",24,"Mago")

her.TipoDano()

