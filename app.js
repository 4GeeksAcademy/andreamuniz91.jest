
// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// Convertir euros a yenes:
const fromEuroToYen = function(euros){
    let yens = euros * oneEuroIs.JPY; 
    yens = Math.floor(yens * 100) / 100;  
    return yens;
}


// Conventir euros a dolares:
const fromEuroToDollar = function(euros){
    let dollars = euros * oneEuroIs.USD; 
    dollars =  Math.floor(dollars  * 100) / 100;  
    return dollars;
}

//Convertir euro a libras:
const fromEuroToPound = function(euros){
    let pounds = euros * oneEuroIs.GBP;  
    pounds = Math.floor(pounds * 100) / 100;  
    return pounds;
}


// Convertir dolares a yenes:
const fromDollarToYen = (dollar) => {
    let euros = oneEuroIs.USD / dollar;
    euros = Math.floor(euros * 100) / 100; 
    let yens = fromEuroToYen(euros);
    return yens;
}


// Convertir yenes a libras
const fromYenToPound = (yen) => {
    let euros = oneEuroIs.JPY / yen;
    euros = Math.floor(euros * 100) / 100;  
    let pounds = fromEuroToPound(euros);
    return pounds;
}


module.exports = { sum, fromEuroToDollar, fromEuroToYen, fromEuroToPound, fromDollarToYen, fromYenToPound };

