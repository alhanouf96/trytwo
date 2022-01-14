

$('#main .lazy').lazyload();





  // When the user scrolls the page, execute myFunction 
document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 145) {
        document.getElementById('pills-tab').classList.add('fixed-top');
        // add padding top to show content behind navbar
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('pills-tab').classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
  });
}); 


  

function gofor(id) {

switch(id){



case "vi":
var val = "vii"
localStorage.setItem("storageName",val);
window.location.href = "deet.html";
 break;




case "fl":
var val = "fll"
localStorage.setItem("storageName",val);
window.location.href = "deet.html";
 break;

case "es":
var val = "ess"
localStorage.setItem("storageName",val);
window.location.href = "deet.html";
 break;

case "trfz":
var val = "trfzz"
localStorage.setItem("storageName",val);
window.location.href = "deet.html";
 break;



case "am":
var val = "amm"
localStorage.setItem("storageName",val);
window.location.href = "deet.html";
 break;

case "h1":
var val = "hh1"
localStorage.setItem("storageName",val);
window.location.href = "deet.html";
 break;


case "h2":
var val = "hh2"
localStorage.setItem("storageName",val);
window.location.href = "deet.html";
 break;

case "h3":
var val = "hh3"
localStorage.setItem("storageName",val);
window.location.href = "deet.html";
 break;


case "cpro":
var val = "cproo"
localStorage.setItem("storageName",val);
window.location.href = "deet.html";
 break;

case "cpr":
var val = "cprr"
localStorage.setItem("storageName",val);
window.location.href = "deet.html";
 break;

case "csv":
var val = "csvv"
localStorage.setItem("storageName",val);
window.location.href = "deet.html";
 break;



case "cre":
var val = "cree"
localStorage.setItem("storageName",val);
window.location.href = "deet.html";
 break;


case "c2":
var val = "cc2"
localStorage.setItem("storageName",val);
window.location.href = "deet.html";
 break;


case "c3":
var val = "cc3"
localStorage.setItem("storageName",val);
window.location.href = "deet.html";
 break;

case "c4":
var val = "cc4"
localStorage.setItem("storageName",val);
window.location.href = "deet.html";
 break;

case "c5":
var val = "cc5"
localStorage.setItem("storageName",val);
window.location.href = "deet.html";
 break;

case "c6":
var val = "cc6"
localStorage.setItem("storageName",val);
window.location.href = "deet.html";
break;


case "s1":
var val = "ss1"
localStorage.setItem("storageName",val);
window.location.href = "deet.html";
break;

case "s2":
var val = "ss2"
localStorage.setItem("storageName",val);
window.location.href = "deet.html";
break;

case "s3":
var val = "ss3"
localStorage.setItem("storageName",val);
window.location.href = "deet.html";
break;

case "s4":
var val = "ss4"
localStorage.setItem("storageName",val);
window.location.href = "deet.html";
break;


case "s5":
var val = "ss5"
localStorage.setItem("storageName",val);
window.location.href = "deet.html";
break;

case "s6":
var val = "ss6"
localStorage.setItem("storageName",val);
window.location.href = "deet.html";
break;

case "s7":
var val = "ss7"
localStorage.setItem("storageName",val);
window.location.href = "deet.html";
break;

case "s8":
var val = "ss8"
localStorage.setItem("storageName",val);
window.location.href = "deet.html";
break;


 
}
}
