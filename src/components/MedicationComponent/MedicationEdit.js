import React, { Component } from 'react';
import { Form, Segment,} from 'semantic-ui-react';
import { connect } from 'react-redux';
import {updateMedication } from '../../actions/medicationActions'

export class MedicationEdit extends Component {
    constructor(props) {
        console.log('EDIT', props);
        super(props)
        this.state = {
            name: this.props.medication.name,
            dose: this.props.medication.dose,
            frequency: this.props.medication.frequency,
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    handleUpdate = (event) => {
        event.preventDefault();
        let medication = {
            ...this.state,
            id: this.props.medication.id,
            health_id: this.props.medication.health_id
        };
        this.props.updateMedication(medication);
        this.props.toggle();
    };

    render() {
        return (
            <div>
                <Segment tertiary>
                    <h3>EDIT</h3>
                    <Form onSubmit={this.handleUpdate}>
                        <Form.Group widths='equal'>
                            <Form.input
                            type="text"
                            name='name'
                            fluid 
                            label="Name:"
                            placeholder='Name of the medication.'
                            value={this.state.name}
                            onChange={this.handleChange}
                            required
                            />
                            <Form.input
                            type="text"
                            name='dose'
                            fluid 
                            label="Dose:"
                            placeholder='Dose of the medication.'
                            value={this.state.dose}
                            onChange={this.handleChange}
                            />
                            <Form.input
                            type="text"
                            name='frequency'
                            fluid 
                            label="Frequency:"
                            placeholder='Frequency to take the medication.'
                            value={this.state.frequency}
                            onChange={this.handleChange}
                            />
                        </Form.Group>
                        <center>
                            <Form.Button primary type='submit'>
                                Save Medication
                            </Form.Button>
                        </center>
                    </Form>
                </Segment>
            </div>
        );
    }
}

export default connect(null, { updateMedication })(Medication);