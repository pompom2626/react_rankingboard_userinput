 import React, { Component } from 'react';
/* import axios from 'axios';

class Fetch extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    getPost = (keyWord) => {
        return axios.get("https://www.omdbapi.com/?apikey=68b0a95b&type=movie&s=" + keyWord);
    }

    fetchPostInfo = async () => {
        const movieInfo = await Promise.all([
            this.getPost('canada')

        ]);

        console.log(movieInfo);
    }

    render() {
        return (
            <div>{this.fetchPostInfo()}</div>

        )
    }
}

export default Fetch;
Axios and Async Fetch failed for study
*/ 

const url = "https://www.omdbapi.com/?apikey=68b0a95b&type=movie&plot=full&t=need for speed"

const Fetch = () =>{
  fetch(url)
    .then(res => res.json())
    .then(repos => {
            console.log(repos);
            console.log(repos.length);
            this.setState({
              repos: repos
            });
          }).catch((e)=>{console.log(e)});
        };
    
 export default Fetch;

