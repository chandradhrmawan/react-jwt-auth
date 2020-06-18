import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Daftar = () => {

	const [username, setUsername] = useState('');
	const [email, setEmail] 	  = useState('');
	const [password, setPassword] = useState('');
	const [alert,setAlert] 		  = useState('');
	const [error,setError] 		  = useState('');

	const API_URL = "http://localhost:3001";

	const onChangeUsername = (e) => {
		// console.log(e.target.value);
		const value = e.target.value;
		setUsername(value);
		setError('');

	}

	const onChangeEmail = (e) => {
		// console.log(e.target.value);
		const value = e.target.value;
		setEmail(value);
		setError('');
	}

	const onChangePassword = (e) => {
		// console.log(e.target.value);
		const value = e.target.value;
		setPassword(value);
		setError('');
	}

	const klikDaftar = () => {

		const data = {
			username : username,
			email : email,
			password : password
		}

		axios.post(API_URL+'/daftar',data)
		.then(result => {
			if(result) {

				if(result.data){
					setAlert(result.data.message);
					setUsername('');
					setEmail('');
					setPassword('');
					setTimeout(() => {
						setAlert('')
					},3000)
				}
			}
		})
		.catch(function (error) {
		    if (error.response) {
				setError(error.response.data.message);
		    } 
 		 });
	}
		

	return(
		<div style={{marginTop:"200px"}}>
			<div className="container">
			<h2 align="center">Halaman Daftar</h2>
				<div className="row justify-content-center">
					<div className="col-md-6">
						<div className="card">
							<div className="card-body">

							{
								error && (
									<div className="alert alert-danger">
										{error}
									</div>
								)
							}

							{
								alert && (
									<div className="alert alert-primary">
										{alert}
									</div>
								)
							}
							

							

							<div className="form-group">
								<label>Username</label>
								<input type="text" placeholder="Username" className="form-control" value={username} onChange={onChangeUsername}/>
							</div>

							<div className="form-group">
								<label>Email</label>
								<input type="text" placeholder="Email" className="form-control" value={email} onChange={onChangeEmail}/>
							</div>

							<div className="form-group">
								<label>Password</label>
								<input type="password" placeholder="Password" className="form-control" value={password} onChange={onChangePassword}/>
							</div>

							<button className="btn btn-primary" onClick ={klikDaftar}>Daftar</button>{' '}
							<Link to="/" className="btn btn-warning">Batal</Link>

							</div>
						</div>
						{/*<h2>Halaman Daftar</h2>*/}
					</div>
				</div>
			</div>
		</div>
	)
}

 export default Daftar; 