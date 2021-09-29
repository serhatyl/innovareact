import * as Yup from "yup"

import React from 'react'
import {  Form, Formik } from "formik"
import InnovaTextInput from "../../utilities/customFormControls/InnovaTextInput"
import { Button } from "semantic-ui-react"

function ProductAdd() {

const initialValues = {name:"",unitPrice:10, unitsInStock:1, categoryId:1}

const schema = Yup.object({
    name:Yup.string().required("Ürün adı zorunlu"),
    unitPrice:Yup.number().required("Ürün fiyatı zorunludur"),
    unitsInStock:Yup.number().required("Stok adedi zorunludur").positive().integer(),
    categoryId:Yup.number().required("Kategori zorunludur").integer().positive()

})

    return (
        <Formik initialValues={initialValues} validationSchema={schema} onSubmit={(values)=>{
            console.log(values)
        }}>
            <Form className="ui form">
                <InnovaTextInput name="name" placeholder="Ürün adı"/>
                <InnovaTextInput name="categoryId" placeholder="Kategori"/>
                <InnovaTextInput name="unitPrice" placeholder="Fiyatı"/>
                <InnovaTextInput name="unitsInStock" placeholder="Stok adedi"/>    
                <Button color="green" type="submit">Ekle</Button>          
            </Form>
        </Formik>
    )
}

export default ProductAdd
