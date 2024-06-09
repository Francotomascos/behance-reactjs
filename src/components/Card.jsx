import { Button, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function Card ({ product }) {
    return (
      <Col xxl={3} xl={3} lg={3} md={4} sm={4} xs={6} className='d-flex flex-column'>
        <div className="card-container d-flex flex-column flex-grow-1">
          <div className='position-relative card-container-img'>
            <div className='position-absolute w-100 h-100'>
              <img className='w-100 h-100 object-fit-contain' src={product.image}/>
            </div>
          </div>
          <div className='card-container-info d-flex flex-column gap-4 flex-grow-1'>
            <span className='flex-grow-1'>{product.title}</span>
            <Button variant='dark'>
              <NavLink className='nav-link' to={`/detail/${product.id}`}>Buy</NavLink>
            </Button>
          </div>
        </div>
      </Col>
    )
  }