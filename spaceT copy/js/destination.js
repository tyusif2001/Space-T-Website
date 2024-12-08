let desNav = document.querySelectorAll('.dest-nav a');
let desName = document.getElementById('des-name');
let descri = document.getElementById('description'); 
let dis = document.getElementById('distance');
let ti = document.getElementById('time');
let descImg = document.getElementById('des-img');



let destinations = [
    {
        Name: 'MOON',
        description: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
        Dimage: 'assets/destination/image-moon.png',
        distance: '384,400 km',
        time: '3 days',
    },
    {
        Name: 'MARS',
        description: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
        Dimage: 'assets/destination/image-mars.png',
        distance: '225 mil. km',
        time: '9 months',
    },
    {
        Name: 'Europa',
        description: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
        Dimage: 'assets/destination/image-europa.png',
        distance: '628 mil. km',
        time: '3 years',
    },
    {
        Name: 'Titan',
        description: 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
        Dimage: 'assets/destination/image-titan.png',
        distance: '1.6 bil. km',
        time: '7 years',
    },
];

let {Name, description, Dimage, distance, time} = destinations;

desNav.forEach((nav, i) =>{
    nav.addEventListener('click', ()=>{
        desName.innerText = destinations[i].Name;
        descri.innerText = destinations[i].description;
        dis.innerText = destinations[i].distance;
        descImg.src = destinations[i].Dimage;
        ti.innerText = destinations[i].time;

        desNav.forEach(nav => nav.classList.remove('actives'));
        nav.classList.add('actives')

    })
})
