import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import Newbook from './Newbook';


class MyFavoriteBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookdat: [],
      showdata: 0

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
  render() {
    return (<>

      <h1>My Favorite Books</h1>
      <p>
        This is a collection of my favorite books
      </p>
      
        <Newbook  databook={this.state.bookdat}/>
        


   
      </>
    )
  }
}

export default withAuth0(MyFavoriteBooks);
