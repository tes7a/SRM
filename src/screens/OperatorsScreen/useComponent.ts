import { type ChangeEvent, useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'

import { type RootState, useAppDispatch } from '../../store'
import { fetchOperators } from '../../reducers/operators'
import { type SRMOperatorInfo, type Order } from '../../types'

export const useComponent = () => {
  const { loading, entries, error } = useSelector(
    (state: RootState) => state.operators,
  )

  const [filteredEntries, setFilteredEntries] =
    useState<SRMOperatorInfo[]>(entries)
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const [order, setOrder] = useState<Order>('asc')
  const [orderBy, setOrderBy] = useState<keyof SRMOperatorInfo>('id')
  const dispatch = useAppDispatch()

  function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (orderBy === 'id') {
      return Number(b[orderBy]) - Number(a[orderBy])
    }

    if (b[orderBy] < a[orderBy]) {
      return -1
    }
    if (b[orderBy] > a[orderBy]) {
      return 1
    }
    return 0
  }

  function getComparator<Key extends keyof SRMOperatorInfo>(
    order: Order,
    orderBy: Key,
  ): (a: SRMOperatorInfo, b: SRMOperatorInfo) => number {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy)
  }

  function stableSort<T>(
    array: readonly T[],
    comparator: (a: T, b: T) => number,
  ): T[] {
    const stabilizedThis = array.map((el, index) => [el, index] as [T, number])
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0])
      if (order !== 0) {
        return order
      }
      return a[1] - b[1]
    })
    return stabilizedThis.map((el) => el[0])
  }

  const visibleRows = useMemo(() => {
    if (filteredEntries) {
      return stableSort(filteredEntries, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      )
    } else {
      return []
    }
  }, [filteredEntries, order, orderBy, page, rowsPerPage])

  const handleChangeRowsPerPage = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage)
  }

  const handleFindOperator = (event: React.SyntheticEvent, value: string) => {
    setFilteredEntries((state) => {
      if (!value) {
        return [...entries]
      } else {
        return state.filter((operator) => operator.name === value)
      }
    })
  }

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof SRMOperatorInfo,
  ) => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

  useEffect(() => {
    if (entries) {
      setFilteredEntries(entries)
    }
  }, [entries])

  useEffect(() => {
    dispatch(fetchOperators())
  }, [dispatch])

  useEffect(() => {
    toast(error, {
      position: 'top-center',
      autoClose: 5000,
    })
  }, [error])

  return {
    data: {
      entries,
      loading,
      rowsPerPage,
      page,
      operators: visibleRows,
      order,
      orderBy,
    },
    handlers: {
      handleChangePage,
      handleChangeRowsPerPage,
      handleRequestSort,
      handleFindOperator,
    },
  }
}
