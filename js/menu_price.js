

var acc = document.getElementsByClassName("accordeon");
var i;

 acc[0].addEventListener("click", function () {
    const plus = this.getElementsByClassName("plus_symbol");
    plus[0].classList.toggle("active_symbol");
    const minus = this.getElementsByClassName("minus_symbol");
   minus[0].classList.toggle("active_symbol");
   

   this.classList.toggle("active_price"); 
   
   var panelFirst = this.nextElementSibling;

   console.log(panelFirst)
   if (panelFirst.style.maxHeight !== "0px") {
     panelFirst.style.maxHeight ="0px";
    
    } else {
       panelFirst.style.maxHeight = panelFirst.scrollHeight + "px";
   }
   
 });
  
for (i = 1; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    const plus = this.getElementsByClassName("plus_symbol");
    plus[0].classList.toggle("active_symbol");
    const minus = this.getElementsByClassName("minus_symbol");
    minus[0].classList.toggle("active_symbol");
    this.classList.toggle("active_price"); 
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight !== "0px"){
      panel.style.maxHeight = "0px";
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}