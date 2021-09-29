import { useField } from "formik";
import { FormField, Label } from "semantic-ui-react";


//name, value....
export default function InnovaTextInput({...props}) {
   const [field,meta] =  useField(props)

   return (
       <FormField error={meta.touched && !!meta.error}>
           <input {...field} {...props}/>
           {
               meta.touched && !!meta.error?(
                   <Label pointing basic color="red" content={meta.error}></Label>
               ):null
           }
       </FormField>
   )
}