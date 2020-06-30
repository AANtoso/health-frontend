import React from 'react';
import { Header, Button, Container, Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <Divider />
            <Container
            textAlign='center'
            style={{
                width: 750,
                height: 550,
                position: 'responsive',
                display: 'block',
            }}>
            <br />
            <Header as='h1'> WELCOME</Header>
            <Header as='h3'>Keep track of your diagnosis list with diagnosisTracker</Header>

            <Link to='healths' className='content'>
                <Button size='massive' color='pink'>
                Start tracking health conditions!
                </Button>
            </Link>
            </Container>
        </div>
    );
}

export default Home