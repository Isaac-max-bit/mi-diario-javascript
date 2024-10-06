function fibonacciList(n) {
    const fib = [0, 1];
    
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    
    return fib.slice(0, n); // Retorna solo los primeros `n` números
}

// Ejemplo de uso
console.log(fibonacciList(40)); // Devuelve [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
