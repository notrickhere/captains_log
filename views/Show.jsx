const React = require('react')
const DefaultLayout = require("./layouts/Default");
class Show extends React.Component {
    render() {
        const {log} = this.props;
        return (
            <DefaultLayout title={"Log Profile"}>
                <div>
                    <nav>
                        <a href="/logs"> Back To Main</a>
                    </nav>
                    
                    {log.title} 
                    <br />
                    {log.entry}
                    <br />
                    {log.shipIsBroken
                        ? "It Broke"
                        : "Not Broke"}

                    
                </div>
            </DefaultLayout>
        );
    }
}


module.exports = Show