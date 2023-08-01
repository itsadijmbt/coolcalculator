const n1 =document.getElementById('n1');
const n2 =document.getElementById('n2');
const n3 =document.getElementById('n3');
const n4 =document.getElementById('n4');
const n5 =document.getElementById('n5');
const n6 =document.getElementById('n6');
const n7 =document.getElementById('n7');
const n8 =document.getElementById('n8');
const n9 =document.getElementById('n9');
const n0 =document.getElementById('n0');
const dot =document.getElementById('dot');

const h =document.getElementById('h');
const ac=document.getElementById('clear');

const add=document.getElementById('add');
const diff=document.getElementById('diff');const mul=document.getElementById('mul');const div=document.getElementById('div');
const result=document.getElementById('result');
const back=document.getElementById('back');


const loader=document.querySelector('.loader');
const displayResult=document.querySelector('.display-result');
const r0=document.querySelectorAll('.row-0');
const r1=document.querySelectorAll('.row-1');
const r2=document.querySelectorAll('.row-2');
const r3=document.querySelectorAll('.row-3');
const r4=document.querySelectorAll('.row-4');


const ct=document.getElementById('change-theme');





let history=[];
let calcResult=[];
let historyResult=[];
function renderData(){

  let text='';
  displayResult.textContent='';
  for(const ele of history)
  {
    text=text+ele;
  }
  displayResult.style.display='inline-block';
  console.log(text);
  displayResult.textContent=text;
  text='';

}

ac.addEventListener('click',()=>{

  historyResult=[];
  history=[];
  calcResult=[];
  displayResult.textContent='';

})

function createResult(){

   let resultOfdata
   let value='';     
  console.log(history)
  for(let i=0;i<=history.length;i++)
  {

   if(history[i]==='+'){
    calcResult.push(value);
    value='';
    calcResult.push('+');
    
   }
   else if(history[i]==='-'){
    calcResult.push(value);
    value='';
    calcResult.push('-');
   }
   else if(history[i]==='%'){
    calcResult.push(value);
    value='';
    calcResult.push('%');
   }
   else if(history[i]==='*'){
    calcResult.push(value);
    value='';
    calcResult.push('*');
   }
   else if(i===history.length){
    calcResult.push(value);
    value='';
   }
   else{
  value=value+history[i];
  }

  }

  console.log(calcResult)
  historyResult.push(calcResult)
  console.log(historyResult)
}

function renderResult(){


  let answer=parseFloat(calcResult[0]);
   
  for(let i=1;i<=calcResult.length;i++)
  {

      if(calcResult[i]==='+')
      {
          answer=parseFloat(answer)+parseFloat(calcResult[i+1]);
      }
      else if(calcResult[i]==='%')
      {
        answer=parseFloat(answer)/parseFloat(calcResult[i+1]);
      }
      else if(calcResult[i]==='-')
      {
        answer=parseFloat(answer)-parseFloat(calcResult[i+1]);

      }
      else if(calcResult[i]==='*')
      { answer=parseFloat(answer)*parseFloat(calcResult[i+1]);
        

      }
      else if(calcResult[i]==='.')
      {
        answer=parseFloat(answer+'.');
      }

  }
   displayResult.textContent='';
   displayResult.textContent=answer;
   
   displayResult.style.display='inline-block';
   answer=0;

}
  let intd=-1;
h.addEventListener('click',()=>{



  if(intd<historyResult.length-1){intd++;
 
 
  console.log(intd)
  
  let txtInside='';

  for(let j=0;j<historyResult[intd].length;j++)
  {
    txtInside=txtInside+historyResult[intd][j];
  }
   
  displayResult.textContent='';
  displayResult.textContent=txtInside;
  txtInside='';}
  else{ intd=0;
    displayResult.textContent=''
  }
});

back.addEventListener('click',()=>{

  history.pop();
  renderData();

})


result.addEventListener('click',()=>{
  

  createResult();
  renderResult();
  calcResult=[];

})

add.addEventListener('click',()=>{
  history.push('+');
  renderData();
});


diff.addEventListener('click',()=>{
  history.push('-');
  renderData();
});

mul.addEventListener('click',()=>{
  history.push('*');
  renderData();
});

div.addEventListener('click',()=>{
  history.push('%');
  renderData();
});

n0.addEventListener('click',()=>{
 
  history.push('0');
  renderData();

})

n1.addEventListener('click',()=>{
 
  history.push('1');
  renderData();

})
n2.addEventListener('click',()=>{
 
  history.push('2');
  renderData();

})
n3.addEventListener('click',()=>{
 
  history.push('3');
  renderData();

})
n4.addEventListener('click',()=>{
 
  history.push('4');
  renderData();

})
n5.addEventListener('click',()=>{
 
  history.push('5');
  renderData();

})
n6.addEventListener('click',()=>{
 
  history.push('6');
  renderData();

})
n7.addEventListener('click',()=>{
 
  history.push('7');
  renderData();
})

n8.addEventListener('click',()=>{
 
  history.push('8');
  renderData();

})
n9.addEventListener('click',()=>{
 
  history.push('9');
  renderData();

})
dot.addEventListener('click',()=>{
 
  history.push('.');
  renderData();

})




let ctt=1;
ct.addEventListener('click',()=>{

 
 
  if(ctt%2===1)
  {
   for(let el=0;el<4;el++)
   { 
     
     r0[el].className='row-0c';
     r1[el].className='row-1c';
     r2[el].className='row-2c';
     r3[el].className='row-3c';
     r4[el].className='row-4c';
   }
   
  }
  else
  {
    for(let el=0;el<r0.length;el++)
    {
      r0[el].className='row-0';
  
      r1[el].className='row-1';
    
      r2[el].className='row-2';
    
      r3[el].className='row-3';
     
      r4[el].className='row-4';
    }
  }

  
ctt++;

});



/*if(hist!==0){

  displayResult.textContent='';

  let hisdis='';
  for(let i=0;i<historyResult[hist].length;i++)
  {
  hisdis=hisdis+historyResult[hist][i];
  }
  displayResult.textContent=hisdis;
  console.log(hisdis)
  hisdis='';
}
else{
  let hisdis='';
  for(let i=0;i<historyResult[hist].length;i++)
  {
  hisdis=hisdis+historyResult[hist][i];
  }
  displayResult.textContent=hisdis;
  console.log(hisdis)
hisdis='';
hist=historyResult.length

}
hist--;*/