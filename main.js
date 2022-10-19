function MakeThePrice(){
    let Km = document.getElementById('HowmanyKm').value;
    console.log(Km)
    let Age = document.getElementById('HowOld').value;
    console.log(Age)
    
    let priceKm = `0.21 * Km`

    document.getElementById('Price').innerHtml = `Il prezzo è : priceKm euro`
} 