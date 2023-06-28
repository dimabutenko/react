import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { type IconDefinition } from '@fortawesome/fontawesome-common-types'
import { type SizeProp } from '@fortawesome/fontawesome-svg-core'

export interface IconProps {
  icon: IconDefinition
  size?: SizeProp | undefined
  class?: string | undefined
}

const Icon: React.FC<IconProps> = (props: IconProps) => (
  <FontAwesomeIcon icon={props.icon} size={props.size} className={props.class} />
)

export default Icon
