import { ConnectWallet, useAddress, useDisconnect } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

let ranNum = Math.floor((Math.random() * 10) + 1);

export default function Navbar() {
    const address = useAddress();
    const disconnect = useDisconnect();

    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

    function disconnectWallet() {
        disconnect();
        setIsProfileDropdownOpen(false);
    }

    return (
        <div>
            <div className={styles.navbar}>
                <Link href="/" className={styles.navbarTitle}>
                    <img src="./favicon-16x16.png"/> SilkRoad
                </Link>
                <div className={styles.navLinks}>
                    <Link href="/">
                        <p>Home</p>
                    </Link>
                    <Link href="/shop">
                        <p>Shop</p>
                    </Link>
                    <Link href="/marketplace">
                        <p>Marketplace</p>
                    </Link>
                </div>
                <div>
                    {!address ? (
                        <ConnectWallet 
                            btnTitle="Login"
                            theme="light"
                            className={styles.connectWalletBtn}
                        />
                    ) : (
                        <div
                            onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                        >
                            <img src={`https://avatars.dicebear.com/api/avataaars/${ranNum}.svg`} alt="avatar" className={styles.avatar}/>
                        </div>
                    )}
                </div>
                {isProfileDropdownOpen && (
                    <div className={styles.profileDropdown}>
                        <Link href="/myPacks">
                            <p >My Packs</p>
                        </Link>
                        <Link href="/myCards">
                            <p>My Cards</p>
                        </Link>
                        <button className={styles.btn}
                            onClick={disconnectWallet}
                        ><b>Logout</b></button>
                    </div>
                )}
            </div>
        </div>
    )
}