import { heightInput, weightInput } from "./elementsHTML.js"

export function clearInputs(){
    heightInput.value = ''
    weightInput.value = ''
    heightInput.focus()
}