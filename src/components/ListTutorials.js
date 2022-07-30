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
    width: '90%',
    margin: '80px 80px 80px 80px',
  },
  thead: {
    '& > *': {
      background: '#212121',
      color: '#FFFFFF',
      fontSize: '16px',
    },
  },
});

const ListTutorials = () => {

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
            <TableCell>Links</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            tutorial.map((data) => (
                <TableRow className={classes.trow} key={data.id} >
                  <TableCell>{data.id}</TableCell>
                  <TableCell>{data.title}</TableCell>
                  <TableCell>{data.author}</TableCell>
                  <TableCell>{data.description}</TableCell>
                  <TableCell>{data.more}</TableCell>
                  <TableCell>
                    <Button variant="contained" color="Blue"
                             component={Link}
                            to={`/edit/${data.id}`}>Edit</Button>
                    <Button variant="contained" color="secondary"
                            style={{margin: '0px 20px'}}
                            onClick={() => deleteData(data.id)}>Delete</Button>
                  </TableCell>
                </TableRow>
            ))
          }
        </TableBody>
      </Table>
  );
};

export default ListTutorials;