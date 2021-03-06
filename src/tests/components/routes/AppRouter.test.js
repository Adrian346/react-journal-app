import React from 'react';
import { Provider } from 'react-redux';
import { mount } from "enzyme"
import { MemoryRouter } from 'react-router-dom';

import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import { firebase } from '../../../firebase/firebase-config'

import { login } from '../../../actions/auth';
import { AppRouter } from '../../../components/routers/AppRouter';
import { act } from '@testing-library/react';


jest.mock('../../../actions/auth', () => ({
    login: jest.fn()
}))

const middlewares = [thunk]
const mockStore = configureStore(middlewares)


const initState = {
    auth: {},
    ui: {
        loading: false,
        msgError: null
    },
    notes: {
        active: {
            id: 'ABC'
        },
        notes: []
    }
}

let store = mockStore(initState)
store.dispatch = jest.fn()



describe('Pruebas en AppRouter', () => {

    test('Debe de llamar el login si esta autenticado', async() => {
        let user 
        await act( async() => {
            const userCred = await firebase.auth().signInWithEmailAndPassword('test@testing.com', '123456')
            user = userCred.user
            const wrapper = mount(
                <Provider store={ store }>
                    <MemoryRouter>
                        <AppRouter/>
                    </MemoryRouter>
                </Provider>
            )        
        })

        expect(login).toHaveBeenCalledWith('5PuEHGflwmP5puUU077VsXxBfQ52', null)
    })
    
    
})
