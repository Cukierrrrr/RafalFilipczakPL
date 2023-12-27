function zmienNav(){
    let nav = document.getElementById('nav');
    let scroll = window.scrollY;
    let polozenieMain = document.getElementById('main').offsetTop;
    if(scroll >= polozenieMain){
        nav.style.background = '#040204';
    }
    else{
        nav.style.background = 'transparent'
    }
}
//dodanie płynnego przewijania dla linków
document.getElementById("przycisk").addEventListener("click",function(event){
    event.preventDefault()
    let moveTo = new MoveTo();
    let target = document.getElementById('main');
    moveTo.move(target);
});
document.getElementById("link1").addEventListener("click",function(event){
    event.preventDefault()
    let moveTo = new MoveTo();
    let target = document.getElementById('main');
    moveTo.move(target);
});
document.getElementById("link2").addEventListener("click",function(event){
    event.preventDefault()
    let moveTo = new MoveTo();
    let target = document.getElementById('umiejetnosci');
    moveTo.move(target);
});
document.getElementById("link3").addEventListener("click",function(event){
    event.preventDefault()
    let moveTo = new MoveTo();
    let target = document.getElementById('kontakt');
    moveTo.move(target);
});
//dodanie pojawiania się procętów po kliknięciu technologii
let technologie = document.querySelectorAll(".technologia");
for (let technologia of technologie){
    let opis = technologia.children[1];
    let obrazek = technologia.children[0];
    opis.style.transition = '250ms';
    obrazek.style.transition = '250ms';
    opis.style.opacity = '0';
    technologia.addEventListener("click",function(event){
        if(opis.style.opacity == '0'){
            opis.style.display = "block";
            obrazek.style.webkitFilter = 'brightness(50%)';
            setTimeout(() => { opis.style.opacity = '0.7' }, 1);
        }
        else{
            opis.style.opacity = '0';
            setTimeout(() => { opis.style.display = "none"; }, 250);
            obrazek.style.webkitFilter = 'brightness(100%)';
        }
    });
}
//zmiana stylu menu navigacyjnego w zależności od jego położenia
window.addEventListener('load',zmienNav)
window.addEventListener('scroll', zmienNav);
//zmiana wyświetlanej w umiejętnościach sekcji
let frontend = document.getElementById("frontend");
let backend = document.getElementById("backend");
let jezyki = document.getElementById("jezyki");
let wybor = document.getElementById("wybor");
let certyfikaty = document.getElementById("certyfikaty");
backend.style.transition = "250ms";
frontend.style.transition = "250ms";
jezyki.style.transition = "250ms";
backend.style.display = "none";
jezyki.style.display = "none";
backend.style.opacity = "0";
jezyki.style.opacity = "0";
wybor.children[0].addEventListener('click',function(){
    frontend.style.display = "flex";
    setTimeout(() => { frontend.style.opacity = "1";}, 1);
    backend.style.display = "none";
    backend.style.opacity = "0";
    jezyki.style.display = "none";
    jezyki.style.opacity = "0";
})
wybor.children[1].addEventListener('click',function(){
    frontend.style.display = "none";
    frontend.style.opacity = "0";
    backend.style.display = "flex";
    setTimeout(() => { backend.style.opacity = "1";}, 1);
    jezyki.style.display = "none";
    jezyki.style.opacity = "0";
})
wybor.children[2].addEventListener('click',function(){
    frontend.style.display = "none";
    frontend.style.opacity = "0";
    backend.style.display = "none";
    backend.style.opacity = "0";
    jezyki.style.display = "block";
    setTimeout(() => { jezyki.style.opacity = "1";}, 1);
})
//dodanie animacji wypisywania tekstu w nagłówku
window.addEventListener("load", function(){
    let a = document.getElementById("przedimie");
    let b = document.getElementById("imie");
    let c = document.getElementById("poimie");
    let d = document.getElementById("przycisk").firstChild;
    let al = a.innerHTML;
    let all = al.length;
    a.innerHTML='';
    let bl = b.innerHTML;
    let bll = bl.length;
    b.innerHTML='';
    let cl = c.innerHTML;
    let cll = cl.length;
    c.innerHTML='';
    d.parentElement.style.border = 'none';
    let dl = d.innerHTML;
    let dll = dl.length;
    d.innerHTML='';
    let i = 0;
    let w = setInterval(() => 
    { 
        a.innerHTML +=al.charAt(i);
        if(++i == all){
            clearInterval(w);
        }
    }, 70);
    setTimeout(() => 
    { 
        let j = 0;
        let x = setInterval(() => 
        { 
            b.innerHTML +=bl.charAt(j);
            if(++j == bll){
                clearInterval(x);
            }
        }, 70);
    }, 70 * all);
    setTimeout(() => 
    {
        let k = 0;
        let y = setInterval(() => 
        { 
            c.innerHTML +=cl.charAt(k);
            if(++k == cll){
                clearInterval(y);
            }
        }, 70);
    }, 70 * all + 70 * bll);
    setTimeout(() => 
    {
        let l = 0;
        let z = setInterval(() => 
        { 
            d.innerHTML +=dl.charAt(l);
            if(++l == dll){
                clearInterval(z);
            }
            else if(l == 1){
                d.parentElement.style.border = '2px solid whitesmoke';
                d.parentElement.addEventListener('mouseenter', function(){
                    d.parentElement.style.border = '2px solid #04b604';
                })
                d.parentElement.addEventListener('mouseleave', function(){
                    d.parentElement.style.border = '2px solid whitesmoke';
                })
            }
        }, 70);
    }, 70 * all + 70 * bll + 70 * cll);
})
//dodanie listy wybieranej do zmiany języka
document.getElementById("xdd").style.display = 'none';
document.getElementById("xdd").style.opacity = '0';
document.getElementById("xdd").style.transition = '250ms';
document.getElementById("jezyk").addEventListener("click", function(){
    xdd = document.getElementById("xdd");
    if(xdd.style.display == 'none'){
        document.getElementById("strzalka").style.rotate = '-90deg'
        xdd.style.display = 'block';
        setTimeout(() => { xdd.style.opacity = 1;}, 1);
    }
    else{
        document.getElementById("strzalka").style.rotate = '0deg'
        xdd.style.opacity = 0;
        setTimeout(() => { xdd.style.display = 'none';}, 250);
    }
})
//dodanie animacji pojewiania się tekstu do main
window.addEventListener("load", function(){
    let naglowki = document.querySelectorAll('main h2');
    let teksty = document.querySelectorAll('main p');
    let umiejetnosci = document.querySelectorAll('.xd');
    let a = naglowki[0].innerHTML;
    let b = a.length;
    let aa = teksty[0].innerHTML;
    let bb = aa.length;
    let c = naglowki[1].innerHTML;
    let d = c.length;
    let cc = teksty[1].innerHTML;
    let dd = cc.length;
    let e = naglowki[2].innerHTML;
    let f = e.length;
    let ee = teksty[2].innerHTML;
    let ff = ee.length;
    let g = naglowki[3].innerHTML;
    let h = g.length;
    let g0 = umiejetnosci[0].innerHTML;
    let h0 = g0.length;
    let g1 = umiejetnosci[1].innerHTML;
    let h1 = g1.length;
    let g2 = umiejetnosci[2].innerHTML;
    let h2 = g2.length;
    naglowki[0].style.height = naglowki[2].clientHeight + "px";
    naglowki[1].style.height = naglowki[2].clientHeight + "px";
    frontend.style.display = "none";
    frontend.style.opacity = "0";
    frontend.style.transition = "250ms";
    for (let i = 0; i < naglowki.length;i++){
        naglowki[i].innerHTML = '';
        if(i < teksty.length){
            teksty[i].innerHTML = '';
        }
        if(i < umiejetnosci.length){
            umiejetnosci[i].innerHTML = '';
        }
    }
    let i = 0;
    let t = setInterval(() => 
    { 
        naglowki[0].innerHTML +=a.charAt(i);
        if(++i == b){
            clearInterval(t);
        }
    }, 50);
    setTimeout(() => 
    { 
        let j = 0;
        let u = setInterval(() => 
        { 
            teksty[0].innerHTML +=aa.charAt(j);
            if(++j == bb){
                clearInterval(u);
            }
        }, 40);
    }, 50 * b);
    let k = 0;
    let v = setInterval(() => 
    { 
        naglowki[1].innerHTML +=c.charAt(k);
        if(++k == d){
            clearInterval(v);
        }
    }, 50);
    setTimeout(() => 
    { 
        let l = 0;
        let w = setInterval(() => 
        { 
            teksty[1].innerHTML +=cc.charAt(l);
            if(++l == dd){
                clearInterval(w);
            }
        }, 40);
    },50 * d)
    let m = 0;
    let x = setInterval(() => 
    { 
        naglowki[2].innerHTML +=e.charAt(m);
        if(++m == f){
            clearInterval(x);
        }
    }, 50);
    setTimeout(() => 
    { 
        let n = 0;
        let y = setInterval(() => 
        { 
            teksty[2].innerHTML +=ee.charAt(n);
            if(++n == ff){
                clearInterval(y);
            }
        }, 40);
    },50 * f)
    let o = 0;
    let z = setInterval(() => 
    { 
        naglowki[3].innerHTML +=g.charAt(o);
        if(++o == h){
            clearInterval(z);
        }
    }, 50);
    setTimeout(() => 
    { 
        let o0 = 0;
        let z0 = setInterval(() => 
        { 
            umiejetnosci[0].innerHTML +=g0.charAt(o0);
            if(++o0 == h0){
                clearInterval(z0);
            }
        }, 40);
    },50 * h)
    setTimeout(() => 
    { 
        let o1 = 0;
        let z1 = setInterval(() => 
        { 
            umiejetnosci[1].innerHTML +=g1.charAt(o1);
            if(++o1 == h1){
                clearInterval(z1);
            }
        }, 40);
    },50 * h + 50* h0 + 20)
    setTimeout(() => 
    { 
        let o2 = 0;
        let z2 = setInterval(() => 
        { 
            umiejetnosci[2].innerHTML +=g2.charAt(o2);
            if(++o2 == h2){
                clearInterval(z2);
            }
        }, 40);
    },50 * h + 50 * h0 + 50* h1 + 40)
    setTimeout(() => 
    { 
        frontend.style.display = "flex";
        setTimeout(() => { frontend.style.opacity = "1";}, 1);
    },50 * h + 50 * h0 + 50 * h1 + 50 * h2 + 40)     
    // naprawa błędu(brak wyświetlania treści)
    if(g == 'Umiejętnosci'){
        document.getElementById('blod').innerHTML = '<img src="img/wielkabrytania.png" alt="flaga wielkiej brytanii"> Angielski - Poziom B2';
    }
    else{
        document.getElementById('blod').innerHTML = '<img src="img/wielkabrytania.png" alt="UK flag"> English - B2 level';
    }
})
// obsługa formularza
const scriptURL = 'https://script.google.com/macros/s/AKfycbwndeqTXhWctOAAF1qChJusjGNy2GGxQh_mBuxd1lNbCWBxNM9JnyFRzHzgmd-YBTtKKw/exec'
const form = document.getElementById('formularz');
if(document.getElementById("xdddd").innerHTML == "Kontakt"){
    var jezykk = 'pl';
}
else{
    var jezykk = 'en';
}
const prze = document.getElementById('przeslanie');
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        prze.style.color = '#04b604'
        if(jezykk == 'pl'){
            prze.innerHTML = 'Twój Formularz został przesłany';
        }
        else{
            prze.innerHTML = 'Your Form has been sent'
        }
    })
    .catch(errror => {
        prze.style.color = '#b40404'
        if(jezykk == 'pl'){
            prze.innerHTML = 'Błąd przesyłania, spróbuj ponownie';
        }
        else{
            prze.innerHTML = 'Sending error, try again'
        }
    })
}) 