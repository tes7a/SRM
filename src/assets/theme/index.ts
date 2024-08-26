import { createTheme } from '@mui/material/styles'

export default createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  components: {
    MuiTable: {
      styleOverrides: {
        root: {
          // [createTheme().breakpoints.down('md')]: {
          //   tableLayout: 'fixed',
          // },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          [createTheme().breakpoints.down('sm')]: {
            padding: '3px',
          },
        },
        body: {
          [createTheme().breakpoints.down('sm')]: {
            padding: '3px',
          },
        },
        root: {
          borderBottom: '1px solid #CAE0ED',
          fontFamily: 'Rubik',
          fontWeight: 400,
          fontSize: '14px',
          lineHeight: '20.02px',
          letterSpacing: '0.17px',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'Rubik',
          fontWeight: 400,
          fontSize: '14px',
          lineHeight: '20.02px',
          letterSpacing: '0.17px',

          [createTheme().breakpoints.down('md')]: {
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            width: '150px',
          },

          [createTheme().breakpoints.down('sm')]: {
            width: '90px',
          },

          [createTheme().breakpoints.between('xs', 'sm')]: {
            width: '75px',
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          '&.Mui-checked': {
            color: '#F04259',
          },
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          backgroundColor: '#F04259',
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          '&.Mui-focused': {
            color: '#F04259',
          },
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        inputRoot: {
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#F04259',
          },
        },
      },
    },
    MuiTablePagination: {
      styleOverrides: {
        toolbar: {
          [createTheme().breakpoints.down('md')]: {
            padding: '0',
          },
        },
        actions: {
          [createTheme().breakpoints.down('md')]: {
            marginLeft: '10px',
          },
        },
        input: {
          [createTheme().breakpoints.down('md')]: {
            marginRight: '8px',
            marginLeft: '4px',
          },
        },
        selectLabel: {
          color: '#668099',
        },
      },
    },
    MuiTableSortLabel: {
      styleOverrides: {
        icon: {
          [createTheme().breakpoints.down('sm')]: {
            display: 'none',
          },
        },
      },
    },
  },
})
