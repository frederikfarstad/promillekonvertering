
function update(){
    let percent = document.getElementById("percentInput").value     //Percent*100, here 4.7% = 4.7
    let volume = document.getElementById("volumeInput").value / 10  //Litres
    let quantity = document.getElementById("quantityInput").value   //Amount
    
    console.log(percent, volume, quantity, output)

    let inAlcohol = volume*(percent/100)*quantity
    let beer = 0.047*0.5
    let result = inAlcohol/beer

    document.getElementById("output").value = result.toFixed(2)
}
