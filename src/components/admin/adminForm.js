import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
const options = [{ tag: 'react', tag_id: 1 }, { tag: 'jQuery', tag_id: 2 }, { tag: 'Node', tag_id: 3 }, { tag: 'sql', tag_id: 4 }, { tag: 'Redux', tag_id: 5 }, { tag: 'HTML', tag_id: 6 },]
const defaultOption = options[0]
    
class AdminForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projectToAdd: {
                name: '',
                description: '',
                thumbnail: '',
                website: '',
                github: '',
                date_completed: '',
                tag_id: '',

            }
        }
    }
render(){
    return (
       
<form onSubmit={this.addCustomer}>
    <input onChange={this.changeThumbnail} type="image" placeholder="thumbnail" />
    <input onChange={this.changeName} type="text" placeholder="thumbnail" />
    <input onChange={this.changeWebsite} type="text" placeholder="website" />
    <input onChange={this.changeGithub} type="text" placeholder="github" />
    <input onChange={this.changeDate_completed} type="number" placeholder="date" /> <br />
    <input onChange={this.changeDescription} type="text" placeholder="Description"/> <br></br>
            < Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />
   
    <input type="submit" value="Next" />

</form>
    )}}
const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
})
export default connect(mapReduxStoreToProps)(AdminForm);