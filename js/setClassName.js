const elementInput = document.getElementById("elementName");
const styleName = document.getElementById("styleName");
const setStyleBtn = document.getElementById("pbSetStyle");
const setTagStyleBtn = document.getElementById("pbSetTagStyle");

setStyleBtn.addEventListener('click', () => {
    console.log(elementInput.value);
    const inputToChange = document.getElementsByClassName(elementInput.value)[0];
    inputToChange.classList.add(styleName.value);
    console.log(inputToChange.classList)
})

setTagStyleBtn.addEventListener('click', () => {
    const tagsToChange = document.getElementsByTagName(elementInput.value);
    Array.from(tagsToChange).forEach((item) => item.classList.add(styleName.value))
})


