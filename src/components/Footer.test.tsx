import React from 'react'
import { render } from '@testing-library/react'
import Footer from './Footer'

describe('Footer conpoonent tests', () => {
  test('Should render correctly', () => {
    const { container } = render(<Footer />)
    expect(container).toMatchSnapshot()
  })
})
