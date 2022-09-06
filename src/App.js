import { useState } from 'react';
import {Button,Form, Navbar, Container,Nav} from 'react-bootstrap';
import './App.css';
import data from "./data";



function App() {

  let[shoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Market</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
            {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Container>
      </Navbar>

      <div className='main-bg'>
      </div>

      <div className='container'>

        
        <div className='row'>
          <div className='col-md-4'>
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" alt="shoes" width="70%"/>
          <h4>상품명</h4>
          <p>상품설명</p>
          </div>
          <div className='col-md-4'>
          <img src="https://codingapple1.github.io/shop/shoes2.jpg" alt="shoes" width="80%"/>
          <h4>상품명</h4>
          <p>상품설명</p>
          </div>
          <div className='col-md-4'>
          <img src="https://codingapple1.github.io/shop/shoes3.jpg" alt="shoes" width="80%"/>
          <h4>상품명</h4>
          <p>상품설명</p>
          </div>
        </div>

      </div>

    </div>
  );
}

function shoes(props){
  let url = `https://codingapple1.github.io/shop/shoes${index+1}.jpg`
  return(
    <div className='col-md-4'>
    <img src={url} alt="shoes" width="80%"/>
    <h4>item[index].title</h4>
    <p>item[index].price</p>
    </div>
  );
}

export default App;
