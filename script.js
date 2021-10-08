// function for inserting numbers or symbols
function insert(item){
  let outputs= document.form.textview.value
  document.form.textview.value=document.form.textview.value + item
  }

  // function for cleaning all display
function cleanAll(){
   document.form.textview.value=""   
}

// function for delete the last item
function cleanItem(){
    let lastCalc=document.form.textview.value
    document.form.textview.value=lastCalc.substring(0,lastCalc.length-1)
}

////faunction get output string ,set array with join numbers
function outputCreateArr(arr){
  let itemIndex=[]
  let flag=""
  for(let i=0;i<arr.length+1;i++){
    if(arr[i]==="+"||arr[i]==="-"||arr[i]==="/"||arr[i]==="*" ||arr[i]==="="){
      itemIndex.push(flag)
      itemIndex.push(arr[i])
      flag=""
      i++
     } 
      flag+=arr[i]
 }  
   return itemIndex
 }


//calculate operation
function equal(){ 
    let b=0
    let outputArr= document.form.textview.value.split("")
    outputArr.push("=")
    let itemIndex=outputCreateArr(outputArr)
    // console.log(itemIndex)
 for(j=0;j<itemIndex.length;j++){
    if(itemIndex[j]==="*"){
          b=+(itemIndex[j-1])*+(itemIndex[j+1])
            itemIndex.splice(j-1,j+2,b)
    }
       console.log(itemIndex)
    if(itemIndex[j]==="/"){ 
          b=+(itemIndex[j-1])/+(itemIndex[j+1])
           itemIndex.splice(j-1,j+2,b)
          }
       console.log(itemIndex)
  }
  for(k=0;k<itemIndex.length;++k){
      if(itemIndex[k]==="+"){ 
         b=+(itemIndex[k-1])+(+(itemIndex[k+1]))
         itemIndex.splice(k-1,k+2,b)
       }
       console.log(itemIndex)
     if(itemIndex[k]==="-"){ 
            b=+(itemIndex[k-1])-(itemIndex[k+1])
          itemIndex.splice(k-1,k+2,b)
  } 
    } 

    document.form.textview.value=itemIndex[0]
}

  let dot=document.querySelector('#dot')
  dot.addEventListener('click',insertDot,once=true )

function insertDot(item){
  let inputs=document.form.textview.value
  if(inputs===""||inputs[inputs.length-1]==="+"||inputs[inputs.length-1]==="-"||inputs[inputs.length-1]==="*"||inputs[inputs.length-1]==="/"||inputs[inputs.length-1]==="="){
    document.form.textview.value=document.form.textview.value+"0"+"."   
  }
    //  else if(inputs[inputs.length-1].includes(".")){return
    //   }
        else{
    document.form.textview.value=document.form.textview.value +'.'
  }
}






