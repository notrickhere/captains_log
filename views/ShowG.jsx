const React = require('react')
const DefaultLayout = require('./layouts/Default')
class ShowG extends React.Component {
    render() {
        const {gun} = this.props;
        return (
            <DefaultLayout title={"Gun Profile"}>
                <div>
                    <nav>
                        <a href="/guns"> Back To Main</a>
                    </nav>
                    <div className='bigName'>
                        {gun.manufacturer} 
                    </div>
                    
                    <br />
                    {gun.model}
                    <br />
                    {gun.isGunBroken
                        ? "It Broke"
                        : "Not Broke"}
                </div>
            </DefaultLayout>
        );
    }
}


module.exports = ShowG
