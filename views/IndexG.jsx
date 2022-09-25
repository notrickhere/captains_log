const React = require('react')
const DefaultLayout = require('./layouts/Default')
class IndexG extends React.Component{
    render(){
        const {guns} = this.props
        return(
            <DefaultLayout>
                <ul>
                    {guns.map((gun, i) => {
                        return (
                            <li key={i}>
                                {/* eachLog */}
                                <a href={`/guns/${gun.id}`}>{gun.manufacturer} </a>  
                                <br />
                                {/* Edit */}
                                <>
                                <a href={`/guns/${gun._id}/edit`}>Edit Gun</a> 
                                </>
                                   
                                {/* Delete */}
                                <form
                                    action={`/guns/${gun._id}?_method=DELETE`}
                                    method="POST"
                                >
                                    <input type="submit" value="DELETE" />
                                </form>
                            </li>
                        );
                    })}
                </ul>
            </DefaultLayout>
        )
    }
}

module.exports = IndexG