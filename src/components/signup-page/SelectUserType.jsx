import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import React from 'react';
export default function     SelectUserType() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small" className='!w-full'>
      <InputLabel id="demo-select-small-label">Type:</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={age}
        label="Age"
        onChange={handleChange}
      >

        <MenuItem value={10}>Disabled</MenuItem>
        <MenuItem value={20}>Assistant</MenuItem>
        <MenuItem value={30}>Donor</MenuItem>
      </Select>
    </FormControl>
  );
}