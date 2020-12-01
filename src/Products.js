import { connect } from 'react-redux';
import { getRemoteData3} from './store/simplecart';
import { decremenr,updateproducteData } from './store/Products';

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
	root: {
		display: 'flex'
	},
	Card: {
		maxWidth: 345
	},
	title: {
		maxWidth: 345
	}
});

const SpecifCatogry = (props) => {
	const classes = useStyles();

	return (
		<section className={classes.root}>
			{console.log('propsssddgg',props)}
			
			{props.prodectsDepCatogry.prodectsDepCatogry.map((prodect) => {
				return (
                <>
               
					<Card key={prodect._id} className={classes.Card}>
						<CardActionArea>
							<CardMedia
								component="img"
								alt="Contemplative Reptile"
								height="220"
								image={prodect.image}
								title="Contemplative Reptile"
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="h2">
									{prodect.inStock}
								</Typography>
                                <Typography gutterBottom variant="h5" component="h2">
									{prodect.price + "JD"}
								</Typography>

								<Typography gutterBottom variant="h5" component="h2">
									{prodect.name}
								</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions>
							<Button
								size="small"
								color="primary"
								onClick={() => {
									props.getRemoteData3(prodect._id);
									props.updateproducteData(prodect._id);
								}}
							>
								add
							</Button>
							<Button size="small" color="primary">
								Learn More
							</Button>
						</CardActions>
					</Card>
                    </>
				);
			})}
		</section>
	);
};

const mapStateToProps = (state) => {
	console.log(`prodcartee88`, state);
	return {
		prodectsDepCatogry: state.products,
		active: state.categories.activecat
	};
};
const mapDispatchToProps = { getRemoteData3, decremenr ,updateproducteData};
export default connect(mapStateToProps, mapDispatchToProps)(SpecifCatogry);
