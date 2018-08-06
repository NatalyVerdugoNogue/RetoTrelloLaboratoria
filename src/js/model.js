window.model = {};

window.model.titleList = (titleList) => {
  if (titleList.length > 0) {
    return titleList
  } else {
    window.controller.formListTitle();
  };
};

window.model.titleOtherList = (titleOtherList) => {
  if (titleOtherList.length > 0) {
    return titleOtherList
  } else {
    window.controller.formOtherListTitle();
  };
};

window.model.textCard = () => {
  textCard = document.getElementById('firstCard').value;
  document.getElementById('firstCard').value = '';
  return textCard
};

window.model.spanCard = () => {
  spanCard = document.getElementById('spanText').value;
  console.log(spanCard);
  return spanCard
};