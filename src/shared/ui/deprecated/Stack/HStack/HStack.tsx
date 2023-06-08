import { FC } from 'react'

import { Flex, IFlexProps } from '../Flex'

type HStackProps = Omit<IFlexProps, 'direction'>

export const HStack: FC<HStackProps> = (props) => {
  return (
    <Flex {...props} direction="row" />
  )
}
