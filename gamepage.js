player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");
var player1_score=0;
var player2_score=0;
document.getElementById("player1_name").innerHTML=player1_name;
document.getElementById("player2_name").innerHTML=player2_name;
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("question_turn").innerHTML="question turn:"+player1_name;
document.getElementById("answer_turn").innerHTML="answer turn:"+player2_name;
function word_send() {
var get_word=document.getElementById('word').value;
var word=get_word.toLowerCase();
c1=word.charAt(0);
midlength=Math.floor(word.length/2);
c2=word.charAt(midlength);
last=word.length-1;
c3=word.charAt(last);
removec1=word.replace(c1,'_');
removec2=removec1.replace(c2, '_');
removec3=removec2.replace(c3, '_');
question="<h4 id='word_display'>Q."+removec3+" </h4>";
answer="<br> answer:<input type='text' placeholder='enter answer here'>";
checkbutton="<br> <br> <button style='background-color:blue' onclick='check()'> check </button>";
row=question+answer+checkbutton;
document.getElementById("output").innerHTML=row;
document.getElementById("word").value="";
}