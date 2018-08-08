window.model = {};


window.model.getList = () => {
  const firestore = firebase.firestore();
  const settings = { /* your settings... */
    timestampsInSnapshots: true
  };
  firestore.settings(settings);
  return firestore.collection("list").orderBy('date', 'asc').get().then((collList) => {
    if (collList.docs.length === 0) {
      window.view.initCero();
    } else { return collList; }
  });
};


window.model.addList = (titleList) => {
  const firestore = firebase.firestore();
  const settings = { /* your settings... */
    timestampsInSnapshots: true
  };
  firestore.settings(settings);

  firestore.collection("list").add({
    title: titleList,
    date: new Date()
  })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
}


window.model.textCard = () => {
  textCard = document.getElementById('firstCard').value;
  document.getElementById('firstCard').value = '';
  return textCard
};