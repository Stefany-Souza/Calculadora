let numero1  = parseInt(prompt('Escolha um número inteiro '))
let sinal = prompt('Escolha a operação que deseja efetuar com esses números (+, -, * ou /) ')
let numero2  = parseInt(prompt('Escolha outro número inteiro '))

if (sinal === "+") {alert(`Seu resultado é ${numero1 + numero2}`)
}
else if (sinal === "-") {alert(`Seu resultado é ${numero1 - numero2}`)
}
else if (sinal === "*") {alert(`Seu resultado é ${numero1 * numero2}`)
} 
else if (sinal === "/") {alert(`Seu resultado é ${numero1 / numero2}`)
}
