function addUser() {
   p1 = document.getElementById("p1_input").value;
   p2 = document.getElementById("p2_input").value; 
   localStorage.setItem("player_1", p1);
   localStorage.setItem("player_2", p2);
   window.location = "quiz.html";
}