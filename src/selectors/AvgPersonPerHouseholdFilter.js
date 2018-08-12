import {createSelector} from 'reselect';
import {baseFilter} from './BaseFilter';

export const avgPersonPerHouseholdFilter = createSelector(
    [baseFilter],
    (records)=>{
        let data = [0,0,0,0,0]
        records.forEach(e=>{
            let roundedValue = Math.round(e['Average Persons per Household']);
            data[roundedValue-2]++;
        });

        return data;
    }
);