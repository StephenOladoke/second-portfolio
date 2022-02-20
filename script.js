    // // toggle menu/navbar script
    // $('.menu-btn').click(function(){
    //     $('.hero .menu').toggleClass("active");
    //     $('.menu-btn i').toggleClass("active");
    // });

const body = document.querySelector("body");
     menu = document.querySelector('#menu-bar');
     navbar = document.querySelector('.menu');
  
    
    menu.onclick = () =>{
      menu.classList.toggle('fa-times');
      navbar.classList.toggle('active');
    }
    

    window.onscroll = () =>{
      menu.classList.remove('fa-times');
      navbar.classList.remove('active');
    
      if(window.scrollY > 60){
        document.querySelector('#scroll-top').classList.add('active');
      }else{
        document.querySelector('#scroll-top').classList.remove('active');
      }
    
    }
    