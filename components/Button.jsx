import * as React from 'react'
import { styled } from '@mui/material/styles'
import MaterialButton from '@mui/material/Button'

const StyledButton = styled(MaterialButton)``

export default function Button() {
  return <StyledButton variant="contained">Contained</StyledButton>
}
