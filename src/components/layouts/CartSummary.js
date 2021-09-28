import React from 'react'
import { Dropdown, Label } from 'semantic-ui-react'
import { useSelector } from "react-redux"
import { NavLink } from 'react-router-dom'

function CartSummary() {

    const { cartItems } = useSelector(state => state.cart)

    return (
        <div>
            <Dropdown item text="Sepetiniz">
                <Dropdown.Menu>
                    {
                        cartItems.map(cartItem => (
                            <Dropdown.Item key={cartItem.product.id}>
                                {cartItem.product.name}
                                <Label>
                                    {cartItem.quanity}
                                </Label>
                            </Dropdown.Item>
                        ))
                    }
                    <Dropdown.Divider />
                    <Dropdown.Item as={NavLink} to="/cart"></Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

export default CartSummary
