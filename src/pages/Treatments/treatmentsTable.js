import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TreatmentsTable = props => {
    console.log("Treatments Table");
    console.log(props.data);
    console.log(props.name)
    return (
        <Table responsive>
            <thead>
                <tr>
                    <th style={{ fontSize: "x-large", width: "900px" }}>{props.name}</th>
                    <th style={{ fontSize: "x-large" }}>Price</th>
                    <th></th>
                </tr>
            </thead>
            <tbody >
                {props.data !== ''
                    ? props.data.map((data, i) => {
                        return (
                            <tr key={i}>
                                <td style={{ wordBreak: "break-all" }}>
                                    <p style={{ fontStyle: "italic", fontWeight: "500", marginBottom: "5px" }}>{data.name}</p>
                                    <p style={{ marginBottom: "5px" }}>{data.desc}</p>
                                </td>
                                <td>{data.price}</td>
                                <td>
                                    <Link to={{
                                        pathname: "/reservations/",
                                        state: {
                                            treatment: data.name
                                        }
                                    }} onClick={() => console.log("Clicked: " + data.name)}>
                                        Book now
                                    </Link>
                                </td>
                            </tr>
                        );
                    })
                    : 'No Data'
                }
            </tbody>
        </Table >
    );
}
export default TreatmentsTable;