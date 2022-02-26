function adduser () {
player1_name=document.getElementById("Player1_name_input");
localStorage.setItem("player1_name",player1_name);
player2_name=document.getElementById("Player2_name_input");
localStorage.setItem("player2_name",player2_name);
window.location="Gamepage.html";
}