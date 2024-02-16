import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { registerAPI } from '../Services/allAPIs';
import { useNavigate } from 'react-router-dom';

function Auth() {
    const navigate = useNavigate()
    const [userData, setUserData] = useState({
        firstName: '', lastName: '', address: '', email: '', gender: '', mobile: '', password: '', date: '', course: ''
    })
    console.log(userData);




    const handleRegister = async (e) => {
        e.preventDefault()
        console.log(userData);
        const { firstName, lastName, address, email, gender, mobile, password, date, course } = userData
        if (!firstName || !lastName || !address || !email || !gender || !mobile || !password || !date || !course) {
            toast.warning('Please fill the form completely')
        } else {
            try {
                const result = await registerAPI(userData)
                console.log(result);
                if (result.status == 200) {
                    setUserData({ firstName: '', lastName: '', address: '', email: '', gender: '', mobile: '', password: '', date: '', course: '' })
                    setTimeout(() => {
                        navigate('/details')
                    }, 2000);

                } else {
                    console.log(result.response.data);
                }
            } catch (err) {
                console.log(err);
            }
        }
    }


    return (
        <>
            <Header />
            <div className='container-fluid '>
                <div className='row p-5'>
                    <div className="col-lg-5">
                        <img className='img-fluid' src="https://i.pinimg.com/736x/71/da/54/71da54ba1000c33f01d959993b25f86d.jpg" alt="no image" />
                    </div>
                    <div className="col-lg-7 ">
                        <h1 className=''>Apply as a Student</h1>
                        <hr />
                        <div className='row'>
                            <div className='col-lg-6'>
                                <Form>
                                    <Form.Group className="mb-3" >
                                        <Form.Label>First name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter your first name" onChange={e => setUserData({ ...userData, firstName: e.target.value })} value={userData.firstName} />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Last name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter your last name" onChange={e => setUserData({ ...userData, lastName: e.target.value })} value={userData.lastName} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" >
                                        <Form.Label> Address</Form.Label>
                                        <Form.Control type="text" placeholder="Enter your address" onChange={e => setUserData({ ...userData, address: e.target.value })} value={userData.address} />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" placeholder="Enter your email" onChange={e => setUserData({ ...userData, email: e.target.value })} value={userData.email} />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Gender</Form.Label>
                                        <Form.Control type="text" placeholder="Enter your gender" onChange={e => setUserData({ ...userData, gender: e.target.value })} value={userData.gender} />
                                    </Form.Group>

                                </Form>

                            </div>
                            <div className="col-lg-6">
                                <Form>
                                    <Form.Group className="mb-3" >
                                        <Form.Label>Mobile</Form.Label>
                                        <Form.Control type="text" placeholder="Enter your mobile number" onChange={e => setUserData({ ...userData, mobile: e.target.value })} value={userData.mobile} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" >
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Enter your password" onChange={e => setUserData({ ...userData, password: e.target.value })} value={userData.password} />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Date of birth</Form.Label>
                                        <Form.Control type="date" placeholder="Enter your date of birth" onChange={e => setUserData({ ...userData, date: e.target.value })} value={userData.date} />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Course</Form.Label>
                                        <Form.Control type="text" placeholder="Enter your course" onChange={e => setUserData({ ...userData, course: e.target.value })} value={userData.course} />
                                    </Form.Group>
                                    <button onClick={handleRegister} className='btn btn-danger'>Register</button>

                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default Auth