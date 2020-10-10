import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import updateBio from '../../helpers/updateBio';

const AddBioModal = props => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.sessionReducer.user);
    const { show, handleCloseModal } = props;
    const [bio, setBio] = useState('');

    const handleChangeBio = useCallback(event => setBio(event.target.value), [bio])

    const handleSubmitBio = useCallback(() => {
        dispatch(updateBio(user._id, { bio }))
        handleCloseModal();
    }, [bio]);

    return (
        <Modal
            show={show}
            onHide={handleCloseModal}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Profile Bio</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <div className="form-group">
                        <textarea
                            value={bio}
                            onChange={handleChangeBio}
                            className="form-control"
                            id="bio"
                            name="bio"
                            rows="10"
                        ></textarea>
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModal}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSubmitBio}>
                    Submit
                </Button>
            </Modal.Footer>
        </Modal >
    )
}

export default AddBioModal;