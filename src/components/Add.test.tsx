import React from 'react'
import { fireEvent, screen, render } from '@testing-library/react'
import Add from './Add'
import { Provider } from 'react-redux'
import { store } from '../app/store'

describe('Add conpoonent tests', () => {
  test('Should render correctly', () => {
    const { container } = render(
      <Provider store={store}>
        <Add />
      </Provider>
    )
    expect(container).toMatchSnapshot()
  })
  test('Should clean input value when key down event with key Enter fired', () => {
    render(
      <Provider store={store}>
        <Add />
      </Provider>
    )
    const input = screen.getByPlaceholderText<HTMLInputElement>('Create a new todo...')
    input.value = 'New TODO'
    fireEvent.keyDown(input, { key: 'Enter' })

    expect(input.value).toEqual('')
  })

  test('Should nothing to do with input value when key down event fired with different than Enter key', () => {
    render(
      <Provider store={store}>
        <Add />
      </Provider>
    )
    const input = screen.getByPlaceholderText<HTMLInputElement>('Create a new todo...')
    input.value = 'New TODO'
    fireEvent.keyDown(input, { key: 'Esc' })

    expect(input.value).toEqual('New TODO')
  })
})
