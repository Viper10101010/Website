console.log("Elbanna Web Design Loaded");

// Smooth scroll navigation
document.querySelectorAll('nav a').forEach(anchor => {
anchor.addEventListener('click', function(e){
e.preventDefault();
document.querySelector(this.getAttribute('href'))
.scrollIntoView({behavior:'smooth'});
});
});
