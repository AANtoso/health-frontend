import React from 'react';
import { connect } from 'react-redux';
import { addHealth } from '../..actions/healthActions';

export class HealthInput extends Component {
    state = {
        diagnosis: '',
        medications: '',
        notes: '',
    };

    handleChange = (e) => {
        this.setState({
            diagnosis: e.target.value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.propr.addHealth(this.state);
        this.setState({
            diagnosis: '',
        });
    };

    render() {
        
    }
}