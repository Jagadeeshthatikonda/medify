import React from 'react';
import './Specialisation.css';
import Cardiology from '../../assets/Cardiology.png';
import Lab from '../../assets/Lab.png';
import MRI from '../../assets/Mri.png';
import Primary from '../../assets/Primary.png';
import Psychologist from '../../assets/Psycologist.png';
import BloodTest from '../../assets/Test.png';
import XRay from '../../assets/Xray.png';

const specialisations = [
    { img: Lab, label: 'Dentistry' },
    { img: Primary, label: 'Primary Care' },
    { img: Cardiology, label: 'Cardiology' },
    { img: MRI, label: 'MRI Resonance' },
    { img: BloodTest, label: 'Blood Test' },
    { img: Psychologist, label: 'Psychologist' },
    { img: Lab, label: 'Laboratory' },
    { img: XRay, label: 'X-Ray' },
];

const Specialisation = () => (
    <div className='specialisation-container'>
        <h1>Find By Specialisation</h1>
        <div className="specialisation-item">
            {specialisations.map((specialisation, index) => (
                <div className="box" key={index}>
                    <img src={specialisation.img} alt={specialisation.label} />
                    <h3>{specialisation.label}</h3>
                </div>
            ))}
        </div>
        <button >View All</button>
    </div>
);

export default Specialisation;
