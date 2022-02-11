import React from "react";
import './App2.css';
class App2 extends React.Component {
   
    // Constructor 
    constructor(props) {
        super(props);
   
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }
   
    // ComponentDidMount is used to
    // execute the code 
    componentDidMount() {
		//const { userName } = this.props.match.params;
        //fetch("https://jsonplaceholder.typicode.com/users")
		//fetch("http://localhost:5000/record1/gopa")
		fetch("http://localhost:5000/record1/${this.props.match.params}")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }
    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div> ;
		//const { userName } = this.props.match.params;
        return (
        <div className = "App2">
            <h1> Fetch data from an api in react  </h1>  {
                items.map((item) => ( 
                <ol key = { item.id } >
                    User_Name: { item.pid.ck }, 
                    Full_Name: { item.pid.cID }, 
                    User_Email: { item.pid.name } 
                    </ol>
                ))
            }
        </div>
    );
}
}
   
export default App2;