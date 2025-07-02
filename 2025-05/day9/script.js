let parent = document.getElementById('fruit-list');

for (const child of parent.children) {
    child.addEventListener('click', () => { 
        for (const child2 of parent.children) {
            if (child2.classList.contains('highlight')){
                child2.classList.remove('highlight');
            }
        }
        highlight(child);
    });
}

function highlight (child) {
    child.classList.add('highlight');
};