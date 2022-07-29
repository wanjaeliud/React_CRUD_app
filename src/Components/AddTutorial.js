import React, {useState} from 'react';
import {
  Box, Button,
  Container,
  FormControl,
  FormGroup, Input,
  InputLabel, TextareaAutosize,
  Typography,
} from '@material-ui/core';

const initialValue = {
  title: '',
  author: '',
  description: '',
  link: '',
}

const AddTutorial = () => {

  const [tutorial, setTutorial] = useState(initialValue)
  const {title, author, description, link} = tutorial

  return (
      <Container maxWidth="sm">
        <Typography variant="h5" align="center">Add Tutorial</Typography>
        <FormGroup>
          <FormControl>
            <InputLabel>Title</InputLabel>
            <Input/>
          </FormControl>
          <FormControl>
            <InputLabel>Author</InputLabel>
            <Input/>
          </FormControl>
          <FormControl>
            <label>Title</label>
            <TextareaAutosize rows={20} cols={50}/>
          </FormControl>
          <FormControl>
            <InputLabel>Link</InputLabel>
            <Input/>
          </FormControl>
        </FormGroup>
        <Box my={3}>
          <Button variant="contained" color="primary" align="center">Add
            Tutorial</Button>
          <Button variant="contained" color="secondary"
                  align="center">Cancel</Button>
        </Box>
      </Container>
  );
};

export default AddTutorial;