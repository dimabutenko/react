import React, { type HTMLInputTypeAttribute, type KeyboardEventHandler } from 'react'

export interface TextInputProps {
  type: HTMLInputTypeAttribute
  onKeyDown?: KeyboardEventHandler
  setInputRef?: React.LegacyRef<HTMLInputElement> | undefined
  placeholder?: string | undefined
  class?: string | undefined
  attributes?: any | undefined
}

const TextInput: React.FC<TextInputProps> = (props: TextInputProps) => (
  <input
    type={props.type}
    ref={props.setInputRef}
    className={props.class}
    placeholder={props.placeholder}
    onKeyDown={props.onKeyDown}
    {...props.attributes}
  />
)

export default TextInput
