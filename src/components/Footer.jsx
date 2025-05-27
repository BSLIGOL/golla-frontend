import styles from '../styles/Footer.module.css';
import Google from '../assets/GooglePlay.png';
import AppStore from '../assets/AppStore.png';
import Facebook from '../assets/Facebook.png';
import Instargram from '../assets/Instargram.png';
import Kakao from '../assets/Kakao_ch.png';
import Twitter from '../assets/Twitter.png';
import Youtube from '../assets/Youtube.png';

function Footer() {
    return (
        <footer>
            <div className={styles['footer-top']}>
                <div className={styles['footer-top-left']}>
                    <div>
                        <h2>Golla</h2>
                    </div>
                    <div className={styles.div_logo_1}>
                        <img src={Instargram} alt="인스타그램" />
                        <img src={Facebook} alt="페이스북" />
                        <img src={Twitter} alt="트위터" />
                        <img src={Youtube} alt="유튜브" />
                        <img src={Kakao} alt="카카오" />
                    </div>
                </div>
                <ul>
                    <li>빠른 링크</li>
                    <li>회사소개</li>
                    <li>문의사항</li>
                    <li>파트너</li>
                </ul>
                <ul>
                    <li>커뮤니티</li>
                    <li>자주 묻는 질문</li>
                    <li>개인정보</li>
                    <li>이용약관</li>
                </ul>
                <div className={styles.div_logo_2}>
                    <img src={Google} alt="구글플레이스토어" />
                    <img src={AppStore} alt="앱스토어" />
                </div>
            </div>
            <hr />
            <div className={styles['footer-bottom']}>
                <p>&copy; Golla Company</p>
                <p>language</p>
            </div>
        </footer>
    );
}

export default Footer;
