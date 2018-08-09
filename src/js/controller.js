window.controller = {};


window.onload = () => {
  window.model.getList();
  window.view.formListTitle();
}


window.controller.getDataList = () => {
  return window.model.getList();
}


window.controller.addList = () => {
  const titleList = document.getElementById('getTitleList').value;
  window.model.addList(titleList);
  window.view.formListTitle();
};


window.controller.addCard = () => {
  let textCard = window.model.textCard();
  window.view.addNewCard(textCard);
};


window.controller.addCard = (id, nc) => {
  window.view.addCard(id, nc);
};


window.controller.dataCard = (id, ncid) => {
  window.model.addCard(id, ncid);
  window.model.getCard(id, ncid);
}