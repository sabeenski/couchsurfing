import React, { Component } from 'react';

class InformationHosts extends Component {
    
    render() {
        return (
            <div>
                {
                     this.props.hosts.map(user => {
                         return(
                            <ul>
                                <li key={user.id}>ID: {user.id}</li>
                                <li>Username: {user.username}</li>
                                <li> Lastname: {user.lastname}</li>
                                <li>Age: {user.age}</li>
                                <li>Gender: {user.gender}</li>
                            </ul>

                         )
                     })

                }
            </div>
        )
    }
    
}

export default InformationHosts;
   