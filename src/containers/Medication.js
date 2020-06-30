import React, { Component } from 'react';
import Medications from '../components/MedicationComponent/Medications';
import MedicationInput from '../components/MedicationComponent/MedicationInput';
import { connect } from 'react-redux';
import { addMedication } from '../actions/medicationActions';

export class Medication extends Component {
    render() {
        return (
            <div>
                <MedicationInput
                addMedication={this.props.addMedication}
                health={this.props.health}
                />
                <Medications
                    medications={
                        this.props.health &&
                        this.propr.health/medications.sort((a, b) =>
                        a.created_at < b.created_at ? 1 : -1,
                        )
                    }
                    />
            </div>
        );
    }
}

export default connect(null, { addMedication })(Medication);