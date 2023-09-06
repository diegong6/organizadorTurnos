document.getElementById("formTask").addEventListener("submit", saveTask);

function saveTask(e) {
  let title = document.getElementById("title").value;
  let description = document.getElementById("description").value;
  console.log(description);

  let task = {
    title,
    description,
  };

  if (localStorage.getItem("tasks") === null) {
    let tasks = [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  } else {
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  getTasks();
  document.getElementById("formTask").reset();
  e.preventDefault();
}

function deleteTask(title) {
  console.log(title);
  let tasks = JSON.parse(localStorage.getItem("tasks"));
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].title == title) {
      tasks.splice(i, 1);
    }
  }

  localStorage.setItem("tasks", JSON.stringify(tasks));
  getTasks();
}

function getTasks() {
  let tasks = JSON.parse(localStorage.getItem("tasks"));
  let tasksView = document.getElementById("tasks");
  tasksView.innerHTML = "";
  for (let i = 0; i < tasks.length; i++) {
    let title = tasks[i].title;
    let description = tasks[i].description;

    tasksView.innerHTML += `<div class="card mb-3 rounded shadow-lg">
        <div class="card-body">
          <p style="font-size: 17px; text-align: center; justify-content: center; color: var(--clr-dark); padding: 5px; ">${title} <i class="bi bi-arrow-right"></i> ${description}
          <br><br><a href="#" onclick="deleteTask('${title}')" class="btn btn-danger ml-5 rounded">Borrar turno</a>
          </p>
        </div>
      </div>`;
  }
}

getTasks();

// boton up

const btn_up = document.getElementById("btn_up");
btn_up.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

window.onscroll = () => {
  add_btn_up();
};

const add_btn_up = () => {
  if (window.scrollY < 300) {
    btn_up.classList.remove("btn_up-on");
  } else {
    btn_up.classList.add("btn_up-on");
  }
};

//PRUEBA

function resetear() {
  document.getElementById("tasks").innerHTML = "";
  localStorage.clear();
}