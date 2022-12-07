import { createContext, ReactNode, useContext, useEffect, useMemo, useRef, useState } from 'react'

type SpringType = typeof import('@react-spring/web')
type GestureType = typeof import('@use-gesture/react')

interface IAnimationContextPayload {
  Spring?: SpringType
  Gesture?: GestureType
  isLoaded?: boolean
}

const AnimationContext = createContext<IAnimationContextPayload>({})

const getAsyncAnimationModules = async (): Promise<[SpringType, GestureType]> => {
  return await Promise.all([
    import('@react-spring/web'),
    import('@use-gesture/react'),
  ])
}

export const useAnimationLibs = (): Required<IAnimationContextPayload> => {
  return useContext(AnimationContext) as Required<IAnimationContextPayload>
}

export const AnimationProvider = ({ children }: { children: ReactNode }): JSX.Element => {
  const SpringRef = useRef<SpringType>()
  const GestureRef = useRef<GestureType>()
  const [isLoaded, setIsLoaded] = useState<boolean>(false)

  useEffect(() => {
    getAsyncAnimationModules().then(([Spring, Gesture]) => {
      SpringRef.current = Spring
      GestureRef.current = Gesture
      setIsLoaded(true)
    })
  }, [])

  const value = useMemo(() => ({
    Spring: SpringRef.current,
    Gesture: GestureRef.current,
    isLoaded,
  }), [isLoaded])

  return (
    <AnimationContext.Provider value={value}>
      {children}
    </AnimationContext.Provider>
  )
}
