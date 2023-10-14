const backchange = document.getElementById('wrapper')
const buttontoggle = document.getElementById('togglebut')
const buttontogglereset = document.getElementById('togglebut1')
const aboutme = document.getElementById('about-me')
const myprojects = document.getElementById('projects')
const mainarea = document.getElementById('main-area')
const button1 = document.getElementById('togglebut')
const button2 = document.getElementById('togglebut1')


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