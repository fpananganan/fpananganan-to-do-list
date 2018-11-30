function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();

    // get the newToDoText
    let title = newToDoText.value;

    // create a new Li
    let newLi = document.createElement('li');

    // create a new input
    let checkbox = document.createElement('input');

    // create a delete button
    let deleteBut = document.createElement('button');

    // set the input's type to checkbox
    checkbox.type = "checkbox";

    // set the button type to delete
    deleteBut.textContent = "delete";

    // set the title
    newLi.textContent = title;

    // attach the checkbox to the Li
    newLi.appendChild(checkbox);

    // attach the Li to the ul
    toDoList.appendChild(newLi);

    // delete the Li from the ul
    toDoList.appendChild(deleteBut);

    //empty the input
    newToDoText.value = '';

    deleteBut.addEventListener('click', event => {
      toDoList.removeChild(newLi);
      toDoList.removeChild(deleteBut);
    }); 

  });
}

window.onload = function() {
  alert("The window has loaded!");
  onReady();
};
