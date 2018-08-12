import {createSelector} from 'reselect';
import {baseFilter} from './BaseFilter';

export const populationFilter = createSelector(
    [baseFilter],
    (records)=>{
        let data = [0,0,0,0,0]
        records.forEach(e=>{
            let roundedValue = Math.floor(e['Resident Population']/1000);
            if(roundedValue === 0){
                data[0]++;
            }else if(roundedValue>0 && roundedValue <10){
                data[1]++;
            }else if(roundedValue>=10 && roundedValue <100){
                data[2]++;
            }else if(roundedValue>=100 && roundedValue < 1000){
                data[3]++;
            }else{
                data[4]++;
            }
        });

        return data;
    }
);