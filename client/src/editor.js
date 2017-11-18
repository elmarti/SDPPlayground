import React from 'react';

export default class ContentEditable extends React.Component {
    constructor() {
        super();
        this.state = {
            text: ""
        };
    }
    pasteText(e) {
        const clipboardData = e.clipboardData || window.clipboardData;
        const pastedData = clipboardData.getData('Text');


    }
    changeText() {
        const sdpData = this.refs.sdpData.value
        const lines = sdpData.split(/\n/);
        console.log(lines);
        for(let i = 0, ii = lines.length; i < ii; i++){
            lines[i] = lines[i].trim(); 
        }
        console.log(lines);
        const finalSDP = lines.join("\r");
        this.refs.sdpData.value = finalSDP;
        this.props.runParser(finalSDP);
    }
    render() {
        return (
            <textarea ref="sdpData"  onChange={this.changeText.bind(this)} style={{height:"100%", width:"100%", background:"#111111", color:"#ffffff"}}>
            
            </textarea>
        );
    }
}
