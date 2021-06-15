import { Text } from "@chakra-ui/layout";
import {FaInstagram,FaEnvelope,FaLinkedinIn} from "react-icons/fa"
import styles from "..//styles/Footer.module.css";
export const Footer = () => {
  return (
    <footer
      style={{
        position: "fixed",
        left: "0",
        bottom: "0",
        marginBottom: "10px",
        width: "100%",
        textAlign: "center",
      }}
    >
     
      <div className={styles.icons}>
        <FaInstagram onClick={()=>{window.open('https://www.instagram.com/raghuganapathy/', "_blank") }}/>
        <FaLinkedinIn onClick={()=>{window.open('https://www.linkedin.com/in/raghu-ganapathy-2b2a17162/', "_blank") }}/>
        <FaEnvelope onClick={()=>{window.open(`mailto:raghu.1999@gmail.com?subject=+Hey!`, '_blank');}}/>
      </div>
    </footer>
  );
};
