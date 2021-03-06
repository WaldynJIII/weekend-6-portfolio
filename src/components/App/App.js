import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import adminForm from './../admin/adminForm';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Tab from '@material-ui/core/Tab';
import axios from 'axios'
import { connect } from 'react-redux';
import { publicDecrypt } from 'crypto';
import Button from '@material-ui/core/Button';
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      portfolioArray: [],
    }
  }
  componentDidMount = () => {
    this.getProject();
   
  }
   
  getProject = () => {
    this.props.dispatch({ type: 'GET_PROJECT' });
  }
  


  render() {
  
    return (
     
      <div className="App">
      <Router>
        <Route path="/admin" component={adminForm} />
        </Router>
        
       
        {this.props.reduxStore.projects.map((project, i) => {
         return(
         <Grid item md={3}> 
            <Card className="item-card">
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt={project.description}
                  className="item-img"
                  height="240"
                image={project.thumbnail}
                title={project.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                  {project.name}
                  </Typography>
                  <Typography component="p">
                  {project.description}
                  </Typography>
                  <Router>
                    <Button>
                   <Link to="route" target="_blank" onClick={(event) => { event.preventDefault(); window.open(this.makeHref(project.website)); }} />
                </Button>
                </Router>
                   <Typography component="p">
                   <Router>
                     <Button>
                     Github<Link to={project.github} target="_blank" onClick={(event) => { event.preventDefault(); window.open(this.makeHref(project.github)); }} />
                   </Button>
                   </Router>
                   </Typography>
                   <Typography component="p">
                     {project.date_github}
                   </Typography>



                   
                </CardContent>
              </CardActionArea>
            
            </Card>
          </Grid> 
        )})}
      </div>       
      
  
    )}
}
const mapReduxStoreToProps = (reduxStore) => ({
  reduxStore: reduxStore
})
export default connect(mapReduxStoreToProps)(App);