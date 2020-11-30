import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	title: {
		flexGrow: 1
	}
}));

function Header(props) {
	console.log('cartee', props);
	// {props.cartLists.length}
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<AppBar color="transparent" position="static">
				<Toolbar>
					<Typography variant="h6" className={classes.title}>
						OUR STORE
					</Typography>
					<IconButton edge="start" className={classes.menuButton} color="transparent" aria-label="menu">
						cart ({props.count})
					</IconButton>
				</Toolbar>
			</AppBar>
		</div>
	);
}
const mapStateToProps = (state) => {
	console.log('cart', state.cartlists.cartLists.length);
	return { count: state.cartlists.count };
};
export default connect(mapStateToProps)(Header);
