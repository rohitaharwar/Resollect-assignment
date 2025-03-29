import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { LuLayoutDashboard } from "react-icons/lu";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { CiChat1 } from "react-icons/ci";
import { GrDocumentUpload } from "react-icons/gr";
import { FaRegUser } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { RiRemoteControlLine } from "react-icons/ri";
import { IoLockClosedOutline } from "react-icons/io5";
import { Table, Form, Offcanvas, Dropdown, DropdownButton } from 'react-bootstrap';
import { dataList } from './Data.js';
import { LuArrowDownUp } from "react-icons/lu";






const Home = () => {
    const [show, setShow] = useState(false);
    const [searchQuery, setSearchQuery] = useState(""); // Store search input

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Filter data based on search query
    const filteredData = dataList.filter(item =>
        item.Laon_No.toLowerCase().includes(searchQuery.toLowerCase()) // Case-insensitive filtering
    );

    return (
        <div className='main-home'>
            <div className="dashboard">
                <ul className="dashboard_grp">
                    <Button className="dashboard_btn"><span><LuLayoutDashboard /></span> Dashboard</Button>
                    <Button className="dashboard_btn"><span><FaRegUser /></span> Portfolio</Button>
                    <Button className="dashboard_btn"><span><IoMdNotificationsOutline /></span> Notifications</Button>
                    <Button className="dashboard_btn"><span><MdOutlineEmail /></span> Notices</Button>
                    <Button className="dashboard_btn"><span><CiChat1 /></span> Auction</Button>
                    <Button className="dashboard_btn"><span><GrDocumentUpload /></span> Data Upload</Button>
                    <Button className="dashboard_btn"><span><RiRemoteControlLine /></span> Control Panel</Button>
                    <Button className="dashboard_btn"><span><FiUsers /></span> User Management</Button>
                    <Button className="dashboard_btn"><span><IoLockClosedOutline /></span> Permissions</Button>
                </ul>
            </div>

            <div className="main">
                <div className='home-head'>Portfolio</div>
                <div className="upperNav gap-2">
                    <button className='NavItem'>All</button>
                    <button className='NavItem'>Pre Sarfaesi</button>
                    <button className='NavItem'>NPA</button>
                    <button className='NavItem'>13(3) Responses</button>
                    <button className='NavItem'>Symbolic possession</button>
                    <button className='NavItem'>DM Order</button>
                    <button className='NavItem'>Physical possession</button>
                    <button className='NavItem'>Auctions</button>
                </div>

                <div className="navdrop">
                    {/* Search Box */}
                    <input
                        type="text"
                        placeholder='Search Loan number'
                        className='main-search'
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />

                    <div className="navgrp">
                        <DropdownButton id="dropdown-basic-button" title="Select columns">
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </DropdownButton>

                        <>
                            <Button variant="primary" onClick={handleShow}>
                                More filters
                            </Button>

                            <Offcanvas show={show} onHide={handleClose} placement="end">
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title>Upload Document</Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <Form>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Document Name</Form.Label>
                                            <Form.Select>
                                                <option value="">Select</option>
                                                <option value="finance">Finance</option>
                                                <option value="education">Education</option>
                                                <option value="health">Health</option>
                                            </Form.Select>
                                        </Form.Group>

                                        <Form.Group className="mb-3">
                                            <Form.Label>Document Type</Form.Label>
                                            <Form.Select>
                                                <option value="">Select</option>
                                                <option value="pdf">PDF</option>
                                                <option value="word">Word Document</option>
                                                <option value="image">Image</option>
                                            </Form.Select>
                                        </Form.Group>

                                        <Form.Group className="mb-3">
                                            <Form.Label>Document Remark</Form.Label>
                                            <Form.Control type="text" placeholder="Enter document remark" />
                                        </Form.Group>

                                        <Form.Group className="mb-3">
                                            <Form.Label>Select file</Form.Label>
                                            <Form.Control type="file" />
                                        </Form.Group>

                                        <Button variant="primary" type="submit">
                                            Submit
                                        </Button>
                                    </Form>
                                </Offcanvas.Body>
                            </Offcanvas>
                        </>
                    </div>
                </div>

                {/* Filtered Table */}
                <div className="container mt-4 table-container">
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th></th>
                                <th>#</th>
                                <th>Loan No <span><LuArrowDownUp /></span></th>
                                <th>Loan Type <span><LuArrowDownUp /></span></th>
                                <th>Borrower <span><LuArrowDownUp /></span></th>
                                <th>Borrower Address <span><LuArrowDownUp /></span></th>
                                <th>Co-Borrower <span><LuArrowDownUp /></span></th>
                                <th>Co-Borrower Address <span><LuArrowDownUp /></span></th>
                                <th>Current DPD <span><LuArrowDownUp /></span></th>
                                <th>Sanction Amount <span><LuArrowDownUp /></span></th>
                                <th>Region <span><LuArrowDownUp /></span></th>
                                <th>State <span><LuArrowDownUp /></span></th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData.length > 0 ? (
                                filteredData.map((item, index) => (
                                    <tr key={index}>
                                        <td><input type="checkbox" /></td>
                                        <td>{index + 1}</td>
                                        <td>
                                            <span className="loan-number">{item.Laon_No}</span>
                                        </td>
                                        <td>{item.Loan_type}</td>
                                        <td>{item.Borrower}</td>
                                        <td>{item.Borrower_address}</td>
                                        <td>{item.Co_Borrower_1_Name}</td>
                                        <td>{item.Co_Borrower_1_Address}</td>
                                        <td>{item.Current_DPD}</td>
                                        <td>{item.Sanction_Amount.toLocaleString()}</td>
                                        <td>{item.Region}</td>
                                        <td>{item.State}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="12" className="text-center">No records found</td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
};

export default Home;
