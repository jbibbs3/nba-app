
import React, { useState, useEffect } from "react";




const Test = () => {
    const [selectedOption, setSelectedOption] = useState(""); // State for selected dropdown option
    const [data, setData] = useState(null); // State for fetched data

    // Fetch data function
    const fetchData = async () => {
        try {
            const response = await fetch("https://www.balldontlie.io/api/v1/teams");
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    // Call fetchData when the selectedOption changes
    useEffect(() => {
        if (selectedOption !== "") {
            fetchData();
        }
    }, [selectedOption]);

    // Handle dropdown change
    const handleDropdownChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div>
            <select value={selectedOption} onChange={handleDropdownChange}>
                <option value="">Select a Team</option>
                <option value="Hawks">Atlanta Hawks</option>
                <option value="Celtics">Boston Celtics</option>
                <option value="Nets">Brooklyn Nets</option>
                <option value="Hornets">Charlotte Hornets</option>
                <option value="Bulls">Chicago Bulls</option>
                <option value="Cavs">Cleveland Cavaliers</option>
                <option value="Mavs">Dallas Mavericks</option>
                <option value="Nuggets">Denver Nuggets</option>
                <option value="Pistons">Detroit Pistons</option>
                <option value="Warriors">Golden State Warriors</option>
                <option value="Rockets">Houston Rockets</option>
                <option value="Pacers">Indiana Pacers</option>
                <option value="Clippers">Los Angeles Clippers</option>
                <option value="Lakers">Los Angeles Lakers</option>
                <option value="option15">Memphis Grizzlies</option>
                <option value="option16">Miami Heat</option>
                <option value="option17">Milwaukee Bucks</option>
                <option value="option18">Minnesota Timberwolves</option>
                <option value="option19">New Orleans Pelicans</option>
                <option value="option20">New York Knicks</option>
                <option value="option21">Oklahoma City Thunder</option>
                <option value="option22">Orlando Magic</option>
                <option value="option23">Philadelphia 76ers</option>
                <option value="option24">Phoenix Suns</option>
                <option value="option25">Portland Trail Blazers</option>
                <option value="option26">Sacramento Kings</option>
                <option value="option27">San Antonio Spurs</option>
                <option value="option28">Toronto Raptors</option>
                <option value="option29">Utah Jazz</option>
                <option value="option30">Washington Wizards</option>

            </select>

            {data && (
                <section>
                    <div>
                        Name:
                    </div>
                    <div>
                        Division:
                    </div>
                    <div>
                        Conference:
                    </div>
                </section>
            )}


        </div>
    );
};

export default Test;