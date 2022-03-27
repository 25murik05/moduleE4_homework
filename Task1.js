const obj = {
    '': '',
    string: 'string',
    five: 5,
    123: '123',
    obj1: { obj2: 'obj2' },
}

const ownProp = obj => {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) console.log(key)
    }
}
ownProp(obj)