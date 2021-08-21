let navbar = document.getElementById('nav');
let burger = document.getElementById('bar');

burger.addEventListener('click', () => {
    navbar.classList.toggle('active');
})

// click event
const button = document.querySelector('.btn');

button.addEventListener('click', event => {
    swal({
        title: "Coming soon!",
        text: "მადლობა დაინტერესებისთვის! კითხვის გაგზავნის ფუნქცია მალე დაემატება საიტს, შეგიძლიათ დაგვიკავშირდეთ სოციალური ქსელების დახმარებით.",
        icon: "info",
      });
});