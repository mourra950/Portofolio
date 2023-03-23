import { Accordion} from 'react-bootstrap'


export default function Education({ title, info, k }) {

    return (

        <Accordion.Item eventKey={k}>
            <Accordion.Header>{title}</Accordion.Header>
            <Accordion.Body>
                    {info}
            </Accordion.Body>
        </Accordion.Item>
    )
}