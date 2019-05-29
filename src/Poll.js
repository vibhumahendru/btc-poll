import React, { Component } from 'react';
import { ColumnChart } from 'react-chartkick'
import 'chart.js'
import Stats from './Stats.js'
import Voting from './Voting.js'

class Poll extends Component {

  state={
    selectedCategory: null,
    allVotes: [],
    sortedVotes:{},
    justVoted: false
  }

  componentDidMount(){
    fetch('http://localhost:3000/votes')
    .then(res => res.json())
    .then((votes) => {
        this.setState({
          allVotes:votes
        })
        this.handleSortVotes()
    })

  }

  handleSelectCategory=(event)=>{
    console.log(event.target.innerText);
    this.setState({
      selectedCategory: event.target.innerText
    })
  }

  handleSubmitVote=()=>{
    fetch('http://localhost:3000/votes', {
      method:'POST',
      headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          category: this.state.selectedCategory
        })
    })
    .then(res=>res.json())
    .then((vote)=> {
      this.setState({
        allVotes: [...this.state.allVotes, vote],
        justVoted: true
      })
      this.handleSortVotes()
    })
  }

  handleSortVotes=()=>{
    let sortedVotes={
      "Education":0,
      "Healthcare":0,
      "Environment":0
    }
    this.state.allVotes.forEach(el=>{
      sortedVotes[el.category] += 1
    })
     this.setState({
       sortedVotes: sortedVotes
     })
  }

  handleResetJustVoted=()=>{
    this.setState({
      justVoted: !this.state.justVoted,
      selectedCategory: null
    })
  }

  render() {
    return (
      <div>
        {!this.state.justVoted ? <Voting handleSubmitVote={this.handleSubmitVote} handleSelectCategory={this.handleSelectCategory} selectedCategory={this.state.selectedCategory}/> : <Stats sortedVotes={this.state.sortedVotes} allVotes={this.state.allVotes}/>}
        {this.state.justVoted ? <button onClick={this.handleResetJustVoted}>Reset</button> :null}
      </div>
    );
  }

}

export default Poll;
