import React from 'react';
import ReactDOM from 'react-dom';
import Card from './components/Card';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import { robots } from './components/robots';

ReactDOM.render(
  <React.StrictMode>
    <div>
      {/* <Card name='ahmad' id='29' username='Akilani' email='amarwan@gmail.com'/> */}
      <Card id={robots[0].id} name={robots[0].name} username={robots[0].username} email={robots[0].email}/>
      <Card id={robots[1].id} name={robots[1].name} username={robots[1].username} email={robots[1].email}/>
      <Card id={robots[2].id} name={robots[2].name} username={robots[2].username} email={robots[2].email}/>
      <Card id={robots[3].id} name={robots[3].name} username={robots[3].username} email={robots[3].email}/>
      <Card id={robots[4].id} name={robots[4].name} username={robots[4].username} email={robots[4].email}/>
      <Card id={robots[5].id} name={robots[5].name} username={robots[5].username} email={robots[5].email}/>
      <Card id={robots[6].id} name={robots[6].name} username={robots[6].username} email={robots[6].email}/>
      <Card id={robots[7].id} name={robots[7].name} username={robots[7].username} email={robots[7].email}/>
      <Card id={robots[8].id} name={robots[8].name} username={robots[8].username} email={robots[8].email}/>
      <Card id={robots[9].id} name={robots[9].name} username={robots[9].username} email={robots[9].email}/>
    </div>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))10
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
