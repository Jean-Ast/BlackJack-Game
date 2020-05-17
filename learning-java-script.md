# Notes

*Object*
- A way to store data
- Pair key words
- The data could be the any type
**When we would use an arry vs an object**
- To be ordered
- When dont have properties

*Notations*
- dot notation:
A way for accessing object properties. More use for strings <!-- obj.property>
- blacket notation:
Is a way for do the same thing of dot notation but can handle expressions or functions. Allow "strings", "weird characters", numbers, variables and expressions. <!-- obj['property']>

*Metodo*
Es una función almacenada en una propiedad del objeto.

*Polyfill*
Codigo que provee una nueva caracteristica de JavaScript (ES6), en versiones viejas como ES5. Es decir, utilizar caracteristicas de una nueva version en una vieja version.

*Formas de ingreso de informacion del usuario*
Son formas de poder interactuar con el usuario pero que ya son antiguas pues existe librerias modernas que lo manejan de una forma más bonita.
- alert('text');
- promp('¿Cuál es su nombre?','Escriba su nombre');
- confir('¿Seguro de que desea borrar el archivo?')
*Tipos de datos primitivos*
![primitivos](C:\JeanAM\OnlineCourses\06- JavaScript\01-fundamentos\primitos.png)
En Java Scritp todo se considera un objeto excepto los tipos primitivos.
El objetivo de un tipo de datos _Symbol_ es identificar propiedades de manera única.

*Palabras reservadas*
Son palabras que deben utilizarse solo para lo que fueron creadas.

*Arreglos*
<!-- Recorrer el arreglo -->
juegos.forEach((elemento,indice,arr) =>{
    console.log({elemento, indice, arr});
})

<!-- Agrega un elemento al final del arreglo -->
arreglo.push('_elemento_');

<!-- Agrega un elemento al principio del arreglo -->
arreglo.unshift('_elemento_');

*Objeto literal*
Son objetos que tienen pares de valores


*DOM*
Es un forma de tener acceso a nuestros elementos y poder manipularlos.
Por ejemplo: <html>, <body> y <div> serían elementos que podemos manipular por el DOM
_Propiedad importante_ document.querySelector => Nos permite recuperar el primer elemento que cumple la condicion que yo le especifico y el document.querySelectorAll recupera todos los elementos que cumplen con la condicion
innerText: Permite poner texto dentro de una etiqueta
innerHTML:Agrega etiquetas html

*Callback*: Funcion que se manda como argumento

















## Comandos aprendidos
_console.log('%c Mis variables','color:red');_ //Esto es codigo css que puede servir como titulo de referencia en la consola
_console.table({v1,v2,v3});_ //Nos crea una tabla de las variables que introduzcamos con su nombre y dato almacenado. Recibe un objeto o un arreglo
_ctrl + l_ //Limpia la terminal de vs code

### DOM
document.querySelector('_tag_') <!-- Toma como parametro una etiqueta de html para manipular ese elemento. NOTA: Puede tomar una clase o un id tambien>
document.querySelectorAll('_tag_') <!-- Toma todos los elementos de la etiqueta que pongamos como parametro para aplicarle cambios>
document.queryselector('_tag_').innerText = '' o document.queryselector('_tag_'),innerHTML = '' <!-- El primero es para cambiar el texto de la etiqueta que pongamos como parametro y el segundo cambia la etiqueta html>
document.createElement('_tag_') <!-- Crea una etiqueta>
document.body.append( _tag_ ) <!-- Agrega la etiqueta al final del body>

## Buenas prácticas

### Donde poner los scripts
Es bueno que los scripts estén al final del html (antes de finalizar el body) porque si el archivo js es muy pesado o tiene un código que bloquea la ejecución de js nuestro sitio web no se va a renderizar hasta que el archivo Java Script termine.

### Mostrar mensajes en consola
Nos permite saber como se encuentra nuestro programa en un momento determinado

### Problemas al declarar variables con (var)
El let y el cost no sobrescriben las variables que se encuentran en el objecto global de windows, por eso es mejor no utilizar var porque estas si lo sobrescriben.

### Nombre de archivos
Los servidores de la mayoria de las paginas web trabajan en base a Linux que son key sensitive y los programadores normalmente crean las paginas webs en navegadores que no son key sensitive, por lo tanto una buena práctica es nombrar a los archivos: _nombre-archivo.js_