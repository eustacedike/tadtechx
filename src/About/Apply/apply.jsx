import React from 'react';
import style from './apply.css';

//Images
import step1 from './assets/step1.png';
import step2 from './assets/step2.png';
import step3 from './assets/step3.png';
import step4 from './assets/step4.png';

function Apply() {

    const linkStyle = {
        textDecoration: 'none',
        color: '#f78b26'
    }

    return (
        <div className='Apply'>
            <h2>How to Apply</h2>
            <p>You can apply for a scholarship easily in just a few steps</p>

            <div className="applications">
                <div className="applicant">
                    <img src={step1} alt="" />
                    <h3>Click on Apply</h3>
                    <p>Click on the apply button to start the application process</p>
                </div>
                <div className="applicant">
                    <img src={step2} alt="" />
                    <h3>Click on Apply</h3>
                    <p>Click on the apply button to start the application process</p>
                </div>
                <div className="applicant">
                    <img src={step3} alt="" />
                    <h3>Click on Apply</h3>
                    <p>Click on the apply button to start the application process</p>
                </div>
                <div className="applicant">
                    <img src={step4} alt="" />
                    <h3>Click on Apply</h3>
                    <p>Click on the apply button to start the application process</p>
                </div>
            </div>
            
                <button>Apply here</button>
            
        </div>
    );

}

export default Apply;
