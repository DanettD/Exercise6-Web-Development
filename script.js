function calculateGrade() {
  var attendance = parseFloat(document.getElementById("attendance").value)
  var assignments = parseFloat(document.getElementById("assignments").value)
  var midterms = parseFloat(document.getElementById("midterms").value)
  var finals = parseFloat(document.getElementById("finals").value)

  if ([attendance, assignments, midterms, finals].some(score => score < 0 || score > 100)) {
    alert("All inputs must be between 0 and 100.");
    return;
  }

 var total = (attendance * 0.10) + (assignments * 0.20) + (midterms * 0.35) + (finals * 0.35);
  var grade = "";

  if (total >= 90) {
    grade = "A+";
  } else if (total >= 80) {
    grade = "A";
  } else if (total >= 70) {
    grade = "B";
  } else if (total >= 60) {
    grade = "C";
  } else {
    grade = "F";
  }

  alert(
    "Your grade is: " + grade + " (" + total.toFixed(2) + "%)\n\n" +
    "Grading Scale:\n" +
    "A+ : 90% and above\n" +
    "A  : 80% - 89%\n" +
    "B  : 70% - 79%\n" +
    "C  : 60% - 69%\n" +
    "F  : below 60%"
  );
}
