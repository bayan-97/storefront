import { connect } from 'react-redux';
import { changeActive } from './store/categories';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
;


const SpecifCatogry = (props) => {

	return (
        <>
		<section>
			<ul>
				<h1>Brows Our Categories</h1>
						<Breadcrumbs aria-label="breadcrumb">
				{props.categories.categories.map((catogry) => {
					return (
							<Link color="inherit" onClick={() => props.changeActive(catogry.name)} key={catogry.name}>
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
	return { categories: state.categories };
};
const mapDispatchToProps = { changeActive };


export default connect(mapStateToProps, mapDispatchToProps)(SpecifCatogry);
