const input = document.querySelector(".list-of-item");
const addButton = document.querySelector(".add-button");
const listContainer = document.querySelector(".list-container");
const buttons = document.querySelector(".buttons");
const confirmButton = document.querySelector(".confirm");
const clearAllButton = document.querySelector(".clear-all");
const mainContainer = document.querySelector(".main-container")


addButton.addEventListener("click", () => {
    buttons.classList.add("buttons-visible");
    const inputValue = input.value.trim();
   
    if (inputValue === "") {
        return;
    } 

    const groceryItem = document.createElement("p");
    const deleteButton = document.createElement("button");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    const itemContainer = document.createElement("div");
    itemContainer.classList.add("item-container");
    /*itemContainer.style.display = "flex"
    itemContainer.style.justifyContent = "space-between"
    itemContainer.style.alignItems = "center"
    itemContainer.style.padding = "0 5px" */

    groceryItem.textContent = inputValue;
    deleteButton.textContent = "Delete";

    itemContainer.append(checkbox,groceryItem,deleteButton)


    listContainer.append(itemContainer);
    input.value = "";
    

    deleteButton.addEventListener("click", () => {
        const removeGrocery = itemContainer;
        removeGrocery.remove();
    }) 

    checkbox.addEventListener("click", () => {
        const checking = checkbox.checked;
        if (checking) {
           groceryItem.classList.add("linethrough");
        }else {
           groceryItem.classList.remove("linethrough")
        }
    });
    input.focus();
});

clearAllButton.addEventListener("click", () => {
    const clearAllGroceryList = listContainer;
    clearAllGroceryList.remove();
})
confirmButton.addEventListener("click", () => {
    const disableAddButton = addButton;
    const popupMessage = document.querySelector(".popup-message");
    const closeButton = document.querySelector(".close")
    mainContainer.style.display = "none";

    closeButton.addEventListener("click", () => {
        const closeMessage = popupMessage;
        closeMessage.style.display = "none";
        mainContainer.style.display = "block";
        confirmButton.disabled = true;
        confirmButton.style.backgroundColor = "gray";
        clearAllButton.disabled = true;
        clearAllButton.style.backgroundColor = "gray";
    });

    popupMessage.classList.add("display-block")
    addButton.style.backgroundColor = "gray"
    disableAddButton.disabled = true;
    disableAddButton.classList.add("buttons-disabled");
})

//way of getting checkbox
/*const inputCheckbox = document.querySelector(".checking-box")

inputCheckbox.addEventListener("click", () => {
    const checking = inputCheckbox.checked;
    if (checking) {
        console.log("true");
    }else {
        console.log("false")
    }
}) */



