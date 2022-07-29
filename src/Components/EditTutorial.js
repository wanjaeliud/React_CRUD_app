import React from 'react';
import {
  Box, Button, Container,
  FormControl,
  FormGroup, Input,
  InputLabel, TextareaAutosize,
  Typography,
} from '@material-ui/core';

const EditTutorial = () => {
  return (
      <Container maxWidth="sm">
        <Typography variant="h5" align="center">Update Tutorial</Typography>
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
            <TextareaAutosize rows={20} cols={100}/>
          </FormControl>
          <FormControl>
            <InputLabel>Link</InputLabel>
            <Input/>
          </FormControl>
        </FormGroup>
        <Box my={3}>
          <Button variant="contained" color="primary" align="center">Update
            Tutorial</Button>
          <Button variant="contained" color="secondary"
                  align="center">Cancel</Button>
        </Box>
      </Container>
  );
};

export default EditTutorial;