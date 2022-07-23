import classes from './BreedingReminder.module.css'

const BreedingReminder = (props) => {
    return (
        <>
        <h1>Breeding to Wean Reminder </h1>
        <table border="1" cellPadding="15">
            <tr className={classes.tr}>
                <th>Cage</th><th>21 days Count Down</th>
            </tr>
            <tr>
                <td>EB1</td><td className={classes.error}>-3 days left.</td>
            </tr>
            <tr>
                <td>EB4</td><td>2 days left.</td>
            </tr>
            <tr>
                <td>A14</td><td>12 days left.</td>
            </tr>
        </table>
        </>
     )
}

export default BreedingReminder