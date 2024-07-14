const data = [
    {
        min: 0,
        max: 18.4,
        classification: "Menor que 18,5",
        info: "Abaixo do peso",
        
    },
    {
        min: 18.5,
        max: 24.9,
        classification: "Entre 18,5 e 24,9",
        info: "Peso Normal",
        
    },
    {
        min: 25.0,
        max: 29.9,
        classification: "Entre 25,0 e 29,9",
        info: "Sobrepeso",
        
    },
    {
        min: 30.0,
        max: 34.9,
        classification: "Entre 30,0 e 34,9",
        info: "Obesidade de Classe I",
    },
    {
        min: 35.0,
        max: 39.9,
        classification: "Entre 35,5 e 39,9",
        info: "Obesidade de Classe II",
    },
    {
        min: 40.0,
        max: 99.9,
        classification: "Maior que 40,0",
        info: "Obesidade de Classe III",
    },
]

// SELECTING ELEMENTS
const imcTable = document.querySelector('#imc-table')
const heightInput = document.querySelector('#height')
const weightInput = document.querySelector('#weight')
const calcBtn = document.querySelector('#calc-btn')
const clearBtn = document.querySelector('#clear-btn')
const backBtb = document.querySelector('#back-btn')

// FUNCTIONS
function createTable(data) {
    data.forEach((item)=>{
        const div = document.createElement('div')
        div.classList.add("table-data")

        const classification =  document.createElement('p')
        classification.innerText = item.classification 
        
        const info =  document.createElement('p')
        info.innerText = item.info 
        
        div.appendChild(classification)
        div.appendChild(info)

        imcTable.appendChild(div)
    })
}

function clearInputs(){
    heightInput.value = ''
    weightInput.value = ''
}


function validDigits(text){
    return text.replace(/[^0-9,]/g, '')
}

const toggleScreen = () => {
    document.querySelector('#result-container').classList.toggle('hide')
    document.querySelector('#calc-container').classList.toggle('hide')
}

// STARTING OF THE SYSTEM
 createTable(data)

// EVENTS
heightInput.addEventListener('input', e => {
    const updatedValue = validDigits(e.target.value)

    e.target.value = updatedValue
})

document.addEventListener('click', (e)=> {
    e.preventDefault()
    if (e.target.id === clearBtn.id){
        clearInputs()
    }

    if (e.target.id === calcBtn.id){
        const height = parseFloat(heightInput.value.replace(',','.'))
        const weight = parseFloat(weightInput.value.replace(',','.'))

        const resultaImc = (weight / (height*height))

        document.querySelector('#imc-info span').innerText = resultaImc.toFixed(1)
        toggleScreen()
        clearInputs()
    }

    if (e.target.id === backBtb.id){
        toggleScreen()
    }
})
