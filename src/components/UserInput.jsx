import React, { Component } from 'react'

export default class UserInput extends Component {
  render() {
    return (
      <section id="user-input">
        <div className="input-group">
            <p>
                <label>Initial investment</label>
                <input type='number'></input>
            </p>
            <p>
                <label>Annual investment</label>
                <input type='number'></input>
            </p>
        </div>
        <div className="input-group">
            <p>
                <label>Expected return</label>
                <input type='number'></input>
            </p>
            <p>
                <label>Duration</label>
                <input type='number'></input>
            </p>
        </div>
      </section>
    )
  }
}
