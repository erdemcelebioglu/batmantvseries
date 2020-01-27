import React, { Component } from 'react';
import { Link, NavLink } from "react-router-dom";
import { fixedMenuStyle, menuStyle } from "../helpers/styleHelper";
import { Container, Visibility, Menu, Image } from 'semantic-ui-react';

class Header extends Component {
	state = {
		menuFixed: null,
		overlayFixed: false,
	};

	stickTopMenu = () => this.setState({ menuFixed: null });
	unStickTopMenu = () => this.setState({ menuFixed: null });

	render() {
		const { menuFixed } = this.state;

		return (
			<div>
				<Visibility
					onBottomPassed={this.stickTopMenu}
					onBottomVisible={this.unStickTopMenu}
					once={false}
				>
					<Menu
						borderless
						fixed={menuFixed && 'top'}
						style={menuFixed ? fixedMenuStyle : menuStyle}
					>
						<Container text>
							<Menu.Item as={Link} to="/" exact="true">
								<Image size='mini' src='https://webcomicms.net/sites/default/files/clipart/129224/batman-icon-129224-6890084.png' />
								<Menu.Item header>Batman TV Series</Menu.Item>
							</Menu.Item>
							<Menu.Item as={NavLink} to="/about">
								About
								</Menu.Item>
						</Container>
					</Menu>
				</Visibility>
			</div>
		);
	}
}
export default Header;