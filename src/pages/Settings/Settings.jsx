import React, {useState} from "react";
import Search from "../../components/Search/Search";
import userData from "../../data/userData";
import {BsThreeDotsVertical} from 'react-icons/bs'

const Settings = () => {
    const[userList, setUserList] = useState(userData)


    return(
        <>
            <Search />
            
            <div className="d-flex justify-content-between align-items-center container mt-5">
                <div class="mb-3">
                    <label for="formGroupExampleInput" class="form-label">ID orqali qidirish</label>
                    <input type="number" class="form-control" placeholder="ID" />
                </div>
                <div>
                    <button className="btn btn-primary">Qo’shish</button>
                </div>
            </div>

            <div className="container">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>User</th>
                            <th>Telefon</th>
                            <th>JShShIR </th>
                            <th>Qurilma</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userList.map((user, index) => {
                                return(
                                    <tr key={index} className="d">
                                        <td className="p-3">{user.id}</td>
                                        <td className="p-3">{user.user}</td>
                                        <td className="p-3">{user.number}</td>
                                        <td className="p-3">{user.stir}</td>
                                        <td className="p-3">{user.device}</td>
                                        <td><BsThreeDotsVertical className="mt-2" /></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Settings;