let form = window.document.getElementById('form')
let list = window.document.getElementById('list')

form.addEventListener('submit',(event)=>{
    event.preventDefault()
    let value = document.getElementById('name').value
    console.log(value)

    let divContainer = document.createElement('div')
    divContainer.classList.add("container")



    let div = document.createElement('div')
    div.textContent = value
    div.classList.add("info")

    let img = document.createElement('img')
    img.src = '../img/button.svg'
    img.id = "img-section"

    img.addEventListener('click', (e) => {
        e.target.parentElement.remove();;
    });



    let imgchekbox = document.createElement('img')
    imgchekbox .src = '../img/checkbox.svg'
    imgchekbox.id = 'img-check'

    let ischeked = false; // estado inicial

    imgchekbox.addEventListener('click', () => {
        if (ischeked) {
            imgchekbox.src = '../img/checkbox.svg'; // imagem desmarcada
        } else {
            imgchekbox.src = '../img/state=selected.svg'; // imagem marcada
        }
        ischeked = !ischeked; // alterna o estado
    });



    div.append(imgchekbox)

    divContainer.append(div,img)

    list.append(divContainer)


})





