import {connect} from 'react-redux';
import EChart from '../components/EChart';
import {toggleName} from '../actions/FilterAction';
import {avgPersonPerHouseholdFilter} from '../selectors/AvgPersonPerHouseholdFilter';

const getOption = () =>{
    return {
        title: {
            text: 'Avg Person/Household'
        },
        color: ['#3398DB'],
        tooltip : {
            trigger: 'axis',
            axisPointer : {            
                type : 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                data : ['2', '3', '4', '5', '6'],
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'count',
                type:'bar',
                barWidth: '60%',
                data:[]
            }
        ]
    };
  }

const mapStateToProps = (state) =>{
    let option = getOption();
    option.series[0].data = avgPersonPerHouseholdFilter(state);
    return {option}
}

const mapDispatchToProps = (dispatch)=>{
    return {};
}

const PersonPerHousehold = connect(mapStateToProps,mapDispatchToProps)(EChart);
export default PersonPerHousehold;