function findJsFile(fileName){
    if (typeof fileName === 'number') {
        return 'Please give a valid number'
    }
    else if (fileName.endsWith('.js')) {
        return 'Js file'
    }
    else{
        return 'Not js file'
    }
}
console.log(findJsFile('.js'));