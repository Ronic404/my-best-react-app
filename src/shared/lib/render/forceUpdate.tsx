import { ReactNode, createContext, useContext, useMemo, useState } from 'react'

const ForceUpdateContext = createContext({
  value: true,
  forceUpdate: () => {},
})

export const useForceUpdate = (): () => void => {
  const { forceUpdate } = useContext(ForceUpdateContext)

  return forceUpdate
}

export function ForceUpdateProvider({ children }: { children: ReactNode }): JSX.Element | null {
  const [value, setValue] = useState<boolean>(true)

  const forceUpdate = (): void => {
    setValue(prev => !prev)
    setTimeout(() => {
      setValue(prev => !prev)
    }, 0)
  }

  const valueContext = useMemo(() => {
    return { value, forceUpdate }
  }, [value])

  if (!value) {
    return null
  }

  return (
    <ForceUpdateContext.Provider value={valueContext}>
      {children}
    </ForceUpdateContext.Provider>
  )
}
