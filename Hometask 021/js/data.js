'use strickt';

const cities = {
    '0': 'Not available',
    kie: 'Kyiv',
    ods: 'Odesa',
    chk: 'Cherkasy',
    chr: 'Chernygiv',
    chn: 'Chernivtsy',
    vin: 'Vinnytsa',
    dni: 'Dnipro',
    don: 'Donetsk',
    zap: 'Zaporizhya',
    zhi: 'Zhitomyr',
    ivf: 'Ivano-Frankivsk',
    izm: 'Izmail',
    kha: 'Kharkiv',
    khe: 'Kherson',
    khm: 'Khmelnytsky',
    kro: 'Kropivnytsky',
    luh: 'Luhansk',
    lut: 'Lutsk',
    lvi: 'Lviv',
    myk: 'Mykolaiv',
    pol: 'Poltava',
    riv: 'Rivne',
    sev: 'Sevastopol',
    sum: 'Summy',
    uzh: 'Uzhgorod',
};

const posts = {
    kie: 122,
    ods: 95,
    chk: 34,
    chr: 34,
    chn: 17,
    vin: 15,
    dni: 75,
    don: 79,
    zap: 54,
    zhi: 84,
    ivf: 64,
    izm: 21,
    kha: 110,
    khe: 47,
    khm: 54,
    kro: 43,
    luh: 56,
    lut: 85,
    lvi: 101,
    myk: 49,
    pol: 74,
    riv: 83,
    sev: 54,
    sum: 53,
    uzh: 55,
};




const categories = {
    eBooks: {
        name: 'eBooks',
        products: [
            {
                id: 1,
                name: 'Lenovo',
                price: 340,
                description: 'Lenovo book',
            },
            {
                id: 2,
                name: 'Pocketbook',
                price: 240,
                description: 'Pocketbook book',
            },
            {
                id: 3,
                name: 'Onyx',
                price: 400,
                description: 'Onyx book',
            },
        ],
    },
    phones: {
        name: 'Phones',
        products: [
            {
                id: 4,
                name: 'Samsung',
                price: 550,
                description: 'Samsung mobile',
            },
            {
                id: 5,
                name: 'iPhone',
                price: 600,
                description: 'iPhone mobile',
            },
            {
                id: 6,
                name: 'OnePlus',
                price: 400,
                description: 'OnePlus mobile',
            },
        ],
    },
    laptops: {
        name: 'Laptops',
        products: [
            {
                id: 7,
                name: 'Acer',
                price: 1100,
                description: 'Acer laptop',
            },
            {
                id: 8,
                name: 'Asus',
                price: 1500,
                description: 'Asus laptop',
            },
            {
                id: 9,
                name: 'Benq - Siemens',
                price: 400,
                description: 'Benq - Siemens laptop',
            },
        ],
    }
}