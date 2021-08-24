import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import Newbook from './Newbook';
import Button from 'react-bootstrap/Button'
import Model from './model';


class MyFavoriteBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookdat: [],
      showdata: 0,
      showmodel:false

    }


  }
  componentDidMount = async () => {
    let emailuser = this.props.auth0.user.email
    console.log('uuuuuu', emailuser);

    let bookData = await axios.get(`${process.env.REACT_APP_SERVER}/getbook?useremail=${emailuser}`)
    console.log(bookData.data);
    await this.setState({
      bookdat: bookData.data,
      showdata: 1
    })

    console.log('ggggggg', this.state.bookdat[0].title);
  }
  
  AddBook=()=>{
    this.setState({
      showmodel:true

    })

  }

  
  handleClose=()=>{
    this.setState({
      showmodel:false

    })

  }

  addBook= async (event)=>{
    event.preventDefault();
    this.handleClose();
    let BookInfo={
      Title1:event.target.Title.value,
      Description1:event.target.Description.value,
      emailuser :this.props.auth0.user.email
    }
    let BookData=await axios.post(`${process.env.REACT_APP_SERVER}/addbook`,BookInfo)
    console.log('hellllloooooooooooooooooooooooo',BookData.data);
    this.setState({ 
      bookdat:BookData.data,
     })
   
    }




  render() {
    return (<>

      <h1>My Favorite Books</h1>
      <p>
        This is a collection of my favorite books
      </p>
      <Button onClick={this.AddBook} variant="primary">Add book</Button>
        <Newbook  databook={this.state.bookdat}/>
        {this.state.showmodel &&<Model show={this.state.showmodel} handleClose={this.handleClose} addBook={this.addBook} />}


   
      </>
    )
  }
}

export default withAuth0(MyFavoriteBooks);
