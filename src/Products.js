import { connect } from 'react-redux';
import { addtocart } from './store/simplecart';
import { decremenr } from './store/Products';

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
			{props.prodectsDepCatogry.map((prodect) => {
				return (
                <>
               
					<Card className={classes.Card}>
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
									props.addtocart(prodect.name);
									props.decremenr(prodect.name);
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
		prodectsDepCatogry: state.products.prodectsDepCatogry,
		active: state.categories.activecat
	};
};
const mapDispatchToProps = { addtocart, decremenr };
export default connect(mapStateToProps, mapDispatchToProps)(SpecifCatogry);
