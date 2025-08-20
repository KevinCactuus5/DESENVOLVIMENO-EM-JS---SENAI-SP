class Calculadora{
    
      somar(a,b){
      return a + b


      }
        subtrair(a,b){
       return a - b


      }


        dividir(a,b){


            return a / b
      


      }


        multiplicar(a, b){
        return a * b     
 
      }




}



c = new Calculadora()


console.log(c.somar(20,30))
console.log(c.dividir(20,30).toFixed())
console.log(c.multiplicar(20,30))
console.log(c.subtrair(20,30))