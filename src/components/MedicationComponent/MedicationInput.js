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
}