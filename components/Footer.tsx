import Link from "next/link";
import styles from "../styles/Home.module.css";
import { FaGithubSquare, FaInstagramSquare, FaLinkedin } from 'react-icons/fa';



export default function Footer() {

    return(
        <div className={styles.footer}>
            <div className={styles.footerLink}>
                <Link href={""}> <FaInstagramSquare size='28px'/> </Link>
                <Link href={""}> <FaGithubSquare size='28px'/> </Link>
                <Link href={""}> <FaLinkedin size='28px'/></Link>
            </div>
            <p>Made by Fardeen</p>
        </div>
    )

}

