import { fireEvent, screen } from '@testing-library/react'

import { ComponentRender } from '@/shared/lib/tests/ComponentRender'

import { Sidebar } from './Sidebar'

describe('Sidebar should', () => {
  test('be in document', () => {
    ComponentRender(<Sidebar />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })

  test('toggle', () => {
    ComponentRender(<Sidebar />)
    const toggleBtn = screen.getByTestId('sidebar-toggle')
    fireEvent.click(toggleBtn)
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
  })
})
