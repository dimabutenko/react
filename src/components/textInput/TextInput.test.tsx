import React from 'react'
import { fireEvent, getByTestId, render } from '@testing-library/react'
import TextInput from './TextInput'

describe('TextInput component tests', () => {
  test('Should render correctly', () => {
    const { container } = render(<TextInput type={'text'} />)
    expect(container).toMatchSnapshot()
  })

  test('Should call onKeyDown when KeyDown', () => {
    const onKeyDown = jest.fn()
    const { container } = render(
      <TextInput attributes={{ 'data-testid': 'my-input' }} onKeyDown={onKeyDown} type={'text'} />
    )
    fireEvent.keyDown(getByTestId(container, 'my-input'), { key: 'Enter' })
    expect(onKeyDown).toBeCalled()
  })
})
