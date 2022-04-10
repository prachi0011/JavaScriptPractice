// console.time('prachi');
// console.log("Hello World!");
// console.log(2+4);
// console.log(true);
// console.log([2,3,4,5]);
// console.table({'a':1,'b':2});
// console.timeEnd('prachi');

// console.assert(566<120, "Age 566 is not possible!");

var bg = document.getElementsByClassName("topic");
document.getElementById("para").innerHTML = "Document Object Manipulation";
console.log(document.getElementById("features"));
document.getElementById("features").id = "defines";
console.log(document.getElementById("defines"));

// document.write("I can  only made changes to element using IDs not by using class");

function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }
  function myFunction() {
    let x = document.forms["myForm"]["fname"].value;
    if(x == ""){
        alert("Must fill this!");
    }else{
        alert("Form submission succesfull");
        // document.forms
    }
  }


  window.addEventListener("resize", function(){
    document.getElementById("para").innerText = "THIS IS NEW TOPIC";
  });

//   form.addEventListener("click", function(){
//     document.getElementById("form").style.backgroundColor = 'red';
    
//   });

  //arrow function
  avg =(a,b)=>{
      return a+b/2;
  }

//   setTimeout(() => {
//     let x = document.getElementById("form");
//     x.style.border = '3px solid green';
//     x.style.padding = '10px 6px';
//   }, 2000);

//  setinter= setInterval(() =>{
//     console.log("After one second");
    
//   },3000
//   );
// clearInterval(setinter);
// clearTimeout();