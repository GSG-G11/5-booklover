import React, { Component } from 'react'
import Navbar from '../Components/Navbar/Navbar';

class Books extends Component{
 
  state = {
    islogin : false,
    searchBook: '',
  }
  handleChange = ({target}) => {
    const {name,value} = target
    this.setState({[name]: value})

  }
  render() {
    const {islogin,searchBook}= this.state
    const {isBooksPage}= this.props
    return (
      <>
        <Navbar islogin={islogin} isBooksPage={isBooksPage} searchBook={searchBook} handleChange={this.handleChange}/>
      </>
    )
  }

}

export default Books