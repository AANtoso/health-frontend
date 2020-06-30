import React, { Component } from 'react';
import {
    Segment,
    Header,
    Button,
    Image,
    Divider,
    Icon,
    Grid,
} from 'semantic-ui-react';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import {deleteMedication } from '../../actions/medicationActions';
import MedicationEdit from './MedicationEdit';

export class MedicationCard extends Component {
    constructor(props) {
        console.log('MEDICATION CARD', props);
        super(props);
        this.state = {
            isEditable: false,
        };
    }
    toggleEdit = () => {
        this.setState({ isEditable: !this.state.isEditable });
    };

    handleDelete = (med) => {
        console.log(med);
        this.props.deleteMedication(
            this.props.medicatin.id,
            this.props.medication.health_id,
        );
    };

    render
}