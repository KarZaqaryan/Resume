import React, { useState } from 'react';

function About(props) {
    const [profileData, setProfileData] = useState({
        name: 'Karen Zakaryan',
        jobTitle: 'Web Developer',
        email: 'Karen@Karen.com',
        phone: '+37498693663',
        portfolioUrl: 'https://example.com',
        linkedinUrl: 'https://linkedin.com/in/Karen',
        image: 'https://via.placeholder.com/600x385',
    });

    const [isEditing, setIsEditing] = useState(false);
    const [fullImage, setFullImage] = useState(null);

    const handleEditClick = () => setIsEditing(true);

    const handleSaveClick = () => setIsEditing(false);

    const handleCancelClick = () => {
        setIsEditing(false);
        setProfileData({
            name: 'Karen Zakaryan',
            jobTitle: 'Web Developer',
            email: 'Karen@Karen.com',
            phone: '+37498693663',
            portfolioUrl: 'https://example.com',
            linkedinUrl: 'https://linkedin.com/in/Karen',
            image: '',
        });
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setProfileData({ ...profileData, [name]: value });
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setFullImage(reader.result);
                const img = new Image();
                img.src = reader.result;
                img.onload = () => {
                    const canvas = document.createElement('canvas');
                    const ctx = canvas.getContext('2d');
                    canvas.width = img.width;
                    canvas.height = img.height;
                    ctx.drawImage(img, 0, 0);
                    const croppedBase64 = canvas.toDataURL();
                    setProfileData({ ...profileData, image: croppedBase64.split(',')[1] });
                };
            };
            reader.readAsDataURL(file);
        }
    };

    const handleFullImageClick = () => {
        if (fullImage) {
            window.open(fullImage, '_blank');
        }
    };

    return (
        <div className="col-md-4 col-lg-3">
            <div className="profile-card bg-dark text-white p-4 rounded text-center sticky-top">
                {isEditing ? (
                    <>
                        <input type="file" name="image" onChange={handleImageUpload} className="mb-2" />
                        {fullImage && (
                            <img src={fullImage} alt="Full Profile Picture" className="img-fluid mb-3" style={{ maxWidth: '300px' }} />
                        )}
                        <input type="text" name="name" value={profileData.name} onChange={handleChange} placeholder="Name" className="form-control mb-2" />
                        <input type="text" name="jobTitle" value={profileData.jobTitle} onChange={handleChange} placeholder="Job Title" className="form-control mb-2" />
                        <input type="email" name="email" value={profileData.email} onChange={handleChange} placeholder="Email" className="form-control mb-2" />
                        <input type="tel" name="phone" value={profileData.phone} onChange={handleChange} placeholder="Phone" className="form-control mb-2" />
                        <input type="url" name="portfolioUrl" value={profileData.portfolioUrl} onChange={handleChange} placeholder="Portfolio URL" className="form-control mb-2" />
                        <input type="url" name="linkedinUrl" value={profileData.linkedinUrl} onChange={handleChange} placeholder="LinkedIn URL" className="form-control mb-2" />
                        <button className="btn btn-primary me-2" onClick={handleSaveClick}>Save</button>
                        <button className="btn btn-secondary" onClick={handleCancelClick}>Cancel</button>
                    </>
                ) : (
                    <>
                        {profileData.image && (
                            <img src={`data:image/jpeg;base64,${profileData.image}`} alt="Profile Picture" className="img-fluid rounded-circle mb-3" style={{ width: "150px" }} onClick={handleFullImageClick} />
                        )}
                        <h1>{profileData.name}</h1>
                        <p className="lead">{profileData.jobTitle}</p>
                        <p>Email: {profileData.email}</p>
                        <p>Phone: {profileData.phone}</p>
                        <p>Portfolio: <a href={profileData.portfolioUrl} className="text-info">{profileData.portfolioUrl}</a></p>
                        <p>LinkedIn: <a href={profileData.linkedinUrl} className="text-info">{profileData.linkedinUrl}</a></p>
                        <button className="btn btn-primary" onClick={handleEditClick}>Edit</button>
                    </>
                )}
            </div>
        </div>
    );
}

export default About;