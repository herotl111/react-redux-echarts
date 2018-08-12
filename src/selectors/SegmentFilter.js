import {createSelector} from 'reselect';
import {baseFilter} from './BaseFilter';

const getVisibilityFilter = (state) => state.filters
export const segmentFilter = createSelector(
    [baseFilter,getVisibilityFilter],
    (records,filters)=>{
        let data = [];
        if(filters.segment === 'ALL'){
            records.forEach((e)=>{
                let index = data.findIndex(chartElement=>chartElement.name === e.Segment);
                if(index === -1){
                    data.push({value:1, name: e.Segment});
                }else{
                    data[index].value ++;
                }
            });
        }else{
            let count = records.filter(e => e.Segment===filters.segment).length;
            data.push({value:count, name:filters.segment});
        }

        return data;
    }
);