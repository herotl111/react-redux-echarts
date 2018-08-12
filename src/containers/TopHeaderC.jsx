import {connect} from 'react-redux';
import {baseFilter} from '../selectors/BaseFilter';
import TopHeader from '../components/TopHeader';
import {resetAll} from '../actions/FilterAction';

const mapStateToProps = (state) =>{
    let count = baseFilter(state).length;
    return {selectedCount:count}
}

const mapDispatchToProps = (dispatch)=>{
    return {
        onResetAllClicked: function(){
            dispatch(resetAll());
        }
    };
}

const UnemploymentRate = connect(mapStateToProps,mapDispatchToProps)(TopHeader);
export default UnemploymentRate;