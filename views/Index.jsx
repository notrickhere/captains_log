const React = require('react')
const DefaultLayout = require("./layouts/Default");
class Index extends React.Component {
    render() {
        const { logs } = this.props;
        console.log(logs);
        return (
            <DefaultLayout title={"LogDashboard"}>
                <ul>
                    {logs.map((log, i) => {
                        return (
                            <li key={i}>
                                {/* eachLog */}
                                <a href={`/logs/${log.id}`}>{log.title} </a>  

                                {/* Edit */}
                                <>
                                <a href={`/logs/${log._id}/edit`}>Edit Log</a> 
                                </>
                                   
                                {/* Delete */}
                                <form
                                    action={`/logs/${log._id}?_method=DELETE`}
                                    method="POST"
                                >
                                    <input type="submit" value="DELETE" />
                                </form>
                            </li>
                        );
                    })}
                </ul>
            </DefaultLayout>
        );
    }
}


module.exports = Index