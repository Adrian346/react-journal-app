import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import { login, logout, startLoginEmailPassword, startLogout, startRegisterWithEmailPasswordName } from "../../actions/auth"
import { types } from "../../types/types"

const middlewares = [thunk]
const mockStore = configureStore(middlewares)


const initState = {}

let store = mockStore(initState)

describe('Pruebas en authActions', () => {

    beforeEach( ()=> {
        store = mockStore( initState )
    })

    test('Deben de crear la acción respectiva Login y Logout', () => {

        const uid = 'ABC'
        const displayName = 'Adrian'

        const loginAction = login( uid, displayName )
        const logoutAction = logout()

        expect(loginAction).toEqual({
            type: types.login,
            payload: {
                uid,
                displayName
            }
        })        

        expect(logoutAction).toEqual({
            type: types.logout
        })
    })

    test('Debe de realizar el logout startLogout', async() => {

        await store.dispatch(startLogout())
        const actions = store.getActions()

        expect( actions[0] ).toEqual({
            type: types.logout
        })

        expect( actions[1] ).toEqual({
            type: types.notesLogoutCleaning
        })
        
    })
    
    test('Debe de iniciar el startLoginhEmailPassword', async() => {

        await store.dispatch( startLoginEmailPassword('test@testing.com', '123456') )
        const actions = store.getActions()
        
        expect(actions[1]).toEqual({
            type: types.login,
            payload: {
                uid: '5PuEHGflwmP5puUU077VsXxBfQ52',
                displayName: null
            }
        })
        
    })

    test('Debe de mandar udefined de usuario ya existente startRegisterWithEmailPasswordName', async() => {
        await store.dispatch( startRegisterWithEmailPasswordName('test@testing.com', '123456', 'Adrian') )
        const actions = store.getActions()

        expect( actions[0] ).toBe(undefined)
    })
    
    
    
})
