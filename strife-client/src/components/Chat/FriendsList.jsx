import React from 'react';
import { List, ListItem, ListItemText, ListItemIcon, ListItemAvatar, Paper } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import useStyles from '../styles/chat-styles.js';

function FriendsList(props) {
    const classes = useStyles();
    console.log("Friends list: ", props.friendsList);
    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }

    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),

    ];

    function returnAvatar(status) {
        if (status == "offline") return (<AccountCircleIcon />);
        else return (<AccountCircleIcon style={{ color: 'green' }} />);
    }

    return (
        <>
            <Paper elevation={2}>
                <div className={classes.onlineUsersContainer} style={{ overflow: 'auto' }}>
                    <List>
                        <ListItem>
                            <ListItemText primary="Friends" />
                        </ListItem>
                        {
                            props.friendsList.map(friend => (
                                <ListItem>
                                    <ListItemAvatar>{returnAvatar(friend.status)}</ListItemAvatar>
                                    <ListItemText primary={friend.username} style={{ fontFamily: "'Rubik', sans-serif" }} />
                                    <ListItemIcon><ChatBubbleIcon /></ListItemIcon>
                                </ListItem>
                            ))
                        }

                    </List>
                </div>
            </Paper>

        </>
    )
}

export default FriendsList;