
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDCloZ1_Joj49OlXe9F5Fn18QcZBE2Tj9s",
      authDomain: "kwitter-f990e.firebaseapp.com",
      databaseURL: "https://kwitter-f990e-default-rtdb.firebaseio.com",
      projectId: "kwitter-f990e",
      storageBucket: "kwitter-f990e.appspot.com",
      messagingSenderId: "441373938614",
      appId: "1:441373938614:web:dac7e488fae2aaf8f26717"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
