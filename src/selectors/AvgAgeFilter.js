import {createSelector} from 'reselect';
import {baseFilter} from './BaseFilter';

export const avgAgeFilter = createSelector(
    [baseFilter],
    (records)=>{
        let data = [0,0,0,0,0]
        records.forEach(e=>{
            let roundedValue = Math.floor(e['Average Age in years']/10);
            data[roundedValue-2]++;
        });

        return data;
    }
);