import React, {useEffect, useState} from 'react';
import {
  Button,
  makeStyles,
  Table, TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';
import {deleteTutorial, getAllTutorials} from '../service/api';
import {Link} from 'react-router-dom';

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

  const classes = useStyle();

  const [tutorial, setTutorial] = useState([]);
  useEffect(() => {
    getTutorials();
  }, []);

  const getTutorials = async () => {
    const response = await getAllTutorials();
    console.log(response);
    setTutorial(response.data);
  };

  const deleteData = async (id) => {
    await deleteTutorial(id);
    getTutorials();
  };

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
          {
            tutorial.map((data) => (
                <TableRow className={classes.trow}>
                  <TableCell>{data.id}</TableCell>
                  <TableCell>{data.title}</TableCell>
                  <TableCell>{data.author}</TableCell>
                  <TableCell>{data.description}</TableCell>
                  <TableCell>{data.url}</TableCell>
                  <TableCell>
                    <Button variant="contained" color="primary"
                            style={{margin: '0px 20px'}} component={Link}
                            to={`/edit/${data.id}`}>Edit</Button>
                    <Button variant="contained" color="secondary"
                            style={{margin: '0px 20px'}}
                            onClick={() => deleteData(data.id)}>Cancel</Button>
                  </TableCell>
                </TableRow>
            ))
          }
        </TableBody>
      </Table>
  );
};

export default AllTutorials;