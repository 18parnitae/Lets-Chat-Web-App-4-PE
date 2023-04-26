//YOUR FIREBASE LINKS
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyAV4OFxReNDd5taJQAak-T4RkzuESgbTTQ",
    authDomain: "kwitter-b2c90.firebaseapp.com",
    databaseURL: "https://kwitter-b2c90-default-rtdb.firebaseio.com/",
    projectId: "kwitter-b2c90",
    storageBucket: "kwitter-b2c90.appspot.com",
    messagingSenderId: "112699484984",
    appId: "1:112699484984:web:df7e84290803804f99efcd",
    measurementId: "G-6P7TNW0YRD"
  };
  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

      function send()
    {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
    }
    