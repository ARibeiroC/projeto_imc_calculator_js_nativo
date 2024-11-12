// IMPORTAÇÕES DO MÓDULOS
import {data} from '../data/data.js'
import {heightInput, weightInput, calcBtn, clearBtn, backBtb} from './elementsHTML.js'
import { createTable } from './createTable.js'
import {clearInputs} from './clearInputs.js'
import { validateFields } from './validateFields.js'
import { toggleScreen } from './toggleScreen.js'
import { toggleClassResult } from './toggleClassResult.js'


// STARTING OF THE SYSTEM
 createTable(data)

// EVENTS
heightInput.addEventListener('input', e => {
    const fieldValidated = validateFields(e.target.value)
    e.target.value = fieldValidated
})

document.addEventListener('click', (e)=> {
    e.preventDefault()
    // CÓDIGO REFATORADO POSTERIORMENTE PARA UMA MELHOR COMPREENSÃO E CLARESA DA FUNCIONALIDADE
    switch (e.target.id) {
        case clearBtn.id:
            clearInputs()
            break
        case calcBtn.id:
            const height = parseFloat(heightInput.value.replace(',','.'))
            const weight = parseFloat(weightInput.value.replace(',','.'))

            let resultImc = (weight / (height ** 2))
            resultImc = resultImc.toFixed(1)

            document.querySelector('#imc-number span').innerText = resultImc
            toggleClassResult(resultImc)
            toggleScreen()
            break
        case backBtb.id:
            toggleScreen()
            clearInputs()
            toggleClassResult()
            break
    }

    // CÓDIGO CRIANDO DURANTE OS ESTUDOS
    // if (e.target.id === clearBtn.id){
    //     clearInputs()
    // }

    // if (e.target.id === calcBtn.id){
    //     const height = parseFloat(heightInput.value.replace(',','.'))
    //     const weight = parseFloat(weightInput.value.replace(',','.'))

    //     const resultaImc = (weight / (height ** 2))

    //     document.querySelector('#imc-number span').innerText = resultaImc.toFixed(1)
    //     toggleScreen()
    //     clearInputs()
    // }

    // if (e.target.id === backBtb.id){
    //     toggleScreen()
    //     clearInputs()
    // }
})
