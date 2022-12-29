let todoName = document.getElementById("todo-name"); //mengambil element berupa id, element todo-name (di line 22 html)
let todoSimpan = document.getElementById("todo-simpan"); //mengambil element berupa id, element todo-simpan (di line 29 html)

todoSimpan.addEventListener("click", function () {
  //membuat button simpan bisa menerima kegiatan yang di input dengan menggunakan addEventListener dan yang mentrigger adalah click, lalu setelah di 'click' button nya maka akan menjalankan sebuah function
  if (todoName.value == "") {
    alert("silahkan input kegiatan"); //kalau di kolom input gak ada apa-apa atau NULL, maka akan diberikan allert
  } else {
    let todoContainer = document.querySelector(".list-group"); //membuat sebuah variabel bernama todoContainer yang isi nya adalah mencari element yang bernama list-group (tanda . atau 'titik' itu wajib dipakai kalau mau memasukkan element yang lain)
    let todoHTML = todoContainer.innerHTML; //lalu membuat variabel baru bernama todoHTML yang isi nya adalah mengubah property "list-group" (line 35) dengan parameter yang akan diberikan berikutnya dengan menggunakan .innerHTML
    todoHTML += ` 
          <li class="list-group-item d-flex justify-content-between">
            <div>
              <input class="form-check-input me-1" type="checkbox">
              <span>${todoName.value}</span>
            </div>
            <button class="badge border-0 bg-danger btn-hapus">x</button>
          </li>`; //ini merupakan parameter yang akan masukkan ke property "list-group" dan btw itu yang setelah += kan ada tanda kecil, nah itu namanya 'backtick' dan ada di bawah tombol esc keyboard
    todoContainer.innerHTML = todoHTML; //dan ini bisa dikatakan kalau kita mengulangi proses yang sama kayak tadi, kalau gak ngerti ini sama aja kayak kita kembali ke line 10 diatas
    todoName.value = ""; //ini bikin form input nya jadi bersih kembali
    todoName.focus();

    let checkTodo = document.querySelectorAll(".form-check-input"); //kita membuat variabel yang akan membuat list nya bisa di tandain selesai atau di coret
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
});
console.log(todoName);
