import {connect} from 'react-redux';
import EChart from '../components/EChart';
import {toggleName} from '../actions/FilterAction';
import {unemploymentRateFilter} from '../selectors/UnemploymentRateFilter';

const getOption = () =>{
    return {
        title: {
            text: 'Unemployment Rate(%)'
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
                data : ['0~20%', '20%~40%', '40%~60%', '60%~80%', '>80%'],
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
    option.series[0].data = unemploymentRateFilter(state);
    return {option}
}

const mapDispatchToProps = (dispatch)=>{
    return {};
}

const UnemploymentRate = connect(mapStateToProps,mapDispatchToProps)(EChart);
export default UnemploymentRate;