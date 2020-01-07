import React, { Component } from "react";
import PropTypes from "prop-types";

class AddChallenges extends Component {
  constructor(props) {
    super(props);
    this.state = {
      challenges: [
        { id: 1, challenge_name: "abc1" },
        { id: 2, challenge_name: "abc2" },
        { id: 3, challenge_name: "abc3" }
      ],
      challenge: ""
    };
  }

  componentDidMount() {
    // call api to fetch challenges and set state
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };


  componentDidMount() {
    // call api to fetch challenges and set state
  }

  render() {
    const { challengeIds, addChallengeId } = this.props;
    const { challenge, challenges } = this.state;
    
    const selected_challenges = challenges.filter(ch => {
      let found = false;
      challengeIds.forEach(id => {
        if (id === ch.id) {
          found = true;
        }
      });
      return found;
    });
    return (
      <div className="row">
        <div className="col-sm-3">Contest Name</div>
        <div className="col-sm-4">
          <select
            value={challenge}
            name="challenge"
            onChange={this.handleChange}
            id="challenge"
            className="form-control"
          >
            <option selected>Choose...</option>
            {challenges &&
              challenges.map(c => (
                <option value={c.id}>{c.challenge_name}</option>
              ))}
          </select>
        </div>
        <br />
        <br />
        <div className="col-sm-3">
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => addChallengeId(challenge)}
          >
            Add Challenge
          </button>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <ul>
              {selectedChallenges &&
                selectedChallenges.map(cha => <li>{cha.challenge_name}</li>)}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

AddChallenges.propTypes = {
  challengeIds: PropTypes.arrayOf(PropTypes.number).isRequired,
  addChallengeId: PropTypes.func.isRequired
};

export default AddChallenges;
