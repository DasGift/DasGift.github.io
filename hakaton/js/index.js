const hideMenu = () => {
    let menuIcon = document.getElementById('menu-icon');
    let menu = document.getElementById('menu');

    menuIcon.onclick = function() {
        if(menu.classList.contains('menu-active')) {
            menu.style.display = 'none';
            menu.classList.remove('menu-active');
        } else {
            menu.style.display = 'block';
            menu.classList.add('menu-active');
        }
    };
};

hideMenu();

const hideDrivers = () => {
    let drivers = document.getElementById('drivers');
    let driversList = document.getElementById('driver-list');

    drivers.onclick = function() {
        if(driversList.classList.contains('drivers-list-active')) {
            driversList.style.display = 'none';
            driversList.classList.remove('drivers-list-active');
        } else {
            driversList.style.display = 'block';
            driversList.classList.add('drivers-list-active');
        }
    }

};

hideDrivers();

const addDriver = () => {
    let addDriver = document.getElementById('add-driver');
    let overlay = document.getElementById('overlay');
    let addBlock = document.getElementById('add-cart-block');

    addDriver.onclick = function() {
        overlay.style.display = 'block';
        addBlock.style.display = 'flex';
    }
};

addDriver();

const closeBlock = () => {
    let closeBlock = document.getElementById('close-block');
    let overlay = document.getElementById('overlay');
    let addBlock = document.getElementById('add-cart-block');

    closeBlock.onclick = function() {
        overlay.style.display = 'none';
        addBlock.style.display = 'none';
    }
};

closeBlock();



