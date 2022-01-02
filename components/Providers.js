const Providers = (props) => {
  return (
    <div className="provider-div">
      <a
        href={
          "https://mail.google.com/mail/?view=cm&fs=1&to=" +
          // @ts-ignore
          props.email +
          "&su=" +
          // @ts-ignore
          props.subject
        }
      >
        <div>
          <img src="/static/gmail.png" alt="Gmail" height="200px" />
          <h1>Gmail</h1>
        </div>
      </a>
      <a
        href={
          "https://outlook.office.com/mail/deeplink/compose?to=" +
          // @ts-ignore
          props.email +
          "&subject=" +
          // @ts-ignore
          props.subject
        }
      >
        <div>
          <img src="/static/outlook.png" alt="Outlook" height="200px" />
          <h1>Outlook</h1>
        </div>
      </a>
      <a
        href={
          "https://compose.mail.yahoo.com/?to=" +
          // @ts-ignore
          props.email +
          "&subject=" +
          // @ts-ignore
          props.subject
        }
      >
        <div>
          <img src="/static/yahoo.png" alt="Yahoo" height="200px" />
          <h1>Yahoo</h1>
        </div>
      </a>
    </div>
  );
};

Providers.defaultProps = {
  email: "test@bettermailto.com",
};

export default Providers;
