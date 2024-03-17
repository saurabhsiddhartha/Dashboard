import React, { useState, useEffect } from "react";
import axios from "axios";

const Totaluser = () => {
    const [customers, setCustomers] = useState([]);
    const [countCustomer, setCountCustomer] = useState([]);
    const [countActive, setCountActive] = useState([]);

    useEffect(() => {
        // Fetch customers from the API endpoint
        axios.get('http://localhost:500/customers')
            .then(response => {
                const fetchedCustomers = response.data;
                setCustomers(fetchedCustomers); 
                setCountCustomer(fetchedCustomers.length);  
                setCountActive(fetchedCustomers.length);
            })
            .catch(error => {
                console.error('Error fetching customers:', error);
            });
    }, []);
    return (
        <>
            <div className="user-container">
                <span>
                    <h1>Hello Siddhartha</h1>
                    <input placeholder="search"
                        type="text"
                    />
                </span>
                <div className="total-user">
                    <div className="total-user-count">
                        <div>
                            <i class="fa-solid fa-user-group"></i>
                        </div>
                        <div>
                            <h4>Total Customer</h4>
                            <p>{countCustomer}</p>
                        </div>
                    </div>
                    <div className="total-user-count">
                        <div>
                            <i class="fa-regular fa-user"></i>
                        </div>
                        <div>
                            <h4>Active Customer</h4>
                            <p>{countActive}</p>
                        </div>
                    </div>
                </div>
                <div className="customer">
                    <span>
                        <h2>All Customers</h2>
                        <input placeholder="search" id="customer-search" />
                    </span>


                </div>
                <div className="customer-detail">
                    <tbody>
                        <thead >
                            <tr>
                                <th>Name</th>
                                <th>Company</th>
                                <th>Number</th>
                                <th>Email</th>
                                <th>Country</th>
                                <th>Satus</th>
                            </tr>
                        </thead>
                        {customers.map(customer => (
                            <tr key={customer._id}>
                                <td>{customer.name}</td>
                                <td>{customer.company}</td>
                                <td>{customer.number}</td>
                                <td>{customer.email}</td>
                                <td>{customer.country}</td>
                                <td><button id="user-status">Active</button></td>
                            </tr>
                        ))}
                    </tbody>
                </div>
            </div>
        </>
    )
}
export default Totaluser;





