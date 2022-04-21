// функция- помощник для замены объекта в массиве
// используем для сокращения кода пример userReduser FOLLOW UNFOLLOW

export const updateObjectInArray  = (items, itemId, objPropName, newObjProps) => {

    return items.map(u => {

        if (u[objPropName] === itemId) {   
            let a = {...u, ...newObjProps}
            return {...u, ...newObjProps}
        }
        return u
    })
}