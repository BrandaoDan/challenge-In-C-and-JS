using System;

class twoChallenge {
    static bool seqFibonacci(int n){
        int a = 0, b = 1;
        while(a <= n) {
            if (a == n) return true;
            int temp = a + b;
            a = b, b = temp;
        }
        return false;
    }
    static void Main(){
        ConsoleWrite("insira um valor: ");
        int num = int.Parse(Console.ReadLine());
        ConsoleWriteLine(seqFibonacci(num) ? $"O numero {num} pertence a sequancia Fibonacci" : $"O Numero não pertence à sequencia Fibonacci.");
    }
}