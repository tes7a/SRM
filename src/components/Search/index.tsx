import { Autocomplete } from '@mui/material'
import styled from 'styled-components'

const Search = styled(Autocomplete)(() => ({
  width: '300px',
  height: '56px',
  margin: '16px',
}))

export default Search
