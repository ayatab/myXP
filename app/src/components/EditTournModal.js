import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


export default function EditTournModal(props) {
    const show = props.show;
    const handleClose = props.handleClose;
    const profileData = props.profileData;
    const [updated, setUpdated] = useState(props.profileData);

    const changeProfile = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        const tournamentId = event.target.dataset.tournamentId;
        setUpdated(updated => ({
            ...updated,
            tournaments: updated.tournaments.map(exp => {
                if (exp.id === parseInt(tournamentId)) {
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

    const handleSave = (event) => {
        props.changeProfile(updated);
        handleClose();
    }

    const addtournament = () => {
        const newtournament = {
            id: updated.tournaments.length + 1,
            place: 0,
            name: '',
            month: '',
            day: '',
            year: '',
            tier: '',
            result: '',
            team: ''
        };
        const temp = updated.tournaments;
        temp.push(newtournament)
        setUpdated({ ...profileData, tournaments: temp });
        props.changeProfile(updated);
    }

    const tournamentBlock = updated.tournaments.map((tournament) => {
        const component = (
            <Form className='form-block' key={tournament.id} data-tournament-id={tournament.id}>
                <h5 className='modal-section-head'>{"Tournament " + tournament.id}</h5>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Tournament Name</Form.Label>
                    <Form.Control
                        name="name"
                        type="text"
                        value={tournament.name}
                        placeholder={tournament.name}
                        onChange={changeProfile}
                        data-tournament-id={tournament.id}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Team Name</Form.Label>
                    <Form.Control
                        name="team"
                        type="text"
                        value={tournament.team}
                        placeholder={tournament.team}
                        onChange={changeProfile}
                        data-tournament-id={tournament.id}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                    <Form.Label>Start Date</Form.Label>
                    <div className="d-flex row">
                        <div className='col'>
                            <Form.Select aria-label="Default select example" onChange={changeProfile} name="month" value={tournament.month} data-tournament-id={tournament.id}>
                                <option>Month</option>
                                <option value="1">January</option>
                                <option value="2">February</option>
                                <option value="3">March</option>
                                <option value="4">April</option>
                                <option value="5">May</option>
                                <option value="6">June</option>
                                <option value="7">July</option>
                                <option value="8">August</option>
                                <option value="9">September</option>
                                <option value="10">October</option>
                                <option value="11">November</option>
                                <option value="12">December</option>
                            </Form.Select>
                        </div>
                        <div className='col'>

                            <Form.Control
                                type="day"
                                placeholder="Day"
                                name="day"
                                onChange={changeProfile}
                                value={tournament.day}
                                data-tournament-id={tournament.id}
                            />
                        </div>
                        <div className='col'>
                            <Form.Control
                                type="year"
                                placeholder="Year"
                                name="year"
                                onChange={changeProfile}
                                value={tournament.year}
                                data-tournament-id={tournament.id}
                            />
                        </div>
                    </div>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                    <div className="d-flex row">
                        <div className='col'>
                            <Form.Label>Place</Form.Label>
                            <Form.Select aria-label="Default select example" onChange={changeProfile} name="place" value={tournament.place} data-tournament-id={tournament.id}>
                                <option>Place</option>
                                <option value="1">1st</option>
                                <option value="2">2nd</option>
                                <option value="3">3rd</option>
                                <option value="4">4th</option>
                                <option value="5">5th</option>
                                <option value="6">6th</option>
                                <option value="7">7th</option>
                                <option value="8">8th</option>
                                <option value="9">9th</option>
                                <option value="10">10th</option>
                                <option value="11">11th</option>
                                <option value="12">12th</option>
                            </Form.Select>
                        </div>
                        <div className='col'>
                            <Form.Label>Result</Form.Label>
                            <Form.Control
                                type="day"
                                placeholder="Ex: 2-13"
                                name="result"
                                onChange={changeProfile}
                                value={tournament.result}
                                data-tournament-id={tournament.id}
                            />
                        </div>
                        <div className='col'>
                            <Form.Label>Tier</Form.Label>
                            <Form.Select aria-label="Default select example" onChange={changeProfile} name="tier" value={tournament.tier} data-tournament-id={tournament.id}>
                                <option>Tier</option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                            </Form.Select>
                        </div>
                    </div>
                </Form.Group>
            </Form>
        );
        return component;
    });

    return (
        <div>
            <Modal className="modal-xl" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Tournaments</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {tournamentBlock}
                    <Button className='add' onClick={addtournament}>+ Add Tournament</Button>
                </Modal.Body>
                <Modal.Footer>
                    <Button className='save' onClick={handleSave}>Save</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}