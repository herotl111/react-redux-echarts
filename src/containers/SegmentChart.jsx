import {connect} from 'react-redux';
import EChart from '../components/EChart';
import {toggleSegment} from '../actions/FilterAction';
import {segmentFilter} from '../selectors/SegmentFilter';

const getOption = () =>{
    return {
      title : {
        text: 'Segment',
        x:'center'
      },
      tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      series : [
        {
        name: 'Segment',
        type: 'pie',
        radius : '55%',
        center: ['50%', '60%'],
        data:[],
        itemStyle: {
          emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
        }
      ]
    }
  }

const mapStateToProps = (state) =>{
    let option = getOption();
    option.series[0].data = segmentFilter(state);
    return {option}
}

const mapDispatchToProps = (dispatch)=>{
    return {
        onChartClick: function(param, echarts){
            
            dispatch(toggleSegment(param.name));
        }
    }
}

const YearChartC = connect(mapStateToProps,mapDispatchToProps)(EChart);
export default YearChartC;