window.view = {};


window.view.formListTitle = () => {
  const wallList = window.controller.getDataList();

  let htmlList = '';
  const numCar = 0;

  wallList.then(docs => {
    docs.forEach(doc => {
      const name = doc.data();
      htmlList = htmlList +
        `<div class="col-auto p-0 card ml-2">
          <form class="formList">
            <div class="form-group mb-1">
              <div class="row mx-0 p-1">
                <div class="col-auto px-0 mr-auto">
                  <button class="form-font-size btn-card p-1 font-weight-bold" >${name.title}</button>
                </div>
                <div class="col-auto p-0">
                  <button type="button" class="btn-card btn-font-card btn-card-hover">
                    <i class="fas fa-ellipsis-h"></i>
                  </button>
                </div>
              </div>
              <div class="row mx-0"  id="a${doc.id}">
                <div class="col-12 px-0 btn-card-hover">
                  <button type="button" class="btn form-font-size btn-card btn-font-card" onclick="window.controller.addCard('${doc.id}','${numCar}')">
                    <i class="fas fa-plus"></i>
                    <span>Añada una tarjeta</span>
                  </button>   
                </div>
              </div>
            </div>
          </form>
        </div>`;
    });

    let divFormTitle = document.getElementById('formList');
    divFormTitle.innerHTML = htmlList +
      `<div class="col p-0 card ml-2" id="otherList">
        <form class="formList p-1">
          <div class="form-group mb-1">
            <input type="text" class="form-control form-font-size form-input" placeholder="Introduzca el título de la lista..." id="getTitleList">
          </div>
          <div class="row mx-0">
            <div class="col-auto px-0">
              <button type="button" class="btn btn-success form-font-size font-weight-bold py-1" onclick="window.controller.addList()">Añadir lista</button>
            </div>
            <div class="col-auto pt-2">
              <button type="button" class="close" onclick="window.view.closeOtherList()">
              <span>&times;</span>
              </button>
            </div>
          </div>
        </form>
      </div>`;
  });
};


window.view.initCero = () => {
  let divInitCero = document.getElementById('formList');
  divInitCero.innerHTML =
    `<div class="col pl-2">
    <button type="button" class="btn-list text-left pl-3" onclick="window.view.addFirstList()">
      <i class="fas fa-plus"></i>
      <span>Añada una lista</span>
    </button>
  </div>`;
};


window.view.addFirstList = () => {
  let divFirstList = document.getElementById('formList');
  divFirstList.innerHTML =
    `<div class="col p-0 card ml-2" id="otherList">
      <form class="formList p-1">
        <div class="form-group mb-1">
          <input type="text" class="form-control form-font-size form-input" placeholder="Introduzca el título de la lista..." id="getTitleList">
        </div>
        <div class="row mx-0">
          <div class="col-auto px-0">
            <button type="button" class="btn btn-success form-font-size font-weight-bold py-1" onclick="window.controller.addList()">Añadir lista</button>
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
        <span>Añada otra lista</span>
      </button>`;
};


window.view.addOtherList = () => {
  let divOtherList = document.getElementById('otherList');
  divOtherList.innerHTML =
    `<div class="col p-0 card ml-2" id="otherList">
      <form class="formList p-1">
        <div class="form-group mb-1">
          <input type="text" class="form-control form-font-size form-input" placeholder="Introduzca el título de la lista..." id="getOtherTitleList">
        </div>
        <div class="row mx-0">
          <div class="col-auto px-0">
            <button type="button" class="btn btn-success form-font-size font-weight-bold py-1" onclick="window.controller.addList()">Añadir lista</button>
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


window.view.addCard = (id, nc) => {
  let divAddCard = document.getElementById('a' + id);

  divAddCard.innerHTML =
    `<div class="col-12 px-2" id="addTextCard">
    </div>
    <div class="col-12 p-0" id="closeOtherCard">
      <div class="col-12 px-2">
        <textarea name="TitleCard" id="${nc}${id}" class="form-font-size textarea-card p-1" cols="28" rows="3" placeholder="Introduzca un título para esta tarjeta..."></textarea>
      </div>
      <div class="row mx-0">
        <div class="col-auto px-2 pb-2">
          <button type="button" class="btn btn-success form-font-size font-weight-bold py-1" onclick="window.controller.dataCard('${id}','${nc}${id}')">Añadir tarjeta</button>
        </div>
        <div class="col-auto pl-1 pt-1" style="margin-right: 62px">
          <button type="button" class="close" onclick="window.view.otherCard()">
            <span>&times;</span>
          </button>
        </div>
        <div class="col-auto p-0">
          <button type="button" class="btn-card btn-font-card btn-card-hover">
            <i class="fas fa-ellipsis-h"></i>
          </button>
        </div>
      </div>
    </div>`;
};


window.view.addNewCard = (textCard) => {
  let divAddCard = document.getElementById('addTextCard');
  divAddCard.innerHTML =
    `<div class="col-12 p-2 textarea-card my-2 p-1 card-hover">
      <button class="form-font-size btn-card" id="spanText">${textCard}</button>
    </div>`;
}


window.view.otherCard = () => {
  let divAddCard = document.getElementById('closeOtherCard');
  divAddCard.innerHTML =
    `<div class="col-12 p-0">
      <button type="button" class="btn-list text-left" onclick="window.view.newCard()">
        <i class="fas fa-plus"></i>
        <span>Añada otra tarjeta</span>
      </button>
    </div>`;
}


window.view.newCard = () => {
  let divAddCard = document.getElementById('closeOtherCard');
  divAddCard.innerHTML =
    `<div class="col-12 px-2">
      <textarea name="TitleCard" id="firstCard" class="form-font-size textarea-card p-1" cols="28" rows="3" placeholder="Introduzca un título para esta tarjeta..."></textarea>
    </div>
    <div class="row mx-0">
      <div class="col-auto px-2 pb-2">
        <button type="button" class="btn btn-success form-font-size font-weight-bold py-1" onclick="window.controller.addCard()">Añadir tarjeta</button>
      </div>
      <div class="col-auto pl-1 pt-1" style="margin-right: 62px">
        <button type="button" class="close" onclick="window.view.otherCard()">
          <span>&times;</span>
        </button>
      </div>
      <div class="col-auto p-0">
        <button type="button" class="btn-card btn-font-card btn-card-hover">
          <i class="fas fa-ellipsis-h"></i>
        </button>
      </div>
    </div>`
};