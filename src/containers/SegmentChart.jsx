import {connect} from 'react-redux';
import EChart from '../components/EChart';
import {toggleSegment} from '../actions/FilterAction';
import rawData from '../data/historicalData'

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
    let data = [];
    let records = rawData;
    if(state.filters.year !== 'ALL'){
        records = records.filter(e=>e.Year === state.filters.year);
    }

    if(state.filters.name !== 'ALL'){
        records = records.filter(e=>e.Name === state.filters.name);
    }

    if(state.filters.segment === 'ALL'){
        records.forEach((e)=>{
            let index = data.findIndex(chartElement=>chartElement.name === e.Segment);
            if(index === -1){
                data.push({value:1, name: e.Segment});
            }else{
                data[index].value ++;
            }
        });
    }else{
        let count = records.filter(e => e.Segment===state.filters.segment).length;
        data.push({value:count, name:state.filters.segment});
    }
    let option = getOption();
    option.series[0].data = data;
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