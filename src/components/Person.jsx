import React from 'react';

class Person extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};


  }

  render() {
    if (!this.props.bot) {
      return (
        <div>
          <div className="playercontainer">
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <img id="left" src={this.props.card}/>
              <img id="right" src="nobus/blank.png"/>
            </div>
            <div id="name">
              Marc Perry
            </div>
            <div id="chipcount">
              {this.props.stack}
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <div className="playercontainer">
            <div id="name_bot">
              Marc Perry
            </div>
            <div id="chipcount_bot">
              {this.props.stack}
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <img id="left" src={this.props.card}/>
              <img id="right" src="nobus/blank.png"/>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default Person;