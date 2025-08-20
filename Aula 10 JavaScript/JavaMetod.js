class ContaBancaria {
  constructor(titular, saldoInicial = 0) {
    this.titular = titular;
    this.saldo = saldoInicial;
  }

  depositar(valor) {
    if (valor <= 0) {
      console.log("O valor do depósito deve ser positivo.");
      return;
    }
    this.saldo += valor;
    console.log(`Depósito de R$${valor.toFixed(2)} realizado com sucesso.`);
  }

  sacar(valor) {
    if (valor <= 0) {
      console.log("O valor do saque deve ser positivo.");
      return;
    }
    if (valor > this.saldo) {
      console.log("Saldo insuficiente para realizar o saque.");
      return;
    }
    this.saldo -= valor;
    console.log(`Saque de R$${valor.toFixed(2)} realizado com sucesso.`);
  }

  exibirSaldo() {
    console.log(`Titular: ${this.titular}`);
    console.log(`Saldo atual: R$${this.saldo.toFixed(2)}`);
  }
}

const conta1 = new ContaBancaria("Maria Oliveira", 500);

conta1.exibirSaldo();  
conta1.depositar(200); 
conta1.sacar(150);     
conta1.exibirSaldo();  
