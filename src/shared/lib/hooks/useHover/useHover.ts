import { useCallback, useMemo, useState } from 'react'

interface UseHoverBind {
  onMouseEnter: () => void
  onMouseLeave: () => void
}

type useHoverResult = [boolean, UseHoverBind]

export const useHover = (): useHoverResult => {
  const [isHover, setIsHover] = useState<boolean>(false)

  const onMouseEnter = useCallback(() => {
    setIsHover(true)
  }, [])

  const onMouseLeave = useCallback(() => {
    setIsHover(false)
  }, [])

  return useMemo(() => {
    return [
      isHover,
      {
        onMouseEnter,
        onMouseLeave,
      },
    ]
  }, [isHover, onMouseEnter, onMouseLeave])
}
