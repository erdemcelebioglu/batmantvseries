import React from 'react'
import { Card, Icon, Button, Image, GridColumn } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
const MovieCard = ({ movie }) => (
  <GridColumn>
    <Card>
      <Image src={movie.show.image.medium} wrapped ui={false} />
      <Card.Content className="cardheader" style={{ height: '6.5rem' }} header={movie.show.name} />
      <Card.Content>
        <Card.Meta>
          Pre. at: {movie.show.premiered}
        </Card.Meta>
        <Card.Description>
          Rating: {movie.show.rating.average}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Link to={"/movies/" + movie.show.id} >
          <Button animated>
            <Button.Content visible>Details</Button.Content>
            <Button.Content hidden>
              <Icon name='arrow right' />
            </Button.Content>
          </Button></Link>
      </Card.Content>
    </Card>
  </GridColumn>
)

export default MovieCard;