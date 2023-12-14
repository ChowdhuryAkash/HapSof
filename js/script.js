var nav=document.querySelector("#nav");
var topButton=document.querySelector("#scrollToTop");
if(window.scrollY>70){
	nav.style.background="white";
	nav.style.boxShadow="0 0 15px rgba(10,10,10,.2)";
	topButton.style.display="block";


}
window.addEventListener("scroll",function(){

	if(window.scrollY>70){
		nav.style.background="white";
		nav.style.boxShadow="0 0 15px rgba(10,10,10,.2)";
		topButton.style.display="block";


	}
	else{
		nav.style.background="transparent";
		nav.style.boxShadow="0 0 5px rgba(0,0,0,0)";
		topButton.style.display="none";
		

	}
});
topButton.addEventListener("click",function(){
	window.scrollTo(0,0);
})

document.querySelector("#three_dot").addEventListener("click",function(){
	document.querySelector("#res_nav").style.display="block";
	document.querySelector("#three_dot").style.visibility="hidden";




});

document.querySelector("#res_nav_cut_btn").addEventListener("click",function(){
	document.querySelector("#res_nav").style.display="none";
	document.querySelector("#three_dot").style.visibility="visible";




});

	 
	function hide(){
		document.querySelector("#res_nav").style.display="none";
	 document.querySelector("#three_dot").style.visibility="visible";
		console.log("hiii");
	}


