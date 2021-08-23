import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';
import axios from 'axios';


class MyFavoriteBooks extends React.Component {
  constructor(props){
    super()


  };
componentDidMount(){
  let bookData =  axios.get(`${process.env.REACT_APP_SERVER}/getbook?useremail=`)

}
  render() {
    return(
      <Jumbotron>
        <h1>My Favorite Books</h1>
        <p>
          This is a collection of my favorite books
        </p>
      </Jumbotron>
    )
  }
}

export default MyFavoriteBooks;
