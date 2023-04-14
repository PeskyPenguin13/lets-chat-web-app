const firebaseConfig = {
      apiKey: "AIzaSyDW8d7nwqKuAEiFwKuOWDiHGkamyo-NssM",
      authDomain: "lets-chat-web-app-8ab03.firebaseapp.com",
      databaseURL: "https://lets-chat-web-app-8ab03-default-rtdb.firebaseio.com",
      projectId: "lets-chat-web-app-8ab03",
      storageBucket: "lets-chat-web-app-8ab03.appspot.com",
      messagingSenderId: "484951225540",
      appId: "1:484951225540:web:56b611801ff088c2938591"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
