import React, { Component } from 'react';
import { connect } from 'react-redux';


i

    
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
                tag_id: 0,

            }
        }
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
   
    categoryChange = (event) => {
        this.setState({
            tag_id: event.target.value,
        })}
    getProject = () => {
        this.props.dispatch({ type: 'YEET_PROJECT', payload: this.state.projectToAdd });
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
    <input onChange={this.changeName} type="text" placeholder="name" />
    <input onChange={this.changeWebsite} type="text" placeholder="website" />
    <input onChange={this.changeGithub} type="text" placeholder="github" />
    <input onChange={this.changeDate_completed} type="date" placeholder="date" /> <br />
    <input onChange={this.changeDescription} type="text" placeholder="Description"/> <br></br>
           
            <Card>
                <CardContent>
                    <img src={this.props.gif.images.downsized.url} />
                </CardContent>
                <CardActions>
                    <select onChange={this.categoryChange} className="category">
                        <option />
                        <option value="1">Funny</option>
                        <option value="2">Vega</option>
                        <option value="3">Cartoon</option>
                        <option value="4">NSFW</option>
                        <option value="5">Meme</option>
                    </select>
                    {this.disableBtn()}
                    {/* <Button onClick={this.favoriteBtn} variant="contained" color="primary">Favorite</Button> */}
                </CardActions>
            </Card>
        );
       
    <input onClick={this.getGiphy} type="submit" value="Next" />

</form>
    )}}
const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
})
export default connect(mapReduxStoreToProps)(AdminForm);