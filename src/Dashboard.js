import React, { Component } from 'react';
import {Grid, Row, Col, Jumbotron} from 'react-bootstrap'
import apiData from './example-api-response'

class Dashboard extends Component {
	constructor(props) {
		super(props)
		this.state = {
			neoData: apiData.near_earth_objects
		}
	}

	render() {
		// find the array/date

		// map over each item in the array
		let near_earth_objects = this.state.neoData.map(function(element){
			console.log(element.is_potentially_hazardous_asteroid);
			return (
				<tr className="table-success">
				  <td>{element.name}</td>
				  <td>{element.is_potentially_hazardous_asteroid.toString()}</td>
				  <td>{element.close_approach_data[0].relative_velocity.miles_per_hour}</td>
				  <td>{element.close_approach_data[0].miss_distance.miles}</td>
				</tr>
			)
		})

		return (
		<Grid>
			<Row>
				<Col xs={12}>
					<Jumbotron>
						<h1 className="display-3">Nasa NEO</h1>
						<p className="lead">
							This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.
						</p>
						<hr className="my-4" />
						<p>
							It uses utility classNamees for typography and spacing to space content out within the larger container.
						</p>
						<p className="lead">
							<a className="btn btn-primary btn-lg" href="#" role="button">
								Learn more
							</a>
						</p>
					</Jumbotron>
				</Col>
			</Row>
			<Row>
				<h3>Near Earth Objects for [date]</h3>
				<table class="table table-hover">
					<thead>
						<tr>
						  <th scope="col">Name</th>
						  <th scope="col">Hazardous?</th>
						  <th scope="col">Relative MPH</th>
						  <th scope="col">Miss Distance</th>
						</tr>
					</thead>
					<tbody>
						{near_earth_objects}
					</tbody>
				</table>
			</Row>
		</Grid>
    );
  }
}

export default Dashboard;
