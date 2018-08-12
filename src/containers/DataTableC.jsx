import {connect} from 'react-redux';
import DataTable from '../components/DataTable';
import {baseFilter} from '../selectors/BaseFilter';

const mapStateToProps = (state) =>{
    return {
        data : baseFilter(state)
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {};
}

const DataTableC = connect(mapStateToProps,mapDispatchToProps)(DataTable);
export default DataTableC;

