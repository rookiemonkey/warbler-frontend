import React, { Component } from 'react';
import { connect } from 'react-redux';
import postNewMessage from '../../helpers/postMessage';
import fetchMessage from "../../helpers/setMessages";

class MessageForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: ''
        }
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleNewMessage = e => {
        e.preventDefault();
        this.props.postNewMessage(this.state.message);
        this.setState({ message: '' }, () => { this.props.fetchMessage() });
    }

    render() {

        return (

            <div id="form-container" className="message-form-timeline-container">

                <h2 className="message-form-timeline-header">What's on your mind right now?</h2>
                <form
                    id="message-form"
                    className="message-form-timeline"
                    onSubmit={this.handleNewMessage}
                >

                    <input
                        type="text"
                        id="message-input"
                        name="message"
                        className="form-control message-form-timeline-input"
                        value={this.state.message}
                        onChange={this.handleChange}
                        required={true}
                    />

                    <button
                        id="message-button"
                        className="btn btn-success pull-right message-form-timeline-button"
                        type="submit"
                    >Post Message</button>

                </form>

            </div>

        )
    }
}

function mapStateToProps(state) {
    return {
        errors: state.errorReducer
    }
}

export default connect(mapStateToProps, { postNewMessage, fetchMessage })(MessageForm)