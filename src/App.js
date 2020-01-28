import React, { Component } from 'react';
/* import Image from 'react-image-resizer'; //resize img is not working  */
import Users from './Users';
import MovieNames from './MovieNames';
import { Header } from './components';

//increas do list items

let userId = 0;
let rankindexId = 0;

//img id and reference addr
/* https://loremflickr.com/320/240?random=1 */


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      likeId: 0,
      doitList: [],
      docontents: '',
      userList: [],
      userNames: 'Js',
      rankList: [],
      rankContents: '',
      selectedOptionKey: ""
    }
  }

  //removable for final project
  /* onclickUserList = () => {
    const { userList, userNames } = this.state
    if (userNames.length === 0) return alert('Please, input user name')
    const userNamesContent = {
      id: userId++,
      uname: userNames
    }

    const newuserList = userList.map((userList) => {
      return userList
    });
    newuserList.push(userNamesContent)
    this.setState({ userList: newuserList })
  } */

  onclickRankList = () => {
    const { rankList, rankContents, userNames } = this.state;
    if (rankContents.length === 0) return alert('Please, input rank scores from 1 to 100')
    const votingContents = {
      id: rankindexId++,
      rankMessage: rankContents,
      rankid: this.state.likeId,  //change message
      completedDecision: true,
      date: new Date(),
      uid: userId++,
      uname: userNames
      // message:
    }
    const newrankList = rankList.map((rankList) => {
      return rankList
    });
    newrankList.push(votingContents)

    //stack overflow : sort json object in javascript  https://stackoverflow.com/questions/17684921/sort-json-object-in-javascript
    newrankList.sort(function (a, b) {
      return b.rankid - a.rankid;
    });
    this.setState({ rankList: newrankList })
  }

  onclickAddList = () => {
    let likeCount = this.state.likeId + 1;
    this.setState({ likeId: likeCount })
  }

  onclickMinusList = () => {
    let likeCount = this.state.likeId - 1;
    this.setState({ likeId: likeCount })
  }

  onchangeUserNames = (e) => {
    this.setState({ userNames: e.target.value })
  }

  onchangeVotingContents = (e) => {
    this.setState({ rankContents: e.target.value })
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

  /* handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ userNames: e.target.value })
  } */

  onclickRemoveButton = (rankid) => {
    const { rankList } = this.state
    const newrankList = rankList.filter(item => item.rankid !== rankid)
    this.setState({ rankList: newrankList })
  }

  render() {
    const { selectedOptionKey } = this.state;

    const CancelButton = item => (
      <button
        // className='btn btn-warning btn-sm'
        style={{ marginLeft: 10 }}
        onClick={() => this.onclickRemoveButton(item.rankid)}
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
            {/*  <div className='input-group'>

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
            </div> */}

            <div className='form-group'>
           
              <textarea
                type='text'
                className='form-control'
                rows="3"
                placeholder='Input your messages here and click rank score + or -'
                value={this.state.votingContents}
                onChange={this.onchangeVotingContents}
                /* onKeyDown={e => e.keyCode === 13 ? this.onclickRankList() : null} */
              />
              <div className='input-group-append'>
                <button
                  className='btn btn-primary'
                  onClick={this.onclickRankList}
                >
                  Submit
              </button>
              </div>
            </div>

            <div className='input-group'>

              {/* <input
                type='text'
                className='form-control'
                placeholder='Input your favorite movie name'
                value={this.state.docontents}
                onChange={this.onchangeDoContents}
                onKeyDown={e => e.keyCode === 13 ? this.onclickAddList() : null}
              /> */}
              <div className='border border-primary input-group-append'>
                <div className='btn btn-default'>
                  message ranking: {this.state.likeId}
                </div>
                <button
                  className='btn btn-danger'
                  onClick={this.onclickAddList}
                >
                  +rank
                </button>
                <button
                  className='btn btn-warning'
                  onClick={this.onclickMinusList}
                >
                  -rank
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='row' style={{ marginTop: 20 }}>

          <div /* className='col-6' */ >
            <h3> </h3>

            {

              this.state.rankList.filter(item => item.completedDecision).map(item =>

                /*   this.state.userList.map(item2 => */
                <React.Fragment>
                  <div className={`container${item.rankid}`} key={item.rankid}>
                    <div className='row' style={{ float: 'left' }}>
                      <img
                        src={`https://loremflickr.com/120/120?random=${item.rankid}`}
                        alt="users" />
                    </div>

                    <div className='row border border-primary' key={item.rankid} style={{ marginLeft: 120, marginBottom: 40 }} >
                      <div className='col-sm'>Ranking Scores: {item.rankid}{"\n"}</div>
                      <div className='col-sm' style={{ marginRight: 5, whiteSpace: "pre-wrap" }}>
                        {item.date.toLocaleDateString('en-US')} {item.date.toLocaleTimeString('en-US')} {"\n"}
                        {/* <MovieNames doitList={this.state.doitList} rankList={this.state.rankList} /> {"\n"} */}
                        
                      </div>
                      <p className='w-100'>{item.rankMessage}</p>
                     <Users rankList={this.state.rankList} userNames={this.state.userNames} />
                      
                      {/* <div style={{ float: 'left' }}>
                        <img
                          src={`https://loremflickr.com/30/30?random=${this.rankList.uname}`}
                          alt="users" />
                      </div>
                      <div>
                        user name : {this.rankList.uname}
                      </div>
 */}
                      <div>{CancelButton(item)}</div>
                    </div>
                  </div>
                </React.Fragment>

              )

            }

          </div>

        </div>

        {/* <form onSubmit={this.handleSubmit}> */}
        <label>
          Pick your user:
          <select value={this.state.userNames} onChange={this.onchangeUserNames}>
            <option value="100">Js</option>
            <option value="200">Csharp</option>
            <option value="300">Python</option>
            <option value="400">CPlusPlus</option>
          </select>
        </label>
        {/*  <input type="submit" value="Submit" />
      </form> */}



        {/* <div className='col-6'>
          <h3>Users Change</h3>
          <select onChange={this.onchangeUserNames}>
            <option>Choose</option>
            {
              this.state.userList.map(item =>
                <option key={item.id} style={{ margin: 10, marginRight: 5 }}>
                  -{item.uname} {"\n"} </option>

              )
            }
          </select>
        </div> */}



      </div>

    );
  }

}

export default App;
