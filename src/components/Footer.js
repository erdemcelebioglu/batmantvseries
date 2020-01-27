import React from 'react';
import { Container, Divider, Grid, Header, Icon, Image, List, Segment } from 'semantic-ui-react';


const Footer = props => {
	return (
		<div>
			<Segment
				inverted
				style={{ margin: '5em 0em 0em', padding: '2em 0em', }}
				vertical
			>
				<Container textAlign='center'>
					<Grid columns={2} divided stackable inverted>
						<Grid.Row>
							<Grid.Column>
								<Header inverted as='h4' content='Social Media' />
								<List link inverted>
									<List.Item as='a' href='https://www.instagram.com/batman/'> <Icon link name='instagram' /> Instagram</List.Item>
									<List.Item as='a' href='https://twitter.com/DCBatman'><Icon link name='twitter' /> Twitter</List.Item>
									<List.Item as='a' href='https://www.facebook.com/batman'><Icon link name='facebook' /> Facebook</List.Item>
								</List>
							</Grid.Column>
							<Grid.Column>
								<Header inverted as='h4' content='BATMAN TV SERIES WEBSITE' />
								<p>This website is to list Batman Tv Series that is been published and still going on. You can reach the offical social media platforms trought the icons and get more information.</p>
							</Grid.Column>
						</Grid.Row>
					</Grid>
					<Divider inverted section />
					<Image src='https://webcomicms.net/sites/default/files/clipart/129224/batman-icon-129224-6890084.png' centered size='mini' />
					<List horizontal inverted divided link>
						<List.Item as='a' href='#'>Site Map</List.Item>
						<List.Item as='a' href='#'>Contact Us</List.Item>
						<List.Item as='a' href='#'>Terms and Conditions</List.Item>
						<List.Item as='a' href='#'>Privacy Policy</List.Item>
					</List>
				</Container>
			</Segment>
		</div>
	);
};


export default Footer;