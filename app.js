function onReady() {
  const addToDoForm = document.getElementByID('addToDoForm');
  const newToDoText = document.getElementByID('newToDoText');
  const toDoList = document.getElementByID("toDoList");

  addToDoForm.addEventListener();
  addToDoForm.addEventListener('submit', () => {
    event.preventDefault();

    // get the text
    let title = newToDoText.value;

    // create a new Li
    let new Li = document.createElement('li');

    // create a new input
    let checkbox = document.createElement('input');

    // set the input's type to checkbox
    checkbox.type = "checkbox";

    // set the title
    newLi.textContent = title;

    // attach the checkbox to the Li
    newLi.appendChild(checkbox);

    // attach the Li to the ul
    toDoList.appendChild(newLi);

    //empty the input
    newToDoText.value = '';

  });
}

window.onload = function() {
  alert("The window has loaded!");
  onReady();
};
