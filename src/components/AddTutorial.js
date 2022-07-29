import React, {useState} from 'react';
import {
  Box, Button,
  Container,
  FormControl,
  FormGroup, Input,
  InputLabel, TextareaAutosize,
  Typography,
} from '@material-ui/core';
import {useHistory} from 'react-router-dom';
import {addTutorial} from '../service/api';

const initialValue = {
  title: "",
  author: "",
  description: "",
  more: "",
};

const AddTutorial = () => {

  const [tutorial, setTutorial] = useState(initialValue);
  const {title, author, description, more} = tutorial;

  const history = useHistory();

  const onValueChange = (e) => {
    setTutorial(values  =>({...tutorial, [e.target.name]: e.target.value}));
    // console.log(e.target.name, e.target.value);
    // console.log(tutorial);
    // debugger
  };

  const addTutorialDetails = async () => {
    await addTutorial(tutorial);
    history.push('/all');
  };

  return (
      <Container maxWidth="sm">
        <Box my={5}>
          <Typography variant="h5" align="center">Add Tutorial</Typography>
          <FormGroup>
            <FormControl>
              <InputLabel>Title</InputLabel>
              <Input onChange={onValueChange}  name="title"
                     value={title} />
            </FormControl>
            <FormControl>
              <InputLabel>Author</InputLabel>
              <Input onChange={onValueChange} name="author"
                     value={author}/>
            </FormControl>
            <FormControl>
              <label>Title</label>
              <TextareaAutosize onChange={onValueChange}
                                name="description"
                                value={description} rows={20} cols={50}/>
            </FormControl>
            <FormControl>
              <InputLabel>Link</InputLabel>
              <Input onChange={onValueChange} name="more" value={more}/>
            </FormControl>

            <Box my={3}>
              <Button variant="contained" onClick={() => addTutorialDetails()}
                      color="primary" align="center">Add
                Tutorial</Button>
              <Button onClick={() => history.push('/all')} variant="contained"
                      color="secondary"
                      style={{margin: '0px 20px'}}
                      align="center">Cancel</Button>
            </Box>
          </FormGroup>
        </Box>
      </Container>
  );
};

export default AddTutorial;