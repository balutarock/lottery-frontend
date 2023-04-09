import React, { useEffect, useState } from "react";
import Footer from "../Footer";
import Header from "../Header";
import "./index.css";

const Home = () => {
  const [resultsData, setResultsData] = useState("");
  const [category, setCategory] = useState("1st Category");
  console.log("Results DAta >> ", resultsData);

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
          <div className="heading-para">
            <h1 className="banner-heading">WIN</h1>
            <p className="banner-para">
              Well you can’t win the lottery if you don’t have a ticket
            </p>
          </div>
          <div>
            <img
              src="/images/home-banner.png"
              className="banner-img"
              alt="Perfume-img"
            />
          </div>
        </div>
        <div className="table-container">
          <div className="image-container">
            <img
              src="/images/winners.png"
              alt="trophy-img"
              className="winners-img"
            />
          </div>
          <h1 className="welcome">Welcome to WIN</h1>
          <ul>
            <li>
              <button type="button">1st Category</button>
            </li>
            <li>
              <button type="button">2st Category</button>
            </li>
          </ul>
          <h1>{category}</h1>
          <table>
            <tr>
              <th>Prices</th>
              <th>Amount</th>
              <th>Ticket Number</th>
            </tr>
            <tr>
              <td>1st</td>
              <td>
                Rs.
                {resultsData.first_price !== undefined
                  ? resultsData.first_price.amount
                  : "10,00,000"}
              </td>
              <td>
                {resultsData.first_price !== undefined
                  ? resultsData.first_price.ticket_number
                  : "---"}
              </td>
            </tr>
            <tr>
              <td>2nd</td>
              <td>
                Rs.
                {resultsData.second_price !== undefined
                  ? resultsData.second_price.amount
                  : "5,00,000"}
              </td>
              <td>
                {resultsData.second_price !== undefined
                  ? resultsData.second_price.ticket_number
                  : "---"}
              </td>
            </tr>
            <tr>
              <td>3rd</td>
              <td>
                Rs.
                {resultsData.third_price !== undefined
                  ? resultsData.third_price.amount
                  : "1,20,000"}
              </td>
              <td>
                {resultsData.third_price !== undefined
                  ? resultsData.third_price.ticket_number
                  : "---"}
              </td>
            </tr>
            <tr>
              <td>4th</td>
              <td>
                Rs.
                {resultsData.fourth_price !== undefined
                  ? resultsData.fourth_price.amount
                  : "50,000"}
              </td>
              <td>
                {resultsData.fourth_price !== undefined
                  ? resultsData.fourth_price.ticket_number
                  : "---"}
              </td>
            </tr>
            <tr>
              <td>5th</td>
              <td>
                Rs.
                {resultsData.fifth_price !== undefined
                  ? resultsData.fifth_price.amount
                  : "20,000"}
              </td>
              <td>
                {resultsData.fifth_price !== undefined
                  ? resultsData.fifth_price.ticket_number
                  : "---"}
              </td>
            </tr>
            <tr>
              <td>6th</td>
              <td>
                Rs.
                {resultsData.sixth_price !== undefined
                  ? resultsData.sixth_price.amount
                  : "15,000"}
              </td>
              <td>
                {resultsData.sixth_price !== undefined
                  ? resultsData.sixth_price.ticket_number
                  : "---"}
              </td>
            </tr>
            <tr>
              <td>7th</td>
              <td>
                Rs.
                {resultsData.seventh_price !== undefined
                  ? resultsData.seventh_price.amount
                  : "6,000"}
              </td>
              <td>
                {resultsData.seventh_price !== undefined
                  ? resultsData.seventh_price.ticket_number
                  : "---"}
              </td>
            </tr>
            <tr>
              <td>8st</td>
              <td>
                Rs.
                {resultsData.eight_price !== undefined
                  ? resultsData.eight_price.amount
                  : "6,000"}
              </td>
              <td>
                {resultsData.eight_price !== undefined
                  ? resultsData.eight_price.ticket_number
                  : "---"}
              </td>
            </tr>
            <tr>
              <td>9th</td>
              <td>
                Rs.
                {resultsData.ninth_price !== undefined
                  ? resultsData.ninth_price.amount
                  : "5,000"}
              </td>
              <td>
                {resultsData.ninth_price !== undefined
                  ? resultsData.ninth_price.ticket_number
                  : "---"}
              </td>
            </tr>
            <tr>
              <td>10th</td>
              <td>
                Rs.
                {resultsData.tenth_price !== undefined
                  ? resultsData.tenth_price.amount
                  : "5,000"}
              </td>
              <td>
                {resultsData.tenth_price !== undefined
                  ? resultsData.tenth_price.ticket_number
                  : "---"}
              </td>
            </tr>
            <tr>
              <td>11th</td>
              <td>
                Rs.
                {resultsData.eleventh_price !== undefined
                  ? resultsData.eleventh_price.amount
                  : "4,000"}
              </td>
              <td>
                {resultsData.eleventh_price !== undefined
                  ? resultsData.eleventh_price.ticket_number
                  : "---"}
              </td>
            </tr>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
