
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
     user_name=localStorage.getItem("user_name");
     document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name -" +Room_names);
      row = "<div class='room_name'id="+Room_names+"onclick='redirectToRoomName(this.id)'>#" + Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();

function addRoom()
{
room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({

});

localStorage.setItem("room_name" , room_name);

window.location = "kwitter_page.html"

}

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}
function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "kwitter.html";

}
