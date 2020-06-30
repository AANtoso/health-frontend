import React from 'react';
import { Divider } from 'semantic-ui-react';
import MedicationCard from './MedicationCard';

const Medications = (props) => {
    return (
        <div>
            <Divider />
            <h4> Here is a list of medications for this diagnosis:</h4>
            {props.medications &&
                props.medications.map((med) => (
                    <MedicationCard key={med.id} medication={med} />
                ))}
        </div>
    );
};

export default Medications;
