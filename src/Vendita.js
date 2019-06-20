import React, { Component } from 'react';

import './App.css';

class Vendita extends Component {
  render() {
    return (
      <div className="Valutatore">
        <div>
          <div style={styles.header} className="App-header">
            <h2 style={{fontSize:30}}>Benvenuto nello strumento rivenditore</h2>
          </div>
          <div className="Sel-Container">
            <button className='deg0' style={styles.menu_option1}>Acquisto</button>
            <button className='deg45' style={styles.menu_option2}>Noleggio</button>
            <button className='deg135' style={styles.menu_option3}>Riparazioni</button>
            <button className='deg180' style={styles.menu_option4}>Vendita</button>
            <button className='deg225' style={styles.menu_option5}>Valutatore</button>
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

export default Vendita;