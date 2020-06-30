import React, { Component } from 'react';
import {
    Segment,
    Header,
    Button,
    // Divider,
    Icon,
} from 'semantic-ui-react';
// import Moment from 'react-moment';
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

    render() {
        if (this.state.isEditable) {
            return (
                <div>
                    <MedicationEdit
                    medication={this.props.medication}
                    toggle={this.toggleEdit}
                    />
                </div>
            );
        }
        return (
            <div>
                <Segment color='pink' key={this.props.medication.id}>
                    <center>
                        <Header as= 'h2'>{this.props.medication.name}</Header>
                        <Header as= 'h4'>{this.props.medication.dose}</Header>
                        <Header as= 'h4'>{this.props.medication.frequency}</Header>
                        {/* <Moment format='LLLL'>{this.prop.medication.created_at}</Moment> */}
                    </center>
                    <br/>
                    <Button
                    onClick={this.toggleEdit}
                    icon 
                    floated='right'
                    laabelPosition='left'>
                        <Icon name='edit' />
                        Edit
                    </Button>
                    
                    <Button
                    icon 
                    laabelPosition='left'
                    onClick={() => {
                        window.confirm(
                            'Are you sure you want to delete this Medication?',
                        ) && this.handleDelete(this.props.medication);
                    }}>
                    <Icon name='delete' />
                    Delete
                    </Button>
                </Segment>
            </div>
        );
    }
}

export default connect(null, { deleteMedication })(MedicationCard);