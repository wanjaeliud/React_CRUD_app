import React from 'react';
import {
  makeStyles,
  Table, TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';

const useStyle = makeStyles({
  table: {
    width: '80%',
    margin: '50px 100px 100px 140px',
  },
  thead: {
    '& > *': {
      background: '#000000',
      color: '#FFFFFF',
      fontSize: '16px',
    },
  },
  trow: {
    '& > *': {
      fontSize: '16px',
    },
  },
});

const AllTutorials = () => {
  const classes =useStyle()
  return (
      <Table className={classes.table}>
        <TableHead>
          <TableRow className={classes.thead}>
            <TableCell>ID</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Author</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Date</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableBody>
      </Table>
  );
};

export default AllTutorials;