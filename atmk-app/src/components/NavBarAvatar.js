import React, {Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';


export default class ImageAvatars extends Component {
  
  render(){
	return (
		<div style={{ padding: 20 }}>
			<Grid container justify="center" alignItems="center">
				<Avatar alt={this.props.name} src={this.props.img} />
			</Grid>
		</div>
	  );
  };
  
}