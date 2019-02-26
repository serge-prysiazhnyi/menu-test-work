const accordionMenu = () => {
    let dropdownBtns = document.querySelectorAll('.dropdown-btn');
    dropdownBtns.forEach(item => item.addEventListener('click', function(e) {
        let btnIcon = e.currentTarget.children[0];
        let menuItem = e.currentTarget.parentElement.nextElementSibling;
        if(!menuItem) {
            return false;
        }
        menuItem.classList.toggle('show');
        btnIcon.classList.toggle('icon-open');
    }));
};

window.onload = () => {
    accordionMenu();
}