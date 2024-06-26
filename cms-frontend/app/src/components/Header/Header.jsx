import React from 'react'
import "./Header.css"
import { Button } from 'flowbite-react'
const Header = ({ user }) => {
    return (
        <div>
            <div className="Wel">
                <h1 className="WELCOME">Welcome Mr. {user.username}! </h1>
                <Button color='teal'>Log Out</Button>
            </div>

        </div>
    )
}

export default Header