import React, { useState } from 'react'
import Navbar from './Navbar'
import { getValue } from '@testing-library/user-event/dist/utils'

const ViewAll = () => {
    const [data, setChange] = useState(

        [
            {
                "id": "66651683741a512717d92b87",
                "firstname": "Manu",
                "lastname": "R",
                "college": "FISAT",
                "dob": "02/04/1999",
                "course": "B-Tech Comp Science",
                "mobile": "+91 95266 7443",
                "email": "aa@gmail.com",
                "address": "Kochi",
                "__v": 0
            },
            {
                "id": "666516bc741a512717d92b88",
                "firstname": "Rahul",
                "lastname": "D",
                "college": "FISAT",
                "dob": "02/01/1992",
                "course": "MCA",
                "mobile": "+91 95266 74440",
                "email": "aa@gmail.com",
                "address": "Test Address",
                "__v": 0
            }
        ]

    )
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
                                            <th scope="row">{value.id}</th>
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