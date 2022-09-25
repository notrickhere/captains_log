const React = require('react')

class NewG extends React.Component{
    render() {
        return (
            <>
                <form action='/guns' method='POST'>
                Manufacturer: <input type='text' name='manufacturer' />
                    <br />
                    Model: <input type='textarea' name='model' />
                    <br />
                    isGunBroken: <input type='checkbox' name='isGunBroken' />
                    <br />
                    <input type='submit' name="" value="Create Gun" />
                </form>
            </>
        )
    }
}

module.exports = NewG