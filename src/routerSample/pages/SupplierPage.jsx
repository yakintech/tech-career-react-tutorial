import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function SupplierPage() {

    const [suppliers, setsuppliers] = useState([]);
    const [loading, setloading] = useState(true)

    const navigate = useNavigate();

    useEffect(() => {
        loadSuppliers();
    });

    const loadSuppliers = () => {
        axios.get('https://northwind.vercel.app/api/suppliers')
            .then((response) => {
                setsuppliers(response.data);
                setloading(false);
            }
            )
    }


    const goToDetail = (id) => {
        navigate('/suppliers/' + id)
    }

    const deleteSupplier = (id) => {

        var result = window.confirm("Want to delete?");
        if (result) {
            axios.delete('https://northwind.vercel.app/api/suppliers/' + id)
            .then(res => {
                alert('Success!')
                loadSuppliers();
            })
        }

      

    }
    return (<>
        {
            loading == true ? <h1>loading...</h1> : <table>
                <thead>
                    <tr>
                        <th>Supplier ID</th>
                        <th>Company Name</th>
                        <th>Contact Name</th>
                        <th>Contact Title</th>
                        <th>Go To Detail</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {suppliers.map((supplier) => (
                        <tr key={supplier.id}>
                            <td><Link to={'/suppliers/' + supplier.id}>{supplier.id}</Link></td>
                            <td>{supplier.companyName}</td>
                            <td>{supplier.contactName}</td>
                            <td>{supplier.contactTitle}</td>
                            <td><button onClick={() => goToDetail(supplier.id)}>Go to detail</button></td>
                            <td><button onClick={() => deleteSupplier(supplier.id)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        }
    </>
    )
}

export default SupplierPage