import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';

class EChart extends Component {    
      render() {
        let onEvents={
          'click':this.props.onChartClick
        }
        return (
            <ReactEcharts 
              option={this.props.option} 
              onEvents={onEvents}
            />
        );
      }
}

export default EChart;