
import React, { useState, useEffect } from "react";
import Pic from "./logaster-2020-06-image8.png";
import "./App.css"

const Teams = () => {
    const [selectedOption, setSelectedOption] = useState("");
    const [teamData, setTeamData] = useState(null);

    const fetchData = async () => {
        try {
            const response = await fetch(`https://www.balldontlie.io/api/v1/teams/${selectedOption}`);
            const jsonData = await response.json();
            setTeamData(jsonData);
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
            display:"flex",
            flexDirection:"row",
            justifyContent:"center"

        },

        input: {
               paddingLeft:"5px",
               paddingTop: "22px",
               fontWeight:"bold"
             
        },

        teamPic: {
           width:"70%",
           textAlign:"center"
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
         
        
        <section style={styles.test} className='playerBackground'>
            <div class="teamPics" style={styles.teamPic}>
               <img src={Pic} alt="teamPic" style={styles.teamPic}/>
            </div>
            <select value={selectedOption} onChange={handleDropdownChange}>
                <option value="">Select a Team</option>
                <option value="1">Atlanta Hawks</option>
                <option value="2">Boston Celtics</option>
                <option value="3">Brooklyn Nets</option>
                <option value="4">Charlotte Hornets</option>
                <option value="5">Chicago Bulls</option>
                <option value="6">Cleveland Cavaliers</option>
                <option value="7">Dallas Mavericks</option>
                <option value="8">Denver Nuggets</option>
                <option value="9">Detroit Pistons</option>
                <option value="10">Golden State Warriors</option>
                <option value="11">Houston Rockets</option>
                <option value="12">Indiana Pacers</option>
                <option value="13">Los Angeles Clippers</option>
                <option value="14">Los Angeles Lakers</option>
                <option value="15">Memphis Grizzlies</option>
                <option value="16">Miami Heat</option>
                <option value="17">Milwaukee Bucks</option>
                <option value="18">Minnesota Timberwolves</option>
                <option value="19">New Orleans Pelicans</option>
                <option value="20">New York Knicks</option>
                <option value="21">Oklahoma City Thunder</option>
                <option value="22">Orlando Magic</option>
                <option value="23">Philadelphia 76ers</option>
                <option value="24">Phoenix Suns</option>
                <option value="25">Portland Trail Blazers</option>
                <option value="26">Sacramento Kings</option>
                <option value="27">San Antonio Spurs</option>
                <option value="28">Toronto Raptors</option>
                <option value="29">Utah Jazz</option>
                <option value="30">Washington Wizards</option>

            </select>

            {teamData && (
                <section >
                    
                    <div style={styles.section} className="teamName">
                        <h3>Name:</h3>
                        <div style={styles.input}> {teamData.full_name}</div>
                    </div>
                    <div style={styles.section} className="teamDivision">
                        <h3>Division:</h3>
                        <div style={styles.input}>{teamData.division}</div>
                    </div>
                    <div style={styles.section} className="teamConference">
                        <h3>Conference:</h3>
                        <div style={styles.input}>{teamData.conference}</div>
                    </div>

                </section>
            )}
        </section>
    );
};

export default Teams;
