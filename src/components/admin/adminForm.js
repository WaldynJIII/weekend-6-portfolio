import React, { Component } from 'react';
import { connect } from 'react-redux';


import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

    
class AdminForm extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
                dropdownOpen: false,
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
    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }
render(){
    return (
       
<form onSubmit={this.addCustomer}>
    <input onChange={this.changeThumbnail} type="text" placeholder="thumbnail" />
    <input onChange={this.changeName} type="text" placeholder="thumbnail" />
    <input onChange={this.changeWebsite} type="text" placeholder="website" />
    <input onChange={this.changeGithub} type="text" placeholder="github" />
    <input onChange={this.changeDate_completed} type="number" placeholder="date" /> <br />
    <input onChange={this.changeDescription} type="text" placeholder="Description"/> <br></br>
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle caret>
                    Dropdown
        </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem header>Tag</DropdownItem>
                    <DropdownItem onClick={this.setReact}>React</DropdownItem>
                    <DropdownItem onClick={this.setjQuery}>jQuery</DropdownItem>
                    <DropdownItem onClick={this.setNode}>Node</DropdownItem> 
                    <DropdownItem onClick={this.setSQL}>SQL</DropdownItem>
                    <DropdownItem onClick={this.setRedux}>Redux</DropdownItem>
                    <DropdownItem onClick={this.setHTML}>HTML</DropdownItem>
                </DropdownMenu>
            </Dropdown>
   
    <input type="submit" value="Next" />

</form>
    )}}
const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
})
export default connect(mapReduxStoreToProps)(AdminForm);