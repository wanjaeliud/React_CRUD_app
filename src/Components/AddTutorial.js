import React from 'react';
import {
  Container,
  FormControl,
  FormGroup, Input,
  InputLabel, TextareaAutosize,
  Typography,
} from '@material-ui/core';

const AddTutorial = () => {
  return (
      <Container maxWidth="sm">
        <Typography variant="h5" align="center">Add Tutorial</Typography>
        <FormGroup>
          <FormControl>
            <InputLabel>Title</InputLabel>
            <Input />
          </FormControl>
          <FormControl>
            <InputLabel>Author</InputLabel>
            <Input />
          </FormControl>
          <FormControl>
            <label>Title</label>
            <TextareaAutosize/>
          </FormControl>
          <FormControl>
            <InputLabel>Link</InputLabel>
            <Input />
          </FormControl>
        </FormGroup>
      </Container>
  );
};

export default AddTutorial;