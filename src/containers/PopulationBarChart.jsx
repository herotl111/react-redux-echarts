import {connect} from 'react-redux';
import EChart from '../components/EChart';
import {toggleName} from '../actions/FilterAction';
import {populationFilter} from '../selectors/PopulationFilter';

const getOption = () =>{
    return {
        title: {
            text: 'Resident Population'
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
                data : ['0~1K', '1K~10K', '10K~100K', '100K~1M', '>1M'],
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
    option.series[0].data = populationFilter(state);
    return {option}
}

const mapDispatchToProps = (dispatch)=>{
    return {};
}

const AvgAge = connect(mapStateToProps,mapDispatchToProps)(EChart);
export default AvgAge;