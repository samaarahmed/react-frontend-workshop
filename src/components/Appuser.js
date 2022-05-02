import React, { Component } from 'react';
import axios from 'axios';
import userEvent from '@testing-library/user-event';

class Appuser extends Component {
    constructor(props){
        super(props);
        this.state={
            libraryusers:[]
        };
    }
    componentDidMount(){
        axios.get("http://localhost:8080/api/v1/libraryuser")
        .then(responce => {this.setState({libraryusers:responce.data})});
    }
    render() {
        return (
            <div className='container'>
                <table className='table table-striped'>
                    <thead>
                             <tr>
                                <th>Id</th>
                                <th>RegDate</th>
                                <th>Name</th>
                                <th>Email</th>
                            </tr>
                    </thead>
                    <tbody>
                        {
                        this.state.libraryusers.map(libraryuser =>
                        <tr key = {libraryuser.userID}>
                            <td>{libraryuser.userID}</td>                            
                            <td>{libraryuser.regDate}</td>
                            <td>{libraryuser.name}</td>
                            <td>{libraryuser.email}</td>

                        </tr>
                        )
    }

                    </tbody>

                
                </table>
                <button className='btn btn-success'>Submit</button>
            </div>
        );
    }
}

export default Appuser;