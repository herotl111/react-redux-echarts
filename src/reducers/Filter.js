import {TOGGLE_FILTER_YEAR,TOGGLE_FILTER_SEGMENT,TOGGLE_FILTER_NAME,RESETALL} from '../actions/FilterAction';

const filters = (state={},action)=> {
    if(action.type === TOGGLE_FILTER_YEAR){
        if(state.year === 'ALL'){
            return Object.assign({},state,{
                year : action.payload.option
            });
        }else{
            return Object.assign({},state,{year:'ALL'});
        }
    }else if(action.type === TOGGLE_FILTER_SEGMENT){
        if(state.segment === 'ALL'){
            return Object.assign({},state,{
                segment : action.payload.option
            });
        }else{
            return Object.assign({},state,{segment:'ALL'});
        }
    }else if(action.type ===TOGGLE_FILTER_NAME){
        if(state.name === 'ALL'){
            return Object.assign({},state,{
                name : action.payload.option
            });
        }else{
            return Object.assign({},state,{name:'ALL'});
        }
    }else if(action.type === RESETALL){
        return {
            year:'ALL',
            segment:'ALL',
            name:'ALL'
        };
    }
    return state;
}

export default filters;