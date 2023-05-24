import './App.css';
import React, { useState, useEffect } from "react";
import PlayerPic from './Nba Players On Logo.gif';

const Players = () => {
    const [selectedOption, setSelectedOption] = useState("");
    const [playerData, setPlayerData] = useState(null);

    const fetchData = async () => {
        try {
            const response = await fetch(`https://www.balldontlie.io/api/v1/players/${selectedOption}`);
            const jsonData = await response.json();
            setPlayerData(jsonData);
        } catch (error) {
            console.error("Error fetching team data:", error);
        }
    };

    useEffect(() => {
        if (selectedOption !== "") {
            fetchData();
        }
    }, [selectedOption]);

    const handleDropdownChange = (event) => {
        setSelectedOption(event.target.value);

    };

    const styles = {

        section: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            
        },

        input: {
            paddingLeft: "8px",
            paddingTop: "22px",
            fontWeight:"bold"

        },

        ft: {

            paddingRight: "1px",
            paddingTop: "20px",
            fontWeight:"bold"
        },


        in: {

            paddingLeft: "1px",
            paddingTop: "20px",
            fontWeight:"bold"

        },

        playerPic: {
            display: "flex",
            justifyContent: "center"
        },

        test: {
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh'
        },

        height: {
            paddingRight:"5px"
        }






    }

    return (

        <section style={styles.test}   className='playerBackground'>
            <div class="playerPics" style={styles.playerPic}>
                <img src={PlayerPic} alt="playerPic" />
            </div>

            <select value={selectedOption} onChange={handleDropdownChange}>
                <option value="">Select a Player</option>
                <option value="140">Kevin Durant</option>
                <option value="145">Joel Embiid</option>
                <option value="237">LeBron James</option>
                <option value="246">Nikola Jokic</option>


            </select>

            {playerData && (
                <section >
                    <div style={styles.section} className="">
                        <h3>Name:</h3>
                        <div style={styles.input}> {playerData.first_name}</div>
                        <div style={styles.input}> {playerData.last_name}</div>
                    </div>
                    <div style={styles.section} className="">
                        <h3>Team:</h3>
                        <div style={styles.input}>{playerData.team.full_name}</div>
                    </div>

                    <div style={styles.section} className="">
                        <h3>Position:</h3>
                        <div style={styles.input}>{playerData.position}</div>
                    </div>
                    <div style={styles.section} className="">
                        <h3 className='playerHeight' style={styles.height}>Height:</h3>
                        <div style={styles.ft}>{playerData.height_feet}</div>
                        <h3 className='height'>ft</h3>
                        <div class="measurables" style={styles.in}>{playerData.height_inches}</div>
                        <h3>in</h3>
                    </div>
                   

                </section>
            )}
            <footer class="playerFooter">
                <div style={styles.footer}> </div>
            </footer>
        </section>
    );
};

export default Players;