import { FC } from 'react'

import { Flex, IFlexProps } from '../Flex'

type VStackProps = Omit<IFlexProps, 'direction'>

export const VStack: FC<VStackProps> = (props) => {
  const { align = 'start' } = props

  return (
    <Flex {...props} direction="column" align={align} />
  )
}
