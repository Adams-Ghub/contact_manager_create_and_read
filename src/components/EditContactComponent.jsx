import React from 'react';
import '../customstyle.css'

class EditContactComponent extends React.Component{

    render(){
        return(
            <div>
                <div className="componentBox">
                    <h2 className="componentTitle">
                        Edit Contact Form
                    </h2>
                    <form >
                        <div><label>Name:</label><input type="text"/></div>
                        <div><label>Phone:</label><input type="text"/></div>
                        <div>
                            <select name="group">
                                <option value="friend">friend</option>
                                <option value="family">family</option>
                                <option value="customer">customer</option>
                            </select>

                            <div><input type="submit" value="Update"/></div>
                        </div>
                    </form>
                </div>
            </div>

        )
    }
} export default EditContactComponent;