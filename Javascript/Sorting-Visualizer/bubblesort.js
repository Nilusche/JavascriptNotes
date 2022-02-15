var delay=500;
var num =20;
var stopExec=false;
const container = document.querySelector("#array");
const bubble = document.querySelector("#bubblesort");
const bogo = document.querySelector("#bogosort");
bubble.addEventListener("click",()=>{
    bubble.disabled=true;
    bogo.disabled=true;
    bubblesort();
    
});

bogo.addEventListener("click", ()=>{  
    bubble.disabled=true;
    bogo.disabled=true;
    bogosort();
    
});

function changespeed(val){
    delay = parseInt(val);
}


function generatearray(num=20){
    container.innerHTML="";
    for(let i=0; i<num; i+=1){
        var value=Math.ceil(Math.random()*100);
        var element = document.createElement("div");
        element.classList.add("item");
        element.style.height= `${value*3 +12}px`;
        element.transform = `translate(${i*30}px)`;
        element.innerText = value;
        container.appendChild(element);
    }
}

function swap(element1, element2){
    
    
    setTimeout(()=>{
        tmp_height = element1.style.height;
        tmp_value = element1.innerText;
        element1.style.height = element2.style.height;
        element1.innerText= element2.innerText;
        element2.style.height = tmp_height;
        element2.innerText = tmp_value;  
    }, 25);
}

async function bubblesort(){
    items = document.querySelectorAll(".item");
    for(let i=0; i< items.length; i++){
        for(let j=0; j<items.length - i -1; j++){
            if(stopExec)
                return;
            items[j].style.backgroundColor = "#126E82";
            items[j+1].style.backgroundColor = "#126E82";

            await new Promise((resolve)=>
                setTimeout(()=>{
                    resolve();
                },delay)
            );
            let value1 = parseInt(items[j].innerText);
            let value2 = parseInt(items[j+1].innerText);

            
            if(value1>value2){
                swap(items[j], items[j+1]);
            }


            items[j].style.backgroundColor = "#FF6464";
            items[j+1].style.backgroundColor = "#FF6464";


        }
        items[items.length - i - 1].style.backgroundColor ="#95CD41";
    }
}

async function bogosort(){
    items= document.querySelectorAll(".item");
    while(!isSorted()) {
        if(stopExec)
            return;
        let a = Math.floor(Math.random() * items.length);
        let b = Math.floor(Math.random() * items.length);
        items[a].style.backgroundColor = "#126E82";
        items[b].style.backgroundColor = "#126E82";
        await new Promise((resolve)=>
            setTimeout(()=>{
                resolve();
            },delay)
        );
        swap(items[a], items[b]);
        items[a].style.backgroundColor = "#FF6464";
        items[b].style.backgroundColor = "#FF6464";
    }

    function isSorted() {
        for(let i = 0; i < items.length - 1; i++) {
            if (items[i].innerText > items[i + 1].innerText) return false;
        }
        return true;
    }
}


generatearray();

