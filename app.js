
//variable
let numeroSecreto = 0;
let intentos = 0; 
let listaNumerosSorteados = []; 
let numeroMax = 10;
let intentosMax = 3;
let contador = 1;

//funciones
function asignarTextoElemento(elemento, texto)
{
    //Elemento html es la variable a la que se le va a asignar el selector
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return; 
}

function verificarIntento()
{
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value); 
    if (numeroDeUsuario == numeroSecreto)
    {
        asignarTextoElemento ("p", `¡Acertaste el número! en: ${intentos} ${(intentos === 1) ? "intento" : "intentos"}`);
        //cualquiera de los dos es válido
        document.querySelector("#reiniciar").removeAttribute("disabled");
        //document.getElementById("reiniciar").removeAttribute("disabled");
        limpiarCaja();
        contador ++;
    }
    //El usuario no acertó
    else
    {
        if (numeroDeUsuario > numeroSecreto)
        {
            asignarTextoElemento("p", "El número secreto es menor.");
        }
        else
        {
            asignarTextoElemento("p", "El número secreto es mayor.");
        }
        intentos ++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja()
{
    //para usar un querySelector por ID se usa el "#" (gato o numeral) para identificarlo
    document.querySelector("#valorUsuario").value = "";
    return;
}

function generarNumeroSecreto()
{
    let numeroGenerado = Math.floor(Math.random()*numeroMax) + 1; 

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    //preguntar a la función si ya sorteamos todos los numeros
    /*
    //se compara si el tamaño del array es igual al del número máximo
    if(listaNumerosSorteados.length == numeroMax)
    {
        asignarTextoElemento("p","Ya se sortearon todos los números");
    } */
    //Condición con un numero máximo de intentos
    if(intentosMax == contador)
    {
        asignarTextoElemento("p",`Hiciste ${intentosMax} es el máximo para adivinar números !`);
    }
    else
    {
        //Si el número generado está incluido en la lista se hace una operacion
        if (listaNumerosSorteados.includes(numeroGenerado))
        {
            return generarNumeroSecreto();
        }
        else 
        {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales()
{
    asignarTextoElemento("h1", "Juego del número Secreto!");
    asignarTextoElemento("p", `Indica un número del 1 al ${numeroMax}`); 
    intentos = 1; 
    numeroSecreto = generarNumeroSecreto();
}

function reiniciarJuego()
{
    //limpiar la caja 
    limpiarCaja(); 
    //condiciones Iniciales mensajes iniciales, reiniciar contador, generar un nuevo número secreto
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.getElementById("reiniciar").setAttribute("disabled", true);

}

condicionesIniciales();



/*
//////////////////////////// Desafíos //////////////////////////////////////////

//Función que muestre hola mundo en la consola

function holaMundo() 
{
    let hola = "Hola mundo!"; 
    console.log(hola);
    return;
}

holaMundo();


//Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.

function holaNombre(nombre) 
{
    console.log(`¡Hola, ${nombre}!`);
    return;
}

holaNombre("Jesus");

//Crear una función que reciba un número como parámetro y devuelva el doble de ese número. 

function numeroDoble(numero) 
{
    let doble = numero * 2; 
    return console.log(doble); 
}
numeroDoble(10);

//Crear una función que reciba un número como parámetro y devuelva el doble de ese número

function promedio(uno, dos, tres)
{
    let promedioNumeros = (uno + dos + tres)/3;
    console.log(promedioNumeros);
    return;
}
promedio(10, 90, 100);

//Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.

function mayorQue(num1, num2)
{
    if(num1 > num2)
    {
        console.log("El número mas grande es: " + num1);
    }
    else 
    {
        console.log("El número mas grande es: " +num2);
    }
    return; 
}
mayorQue(20,100);

//Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.

function cuadrado(exp)
{
    let exponente = Math.pow(exp, 2);
    console.log(exponente);
    return;
}
cuadrado(10); 
*/

//////////////////////////// Desafíos //////////////////////////////////////////
/*

//Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de 
// su altura en metros y peso en kilogramos, que se recibirán como parámetros
let r = 0;
function calcularIMC (peso, altura)
{
    let resultado = peso/(Math.pow(altura, 2));
    return console.log(resultado);  
}

calcularIMC (97,1.83); 

//Crea una función que calcule el valor del factorial de un número pasado como parámetro.
//analizarlo de forma seria
function calcularFactorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    } else {
      return numero * calcularFactorial(numero - 1);
    }
  }
  // Ejemplo de uso
  let numero = 5;
  let resultado = calcularFactorial(numero);
  console.log(`El factorial de ${numero} es ${resultado}`);

//Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,
//si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.

function convertidorDolares(dolares)
{
    var cambio = 4.80; 
    var reales = dolares * cambio; 

    return reales; 
}

let dolar = 50; 
let cambioReales = convertidorDolares(dolar); 
console.log(`tu cambio de ${dolar} dolares a reales es de ${cambioReales}`);

//Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, 
// utilizando la altura y la anchura que se proporcionarán como parámetros.

function area (base, altura)
{
    var calculoArea = base * altura;
    return calculoArea;
}

let baseRectangulo = 10; 
let alturaRectangulo = 20; 

let areaRectangulo = area(baseRectangulo, alturaRectangulo); 

console.log(`la base del rectangulo es de ${baseRectangulo} y la altura es de ${alturaRectangulo}. Dando como area ${areaRectangulo}`); 

//Crea una función que muestre en pantalla el área y el perímetro de una sala circular,
//  utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.

function areaCirculo (radio)
{
    var calculoAreaCirculo = ((Math.pow(radio,2)) * Math.PI);
    return calculoAreaCirculo; 
}

let radioCirculo = 10; 
let areaCirc = areaCirculo(radioCirculo);
console.log("el área del círculo es de " + areaCirc);

//Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
function tablaMultiplicar (numero)
{
    for(var i =1; i<= 10; i++)
    {
        var multi = numero * i; 
        console.log(`${numero} x ${i} = ${multi}`);
    }
}

let numeroMultiplicar = 10; 
let tabla = tablaMultiplicar(numeroMultiplicar); */


/*
//////////////////////////// Desafíos //////////////////////////////////////////

//Crea una lista vacía llamada "listaGenerica".
let listaGenerica = []; 
let suma = 0; 
//Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
let lenguajesDeProgramacion = ["javaScript", "C", "C++", "Kotlin", "Python"]; 

//Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.

lenguajesDeProgramacion.push("Java", "Ruby", "GoLang");


//Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
function consultaElementos()
{
    for(var i = 0; i < lenguajesDeProgramacion.length; i++)
    {
        console.log(`El elemento de la lista es: ${lenguajesDeProgramacion[i]}`);

    }
    return;
}

consultaElementos();

//Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
console.log(lenguajesDeProgramacion[lenguajesDeProgramacion.length - 1]);
function consultaElementosInversa()
{
    for(var i = lenguajesDeProgramacion.length; i > 0 ; i--)
    {
        console.log(`El elemento inverso es: ${lenguajesDeProgramacion[i]}`);
    }
}
consultaElementosInversa(); 

//Crea una función que calcule el promedio de los elementos en una lista de números;

function calcularPromedio(lista)
{
    let sumaPromedio = 0; 
    for(var i = 0; i < lista.length; i++)
    {
        sumaPromedio += lista[i]; 
    }
    return sumaPromedio / lista.length; 
}
let listaNumeros = [10,100,30,40,50]
let mostrarPromedio = calcularPromedio(listaNumeros); 
console.log("el promedio es: ", mostrarPromedio);

//Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.

function compararNumeroGrandePequeño(lista)
{
    let comparaMayor = lista[0]; 
    let comparaMenor = lista[0];
    
    for(var i = 0; i < lista.length; i++)
    {
        console.log(lista[i]);
        console.log(comparaMayor);
        console.log(comparaMenor);

        if(lista[i] > comparaMayor)
        {
            comparaMayor = lista[i]; 
        }
        if (lista[i] < comparaMenor)
        {
            comparaMenor = lista[i]
        }
    }

    return console.log(`El número más grande es: ${comparaMayor} y el mas pequeño es: ${comparaMenor}`); 
}

let numeros = [15, 8, 25, 5, 12];

compararNumeroGrandePequeño(numeros);

//Crea una función que devuelva la suma de todos los elementos en una lista.

function sumaLista(lista)
{
    let sumaList = 0; 
    for(var i = 0; i < lista.length; i++)
    {
        sumaList += lista[i]; 
    }
    return console.log("La suma de la lista es: "+sumaList);
}
let ListaParaSumar = [70, 76, 12, 2, 90, 1000];
sumaLista(ListaParaSumar);

//Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado 
// como parámetro, o -1 si no existe en la lista.

function busquedaEnLaLista(lista, elemento)
{
    for(var i = 0; i < lista.length; i++)
    {
        if(lista[i] === elemento)
        {
            return i;
        }
    }
    return -1;  
}
busquedaEnLaLista(ListaParaSumar, 91);


//ANALIZAR ESTOS ULTIMOS DOS.
//Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva
//  lista con la suma de los elementos uno a uno.

function sumarListas(lista1, lista2) {
    return lista1.map((num, index) => num + lista2[index]);
}

const lista1 = [1, 2, 3];
const lista2 = [4, 5, 6];
const resultado = sumarListas(lista1, lista2);
console.log(resultado);  

//Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.

function cuadradoLista(lista) {
    return lista.map(num => num ** 2);
}

const listaCuadrados = [2, 3, 4];
const resultado1 = cuadradoLista(listaCuadrados);
console.log(resultado1); */
