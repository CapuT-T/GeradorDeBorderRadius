const borderExpression = document.querySelector('[data-border="espressao"]')
const viewBorder = document.querySelector('[data-border="view"]')
const enviar = document.querySelector('[data-border="enviar"]')
const resetar = document.querySelector('[data-border="resetar"]')
const inputs = document.querySelectorAll('[data-incercao]')

function modificarView(){    
    const radio = document.querySelector('.medidas input[type="radio"]:checked')
    const medida = radio.getAttribute('value')

    let values = []

    inputs.forEach((input, index) => {
        switch(index){
            case 0:
                viewBorder.style.borderTopLeftRadius = input.value + medida
                values.push(input.value)
                break
            case 1:
                viewBorder.style.borderTopRightRadius = input.value + medida
                values.push(input.value)
                break
            case 2:
                viewBorder.style.borderBottomRightRadius = input.value + medida
                values.push(input.value)
                break
            case 3:
                viewBorder.style.borderBottomLeftRadius = input.value + medida
                values.push(input.value)
                break
        }
    })

    borderExpression.innerText = 'border-box:'

    values.forEach((valor, index) => {
        borderExpression.innerText += ' '+valor+medida
        if(index == 3)
            borderExpression.innerText += ';'
    })
}

function resetarView(){
    viewBorder.style.borderRadius = 0
    inputs.forEach(input => input.value = 0)
    borderExpression.innerText = 'border-box: 0px 0px 0px 0px;'
}

enviar.addEventListener('click', modificarView)
resetar.addEventListener('click', resetarView)

const ligarLeft = document.querySelector('[data-corrente="left"]')
const ligarRight = document.querySelector('[data-corrente="right"]')

function ligarBordas(event){
    if(this.getAttribute('data-corrente') == 'left'){
        inputs[3].value = inputs[0].value
    } else{
        inputs[2].value = inputs[1].value

    }
    
}

[ligarLeft, ligarRight].forEach(link => link.addEventListener('click', ligarBordas))