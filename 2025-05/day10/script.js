let item_list = document.getElementById('item-list');

for (const item of item_list.children) {
    item.addEventListener('click', () => {
        let details = item.querySelector('.details');
        const currentDisplay = window.getComputedStyle(details).display;

        if (currentDisplay == 'none'){
            details.style.display = 'block';
        }
        else {
            details.style.display = 'none';
        }
    });
}