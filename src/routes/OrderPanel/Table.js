/* eslint-disable no-unused-vars */
import React from 'react';
import { useTable } from 'react-table';
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
  CssBaseline,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from '@material-ui/core';
import MaUTable from '@material-ui/core/Table';
import makeData from './makeData';

const theme = createMuiTheme({
  overrides: {
    MuiTableCell: {
      root: {
        padding: '8px',
        '@media (min-width: 321px)': {
          padding: '16px'
        }
      }
    }
  }
});

const useStyles = makeStyles(() => ({
  style: {
    fontWeight: 'bold',
    borderBottom: '1px solid rgb(129 127 127)'
  }
}));

function Table({ columns, data }) {
  const classes = useStyles();
  // Use the state and functions returned from useTable to build your UI
  const { getTableProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data
  });

  // Render the UI for your table
  return (
    <ThemeProvider theme={theme}>
      <MaUTable {...getTableProps()}>
        <TableHead>
          {headerGroups.map((headerGroup) => (
            <TableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <TableCell
                  className={classes.style}
                  {...column.getHeaderProps()}
                >
                  {column.render('Header')}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <TableRow {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <TableCell {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </TableCell>
                ))}
              </TableRow>
            );
          })}
        </TableBody>
      </MaUTable>
    </ThemeProvider>
  );
}

function OrdersTable() {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Numer zamówienia',
        accessor: 'orderNumber'
      },
      {
        Header: 'Szczegóły zamówienia',
        accessor: 'orderDetails'
      },
      {
        Header: 'Status zamówienia',
        accessor: 'status'
      }
      // {
      //   Header: 'Example',
      //   columns: [
      //     {
      //       Header: '----',
      //       accessor: 'example'
      //     }
      //   ]
      // }
    ],
    []
  );

  const data = React.useMemo(() => makeData(3), []);

  return (
    <div>
      <CssBaseline />
      <Table columns={columns} data={data} />
    </div>
  );
}

export default OrdersTable;
