import React from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

class NewFriend extends React.Component {
        state = {
            newFriend: {
                name: '',
                age: '',
                email: ''
            }
        }

    handleChange = e => {
        this.setState({
            newFriend:{
            ...this.state.newFriend,
            [e.target.name]: e.target.value
            }
        })
    }



    handleSubmit = e => {
        e.preventDefault()
    }

    createFriend = e => {
        // e.preventDefault()
        axiosWithAuth()
        .post('/api/friends', this.state.newFriend)
        // .then(res => {
        //     console.log(res)
        // })
        // this.state.newFriends.history.push('/api/friends')
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input 
                  placeholder='Name'
                  type='text'
                  name='name'
                  value={this.state.newFriend.name}
                  onChange={this.handleChange}
                /><br/>
                <input 
                  placeholder='Age'
                  type='text'
                  name='age'
                  value={this.state.newFriend.age}
                  onChange={this.handleChange}
                /><br/>
                <input 
                  placeholder='Email'
                  type='text'
                  name='email'
                  value={this.state.newFriend.email}
                  onChange={this.handleChange}
                /><br/>
                <button onClick={this.createFriend} type='submit'>
                    Finalize Friend
                </button>
            </form>
        )
    }
}

export default NewFriend




