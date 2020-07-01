/*
Course Project - Phase One
By: Tim Aryavong
Date: Sunday June 21, 2020
Description: A to-do list that focuses on demonstrating event handlers and DOM manipulation
*/


let list = document.querySelector('ol'); // bind ol element
let submit = document.querySelector('.submit'); // bind submit button
let remove = document.querySelector('.remove'); // bind delete button

function addItem() {
    let checkbox = document.createElement('input'); // create input
    let newItem = document.createElement('li'); // create list element

    checkbox.setAttribute('type', 'checkbox'); // make input into a checkbox
    newItem.innerHTML = document.getElementById('inputItem').value + ' '; // get list text from input
    newItem.appendChild(checkbox); // append checkbox to the new list item
    list.appendChild(newItem); // append new item to ol
    document.getElementById('inputItem').value = ''; // clear the input field
}

function removeItem(e) { // add alert box that asks if you really want to delete the items.
    if(confirm('Are you sure you want to delete?')){ // pop up confirmation for deletion
        let checkedBoxes = document.querySelectorAll('input'); // find all inputs
        let counter = 0;

        for (let index = 0; index < checkedBoxes.length; index++) { // for each input where 'checked' attribute is true, remove its parent node('li')
            if (checkedBoxes[index].checked == true){
                checkedBoxes[index].parentNode.remove();
                counter++;
            }
        }
        alert(counter + ' items deleted.');
    }
}

submit.addEventListener('click', addItem); // listen for submit clicks
remove.addEventListener('click', removeItem); // listen for delete clicks

list.onchange = function (event) { // if checkbox is checked it will bubble to ol
    if (event.target.checked == true) { // if the box is checked line-through the text
        event.target.parentNode.style.textDecorationLine = 'line-through'; // change targeted item css to line-through
        list.appendChild(event.target.parentNode); // appends the targeted node to the bottom of the list
    } else { // else remove the line-through
        event.target.parentNode.style.textDecorationLine = 'none';
    }
};

window.onkeydown = function (e) { // adds enter key functionality to add items faster for testing
    if (e.key == 'Enter') // key (checks the name of the key) in place of keyCode (checks the code of the key), cool
        addItem();
    if (e.key == 'Delete')
        removeItem();
};
