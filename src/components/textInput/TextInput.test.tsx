import React from 'react'
import { fireEvent, getByTestId, render } from '@testing-library/react'
import TextInput from './TextInput'

describe('TextInput', () => {
  test('Should render correctly', () => {
    const { container } = render(<TextInput type={'text'} />)
    expect(container).toMatchSnapshot()
  })

  test('calls onDeleteClick when clicked', () => {
    const callback = jest.fn()
    const { container } = render(
      <TextInput attributes={{ 'data-testid': 'my-input' }} onKeyDown={callback} type={'text'} />
    )
    fireEvent.keyDown(getByTestId(container, 'my-input'), {
      key: 'Enter',
      code: 'Enter',
      keyCode: 13,
      charCode: 13
    })
    expect(callback).toBeCalled()
  })
})
