import React,{useState} from 'react';
import {Link} from 'react-router-dom';

const Daftar = () => {

	const [username, setUsername] = useState('');
	const [email, setEmail] 	  = useState('');
	const [password, setPassword] = useState('');

	const onChangeUsername = (e) => {
		// console.log(e.target.value);
		const value = e.target.value;
		setUsername(value);

	}

	const onChangeEmail = (e) => {
		// console.log(e.target.value);
		const value = e.target.value;
		setEmail(value);
	}

	const onChangePassword = (e) => {
		// console.log(e.target.value);
		const value = e.target.value;
		setPassword(value);
	}

	

	return(
		<div style={{marginTop:"200px"}}>
			<div className="container">
			<h2 align="center">Halaman Daftar</h2>
				<div className="row justify-content-center">
					<div className="col-md-6">
						<div className="card">
							<div className="card-body">

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
								<input type="text" placeholder="Password" className="form-control" value={password} onChange={onChangePassword}/>
							</div>

							<button className="btn btn-primary">Daftar</button>{' '}
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