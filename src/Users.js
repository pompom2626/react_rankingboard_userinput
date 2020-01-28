import React, { Component } from "react";

class Users extends Component {
    constructor(props) {
        super(props)
    }

    render() {
      /*   let newuserNames;
        newuserNames = this.props.userNames.replace('-', ''); */

        return (
            
           /*  this.props.rankList.filter(item2 => item2.uname == newuserNames).map(item2 =>  */
                <React.Fragment>
                    <div style={{ float: 'left' }}>
                        <img
                            src={`https://loremflickr.com/30/30?random=${this.props.rankList.uname}`}
                            alt="users" />
                    </div>
                    <div>
                        {this.props.rankList.uname}
                    </div>
                </React.Fragment>
            /*  )  */

        )
    };
}


export default Users;