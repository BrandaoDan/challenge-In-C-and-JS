using System;

class oneChallenge {
    static void Main(){
        int indice = 13, soma = 0, k = 0;
        while (k<indice){
            k++, soma += k;
        }
        console.WriteLine("Resultado final da soma: " + soma);
    }
}