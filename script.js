const students = [
    {
        name:"John",
        regNo:53,
        courses:["Maths","Bio","English"]
    },
    {
        name:"Gopi",
        regNo:63,
        courses:["Maths","Bio","English"]
    },
    {
        name:"Rashi",
        regNo:73,
        courses:["Maths","Bio","English"]
    }

]

const studentsDiv = document.getElementById('students-div');
for(var i=0; i<students.length; i++){
    const mainDiv = document.createElement('div');
    mainDiv.classList.add('card','mt-5');
    const nameElem = document.createElement('h2');
    const nameTitle = document.createElement('h1');
    nameTitle.innerText = "Name";
    const regNo = document.createElement('h2');
    nameElem.innerText = students[i].name;
    regNo.innerText = students[i].regNo;
    mainDiv.appendChild(nameTitle);
    mainDiv.appendChild(nameElem);
    mainDiv.appendChild(regNo);
    studentsDiv.appendChild(mainDiv);
    const courses = students[i].courses;
    const ulElem = document.createElement('ul');
    for(var j=0; j<courses.length; j++){
        const liElem = document.createElement('li');
        liElem.textContent = courses[j];
        ulElem.appendChild(liElem);


    }
    mainDiv.appendChild(ulElem);
        

}