import { type ChangeEvent } from 'react'
import {
  Table as TableMUI,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  TablePagination,
  TableContainer,
  TableSortLabel,
} from '@mui/material'

import texts from '../../assets/texts.json'
import { type Order, type SRMOperatorInfo } from '../../types'
import OperatorInfo from './OperatorInfo'

interface TableProps {
  operators: SRMOperatorInfo[]
  page: number
  rowsPerPage: number
  totalNumber: number
  order: Order
  orderBy: string
  handleChangePage: (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => void
  handleChangeRowsPerPage: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void
  handleRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof SRMOperatorInfo,
  ) => void
}

export default function Table(props: TableProps) {
  const headRows: Array<{
    id: keyof SRMOperatorInfo
    name: string
  }> = [
    { id: 'id', name: '#' },
    { id: 'name', name: texts.User },
    { id: 'isWorking', name: texts.Worked },
    { id: 'createdAt', name: texts.Date },
    { id: 'text', name: texts.Text },
  ]
  const {
    operators,
    page,
    rowsPerPage,
    totalNumber,
    order,
    orderBy,
    handleChangePage,
    handleChangeRowsPerPage,
    handleRequestSort,
  } = props

  const createSortHandler =
    (property: keyof SRMOperatorInfo) => (event: React.MouseEvent<unknown>) => {
      handleRequestSort(event, property)
    }

  return (
    <TableContainer>
      <TableMUI>
        <TableHead>
          <TableRow>
            {headRows.map((row) => (
              <TableCell
                sx={{
                  fontWeight: 500,
                  lineHeight: '24px',
                }}
                sortDirection={orderBy === row.id ? order : false}
                key={row.id}
              >
                <TableSortLabel
                  direction={orderBy === row.id ? order : 'asc'}
                  onClick={createSortHandler(row.id)}
                >
                  {row.name}
                </TableSortLabel>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {operators.map((operator) => (
            <OperatorInfo
              avatar={operator.avatar}
              createdAt={operator.createdAt}
              id={operator.id}
              text={operator.text}
              name={operator.name}
              fieldName={operator.fieldName}
              isWorking={operator.isWorking}
              key={operator.id}
            />
          ))}
        </TableBody>
      </TableMUI>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={totalNumber}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelRowsPerPage="Rows per page:"
        labelDisplayedRows={({ from, to, count }) =>
          `${from}-${to} of ${count !== -1 ? count : `more than ${to}`}`
        }
      />
    </TableContainer>
  )
}
