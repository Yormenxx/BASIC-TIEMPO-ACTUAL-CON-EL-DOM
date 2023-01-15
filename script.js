
const tiempo = document.getElementById("timer")
const fecha = document.getElementById("fecha");


setInterval(()=>{
    let timer2 = new Date();
    tiempo.textContent=timer2.toLocaleTimeString();
},1000)

setInterval(()=>{
    let fecha2 = new Date()
    fecha.textContent= fecha2.toLocaleDateString();
},1000)


