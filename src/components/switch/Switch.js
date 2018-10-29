import React, { Component } from 'react';
import '../../../node_modules/bulma/css/bulma.min.css';
import '../../../node_modules/bulma-extensions/bulma-switch/dist/css/bulma-switch.min.css';

class Switc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("http://localhost:5000/api/v1/test/select2")
            .then(res => res.json())
            .then(result => {
                this.setState({
                    isLoaded: true,
                    items: result
                });
            }
            )
    }

    render() {
        return (
            <div>
                {JSON.stringify(this.state.items)}
                <div class="field">
                    <input id="switchRtlExample" type="checkbox" name="switchRtlExample" class="switch is-rtl" />
                    <label for="switchRtlExample">Switch example</label>
                </div>
            </div>
        )
    }
}

export default Switc;