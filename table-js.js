var input = document.getElementById("input-user");
var button = document.getElementById("add-button");
var container = document.querySelector(".container");
// create adding items when we add input
function addItems(){
    
    if(input.value.length > 0){
        // create div - card
        var div = document.createElement("div");
        div.className = "card";
        // add div into container
        container.appendChild(div);
        // add p into div
        var p = document.createElement("p");
        p.appendChild(document.createTextNode(input.value));
        div.appendChild(p);
        // add delete button into div
        var buttonDelete = document.createElement("button");
        buttonDelete.className = "button-delete";
        buttonDelete.appendChild(document.createTextNode("X"));
        div.appendChild(buttonDelete);

        input.value = "";
        // add event for the p when we bought it
        p.addEventListener("click", function(){
            p.classList.toggle("toggle");
        })
        // add event for delete button when we don't want to show up more
        buttonDelete.addEventListener("click", function(){
            buttonDelete.parentElement.remove();
        })
    }

}
// add event for the keypress
input.addEventListener("keypress", function(e){// we need to enter, only enter - so we have to use event parameter
    if(e.which === 13){
        addItems();
    }
})
button.addEventListener("click", addItems); // callback function for the button