window.onload = function (){

    var envelope = document.getElementById('email-display'),
        contactForm = document.getElementById('email-contact-form'),
        main = document.getElementsByTagName('main')[0],
        burger = document.getElementById('hamburger'),
        menu = document.getElementById('header'),
        exit = document.getElementById('exit-btn-contact'),
        opacity = 0,
        interval;

        function fadeIn(){
            opacity += 0.01;
            contactForm.style.opacity = opacity;
            if( opacity >= 1 ) clearInterval(interval);
        }
        function fadeOut(){
            opacity -= 0.01;
            contactForm.style.opacity = opacity;
            if( opacity <= 0 ) {
                contactForm.style.display = "none";
                clearInterval(interval);
        }


    }
        envelope.addEventListener('click', function (){
            contactForm.classList.add('show');
            interval = setInterval(fadeIn, 10);
            main.classList.add('opacity-toggle');

        });
        exit.addEventListener('click', function (){
            interval = setInterval(fadeOut, 10);
            main.classList.remove('opacity-toggle');
        });

        burger.addEventListener('click', function() {

            menu.classList.toggle('show-burger');

        });

};
