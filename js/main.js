// main function
function akanNames() {
    // user generated input
    var gender = document.getElementById('gender').value
    var birthDay = document.getElementById('birthday').value

    //array days of the week and male and female akan names
    const akanArray = [
        ['Sunday', 'Kwasi', 'Akosua'],
        ['Monday', 'Kwado', 'Adowa' ],
        ['Tuesday','Kwabena', 'Abenaa'],
        ['Wednesday', 'Kwaku', 'Akua'],
        ['Thursday', 'Yaw' ,'Yaa'],
        ['Friday', 'Kofi' ,'Afua'],
        ['Saturday', 'Kwame', 'Ama'],
    ];
   
    // format date to derive the day of the week 
    const d = new Date(birthDay);
    let day = d.getDay();
    let year = d.getFullYear();

    // assigns value to the day and gender 
    var dayOfTheWeek = akanArray[day][0];
    var genderMale = akanArray[day][1];
    var genderFemale = akanArray[day][2];

    // added logical operators for gender
    if (gender == '') {
        alert('Please input your gender');
    } else if (year >= 2022) {
        alert('Too young! please put the correct year')
    } 
    
}