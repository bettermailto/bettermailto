import { isMobile } from "react-device-detect";

const Providers = (props) => {
  function recaptchaGmail(e) {
    e.preventDefault();
    grecaptcha.ready(function () {
      grecaptcha
        .execute("6LdtPf8dAAAAAOO2sn-5upuzsnggOa5PsXBcuZDf", {
          action: "submit",
        })
        .then(function (token) {
          const URL_RECAPTCHA = `https://bettermailto-cors.herokuapp.com/https://google.com/recaptcha/api/siteverify?secret=${process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY}&response=${token}`;

          document.getElementById("gmail-spin").src = "/static/spin.jpeg";

          fetch(URL_RECAPTCHA)
            .then((response) => response.json())
            .then((data) => {
              if (data.score >= 0.6) {
                if (isMobile) {
                  window.location = `googlegmail:///co?to=${props.email}&subject=${props.subject}`;

                  setTimeout(function () {
                    window.location = `https://mail.google.com/mail/?view=cm&fs=1&to=${props.email}&su=${props.subject}`;
                  }, 3000);
                } else {
                  window.location = `https://mail.google.com/mail/?view=cm&fs=1&to=${props.email}&su=${props.subject}`;
                }
              } else {
                document.getElementById("robot").style.display = "block";
              }
              document.getElementById("gmail-spin").src = "/static/gmail.png";
            });
        });
    });
  }

  function recaptchaOutlook(e) {
    e.preventDefault();
    grecaptcha.ready(function () {
      grecaptcha
        .execute("6LdtPf8dAAAAAOO2sn-5upuzsnggOa5PsXBcuZDf", {
          action: "submit",
        })
        .then(function (token) {
          const URL_RECAPTCHA = `https://bettermailto-cors.herokuapp.com/https://google.com/recaptcha/api/siteverify?secret=${process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY}&response=${token}`;

          document.getElementById("outlook-spin").src = "/static/spin.jpeg";

          fetch(URL_RECAPTCHA)
            .then((response) => response.json())
            .then((data) => {
              if (data.score >= 0.6) {
                if (isMobile) {
                  window.location = `ms-outlook://compose?to=${props.email}&subject=${props.subject}`;

                  setTimeout(function () {
                    window.location = `https://outlook.office.com/mail/deeplink/compose?to=${props.email}&subject=${props.subject}`;
                  }, 3000);
                } else {
                  window.location = `https://outlook.office.com/mail/deeplink/compose?to=${props.email}&subject=${props.subject}`;
                }
              } else {
                document.getElementById("robot").style.display = "block";
              }
              document.getElementById("outlook-spin").src =
                "/static/outlook.png";
            });
        });
    });
  }

  function recaptchaYahoo(e) {
    e.preventDefault();
    grecaptcha.ready(function () {
      grecaptcha
        .execute("6LdtPf8dAAAAAOO2sn-5upuzsnggOa5PsXBcuZDf", {
          action: "submit",
        })
        .then(function (token) {
          const URL_RECAPTCHA = `https://bettermailto-cors.herokuapp.com/https://google.com/recaptcha/api/siteverify?secret=${process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY}&response=${token}`;

          document.getElementById("yahoo-spin").src = "/static/spin.jpeg";

          fetch(URL_RECAPTCHA)
            .then((response) => response.json())
            .then((data) => {
              if (data.score >= 0.6) {
                if (isMobile) {
                  window.location = `ymail://mail/compose?&to=${props.email}&subject=${props.subject}`;

                  setTimeout(function () {
                    window.location = `https://compose.mail.yahoo.com/?to=${props.email}&subject=${props.subject}`;
                  }, 3000);
                } else {
                  window.location = `https://compose.mail.yahoo.com/?to=${props.email}&subject=${props.subject}`;
                }
              } else {
                document.getElementById("robot").style.display = "block";
              }
              document.getElementById("yahoo-spin").src = "/static/yahoo.png";
            });
        });
    });
  }

  function otherProviders(e) {
    grecaptcha.ready(function () {
      grecaptcha
        .execute("6LdtPf8dAAAAAOO2sn-5upuzsnggOa5PsXBcuZDf", {
          action: "submit",
        })
        .then(function (token) {
          const URL_RECAPTCHA = `https://bettermailto-cors.herokuapp.com/https://google.com/recaptcha/api/siteverify?secret=${process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY}&response=${token}`;

          fetch(URL_RECAPTCHA)
            .then((response) => response.json())
            .then((data) => {
              if (data.score >= 0.6) {
                if (e == "default") {
                  window.location = `mailto:${props.email}?subject=${props.subject}`;
                }
              } else {
                document.getElementById("robot").style.display = "block";
              }
            });
        });
    });
  }

  return (
    <div className="provider-megaflex">
      <h2 id="robot" style={{ display: "none" }}>
        Seems like you're not human. Please try again if you are!
      </h2>
      <div className="provider-div" id="provider-js">
        <div className="provider" onClick={recaptchaGmail}>
          <img
            src="/static/gmail.png"
            id="gmail-spin"
            alt="Gmail"
            height="200px"
          />
          <h1>Gmail</h1>
        </div>

        <div className="provider" onClick={recaptchaOutlook}>
          <img
            src="/static/outlook.png"
            id="outlook-spin"
            alt="Outlook"
            height="200px"
          />
          <h1>Outlook</h1>
        </div>
        <div className="provider" onClick={recaptchaYahoo}>
          <img
            src="/static/yahoo.png"
            id="yahoo-spin"
            alt="Yahoo"
            height="200px"
          />
          <h1>Yahoo</h1>
        </div>
      </div>
      <select
        className="other-providers"
        onChange={(e) => otherProviders(e.target.value)}
      >
        <option value="" disabled selected hidden>
          Other Providers
        </option>
        <option value="default">Default Provider (mailto)</option>
      </select>
    </div>
  );
};

Providers.defaultProps = {
  email: "test@bettermailto.com",
};

export default Providers;
