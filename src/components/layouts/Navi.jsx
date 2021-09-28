import React, {useState} from 'react'
import { Menu } from 'semantic-ui-react'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'

function Navi() {
    const [isAuthenticated, setIsAuthenticated] = useState(true)

    function handleSignIn() {
        setIsAuthenticated(true)
    }

    function handleSignOut() {
        setIsAuthenticated(false)
    }

    return (
        <div>
            <Menu>
                <Menu.Item>Anasayfa</Menu.Item>
                <Menu.Item>Ürünler</Menu.Item>
                <Menu.Menu position="right">
                    {isAuthenticated? <SignedIn  signOut={handleSignOut}></SignedIn>:<SignedOut bisey="12" signIn={handleSignIn}></SignedOut>}
               </Menu.Menu>
            </Menu>
        </div>
    )
}

export default Navi
