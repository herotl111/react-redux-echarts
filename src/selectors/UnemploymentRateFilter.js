import {createSelector} from 'reselect';
import {baseFilter} from './BaseFilter';

export const unemploymentRateFilter = createSelector(
    [baseFilter],
    (records)=>{
        let data = [0,0,0,0,0]
        records.forEach(e=>{
            let roundedValue = Math.floor(e['Unemployment Rate (%)']/20);
            data[roundedValue]++;
        });

        return data;
    }
);