import { useEffect, useReducer } from 'react'
import { register, unRegister } from './history'

const generateId = ( () => {
    let id = 0
    return () => {
        id += 1
        return id
    }
} )()

const Route = ({path , children}) => {

    const [ ignore, forceUpdate ] = useReducer( x => x + 1 , 0)


    useEffect( () => {
        const id = generateId()
        register( id , forceUpdate)

        return () => {
            unRegister( id )
        }

    } , [] )

    const pathname = window.location.pathname
    if(pathname !== path){
        return null
    }
    return children
}

export default Route