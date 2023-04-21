import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


export default function EditProfileModal(props) {
    const show = props.show;
    const handleClose = props.handleClose;
    // const profileData = props.profileData;
    const [profileData, setProfileData] = useState(props.profileData);

    const changeProfile = (event) => {
        const updatedProfile = { ...profileData, experience: { ...profileData.experience, [event.target.name]: event.target.value } };
        setProfileData(updatedProfile);
        props.changeProfile(updatedProfile);
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
                    <Modal.Title>Edit Experience</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* <div className="required-text">
                        <span className="red">*</span><span>Required field</span>
                    </div> */}
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                name="role"
                                type="text"
                                value={profileData.experience.role}
                                placeholder={profileData.experience.role}
                                onChange={changeProfile}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                            <Form.Label>Start Date</Form.Label>
                            <div className="d-flex">
                                <Form.Select aria-label="Default select example" onChange={changeProfile} name="start_month">
                                    <option>Month</option>
                                    <option value="Jan.">January</option>
                                    <option value="Feb.">February</option>
                                    <option value="Mar.">March</option>
                                    <option value="Apr.">April</option>
                                    <option value="May.">May</option>
                                    <option value="Jun.">June</option>
                                    <option value="Jul.">July</option>
                                    <option value="Aug.">August</option>
                                    <option value="Sep.">September</option>
                                    <option value="Oct.">October</option>
                                    <option value="Nov.">November</option>
                                    <option value="Dec.">December</option>
                                </Form.Select>
                                <Form.Control
                                    type="day"
                                    placeholder={profileData.experience.start_year}
                                    name="start_year"
                                    onChange={changeProfile}
                                    value={profileData.experience.start_year}
                                />
                            </div>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                            <Form.Label>End Date</Form.Label>
                            <div className="d-flex">
                                <Form.Select aria-label="Default select example" onChange={changeProfile} name="end_month">
                                    <option>Month</option>
                                    <option value="Jan.">January</option>
                                    <option value="Feb.">February</option>
                                    <option value="Mar.">March</option>
                                    <option value="Apr.">April</option>
                                    <option value="May.">May</option>
                                    <option value="Jun.">June</option>
                                    <option value="Jul.">July</option>
                                    <option value="Aug.">August</option>
                                    <option value="Sep.">September</option>
                                    <option value="Oct.">October</option>
                                    <option value="Nov.">November</option>
                                    <option value="Dec.">December</option>
                                </Form.Select>
                                <Form.Control
                                    type="day"
                                    placeholder={profileData.experience.end_year}
                                    name="end_year"
                                    onChange={changeProfile}
                                    value={profileData.experience.end_year}
                                />
                            </div>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="checkbox">
                            <div key={`default-checkbox`} className="mb-3">
                                <Form.Check
                                    type="checkbox"
                                    id="checkbox"
                                    label="I am currently in this position"
                                    onClick={checkHandler}
                                />
                            </div>
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                className="description-box"
                                as="textarea"
                                rows={5}
                                name="description"
                                value={profileData.experience.description}
                                placeholder={profileData.experience.description}
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