import React from 'react'
import { faAdd } from '@fortawesome/free-solid-svg-icons'
import { render } from '@testing-library/react'
import Icon from './Icon'

describe('Icon', () => {
  test('Should render correctly', () => {
    const { container } = render(<Icon icon={faAdd} size="2xl" />)

    expect(container).toMatchSnapshot()
  })
})
