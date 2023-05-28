import React, { useState, useEffect, useSyncExternalStore }  from "react";
import axios from 'axios';
import './StatisticsTable.css'
import {users} from '../mock/Mock'

//component for displaying user statistics

const StatisticsTable = (props) => {
    const [users, setUsers] = useState([]);
    const { quiz } = props; 

    useEffect(() => {
        
        axios.get("http://localhost:8080/user/users/" + quiz.id).then((res)=>{
            setUsers(res.data)
        }) 
        .catch(error => {
            console.error('Error fetching user statistics:', error);
        });

    }, [users]);

    if(users.length != 0) return (
        <div className="stat-content">
            <table>
                <thead>
                <tr className="disabled">
                    <th>User IP</th>
                    <th>Score</th>
                </tr>
            </thead>

            <tbody>
            {users.map((user, index) => (
                <tr key={index}>
                <td>{user.userIP}</td>
                <td>{user.score}</td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );
    else return (
        <p className="text-justify">No statistics yet. Please, create quiz, share it and follow quiz statistics.</p>
    );
};

export default StatisticsTable;