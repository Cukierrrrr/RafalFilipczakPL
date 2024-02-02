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
    let target = document.getElementById('projekty');
    moveTo.move(target);
});
document.getElementById("link4").addEventListener("click",function(event){
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
            var x = parseInt(opis.innerHTML.charAt(0) + opis.innerHTML.charAt(1));
            var y = 0;
            opis.innerHTML = '00%';
            var z = setInterval(() => {
                opis.innerHTML = String(++y)+'%';
                if(y == x){
                    clearInterval(z);
                } 
            }, 250/x)
        }
        else{
            opis.style.opacity = '0';
            var x = parseInt(opis.innerHTML.charAt(0) + opis.innerHTML.charAt(1));
            var y = x;
            var z = setInterval(() => {
                opis.innerHTML = String(--y)+'%';
                if(y == 0){
                    clearInterval(z);
                    opis.innerHTML = String(x)+'%'; 
                } 
            }, 250/x)
            setTimeout(() => {opis.style.display = "none"; }, 250);
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
    a.style.opacity = '1';
    b.style.opacity = '1';
    c.style.opacity = '1';
    d.parentElement.style.opacity = '1';
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
                    console.log(screen.width)
                    if(screen.width>1024){
                        d.parentElement.style.border = '2px solid #04b604';
                    }
                })
                d.parentElement.addEventListener('mouseleave', function(){
                    if(screen.width>1024){
                        d.parentElement.style.border = '2px solid whitesmoke';
                    }
                })
            }
        }, 70);
    }, 70 * all + 70 * bll + 70 * cll);
})
//dodanie listy wybieranej do zmiany języka
document.getElementById("xdd").style.transition = '250ms';
document.getElementById("jezyk").addEventListener("click", function(){
    xdd = document.getElementById("xdd");
    if(xdd.style.display == 'block'){
        document.getElementById("strzalka").style.rotate = '0deg'
        xdd.style.opacity = 0;
        setTimeout(() => { xdd.style.display = 'none';}, 250);
    }
    else{
        document.getElementById("strzalka").style.rotate = '-90deg'
        xdd.style.display = 'block';
        xdd.style.width = document.getElementById('jezyk').offsetWidth + 'px';
        setTimeout(() => { xdd.style.opacity = 1;}, 1);
    }
})
// zwijanie nazwy języka
if(window.innerWidth <= 463){
    document.querySelector('#jezyk p').innerHTML = '<img src="img/polska.png" alt="flaga polski"><img src="img/strzalka.png" alt="strzałka" id="strzalka">';
    document.querySelectorAll('#xdd ul li p')[0].innerHTML = '<img src="img/polska.png" alt="flaga polski">';
    document.querySelectorAll('#xdd ul li')[0].style.textAlign = 'right';
    document.querySelectorAll('#xdd ul li p')[0].style.marginRight = '29px';
    document.querySelectorAll('#xdd ul li p')[1].innerHTML = '<img src="img/wielkabrytania.png" alt="flaga wielkiej brytanii">';
    document.querySelectorAll('#xdd ul li')[1].style.textAlign = 'right';
    document.querySelectorAll('#xdd ul li p')[1].style.marginRight = '29px';
}
window.addEventListener("resize", function(){
    if(window.innerWidth <= 463){
        document.querySelector('#jezyk p').innerHTML = '<img src="img/polska.png" alt="flaga polski"><img src="img/strzalka.png" alt="strzałka" id="strzalka">';
        document.querySelectorAll('#xdd ul li p')[0].innerHTML = '<img src="img/polska.png" alt="flaga polski">';
        document.querySelectorAll('#xdd ul li')[0].style.textAlign = 'right';
        document.querySelectorAll('#xdd ul li p')[0].style.marginRight = '29px';
        document.querySelectorAll('#xdd ul li p')[1].innerHTML = '<img src="img/wielkabrytania.png" alt="flaga wielkiej brytanii">';
        document.querySelectorAll('#xdd ul li')[1].style.textAlign = 'right';
        document.querySelectorAll('#xdd ul li p')[1].style.marginRight = '29px';
    }
    else{
        document.querySelector('#jezyk p').innerHTML = '<img src="img/polska.png" alt="flaga polski">POLSKI<img src="img/strzalka.png" alt="strzałka" id="strzalka">';
        document.querySelectorAll('#xdd ul li p')[0].innerHTML = '<img src="img/polska.png" alt="flaga polski">POLSKI';
        document.querySelectorAll('#xdd ul li')[0].style.textAlign = 'left';
        document.querySelectorAll('#xdd ul li p')[0].style.marginRight = '0';
        document.querySelectorAll('#xdd ul li p')[1].innerHTML = '<img src="img/wielkabrytania.png" alt="flaga wielkiej brytanii">ENGLISH';
        document.querySelectorAll('#xdd ul li')[1].style.textAlign = 'left';
        document.querySelectorAll('#xdd ul li p')[1].style.marginRight = '0';
    }
    xdd.style.width = document.getElementById('jezyk').offsetWidth + 'px';
})
// opis projektu
document.getElementById("PDA").addEventListener("click", function(){
    pda = document.querySelector("#PDA div");
    if(pda.style.background == "rgba(4, 2, 4, 0.7)"){
        pda.style.background = "rgba(4, 2, 4, 0)";
        document.querySelector("#PDA:hover div p").style.opacity = 0;
        document.querySelector("#PDA:hover div h3").style.opacity = 0;
        document.querySelector("#PDA:hover div a button").style.opacity = 0;
    }
    else{
        pda.style.background = "rgba(4, 2, 4, 0.7)";
        document.querySelector("#PDA:hover div p").style.opacity = 1;
        document.querySelector("#PDA:hover div h3").style.opacity = 1;
        document.querySelector("#PDA:hover div a button").style.opacity = 1;
    }
})
// ostrzerzenie o braku responsywności PDA
let proba = false;
document.querySelector('#PDA div a').addEventListener('click', function(event){
    if (window.innerWidth < 720 && !proba) {
        event.preventDefault();
        alert("Uwaga strona ta nie jest responsywna");
        proba = true;
    }
})
