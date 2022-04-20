generate(16);
function generate(size) {
    const mainDiv = document.querySelector('div');


    for (let i = 0; i < size; i++) {

        let div = document.createElement('div');
        div.setAttribute('id', `${i + 1}-0`);
        div.classList.add('flex')
        for (let j = 0; j < size; j++) {
            let innerDiv = document.createElement('div');
            innerDiv.setAttribute('id', `${i + 1}-${j + 1}`);
            let squareSize = 560 / size;
            console.log(squareSize);
            innerDiv.classList.add('square');
            innerDiv.style.height = squareSize +'px';
            innerDiv.style.width = squareSize + 'px';
            mainDiv.addEventListener('mousedown', function () {
                innerDiv.addEventListener('mouseover', change)
                innerDiv.addEventListener('click', change);
            })
            mainDiv.addEventListener('mouseup', function () {
                innerDiv.removeEventListener('mouseover', change)
            })

            div.appendChild(innerDiv);
        }

        mainDiv.appendChild(div);

    }
}

function change() {
    this.classList.add('change');
}


const button = document.querySelector('button');
button.addEventListener('click', clear)


function clear() {
    const divs = document.querySelectorAll('div');
    divs.forEach((div) => { div.classList.remove('change') });

    let size = prompt("Please enter size of new square grid");
    let deleteDiv = document.querySelector('div');
    let counter = deleteDiv.childElementCount;
    for (i  = 0; i< counter; i++){
        let childDiv = deleteDiv.querySelector('div');
        deleteDiv.removeChild(childDiv);
    }
    generate(size);

}