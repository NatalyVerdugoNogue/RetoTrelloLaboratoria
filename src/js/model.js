window.model = {};

window.model.titleList = () => {
  titleList = document.getElementById('getTitleList').value;
  return titleList
}

window.model.titleOtherList = () => {
  titleOtherList = document.getElementById('getOtherTitleList').value;
  return titleOtherList
}

window.model.textCard = () => {
  textCard = document.getElementById('firstCard').value;
  document.getElementById('firstCard').value = '';
  return textCard
}

window.model.spanCard = () => {
  spanCard = document.getElementById('spanText').value;
  console.log(spanCard);
  return spanCard
}
