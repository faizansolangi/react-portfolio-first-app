import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Products from '../assets/images/pf.png'

export default function Projects(){
    return(
        <div className="project-section container">
            <h2> Projects </h2>
            <div className="row" style={{ margin: '20px' }}>
                <div className="col col-sm-12 col-md-4 col-lg-4"> 
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Products} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col col-sm-12 col-md-4 col-lg-4">
                <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Products} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col col-sm-12 col-md-4 col-lg-4">
                <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Products} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>

            <div className="row" style={{ margin: '20px' }}>
                <div className="col col-sm-12 col-md-4 col-lg-4"> 
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Products} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col col-sm-12 col-md-4 col-lg-4">
                <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Products} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col col-sm-12 col-md-4 col-lg-4">
                <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Products} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
}