


let string = "";
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((item)=>{
 
   item.addEventListener('click',(e)=>{

      console.log(e.target.innerHTML);
      if(e.target.innerHTML == '='){


         string = eval(string);

       document.querySelector('.show').value = string;

      }else  if(e.target.innerHTML == 'C'){

         string = "";
         document.querySelector('.show').value = string;

      }else if(e.target.innerHTML == 'del') {
         
         string = string.slice(0,-1);

         document.querySelector('.show').value = string;
      
      }else if(e.target.innerHTML == '+'){

         
    
         

         string = string + e.target.innerHTML;

         document.querySelector('.show').value = string;
          
      }
      else {

        

      string = string + e.target.innerHTML

      document.querySelector('.show').value = string


      }


      
   })




})