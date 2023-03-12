import { Component } from "react";
import { Button } from "./Button/Button";
import { data } from "./data";
// console.log("🚀 ~ data:", data)
import { UserList } from "./UsersList/UsersList";
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
    render() {
        const { users } = this.state;
        return (<div>
            <UserList users={users} deleteUser={this.deleteUser} />
            <Button text="Add User" clickHeandler={this.openForm} />
        </div>)
    }
}