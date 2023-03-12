import { StyledUserList, StyledButton } from "../css/UserListStyled"
export function UserList({ users, deleteUser }) {
    return <StyledUserList>
        {users.map(({ id, name, email, avatar, hasJob }) => {
            return <li key={id}>
                <p>Name: {name}</p>
                <p>Email: {email}</p>
                <p>Has Job: {hasJob.toString()}</p>
                <StyledButton onClick={() => deleteUser(id)}>Delete</StyledButton>
            </li>
        })}
    </StyledUserList>
}