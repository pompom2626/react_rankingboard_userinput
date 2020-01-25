import React, { Component } from 'react';
/* import Image from 'react-image-resizer'; //resize img is not working  */
import Users from './Users';
import { Header } from './components';

//increas do list items
let dolistId = 0;
let userId = 0;

//img id and reference addr
/* https://loremflickr.com/320/240?random=1 */


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      doitList: [],
      docontents: '',
      userList: [],
      userNames: '',
      selectedOptionKey: ""
    }
  }

  onclickUserList = () => {
    const { userList, userNames } = this.state
    if (userNames.length === 0) return alert('Please, input user name')
    const userNamesContent = {
      id: userId++,
      name: userNames
    }

    const newuserList = userList.map((userList) => {
      return userList
    });
    newuserList.push(userNamesContent)
    this.setState({ userList: newuserList })
  }

  onclickAddList = () => {
    const { docontents, doitList } = this.state

    if (docontents.length === 0) return alert('Please, Input to do things')
    const doInputContent = {
      id: dolistId++,
      name: docontents,
      completedDecision: true,
      date: new Date(),

    }
    const newdoitList = doitList.map((doitList) => {
      return doitList
    });
    newdoitList.push(doInputContent)
    this.setState({ doitList: newdoitList })
  }

  onchangeUserNames = (e) => {
    this.setState({ userNames: e.target.value })
  }

  onchangeDoContents = (e) => {
    this.setState({ docontents: e.target.value })
  }

  onclickStateChange = (index) => {
    const { doitList } = this.state;


    const newdoitList = doitList.map((doitList) => {
      return doitList
    });
    if (doitList[index].completedDecision === false) {
      newdoitList[index].completedDecision = true
    } else {
      newdoitList[index].completedDecision = false
    }

    this.setState({ doitList: newdoitList })
  }

  onclickRemoveButton = (id) => {
    const { doitList } = this.state
    const newdoitList = doitList.filter(item => item.id !== id)
    this.setState({ doitList: newdoitList })
  }

  render() {
    const { selectedOptionKey } = this.state;

    const CancelButton = item => (
      <button
        // className='btn btn-warning btn-sm'
        style={{ marginLeft: 10 }}
        onClick={() => this.onclickRemoveButton(item.id)}
      >
        Delete
      </button>
    )

    return (

      <div className='container' style={{ maxWidth: 600, padding: '20px 0' }}>
        <div className='row'>
          <div className='col text-center'>
          <div>
                <Header />  
                     
             </div>
            <div className='input-group'>
              
              <input
                type='text'
                className='form-control'
                placeholder='Input user name'
                value={this.state.userNames}
                onChange={this.onchangeUserNames}
                onKeyDown={e => e.keyCode === 13 ? this.onclickUserList() : null}
              />
              <div className='input-group-append'>
                <button
                  className='btn btn-default'
                  onClick={this.onclickUserList}
                >
                  Submit
                </button>
              </div>
            </div>


            <div className='input-group'>

              <input
                type='text'
                className='form-control'
                placeholder='Input do-it list'
                value={this.state.docontents}
                onChange={this.onchangeDoContents}
                onKeyDown={e => e.keyCode === 13 ? this.onclickAddList() : null}
              />
              <div className='input-group-append'>
                <button
                  className='btn btn-default'
                  onClick={this.onclickAddList}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='row' style={{ marginTop: 20 }}>

          <div /* className='col-6' */ >
            <h3> </h3>

            {

              this.state.doitList.filter(item => item.completedDecision).map(item =>

                /*   this.state.userList.map(item2 => */
                <React.Fragment>
                  <Users userList={this.state.userList} userNames={this.state.userNames} />

                  <div key={item.id} style={{ margin: 10 }} >
                    <p style={{ marginRight: 5, whiteSpace: "pre-wrap" }}>-{item.date.toLocaleDateString('en-US')} {item.date.toLocaleTimeString('en-US')} {"\n"} {item.name} </p>
                    {CancelButton(item)}
                  </div>
                </React.Fragment>
              )

            }

          </div>

        </div>

        <div className='col-6'>
          <h3>Users</h3>
          <select onChange={this.onchangeUserNames}>
            <option>Choose</option>
            {
              this.state.userList.map(item =>
                <option key={item.id} style={{ margin: 10, marginRight: 5 }}>
                  -{item.name} {"\n"} {/* {item.image} */}</option>

              )
            }
          </select>
        </div>

      </div>

    );
  }

}

export default App;
