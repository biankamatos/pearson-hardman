let nome = "Bianka"
// alert(nome)
console.log(nome);
 
const x = 10;
const lista = [1,2,3]
const objeto = {name: "Bianka", age:19} //JSON
 
console.log(x);
console.log(typeof x);
console.log("---------------------------------");
console.log(lista);
console.log(typeof lista);
console.log("----------------------------------");
console.log(objeto);
console.log(typeof objeto);
console.log(objeto.name);
console.log(lista[2]);
 
let opcao = true; // boolean

if (2 > 1){
    console.log("2 é maior que 1")
} else{
    console.log("2 não é maior que 1")
    
}
// Estrutura de Repetição
const arr = ["amora", "banana", "caju", "damasco"];
for (let i = 0; 1 < 4; i++){
    console.log('O Valor da repetição e '+ arr[i])
    // template literal, e o uso da crase ´´
}
 
// função
function soma(){
    console.log(22+11);
}
soma();
 
function calcula(a,b){
    console.log(a*b)
}
calcula(12,12);