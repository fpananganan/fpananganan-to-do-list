function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', () => {
    event.preventDefault();

    // get the text
    let title = new ToDoText.value;

    // create a new li
    let newLi = document.createElement('li');

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
