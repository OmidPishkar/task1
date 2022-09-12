const instances = {}

export const register = ( id , callback ) => {
    instances[id] = callback
}

export const unRegister = (id) => {
    delete instances[id]
}


export const historyPushState = (state , title , to) => {
    window.history.pushState( state , title , to)

    Object.keys(instances).forEach( id => instances[id]() )
}