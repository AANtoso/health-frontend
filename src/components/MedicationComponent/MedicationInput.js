import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

export class MedicationInput extends Component {
    state = {
        name: '',
        dose: '',
        frequency: '',
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addMedication(this.state, this,props.health.id);
        this.setState({
            name: '',
            dose: '',
            frequency: '',
        });
    };

    render() {
        return (
            <div>
                <h3> Add a New Medication:</h3>
                <Form onSubmit={this.handleSubmit}>
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
            </div>
        );
    }
}

export default MedicationInput