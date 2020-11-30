import React from 'react';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	title: {
		flexGrow: 1
	},
	color: {
		color: withTheme
	}
}));

function Footer() {
	const classes = useStyles();
	return (
		<div color="transparent" className={classes.root}>
			<AppBar color="primary" position="static">
				<Toolbar>
					<Typography variant="h6" className={classes.color}>
						copyright 2020
					</Typography>
				</Toolbar>
			</AppBar>
		</div>
	);
}

export default Footer;
