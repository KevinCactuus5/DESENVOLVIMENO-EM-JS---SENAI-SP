class Retangulo {
  constructor(largura, altura) {
    this.largura = largura;
    this.altura = altura;
  }

  calcularArea() {
    return this.largura * this.altura;
  }

  calcularPerimetro() {
    return 2 * (this.largura + this.altura);
  }

  
  exibirDados() {
    console.log(`Largura: ${this.largura}`);
    console.log(`Altura: ${this.altura}`);
    console.log(`Área: ${this.calcularArea()}`);
    console.log(`Perímetro: ${this.calcularPerimetro()}`);
  }
}

const ret1 = new Retangulo(9, 15);
ret1.exibirDados();
