// Excercise 1: Values
// Number types
console.log("int", 1995)
console.log("float", 12.22)
console.log("exp", 1.621e4)

// Arithmetic
console.log("operator precedence as irl", 10 + 5 * 4) // 30
console.log("manual precedence", (10 + 5) * 4) // 60
console.log("modulo/remainder", 60 % 9)

// other number types
console.log("infinito", Infinity)
console.log("-infinito", -Infinity)
console.log("Nan", 0 / 0, NaN)

// strings / text
console.log("doble comilla");
console.log('una comilla');
console.log(`backticks(?)`);
console.log("importan las 'primeras' `nada mas`");
console.log(`saltos de linea
    solo con backticks`);
console.log("caracteres especiales con diagonal \" ");
console.log("tambien saltos\nde linea o \ttabulaciones");
console.log("solo diagonal \\");

console.log("concatenar " + "texto");
console.log(`template literals con backticks ie:${ 100 / 2 }`);

// Unary Operators
console.log("typeof 9 =>", typeof 9)
console.log("typeof g =>", typeof "f")
console.log("typeof {} =>", typeof {})
console.log("typeof [] =>", typeof [])
console.log("negative => ", -(2+3))

// Booleans
console.log(8 > 4)
console.log(5 < 2)
console.log("B" < "a") // true, mayusculas son menores por su valor unicode
console.log("B" != "a")
console.log("B" == "a")
console.log("Nan == Nan?", NaN == NaN) // no es igual a si mismo

// Logical operators
console.log(true && false)
console.log(false || true)
console.log(!false)

// ternary
console.log(false ? "no": 33)

// empty values
console.log(null)
console.log(undefined)
console.log(null == null)
console.log(null == undefined)
console.log(undefined == undefined)


// Value conversion / coercion
console.log(8 * null) // 0
console.log("5" - 1) // 4
console.log("5" + 1) // "51"
console.log("five" * 2) // NaN
console.log(false == 0) // true
console.log(null == 0) // false
console.log("truthy? ", "" == null) // false
console.log("false only ", 0 === false) // false

// short circuiting
// right side is only evaluated if necessary
console.log("right side: ", null || "value")
console.log("left side: ", "User" || "value")

console.log("left side: ", 0 ?? true)
console.log("right side: ", null ?? 0)

console.log("left side: ", false && "pk")
console.log("right side: ", 33 && "pk")
