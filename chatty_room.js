
const firebaseConfig = {
      apiKey: "AIzaSyCuJbrYoPN4cJVZXyB1ONZ6AB7fzSpx7Zo",
      authDomain: "peng-social-network.firebaseapp.com",
      databaseURL: "https://peng-social-network-default-rtdb.firebaseio.com",
      projectId: "peng-social-network",
      storageBucket: "peng-social-network.appspot.com",
      messagingSenderId: "971453904006",
      appId: "1:971453904006:web:1fb30957267a6f78824d07"
    }
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
