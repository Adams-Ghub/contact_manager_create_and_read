import React from 'react';

import './App.css';
import Contact from './components/Contact.jsx';
import AddNewContactComponent from './components/AddNewContactComponent';
import EditContactComponent from './components/EditContactComponent';
import {connect} from "react-redux";
import {addcontact} from "./store/contactActions";




class App extends React.Component{
    constructor(props){
            super(props)
            
            // this.state={
            
            //     contact: []
            // }
            
            this.Database=this.Database.bind(this)
    
    }
 
          Database(data){
            //   this.setState({contact:[...this.state.contact, data]})
            this.props.Addcontact(data)
             
            
        
        }
       
    render(){
        return(
            <div style={{display:"flex",flexDirection:"row"}}>
                <div style={{width:"50vw"}}>
                
                {this.props.contact.map((icontact,index)=>(<Contact name={icontact.name} phone={icontact.phone} category={icontact.category} key={index}/>))}
                </div>
                <div style={{borderLeftStyle:"solid",borderLeftColor:"#eeeeee",paddingLeft:"20px"}}>
                    <br/>
                    <div>
                        
                        <AddNewContactComponent 
                            MyDatabase={this.Database}   />
                    </div>
                    <div style={{marginTop:"30px"}}>
                        <EditContactComponent/>
                    </div>   

                </div>
               
            </div>
            
        )
    }
}

const mapStateToProps=(state)=>({
    contact:state.contact
})

const mapDispatchToProps={
    Addcontact:addcontact
}
export default  connect(mapStateToProps, mapDispatchToProps)(App);
