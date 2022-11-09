import Form from "react-bootstrap/Form"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import React from "react"
import { differenceInMinutes, parse } from 'date-fns'

class FeeFormInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            startTime: "09:00",
            endTime: "10:00",
            hourlyRate: 15,
            invoiceValue: 15
        }

        this.handleStartTime = this.handleStartTime.bind(this);
        this.handleEndTime = this.handleEndTime.bind(this);
        this.handleHourlyRate = this.handleHourlyRate.bind(this);
    }

    handleStartTime(e) {
        const startDate = parse(e.target.value, "HH:mm", new Date());
        const endDate = parse(this.state.endTime, "HH:mm", new Date());
        this.setState({
            startTime: e.target.value,
            invoiceValue: (differenceInMinutes(endDate, startDate) / 60.0) * this.state.hourlyRate
        });
    }

    handleEndTime(e) {
        const startDate = parse(this.state.startTime, "HH:mm", new Date());
        const endDate = parse(e.target.value, "HH:mm", new Date());
        this.setState({
            endTime: e.target.value,
            invoiceValue: (differenceInMinutes(endDate, startDate) / 60.0) * this.state.hourlyRate
        })
    }

    handleHourlyRate(e) {
        const startDate = parse(this.state.startTime, "HH:mm", new Date());
        const endDate = parse(this.state.endTime, "HH:mm", new Date());
        this.setState({
            hourlyRate: e.target.value,
            invoiceValue: (differenceInMinutes(endDate, startDate) / 60.0) * e.target.value
        })
    }

    render() {
        return (
            <Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="startTime">
                            <Form.Label>Start Time</Form.Label>
                            <Form.Control type="time" defaultValue={this.state.startTime} onChange={this.handleStartTime} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="endTime">
                            <Form.Label>End Time</Form.Label>
                            <Form.Control type="time" defaultValue={this.state.endTime} onChange={this.handleEndTime} />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="hourlyRate">
                            <Form.Label>Hourly Rate</Form.Label>
                            <Form.Control type="number" defaultValue={this.state.hourlyRate} onChange={this.handleHourlyRate} />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col><span><strong>Charge to Customer: </strong>£{this.state.invoiceValue.toFixed(2)}</span></Col>
                </Row>
            </Row>
        )
    }
}

export default FeeFormInput