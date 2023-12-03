

$(document).ready(function(){
   $("#touchbtn").click(function(){

    $("#prod").hide();
    $("#git").fadeIn();
   })
});


let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

 
 
 

 function quoteGenerator(){

  try {
    const response = fetch("https://dummyjson.com/quotes/random" );
     response.then((result)=> result.json()).then((data)=>{
      console.log(data);
    localStorage.setItem("quote",data.quote);
    localStorage.setItem("author",data.author);
       document.getElementById("quote").innerHTML=data.quote;
     document.getElementById("author").innerHTML=`Author-  ${data.author}`;
    
    });
  } catch (error) {
    console.error(error);
  }
 }
let quote=localStorage.getItem("quote");
let author=localStorage.getItem("author");
if(quote){ 
  document.getElementById("quote").innerHTML=quote;
  document.getElementById("author").innerHTML=`Author-  ${author}`;
}
else{
  quoteGenerator();

}
quoteGenerator();
 
 

let date=new Date();
if(date.getHours()===23 && date.getSeconds()===10 && date.getMinutes()===59){
  quoteGenerator();




}

function sendEmail(e){
  e.preventDefault();

  let inputName3=document.getElementById("inputName3").value;
  let inputEmail3=document.getElementById("inputEmail3").value;
  let message=document.getElementById("inputMessage").value;
  var templateParams = {
    from_name:  inputName3,
    emial_id:inputEmail3,
    to_name:"Aravind",
    message
 

};
 
 
  emailjs.init("I4hRM78EXk7LdR9pC");
  emailjs.send('service_i12y271', 'template_l0cryvm',templateParams )
    .then(function(response) {
       alert('Your response has been recorded!', response.status, response.text);
    }, function(error) {
       alert('FAILED...', error);
    });
}

 
 


