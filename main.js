function MakeThePrice(){
    let Km = document.getElementById('HowmanyKm').value;
    console.log(Km)
    let Age = document.getElementById('HowOld').value;
    console.log(Age)
    
    let priceKm = 0.21 * Km 
    
    console.log(priceKm)
    if(Age < 18){
        let discount = priceKm * 0.2
        priceKm = priceKm - discount 
    console.log(priceKm)}
    else if (Age > 65){
        let discount = priceKm * 0.4
        priceKm = priceKm - discount 
    }
    console.log(priceKm)

    priceKm = priceKm.toFixed(2);

    document.getElementById('Price').innerHTML = `Il prezzo è : ${priceKm} euro`
} 
