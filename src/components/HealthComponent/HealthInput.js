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
        return (
            <div>
                <h2>In HealthInput</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>Name of the Diagnosis</label>
                    <input
                    type='text'
                    placeholder='Diagnosis'
                    value={this.state.diagnosis}
                    onChange={this.handleChange}
                    />
                    <input type='submit' />
                </form>
            </div>
        );
    }
}

export default connect(null, { addHealth })(HealthInput);