import React, { Component, Fragment, useState } from 'react'
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Drawer,
    Grid,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import Brightness4Icon from '@material-ui/icons/Brightness4'
import { Link } from 'react-router-dom'
import useStyles from '../style/style'

function Navigation(props) {
    const classes = useStyles()
    let [navValue, setValue] = useState(false)

    const toggleDisplay = (bool) => (event) => {
        if (
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return
        }
        setValue((navValue = bool))
    }

    return (
        <AppBar color="primary" position="relative">
            <Toolbar>
                <IconButton onClick={toggleDisplay(true)} color="inherit">
                    <MenuIcon />
                </IconButton>
                <Drawer open={navValue} onClose={toggleDisplay(false)}>
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="baseline"
                        className={classes.gridContainer}
                    >
                        <Grid item className={classes.gridItem}>
                            <Link to={`/`} className={classes.navText}>
                                Home
                            </Link>
                        </Grid>
                        <Grid item className={classes.gridItem}>
                            <Link to={`/about`} className={classes.navText}>
                                About
                            </Link>
                        </Grid>
                    </Grid>
                </Drawer>
                <Typography variant="h6" style={{ flexGrow: '1' }}>
                    FakeCars.com
                </Typography>
                <ul className="nav-list">
                    <li className="nav-list-item">
                        <Link to={`/`}>Home</Link>
                    </li>
                    <li className="nav-list-item">
                        <Link to={`/about`}>About</Link>
                    </li>
                    <li>
                        <IconButton onClick={props.darkMode} color="inherit">
                            <Brightness4Icon color="inherit" />
                        </IconButton>
                    </li>
                </ul>
            </Toolbar>
        </AppBar>
    )
}

export default Navigation
