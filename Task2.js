const obj = {
    '': '',
    string: 'string',
    five: 5,
    123: '123',
    obj1: { obj2: 'obj2' },
}

const ownProp = (obj,str) => {
    if(str in obj)return true
    else return false
}

console.log(ownProp(obj,'five'))