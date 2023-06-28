function getQuestion()
{
    number_1 = localStorage.getItem("number_1");
    document.getElementById("update_1").innerHTML = "<h3> Number 1 - " + number_1 + "</h3>";

    number_2 = localStorage.getItem("number_2");
    document.getElementById("update_2").innerHTML = "<h3> Number 2 - " + number_2 + "</h3>";
}