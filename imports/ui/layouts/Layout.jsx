// imports/ui/layouts/Layout.jsx
import React from 'react';
import Navbar from './navs/Navbar.jsx';

export default class Layout extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        <header>
          <Navbar />
        </header>

        <main className="container">
          {this.props.content()}
        </main>

        <hr />
        <p className="text-center">Copyright &copy; 2017</p>
      </div>
    )
  }
}
