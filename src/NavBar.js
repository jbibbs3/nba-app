import './App.css';
import { NavLink } from "react-router-dom";
import Icon from "./nba-6-logo-png-transparent.png"

const NavBar = () => {


    const styles = {

        header: {
            backgroundColor: "darkblue",
            color: "white",
            height: "70px"
        },

        logo: {
            display: "flex",
            justifyContent: "flex-start",
        },

        links: {
            display:"flex",
            flexDirection:"row",
            justifyContent:"flex-end"
            
        },
        

         icon: {
            
            width:"27px",
            paddingLeft:"15px",
            paddingTop:"4px"
         },

         nba: {
            color:"white",
            fontWeight:"bold",
            paddingLeft:"12px"
         },
          
         


    }





    return (

        <div style={styles.header} className="Header">
            <div className="icon" style={styles.icon}>
                <NavLink to="/">
                <img src={Icon} style={styles.icon}  alt="logo" />
                </NavLink>
                <h2 style={styles.nba}>NBA</h2>
                
            </div>
            <div style={styles.links}>
                <NavLink className="link" to="/Players">Players</NavLink>
                <NavLink className="link" to="/Teams">Teams</NavLink>
                <NavLink className="link" to="/Games">Games</NavLink>
            </div>
        </div>



    )


}

export default NavBar;