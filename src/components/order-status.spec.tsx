import { render } from '@testing-library/react'

import { OrderStatus } from './order-status'

describe('Order Status', () => {
  it('should display the right text when order status is pending', () => {
    const wrapper = render(<OrderStatus status="pending" />)

    const statusText = wrapper.getByText('Pendente')
    const badgElement = wrapper.getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(badgElement).toHaveClass('bg-slate-400')
  })

  it('should display the right text when order status is canceled', () => {
    const wrapper = render(<OrderStatus status="canceled" />)

    const statusText = wrapper.getByText('Cancelado')
    const badgElement = wrapper.getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(badgElement).toHaveClass('bg-rose-500')
  })

  it('should display the right text when order status is delivering', () => {
    const wrapper = render(<OrderStatus status="delivering" />)

    const statusText = wrapper.getByText('Em entrega')
    const badgElement = wrapper.getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(badgElement).toHaveClass('bg-amber-500')
  })

  it('should display the right text when order status is processing', () => {
    const wrapper = render(<OrderStatus status="processing" />)

    const statusText = wrapper.getByText('Em preparo')
    const badgElement = wrapper.getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(badgElement).toHaveClass('bg-amber-500')
  })

  it('should display the right text when order status is delivered', () => {
    const wrapper = render(<OrderStatus status="delivered" />)

    const statusText = wrapper.getByText('Entregue')
    const badgElement = wrapper.getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(badgElement).toHaveClass('bg-emerald-500')
  })
})
