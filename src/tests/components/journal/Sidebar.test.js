import React from 'react';
import { Provider } from 'react-redux';
import { mount } from "enzyme"

import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import { startLogout } from '../../../actions/auth';
import { Sidebar } from '../../../components/journal/Sidebar';
import { startNewNote } from '../../../actions/notes';


jest.mock('../../../actions/auth', () => ({
    startLogout: jest.fn()
}))

jest.mock('../../../actions/notes', () => ({
    startNewNote: jest.fn()
}))

const middlewares = [thunk]
const mockStore = configureStore(middlewares)


const initState = {
    auth: {
        uid: 'safsf',
        name: 'Adrian'
    },
    ui: {
        loading: false,
        msgError: null
    },
    notes: {
        active: null,
        notes: []
    }
}

let store = mockStore(initState)
store.dispatch = jest.fn()

const wrapper = mount(
    <Provider store={ store }>
            <Sidebar/>
    </Provider>
)   

describe('Pruebas en Sidebar', () => {

    test('Debe de mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot()
    })

    test('Debe de llamar el logout Action', () => {

        wrapper.find('.btn').prop('onClick')()
        expect( startLogout ).toHaveBeenCalled()
        
    })

    test('Debe de llamar el startNewNote Action', () => {
        wrapper.find('.journal__new-entry').prop('onClick')()
        expect( startNewNote ).toHaveBeenCalled()
    })
    
})