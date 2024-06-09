import { Button, Col, Row } from "react-bootstrap";

export default function ItemDetailContainer({ data }) {
    // USE BOOTSTRAP COMPONENTS

    return (
        <Row>
            <Col md={5} >
                <img className="w-100 h-auto object-fit-cover" src={data.image} alt={data.title} />
            </Col>
            <Col md={7}>
                <div>
                    <h1>{data.title}</h1>
                    <p>{data.description}</p>
                    <span className="fw-bold fs-3">${data.price}</span>
                </div>
                <div className="mt-3">
                    <Button className="me-2" variant="secondary">Add to cart</Button>
                    <Button variant='dark'>Buy now</Button>
                </div>
            </Col>
        </Row>
    )
}