import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { getDetailsAPI } from '../Services/allAPIs'
import { Table } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


function Details() {
  const navigate = useNavigate()
  const [allStudents, setAllStudents] = useState([])
  const getDetails = async () => {
    const result = await getDetailsAPI()
    if (result.status == 200) {
      setAllStudents(result.data)
    } else {
      console.log(result);
    }
  }

  useEffect(() => {
    getDetails()

  }, [])
  console.log(allStudents);

  const handleBack = () => {
    navigate('/register')
  }

  return (
    <>
      <Header />
      <div>
        <h2 className='text-center fw-bold mb-5 mt-3'> STUDENT DETAILS</h2>

        <div className='container'>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Address</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>DOB</th>
                <th>Gender</th>
                <th>Course</th>
              </tr>
            </thead>
            {allStudents?.map((student, index) => (
              <tbody>
                <tr>
                  <td>{student.firstName}</td>
                  <td>{student.lastName}</td>
                  <td>{student.address}</td>
                  <td>{student.email}</td>
                  <td>{student.mobile}</td>
                  <td>{student.date}</td>
                  <td>{student.gender}</td>
                  <td>{student.course}</td>
                </tr>
              </tbody>
            ))}

          </Table>
          <button onClick={handleBack} className='btn btn-danger'>Back</button>
        </div>

      </div>
    </>
  )
}

export default Details