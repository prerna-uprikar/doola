import styles from "./WelcomeSec.module.scss";

function Welcome() {
  return (
    <>
      <div className={styles.welcomeSection}>
        <div className={styles.welcomeTextWrap}>
          <p className={styles.welcomeTo}>WELCOME TO</p>
          <h1 className={styles.dental}>Dental Clinic</h1>
          <p className={styles.newYork}>254 W 27ST ST, NEW YORK, NY 10011</p>
          <p className="">​(212) 123-4567</p>
          <p>341 W 11ST ST, NEW YORK, NY 10022</p>
          <p>​(212) 123-4567</p>
          <p>
            Image from <a href="/">Freepick</a>
          </p>
          <button className={styles.bookBtn}>Book Online</button>
        </div>
        <div className={styles.leftImage}>
          <img
            src="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/e18c215b0958521e985ca975/hhh7-min.jpg"
            className={styles.imageNice}
          />
        </div>
      </div>

      <div className={styles.cardSection}>
        <img
          src="https://ucarecdn.com/8fd25979-5cae-4d1f-95b4-45b462321abc/-/preview/1918x355/"
          className={styles.cardSection}
        />
      </div>

      <div className={styles.MissonWrap}>
        <h1 className={styles.missionText}>Mission, Vision & History</h1>

        <div className={styles.MissionWrapper}>
          <div className={styles.misson}>
            <p className={styles.MissonTextHead}>MISSION</p>
            <p className={styles.para}>
              Comfort produce husband boy her had hearing. Law others theirs
              passed but wishes. You day real less till dear read. Considered
              use dispatched melancholy sympathize discretion led.
            </p>
          </div>
          <div className={styles.vision}>
            <p className={styles.MissonTextHead}>VISION</p>
            <p className={styles.para}>
              Comfort produce husband boy her had hearing. Law others theirs
              passed but wishes. You day real less till dear read. Considered
              use dispatched melancholy sympathize discretion led.
            </p>
          </div>
        </div>

        <div className={styles.MissionWrapper}>
          <div className={styles.misson}>
            <p className={styles.MissonTextHead}>HISTORY</p>
            <p className={styles.para}>
              Comfort produce husband boy her had hearing. Law others theirs
              passed but wishes. You day real less till dear read. Considered
              use dispatched melancholy sympathize discretion led.
            </p>
          </div>
          <div className={styles.vision}>
            <p className={styles.MissonTextHead}>OUR TEAM</p>
            <p className={styles.para}>
              Comfort produce husband boy her had hearing. Law others theirs
              passed but wishes. You day real less till dear read. Considered
              use dispatched melancholy sympathize discretion led.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.bgWrappeerr}>
        <div className={styles.fgh}>
          <p className={styles.aboutUs}>ABOUT US</p>
          <p className={styles.DentalCare}>
            Dental Care <br /> Services
          </p>
          <div className={styles.egestas}>
            <p className={styles.seddd}>
              Egestas sed tempus urna et pharetra. Amet risus nullam eget felis.
              Venenatis urna cursus eget nunc scelerisque in. Condimentum vitae
              sapien pellentesque habitant.
            </p>
            <p className={styles.tempus}>
              Egestas sed tempus urna et pharetra. Amet risus nullam eget felis.
              Venenatis urna cursus eget nunc scelerisque in. Condimentum vitae
              sapien pellentesque habitant.
            </p>
          </div>
        </div>
      </div>

      <div>
        <img
          src="https://ucarecdn.com/
891f1d5f-b393-4df4-a206-56761c37ba35/
-/preview/1862x683/"
          className={styles.peopleSecImg}
        />
      </div>

      <div>
        <img
          src="https://ucarecdn.com/7c1f2557-2bde-46c8-a74a-daa69e2a6199/-/preview/1862x683/"
          className={styles.peopleSecImg}
        />
      </div>

      <div className={styles.ourTeamWrapper}>
          <h1>Our Team</h1>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <div>
        <img
          src="https://ucarecdn.com/68cb1b0a-d3a9-450f-a6d9-fa26195f8bf9/-/preview/1862x683/"
          className={styles.peopleSecImg}
        />
      </div>
      <div>
        <img
          src="https://ucarecdn.com/68cb1b0a-d3a9-450f-a6d9-fa26195f8bf9/-/preview/1862x683/"
          className={styles.peopleSecImg}
        />
      </div>
      </div>

      <div>
        <img
          src="https://ucarecdn.com/cfe0cd67-8c92-4704-a8ea-7af073e65955/-/preview/1862x683//"
          className={styles.peopleSecImg}
        />
      </div>
    </>
  );
}

export default Welcome;
