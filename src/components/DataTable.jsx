import React, { Component } from 'react';
import ReactTable from 'react-table';
import "react-table/react-table.css";

class DataTable extends Component {
    constructor(props) {
        super(props);
        let columns = [
            {Header:'Date',accessor:'Date'},
            {Header:'Name',accessor:'Name'},
            {Header:'Segment',accessor:'Segment'},
            {Header:'Average Persons per Household',accessor:'Average Persons per Household'},
            {Header:'Average Age in years',accessor:'Average Age in years'},
            {Header:'Resident Population',accessor:'Resident Population'},
            {Header:'Unemployment Rate (%)',accessor:'Unemployment Rate (%)'}
        ];
        
        this.state = {columns:columns};
    }
    
    render() {
        return (
            <ReactTable 
            data={this.props.data}
            columns={this.state.columns}
            className="-striped -highlight"/>
        );
    }
}

export default DataTable;