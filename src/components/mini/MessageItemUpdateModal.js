import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import toUpdateMessage from '../../helpers/updateMessage';

const MessageItemUpdateModal = props => {
    const dispatch = useDispatch();
    const userID = useSelector(state => state.sessionReducer.user._id)
    const { show, handleCloseModal, message, messageID } = props;
    const [text, setText] = useState(message);

    const handleChange = useCallback(event => setText(event.target.value), [text])

    const handleSubmit = useCallback(async () => {
        await dispatch(toUpdateMessage(userID, messageID, text))
        handleCloseModal()
    }, [text])

    return (
        <Modal
            show={show}
            onHide={handleCloseModal}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Update Message</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form method="POST">
                    <div className="form-group">
                        <textarea
                            value={text}
                            onChange={handleChange}
                            className="form-control"
                            id="text"
                            name="text"
                            rows="10"
                        ></textarea>
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModal}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSubmit}>
                    Update
                </Button>
            </Modal.Footer>
        </Modal >
    )
}

export default MessageItemUpdateModal;