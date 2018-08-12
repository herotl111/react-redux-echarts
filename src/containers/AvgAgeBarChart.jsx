import {connect} from 'react-redux';
import EChart from '../components/EChart';
import {toggleName} from '../actions/FilterAction';
// import rawData from '../data/historicalData'
import {avgAgeFilter} from '../selectors/AvgAgeFilter';

const getOption = () =>{
    return {
        title: {
            text: 'Avg Age (years)'
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
                data : ['20s', '30s', '40s', '50s', '60s'],
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
    option.series[0].data = avgAgeFilter(state);
    return {option}
}

const mapDispatchToProps = (dispatch)=>{
    return {};
}

const AvgAge = connect(mapStateToProps,mapDispatchToProps)(EChart);
export default AvgAge;