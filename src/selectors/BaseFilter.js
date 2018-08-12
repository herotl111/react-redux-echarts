import {createSelector} from 'reselect';
import rawData from '../data/historicalData';

const getVisibilityFilter = (state) => state.filters

export const baseFilter = createSelector(
    [getVisibilityFilter],
    (filters)=>{
        let records = rawData;
        if(filters.segment !== 'ALL'){
            records = records.filter(e=>e.Segment === filters.segment);
        }
    
        if(filters.name !== 'ALL'){
            records = records.filter(e=>e.Name === filters.name);
        }
    
        if(filters.year !== 'ALL'){
            records = records.filter(e=>e.Year === filters.year);
        }

        return records;
    }
);