const button= document.getElementById("button");



button.addEventListener('click', ()=>{
 let string=  document.getElementById('string').value;
 let num= document.getElementById('num').value;
 let textarea= document.getElementById('textarea');
 let area="";
 


   if(num>0){
       area=string.repeat(num);
   }else{
       area="";
   }

   textarea.innerHTML=area;

});















  /* Freecodecamp

  function repeatStringNumTimes(str, num) {
    return num > 0 ? str.repeat(num) : "";
  }
  repeatStringNumTimes("abc", 3);
  */