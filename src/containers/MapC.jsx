import {connect} from 'react-redux';
import Map from '../components/Map';
import {mapFilter} from '../selectors/MapFilter';

const mapStateToProps = (state) =>{
    return mapFilter(state);
}

const mapDispatchToProps = (dispatch)=>{
    return {};
}

const PersonPerHousehold = connect(mapStateToProps,mapDispatchToProps)(Map);
export default PersonPerHousehold;