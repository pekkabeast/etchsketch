

const mainDiv = document.querySelector('div');


for (let i = 0; i < 16; i++) {

    let div = document.createElement('div');
    div.setAttribute('id', `${i + 1}-0`);
    div.classList.add('flex')
    for (let j = 0; j < 16; j++) {
        let innerDiv = document.createElement('div');
        innerDiv.setAttribute('id', `${i + 1}-${j + 1}`);
        innerDiv.classList.add('square');
        mainDiv.addEventListener('mousedown', function () {
            innerDiv.addEventListener('mouseover',change)
            innerDiv.addEventListener('click',change);
        })
        mainDiv.addEventListener('mouseup', function(){
            innerDiv.removeEventListener('mouseover',change)
        })

        div.appendChild(innerDiv);
    }

    mainDiv.appendChild(div);

}


function change(){
    this.classList.add('change');
}


const button = document.querySelector('button');
button.addEventListener('click',clear)


function clear(){
    const divs = document.querySelectorAll('div');
    divs.forEach((div)=>{div.classList.remove('change')});
}