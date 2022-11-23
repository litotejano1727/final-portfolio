goTo = (keyword) => {
    const identifier = '#' + keyword;
    const portfolio = document.querySelector(identifier);
    portfolio.scrollIntoView({ behavior: 'smooth' });
}
scrollFunction = () => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("header").style.fontSize = "16px";
        document.getElementById("fontSize").style.fontSize = "16px";
        document.getElementById("fontSize1").style.fontSize = "16px";
        document.getElementById("fontSize2").style.fontSize = "16px";
        document.getElementById("header").style.transition = "all .2s";
        document.getElementById("fontSize").style.transition = "all .2s";
        document.getElementById("fontSize1").style.transition = "all .2s";
        document.getElementById("fontSize2").style.transition = "all .2s";
        const navbar = document.getElementById('navbar');
        navbar.classList.remove('header1')
        navbar.classList.add('header2');
    } else {
        document.getElementById("header").style.fontSize = "40px";
        document.getElementById("fontSize").style.fontSize = "40px";
        document.getElementById("fontSize1").style.fontSize = "40px";
        document.getElementById("fontSize2").style.fontSize = "40px";
        document.getElementById("header").style.transition = "all .2s";
        document.getElementById("fontSize").style.transition = "all .2s";
        document.getElementById("fontSize1").style.transition = "all .2s";
        document.getElementById("fontSize2").style.transition = "all .2s";
        navbar.classList.remove('header2')
        navbar.classList.add('header1');
    }
};
window.onscroll = scrollFunction;


