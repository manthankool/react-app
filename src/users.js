import React from 'react';
import { List, Datagrid, TextField,EditButton} from 'react-admin';

export const UserList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      
      <TextField source='name' label='Name' />
      <EditButton />
    </Datagrid>
  </List>
)
