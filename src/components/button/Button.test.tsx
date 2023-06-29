import React from 'react'
import { render, screen } from '@testing-library/react'
import Button from './Button'
import * as userEvent from '@testing-library/user-event'

describe('Button component tests', () => {
  test('Should render correctly', async () => {
    const { container } = render(<Button>Hello world</Button>)
    expect(container).toMatchSnapshot()
  })

  test('Should call onClick when clicked', async () => {
    const user = userEvent.default.setup()
    const onClick = jest.fn()
    render(<Button onClick={onClick}>Hello world</Button>)
    await user.click(screen.getByText('Hello world'))
    expect(onClick).toBeCalled()
  })
})
