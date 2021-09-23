const input = document.querySelector('.inputs');
const addBtn = document.querySelector('.btn-add');
const ul = document.querySelector("ul");
const DefaultTxt = document.querySelector('.default-text');

addBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const text = input.value;

    if (text !== "") {
        const li = document.createElement("li");
        li.className = "li-task";
        const p = document.createElement("input");
        p.className = "inputs-edit";
        p.readOnly = true;
        p.value = text;

        li.appendChild(p);
        li.appendChild(addEditBtn(p));
        li.appendChild(addCheckBtn());
        li.appendChild(addDeleteBtn());
        ul.appendChild(li);
    
        input.value = "";
        DefaultTxt.style.display = "none";
    }
});

function addDeleteBtn() {
    const deleteBtn = document.createElement("button");
    
    deleteBtn.className = "btn-delete";
    
    deleteBtn.addEventListener("click", (e) => {
        const item = e.target.parentElement;
        ul.removeChild(item);
        
        const items = document.querySelectorAll("li");
        if (items.length === 0) {
            DefaultTxt.style.display = "block";
        }
    });
    
    return deleteBtn;
}

function addCheckBtn() {
    const checkBtn = document.createElement("button");
    checkBtn.className = "btn-check";
    checkBtn.addEventListener("click", (e) => {
        const item = e.target.parentElement
        item.style.background = "#C6EFA6";
        item.style.setProperty("text-decoration", "line-through");

        const items = document.querySelectorAll("li");
        if (items.length === 0) {
            DefaultTxt.style.display = "block";
        }
    });
    
    return checkBtn;
}


function addEditBtn(text) {
    var editBtn = document.createElement("button");
    editBtn.className = "btn-edit";
    editBtn.addEventListener("click", (e) => {

        if(editBtn.className == "btn-edit"){
            text.readOnly = false;
            text.style.setProperty("border",".7px solid black");
            editBtn.className = "btn-update";
        }
        else{
            text.readOnly = true;
            text.style.setProperty("border","none");
            editBtn.className = "btn-edit";
        }

        const items = document.querySelectorAll("li");
        if (items.length === 0) {
            DefaultTxt.style.display = "block";
        }
    });

    return editBtn;
}
