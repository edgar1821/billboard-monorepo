import { render } from '@testing-library/react'

import BillboardUi from './billboard-ui'

describe('BillboardUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BillboardUi />)
    expect(baseElement).toBeTruthy()
  })
})
