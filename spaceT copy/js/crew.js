let Fname = document.getElementById('name');
let infor = document.getElementById('infor');
let crewToggle = document.querySelectorAll('.crew-toggle div');

let crews = [
    {
        firstName: 'Commander',
        lastName: 'Douglas Hurley',
        about: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2',
        image: 'assets/crew/image-anousheh-ansari.png',
    },
    {
        firstName: 'Mission Specialist',
        lastName: 'Mark Shuttleworth',
        about: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
        image: 'assets/crew/image-douglas-hurley.png',
    },
    {
        firstName: 'Pilot',
        lastName: 'Victor Glover',
        about: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.',
        image: 'assets/crew/image-mark-shuttleworth.png',
    },
    {
        firstName: 'Flight Engineer',
        lastName: 'Anousheh Ansari',
        about: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.',
        image: 'assets/crew/image-victor-glover.png',
    },
];

let {firstName, lastName, about, image} = crews;

crewToggle.forEach((crew,i)=>{
    crew.addEventListener('click', ()=>{
        crewToggle.forEach(crew => crew.classList.remove('toggle-active'));
        crew.classList.add('toggle-active');

        let crewImage = document.getElementById('crew-img');
        var img=new Image();
        img.src=crews[i].image;
        img.setAttribute('id','crew-img');
        crewImage.parentElement.replaceChild(img,crewImage)
        img.style.cssText = 'animation:fadeUp 0.7s ease forwards;';


        Fname.innerHTML = `<h2 id="name"><span id="fname">${crews[i].firstName}</span> <br>${crews[i].lastName}</h2>`;
        infor.textContent = crews[i].about;
        infor.style.cssText = 'animation:fadeUp 0.7s ease forwards';
        
    })
})