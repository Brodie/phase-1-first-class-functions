
const myFunction = (num1, num2) => num1 + num2

const receivesAFunction = thing => thing()

const returnsANamedFunction = () => myFunction

const returnsAnAnonymousFunction = () => function() {return "string"}