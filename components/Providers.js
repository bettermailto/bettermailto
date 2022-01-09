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

          fetch(URL_RECAPTCHA)
            .then((response) => response.json())
            .then((data) => {
              if (data.score >= 0.6) {
                window.location =
                  "https://mail.google.com/mail/?view=cm&fs=1&to=" +
                  props.email +
                  "&su=" +
                  props.subject;
              }
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
          fetch(
            `https://bettermailto-cors.herokuapp.com/https://google.com/recaptcha/api/siteverify?secret=${process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY}&response=${token}`
          )
            .then((response) => response.json())
            .then((data) => {
              if (data.score >= 0.6) {
                window.location =
                  "https://outlook.office.com/mail/deeplink/compose?to=" +
                  props.email +
                  "&subject=" +
                  props.subject;
              }
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
          fetch(
            `https://bettermailto-cors.herokuapp.com/https://google.com/recaptcha/api/siteverify?secret=${process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY}&response=${token}`
          )
            .then((response) => response.json())
            .then((data) => {
              if (data.score >= 0.6) {
                window.location =
                  "https://compose.mail.yahoo.com/?to=" +
                  props.email +
                  "&subject=" +
                  props.subject;
              }
            });
        });
    });
  }

  return (
    <div className="provider-div">
      <div className="provider" onClick={recaptchaGmail}>
        <img src="/static/gmail.png" alt="Gmail" height="200px" />
        <h1>Gmail</h1>
      </div>

      <div className="provider" onClick={recaptchaOutlook}>
        <img src="/static/outlook.png" alt="Outlook" height="200px" />
        <h1>Outlook</h1>
      </div>
      <div className="provider" onClick={recaptchaYahoo}>
        <img src="/static/yahoo.png" alt="Yahoo" height="200px" />
        <h1>Yahoo</h1>
      </div>
    </div>
  );
};

Providers.defaultProps = {
  email: "test@bettermailto.com",
};

export default Providers;
