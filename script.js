const input = document.querySelector(".list-of-item");
const addButton = document.querySelector(".add-button");
const listContainer = document.querySelector(".list-container");


addButton.addEventListener("click", () => {
    const inputValue = input.value.trim();
   
    if (inputValue === "") {
        return;
    } 

    const groceryItem = document.createElement("p");
    const deleteButton = document.createElement("button");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    const itemContainer = document.createElement("div");
    itemContainer.style.display = "flex"
    itemContainer.style.justifyContent = "space-between"
    itemContainer.style.alignItems = "center"
    itemContainer.style.padding = "0 5px" 

    groceryItem.textContent = inputValue;
    deleteButton.textContent = "Delete";

    itemContainer.append(checkbox,groceryItem,deleteButton)


    listContainer.append(itemContainer);
    input.value = "";

    deleteButton.addEventListener("click", () => {
        const removeGrocery = itemContainer;
        removeGrocery.remove();
    }) 
});
/*const inputCheckbox = document.querySelector(".checking-box")

inputCheckbox.addEventListener("click", () => {
    const checking = inputCheckbox.checked;
    if (checking) {
        console.log("true");
    }else {
        console.log("false")
    }
}) */



