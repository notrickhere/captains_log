const React = require("react");
const DefaultLayout = require("./layouts/default");

class EditG extends React.Component {
    render() {
        const {gun} = this.props
        return (
            <DefaultLayout title="Edit Page">
                <form
                    action={`/guns/${gun._id}?_method=PUT`}
                    method="POST"
                >
                    Title:{" "}
                    <input type="text" name="title" defaultValue={gun.manufacturer} />
                    <br />

                    Entry:{" "}
                    <input type="text" name="entry" defaultValue={gun.model} />
                    <br />

                    Is Gun Broken:
                    {gun.isGunBroken ? (
                        <input type="checkbox" name="isGunBroken" defaultChecked />
                    ) : (
                        <input type="checkbox" name="isGunBroken" />
                    )}
                    <br />
                    <input type="submit" value="Submit Changes" />
                </form>
            </DefaultLayout>
        );
    }
}
module.exports = EditG;