const characterName = document.getElementById("input_character");
const initiative = document.getElementById("input_initiative");
let combatRoundOrder = document.getElementById("round_order");

document.getElementById("submit_character").addEventListener("click", () => {
    if (initiative.reportValidity()) {
        let characterElement = document.createElement("span");
        characterElement.append(characterName.value);
        characterElement.classList.add("character", "name");

        let initiativeElement = document.createElement("span");
        initiativeElement.append(initiative.value);
        initiativeElement.classList.add("character", "initiative");

        let roundElement = document.createElement("li")
        roundElement.append(characterElement, initiativeElement);

        combatRoundOrder.append(roundElement);
        sortList(combatRoundOrder);
    }
});


// Credit: https://stackoverflow.com/questions/8837191/sort-an-html-list-with-javascript
function sortList(ul){
    var parent = ul.parentNode;
    var new_ul = parent.removeChild(ul);

    // Add all lis to an array
    var lis = [];
    for(var i = ul.childNodes.length; i--;){
        if(ul.childNodes[i].nodeName === 'LI')
            lis.push(ul.childNodes[i]);
    }
    // Sort the lis in descending order
    lis.sort(function(a, b){
       return parseInt(b.childNodes[1].innerText , 10) - 
              parseInt(a.childNodes[1].innerText , 10);
    });
    // Add them into the ul in order
    for(var i = 0; i < lis.length; i++)
        new_ul.appendChild(lis[i]);
    parent.appendChild(new_ul);
}