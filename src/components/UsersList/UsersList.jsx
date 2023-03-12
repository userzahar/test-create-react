
export function UserList({ users, deleteUser }) {
    return <ul>
        {users.map(({ id, name, email, avatar, hasJob }) => {
            return <li key={id}>
                <p>Name: {name}</p>
                <p>Email: {email}</p>
                <p>Has Job: {hasJob.toString()}</p>
                <button onClick={() => deleteUser(id)}>Delete</button>
            </li>
        })}
    </ul>
}