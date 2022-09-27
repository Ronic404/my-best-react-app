import { Component, ErrorInfo, ReactNode, Suspense } from 'react'

import { PageError } from 'widgets/PageError'

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.log(error, errorInfo)
  }

  render(): ReactNode {
    const { children } = this.props
    const { hasError } = this.state

    if (hasError) {
      return (
        <Suspense fallback=''>
          <PageError />
        </Suspense>
      )
    }

    return children
  }
}
