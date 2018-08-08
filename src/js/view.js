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
    `<div class="col-auto p-0 card ml-2">
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
            <div class="col-12 px-0 btn-card-hover">
              <button type="button" class="btn form-font-size btn-card btn-font-card" onclick="window.view.addCard()">
                <i class="fas fa-plus"></i>
                <span class="">Añada una tarjeta</span>
              </button>   
            </div>
          </div>
        </div>
      </form>
    </div>

    <div class="col p-0 card ml-2" id="otherList">
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
    `<div class="col p-0 card ml-2" id="otherList">
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
    `<div class="col-auto p-0 card ml-2">
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
    `<div class="col-12 px-2" id="addTextCard">
    </div>
    <div class="col-12 p-0" id="closeOtherCard">
      <div class="col-12 px-2">
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
        <span class="">Añada otra tarjeta</span>
      </button>
    </div>`;
}

window.view.spanCard = (spanCard) => {
  let divSpanCard = document.getElementById('addCard');
  divSpanCard.innerHTML =
    `<div class="col-12 px-2">
  <span class="form-font-size">${spanCard}</span>
  </div>
  <div class="col-12 p-0" id="closeOtherCard">
    <div class="col-12 px-2">
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
    </div>
  </div>`
};

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


// window.view = {};

// window.view.formList = () => {
//   const cont = 0;
//   let divForm = document.getElementById('formList');
//   divForm.innerHTML =
//     `<div class="row mx-0 scroll" id="List"> 
//       <div class="col pl-2" id="closeList">
//         <form class="formList p-1">
//           <div class="form-group mb-1">
//             <input type="text" class="form-control form-font-size form-input" placeholder="Introduzca el título de la lista..." id="getTitleList">
//           </div>
//           <div class="row mx-0">
//             <div class="col-auto px-0">
//               <button type="button" class="btn btn-success form-font-size font-weight-bold py-1" onclick="window.controller.formListTitle('${cont}')">Añadir lista</button>
//             </div>
//             <div class="col-auto pt-2">
//               <button type="button" class="close" onclick="window.view.closeList()">
//                 <span>&times;</span>
//               </button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>`;
// };

// window.view.formListTitle = (titleList, cont) => {
//   let divFormTitle = document.getElementById('List');
//   divFormTitle.innerHTML =
//     `<div class="col-auto p-0 card ml-2">
//       <form class="formList">
//         <div class="form-group mb-1">
//           <div class="row mx-0 p-1">
//             <div class="col-auto px-0 mr-auto">
//               <button class="form-font-size btn-card p-1 font-weight-bold" id="addTitleList">${titleList}</button>
//             </div>
//             <div class="col-auto p-0">
//               <button type="button" class="btn-card btn-font-card btn-card-hover">
//                 <i class="fas fa-ellipsis-h"></i>
//               </button>
//             </div>
//           </div>
//           <div class="row mx-0" id="addCard">
//             <div class="col-12 px-0 btn-card-hover">
//               <button type="button" class="btn form-font-size btn-card btn-font-card" onclick="window.view.addCard()">
//                 <i class="fas fa-plus"></i>
//                 <span class="">Añada una tarjeta</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </form>
//     </div>
    
//     <div class="" id="a${cont}">
//       <div class="col p-0 card ml-2" id="otherList">
//         <form class="formList p-1">
//           <div class="form-group mb-1">
//             <input type="text" class="form-control form-font-size form-input" placeholder="Introduzca el título de la lista..." id="title${cont}">
//           </div>
//           <div class="row mx-0">
//             <div class="col-auto px-0">
//               <button type="button" class="btn btn-success form-font-size font-weight-bold py-1" onclick="window.controller.othersList('${cont}')">Añadir lista</button>
//             </div>
//             <div class="col-auto pt-2">
//               <button type="button" class="close" onclick="window.view.closeOtherList()">
//                 <span>&times;</span>
//               </button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>`;
// };

// window.view.otherList = (titleList, cont) => {
//   let divFormTitle = document.getElementById(`a${cont}`);
//   console.log(divFormTitle);

//   divFormTitle.innerHTML =
//     `<div class="col-auto p-0 card ml-2">
//       <form class="formList">
//         <div class="form-group mb-1">
//           <div class="row mx-0 p-1">
//             <div class="col-auto px-0 mr-auto">
//               <button class="form-font-size btn-card p-1 font-weight-bold">${titleList}</button>
//             </div>
//             <div class="col-auto p-0">
//               <button type="button" class="btn-card btn-font-card btn-card-hover">
//                 <i class="fas fa-ellipsis-h"></i>
//               </button>
//             </div>
//           </div>
//           <div class="row mx-0" id="addCard">
//             <div class="col-12 px-0 btn-card-hover">
//               <button type="button" class="btn form-font-size btn-card btn-font-card" onclick="window.view.addCard()">
//                 <i class="fas fa-plus"></i>
//                 <span class="">Añada una tarjeta</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </form>
//     </div>


//     <div class="" id="a${cont + 1}">
//       <div class="col p-0 card ml-2" id="otherList">
//         <form class="formList p-1">
//           <div class="form-group mb-1">
//             <input type="text" class="form-control form-font-size form-input" placeholder="Introduzca el título de la lista..." id="title${cont + 1}">
//           </div>
//           <div class="row mx-0">
//             <div class="col-auto px-0">
//               <button type="button" class="btn btn-success form-font-size font-weight-bold py-1" onclick="window.controller.othersList('${cont + 1}')">Añadir lista</button>
//             </div>
//             <div class="col-auto pt-2">
//               <button type="button" class="close" onclick="window.view.closeOtherList()">
//                 <span>&times;</span>
//               </button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>`;
// };
