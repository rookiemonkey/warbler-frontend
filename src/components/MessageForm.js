import React, { Component } from 'react';
import { connect } from 'react-redux';
import postNewMessage from '../helpers/postMessage';

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
        this.setState({ message: '' });
        this.props.history.push("/");
    }

    render() {

        return (

            <div className="row justify-content-md-center text-center" id="form-container">
                <div className="col-md-6">
                    <form
                        id="message-form"
                        onSubmit={this.handleNewMessage}
                    >

                    <input
                        type="text"
                        id="message-input"
                        name="message"
                        className="form-control"
                        value={this.state.message}
                        onChange={this.handleChange}
                    />

                    <button
                        id="message-button"
                        className="btn btn-success pull-right"
                        type="submit"
                    >Post Message</button>

                    </form>
                </div>
            </div>

        )
    }
}

function mapStateToProps(state) {
    return {
        errors: state.errorReducer
    }
}

export default connect(mapStateToProps, { postNewMessage })(MessageForm)