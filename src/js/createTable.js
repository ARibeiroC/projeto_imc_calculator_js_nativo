import {imcTable} from './elementsHTML.js'

export function createTable(data) {
    data.forEach((item, index)=>{
        const div = document.createElement('div')
        div.classList.add("table-data")
        div.setAttribute('id', `id-${index}`)
        const classification =  document.createElement('p')
        classification.innerText = item.classification 
        
        const info =  document.createElement('p')
        info.innerText = item.info 
        
        div.appendChild(classification)
        div.appendChild(info)

        imcTable.appendChild(div)
    })
}