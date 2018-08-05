window.view = {};

window.view.formList = () => {
  let divForm = document.getElementById('formList');
  divForm.innerHTML =
    `<div class="col pl-2" id="closeList">
      <form class="formList p-1">
        <div class="form-group mb-1">
          <input type="text" class="form-control form-font-size form-input" placeholder="Introduzca el título de la lista..." id="getTitleList">
        </div>
        <div class="row mx-0">
          <div class="col-auto px-0">
            <button type="button" class="btn btn-success form-font-size font-weight-bold py-1" onclick="window.controller.formListTitle()">Añadir lista</button>
          </div>
          <div class="col-auto pt-2">
            <button type="button" class="close" onclick="window.view.closeList()">
              <span>&times;</span>
            </button>
          </div>
        </div>
      </form>
    </div>`;
}

window.view.closeList = () => {
  let divCloseTitle = document.getElementById('closeList');
  divCloseTitle.innerHTML =
    `<button type="button" class="btn-list text-left pl-3" onclick="window.controller.formList()">
      <i class="fas fa-plus"></i>
      <span class="">Añada una lista</span>
    </button>`;
}

window.view.formListTitle = (titleList) => {
  let divFormTitle = document.getElementById('formList');
  divFormTitle.innerHTML =
    `<div class="col-auto pl-2 pr-0">
      <form class="formList">
        <div class="form-group mb-1">
          <div class="row mx-0 p-1">
            <div class="col-auto px-0 mr-auto">
              <button class="form-font-size btn-card p-1 font-weight-bold" id="addTitleList">${titleList}</button>
            </div>
            <div class="col-auto p-0">
              <button type="button" class="btn-card btn-font-card btn-card-hover">
                <i class="fas fa-ellipsis-h"></i>
              </button>
            </div>
          </div>
          <div class="row mx-0"  id="addCard">
            <div class="row mx-0">
              <div class="col-12 px-0 btn-card-hover">
                <button type="button" class="btn form-font-size btn-card btn-font-card" onclick="window.view.addCard()">
                  <i class="fas fa-plus"></i>
                  <span class="">Añada una tarjeta</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>

    <div class="col pl-2 pr-0" id="otherList">
      <form class="formList p-1">
        <div class="form-group mb-1">
          <input type="text" class="form-control form-font-size form-input" placeholder="Introduzca el título de la lista..." id="getOtherTitleList">
        </div>
        <div class="row mx-0">
          <div class="col-auto px-0">
            <button type="button" class="btn btn-success form-font-size font-weight-bold py-1" onclick="window.controller.formOtherListTitle()">Añadir lista</button>
          </div>
          <div class="col-auto pt-2">
            <button type="button" class="close" onclick="window.view.closeOtherList()">
            <span>&times;</span>
            </button>
          </div>
        </div>
      </form>
    </div>`;
};

window.view.closeOtherList = () => {
  let divFormOtherTitle = document.getElementById('otherList');
  divFormOtherTitle.innerHTML =
    `<button type="button" class="btn-list text-left pl-3" onclick="window.view.addOtherList()">
        <i class="fas fa-plus"></i>
        <span class="">Añada otra lista</span>
      </button>`;
};

window.view.addOtherList = () => {
  let divOtherList = document.getElementById('otherList');
  divOtherList.innerHTML =
    `<div class="col pl-2 pr-0" id="otherList">
      <form class="formList p-1">
        <div class="form-group mb-1">
          <input type="text" class="form-control form-font-size form-input" placeholder="Introduzca el título de la lista..." id="getOtherTitleList">
        </div>
        <div class="row mx-0">
          <div class="col-auto px-0">
            <button type="button" class="btn btn-success form-font-size font-weight-bold py-1" onclick="window.controller.formOtherListTitle()">Añadir lista</button>
          </div>
          <div class="col-auto pt-2">
            <button type="button" class="close" onclick="window.view.closeOtherList()">
            <span>&times;</span>
            </button>
          </div>
        </div>
      </form>
    </div>`;
};

window.view.formOtherListTitle = (titleOtherList) => {
  let divFormOtherTitle = document.getElementById('otherList');
  divFormOtherTitle.innerHTML =
    `<div class="col-auto pl-2 pr-0">
      <form class="formList">
        <div class="form-group mb-1">
          <div class="row mx-0 p-1">
            <div class="col-auto px-0 mr-auto">
              <button class="form-font-size btn-card p-1 font-weight-bold" id="addTitleList">${titleOtherList}</button>
            </div>
            <div class="col-auto p-0">
              <button type="button" class="btn-card btn-font-card btn-card-hover">
                <i class="fas fa-ellipsis-h"></i>
              </button>
            </div>
          </div>
          <div class="row mx-0">
            <div class="col-12 px-0 btn-card-hover">
              <button type="button" class="btn form-font-size btn-card btn-font-card">
                <i class="fas fa-plus"></i>
                <span class="">Añada una tarjeta</span>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>`;
};


window.view.addCard = () => {
  let divAddCard = document.getElementById('addCard');
  divAddCard.innerHTML =
    `<div class="col-12 px-2">
      <textarea name="TitleCard" id="" class="form-font-size textarea-card p-1" cols="28" rows="3" placeholder="Introduzca un título para esta tarjeta..."></textarea>
    </div>
    <div class="row mx-0">
      <div class="col-auto px-2 pb-2">
        <button type="button" class="btn btn-success form-font-size font-weight-bold py-1" onclick="">Añadir tarjeta</button>
      </div>
      <div class="col-auto pl-1 pt-1" style="margin-right: 62px">
        <button type="button" class="close" onclick="">
          <span>&times;</span>
        </button>
      </div>
      <div class="col-auto p-0">
        <button type="button" class="btn-card btn-font-card btn-card-hover">
          <i class="fas fa-ellipsis-h"></i>
        </button>
      </div>
    </div>`;
};