import React, { Component } from "react";

import axios from "axios";

import DisplayAnswers from "./DisplayAnswers";

class GetAnswers extends Component {
    state = { data: {} };

    componentDidMount() {
        const questionId = this.props.question;
        console.log(questionId)
        axios
            .get(`http://localhost:3002/questions/${questionId}/answers`)

            .then((response) => {
                console.log(response.data)
                this.setState({
                    data: response.data,
                });
            })

            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        const length =
            this.state.data.answers !== undefined
                ? this.state.data.answers.length
                : 0;
        if (length > 0) {
            return (
                <div>
                    {this.state.data.answers.map((answer) => (
                        <DisplayAnswers answer={answer} key={answer._id} />
                    ))}
                </div>
            );
        } else return <p></p>;
    }
}

export default GetAnswers;
