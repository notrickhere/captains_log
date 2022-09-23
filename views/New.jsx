const React = require('react')

class New extends React.Component{
    render(){
        return(
            <>
                <form action='/logs' methond='POST'></form>
                Title: <input type='text' />
                <br />
                Entry: <input type='textarea' />
                <br />
                shipIsBroken: <input type='checkbox' />
                <br />
                Submit <input type='submit' />
            </>
            
        )
    }
}

module.exports = New