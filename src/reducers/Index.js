import {combineReducers} from 'redux';
import Filters from './Filter';

const index = combineReducers({
    filters:Filters
});

export default index;