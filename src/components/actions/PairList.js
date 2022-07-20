import Button from '../UI/Button'
import Card from '../UI/Card'
import Input from '../UI/Input'
import Dropdown from '../UI/Select'

const PairList = (props) => {
    const availableCages = [
        'A06', 'A08', 'A11', 'A03', 'A12', 'WB4'
    ]
    return (
        <Card>

            <form>
                <Input name="maleID" label="Male Mouse ID" value={props.male} />&nbsp;
                <Input name="femaleID" label="Female Mouse ID" value={props.female} />&nbsp;
                <Dropdown name="cageID" label="Cage ID" options={availableCages} />&nbsp;
                <Button type="submit" name='OK' />
            </form>
        </Card>
    )
}

export default PairList