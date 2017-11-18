import React, { Component } from 'react';
import SDPTransform from 'sdp-transform';
import './app.css';

import ContentEditable from './editor';
import SDPData from './SDPData'

class app extends Component {
  constructor(){
    super(); 
    this.state = {
      content:""
    };
  }
  runParser(content){
    this.setState({
      data: SDPTransform.parse(content)
    });
  }
  render() {
    return (
      <div className="App">

        <div class="row" style={{display:"flex"}}>
        <div style={{height:"300px", width:"50vw"}}>
          <ContentEditable runParser={this.runParser.bind(this)}/>
        </div>
        
        <div style={{height:"300px", width:"50vw"}}>
        <SDPData data={this.state.data}/>
        
        </div>
        
        </div>
      </div>
    );
  }
}

export default app;
