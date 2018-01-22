function createMenu (array, className) {
    let menu = document.createElement("ul");
    menu.className = className;
    let listItems = '';
    array.forEach(function(item) {
        listItems += '<li>' + item + '</li>';
    });
    menu.innerHTML = listItems;

    return menu;
};

export default createMenu;
