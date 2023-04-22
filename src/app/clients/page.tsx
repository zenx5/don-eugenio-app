import styles from './page.module.css'

export default async function ListClientsPage () {

    const response = await fetch('http://localhost:3000/api/clients', { cache:'no-cache' })
    const users = await response.json()

    return (<table className={styles.table}>
        <thead>
            <tr>
                <th>ID</th>
                <th>display_name</th>
                <th>user_email</th>
                <th>user_registered</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {users.map((user:any) => (
                <tr key={user?.ID}>
                    <td>{user?.ID}</td>
                    <td>{user?.display_name}</td>
                    <td>{user?.user_email}</td>
                    <td>{user?.user_registered}</td>
                    <td>actions</td>
                </tr>
            ))}
        </tbody>
    </table>)
}