import React, { useEffect, useState } from "react";
import Footer from "../Footer";
import Header from "../Header";
import "./index.css";

const Home = () => {
    const [resultsData, setResultsData] = useState("");

    useEffect(() => {
        getResultsData();
    }, []);

    const getResultsData = async () => {
        const url = "http://localhost:3001/v1/result";
        const options = {
            method: "GET",
        };
        const response = await fetch(url, options);
        console.log("response >> ", response);
        if (response.ok === true) {
            const data = await response.json();
            const parsedData = JSON.parse(data.data);
            console.log("first_price", parsedData);
            console.log(parsedData);
            setResultsData(parsedData);
        }
    };

    return (
        <div className="home-cotainer">
            <Header />
            <div className="home-body-container">
                <div className="banner-content-container">
                    <div>
                        <img
                            src="/images/home-banner.png"
                            className="banner-img"
                            alt="Perfume-img"
                        />
                    </div>
                    <div className="heading-para">
                        <h1 className="banner-heading">Bingo</h1>
                        <p className="banner-para">Well you can’t win the lottery if you don’t have a ticket</p>
                    </div>
                </div>
                {resultsData !== "" ? (
                    <div className="table-container">
                        <h1 className="welcome">Welcome to WIN</h1>
                        {console.log("first_price >> ", resultsData.first_price.amount)}
                        <table>
                            <tr>
                                <th>Prices</th>
                                <th>Amount</th>
                                <th>Ticket Number</th>
                            </tr>
                            <tr>
                                <td>1st</td>
                                <td>Rs.{resultsData.first_price.amount}</td>
                                <td>{resultsData.first_price.ticket_number}</td>
                            </tr>
                            <tr>
                                <td>2nd</td>
                                <td>Rs.{resultsData.second_price.amount}</td>
                                <td>{resultsData.second_price.ticket_number}</td>
                            </tr>
                            <tr>
                                <td>3rd</td>
                                <td>Rs.{resultsData.third_price.amount}</td>
                                <td>{resultsData.third_price.ticket_number}</td>
                            </tr>
                            <tr>
                                <td>4th</td>
                                <td>Rs.{resultsData.fourth_price.amount}</td>
                                <td>{resultsData.fourth_price.ticket_number}</td>
                            </tr>
                            <tr>
                                <td>5th</td>
                                <td>Rs.{resultsData.fifth_price.amount}</td>
                                <td>{resultsData.fifth_price.ticket_number}</td>
                            </tr>
                            <tr>
                                <td>6th</td>
                                <td>Rs.{resultsData.sixth_price.amount}</td>
                                <td>{resultsData.sixth_price.ticket_number}</td>
                            </tr>
                            <tr>
                                <td>7th</td>
                                <td>Rs.{resultsData.seventh_price.amount}</td>
                                <td>{resultsData.seventh_price.ticket_number}</td>
                            </tr>
                            <tr>
                                <td>8st</td>
                                <td>Rs.{resultsData.eight_price.amount}</td>
                                <td>{resultsData.eight_price.ticket_number}</td>
                            </tr>
                            <tr>
                                <td>9th</td>
                                <td>Rs.{resultsData.ninth_price.amount}</td>
                                <td>{resultsData.ninth_price.ticket_number}</td>
                            </tr>
                            <tr>
                                <td>10th</td>
                                <td>Rs.{resultsData.tenth_price.amount}</td>
                                <td>{resultsData.first_price.ticket_number}</td>
                            </tr>
                            <tr>
                                <td>11th</td>
                                <td>Rs.{resultsData.eleventh_price.amount}</td>
                                <td>{resultsData.eleventh_price.ticket_number}</td>
                            </tr>
                        </table>
                        {/* <li className="li-ele" key="1">
                            <p></p>
                            <p>{resultsData.first_price.amount}</p>
                            <p>{resultsData.first_price.ticket_number}</p>
                        </li> */}
                    </div>
                ) : (
                    ""
                )}
            </div>
            <Footer />
        </div >
    );
};

export default Home;
