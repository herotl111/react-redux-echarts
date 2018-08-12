import {connect} from 'react-redux';
import EChart from '../components/EChart';
import {toggleName} from '../actions/FilterAction';
import rawData from '../data/historicalData'

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
    let records = rawData;
    if(state.filters.segment !== 'ALL'){
        records = records.filter(e=>e.Segment === state.filters.segment);
    }

    if(state.filters.name !== 'ALL'){
        records = records.filter(e=>e.Name === state.filters.name);
    }

    if(state.filters.year !== 'ALL'){
        records = records.filter(e=>e.Year === state.filters.year);
    }

    let data = [0,0,0,0,0]
    records.forEach(e=>{
        let roundedValue = Math.floor(e['Resident Population']/1000);
        if(roundedValue === 0){
            data[0]++;
        }else if(roundedValue>0 && roundedValue <10){
            data[1]++;
        }else if(roundedValue>=10 && roundedValue <100){
            data[2]++;
        }else if(roundedValue>=100 && roundedValue < 1000){
            data[3]++;
        }else{
            data[4]++;
        }
    });

    let option = getOption();
    option.series[0].data = data;
    return {option}
}

const mapDispatchToProps = (dispatch)=>{
    return {};
}

const AvgAge = connect(mapStateToProps,mapDispatchToProps)(EChart);
export default AvgAge;