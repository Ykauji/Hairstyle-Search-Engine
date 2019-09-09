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
		this.setState(() => {
			return {[event.target.name]: event.target.value}
		});
	}

	render() {
		const formStyle =  {
			display: "flex",
    		flexWrap: "wrap",
    		position: "relative",
    		top: '20px',
    		margin: 'auto',
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
							value={this.props.parentState.gender || ''}
							onChange={this.props.handleDropdownChange}
							inputProps={{
								name: "gender", 
								id: "gender-helper",
							}}
						> 
							<MenuItem value={undefined}>All</MenuItem>
							<MenuItem value={"male"}>Male</MenuItem>
							<MenuItem value={"female"}>Female</MenuItem>
						</Select>
				</FormControl>
				<FormControl style={formControl}>
					<InputLabel>Length</InputLabel>
						<Select
							value={this.props.parentState.length || ''}
							onChange={this.props.handleDropdownChange}
							inputProps={{
								name: "length", 
								id: "length-helper",
							}}
						>  
							<MenuItem value={undefined}>Any</MenuItem>
							<MenuItem value={"short"}>Short</MenuItem>
							<MenuItem value={"medium"}>Medium</MenuItem>
							<MenuItem value={"long"}>Long</MenuItem>
						</Select>
				</FormControl>
				<FormControl style={formControl}>
					<InputLabel>Thickness</InputLabel>
						<Select
							value={this.props.parentState.thickness || ''}
							onChange={this.props.handleDropdownChange}
							inputProps={{
								name: "thickness", 
								id: "thickness-helper",
							}}
						>  
							<MenuItem value={undefined}>Any</MenuItem>
							<MenuItem value={"thin"}>Thin</MenuItem>
							<MenuItem value={"average"}>Average</MenuItem>
							<MenuItem value={"thick"}>Thick</MenuItem>
						</Select>
				</FormControl>
				<FormControl style={formControl}>
					<InputLabel>Curliness</InputLabel>
						<Select
							value={this.props.parentState.perm || ''}
							onChange={this.props.handleDropdownChange}
							inputProps={{
								name: "perm", 
								id: "perm-helper",
							}}
						>  	
							<MenuItem value={undefined}>Any</MenuItem>
							<MenuItem value={"straight"}>Straight</MenuItem>
							<MenuItem value={"wavy"}>Wavy</MenuItem>
							<MenuItem value={"curly"}>Curly</MenuItem>
						</Select>
				</FormControl>
			</form>
		)
	}
}

export default DropdownGrid