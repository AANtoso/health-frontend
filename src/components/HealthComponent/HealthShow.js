import React from 'react';
import Medication from '../../containers/Medication';
import { Header } from 'semantic-ui-react';

const HealthShow = (props) => {
    const health = props.healths.find(
        ({ id }) => id === parseInt(props.match.params.id),
    );

    return (
        <div>
            <Header as='h1' block textAlign='center'>
                {health ? health.diagnosis : <p>LOADING</p>}
            </Header>
            <Medication health={health} />
        </div>
    );
};

export default HealthShow