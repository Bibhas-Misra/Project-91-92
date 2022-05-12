p1_score = 0;
p2_score = 0;
document.getElementById("p1_score").innerHTML = p1_score;
document.getElementById("p2_score").innerHTML = p2_score;

p1 = localStorage.getItem("player_1");
p2 = localStorage.getItem("player_2");
document.getElementById("p1_name").innerHTML = p1 + " = ";
document.getElementById("p2_name").innerHTML = p2 + " = ";

function send() {
    no1 = document.getElementById("no1").value;
    no2 = document.getElementById("no2").value;
    actual_ans = parseInt(no1) * parseInt(no2);
    q_no = "<h4>" + no1 + "X" + no2 + "</h4>";
    input_box = "<br>Answer: <input type='text' id='input_box'>";
    check_btn = "<br><br><button class='btn btn-info' onclick='check()'>Check</button";
    row = q_no + input_box + check_btn;
    document.getElementById("output").innerHTML = row;
    document.getElementById("no1").value = ""; 
    document.getElementById("no2").value = ""; 
}

q_turn = "p1";
a_turn = "p2";
document.getElementById("q_turn").innerHTML = "Question Turn - " + p1;
document.getElementById("a_turn").innerHTML = "Answer Turn - " + p2;

function check() {
    answer = document.getElementById("input_box").value;
    if (answer == actual_ans) {
        if (a_turn == "p1") {
             update_p1_score = p1_score + 1;
             document.getElementById("p1_score").innerHTML = update_p1_score;
        }
        else {
            update_p2_score = p2_score + 1;
             document.getElementById("p2_score").innerHTML = update_p2_score;
        }
    }
    if (q_turn == "p1") {
        q_turn = "p2";
        document.getElementById("q_turn").innerHTML = "Question Turn - " + p2;
    }
    else {
        q_turn = "p1";
        document.getElementById("q_turn").innerHTML = "Question Turn - " + p1;
    }
    if (a_turn == "p1") {
        a_turn = "p2";
        document.getElementById("a_turn").innerHTML = "Answer Turn - " + p2;
    }
    else {
        a_turn = "p1";
        document.getElementById("a_turn").innerHTML = "Answer Turn - " + p1;
    }
}