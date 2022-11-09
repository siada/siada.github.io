import Form from 'react-bootstrap/Form'
import FeeFormInput from './FeeFormInput';



function FeeForm() {
    return (
        <Form>
            <Form.Group>
                <FeeFormInput />
            </Form.Group>
        </Form>
    );
}

export default FeeForm;
