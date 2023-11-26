async function fetchStudents(){
    console.log("Students have been fetched.");
    const response = await fetch("http://localhost:8080/api/students");
    const names = await response.json();
    const midSection = document.getElementsByClassName("midSectionPart");
    names.forEach(element =>{
        const h1Element = document.createElement('h1');
        h1Element.innerHTML = `Name: ${element.id}, StudentName: ${element.studentName}, StudentSurname: ${element.studentSurname}, StudentNumber: ${element.studentNumber}`;
        midSection[0].appendChild(h1Element);
    });
    students.removeEventListener("click", fetchStudents);
}

const students = document.getElementById("students");
students.addEventListener("click", fetchStudents);

