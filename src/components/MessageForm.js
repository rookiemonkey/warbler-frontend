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

    render() {

        return (

            <form>

            <input
                type="text"
                className="form-control"
                value={this.state.message}
                onchange={this.handleChange}
            />

            <button
                className="btn btn-success pull-right"
                type="submit"
            >Post Message</button>

            </form>

        )
    }
}

function mapStateToProps(state) {
    return {
        errors: state.errorReducer
    }
}

export default connect(mapStateToProps, { postNewMessage })(MessageForm)