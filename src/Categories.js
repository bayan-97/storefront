import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getRemoteData } from './store/categories';
import { getproducteData ,changeActive} from './store/Products';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

let results;

const SpecifCatogry = (props) => 
{
	useEffect(() => {
  
	props.getRemoteData()
	props.getproducteData()

},[] );


console.log('propsss',props)
	return (
        <>
		<section>
			<ul>
				<h1>Brows Our Categories</h1>
						<Breadcrumbs aria-label="breadcrumb">
						
				
{console.log('propsssgg',props.categories)}
			
				{props.categories.catogery.map((catogry) => {
					return (
							<Link color="inherit" onClick={() =>{ 

								props.changeActive(catogry.name)
								}}  key={catogry.name}>
								{catogry.name}
							</Link>
						
					
                        );
                    })}
			
                        </Breadcrumbs>
                  
			</ul>
		</section>
     </>
	);
};


const mapStateToProps = (state) => {
	console.log('catogaccpi',state)

	return { categories: state.categories };
};
const mapDispatchToProps = { getRemoteData,getproducteData,changeActive};


export default connect(mapStateToProps, mapDispatchToProps)(SpecifCatogry);
