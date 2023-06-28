import React from 'react'
import { faAdd } from '@fortawesome/free-solid-svg-icons'
import { render } from '@testing-library/react'
import Icon, { type IconProps } from './Icon'

describe('<Icon />', () => {
  test('Should render label correctly', () => {
    const component = makeSut({ icon: faAdd })

    expect(component).toBeInTheDocument()
  })
})

const makeSut = (props: IconProps): any => {
  return render(<Icon icon={props.icon} size={props.size} class={props.class} />)
}
