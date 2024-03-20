const studentName = prompt("Digite o nome do(a) aluno(a): ")
let firstGrade = prompt("Digite a nota do primeiro bimestre: ")
let secondGrade = prompt("Digite a nota do segundo bimestre: ")
let thirdGrade = prompt("Digite a nota do terceiro bimestre: ")

//transformando as entradas string em number
firstGrade = Number(firstGrade)
secondGrade = Number(secondGrade)
thirdGrade = Number(thirdGrade)

//calculando a média e mantendo apenas dois numeros depois da virgula
let average = (firstGrade + secondGrade + thirdGrade) / 3
average = average.toFixed(1)

//Guardando o valor boolean da média, se for >= 6 = TRUE, senão FALSE
let result = average >= 6

//Usando o valor boolean de result para mostrar as mensagens na tela
if (result) {
  alert("Parabéns " + studentName +", você passou! Sua nota média foi: " + average +". Nos vemos no próximo ano.")
} else if (average < 4) {
  alert("Reprovado") 
} else { 
  alert(studentName + " prepare-se para a recuperação. Sua nota média foi: " + average)
}
