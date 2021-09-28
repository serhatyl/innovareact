import React from 'react'
import { Dropdown, Image } from 'semantic-ui-react'

function SignedIn({signOut}) {
    
    return (
        <div>
            <Image avatar spaced="right" src="https://pbs.twimg.com/profile_images/1404479261566713856/_MklDkhx_400x400.jpg" />
            <Dropdown pointing="top left" text="Hoşgeldin Engin">
                <Dropdown.Menu>
                    <Dropdown.Item text="Bilgilerim" />
                    <Dropdown.Item onClick={signOut} text="Çıkış Yap" />
                </Dropdown.Menu>
            </Dropdown>
        </div >
    )
}

export default SignedIn
