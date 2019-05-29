import React, { Component } from 'react';
import { ColumnChart } from 'react-chartkick'
import 'chart.js'

class Stats extends Component {
  // <div>
  //   <ColumnChart data={this.state.sortedVotes}/>
  // </div>
  // <div>
  //   <h4>Education: {Math.floor(this.state.sortedVotes["Education"]/this.state.allVotes.length * 100)}%</h4>
  //   <h4>Healthcare: {Math.floor(this.state.sortedVotes["Healthcare"]/this.state.allVotes.length * 100)}%</h4>
  //   <h4>Environment: {Math.floor(this.state.sortedVotes["Environment"]/this.state.allVotes.length * 100)}%</h4>
  //   <h4>Total Votes: {this.state.allVotes.length}</h4>
  // </div>

  render() {
    return (
      <div>
      <h1>Thanks You!</h1>
      <div>
        <ColumnChart data={this.props.sortedVotes}/>
      </div>
      <div>
        <h4>Education: {Math.floor(this.props.sortedVotes["Education"]/this.props.allVotes.length * 100)}%</h4>
        <h4>Healthcare: {Math.floor(this.props.sortedVotes["Healthcare"]/this.props.allVotes.length * 100)}%</h4>
        <h4>Environment: {Math.floor(this.props.sortedVotes["Environment"]/this.props.allVotes.length * 100)}%</h4>
        <h4>Total Votes: {this.props.allVotes.length}</h4>
      </div>
      </div>
    );
  }

}

export default Stats;
