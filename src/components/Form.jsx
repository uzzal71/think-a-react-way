import React from "react";

export default class Form extends React.Component {
    state = {
        title: 'JavaScript',
        description: 'JavaScript is awesome',
        library: 'React',
        gender: 'Male'
    }

    handleChange = (e) => {
        if (e.target.type === 'text') {
            this.setState({
                title: e.target.value
            })
        } else if (e.target.type === 'textarea') {
            this.setState({
                description: e.target.value
            })
        } else if (e.target.type === 'select-one') {
            this.setState({
                library: e.target.value
            })
        } else if (e.target.type === 'checkbox') {
            this.setState({
              gender: e.target.name
            });
          }  else {
            console.log('nothing else');
        }       
    }

    submitHandler = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        const {title, description, library, gender} = this.state;
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <p>
                        <input type="text" placeholder="Enter title" value={title} onChange={this.handleChange}/>
                    </p>
                    <p>
                        <textarea name="descripttion" value={description} onChange={this.handleChange}></textarea>
                    </p>
                    <p>
                        <select value={library} onChange={this.handleChange}>
                            <option value="React">React</option>
                            <option value="Angular">Angular</option>
                        </select>
                    </p>
                    <p>
                        <input type="checkbox" name="Male" checked={gender === 'Male'} onChange={this.handleChange}/> <span>Male</span>
                        <input type="checkbox" name="Female" checked={gender === 'Female'} onChange={this.handleChange} /> <span>Female</span>
                    </p>
                    <p>
                        <input type="submit" value="Submit"/>
                    </p>
                </form>
            </div>
        );
    }
}