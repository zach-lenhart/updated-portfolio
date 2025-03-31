let isModalOpen = false
let darkTheme = false
const scaleFactor = 1 / 20

function contact (event) {
    event.preventDefault();
    const loading = document.querySelector ('.modal__overlay--loading')
 const success = document.querySelector ('.modal__overlay--success')
 loading.classList += " modal__overlay--visible"
   emailjs
    .sendForm (
        'service_wuk0p4c',
        'template_da8d8qr',
        event.target,
        'YlEfPdX2ETcLFQTJr'

    ).then (() =>{
        loading.classList.remove ("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
    })
    .catch (() => {
        loading.classList.remove ("modal__overlay--visible")
        alert(
            "The email service is temporarily unavailable. Please contact me directly at zachary.lenhart08@gmail.com"
        );

    })
}


function toggleModal () {
    if (isModalOpen){
        isModalOpen = false
        return document.body.classList.remove ("modal--open")
    };
    isModalOpen = true
document.body.classList += " modal--open"

}

function removeModal () {
    document.body.classList.remove (".modal--open")
}

function toggleDarkMode () {
    darkTheme = !darkTheme
    if (darkTheme) {
        return document.body.classList += " dark-theme"
    }
    else {
         document.body.classList.remove ("dark-theme")
    }
    
}

function moveBackground (event) {
    const shapes = document.querySelectorAll (".shape");
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;
    
    for (let i = 0 ; i < shapes.length; ++i){
        const isOdd = i % 2 !== 0;
        const boolInt = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * boolInt}px , ${y * boolInt}px)`
    }
}