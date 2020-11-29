let isUnique = (str) => {
    let obj = {};

    for (const str_ele of str) {
        (!obj[str_ele]) ? obj[str_ele] = 1 : obj[str_ele]++
    }
    for (const obj_ele in obj) {
        if (obj[obj_ele] > 1) {
            return false
        }
    }
    return true
}

console.log({unique:isUnique("iuo")})