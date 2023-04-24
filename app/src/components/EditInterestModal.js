import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


export default function EditInterestModal(props) {
    const show = props.show;
    const handleClose = props.handleClose;
    const profileData = props.profileData;
    const [updated, setUpdated] = useState(props.profileData);

    const changeProfile = (event) => {
        const temp = { ...profileData, info: { ...profileData.info, [event.target.name]: event.target.value } };
        setUpdated(temp);
    }

    const handleSave = (event) => {
        props.changeProfile(updated);
        handleClose();
    }

    const addInterest = (event) => {
        // const temp = updated.tournaments;
        // temp.push(event.target.value);
        // setUpdated({ ...profileData, tournaments: temp });
        // props.changeProfile(updated);
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
                                value={updated.info.pronouns}
                                placeholder={updated.info.pronouns}
                                onChange={changeProfile}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button className='save' onClick={handleSave}>Save</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}