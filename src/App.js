import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TreeNode from './components/TreeNode';
import mockData from './mockData';
import './components/tree-view.css';
import {Grid, Row, Col} from 'react-bootstrap';

class App extends Component {
  render() {

    let tree1 = mockData.games.map(function(child) {
                        return <TreeNode key={child.type} data={child}/>;
                    }.bind(this));
    // let tree2 = mockData.adImages.map(function(child) {
    //                   return <TreeNode key={child.type} data={child}/>;
    //               }.bind(this));
    



    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">TreeView</h1>
        </header>
        <Grid>
        
          <Row className="show-grid">
            <Col xs={12} md={6}>
              <h3>Form</h3> 
              
            </Col>
            {/* <Col xs={6} md={2}>
              <h3>Ad Images</h3>  
              <div className='tree-view'>
                  {tree2}
              </div>
            </Col> */}
            <Col xs={12} md={4}>
              <h3>Game Images</h3> 
              <div className='tree-view'>
                  {tree1}
              </div>
            </Col>
          </Row> 
         
        </Grid>
           
          
      </div>
    );
  }
}

export default App;
