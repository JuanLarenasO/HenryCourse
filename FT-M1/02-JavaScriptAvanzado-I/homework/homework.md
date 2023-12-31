# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1;
var a = 5;
var b = 10;
var c = function (a, b, c) {
   var x = 10;
   console.log(x);// 10
   console.log(a);//8
   var f = function (a, b, c) {
      b = a;
      console.log(b);//8
      b = c;
      var x = 5;
   };
   f(a, b, c);
   console.log(b);//9
};
c(8, 9, 10);
console.log(b);//10
console.log(x);//1
```

```javascript
console.log(bar);// undefined
console.log(baz);//is not defined (nunca se hoisteo)
foo();//'Hola!'
function foo() {
   console.log('Hola!');
}
var bar = 1;
baz = 2;
```

```javascript
var instructor = 'Tony';
if (true) {
   var instructor = 'Franco';
}
console.log(instructor);// Franco, (Var permite que instructor permee el bloque de codigo)
```

```javascript
var instructor = 'Tony';
console.log(instructor);// Tony
(function () {
   if (true) {
      var instructor = 'Franco';
      console.log(instructor);// Franco
   }
})();
console.log(instructor);// Tony
```

```javascript
var instructor = 'Tony';
let pm = 'Franco';
if (true) {
   var instructor = 'The Flash';
   let pm = 'Reverse Flash';
   console.log(instructor);//The Flash
   console.log(pm);// Reverse Flash
}
console.log(instructor);// The Flash
console.log(pm);// Franco
```

### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px"//9px
"$" + 4 + 5 //'$45'
"4" - 2 // 2
"4px" - 2//NaN
7 / 0 // infinity
{}[0]//undefined
parseInt("09")//9
5 && 2//2
2 && 5//5
5 || 0//5
0 || 5//5
[3]+[3]-[10] // NaN
3>2>1//false
[] == ![]// false
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).

### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a);//undefined, ya que en el caso de las variables declaradas solo se hoistean con su identificador y se inicializan con el valor primitivo undefined 
   console.log(foo()); // 2, ya que en el caso de la funciones, las funciones se hoistean no solo con su identificador si no que con su contenido. 

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
   if (food) {
      var snack = 'Friskies';
      return snack;
   }
   return snack;//
}

getFood(false);// undefined, ya que como argumento que se ingresa es false, el cual pasa como condicion en un if, eso quiere deci que el if anidado en la Fn no acciona, entonces la variable snack nunca entra en juego. Y al momento de retonar algo la funcion, identifica que snack nunca fue declarada e incializada.
```

### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function () {
         return this.fullname;
      },
   },
};

console.log(obj.prop.getFullname());//Aurelio De Rosa

var test = obj.prop.getFullname;

console.log(test());//undefined, ya que la manera en que test esta siendo invocada, situa a funcion getFullname como si no estuviera siendo invocada metodo perteneciente a un objeto, esto quiere decir que this no esta  siendo asociado a ningun explicitamente a un valor, lo cual genera que el this se establezca en el objeto global en modo no estricto, o devuelva undefined en el modo estricto.
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() { // 1, 4, 3, 2.
   console.log(1);
   setTimeout(function () {
      console.log(2);
   }, 1000);
   setTimeout(function () {
      console.log(3);
   }, 0);
   console.log(4);
}

printing();
```

</br >

---

## **✅ FEEDBACK**

### Usa este [**formulario**](https://docs.google.com/forms/d/e/1FAIpQLSe1MybH_Y-xcp1RP0jKPLndLdJYg8cwyHkSb9MwSrEjoxyzWg/viewform) para reportar tus observaciones de mejora o errores. Tu feedback es muy importante para seguir mejorando el modelo educativo.
