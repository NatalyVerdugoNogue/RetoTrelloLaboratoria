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


window.model.addCard = (id, ncid) => {
  textCard = document.getElementById(ncid).value;

  const firestore = firebase.firestore();
  const settings = { /* your settings... */
    timestampsInSnapshots: true
  };
  firestore.settings(settings);

  var newCard = firestore.collection('list').doc(id);

  var setWithMerge = newCard.set({
    1: textCard
  }, { merge: true });
}


window.model.getCard = (id, ncid) => {
  const firestore = firebase.firestore();
  const settings = { /* your settings... */
    timestampsInSnapshots: true
  };
  firestore.settings(settings);
  var docRef = firestore.collection("list").doc(id);

  docRef.get().then(function (doc) {
    if (doc.exists) {
      console.log("Document data:", doc.data()[1]);
      window.view.addNewCard(doc.data()[1]);
      document.getElementById(ncid).value = '';

    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }).catch(function (error) {
    console.log("Error getting document:", error);
  });
}