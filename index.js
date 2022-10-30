
    let t = document.getElementsByClassName('nav-toggle')[0];
        let navbar = document.getElementById('navbar');
    
    let nav = document.getElementsByClassName('nav-links');
  
    t.addEventListener("click", function (e) {
        console.log("sds")
        for (let i = 0; i < nav.length; i++) {

            nav[i].classList.toggle('active');
        }
    } ) ;


 


    window.addEventListener("scroll" ,function(){
           console.log(navbar)
        if(window.scrollY > 100)
        navbar.classList.add('active-nav');
        else 
        navbar.classList.remove('active-nav');
    })