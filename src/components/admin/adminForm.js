import React, { Component } from 'react';
import { connect } from 'react-redux';



import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';

    
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
    componentDidMount = () => {
        this.getProject();
       
    }
    disableBtn = () => {
        if (this.state.category === '') {
            return <Button variant="contained" color="primary" disabled>Tag</Button>
        } else {
            return <Button className="nextBtn"
                onClick={this.tagChange} variant="contained" color="primary">Tag</Button>
        };
    }
    changeThumbnail = (event) => {
        this.setState({
            projectToAdd: {
                ...this.state.projectToAdd,
                thumbnail: event.target.value
            },
        });
    }
    changeName = (event) => {
        this.setState({
            projectToAdd: {
                ...this.state.projectToAdd,
                name: event.target.value
            },
        });
    }
    changeWebsite= (event) => {
        this.setState({
            projectToAdd: {
                ...this.state.projectToAdd,
                website: event.target.value
            },
        });
    }
    changeGithub = (event) => {
        this.setState({
            projectToAdd: {
                ...this.state.projectToAdd,
                github: event.target.value
            },
        });
    }
    changeDate_completed = (event) => {
        this.setState({
            projectToAdd: {
                ...this.state.projectToAdd,
                date_completed: event.target.value
            },
        });
    }
    changeDescription = (event) => {
        this.setState({
            projectToAdd: {
                ...this.state.projectToAdd,
                description: event.target.value
            },
        });
    }
   
    tagChange = (event) => {
      
        this.setState({
            projectToAdd:{
            ...this.state.projectToAdd,
            tag_id: event.target.value,
            } 
        })
    console.log(this.state.projectToAdd.tag_id)}
    yeetProject = () => {
        const action = { type: 'YEET_PROJECT', payload: this.state.projectToAdd }
        this.props.dispatch(action);
    }
    getProject = () => {
        this.props.dispatch({ type: 'GET_PROJECT' });
    }
   
render(){
    return (
       <div>

            <Card>
                
<form onSubmit={this.addCustomer}>
    <input onChange={this.changeThumbnail} type="text" placeholder="thumbnail" />
    <input onChange={this.changeName} type="text" placeholder="name" />
    <input onChange={this.changeWebsite} type="text" placeholder="website" />
    <input onChange={this.changeGithub} type="text" placeholder="github" />
    <input onChange={this.changeDate_completed} type="date" placeholder="date" /> <br />
    <input onChange={this.changeDescription} type="text" placeholder="Description"/> <br></br>
           
          
              
                <CardActions>
                    <select onClick={this.tagChange} className="category">
                        <option />
                            <option onClick={this.tagChange} value="1">React</option>
                        <option value="2">jQuery</option>
                        <option value="3">SQL</option>
                        <option value="4">HTML</option>
                        <option value="5">ReduX</option>
                        <option value="6">Node</option>

                    </select>
                            {this.disableBtn()}
                    
                </CardActions>
           
        
       
    <input onClick={this.yeetProject} type="submit" value="Next" />

</form>

    </Card>
<table className="admin-table">
    
        <tbody>
        {this.props.reduxStore.projects.map((project, i) => {
            return (
                <tr>
                    <td>{project.name}</td><td>{project.date_completed}</td><td>{project.tag_id}</td>
                </tr>
            )
        })}
      </tbody>
            </table>
            </div>
    )}
    }

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
})
export default connect(mapReduxStoreToProps)(AdminForm);