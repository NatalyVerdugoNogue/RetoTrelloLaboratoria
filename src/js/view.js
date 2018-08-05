window.view = {};

window.view.formList = () => {
  let divForm = document.getElementById('formList');
  divForm.innerHTML =
    `<form class="formList p-1">
      <div class="form-group mb-1">
        <input type="email" class="form-control form-fond-size form-input" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Introduzca el título de la lista...">
      </div>
      <div class="row mx-0">
        <div class="col-auto px-0">
          <button type="button" class="btn btn-success form-fond-size font-weight-bold">Añadir lista</button>
        </div>
        <div class="col-auto pt-2">
          <button type="button" class="close">
            <span>&times;</span>
          </button>
        </div>
      </div>
    </form>`
}