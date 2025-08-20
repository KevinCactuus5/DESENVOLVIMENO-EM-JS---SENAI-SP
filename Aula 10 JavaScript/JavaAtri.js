class Pessoa {
  constructor(nome, idade, endereco, formacao) {
    this.nome = nome;
    this.idade = idade;
    this.endereco = endereco;
    this.formacao = formacao;
  }
  
  exibirDados() {
    console.log(`Nome: ${this.nome}`);
    console.log(`Idade: ${this.idade}`);
    console.log(`Endereço: ${this.endereco}`);
    console.log(`Formação: ${this.formacao}`);
  }
}

const pessoa1 = new Pessoa("James Rich", 26,
     "Rua Existente, 105", "Pescador");

     const pessoa2 = new Pessoa("Jassie Rocket", 28,
     "Rua Inexistente, 255", "caçadora");

pessoa1.exibirDados();
pessoa2.exibirDados();

