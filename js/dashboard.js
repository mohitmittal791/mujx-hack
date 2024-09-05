// Example JavaScript for future expansion

document.addEventListener('DOMContentLoaded', function () {
    const menuItems = document.querySelectorAll('.sidebar-menu li a');

    menuItems.forEach(item => {
        item.addEventListener('click', function () {
            menuItems.forEach(menu => menu.classList.remove('active'));
            this.classList.add('active');
        });
    });
});
