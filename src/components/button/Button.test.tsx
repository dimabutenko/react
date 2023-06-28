import React from 'react'
import { render, screen } from '@testing-library/react'
import Button from './Button'
import * as userEvent from '@testing-library/user-event'

describe('Button', () => {
  test('Should render correctly', async () => {
    const { container } = render(<Button>Hello world</Button>)
    expect(container).toMatchSnapshot()
  })

  test('calls onDeleteClick when clicked', async () => {
    const user = userEvent.default.setup()
    const callback = jest.fn()
    render(<Button onClick={callback}>Hello world</Button>)
    await user.click(screen.getByText('Hello world'))
    expect(callback).toBeCalled()
  })
})
