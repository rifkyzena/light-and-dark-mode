const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');


// CODE DRY, DON'T REPEAT YOURSELF LET'S CLEAN THINGS UP

// Dark of Light images
function imageMode(color){
    // template string pake back tick di bawah escape key
    image1.src = `img/undraw_proud_coder_${color}.svg`;
    image2.src = `img/undraw_feeling_proud_${color}.svg`;
    image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

function toggleDarkLightMode(isDark){
    // simbol || ada di sebelah enter pake shift
    //daripada bikin 2 kali mendingan dijadiin 1 kalimat aja.
    // is something, tanda tanya, diantara dua statement masukin :
    nav.style.backgroundColor = isDark ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 255 / 50%)';
    textBox.style.backgroundColor = isDark? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 0 / 50%)';
    toggleIcon.children[0].textContent = isDark ? 'Dark Mode' : 'Light Mode';
    isDark ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon'):
    // pake ? sama :
        toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    isDark ? imageMode('dark') : imageMode('light');
}

//Switch Theme Dynamically
function switchTheme(event){
    if(event.target.checked){
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        toggleDarkLightMode(true);
    }else{
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        toggleDarkLightMode(false);
    }
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);

// Check local storage for theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if(currentTheme === 'dark'){
        toggleSwitch.checked = true;
        toggleDarkLightMode(true);
    }
}