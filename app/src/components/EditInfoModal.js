import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


export default function EditInfoModal(props) {
    const show = props.show;
    const handleClose = props.handleClose;
    // const profileData = props.profileData;
    const [profileData, setProfileData] = useState(props.profileData);

    const changeProfile = (event) => {
        const updatedProfile = { ...profileData, experience: { ...profileData.experience, [event.target.name]: event.target.value } };
        setProfileData(updatedProfile);
        props.changeProfile(updatedProfile)
    }

    const checkHandler = (event) => {
        const isChecked = event.target.checked;
        if (isChecked) {
            const updatedProfile = { ...profileData, experience: { ...profileData.experience, "end_month": "Present", "end_year": "" } };
            setProfileData(updatedProfile);
            props.changeProfile(updatedProfile);
            console.log("checked");
        } else {
            const updatedProfile = { ...profileData, experience: { ...profileData.experience, "end_month": "", "end_year": "" } };
            setProfileData(updatedProfile);
            props.changeProfile(updatedProfile);
        }
        
    }

    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Personal Info</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* <div className="required-text">
                        <span className="red">*</span><span>Required field</span>
                    </div> */}
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Pronouns</Form.Label>
                            <Form.Control
                                name="pronouns"
                                type="text"
                                value={profileData.info.pronouns}
                                placeholder={profileData.info.pronouns}
                                onChange={changeProfile}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Based In</Form.Label>
                            <Form.Control
                                name="location"
                                type="text"
                                value={profileData.info.location}
                                placeholder={profileData.info.location}
                                onChange={changeProfile}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                name="email"
                                type="text"
                                value={profileData.info.email}
                                placeholder={profileData.info.email}
                                onChange={changeProfile}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Twitter</Form.Label>
                            <Form.Control
                                name="twitter"
                                type="text"
                                value={profileData.info.twitter}
                                placeholder={profileData.info.twitter}
                                onChange={changeProfile}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}