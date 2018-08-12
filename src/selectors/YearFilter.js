import {createSelector} from 'reselect';
import {baseFilter} from './BaseFilter';

const getVisibilityFilter = (state) => state.filters
export const yearFilter = createSelector(
    [baseFilter,getVisibilityFilter],
    (records,filters)=>{
        let data = [];
        if(filters.year === 'ALL'){
            records.forEach((e)=>{
                let index = data.findIndex(chartElement=>chartElement.name === e.Year);
                if(index === -1){
                    data.push({value:1, name: e.Year});
                }else{
                    data[index].value ++;
                }
            });
        }else{
            let count = records.filter(e => e.Year===filters.year).length;
            data.push({value:count, name:filters.year});
        }

        return data;
    }
);