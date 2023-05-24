import './App.css';
import React, { useState, useEffect } from "react";
import PlayerPic from './Nba Game Day.gif';

const Games = () => {
    const [selectedOption, setSelectedOption] = useState("");
    const [playerData, setPlayerData] = useState(null);

    const fetchData = async () => {
        try {
            const response = await fetch(`https://www.balldontlie.io/api/v1/games/${selectedOption}`);
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
            justifyContent: "center"

        },

        input: {
            paddingLeft: "5px",
            marginRight: "5px",
            fontWeight:"bold",
            fontSize:"larger"

            // paddingTop: "22px"

        },

        ft: {

            paddingRight: "1px",
            paddingTop: "20px",
        },


        in: {

            paddingLeft: "1px",
            paddingTop: "20px",

        },

        playerPic: {
            display: "flex",
            justifyContent: "center"
        },
        
        scores: {
            fontWeight:"bold",
            color: "white",
            backgroundColor:"black",
            fontSize:"larger"

            
        },

        test: {
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '100vh'
            }
       
    


    }

    return (

        <section style={styles.test}  className='playerBackground'>
            <div class="playerPics" style={styles.playerPic}>
                <img src={PlayerPic} alt="playerPic" />
            </div>

            <select value={selectedOption} onChange={handleDropdownChange}>
                <option value="">Final Scores</option>
                <option value="47179">Boston vs Charlotte (1/30/2019)</option>
                <option value="48740">Washington vs Cleveland (2/8/2019) </option>
                <option value="48746">Sacramento vs Miami (2/8/2019)</option>
                <option value="48739">Philadelphia vs Denver (2/8/2019)</option>


            </select>
           

           <div className='scoreboard'>
           <div className='homeScoreboard'>
                <h2 className='home'>Home</h2>

                {playerData && (
                    <section >
                        <div style={styles.section} className="">
                            <div style={styles.input}> {playerData.home_team.full_name}</div>
                            <div style={styles.scores}> {playerData.home_team_score}</div>
                        </div>
                    </section>


                )}


            </div>

            <div className='visitorScoreboard'>
                <h2 className='visitor'>Visitor</h2>

                {playerData && (
                    <section >
                        <div style={styles.section} className="">
                            <div style={styles.input}> {playerData.visitor_team.full_name}</div>
                            <div style={styles.scores}> {playerData.visitor_team_score}</div>
                        </div>
                    </section>


                )}

            </div>

           </div>
            




        </section>
    );
};

export default Games;