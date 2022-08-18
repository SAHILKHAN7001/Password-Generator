let password1 = document.getElementById("password1");
let password2 = document.getElementById("password2");
let password3 = document.getElementById("password3");
let password4 = document.getElementById("password4");
let getbtn = document.getElementById("getbtn");


 

const characters =[
  'A','B','C','D','E','F','H','I','J','K',
  'L','M','N','O','P','Q','R','S','T','U',
  'V','W','X','Y','Z','a','b','c','d','e',
  'f','g','h','i','j','k','l','m','n','n',
  'o','p','q','r','s','t','u','v','w','x',
  'y','z','*','&','$','#','!','?','<','>','+'
  ]

  
  let passwordlen;
  let slider = document.getElementById("slider");
  let slidervalue = document.getElementById("value");
  
 slider.addEventListener("input",function() {
    slidervalue.textContent = `${slider.value}`;
    passwordlen = slider.value;
 })



  function Random() {
     let random = Math.floor(Math.random()*characters.length);
     return characters[random];
  }

  function Password() {
    let resultpassword = "";
    for(let i=0; i <passwordlen ; i++) {
      resultpassword += Random();
    }
    return resultpassword;
  }

  function Generate() {
   password1.textContent = Password();
   password2.textContent = Password();
   password3.textContent = Password();
   password4.textContent = Password();
  }

 
getbtn.addEventListener("click",Generate)



function Message() {
  const copytext1 = password1.textContent;
  const copytext2 = password2.textContent;
  const copytext3 = password3.textContent;
  const copytext4 = password4.textContent;
  navigator.clipboard.writeText(copytext1);
  navigator.clipboard.writeText(copytext2);
  navigator.clipboard.writeText(copytext3);
  navigator.clipboard.writeText(copytext4);
}

function copy() {
  Message();
  alert("password copyied")
}

