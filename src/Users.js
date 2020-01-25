import React, { Component } from "react";

class Users extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let newuserNames;
        newuserNames = this.props.userNames.replace('-', '');

        return (

            this.props.userList.filter(item2 => item2.name == newuserNames /* this.props.userNames */).map(item2 =>
                <React.Fragment>
                    <div style={{ float: 'left' }}>
                        <img
                            src={`https://loremflickr.com/70/70?random=${newuserNames}`}
                            alt="users" />
                    </div>
                    <div>
                        user name : {item2.name}
                    </div>
                </React.Fragment>
            )

        )
    };
}


export default Users;