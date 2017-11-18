import React from 'react';

export default class SDPData extends React.Component{
    
    
    render(){
        let data;
        
        try{

            data = this.props.data ? JSON.stringify(this.props.data) : "Not yet mate";
            
        }catch(err){
            
            console.log("nope mate", err)
        }
        return (<p>
        
        {data}
        </p>
            );
    }
}