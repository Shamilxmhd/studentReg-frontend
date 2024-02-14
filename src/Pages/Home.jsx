import React from 'react'
import Header from '../Components/Header'
import { Link } from 'react-router-dom'


function Home() {
    return (
        <>
            <Header />
            <div className='container d-flex align-items-center'>
                <div className='' style={{ width: '80rem' }}>
                    <div className="row align-items-center mt-5">

                        <div className="col-lg-5">
                            <h1>Education</h1>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus, quasi voluptatem et magni ducimus officia molestiae cum! Fuga, harum esse accusantium obcaecati facere dolore unde ut tempora ea, qui officiis?
                                At laudantium eius deleniti dicta nisi, sit perspiciatis vel ipsam tempore quod corrupti iure incidunt quis doloribus, corporis quo excepturi, illo tenetur voluptates cum quibusdam harum cupiditate tempora! Officiis, reiciendis!</p>
                            <h4>New Student?Click here to <p><Link to={'/register'}><button class="btn btn-danger">Register</button></Link></p></h4>
                        </div>
                        <div className="col-lg-1"></div>
                        <div className="col-lg-6">
                            <img  src="https://media.istockphoto.com/id/1330902575/vector/back-to-school-concept.jpg?s=612x612&w=0&k=20&c=xrrrBt0WhLG1BRjCoUurBncbDmM-vnokQ83sPgVcX5Y=" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home