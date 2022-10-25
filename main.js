var student = [];
function submit()
{
    var n1 = document.getElementById("student1").value;
    var n2 = document.getElementById("student2").value;
    var n3 = document.getElementById("student3").value;
    var n4 = document.getElementById("student4").value;
    student.push(n1);
    student.push(n2);
    student.push(n3);
    student.push(n4);
    console.log(student);
    document.getElementById("diplay_name").innerHTML = student;
    document.getElementById("submit_button").style.display = "none";
     document.getElementById("sort").style.display = "inline-block";
}