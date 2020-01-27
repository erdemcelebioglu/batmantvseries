import React from 'react'
import { Grid, Segment } from 'semantic-ui-react';

const DetailPageCard = ({ details }) => (
    <div style={{ marginTop: "40px" }}>
        <Grid columns={2} divided>
            <Grid.Row stretched>
                <Grid.Column width={6}>
                    <Segment className="detailcardimg"><img alt="img" src={details && details.image.medium} /></Segment>
                </Grid.Column>
                <Grid.Column width={10}>
                    <Segment><h1> {details && details.name}</h1></Segment>
                    <Segment> <h2>Summary</h2> <div dangerouslySetInnerHTML={{ __html: details && details.summary }}></div></Segment>
                </Grid.Column>
            </Grid.Row>
        </Grid>

    </div>
)

export default DetailPageCard;
