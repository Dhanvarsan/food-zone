class based components -- 
it is a normal JS class which has a render function that returns a jsx
syntex--
class UserClass extends React.Component { //React.Component or Component (if named import from react)
props in class component -- 
    contructor(props) {
        super(props)
        useState --> this.state = {
            count : 0,
            count1 : 1
        }
        setState({ // "to update state variables in class components"
            count: this.state.count++
        })
    }
    render() {
        return (
            <div>{this.props.name}</div>
        )
    }
}

funtion component - parent -> class component - child ----- !!!
when class is initiated constructor is called, then render method is called.

class component - parent -> class component - child ----- !!!
