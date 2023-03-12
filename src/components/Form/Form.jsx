import { Component } from "react";

class Form extends Component {
    state = {
        name: '',
        email: '',
        avatar: '',
    }
    handleChange = ({ target: { value, name } }) => {
        this.setState({ [name]: value });
    }
    render() {
        const { name, email, avatar } = this.state;
        return <form>
            <label>Name
                <input name="name" type="text" value={name} onChange={this.handleChange} />
            </label>
            <label>Email
                <input name="email" type="email" value={email} onChange={this.handleChange} />
            </label>
            <label>Avatar
                <input name="avatar" type="url" value={avatar} onChange={this.handleChange} />
            </label>
            <button>Save</button>
        </form>
    }
}