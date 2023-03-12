import { Component } from "react";
import { Button } from "./Button/Button";
import { data } from "./data";
import { Form } from './Form/Form';
import { UserList } from "./UsersList/UsersList";
import { nanoid } from "nanoid";
export class App extends Component {
    state = {
        users: data,
        isFormShown: false,
    }
    deleteUser = (id) => {
        this.setState((prevState) => {
            return {
                users: prevState.users.filter(user => user.id !== id)
            }
        });
    }
    openForm = () => {
        this.setState({ isFormShown: true })
    }
    closeForm = () => {
        this.setState({ isFormShown: false })
    }
    addUser = user => {
        const newUser = {
            ...user,
            hasJob: false,
            id: nanoid(),
        }
        this.setState(prevState => ({ users: [...prevState.users, newUser] }))
    }
    render() {
        const { users, isFormShown } = this.state;
        return (<div>
            <UserList users={users} deleteUser={this.deleteUser} />
            {isFormShown ? (
                <Form addUser={this.addUser} closeForm={this.closeForm} />) : (<Button text="Add User" clickHeandler={this.openForm} />)}
        </div>)
    }
}