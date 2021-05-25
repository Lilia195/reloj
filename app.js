const TOGGLE = document.getElementById("toggleList");
const LIST = document.querySelector(".list");
const input = document.querySelector("input.pixel");
const button = document.querySelector("button.pixel");
const p = document.querySelector("p.pixel");

TOGGLE.addEventListener("click", () => 
{

    if( LIST.style.display == "none") {

        TOGGLE.textContent = "Oculta la lista";
        LIST.style.display = "block";    
    }else{

        TOGGLE.textContent ="Muestra la lista";
        LIST.style.display = "none";
    }
});

button.addEventListener("click",()=>{
    p.textContent = input.value;
});

 const ADD_ITEM_BUTTON = document.querySelector("button#addItemButton");
 const ADD_ITEM_INPUT = document.querySelector("input#addItemInput");
 const REMOVE_ITEM_BUTTON = document.querySelector("button#removeItemButton");

 ADD_ITEM_BUTTON.addEventListener("click", () =>{
    let ul = document.getElementsByTagName("ul")[0];
    let li = document.createElement("li");
    li.textContent = ADD_ITEM_INPUT.value;
    añadirBotonesList(li);
    ul.appendChild(li);
   ADD_ITEM_INPUT.value = "";
 });

 ADD_ITEM_INPUT.addEventListener("keydown",(event) =>{
     if (event.key == "Enter"){
    ITEM();
     }
 });
 function ITEM(){
    let ul = document.getElementsByTagName("ul")[0];
    let li = document.createElement("li");
    li.textContent = ADD_ITEM_INPUT.value;
    ul.appendChild(li);
   ADD_ITEM_INPUT.value = "";
 }

 REMOVE_ITEM_BUTTON.addEventListener("click",() =>{
     let ul = document.getElementsByTagName("ul")[0];
     let li = document.querySelector("li:last-child");
     ul.removeChild(li);
 })

/*
 LIST.addEventListener("mouseover", (event) =>{
     
    if(event.target.tagName == "LI"){
     event.target.textContent = event.target.textContent.toUpperCase();
    }
 })

 LIST.addEventListener("mouseout", (event) =>{
     
    if(event.target.tagName == "LI"){
    event.target.textContent = event.target.textContent.toLowerCase();
    }
 });
 */

const LIST_UL = LIST.querySelector("ul");
const BUT = LIST_UL.children;


 LIST_UL.addEventListener ("click",(event) =>{

     if(event.target.tagName == "BUTTON"){

                 if(event.target.className == "borrar"){
                        var li = event.target.parentNode;
                        var ul = li.parentNode;
                        ul.removeChild(li);
                        }
                if(event.target.className == "up"){
                        var li = event.target.parentNode;
                        var prev = li.previousElementSibling;
                        var ul = li.parentNode;
                        if(prev){
                        ul.insertBefore(li,prev);
                        }
                    }
                if(event.target.className == "down"){
                        var li = event.target.parentNode;
                        var next = li.nextElementSibling;
                        var ul = li.parentNode;
                        if(next){
                            ul.insertBefore(next,li);
             }
        }
        
    }
 });
 
for (let i = 0; i < BUT.length; i += 1) {
	añadirBotonesList(BUT[i]);
}

 
 function añadirBotonesList(li){
     let up = document.createElement("button");
     up.className = "up";
     up.textContent = "subir";
     li.appendChild(up);

     let down = document.createElement("button");
     down.className ="down";
     down.textContent = " bajar";
     li.appendChild(down);

    let borrar = document.createElement("button");
    borrar.className = "borrar";
    borrar.textContent ="borrar";
    li.appendChild(borrar);
 };