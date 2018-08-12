import {connect} from 'react-redux';
import rawData from '../data/historicalData'
import Map from '../components/Map';

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

    let markers = [];
    records.forEach(point=>{
        markers.push({ lat: point.lat, lng: point.long });
    })

    let newCenter = { lat: records[0].lat, lng: records[0].long };
    
    return {
        center:newCenter,
        markers:markers
    };
}

const mapDispatchToProps = (dispatch)=>{
    return {};
}

const PersonPerHousehold = connect(mapStateToProps,mapDispatchToProps)(Map);
export default PersonPerHousehold;