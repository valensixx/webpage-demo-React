import React from "react";

export default function User({user, setUser}) {  //code works the same as using props in User(props)
    return (
        <>
            <div>
                <img src={user.avatar} />
            </div>
            <div>{user.first_name}{user.last_name}</div>
            <button onClick={() =>
                setUser(null)}>Back
            </button>
        </>
    );
}