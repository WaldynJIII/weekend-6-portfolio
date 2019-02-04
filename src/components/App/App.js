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
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      portfolioArray: [],
    }
  }
   LinkTab=(props)=> {
  return <Tab component="a" onClick={event => event.preventDefault()} {...props} />;
}

  // Renders the entire app on the DOM
  render() {
  
    return (
      <div className="App">
      <Router>
        <Route exact path="/admin" component={adminForm} />
        </Router>
        
                <Grid item md={3}>
            <Card className="item-card">
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt={this.props.reduxStore.projects.description}
                  className="item-img"
                  height="340"
                image={this.props.reduxStore.projects.thumbnail}
                title={this.props.reduxStore.projects.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                  {this.props.reduxStore.projects.name}
                  </Typography>
                  <Typography component="p">
                  {this.props.reduxStore.projects.description}
                  </Typography>
                  <Typography component="p">
                  {this.props.reduxStore.projects.date_completed}
                  </Typography>
                </CardContent>
              </CardActionArea>
            
            </Card>
          </Grid>
          )}
      </div>
    );
  }
}

export default App;
