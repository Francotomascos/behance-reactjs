import { Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

export default function Home() {
    return (
        <div>
            <Carousel controls={false} wrap={false} className='position-absolute z-n1 top fixed-top' data-bs-theme="dark">
                <Carousel.Item>
                    <img src="/public/assets/hero/hero-img-1.webp" className="d-block w-100" alt="" />
                    <div className='carousel-info'>
                        <div className='container'>
                            <div>
                                <h2>Glamorous <br/>Glam</h2>
                                <p>From casual to formal, we've got you covered</p>
                                <Button variant="dark">Shop</Button>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="/public/assets/hero/hero-img-2.webp" className="d-block w-100" alt="" />
                    <div className='carousel-info'>
                        <div className='container'>
                            <div>
                                <h2>Simple <br/>Style</h2>
                                <p>From casual to formal, we've got you covered</p>
                                <Button variant="dark">Shop</Button>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="/public/assets/hero/hero-img-3.webp" className="d-block w-100" alt="" />
                    <div className='carousel-info'>
                        <div className='container'>
                            <div>
                                <h2>Discreet <br/>Style</h2>
                                <p>From casual to formal, we've got you covered</p>
                                <Button variant="dark">Shop</Button>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}