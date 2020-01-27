import React, { Component } from "react";

class MovieNames extends Component {
    constructor(props) {
        super(props)
    }
       
       // this.setState({ doitList: filteredX })
     
    render() {
         let x;
        x = this.props.doitList;
        let y;
        y = this.props.rankList;

        let yFilter = y.map(itemY => { return itemY[x.id]; });

        // Use filter and "not" includes to filter the full dataset by the filter dataset's val.
        let filteredX = x.filter(itemX => yFilter.includes(itemX.id)); 

        /* 1st trial (filter + map combination): failed 
        let newfilterArray;
        newfilterArray= this.props.doitList.filter((item3) => {return item3.id == this.props.rankList.id}); */
        return (
            //2nd trial (after map, if else filter : failed)
            /* this.props.doitList.map(item3 => 
                (item3.id == newrankListIndex.id)
                ?
                <p>
                    {item3.name}
                </p>                
                : <p>{item3.id}</p>
            ) */
          this.props.doitList.map(item3 => 
                <p>
                    {item3.name}
                </p>)
            // 3rd trial : success to disply data , but data matching is impossible between components and state
        )
    };
}


export default MovieNames;