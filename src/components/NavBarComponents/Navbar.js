import React, { Coponent } from 'react';
import { Header, Container, Divider } from 'semantic-ui-react';

export class About extends Component {
    render() {
        return (
            <div>
                <Divider />
                <Container testAlign ='justified'>
                    <Header as='h2'> About diagnosisTracker</Header>
                    <p>
                        Diagnosis tracker is an application that can be used to track a patient's diagnosis list and the medications associated with the specific diagnosis.
                    </p>
                    <Header as='h3'>How to use diagnosisTracker</Header>
                    <p> Imput your diagnosis along with its medications and any notes about it.</p>
                </Container>
            </div>
        );
    }
}

export default About;