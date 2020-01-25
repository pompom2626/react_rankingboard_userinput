import React, { Component } from "react";

class Users extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let newuserNames;
        newuserNames = this.props.userNames.replace('-', '');

        return (

            this.props.userList.filter(item2 => item2.uname == newuserNames /* this.props.userNames */).map(item2 =>
                <React.Fragment>
                    <div style={{ float: 'left' }}>
                        <img
                            src={`https://loremflickr.com/30/30?random=${newuserNames}`}
                            alt="users" />
                    </div>
                    <div>
                        user name : {item2.uname}
                    </div>
                </React.Fragment>
            )

        )
    };
}


export default Users;