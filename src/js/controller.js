window.controller = {};

window.controller.formList = () => {
  window.view.formList();
};

window.controller.formListTitle = () => {
  titleList = document.getElementById('getTitleList').value;
  window.model.titleList(titleList);
  window.view.formListTitle(titleList);
};

window.controller.formOtherListTitle = () => {
  titleOtherList = document.getElementById('getOtherTitleList').value;
  window.model.titleOtherList(titleOtherList);
  window.view.formOtherListTitle(titleOtherList);
}

window.controller.addCard = () => {
  let textCard = window.model.textCard();
  window.view.addNewCard(textCard);
};