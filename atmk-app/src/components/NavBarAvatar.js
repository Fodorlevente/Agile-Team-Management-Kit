import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';


export default class ImageAvatars extends Component {

   constructor(props){
	   super(props);
   }
  
  render(){
	return (
		<Grid container justify="center" alignItems="center">
		  <Avatar alt={this.props.name} src={this.props.img} />
		</Grid>
	  );
  };
  
}