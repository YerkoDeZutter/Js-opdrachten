
// OPDRACHT 1

function surfaceRectagle(){
  op1con.innerHTML = '<label for="rectB">Rect Breete : </label><input type="text" id="rectB" name="rectB"/><br/><label for="rectL">REct Lengte : </label><input type="text" id="rectL" name="rectL"/><br/><button onclick="op1s2()" id="validate" name="validate">Validate</button>';
}

function op1s2(){
  rectB = parseInt(rectB.value);
  rectL = parseInt(rectL.value);
  alert("breete = " + rectB + "\nlengte = " + rectL + "\nomtrek = " + ((rectB + rectL) * 2))
}




// OPDRACHT 2


function op2s1(){
  straal = parseInt(straal.value);
  alert(straal * straal * Math.PI);
}




// OPDRACHT 3

let a = 3;
let b = 2;

function op3s1(){
  let x = 5;
  alert(x + " x 5 = " + (x*5))
  op3s2()
}

function op3s2(){
  a *= 5
  b *= 5
  alert("a = " + a + " b = " + b)
}




// OPDRACHT 4

let tab = [-2, 1, 4];

function op4s1(x){
  return x
}

function op4s2(){
  alert(op4s1(1) + tab[0])
  let last_num = tab.length - 1
  alert(op4s1(1) + tab[last_num])
}





// OPDRACHT 5

let a5 = 1;
let b5 = 1;

// a=b++;
// a=++b;
// a=b--;
// a=--b;
// a+=b++;
// a=1; a+=++b;
// a=1; a-=b++;
// a=1; a-=++b;
// a=1; a+=b--;
// a=1; a+=--b;

function op5s1(a, b){
  a=b++;
  alert(a)
  a=++b;
  alert(a)
  a=b--;
  alert(a)
  a=--b;
  alert(a)
  a+=b++;
  alert(a)
  a=1;
  alert(a)
  a+=++b;
   alert(a)
  a=1;
  alert(a)
  a-=b++;
   alert(a)
  a=1;
  alert(a)
  a-=++b;
   alert(a)
  a=1;
  alert(a)
  a+=b--;
   alert(a)
  a=1;
  alert(a)
  a+=--b;
   alert(a)
}





// OPDRACHT 6

let tab2 = [-2, 1, 4];

function op6s1(x){
  return x
}

function op6s2(){
  alert(op4s1(-1) + tab[0])
  let last_num = tab.length - 1
  alert(op4s1(-1) + tab[last_num])
}





// OPDRACHT 7

function op7s1(){
  let choice = prompt("kies 1, 2 of 3");

  if(choice == "1"){
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

function op8s1(){
  let dayNum = Math.floor(Math.random()*(dagen.length - 1))
  alert(dagen[dayNum])
}
