import React from 'react'
import { render } from '@testing-library/react'
import Header from './Header'

describe('Header conpoonent tests', () => {
  test('Should render correctly', () => {
    const { container } = render(<Header />)
    expect(container).toMatchSnapshot()
  })
})
