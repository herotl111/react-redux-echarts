import {createSelector} from 'reselect';
import {baseFilter} from './BaseFilter';

export const mapFilter = createSelector(
    [baseFilter],
    (records)=>{
        let markers = [];
        records.forEach(point=>{
            markers.push({ lat: point.lat, lng: point.long });
        })
    
        let newCenter = { lat: records[0].lat, lng: records[0].long };

        return {markers:markers,center:newCenter};
    }
);