import { connect } from 'react-redux';
import { changeActive } from './store/categories';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
// import MenuIcon from '@material-ui/icons/Menu';

const SpecifCatogry = (props) => {
	return (
		<section>
			<ul>
				<div>Brows Our Categories</div>
				{props.categories.categories.map((catogry) => {
					return (
						<Typography>
							<Link onClick={() => props.changeActive(catogry.name)} key={catogry.name} color="inherit">
								{catogry.name}
							</Link>
						</Typography>
					);
				})}
			</ul>
		</section>
	);
};

const mapStateToProps = (state) => {
	return { categories: state.categories };
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

export default connect(mapStateToProps, mapDispatchToProps)(SpecifCatogry);
