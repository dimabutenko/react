import React from 'react'
import { render } from '@testing-library/react'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './app/store'

describe('App conpoonent tests', () => {
  test('Should render correctly', () => {
    const { container } = render(
      <Provider store={store}>
        <App />
      </Provider>
    )
    expect(container).toMatchSnapshot()
  })
})
