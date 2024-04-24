// import swal from "sweetalert";
// var swal = new swal();

const myForm = document.getElementById("myForm");
const namee = myForm["name"];
const rollno = myForm["rollno"];
const age = myForm["age"];
const studentResultCon = document.querySelector(".student-results");

let students = JSON.parse(localStorage.getItem("studentData")) || [];
studentResultCon.style.display = students.length === 0 ? "none" : "block";

const addStudent = (name, rollno, age) => {
  students.push({
    name,
    rollno,
    age,
  });
  localStorage.setItem("studentData", JSON.stringify(students));
  return { name, rollno, age };
};

const createStudent = ({ name, rollno, age }) => {
  const studentDiv = document.createElement("div");
  const nameS = document.createElement("h3");
  nameS.innerHTML = "Student : " + name;
  const rollnoS = document.createElement("p");
  rollnoS.innerHTML = "Roll No : " + rollno;
  const ageS = document.createElement("p");
  ageS.innerHTML = "Age : " + age;
  studentDiv.append(nameS, rollnoS, ageS);
  studentResultCon.appendChild(studentDiv);
  studentResultCon.style.display = students.length === 0 ? "none" : "block";
};

myForm.onsubmit = (e) => {
  e.preventDefault();
  if (namee.value === "" || rollno.value === "" || age.value === "") {
    // alert("Please enter all the details");
    swal({
      icon: "error",
      text: "Please enter all the details",
      timer: 3000,
      button: {
        text: "OK"
      }
    });
  } else {
    const newStudent = addStudent(namee.value, rollno.value, age.value);
    createStudent(newStudent);
    namee.value = "";
    rollno.value = "";
    age.value = "";
  }
};

students.forEach(createStudent);
