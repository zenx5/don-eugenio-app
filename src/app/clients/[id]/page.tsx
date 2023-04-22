import { ButtonForm } from '@/app/components'
import TextField from '@/app/components/TextField/TextField'
import { NextRequest } from 'next/server'
import styles from './page.module.css'

export default async function DetailClientPage ({params}:any) {
    const { id } = params
    const response = await fetch(`http://localhost:3000/api/clients/${id}`)
    const user = await response.json()

    return <form className={styles.form}>
        <div className={styles.row}>
            <TextField label='Name' name='display_name' value={user.display_name} />
            <TextField label='Email' name='user_email' value={user.user_email} />
        </div>
        <div className={styles.row}>
            <ButtonForm
                method='put'
                inputs={['display_name','user_email']}
                url={`/api/clients/${id}`}
            />
        </div>
    </form>
}