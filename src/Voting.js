import React, { Component } from 'react';

class Voting extends Component {

  // <div>
  //   <button onClick={(event)=>this.handleSelectCategory(event)}>Education</button>
  //   <button onClick={(event)=>this.handleSelectCategory(event)}>Healthcare</button>
  //   <button onClick={(event)=>this.handleSelectCategory(event)}>Environment</button>
  // </div>
  // <div>
  //   {this.state.selectedCategory ? <h1>{this.state.selectedCategory}</h1> :null}
  //   {this.state.selectedCategory ? <button onClick={this.handleSubmitVote}>Submit</button> :null}
  // </div>
  render() {
    return (
      <div>
      <h2>Which cause do you care about the most?</h2>
      <div>
        <button onClick={(event)=>this.props.handleSelectCategory(event)}>Education</button>
        <button onClick={(event)=>this.props.handleSelectCategory(event)}>Healthcare</button>
        <button onClick={(event)=>this.props.handleSelectCategory(event)}>Environment</button>
      </div>
      <div>
        {this.props.selectedCategory ? <h1>{this.props.selectedCategory}</h1> :null}
        {this.props.selectedCategory ? <button onClick={this.props.handleSubmitVote}>Submit</button> :null}
      </div>
      </div>
    );
  }

}

export default Voting ;
