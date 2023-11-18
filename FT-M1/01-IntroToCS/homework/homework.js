'use strict';

function BinarioADecimal(num) {
   let arranged = num.split('').reverse();
   // let result =0;
    
   // for (let i = 0; i < arranged.length; i++) {
   //    if(arranged[i]*1){
   //       result = (2**i) + result;
   //    }
   // }
   
   // return result;

   let converted = arranged.reduce((total, bit,i)=>{
      return (2**i*bit) + total;
   },0)
   return converted;
}

// console.log(BinarioADecimal('0101'))

function DecimalABinario(num) {
   let binary= [];
   
   while (num > 0){
      if(num % 2 == 1){
         binary.unshift(1);
      }else{
         binary.unshift(0);
      }
      num = Math.trunc(num/2) 
   }
   return binary.join('');
}

// console.log(DecimalABinario(4))

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
