export function validateFields(value){
    return value.replace(/[^0-9,]/g, '')
}