import { ImgHTMLAttributes, memo, ReactElement, useLayoutEffect, useState } from 'react'

export interface IAppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string
  fallback?: ReactElement
  errorFallback?: ReactElement
}

export const AppImage = memo((props: IAppImageProps) => {
  const { className, src, alt = 'image', fallback, errorFallback, ...otherProps } = props

  const [hasError, setHasError] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useLayoutEffect(() => {
    const img = new Image()
    img.src = src ?? ''

    img.onload = () => {
      setIsLoading(false)
    }
    img.onerror = () => {
      setHasError(true)
    }
  }, [src])

  if (isLoading && fallback) {
    return fallback
  }

  if (hasError && errorFallback) {
    return errorFallback
  }

  return (
    <img className={className} src={src} alt={alt} { ...otherProps } />
  )
})
