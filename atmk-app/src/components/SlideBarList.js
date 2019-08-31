import React, {Component} from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import {
  BrowserRouter as Router,
  Link,
} from 'react-router-dom';

import Chat from '@material-ui/icons/Chat';
import Settings from '@material-ui/icons/Settings';
import Home from '@material-ui/icons/Home';
import BarChart from '@material-ui/icons/BarChart';
import Work from '@material-ui/icons/Work';
import ViewQuilt from '@material-ui/icons/ViewQuilt';
import Feedback from '@material-ui/icons/Feedback';
import Group from '@material-ui/icons/Group';
import Whatshot from '@material-ui/icons/Whatshot';
import Person from '@material-ui/icons/Person';


const menuIcons = {
    0: <Home/>,
    1: <ViewQuilt/>,
    2: <BarChart/>,
    3: <Work/>,
    4: <Person/>,
    5: <Feedback/>,
    6: <Chat/>,
    7: <Whatshot/>,
    8: <Settings/>,
    9: <Group/>
};

function setListItemIcon(index){
    return menuIcons[index];
}

function addUniqueKey(text, itemName){
    return `${itemName}${text}`;
}

function setLinkPath(linkObj, index){
    return String(linkObj[index].path);
}

export default class SlideBarList extends Component{
     render(){
         return(
            <List> 
            {['Overview', 'Dashboard', 'Metrics', 'Planning', 'Profile' ,'Retrospective', 'Message Board', 'Idea Box', 'Settings', 'Team'].map((text, index) => (
                <Router>
                    <ListItem button key={addUniqueKey(text,'ListItem')} component={Link} to={setLinkPath(this.props.path, index)}>
                        <ListItemIcon key={addUniqueKey(text,'ListItemIcon')}>
                            {setListItemIcon(index)}
                        </ListItemIcon>
                    <ListItemText primary={text} key={addUniqueKey(text,'ListItemText')}/>
                    </ListItem>                   
                </Router>
                ))}
            </List>
         );
     };
}

