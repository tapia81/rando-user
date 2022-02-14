import { useState } from 'react';

export default function UserSummary(props) {
	const [ showMore, setShowMore ] = useState(false);

	const handleToggle = () => {
		setShowMore((prevState) => !prevState);
	};

	let userInfo;
	let newData;

	if (props.userData !== null) {
		const { username } = props.userData.login;
		const { street, city, state } = props.userData.location;
		const { number, name } = street;
		const { medium } = props.userData.picture;
		newData = [ username, number, name, city, state ];
		let newDataNames = [ 'Username', 'Street Number', 'Street Name', 'City', 'State' ];
		userInfo = (
			<div>
				<div className="container">
					<h2>
						Full Name: {props.userData.name.first} {props.userData.name.last}
					</h2>

					<h2>Email: {props.userData.email}</h2>
					<button onClick={handleToggle}>Show More Info</button>

					<div className="container2">
						{showMore == true ? <img src={medium} alt="" /> : console.log(showMore)}
						<div className="container3">
							{showMore == true ? (
								newData.map((data, key) => {
									return (
										<h2 className="container4" key={key}>
											{newDataNames[key]}: {data}
										</h2>
									);
								})
							) : (
								console.log(showMore)
							)}
						</div>
					</div>
				</div>
			</div>
		);
	} else {
		userInfo = <h2>There is no user data</h2>;
	}
	return <div>{userInfo}</div>;
}
