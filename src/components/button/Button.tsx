import React, { type ReactNode, type MouseEventHandler } from 'react'

interface ButtonProps {
  class?: string | undefined
  onClick?: MouseEventHandler
  children: ReactNode
  attributes?: any | undefined
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => (
  <button className={props.class} onClick={props.onClick} {...props.attributes}>
    {props.children}
  </button>
)

export default Button
