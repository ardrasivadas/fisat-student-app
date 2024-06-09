import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { getValue } from '@testing-library/user-event/dist/utils'
import axios from 'axios'

const ViewAll = () => {
    const [data, setChange] = useState([])
    const fetchData = () => {
        axios.get("https://anishpdm.github.io/dummy-api-new/student.json").then(
            (response) => {
                console.log(response.data)
                setChange(response.data)
            }
        ).catch().finally()
    }
    useEffect(() => { fetchData() }, [])
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">id</th>
                                    <th scope="col">firstname</th>
                                    <th scope="col">lastname</th>
                                    <th scope="col">college</th>
                                    <th scope="col">dob</th>
                                    <th scope="col">course</th>
                                    <th scope="col">mobile</th>
                                    <th scope="col">email</th>
                                    <th scope="col">address</th>
                                </tr>
                            </thead>
                            <tbody>

                                {data.map(
                                    (value, index) => {
                                        return <tr>
                                            <th scope="row">{value._id}</th>
                                            <td>{value.firstname}</td>
                                            <td>{value.lastname}</td>
                                            <td>{value.college}</td>
                                            <td>{value.dob}</td>
                                            <td>{value.course}</td>
                                            <td>{value.mobile}</td>
                                            <td>{value.email}</td>
                                            <td>{value.address}</td>
                                        </tr>
                                    }
                                )

                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAll