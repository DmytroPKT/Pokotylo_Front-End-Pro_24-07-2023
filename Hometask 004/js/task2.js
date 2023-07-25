// Відомі дві відстані. Одне у кілометрах, інше – у футах (1 фут = 0,305м). Яка відстань менша?
const distanceInKilometrs = prompt('Enter distance in kilometers', 30.5)
const distanceInFoots = prompt('Enter distance in foots', 100000)

let metersFromKilometers = distanceInKilometrs * 1000
let metersFromFoots = distanceInFoots * 0.305


if (!distanceInKilometrs || isNaN(distanceInKilometrs) || !distanceInFoots || isNaN(distanceInFoots)){
    alert('Invalid data')
    console.log('Invalid data');
} else {
    if (metersFromKilometers > metersFromFoots) {
        alert(`${distanceInKilometrs} Kilometers (${metersFromKilometers} meters) is longer than ${distanceInFoots} foots (${metersFromFoots} meters).`)
        console.log(`${distanceInKilometrs} Kilometers (${metersFromKilometers} meters) is longer than ${distanceInFoots} foots (${metersFromFoots} meters).`);
    } else if (metersFromFoots > metersFromKilometers) {
        alert(`${distanceInFoots} Foots (${metersFromFoots} meters) is longer than  ${distanceInKilometrs} kilometers (${metersFromKilometers} meters).`)
        console.log(`${distanceInFoots} Foots (${metersFromFoots} meters) is longer than  ${distanceInKilometrs} kilometers (${metersFromKilometers} meters).`);
    } else {
        alert(`${distanceInKilometrs} Kilometers (${metersFromKilometers} meters) is equals ${distanceInFoots} foots (${metersFromFoots} meters).`)
        console.log(`${distanceInKilometrs} Kilometers (${metersFromKilometers} meters) is equals ${distanceInFoots} foots (${metersFromFoots} meters).`);
    }
};
