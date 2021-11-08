         var buttoncompte=document.getElementById('buttoncompte');
         var recompt=document.getElementById('recompt');
         var ok=document.getElementById('francaisdate');
         buttoncompte.addEventListener('click',zicre);
         recompt.addEventListener('click',recommencer);
         var music = document.getElementById("music")

             	
         var i=1;
     	
     	function zicre() {
            music.load();
            music.play()
           
     		var x=document.getElementById('compteur');

     		   x.innerHTML=i;
     		   i++;
     		
     	}
         function recommencer(){
            var x=document.getElementById('compteur');
     		x.innerHTML=0;
               i=1;
         }



 function printTime() {
    var d = new Date();
    var fullYear = d.getFullYear();
    var month = d.getMonth();
    var date = d.getDate();
    var day = d.getDay();
    var hours = d.getHours();
    var mins = d.getMinutes();
    var secs = d.getSeconds();
    ok.innerHTML ="Le "+date+ "/ "+month+ "/" +fullYear+"<br>"+hours+":"+mins+":"+secs;
   // "Year"+fullYear+".Month"+month+".Le "+date+".Day"+day+".<br>"+hours+":"+mins+":"+secs;
}
setInterval(printTime, 1000);
  document.write("<br>");
 

