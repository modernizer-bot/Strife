import React from 'react';
import useStyles from '../../styles/chat-styles';
import { motion } from 'framer-motion';
import { Typography } from '@material-ui/core';
import ChatMenu from './ChatMenu/ChatMenu.jsx';
import constants from '../../../constants/strife-constants.js';

export default function Header(props) {
    const classes = useStyles();

    return (
        <>
            <div className={classes.headerContainer}>
                <motion.h1
                    animate={{ fontSize: '50px' }}
                    className={classes.nonSelectable}
                    style={{ paddingTop: '20px', letterSpacing: '1px', fontFamily: "'Syncopate', sans-serif", marginBottom: '0px' }}>
                    strife
                </motion.h1>
                <Typography style={{ fontSize: '0.6rem' }}>{constants.APP_VERSION}</Typography>
                {/* TODO: Add login/logout/control buttons under the header */}
                <ChatMenu requestFriendsList={props.requestFriendsList} manageRooms={props.manageRooms} />
            </div>
        </>
    );
}