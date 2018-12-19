import React, {Component} from 'react';
import { Admin, Resource } from 'react-admin';
import { simpleRestClient } from 'admin-on-rest';
import { UserList } from './users';
import jsonServerProvider from 'ra-data-json-server';
import simpleRestProvider from 'ra-data-simple-rest';
// import Person from './Person/Person';
// import './Person/Person.css';





class App extends Component {

  render() {
    return(

      <Admin  dataProvider={simpleRestClient('http://localhost:8000')} >
          <Resource name="superadmin" list={UserList} />
      </Admin>
      );
    }
  }

export default App;
