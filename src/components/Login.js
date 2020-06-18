import React,{ useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Login = () => {

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	// const [alert,setAlert] 		  = useState('');
	const [error,setError] 		  = useState('');

	const API_URL = "http://localhost:3001";

	const onChangeUsername = (e) => {
		// console.log(e.target.value);
		const value = e.target.value;
		setUsername(value);
		setError('');

	}

	const onChangePassword = (e) => {
		// console.log(e.target.value);
		const value = e.target.value;
		setPassword(value);
		setError('');
	}

	const submitLogin = () => {
		
		const data = {
			username : username,
			password : password
		}

		axios.post(API_URL+'/login',data)
		.then(result => {
			if(result) {

				if(result.data){
					// setAlert(result.data.message);
					setUsername('');
					setPassword('');
					/*setTimeout(() => {
						setAlert('')
					},3000)*/
				}
			}

			console.log(result);

		})
		.catch( (error) => {

			console.log(error)

		    if (error.response) {
				
				setError(error.response.data.message);
		    } 
 		 });

	}

	return (
		<div style={{marginTop:"200px"}}>
			<div className="container">
			<h2 align="center">Halaman Login</h2>
				<div className="row justify-content-center">
					<div className="col-md-6">
						<div className="card p-4">
							<div className="card-body">
								
								<div className="form-group">
									<label>Username</label>
									<input type="text" placeholder="Username" className="form-control" value={username} onChange={onChangeUsername}/>
								</div>

								<div className="form-group">
									<label>Password</label>
									<input type="password" placeholder="Password" className="form-control" value={password} onChange={onChangePassword}/>
								</div>

								<div className="row">
									<div className="col-md-6">
										<button className="btn btn-primary" onClick={submitLogin}>Login</button>
									</div>

									<div className="col-md-6 text-right">
										<Link to="/daftar">Halaman Daftar</Link>
									</div>
								</div>

									
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Login