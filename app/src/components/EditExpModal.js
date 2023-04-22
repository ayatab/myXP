import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


export default function EditExpModal(props) {
    const show = props.show;
    const handleClose = props.handleClose;
    const profileData = props.profileData;
    const [updated, setUpdated] = useState(props.profileData);

    // const experiences = props.profileData.experience;
    // const [updated, setUpdated] = useState(props.profileData.experience);

    const changeProfile = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        const experienceId = event.target.dataset.experienceId;
        setUpdated(updated => ({
          ...updated,
          experience: updated.experience.map(exp => {
            if (exp.id === parseInt(experienceId)) {
              return {
                ...exp,
                [name]: value
              };
            } else {
              return exp;
            }
          })
        }));
      };

      const checkHandler = (event) => {
        const experienceId = event.target.dataset.experienceId;
        const isChecked = event.target.checked;
        setUpdated(updated => ({
          ...updated,
          experience: updated.experience.map(exp => {
            if (exp.id === parseInt(experienceId)) {
              return {
                ...exp,
                isCurrent: isChecked,
                end_month: isChecked ? '' : exp.end_month,
                end_year: isChecked ? '' : exp.end_year
              };
            } else {
              return exp;
            }
          })
        }));
      };

    const handleSave = (event) => {
        props.changeProfile(updated);
        handleClose();
    }

    const experienceBlock = updated.experience.map((experience) => {

        const component = (
            <Form key={experience.id} data-experience-id={experience.id}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        name="role"
                        type="text"
                        value={experience.role}
                        placeholder={experience.role}
                        onChange={changeProfile}
                        data-experience-id={experience.id}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                    <Form.Label>Start Date</Form.Label>
                    <div className="d-flex">
                        <Form.Select aria-label="Default select example" onChange={changeProfile} name="start_month" value={experience.start_month} data-experience-id={experience.id}>
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
                            placeholder={experience.start_year}
                            name="start_year"
                            onChange={changeProfile}
                            value={experience.start_year}
                            data-experience-id={experience.id}
                        />
                    </div>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                    <Form.Label>End Date</Form.Label>
                    <div className="d-flex">
                        <Form.Select aria-label="Default select example" onChange={changeProfile} name="end_month" value={experience.end_month} data-experience-id={experience.id} disabled={experience.isCurrent}>
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
                            placeholder={experience.end_year}
                            name="end_year"
                            onChange={changeProfile}
                            value={experience.end_year}
                            data-experience-id={experience.id}
                            disabled={experience.isCurrent}
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
                            defaultChecked={experience.isCurrent}
                            data-experience-id={experience.id}
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
                        rows={3}
                        name="description"
                        value={experience.description}
                        // defaultValue={experience.description}
                        placeholder="Write a description"
                        onChange={changeProfile}
                        data-experience-id={experience.id}
                    />
                </Form.Group>
            </Form>
        );
        return component;
    });

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
                    {/* oldform */}
                    {experienceBlock}
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