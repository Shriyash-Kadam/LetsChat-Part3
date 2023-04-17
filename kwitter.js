// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzTmxtib4fC9GXny849hHGLZD66btcwJs",
  authDomain: "letschat-7744c.firebaseapp.com",
  databaseURL: "https://letschat-7744c-default-rtdb.firebaseio.com",
  projectId: "letschat-7744c",
  storageBucket: "letschat-7744c.appspot.com",
  messagingSenderId: "804362815058",
  appId: "1:804362815058:web:9a54c83288435598bf018b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
  
  function addUser(){
      user_name = document.getElementById("user_name").value;
      localStorage.setItem("user_name",user_name);
      window.location = "kwitter_room.html";
  }