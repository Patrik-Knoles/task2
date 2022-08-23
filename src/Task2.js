import React from 'react';

//Using a component to Connect to API

class Task2 extends React.Component{

    constructor(){
        super()
        this.state = {
            items:[],
            error:""
        }
    }
    render(){
        let item_recieved_array = this.state.items;
        let counter = 0
        let item_html = item_recieved_array.map(function(value,key){
            counter = counter + 1
            return<tr>
                <td>{counter}</td>
                <td>{value.state}</td>
                <td>{value.confirmedCases}</td>
                <td>{value.casesOnAdmission}</td>
                <td>{value.discharged}</td>
                <td>{value.death}</td>
            </tr>
        })
        return(
            <>
                
                <table className='table table-hover table-striped'>
                    <thead>
                        <tr>
                            <th>S/N</th>
                            <th>State</th>
                            <th>Confirmed Cases</th>
                            <th>Cases on Admission</th>
                            <th>Discharged</th>
                            <th>Deaths</th>
                        </tr>
                    </thead>
                    <tbody>
                            {item_html}
                    </tbody>
                </table>
            </>
        )
    }

        //Connecting to API and displaying it
    componentDidMount(){
        //The syntax  to connect to API in JAvascript is quite easy to understand. The syntax is;
        //fetch("https://endpoint.url")
        // .then(()=>{})
        // .then(()=>{})
        // .catch((error)=>{})

        fetch("https://covidnigeria.herokuapp.com/api")
        .then((res) => {
            return res.json()
        })

        .then((data)=>{
            //Work with Json here
            this.setState({items:data.data})
            console.log(data.data)
        })

        .catch((err)=>{
            //Do something here to catch an error
            this.setState({error:"Please check your internet and try again"})
        })
    }

    //shouldComponentUpdate return a boolean that works hand in hand with the render function. once it returns true, it calls the render function, but when it returns false it does not call the render function

}

export default Task2