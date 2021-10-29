         var buttoncompte=document.getElementById('buttoncompte');
         var recompt=document.getElementById('recompt');
         buttoncompte.addEventListener('click',zicre);
         recompt.addEventListener('click',recommencer);

             	
         var i=1;
     	
     	function zicre() {
     		var x=document.getElementById('compteur');

     		   x.innerHTML=i;
     		   i++;
     		
     	}
         function recommencer(){
            var x=document.getElementById('compteur');
     		x.innerHTML=0;
               i=1;
         }