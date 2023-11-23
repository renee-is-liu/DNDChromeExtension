const characterName = document.getElementById("input_character");
const initiative = document.getElementById("input_initiative");
let combatRoundOrder = document.getElementById("round_order");
let roundActionButton = document.getElementById("round_action");
let saveCharacterButton = document.getElementById("submit_character");

const statusClasses = ["init-state", "death-state"];

saveCharacterButton.addEventListener("click", () => {
    if (initiative.reportValidity()) {
        // Create new li element to append to combat round list
        let nameElement = document.createElement("span");
        nameElement.append(characterName.value);
        nameElement.classList.add("character", "name");

        let initiativeElement = document.createElement("span");
        initiativeElement.append(initiative.value);
        initiativeElement.classList.add("character", "initiative");

        let characterElement = document.createElement("li");
        characterElement.classList.add("init-state");
        characterElement.append(nameElement, initiativeElement);
        
        characterElement.addEventListener("click", (event) => {
            // Change character status when li icon clicked
            let element = event.target;
            let currentStateIndex = statusClasses.findIndex((value) => element.classList.contains(value));
            let newStateIndex = (currentStateIndex + 1) % statusClasses.length;

            replaceClassUtil(element.classList, statusClasses[currentStateIndex], statusClasses[newStateIndex]);
        });

        combatRoundOrder.append(characterElement);
        sortList(combatRoundOrder);
        characterName.value = '';
        initiative.value = '';
    }
});

saveCharacterButton.addEventListener("mouseover", () => {
    const filledIcon = document.createElement("i");
    filledIcon.classList.add("bi", "bi-check-circle-fill");
    saveCharacterButton.replaceChild(filledIcon, saveCharacterButton.firstChild);
});

saveCharacterButton.addEventListener("mouseout", () => {
    const filledIcon = document.createElement("i");
    filledIcon.classList.add("bi", "bi-check-circle");
    saveCharacterButton.replaceChild(filledIcon, saveCharacterButton.firstChild);
});

document.getElementById("combat_action").addEventListener("click", (event) => {
    let button = event.target;

    if ("combat-start" === button.classList[0]) {
        if (combatRoundOrder.hasChildNodes()) {
            console.log(combatRoundOrder.childNodes);
            button.innerText = "End Combat";
            replaceClassUtil(button.classList, "combat-start", "combat-end");
            replaceClassUtil(roundActionButton.classList, "hidden", "visible");
            combatRoundOrder.childNodes[0].classList.add("highlight");
        } else {
            button.setCustomValidity("No characters present. Please add at least 1 character.");
            button.reportValidity();
        }
        
    } else if ("combat-end" === button.classList[0]) {
        button.innerText = "Start Combat";
        replaceClassUtil(button.classList, "combat-end", "combat-start");
        replaceClassUtil(roundActionButton.classList, "visible", "hidden");
        combatRoundOrder.childNodes.forEach((node) => {
            // Clear any highlight class
            node.classList.remove("highlight");
        });
    }
});

roundActionButton.addEventListener("click", () => {
    let characterNodeList = combatRoundOrder.childNodes;
    let nextNodeIndex = 0;
    for (let i = 0; i < characterNodeList.length; i++) {
        let node = characterNodeList[i];
        if (node.classList.contains("highlight")) {
            nextNodeIndex = (i + 1) % characterNodeList.length;
            node.classList.remove("highlight");
        }
    }
    characterNodeList[nextNodeIndex].classList.add("highlight");
});

function replaceClassUtil(classList, oldClass, newClass) {
    classList.remove(oldClass);
    classList.add(newClass);
}

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