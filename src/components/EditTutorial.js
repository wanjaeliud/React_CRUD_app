import React, {useEffect, useState} from 'react';
import {
  Box, Button, Container,
  FormControl,
  FormGroup, Input,
  InputLabel, TextareaAutosize,
  Typography,
} from '@material-ui/core';
import {useHistory, useParams} from 'react-router-dom';
import {editTutorial, getAllTutorials} from '../service/api';

const initialValue = {
  title: '',
  author: '',
  description: '',
  url: '',
};

const EditTutorial = () => {
  const [tutorial, setTutorial] = useState(initialValue);
  const {title, author, description, url} = tutorial;

  const {id} = useParams();

  useEffect(() => {
    loadTutorialData();
  }) ;

  const loadTutorialData = async () => {
    const response = await getAllTutorials(id);
    setTutorial(response.data);
  };

  const history = useHistory();

  const onValueChange = (e) => {
    //  console.log(e);
    // console.log(e.target.value);
    setTutorial({...tutorial, [e.target.title]: e.target.value});
    console.log(tutorial);
  };

  const editTutorialDetails = async () => {
    await editTutorial(id, tutorial);
    history.push('/all');
  };

  return (
      <Container maxWidth="sm">
        <Box my={5}>
          <Typography variant="h5" align="center">Update Tutorial</Typography>
          <FormGroup>
            <FormControl>
              <InputLabel>Title</InputLabel>
              <Input onChange={(e) => onValueChange(e)} name="title"
                     value={title}/>
            </FormControl>
            <FormControl>
              <InputLabel>Author</InputLabel>
              <Input onChange={(e) => onValueChange(e)} name="author"
                     value={author}/>
            </FormControl>
            <FormControl>
              <label>Description</label>
              <TextareaAutosize onChange={(e) => onValueChange(e)}
                                name="description"
                                value={description} rows="10" cols="100"/>
            </FormControl>
            <FormControl>
              <InputLabel>Link</InputLabel>
              <Input onChange={(e) => onValueChange(e)} name="url"
                     value={url}/>
            </FormControl>
            <Box my={3}>
              <Button variant="contained" onClick={() => editTutorialDetails()}
                      color="primary" align="center">Update User</Button>
              <Button onClick={() => history.push('/all')} variant="contained"
                      color="secondary" align="center"
                      style={{margin: '0px 20px'}}>Cancel</Button>
            </Box>
          </FormGroup>
        </Box>
      </Container>
  );
};

export default EditTutorial;