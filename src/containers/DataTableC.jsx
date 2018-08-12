import {connect} from 'react-redux';
import DataTable from '../components/DataTable';
import rawData from '../data/historicalData';

const mapStateToProps = (state) =>{
    let records = rawData;

    if(state.filters.segment !== 'ALL'){
        records = records.filter(e=>e.Segment === state.filters.segment);
    }

    if(state.filters.name !== 'ALL'){
        records = records.filter(e=>e.Name === state.filters.name);
    }

    if(state.filters.year !== 'ALL'){
        records = records.filter(e=>e.Year === state.filters.year);
    }

    return {
        data : records
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {};
}

const DataTableC = connect(mapStateToProps,mapDispatchToProps)(DataTable);
export default DataTableC;

