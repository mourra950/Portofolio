import { Button, Card, Container, Row } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'


function FirstSection() {

    return (
        <>
        
            <Container>
                <Row className="justify-content-md-center" >
                    <Card.Img style={{ width: '5rem' }} variant="top" src="./pixelball.gif" />
                </Row>
            </Container>
        </>
    )
}

export default FirstSection