import React, { type ReactNode, type MouseEventHandler } from 'react'

interface ButtonProps {
  class?: string | undefined
  onClick?: MouseEventHandler
  children: ReactNode
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => (
  <button className={props.class} onClick={props.onClick}>
    {props.children}
  </button>
)

export default Button
