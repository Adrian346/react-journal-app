import { authReducer } from "../../reducers/authReducer"
import { types } from "../../types/types"



describe('Pruebas en authReducer', () => {

    test('Debe de realizar el login', () => {
        const initState = {}

        const action = {
            type: types.login,
            payload: {
                uid: 'asa',
                displayName: 'Adrian'
            }
        }
        const state = authReducer(initState, action)        
        expect(state).toEqual({
            uid: 'asa',
            name: 'Adrian'
        })
    })

    test('Debe de realizar el logout', () => {
        const initState = {
            uid: 'asa',
            name: 'Adrian'
        }

        const action = {
            type: types.logout
        }
        const state = authReducer(initState, action)        
        expect(state).toEqual({})
    })
    
    test('No debe de realizar cambios en el state', () => {
        const initState = {
            uid: 'asa',
            name: 'Adrian'
        }

        const action = {
            type: 'types.logout'
        }
        const state = authReducer(initState, action)        
        expect(state).toEqual(initState)
    })
        
})
