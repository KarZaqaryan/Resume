import React from 'react';

function Rating(props) {
    return (
        <div className="card bg-secondary text-white mb-3">
            <div className="card-header"><h2>Skills</h2></div>
            <div className="card-body">
                <p>HTML - Intermediate</p>
                <div className="progress mb-3">
                    <div className="progress-bar" style={{ width: '50%' }}></div>
                </div>
                <p>JavaScript - Advanced</p>
                <div className="progress mb-3">
                    <div className="progress-bar" style={{ width: '75%' }}></div>
                </div>
                <button className="btn btn-primary">Add your skills</button>
            </div>
        </div>
    );
}

export default Rating;
