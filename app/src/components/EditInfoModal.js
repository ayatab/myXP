import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


export default function EditInfoModal(props) {
    const show = props.show;
    const handleClose = props.handleClose;
    const profileData = props.profileData;
    const [updatedProfile, setUpdatedProfile] = useState(props.profileData);

    const changeProfile = (event) => {
        const temp = { ...profileData, info: { ...profileData.info, [event.target.name]: event.target.value } };
        setUpdatedProfile(temp);
    }

    const handleSave = (event) => {
        props.changeProfile(updatedProfile);
        handleClose();
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
                                value={updatedProfile.info.pronouns}
                                placeholder={updatedProfile.info.pronouns}
                                onChange={changeProfile}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Based In</Form.Label>
                            <Form.Control
                                name="location"
                                type="text"
                                value={updatedProfile.info.location}
                                placeholder={updatedProfile.info.location}
                                onChange={changeProfile}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                name="email"
                                type="text"
                                value={updatedProfile.info.email}
                                placeholder={updatedProfile.info.email}
                                onChange={changeProfile}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Twitter</Form.Label>
                            <Form.Control
                                name="twitter"
                                type="text"
                                value={updatedProfile.info.twitter}
                                placeholder={updatedProfile.info.twitter}
                                onChange={changeProfile}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}