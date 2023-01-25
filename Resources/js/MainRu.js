

const modal = document.querySelector(".modal");
const trigger = document.querySelector(".trigger");
const closeButton = document.querySelector(".close-button");
function toggleModal() {
    modal.classList.toggle("show-modal");
    let total = 'Вы не заполнили все ползунки!!, сделайте это перед получением результатов!'


   const a = parseInt(document.getElementById("a").value)
   const b = parseInt(document.getElementById("b").value)
   const c = parseInt(document.getElementById("c").value)
   const d = parseInt(document.getElementById("d").value)
   const e = parseInt(document.getElementById("e").value)
   const f = parseInt(document.getElementById("f").value)
   const g = parseInt(document.getElementById("g").value)
   const h = parseInt(document.getElementById("h").value)
   const i = parseInt(document.getElementById("i").value)
   const j = parseInt(document.getElementById("j").value)
   const l = parseInt(document.getElementById("l").value)
   const m = parseInt(document.getElementById("m").value)
   const n = parseInt(document.getElementById("n").value)
   const o = parseInt(document.getElementById("o").value)
   const p = parseInt(document.getElementById("p").value)
   const q = parseInt(document.getElementById("q").value)
   const r = parseInt(document.getElementById("r").value)
   const s = parseInt(document.getElementById("s").value)
   const t = parseInt(document.getElementById("t").value)
   const u = parseInt(document.getElementById("u").value)
   const v = parseInt(document.getElementById("v").value)
   const w = parseInt(document.getElementById("w").value)
   const k = parseInt(document.getElementById("k").value)
   const x = parseInt(document.getElementById("x").value)
   const check = [a,b,c,d,e,f,g,h,i,k,l,m,n,o,p,q,r,s,t,u,v,w,x]

   let checker = ""
   for (let index = 0; index <= check.length; index++) { 
    if(check[index] === 0){
        document.getElementById('scoreDisplay').innerHTML= ""
        document.getElementById('scoreMeaning').innerHTML = total;
        checker = 0
    }
  }
    if (checker === 0){console.log("cool")}else{
    total = a+b+c+d+e+f+g+h+i+j+k+l+m+n+o+p+q+r+s+t+u+v+w+x;

    let conc0 = "СКАЖИ МНЕ, КАК ТЫ ОБМАНУЛСЯ!"
    let conc30 = "Вы не умеете делать ничего, кроме как дурачиться"
    let conc40 = "У вас ужасно мало успеха в чем-то"
    let conc50 = " У вас ужасные шансы преуспеть"
    let conc60 = "Очень маловероятно, что вы будете счастливы или успешны"
    let conc70 = "У вас ниже среднего шансы быть счастливым и успешным"
    let conc80 = "У вас есть средние шансы быть счастливым и успешным"
    let conc90 = "У вас больше шансов, чем у большинства, добиться успеха в жизни и быть счастливым в конце"
    let conc100 = "Вы, скорее всего, добьетесь успеха в жизни и будете счастливы в конце"
    let conc110 = "У вас есть почти 100% шанс быть счастливым и успешным"
    let conc120 = "Вы обязательно будете счастливы и успешны, несмотря ни на что!"
    
    
    if(total > 20 && total <= 30){
        document.getElementById('scoreMeaning').innerHTML = conc30
    }
    else if(total > 30 && total <= 40){
        document.getElementById('scoreMeaning').innerHTML = conc40
    }
    else if(total > 40 && total <= 50){
        document.getElementById('scoreMeaning').innerHTML = conc50
    }
    else if(total > 50 && total <= 60){
        document.getElementById('scoreMeaning').innerHTML = conc60
    }
    else if(total > 60 && total <= 70){
        document.getElementById('scoreMeaning').innerHTML = conc70
    }
    else if(total > 70 && total <= 80){
        document.getElementById('scoreMeaning').innerHTML = conc80
    }
    else if(total > 80 && total <= 90){
        document.getElementById('scoreMeaning').innerHTML = conc90
    }
    else if(total > 90 && total <= 100){
        document.getElementById('scoreMeaning').innerHTML = conc100
    }
    else if(total > 100 && total <= 110){
        document.getElementById('scoreMeaning').innerHTML = conc110
    }
    else if(total > 110 && total <= 120){
        document.getElementById('scoreMeaning').innerHTML = conc120
    }
    else{
        document.getElementById('scoreMeaning').innerHTML = conc0
    }
    document.getElementById('scoreDisplay').innerHTML = `Ваш общий балл: ${total}`
    }



   
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);