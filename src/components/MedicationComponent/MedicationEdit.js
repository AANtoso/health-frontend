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
}