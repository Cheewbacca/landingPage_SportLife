const burger = document.getElementById("burger");
const cross = document.getElementById("cross");
const nav = document.getElementById("navigate");

burger.addEventListener("click", () => {
    burger.style.display = 'none';
    cross.style.display = 'block';
    nav.style.display = 'block';
});

cross.addEventListener("click", () => {
    cross.style.display = 'none';
    burger.style.display = 'block';
    nav.style.display = 'none';
})