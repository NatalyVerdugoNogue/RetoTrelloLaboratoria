window.controller = {};

window.controller.formList = () => {
  window.view.formList();
};

window.controller.formListTitle = () => {
  let titleList = window.model.titleList();
  window.view.formListTitle(titleList);
};

window.controller.formOtherListTitle = () => {
  let titleOtherList = window.model.titleOtherList();
  window.view.formOtherListTitle(titleOtherList);
}