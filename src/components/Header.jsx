import React, { useEffect, useState, useContext } from 'react';
import CategoryService from '../services/CategoryService';
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.jpg";
import styles from '../styles/Header.module.css';
import AuthContext from '../contexts/AuthContext';

function Header() {
    const [categories, setCategories] = useState([]);
    const { isLoggedIn, logout } = useContext(AuthContext);

    useEffect(() => {
        CategoryService.getCategories()
            .then(data => setCategories(data));
    }, [isLoggedIn]); // isLoggedIn 변경 시 자동으로 다시 실행

    return (
        <header className={styles.header}>
            <Link to="/" className={styles.logo_container}>
                <img src={Logo} alt="로고" className={styles.logo}/>
                <h1>Welcome To Golla</h1>
            </Link>
            <ul>
                {categories.map(category => (
                    <li key={category.id}>
                        <Link to={`${category.url}`} className="li_link">{category.name}</Link>
                    </li>
                ))}
                
                {isLoggedIn ? (
                    <>
                        <li><Link to="/mypage" className="li_link">MyPage</Link></li>
                        <li><button onClick={logout} className={styles.logoutButton}>Log Out</button></li>
                    </>
                ) : (
                    <>
                        <li><Link to="/login" className="li_link">Sign In</Link></li>
                        <li><Link to="/signup" className="li_link">Sign Up</Link></li>
                    </>
                )}
            </ul>
        </header>
    );
}

export default Header;
