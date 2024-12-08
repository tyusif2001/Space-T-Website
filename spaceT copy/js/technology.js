let techNav = document.querySelectorAll('.tech-nav div');
let techName = document.getElementById('tech-name');
let techContent = document.getElementById('tech-content');
let techImage = document.getElementById('tech-img');

let technologies = [
    {
        tech: 'Launch vehicle',
        content: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
        imageX: 'assets/technology/image-launch-vehicle-portrait.jpg',
    },
    {
        tech: 'Spaceport',
        content: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
        imageX: 'assets/technology/image-space-capsule-portrait.jpg'
    },
    {
        tech: 'Space capsule',
        content: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
        imageX: 'assets/technology/image-spaceport-portrait.jpg'
    },
];

let {tech, content, imageX} = technologies;

techNav.forEach((nav,i)=>{
    nav.addEventListener('click', ()=>{
        techNav.forEach(nav => nav.classList.remove('active'))
        nav.classList.add('active');

        techName.innerText = technologies[i].tech;
        techContent.innerText = technologies[i].content;
        techImage.src = technologies[i].imageX;

    })
})