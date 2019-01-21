// OPDRACHT 1

function surfaceRectagle() {
  op1con.innerHTML = '<label for="rectB">Rect Breete : </label><input type="text" id="rectB" name="rectB"/><br/><label for="rectL">REct Lengte : </label><input type="text" id="rectL" name="rectL"/><br/><button onclick="op1s2()" id="validate" name="validate">Validate</button>';
}

function op1s2() {
  rectB = parseInt(rectB.value);
  rectL = parseInt(rectL.value);
  alert("breete = " + rectB + "\nlengte = " + rectL + "\nomtrek = " + ((rectB + rectL) * 2))
}




// OPDRACHT 2


function op2s1() {
  straal = parseInt(straal.value);
  alert(straal * straal * Math.PI);
}




// OPDRACHT 3

let a = 3;
let b = 2;

function op3s1() {
  let x = 5;
  alert(x + " x 5 = " + (x * 5))
  op3s2()
}

function op3s2() {
  a *= 5
  b *= 5
  alert("a = " + a + " b = " + b)
}




// OPDRACHT 4

let tab = [-2, 1, 4];

function op4s1(x) {
  return x
}

function op4s2() {
  alert(op4s1(1) + tab[0])
  let last_num = tab.length - 1
  alert(op4s1(1) + tab[last_num])
}





// OPDRACHT 5

let a5 = 1;
let b5 = 1;

function op5s1(a, b) {
  a = b++;
  alert(a)
  a = ++b;
  alert(a)
  a = b--;
  alert(a)
  a = --b;
  alert(a)
  a += b++;
  alert(a)
  a = 1;
  alert(a)
  a += ++b;
  alert(a)
  a = 1;
  alert(a)
  a -= b++;
  alert(a)
  a = 1;
  alert(a)
  a -= ++b;
  alert(a)
  a = 1;
  alert(a)
  a += b--;
  alert(a)
  a = 1;
  alert(a)
  a += --b;
  alert(a)
}





// OPDRACHT 6

let tab2 = [-2, 1, 4];

function op6s1(x) {
  return x
}

function op6s2() {
  alert(op4s1(-1) + tab[0])
  let last_num = tab.length - 1
  alert(op4s1(-1) + tab[last_num])
}





// OPDRACHT 7

function op7s1() {
  let choice = prompt("kies 1, 2 of 3");

  if (choice == "1") {
    alert("1. Thank you");
  } else if (choice == "2") {
    alert("2. Hello");
  } else if (choice == "3") {
    alert("3. Good bye");
  } else {
    alert("Excuse me, what do you want?")
  }
}





// OPDRACHT 8

let dagen = ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"]

function op8s1() {
  let dayNum = Math.floor(Math.random() * (dagen.length - 1))
  var d = new Date();
  var vandaag = d.getDay();
  alert("waneer gebeurt het? : " + dagen[dayNum] + "\nmaar vandaag is het : " + dagen[vandaag])
}





// OPDRACHT 9

let Ptext = "";

function op9s1() {
  if (Ptext.indexOf("p") == -1) {
    Ptext = prompt("pleas give us a text whit a P somewhere inside it.")
    alert("DIT HEEFT GEEN P")
    op9s1()
  } else {
    Ptag.innerHTML = Ptext
    Ptext = prompt("pleas give us a text whit a P somewhere inside it.")
    op9s1()
  }
}






// OPDRACHT 10

function op10s1() {
  let num1 = parseInt(prompt("geef is een nummer"))
  let num2 = parseInt(prompt("geef is nog een nummer"))
  let num3 = parseInt(prompt("alee dit is de laatste nummer"))

  alert(num1 + " + " + num2 + " + " + num3 + " = " + (num1 + num2 + num3))
}






// OPDRACHT 11

let numSet = [];


function op11s1() {

  for (var i = 0; i < 10; i++) {
    let ranNum = parseInt(prompt("give us a num " + (i + 1) + " of the 10"))
    if (ranNum >= 0) {
      numSet.push(ranNum)
    } else {
      numSet.push(0);
    }
    checknum()

    function checknum() {
      if (numSet[i] != parseInt(numSet[i], 10)) {
        alert("DIT IS GEEN GETAL");
        numSet.pop();
        numSet.push(parseInt(prompt("give us a num " + (i + 1) + " of the 10")))
        checknum()
      }
    }
  }

  let sum = numSet.reduce((previous, current) => current += previous);
  let avg = sum / numSet.length;

  alert("het gemigelde van alle getallen dut u heeft gegeven is " + avg);

}






// OPDRACHT 12

function op12s1(){
  let functieNum = parseInt(prompt("0: End of the program " + "\n1: Celsius to Fahrenheit " + "\n2: Celsius to Kelvin " + "\n3: Fahrenheit to Celsius " + "\n4: Fahrenheit to Kelvin " + "\n5: Kelvin to Celsius " + "\n6: Kelvin to Fahrenheit"))

  let grade = parseInt(prompt("what is het orgineel getal?"))


    if(functieNum == 1){
      grade = (grade * 9/5) + 32;

    } else if (functieNum == 2) {
      grade = grade + 273,15;

    } else if (functieNum == 3) {
      grade = (grade - 32) / (9/5);

    } else if (functieNum == 4) {
      grade = ((grade - 32) * (5/9)) + 273,15;

    } else if (functieNum == 5) {
      grade = grade - 273,15;

    } else if (functieNum == 6) {
      grade = (grade * 9/5) - 459,67;
    } else {
      alert("nope")
    }

    alert("de grade in u gegeven metode is " + grade)

}





// OPDRACHT 13

function op13s1(){
  let gewicht = parseInt(prompt("pleas geef wu gewicht"));
  let lengte = parseFloat(prompt("pleas geef wu lengte").replace(/,/g, ''));

  console.log(lengte);

  let berekening = (gewicht / (lengte * lengte));

  let BMI = berekening;

  console.log(BMI);


  if(BMI < 16.5){

    alert("ondervoeding of hongersnood")

  } else if (16.5 <= BMI && BMI < 18.5) {

    alert("dunheid")

  } else if (18.5 <= BMI && BMI < 25) {

    alert("normale bouw")

  } else if (25 <= BMI && BMI < 30) {

    alert("overgewicht")

  } else if (30 <= BMI && BMI < 35) {

    alert("matige overgewicht")

  } else if (35 <= BMI && BMI < 40) {

    alert("ernstige overgewicht")

  } else if (BMI > 40) {

    alert("morbide obesitas")

  } else {
    alert("er ging its fout. mischien heb je je mistipt")
  }


}
