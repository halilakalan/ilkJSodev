let userName = prompt("Kullanici Adinizi Giriniz");
let myName = document.querySelector("#myName");
myName.innerHTML = `${userName}`

let times = document.querySelector('#myClock');
let days = ['', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar'];

function time(){
    let d = new Date();
    let s = d.getSeconds();
    let m = d.getMinutes();
    let h = d.getHours();
    let g = days[d.getDay()];
    m = checkTime(m);
    s = checkTime(s);
    h = checkTime(h);
    times.textContent = `${h} : ${m} : ${s} ${g}`
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i
};  // Sayi 10'dan kucukse onune sifir ekliyor
    return i;
}

setInterval(time,1000);