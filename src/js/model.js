window.model = {};

window.model.titleList = () => {
  titleList = document.getElementById('getTitleList').value;
  if (titleList.length > 0) {
    return titleList
  } else {
    window.controller.formListTitle();
  };
};

window.model.titleOtherList = () => {
  titleOtherList = document.getElementById('getOtherTitleList').value;
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

// window.model = {};

// window.model.titleList = (cont) => {
//   titleList = document.getElementById('getTitleList').value;
//   if (titleList.length > 0) {
//     return titleList
//   } else {
//     window.controller.formListTitle();
//   };
// };

// window.model.otherTitleList = (cont) => {
//   otherTitleList = document.getElementById(`title${cont}`).value;
//   if (otherTitleList.length > 0) {
//     return otherTitleList
//   } else {
//     window.controller.othersList(cont);
//   };
// };

// window.model.textCard = () => {
//   textCard = document.getElementById('firstCard').value;
//   document.getElementById('firstCard').value = '';
//   return textCard
// };

// window.model.spanCard = () => {
//   spanCard = document.getElementById('spanText').value;
//   console.log(spanCard);
//   return spanCard
// };