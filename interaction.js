const backchange = document.getElementById('wrapper')
const buttontoggle = document.getElementById('togglebut')
const buttontogglereset = document.getElementById('togglebut1')
const aboutme = document.getElementById('about-me')
const myprojects = document.getElementById('projects')
const mainarea = document.getElementById('main-area')
const button1 = document.getElementById('togglebut')
const button2 = document.getElementById('togglebut1')
const linkhover = document.getElementById('linksymbol');
const linkhover2 = document.getElementById('linksymbol2')
const huddlelink = document.getElementById('huddle-link');
const netflixlink = document.getElementById('netflix-link')


function changebgcolor() {
    backchange.style.backgroundColor = 'white'
    backchange.style.color = 'black'
    backchange.style.transition = '1s'
    aboutme.style.color = 'black'
    myprojects.style.color = 'black'
    mainarea.style.color = 'black'
    button1.style.color = 'black'
    button2.style.color = 'black'
}
function resetbgcolor () {
    backchange.style.backgroundColor = 'black'
    backchange.style.transition = '1s'
    aboutme.style.color = ''
    myprojects.style.color = ''
    mainarea.style.color = ''
    button1.style.color = ''
    button2.style.color = ''
}

buttontoggle.addEventListener('click', resetbgcolor)
buttontogglereset.addEventListener('click', changebgcolor)


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el))


function linkpop() {
    huddlelink.style.opacity = '1'
    huddlelink.style.transition = '1s'
    huddlelink.style.transform = 'translateX(0)'
}

function resetlinkpop() {
    huddlelink.style.opacity = '0'
}

function linkpop2() {
    netflixlink.style.opacity = '1'
    netflixlink.style.transition = '1s'
    netflixlink.style.transform = 'translateX(0)'
}

function resetnetflixLink() {
    netflixlink.style.opacity = '0'
}

//HUDDLE LINK EFFECTS
linkhover.addEventListener('mouseover', linkpop)
linkhover.addEventListener('mouseout', resetlinkpop)

//NETFLIX LINK EFFECTS
linkhover2.addEventListener('mouseover', linkpop2)
linkhover2.addEventListener('mouseout', resetnetflixLink)