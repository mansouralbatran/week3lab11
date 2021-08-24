import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './component/style.css';
class Newbook extends React.Component {

    render() {  


        return(<>


        {this.props.databook.map(elme=>{
            
           return(  <Card className='mycard' style={{ width: '18rem' }}>
           <Card.Body>
             <Card.Title>titil:{elme.title}</Card.Title>
             <Card.Text>
               descripcion:{elme.description}
             </Card.Text>
             <Card.Text>
             email:{elme.email}
             </Card.Text>
             <Button variant="primary">Go somewhere</Button>
           </Card.Body>
         </Card>)
          

        })}
        

        
        
        
        
       </> );
    }
  }
  
  export default Newbook;