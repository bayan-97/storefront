import { connect } from 'react-redux';
import { changeActive } from './store/categories';
// import ListItemLink from '@material-ui/core/ListItemLink';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import { brown } from '@material-ui/core/colors';
const useStyles = makeStyles((theme) => ({
	root: {
		float: 'right'
	},
	Card: {
		maxWidth: 345
    },
    root2: {
        width: '100%',
        maxWidth: 360,
        // backgroundColor:theme.palette.background.paper,
          primary: {
            main: '#bbdefb',
          },
          secondary: {
            main: '#ff9800',
          },
        
      },
      inline: {
        display: 'inline',
      },
      

      
    }));


const SpecifCatogry2 = (props) => {
	let classes = useStyles();
	return (
        <>
        
		<section className={classes.root}>
                     
			
            <List className={classes.root2}  color="primary"  component="nav"    >
				{props.cartLists.map((catogry) => {
                    return (
            <ListItem >
             <ListItemText  className={classes.inline} primary={catogry.name}/>
           </ListItem>
					);
				})}
                </List>
			
		</section>
        
        </>
	);
};

const mapStateToProps = (state) => {
	console.log('cart', state.cartlists.cartLists.length);
	return { cartLists: state.cartlists.cartLists };
};
const mapDispatchToProps = { changeActive };

/*
you might also see it in this format 
const mapDispatchToProps = (dispatch)=>{
  return(
    {
      increment:()=> {dispatch(increment())},
      reset:()=> dispatch(reset())
    }
  )
}
*/

export default connect(mapStateToProps, mapDispatchToProps)(SpecifCatogry2);
