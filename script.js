
const items=[];
const operate=[];
let index=-1;
var ind=0;
function add() {
    let value = document.getElementById("add-items").value;
    if(!value.trim()=='') {
    items.push(value);
     index++;
     display(index);
    }
}

function display(index) {
    if(index!=items.length)
    {
     const elements = document.createElement("div");
     elements.innerHTML =items[index];
     document.getElementById("display").appendChild(elements); 
    }  
}

function removeItem() {
    const remelement=document.getElementById("remove-items").value;
    const ind=items.indexOf(remelement);
    index--;
    document.getElementById("display").innerHTML="";
    if(ind==-1)
        alert("Element not found");
    else
    {
    items.splice(ind,1);
    for(let j=0;j<items.length;j++)
    display(j);
    }
}


