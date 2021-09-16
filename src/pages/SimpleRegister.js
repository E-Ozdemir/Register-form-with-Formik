import React from 'react'
import '../App.css';
import {useFormik} from 'formik'
import * as Yup from 'yup';

const initialValues={
    name:"",
    email:"",
    userName:"",
},
const onSubmit=(values)=>{
    console.log('values :>> ', values);
}

function SimpleRegister() {
    const formik = useFormik({
        initialValues,
        onSubmit,

        //--------------manuel FORMIK tanimlamasi-----------

        // validate:values =>{
        //     let errors={}
        //     if (!values.name){
        //         errors.name="Required Area!"
        //     }

        //     if (!values.email){
        //         errors.email="Required Area!"
        //     }
        //     else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        //         errors.email = 'Invalid email address';}

            
        //     if (!values.userName){
        //         errors.userName="Required Area!"
        //     }
        //     return errors
        // }


        //YUP SADECE ALINAN HATA MESAJLARIYLA ILGILI; BASKA BIR ISLEM YAPMIYOR!!!
        validationSchema:Yup.object({
            //isim alani.....
            name:Yup.string()
            .max(10,'Field can not be more than 10 character!')
            .required("Required Field for Name"),
            email:Yup.string()
            .email('Invalid email address')
            .required('Required Field for E-Mail'),
            userName:Yup.string()
            .max(10,'Field can not be more than 15 character!')
            .required('Required Field for User Name'),
        })
    });
    // console.log('formik :>> ', formik);
    // console.log('formik values :>> ', formik.values);
    // console.log('formik.touched :>> ', formik.touched);
    return (
        <div className="container">
            <h1>Simple Form</h1>
            <form className="formStyle" onSubmit={formik.handleSubmit}>
                {/* name */}
                <label  htmlFor="name">Name</label>
                <input type="text" id="name" name="name" onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur}></input>
                {formik.touched.name && formik.errors.name ? <div className='errorStyle'>
                    {formik.errors.name}
                </div>: null}

                {/* email */}
                <label  htmlFor="email">Email</label>
                <input type="text" id="email" name="email" onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur}></input>
                {formik.touched.email && formik.errors.email ? <div className='errorStyle'>
                    {formik.errors.email}
                </div>: null}

                {/* useName */}
                <label htmlFor="userName">User name</label>
                <input type="text" id="userName" name="userName" onChange={formik.handleChange} value={formik.values.userName} onBlur={formik.handleBlur}></input>
                {formik.touched.userName && formik.errors.userName ? <div className='errorStyle'>
                    {formik.errors.userName}
                </div>: null}

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default SimpleRegister

