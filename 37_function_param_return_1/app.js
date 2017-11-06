
console.log("###### one ########");
// one();
//
console.log("###### hello ########");
console.log(hello());


console.log("###### dummyReturn ########");
console.log(dummyReturn(42));


console.log("###### foo ########");
console.log(foo());


console.log("###### helloWho ########");
console.log(helloWho("Gui"));
var greetings = helloWho("Jill");


console.log("###### isNumber ########");
console.log(isNumber(55));
console.log(isNumber(NaN));
console.log(isNumber("Joe's Bar"));


console.log("###### contraire ########");
console.log(contraire(true));
console.log(contraire(23));


console.log("###### isEmpty ########");
console.log(isEmpty("abc")); // false
console.log(isEmpty([])); // true
console.log(isEmpty({})); // true
console.log(isEmpty(["a", "b", "c"])); // false
