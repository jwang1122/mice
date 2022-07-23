import React from 'react'
import classes from './BreedingReminder.module.css'
const PairingReminder = () => {
    return (
        <>
        <h1>Pairing Reminder will be coming soon.</h1>
        <table border="1" cellPadding="15">
            <tr className={classes.tr}>
                <th>Cage</th><th>21 days Count Down</th>
            </tr>
            <tr>
                <td>A01</td><td>13 days left.</td>
            </tr>
            <tr>
                <td>EB15+++</td><td>2 days left.</td>
            </tr>
        </table>
        </>
    )
}

export default PairingReminder