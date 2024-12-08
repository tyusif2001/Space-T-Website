let navLink = document.querySelectorAll('.link');
let navContent = document.querySelectorAll('.hero');
let body = document.querySelector('body');
let explore = document.querySelector('#explore');
let home = document.getElementById('home');
let crewImage = document.getElementById('crew-img');

let bgImage = ['url(assets/home/background-home-desktop.jpg)',
    'url(assets/destination/background-destination-desktop.jpg)',
    'url(assets/crew/background-crew-desktop.jpg)',
    'url(assets/technology/background-technology-desktop.jpg)'
];

navLink.forEach((link, i)=>{
    link.addEventListener('click', (e)=>{
        navLink.forEach(link => link.classList.remove('active'));
        link.classList.add('active');
        
        navContent.forEach(content => content.classList.remove('show'));
        navContent[i].classList.add('show');

        body.style.backgroundImage = bgImage[i];

        // home.classList.add('fadeIn');
    });

    explore.addEventListener('click', ()=>{
        navContent.forEach(content => content.classList.remove('show'));
        navContent[1].classList.add('show');

        navLink.forEach(link => link.classList.remove('active'));
        navLink[1].classList.add('active');

        body.style.backgroundImage = bgImage[1];
    })
});


