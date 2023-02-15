import { Accordion, Button, Card, Container, Row } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'


export default function Education({title,info}) {

    return (

                <Accordion.Item eventKey="0">
                    <Accordion.Header>{title}</Accordion.Header>
                    <Accordion.Body>
                        {info}
                    </Accordion.Body>
                </Accordion.Item>
    )
}