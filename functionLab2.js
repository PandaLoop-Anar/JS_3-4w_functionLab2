/*
1.	შემოიტანეთ ფუნქცია სახელწოდებით product და დეკლარირებისას მიანიჭეთ ორი არგუმენტი. ფუნქცია  გამოითვლის ამ ორი არგუმენტის ნამრავლს. არგუმენტებს მნიშვნელობები მიენიჭებათ ფუნქციის გამოძახებისას. (1 ქულა)
*/
const product = function(weight, price){
    console.log(weight*price);
};
product(12, 2.46);

/*
2.	შემოიტანეთ ფუნქცია 3 არგუმენტით, იქვე არგუმენტების შემოტანისას მიანიჭეთ მათ მნიშვნელობების. ამობეჭდეთ არგუმენტები ქონსოლში concatenation-ით (შეერთება +-ებით) (1 ქულა)
*/
const concatenation = function(x = 14, y = 35, z =9){
    console.log(x+y+z);
};
concatenation();
/* 3.	გადაწერეთ შემდეგი function declaration,  function expression-ად
function christmasEve(){
    console.log(“HOHOHOHHO”);
    }
     (2 ქულა)
*/
const christmasEve = function (){
    const word = "HOHOHOHHO";
    return word;
};
console.log(christmasEve());
/*
4.	გადაიყვანეთ შემდეგი ფუნქცია arrow სტილში:
let product = function(a, b, c){
return a * b * c;
} 
(2 ქულა)
*/
const products = (a, b, c) => {
    let area = a*b*c;
    return area;
};
console.log(products(4, 8, 6));
/*
5.	დაწერეთ კოდი function expression-ებით, რომელიც 18+ ასაკის მომხმარებელს დაუწერს “You are old enough.”, 16-18 ასაკის მომხმარებელს “Soon enough.” და 16 წელზე პატარა მომხმარებელს - “Aborted.”
 (3 ქულა)
*/
const ageStrict = function (age){
    if (age > 18){
        return "You are old enough."
    }else if(18 >= age && age >= 16){
        return "Soon enough."
    }else if( age < 16){
        return "Aborted."
    }
};
console.log(ageStrict(26));
/*
6.	დაწერეთ ფუნქცია სახელად addFive არგუმენტების გარეშე, შემოიტანეთ ცვლადი სახელწოდებით sum და დაუმატეთ მას 5, უკან უნდა დაბრუნდეს მნიშვნელობა NaN. (ან undefined) (1 ქულა)
*/
const addFive = () =>{
    let sum;
    return sum +=5;
};
console.log(addFive());
/*
7.	გადაიყვანეთ function expression -> function declaration-ად და return უნდა აბრუნებდეს ამ ორ მნიშვნელობას გაერთიანებულს (concatenation ანუ +-ით) და შუაში სფეისით.
let  message = function(“Hello”, “World”){
return …
}
(2 ქულა)
*/
function message(a = "Hello", b ="World"){
    return a +' ' + b;
};
console.log(message());