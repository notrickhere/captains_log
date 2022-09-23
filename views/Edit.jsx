const React = require("react");
const DefaultLayout = require("./layouts/default");

class Edit extends React.Component {
    render() {
        const {log} = this.props
        return (
            <DefaultLayout title="Edit Page">
                <form
                    action={`/logs/${log._id}?_method=PUT`}
                    method="POST"
                >
                    Title:{" "}
                    <input type="text" name="title" defaultValue={log.title} />
                    <br />

                    Entry:{" "}
                    <input type="text" name="entry" defaultValue={log.entry} />
                    <br />

                    Is Ship Broken:
                    {log.shipIsBroken ? (
                        <input type="checkbox" name="shipIsBroken" defaultChecked />
                    ) : (
                        <input type="checkbox" name="shipIsBroken" />
                    )}
                    <br />
                    <input type="submit" value="Submit Changes" />
                </form>
            </DefaultLayout>
        );
    }
}
module.exports = Edit;