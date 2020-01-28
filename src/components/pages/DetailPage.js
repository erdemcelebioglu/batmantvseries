import React, { Component } from 'react';
import DetailPageCard from '../DetailPageCard';

class DetailPage extends Component {

    state = {
        data: null
    }

    componentDidMount() {
        fetch(`https://api.tvmaze.com/shows/${this.props.match.params.id}`)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        data: result
                    });
                }
            )

    }


    render() {


        return (
            <div>
                <DetailPageCard details={this.state.data} />
            </div >
        )
    }
}
export default DetailPage;
