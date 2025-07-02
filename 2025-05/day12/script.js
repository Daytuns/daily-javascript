let TextField = document.getElementById('TextField');
let TextValue = TextField.value;
let Count = document.getElementById('count');

TextField.addEventListener("input", () => {
    TextValue = TextField.value;
    let count = TextValue.length;

    Count.innerHTML = count;
})
