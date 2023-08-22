import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function SupplierDetail() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [detail, setDetail] = useState({});

    useEffect(() => {

        axios.get('https://northwind.vercel.app/api/suppliers/' + id)
            .then(res => {
                setDetail(res.data);
            })

    }, [])


    return (<>
        <h1>Detail Page</h1>
        <button onClick={() => navigate(-1)}>GO BACK!</button>
        <hr />
        <div>
            <p>Id: {detail.id}</p>
            <p>Company Name: {detail.companyName}</p>
            <p>Contact Name: {detail.contactName}</p>
            <p>Contact Title: {detail.contactTitle}</p>
            <p>Street: {detail.address?.street}</p>
            <p>City: {detail.address?.city}</p>
            <p>Region: {detail.address?.region}</p>
        </div>
    </>)
}

export default SupplierDetail