import React, {Component} from 'react';
import Header from "./components/Header";

function App extends Component {

  componentDidMount() {

  }

  render() {
    return (
      <div className="App">
        <Header
          titulo="Noticias"
        />
      </div>
    );
  }
}

export default App;
