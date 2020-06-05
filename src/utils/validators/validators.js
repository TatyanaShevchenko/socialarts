export const requiredField = (value) => {
    if (value) return undefined;
    return 'Field is required';
}
export const maxLengthCreator =(maxLenght)=> (value) => {
    if (value && value.length > maxLenght) return `Max length is ${maxLenght} symbols`;
    return undefined;
}
