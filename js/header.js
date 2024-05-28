//custom 1.0

const iconMenu = document.querySelector(".header__burger");
const menuBody = document.querySelector(".mob-menu__body");
if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle("_lock");
    iconMenu.classList.toggle("active");
    menuBody.classList.toggle("active");
  });
}

const headerPhone = document.querySelector(".header__mob-phone");
const headerPhoneMenu = document.querySelector(".header-menu-mob");
if (headerPhone) {
  headerPhone.addEventListener("click", (e) => {
    headerPhoneMenu.classList.toggle("active");
  });
}
