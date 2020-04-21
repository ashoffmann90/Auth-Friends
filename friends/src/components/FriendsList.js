import React from 'react';
// import Loader from 'react-loader-spinner';

import { axiosWithAuth } from '../utils/axiosWithAuth';
import NewFriend from './NewFriend';

class FriendsList extends React.Component {
    state = { 
        friends: []
    }

    componentDidMount() {
        this.getData();
      }

      getData = () => {
          axiosWithAuth()
          .get('/api/friends')
          .then(res=> {
            // console.log(res.data)
            this.setState({
                friends: res.data
            })
          })
          .catch(err => {
              console.log('oops', err)
          })
      }

      render() {
          return(
              <div>
                  <h1>People I think Are OK</h1>
                  <NewFriend />
                  {this.state.friends.map(item => {
                      return (
                          <>
                          <h2>{item.name}</h2>
                          <h3>{item.age}</h3>
                          <h3>{item.email}</h3>
                          </>
                      )
                  })}
              </div>
          )
      }
}

export default FriendsList