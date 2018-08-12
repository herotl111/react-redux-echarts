import {createSelector} from 'reselect';
import {baseFilter} from './BaseFilter';

const getVisibilityFilter = (state) => state.filters
export const nameFilter = createSelector(
    [baseFilter,getVisibilityFilter],
    (records,filters)=>{
        let data = [];
        if(filters.name === 'ALL'){
            records.forEach((e)=>{
                let index = data.findIndex(chartElement=>chartElement.name === e.Name);
                if(index === -1){
                    data.push({value:1, name: e.Name});
                }else{
                    data[index].value ++;
                }
            });
        }else{
            let count = records.length;
            data.push({value:count, name:filters.name});
        }

        return data;
    }
);