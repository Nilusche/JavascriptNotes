var delay=500;
var num =20;
var stopExec=false;
const container = document.querySelector("#array");
const bubble = document.querySelector("#bubblesort");
const bogo = document.querySelector("#bogosort");
const selection = document.querySelector("#selectionsort");
const quicksort = document.querySelector("#quicksort");
bubble.addEventListener("click",()=>{
    bubble.disabled=true;
    bogo.disabled=true;
    selection.disabled=true;
    quicksort.disabled=true;
    bubblesort();
    
});

bogo.addEventListener("click", ()=>{  
    bubble.disabled=true;
    bogo.disabled=true;
    selection.disabled=true;
    quicksort.disabled=true;
    bogosort();
    
});

selection.addEventListener("click", ()=>{
    bubble.disabled=true;
    bogo.disabled=true;
    selection.disabled=true;
    quicksort.disabled=true;
    selectionsort();
});

quicksort.addEventListener("click",()=>{
    bubble.disabled=true;
    bogo.disabled=true;
    selection.disabled=true;
    quicksort.disabled=true;
    quicksortImpl();
})



function changespeed(val){
    delay = parseInt(val);
}


function generatearray(num=50){
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

function swap(element1, element2, changecolor=false){

    setTimeout(()=>{
        tmp_height = element1.style.height;
        tmp_value = element1.innerText;
        tmp_background = element1.style.backgroundColor;
        element1.style.height = element2.style.height;
        element1.innerText= element2.innerText;
        element2.style.height = tmp_height;
        element2.innerText = tmp_value;  
        if(changecolor){
            element1.style.backgroundColor = element2.style.backgroundColor;
            element2.style.backgroundColor = tmp_background;
        }
       
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
        items[a].style.backgroundColor = "#219F94";
        items[b].style.backgroundColor = "#219F94";
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

async function selectionsort(){
    items= document.querySelectorAll(".item");
    for(let i =0; i<items.length-1; i++){
        let min = i;

        items[i].style.backgroundColor ="#126E82";

        await new Promise((resolve)=>
            setTimeout(()=>{
                resolve();
            },delay)
        );

        items[i].style.backgroundColor = "#FF6464";
        for(let j = i+1; j<items.length; j++){
            let val = parseInt(items[j].innerText);
            let current_min = parseInt(items[min].innerText);
            let current_min_index = min;

            items[j].style.backgroundColor = "#126E82";
            await new Promise((resolve)=>
                setTimeout(()=>{
                    resolve();
                },delay)
            );
            items[j].style.backgroundColor = "#FF6464";

            if(val<current_min){
                items[min].style.backgroundColor ="#5800FF";
                min = j;
            }
            if(parseInt(items[min].innerText)!=current_min){
                items[current_min_index].style.backgroundColor ="#FF6464";
                items[min].style.backgroundColor= "#5800FF";
            }

        }
        swap(items[min], items[i])
        items[min].style.backgroundColor = "#FF6464";
        items[i].style.backgroundColor = "#95CD41";
        

    }
    items[items.length-1].style.backgroundColor = "#95CD41";
}


async function quicksortImpl(){
    let items = document.querySelectorAll(".item");
        
    quicksort(items, 0 , parseInt(items.length-1)); 
    

    async function quicksort(items, low, high){
        if(parseInt(low)<parseInt(high)){

            const pivot = parseInt(items[high].innerText);
            items[high].style.backgroundColor = "#5800FF";
            let i = parseInt(low) ;

            var marked=[];
            for(let j = low; j<high; j++){
                let val = parseInt(items[j].innerText);
                items[j].style.backgroundColor = "#eeeeee";
                await new Promise((resolve)=>
                    setTimeout(()=>{
                        resolve();
                    },delay-50)
                );
                items[j].style.backgroundColor = "#FF6464";

                if(val<pivot){
                    items[i].style.backgroundColor = "#219F94";    
                    swap(items[i], items[j],false);    
                    items[j].style.backgroundColor = "#F1D00A";   
                    i++;    
                    
                }else{
                    items[j].style.backgroundColor = "#F1D00A";
                }
                marked.push(items[j]);
            }
            swap(items[i], items[high],true);
            let partitionIndex = parseInt(i);

            marked.push(items[i]);
            marked.push(items[high]);

            marked.forEach(element => {
                element.style.backgroundColor =  "#FF6464";
            });



            await new Promise((resolve)=>
                setTimeout(()=>{
                    resolve();
                },delay)
            );

            var promise = Promise.all(quicksort(items, low, partitionIndex-1),quicksort(items, partitionIndex +1, high));
            promise.then(function(){
                for(let i=low; i<=high; i++){
                    items[i].style.backgroundColor ="#95CD41";

                }
            })
            
            await new Promise((resolve)=>
                setTimeout(()=>{
                    resolve();
                },delay)
            );
            
            
        }
    }

    

}

generatearray();




