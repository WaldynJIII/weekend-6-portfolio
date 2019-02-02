import Dropdown from 'react-dropdown'

class OrderForm extends Component {
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
    <input onChange={this.changeDescription} type="text" placeholder="Description"/>

   
    <input type="submit" value="Next" />

</form>
    )}}