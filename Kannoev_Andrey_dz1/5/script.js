"use strict";

/** 
  * Проверяет сумму трех первых и трех поcледних цифр.
  */

 function check() {
   var numb = document.getElementById("numb").value; 
   let numb6 = (numb % 10); 

   let numb5sep = numb / 10;
   let numb5round = Math.floor(numb5sep);
   let numb5 = (numb5round % 10);
	
   let numb4sep = numb / 100;
   let numb4round = Math.floor(numb4sep);
   let numb4 = (numb4round % 10); 
	
   let rezRight = (numb4 + numb5 + numb6);
	
   let numb3sep = numb / 1000;
   let numb3round = Math.floor(numb3sep);
   let numb3 = (numb3round % 10); 
	
   let numb2sep = numb / 10000;
   let numb2round = Math.floor(numb2sep);
   let numb2 = (numb2round % 10); 

   let numb1sep = numb / 100000;
   let numb1round = Math.floor(numb1sep);
   let numb1 = (numb1round % 10); 

   let rezLeft = (numb1 + numb2 + numb3);

   if (rezLeft === rezRight) {
   	 let elem = document.getElementById("resalt");
   	 elem.innerHTML = "Вы счастливчик!";
   } else {
     let elem = document.getElementById("resalt");
     elem.innerHTML = "Купите другой билет и снова введите данные";
	}
  }
