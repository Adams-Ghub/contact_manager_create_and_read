import React from 'react';
// import bootstrap from 'bootstrap';
import edit from '../images/pencil.png';
import del from '../images/delete.png';

import contactImage from '../images/contactImage.jpg';

class Contact extends React.Component{
   
    render(){
    return(
        <div style={{display:'flex', flexDirection:'row',margin:'10px',borderRadius:"5px",borderStyle:'solid',borderColor:'red', width:'fit-content',padding:'4px' }} className="row">
            <div >
            <img style={{width:'70px', height:'70px'}}src={contactImage} alt="contactImage"/>
            </div>
            <div style={{marginLeft:'10px'}}>
                <div>{this.props.name}</div>
                <div>{this.props.phone}</div> 
                <div>{this.props.category}
                <div style={{display:'flex', flexDirection:'row'}}>
                <div>
                    <img style={{width:'15px', height:'15px'}}src={edit} alt=""/>
                </div>
                <div>
                    <img style={{width:'20px', height:'20px'}} src={del} alt=""/>
                </div>
            </div>
                </div> 

            </div>
           
        </div>
    )
    } 
} export default Contact;