let todoName = document.getElementById("todo-name"); //mengambil element berupa id, element todo-name
let todoSimpan = document.getElementById("todo-simpan"); //mengambil element berupa id, element todo-simpan

todoSimpan.addEventListener("click", function () {
  if (todoName.value == "") {
    alert("silahkan input kegiatan");
  } else {
    let todoContainer = document.querySelector(".list-group");
    let todoHTML = todoContainer.innerHTML;
    todoHTML += `
          <li class="list-group-item d-flex justify-content-between">
            <div>
              <input class="form-check-input me-1" type="checkbox">
              <span>${todoName.value}</span>
            </div>
            <button class="badge border-0 bg-danger btn-hapus">x</button>
          </li>`;
    todoContainer.innerHTML = todoHTML;
    todoName.value = "";
    todoName.focus();

    let checkTodo = document.querySelectorAll(".form-check-input");
    for (let i = 0; i < checkTodo.length; i++) {
      const input = checkTodo[i];
      input.addEventListener("change", function () {
        let todoSpan = input.nextElementSibling;
        todoSpan.classList.toggle("text-decoration-line-through");
      });
    }

    let btnHapus = document.querySelectorAll(".btn-hapus");
    for (let x = 0; x < checkTodo.length; x++) {
      const hapus = btnHapus[x];
      hapus.addEventListener("click", function () {
        this.parentElement.remove();
      });
    }
  }
}); //membuat button simpan bisa menerima kegiatan yang di input dengan menggunakan addEventListener dan yang mentrigger adalah click, lalu setelah di 'click' button nya maka akan menjalankan function di

console.log(todoName);
