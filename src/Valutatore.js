import React, { Component } from 'react';

import './App.css';

class Valutatore extends Component {
  render() {
    return (
      <div className="Valutatore">
        <div style={styles.inserimentoCampi}>
          <div className="Sel-Container">
            <text>Valutatore</text>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  inserimenoCampi: {
    border: 23,

    width: 300,
    height: 300,
  },
  menu_option4: {
    borderRadius: 500,
    border: 2,
    width: 130,
    height: 130,

  },
  menu_option5: {
    borderRadius: 500,
    border: 2,
    width: 130,
    height: 130,

  },
}

export default Valutatore;