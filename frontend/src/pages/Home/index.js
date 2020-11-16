import React, { useEffect } from 'react';
import api from '../../services/api';

export default function Home() {
    useEffect(()=>{
      
    })
    return (
        <div className="container">
            <div id="userFormArea" className="row">
                <div className="col-md-12">
                    <form id="userForm">
                        <div className="form-group">
                            <label>Enter Username</label>
                            <input className="form-control" id="username"></input>
                            <br />
                            <input type="submit" className="btn btn-primary" value="login" />
                        </div>
                    </form>
                </div>
            </div>
            <div id="messageArea" className="row">
                <div className="col-md-4">
                    <div className="well">
                        <h3>Online Users</h3>
                        <ul className="list-group" id="users"></ul>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="chat" id="chat">
                        <form id="messageForm">
                            <div className="form-group" >
                                <label>Enter Message</label>
                                <textarea className="form-control" id="message"></textarea>
                                <br />
                                <input type="submit" className="btn btn-primary" value="send message" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    )
}