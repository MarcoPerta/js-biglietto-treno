function MakeThePrice(){
    let Km = document.getElementById('HowmanyKm').value;
    console.log(Km)
    let Age = document.getElementById('HowOld').value;
    console.log(Age)
    
    let priceKm = 0.21 * Km
    if(Age < 18){
        let priceKm = (0.21 * Km) - 20%
    } else if (Age > 65){
        let priceKm = (0.21* Km) - 40%
    }

    document.getElementById('Price').innerHTML = `Il prezzo è : ${priceKm} euro`
} 
