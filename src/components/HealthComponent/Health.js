import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteHealth } from '../../actions/healthActions';
import { Card, Divider, Button, Popup } from 'semantic-ui-react';

const Health = (props) => {
    const handleDelete = (health) => {
        console.log('DELETE HEALTH', health);
        props.deleteHealth(health.id);
    };

    return (
        <div>
            <Divider />
            <h4> Your Diagnosis List:</h4>
            {props.healths.map((hea) => (
                <Card key={hea.id} color='pink'>
                    <Link key={hea.id} to={`/healths/${hea.id}`} className='content'>
                        <center>
                            <h4>{hea.diagnosis}</h4>
                        </center>
                    </Link>
                    <Popup
                        content={`Delete "${hea.diagnosis}"`}
                        size='tiny'
                        inverted
                        trigger={
                            <Button
                            icon='delete'
                            size='mini'
                            attached='bottom'
                            onClick={() => {
                                window.confirm(
                                    'Deleting this condition will delete all of the medications as well! Click ok to confirm.',
                                ) && handleDelete(hea);
                            }}
                            />
                        }
                        />
                </Card>
            ))}
        </div>
    );
};

export default connect(null, { deleteHealth })(Health);