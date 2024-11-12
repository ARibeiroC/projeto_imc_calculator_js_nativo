import { data } from "../data/data.js";

export function toggleClassResult(resultImc=0){
    data.forEach((classification, index)=>{
        console.log(resultImc)
        if (resultImc >= classification.min && resultImc <= classification.max){
            document.querySelector(`#id-${index}.table-data`).classList.add('result')
        } if (resultImc === 0) {
            document.querySelector(`#id-${index}.table-data`).classList.remove('result')     
        } else {
            return
        }
    })
}