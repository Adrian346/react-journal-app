import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';

import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import { NoteScreen } from '../../../components/notes/NoteScreen';
import { activeNote } from '../../../actions/notes';

jest.mock('../../../actions/notes', () => ({
    activeNote: jest.fn()
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
        active: {
            id: 1234,
            body: 'Mundo',
            title: 'Hola',
            date: 0
        },
        notes: []
    }
}

let store = mockStore(initState)
store.dispatch = jest.fn()

const wrapper = mount(
    <Provider store={ store }>
        <NoteScreen/>
    </Provider>
)

describe('Pruebas en NoteScreen', () => {

    test('Debe mostarse correctamente', () => {
        expect(wrapper).toMatchSnapshot()        
    })

    test('Debe de disparar el activeNote', () => {
        wrapper.find('input[name="title"]').simulate('change', {
            target: {
                name: 'title',
                value: 'Hola de nuevo'
            }
        })                

        expect(activeNote).toHaveBeenLastCalledWith(
            1234,
            {
                body: 'Mundo',
                title: 'Hola de nuevo',
                id: 1234,
                date: 0
            }
        )
    })
        
    
})
