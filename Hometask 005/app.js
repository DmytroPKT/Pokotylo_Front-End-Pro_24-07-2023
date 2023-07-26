const userYearOfBirth = parseInt(prompt('Please, enter your year of birth:', 1999));
const userPlace = prompt('Please, enter the locality in which you currently live:');
const userSport = prompt('Please, specify your favorite sport:');

const messageNoYear = 'Too bad you didn\'t specify your year of birth. ';
const messageNoPlace = 'Unfortunately, you did not specify your place of residence. ';
const messageNoSport = 'Sorry, you didn\'t specify your favorite sport.';
const messageNoData = 'You didn\'t specify any information!';

const userAge = 2023 - userYearOfBirth;
const messageAge = `You are ${userAge} years old. `;

const messageUkraine = 'You live in capital of Ukraine. ';
const messageBritain = 'You live in capital of Great Britain. ';
const messageHonduras = 'You live in capital of Honduras. ';
const messagePlace = `You live in ${userPlace}. `;

const messageCapoeira = 'Cool! You want to be like Marcos DaSilva!';
const messageMma = 'Cool! You want to be like Conor McGregor!';
const messageGymnastic = 'Cool! You want to be like Simone Biles!';
const messageSport = `It's cool, that youre interested in ${userSport}.`;

let userInfo ='';

if (!userYearOfBirth || userYearOfBirth === null || isNaN(userYearOfBirth) || userYearOfBirth < 1900 || userYearOfBirth > 2023) {
    userInfo += messageNoYear
} else {
    userInfo += messageAge
};

if (!userPlace || userPlace === null) {
    userInfo += messageNoPlace
} else if (userPlace === 'Kyiv' || userPlace === 'Київ') {
    userInfo += messageUkraine
} else if (userPlace === 'London') {
    userInfo += messageBritain
} else if (userPlace === 'Tegucigalpa') {
    userInfo += messageHonduras
} else {
    userInfo += messagePlace
};

if (!userSport || userSport === null) {
    userInfo += messageNoSport
} else if (userSport === 'Capoeira' || userSport === 'capoeira') {
    userInfo += messageCapoeira
} else if (userSport === 'MMA' || userSport === "Mma" || userSport === 'mma' || userSport === 'Mixed martial arts') {
    userInfo += messageMma
} else if (userSport === 'Gymnastic' || userSport === 'Gymnastics' || userSport === 'gymnastic' || userSport === 'gymnastics') {
    userInfo += messageGymnastic
} else {
    userInfo += messageSport
};

if (userInfo === messageNoYear + messageNoPlace + messageNoSport) {
    alert(messageNoData)
} else {
    alert(userInfo)
};
