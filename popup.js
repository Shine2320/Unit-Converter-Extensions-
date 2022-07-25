const convertBtn = document.getElementById('convert-btn')
const inputEl = document.getElementById('input-el')
const lengths = document.getElementById('length')
const volume = document.getElementById('volume')
const mass = document.getElementById('mass')
convertBtn.addEventListener('click', function(){
    console.log(inputEl.innerHTML)
    let val=inputEl.value
    lengths.textContent = `${val} meters = ${(val*3.281).toFixed(3)} feet | ${val} feet = ${(val/3.281).toFixed(3)} meters`
    volume.textContent = `${val} liters = ${(val*0.264).toFixed(3)} gallons | ${val} gallons = ${(val/0.264).toFixed(3)} liters`
    mass.textContent = `${val} kilos = ${(val*2.204).toFixed(3)} pounds | ${val} pounds = ${(val/2.204).toFixed(3)} kilos`
})
