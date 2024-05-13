//task 4.1
let prompt41 = document.getElementById("prompt");

function hm41(){
    let userName = prompt("What is your name?");
    alert('Hello, '+ userName + '! How are you?');
}

prompt41.addEventListener('click', hm41);

//task 4.2

let userNum42 = document.getElementById('userNum');

function hm42(){
    let userNum=prompt('Write Your number!', '123')
    let userNum1 = Math.floor(userNum / 100 % 10);
    let userNum2 = Math.floor(userNum / 10 % 10);
    let userNum3 = +userNum % 10;
    console.log(userNum1, userNum2, userNum3);

    if(userNum1===userNum2&&userNum2===userNum3){
        alert(userNum + ' - three-digit number with identical digits!')
        console.log(userNum + ' - three-digit number with identical digits!');
    }
    else if (userNum1===userNum2||userNum2===userNum3||userNum1===userNum3){
        alert(userNum + ' - three-digit number with two identical digits!')
        console.log(userNum + ' - three-digit number with two identical digits!');
    }
    else {
        alert(userNum + ' - three-digit number with different digits!')
        console.log(userNum + ' - three-digit number with different digits!');
    }
}

userNum42.addEventListener("click", hm42)

//task 4.3

let userPort43 =  document.getElementById('userPort');

function hm43(){
    let result;
    let userAge = prompt('When were You born?');
    if (userAge==null){
        alert('It is a pity that you did not want to enter your date :(')
        result = 'I do not Your age! :( ';
    } else {
        let currentDate = new Date();
        let currentYear = currentDate.getFullYear();
        result = 'Your age - ' + (currentYear - userAge) + '! ';
    }

    let userCountry = prompt('Where were You born?');
    if (userCountry==null){
        alert('It is a pity that you did not want to enter your born city :(')
        result += 'I do not where You born! :( ';
    }else {
        switch (userCountry) {
            case 'London':
                result += 'You live in the capital of Great Britan! '
                break
            case 'Kyiv':
                result += 'You live in the capital of Ukraine! '
                break
            case 'Bucuresti':
                result += 'You live in the capital of Romanian! '
                break
            case 'Washington':
                result += 'You live in the capital of USA! '
                break
            case 'Odesa':
                result += 'You live in the best city in the world - ' + userCountry +'! ';
                break
            default:
                result += 'You live in the city - ' + userCountry + '! ';
        }
    }

    let userSport = prompt('What Your favorite sport?');
    if (userSport==null) {
        alert('It is a pity that you did not want to enter your favorite sport! :(')
        result += 'I do not where Your favorite sport! :( ';
    }else {
        switch (userSport) {
            case 'football':
                result += 'Oh! You want to became like Cristiano Ronaldo? ';
                break
            case 'formula1':
                result += 'Oh! You want to became like Lewis Hamilton? '
                break
            case 'basketball':
                result += 'Oh! You want to became like Mikel Jordan? '
                break
            default:
                result += 'Oh! ' + userSport + ' - it is cool sport';
        }
    }
    alert(result);
    console.log(result);
}

userPort43.addEventListener('click', hm43)

//task 4.4

let switchCase = document.getElementById('switchCase')



function hm44() {
    let numIrStr = prompt('Input number or string!');
    switch (true) {
        case (numIrStr === null):
            console.log('You canceled!');
            alert('You canceled!');
            break;
        case (numIrStr.trim() === ''):
            console.log('Empty String!');
            alert('Empty String!');
            break;
        case isNaN(+numIrStr):
            console.log('Number is NaN!');
            alert('Number is NaN!');
            break;
        default:
            console.log('Ok!');
            alert('Ok!');
    }
}

switchCase.addEventListener('click', hm44)