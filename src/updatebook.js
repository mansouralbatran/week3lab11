import React from 'react';

import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
class UpdateModel extends React.Component {

    render() {  


        return(<>

{/* function Example() { */}
  {/* const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true); */}

 
     

      <Modal show={this.props.show} >
        <Modal.Header closeButton>
          <Modal.Title>Update Book </Modal.Title>
        </Modal.Header>
        <Modal.Body> 
             <Form onSubmit={this.props.updatefrommodel}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>title</Form.Label>
      <Form.Control name="Title" type="text" defaultValue={this.props.selectedbook.title}/>
     
    </Form.Group>
  
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Description</Form.Label>
      <Form.Control name="Description" type="text" defaultValue={this.props.selectedbook.description} />
    </Form.Group>
    
    <Button  variant="primary" type="submit">
     updatebook
    </Button>
  </Form>
  </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>this.props.handleClose()}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>
    </>
  );
}



       };

export default UpdateModel;