
// ----- OPDRACHT 1 -----

// function op1s1(){
//   hoverImg.style.backgroundImage = "url('img/Rintaro-2.png')"
// }





// ----- OPDRACHT 2 -----

// function op2s1(){
//   alert("Dank u voor uw deelname")
// }





// ----- OPDRACHT 3 -----

// document.addEventListener("keydown", op3s1);

// function op3s1(){
//   alert(nameGiven.value)
// }





// ----- OPDRACHT 4 -----

// function op4s1(){
//   lastName.value = ""
//   firstName.value = ""
//   city.value = ""
// }





// ----- OPDRACHT 5 -----

let imgs = document.querySelectorAll("img");

imgs.forEach(img =>{
  img.addEventListener("mouseover", op5s1)
})

function op5s1(evt){
  for( var i = 0 ; i < imgs.length ; i++ ){
    if(evt.currentTarget == imgs[i]){
      j = i + 1;
      imgs[i].src = "img/image" + j + "_2.jpg";
    }
  }
}
