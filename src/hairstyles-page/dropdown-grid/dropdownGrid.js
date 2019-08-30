import React from 'react' 
import Grid from '@material-ui/core/Grid';
import { NativeSelect } from '@material-ui/core';
import { InputLabel } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import { Select } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';



class DropdownGrid extends React.Component {
	constructor() {
		super(); 
		this.state = {
			id: undefined,
			name: undefined,
			description: undefined,
			image: undefined,
			likes: undefined,
			length: undefined,
			gender: undefined, 
			thickness: undefined, 
			color: undefined,
			perm: undefined,
		}

		this.onSelectedChange = this.onSelectedChange.bind(this);
	}

	onSelectedChange(event) {
		console.log('poato')

		this.setState((oldValues) => {
			return {[event.target.name]: event.target.value}
		});
	}

	render() {
		const formStyle =  {
			display: "flex",
    		flexWrap: "wrap",
		}

		const formControl = {
			margin: 'auto',
    		minWidth: 120,
		}

		return (
			<form style={formStyle}>
				<FormControl style={formControl}>
					<InputLabel htmlFor="gender-helper">Gender</InputLabel>
						<Select
							value={this.state.gender}
							onChange={this.onSelectedChange}
							inputProps={{
								name: "gender", 
								id: "gender-helper",
							}}
						> 
							<MenuItem value={"Male"}>Male</MenuItem>
							<MenuItem value={"Female"}>Female</MenuItem>
							<MenuItem value={"Other"}>Other</MenuItem>
						</Select>
				</FormControl>
				<FormControl style={formControl}>
					<InputLabel>Length</InputLabel>
						<Select
							value={this.state.length}
							onChange={this.onSelectedChange}
							inputProps={{
								name: "length", 
								id: "length-helper",
							}}
						>  
							<MenuItem value={"Short"}>Short</MenuItem>
							<MenuItem value={"Medium"}>Medium</MenuItem>
							<MenuItem value={"Long"}>Long</MenuItem>
						</Select>
				</FormControl>
				<FormControl style={formControl}>
					<InputLabel>Thickness</InputLabel>
						<Select
							value={this.state.thickness}
							onChange={this.onSelectedChange}
							inputProps={{
								name: "thickness", 
								id: "thickness-helper",
							}}
						>  
							<MenuItem value={"Thin"}>Thin</MenuItem>
							<MenuItem value={"Average"}>Average</MenuItem>
							<MenuItem value={"Thick"}>Thick</MenuItem>
						</Select>
				</FormControl>
				<FormControl style={formControl}>
					<InputLabel>Curliness</InputLabel>
						<Select
							value={this.state.perm}
							onChange={this.onSelectedChange}
							inputProps={{
								name: "perm", 
								id: "perm-helper",
							}}
						>  	
							<MenuItem value={"Straight"}>Straight</MenuItem>
							<MenuItem value={"Wavy"}>Wavy</MenuItem>
							<MenuItem value={"Curly"}>Curly</MenuItem>
						</Select>
				</FormControl>
			</form>
		)
	}
}

export default DropdownGrid