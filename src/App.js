import { useState } from 'react';
import {Button,Form, Navbar, Container,Nav} from 'react-bootstrap';
import './App.css';
import data from "./data";
import {Routes,Route,Link, useNavigate, Outlet} from 'react-router-dom'
import DetailPage from './pages/Detail'
import Card from './component/Card';


function App() {

  let[shoes] = useState(data);
  let navigate = useNavigate()
  // navigate(-1) = 뒤로가기  1 = 앞으로가기  

  return (
    <div className="App">
    
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Market</Navbar.Brand>
          <Nav className="me-auto">

            <Nav.Link href="#home" onClick={()=>{
              navigate('/')
            }}>Home</Nav.Link>
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

      <Link to="detail">상세페이지</Link>

      <Routes>
        <Route path="/" element={
          <>
          <div className='main-bg'>
          </div>
    
          <div className='container'>           
            <div className='row'>
              {
                shoes.map((shoes,i)=>{
                  return(
                    <Card shoes={shoes} i={i}></Card>
                  )
                  
                })
              }
            </div>
    
          </div>
          </>
        }></Route>
        <Route path='/detail' element={<DetailPage shoes={shoes}/>}>
          {/* <Route path='locaton' element={<DetailPage}>
            Nested Route
            여러 유사한 페이지 필요할때 사용
            <outlet></outlet> 페이지 이동이 쉬움
          </Route> */}
        </Route>

        <Route path='/event' element={<EvnetPage/>}>
          <Route path='one' element={
            <div>
              <p>첫 주문시 양배추즙 서비스</p>
            </div>
          }/>
          <Route path='two' element={
            <div>
              <p>생일기념 쿠폰받기</p>
            </div>
          }/>
        </Route>

        
        {/* <Route path='*'>
          정의된경로외 모든경로 => not found 404
        </Route> */}
      </Routes>

      </div>
  );
}

function EvnetPage(){

  return(
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
}




export default App;
