import { Paper, TextField } from '@mui/material'

import texts from '../../assets/texts.json'
import { Container, Loader, Header, Search } from '../../components'
import Table from './Table'
import { useComponent } from './useComponent'

export default function Operators() {
  const {
    data: { entries, loading, page, rowsPerPage, operators, order, orderBy },
    handlers: {
      handleChangePage,
      handleChangeRowsPerPage,
      handleRequestSort,
      handleFindOperator,
    },
  } = useComponent()

  if (loading) {
    return (
      <Container height="100%">
        <Loader size="lg" />
      </Container>
    )
  }

  return (
    <Container>
      <Header>{texts.Operators}</Header>
      <Paper
        elevation={1}
        sx={{
          width: '100%',
          height: '100%',
        }}
      >
        <Search
          freeSolo
          options={entries.map((operator) => operator.name)}
          renderInput={(params) => {
            return <TextField {...params} label={texts.UserName} />
          }}
          onChange={handleFindOperator}
        />
        <Table
          totalNumber={entries.length}
          operators={operators}
          page={page}
          rowsPerPage={rowsPerPage}
          order={order}
          orderBy={orderBy}
          handleRequestSort={handleRequestSort}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </Container>
  )
}
