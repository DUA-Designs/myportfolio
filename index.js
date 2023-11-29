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

 
const url =  "https://api.adviceslip.com/advice";
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6fbfebbdc6msh5f6f5ee3beae5d2p1fc4d9jsn61a0a7629cf5',
		'X-RapidAPI-Host': 'shakespeare1.p.rapidapi.com'
	}
};

 
 

try {
	const response = fetch(url );
	 response.then((result)=> result.json()).then((data)=>{
    console.log(data);
     document.getElementById("quote").innerHTML=data.slip.advice;
   document.getElementById("author").innerHTML=`Advice- #${data.slip.id}`});
} catch (error) {
	console.error(error);
}

 /*
  document.getElementById("quote").innerHTML=data[0].text;
  document.getElementById("author").innerHTML=`Author- ${data[0].author}`
 });  */
