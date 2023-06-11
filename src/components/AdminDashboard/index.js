import React, { useState, useEffect } from "react";

const pricesObject = { first_price: { amount: "10,00,000", ticket_number: "" }, second_price: { amount: "5,00,000", ticket_number: "" }, third_price: { amount: "1,20,000", ticket_number: "" }, fourth_price: { amount: "50,000", ticket_number: "" }, fifth_price: { amount: "20,000", ticket_number: "" }, sixth_price: { amount: "15,000", ticket_number: "" }, seventh_price: { amount: "6,000", ticket_number: "" }, eight_price: { amount: "6,000", ticket_number: "" }, ninth_price: { amount: "5,000", ticket_number: "" }, tenth_price: { amount: "5,000", ticket_number: "" }, eleventh_price: { amount: "4,000", ticket_number: "" }, category: "" }

const AdminDashboard = () => {
    const [result, setResult] = useState("");
    const [prices, setPrices] = useState(pricesObject)

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
            console.log("parsedData : ", parsedData);
            setResult(parsedData);
        }
    };

    const onChangeFirstPriceAmount = (event) => {
        console.log("balu")
        const value = event.target.value;
        console.log("value >> ", value)
        const updatedObject = { ...prices, first_price: { amount: value, ticket_number: prices.first_price.ticket_number } }
        setPrices(updatedObject)
    }

    const onChangeFirstPriceTicketNumber = (event) => {
        const value = event.target.value;
        console.log("value >> ", value)
        const updatedObject = { ...prices, first_price: { amount: prices.first_price.amount, ticket_number: value } }
        setPrices(updatedObject)
    }

    const onChangeSecondPriceAmount = (event) => {
        const value = event.target.value;
        console.log("value >> ", value)
        const updatedObject = { ...prices, second_price: { amount: value, ticket_number: prices.second_price.amount } }
        setPrices(updatedObject)
    }

    const onChangeSecondPriceTicketNumber = (event) => {
        const value = event.target.value;
        console.log("value >> ", value)
        const updatedObject = { ...prices, second_price: { amount: prices.second_price.amount, ticket_number: value } }
        setPrices(updatedObject)
    }

    const onChangeThirdPriceAmount = (event) => {
        const value = event.target.value;
        console.log("value >> ", value)
        const updatedObject = { ...prices, third_price: { amount: value, ticket_number: prices.third_price.amount } }
        setPrices(updatedObject)
    }

    const onChangeThirdPriceTicketNumber = (event) => {
        const value = event.target.value;
        console.log("value >> ", value)
        const updatedObject = { ...prices, third_price: { amount: prices.third_price.amount, ticket_number: value } }
        setPrices(updatedObject)
    }

    const onChangeFourthPriceAmount = (event) => {
        const value = event.target.value;
        console.log("value >> ", value)
        const updatedObject = { ...prices, fourth_price: { amount: value, ticket_number: prices.fourth_price.amount } }
        setPrices(updatedObject)
    }

    const onChangeFourthPriceTicketNumber = (event) => {
        const value = event.target.value;
        console.log("value >> ", value)
        const updatedObject = { ...prices, fourth_price: { amount: prices.fourth_price.amount, ticket_number: value } }
        setPrices(updatedObject)
    }

    const onChangeFifthPriceAmount = (event) => {
        const value = event.target.value;
        console.log("value >> ", value)
        const updatedObject = { ...prices, fifth_price: { amount: value, ticket_number: prices.fifth_price.amount } }
        setPrices(updatedObject)
    }

    const onChangeFifthPriceTicketNumber = (event) => {
        const value = event.target.value;
        console.log("value >> ", value)
        const updatedObject = { ...prices, fifth_price: { amount: prices.fifth_price.amount, ticket_number: value } }
        setPrices(updatedObject)
    }

    const onChangeSixthPriceAmount = (event) => {
        const value = event.target.value;
        console.log("value >> ", value)
        const updatedObject = { ...prices, sixth_price: { amount: value, ticket_number: prices.sixth_price.amount } }
        setPrices(updatedObject)
    }

    const onChangeSixthPriceTicketNumber = (event) => {
        const value = event.target.value;
        console.log("value >> ", value)
        const updatedObject = { ...prices, sixth_price: { amount: prices.sixth_price.amount, ticket_number: value } }
        setPrices(updatedObject)
    }

    const onChangeSeventhPriceAmount = (event) => {
        const value = event.target.value;
        console.log("value >> ", value)
        const updatedObject = { ...prices, seventh_price: { amount: value, ticket_number: prices.seventh_price.amount } }
        setPrices(updatedObject)
    }

    const onChangeSeventhPriceTicketNumber = (event) => {
        const value = event.target.value;
        console.log("value >> ", value)
        const updatedObject = { ...prices, seventh_price: { amount: prices.seventh_price.amount, ticket_number: value } }
        setPrices(updatedObject)
    }

    const onChangeEightPriceAmount = (event) => {
        const value = event.target.value;
        console.log("value >> ", value)
        const updatedObject = { ...prices, eight_price: { amount: value, ticket_number: prices.eight_price.amount } }
        setPrices(updatedObject)
    }

    const onChangeEightPriceTicketNumber = (event) => {
        const value = event.target.value;
        console.log("value >> ", value)
        const updatedObject = { ...prices, eight_price: { amount: prices.eight_price.amount, ticket_number: value } }
        setPrices(updatedObject)
    }

    const onChangeNinthPriceAmount = (event) => {
        const value = event.target.value;
        console.log("value >> ", value)
        const updatedObject = { ...prices, ninth_price: { amount: value, ticket_number: prices.ninth_price.amount } }
        setPrices(updatedObject)
    }

    const onChangeNinthPriceTicketNumber = (event) => {
        const value = event.target.value;
        console.log("value >> ", value)
        const updatedObject = { ...prices, ninth_price: { amount: prices.ninth_price.amount, ticket_number: value } }
        setPrices(updatedObject)
    }

    const onChangeTenthPriceAmount = (event) => {
        const value = event.target.value;
        console.log("value >> ", value)
        const updatedObject = { ...prices, tenth_price: { amount: value, ticket_number: prices.tenth_price.amount } }
        setPrices(updatedObject)
    }

    const onChangeTenthPriceTicketNumber = (event) => {
        const value = event.target.value;
        console.log("value >> ", value)
        const updatedObject = { ...prices, tenth_price: { amount: prices.tenth_price.amount, ticket_number: value } }
        setPrices(updatedObject)
    }

    const onChangeEleventhPriceAmount = (event) => {
        const value = event.target.value;
        console.log("value >> ", value)
        const updatedObject = { ...prices, eleventh_price: { amount: value, ticket_number: prices.eleventh_price.amount } }
        setPrices(updatedObject)
    }

    const onChangeEleventhPriceTicketNumber = (event) => {
        const value = event.target.value;
        console.log("value >> ", value)
        const updatedObject = { ...prices, eleventh_price: { amount: prices.eleventh_price.amount, ticket_number: value } }
        setPrices(updatedObject)
    }

    console.log("prices >> ", prices)

    return (
        <div>
            <h1>Admin Dashboard</h1>
            {/* {result !== "" ? ( */}
            <table>
                <tr>
                    <th>Prices</th>
                    <th>Amount</th>
                    <th>Ticket Number</th>
                </tr>
                <tr>
                    <td>1st</td>
                    <td>Rs.<input type="text" value={prices.first_price.amount} onChange={onChangeFirstPriceAmount} /></td>
                    <td><input type="text" value={prices.first_price.ticket_number} onChange={onChangeFirstPriceTicketNumber} /></td>
                </tr>
                <tr>
                    <td>2nd</td>
                    <td>Rs.<input type="text" value={prices.second_price.amount} onChange={onChangeSecondPriceAmount} /></td>
                    <td><input type="text" value={prices.second_price.ticket_number} onChange={onChangeSecondPriceTicketNumber} /></td>
                </tr>
                <tr>
                    <td>3rd</td>
                    <td>Rs.<input type="text" value={prices.third_price.amount} onChange={onChangeThirdPriceAmount} /></td>
                    <td><input type="text" value={prices.third_price.ticket_number} onChange={onChangeThirdPriceTicketNumber} /></td>
                </tr>
                <tr>
                    <td>4th</td>
                    <td>Rs.<input type="text" value={prices.fourth_price.amount} onChange={onChangeFourthPriceAmount} /></td>
                    <td><input type="text" value={prices.fourth_price.ticket_number} onChange={onChangeFourthPriceTicketNumber} /></td>
                </tr>
                <tr>
                    <td>5th</td>
                    <td>Rs.<input type="text" value={prices.fifth_price.amount} onChange={onChangeFifthPriceAmount} /></td>
                    <td><input type="text" value={prices.fifth_price.ticket_number} onChange={onChangeFifthPriceTicketNumber} /></td>
                </tr>
                <tr>
                    <td>6th</td>
                    <td>Rs.<input type="text" value={prices.sixth_price.amount} onChange={onChangeSixthPriceAmount} /></td>
                    <td><input type="text" value={prices.sixth_price.ticket_number} onChange={onChangeSixthPriceTicketNumber} /></td>
                </tr>
                <tr>
                    <td>7th</td>
                    <td>Rs.<input type="text" value={prices.seventh_price.amount} onChange={onChangeSeventhPriceAmount} /></td>
                    <td><input type="text" value={prices.seventh_price.ticket_number} onChange={onChangeSeventhPriceTicketNumber} /></td>
                </tr>
                <tr>
                    <td>8st</td>
                    <td>Rs.<input type="text" value={prices.eight_price.amount} onChange={onChangeEightPriceAmount} /></td>
                    <td><input type="text" value={prices.eight_price.ticket_number} onChange={onChangeEightPriceTicketNumber} /></td>
                </tr>
                <tr>
                    <td>9th</td>
                    <td>Rs.<input type="text" value={prices.ninth_price.amount} onChange={onChangeNinthPriceAmount} /></td>
                    <td><input type="text" value={prices.ninth_price.ticket_number} onChange={onChangeNinthPriceTicketNumber} /></td>
                </tr>
                <tr>
                    <td>10th</td>
                    <td>Rs.<input type="text" value={prices.tenth_price.amount} onChange={onChangeTenthPriceAmount} /></td>
                    <td><input type="text" value={prices.tenth_price.ticket_number} onChange={onChangeTenthPriceTicketNumber} /></td>                </tr>
                <tr>
                    <td>11th</td>
                    <td>Rs.<input type="text" value={prices.eleventh_price.amount} onChange={onChangeEleventhPriceAmount} /></td>
                    <td><input type="text" value={prices.eleventh_price.ticket_number} onChange={onChangeEleventhPriceTicketNumber} /></td>
                </tr>
            </table>
            <buttton type="button">Submit</buttton>
            {/* ) : (
                ""
            )} */}
        </div>
    );
};

export default AdminDashboard;
