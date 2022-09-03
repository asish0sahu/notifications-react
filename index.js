const Notification = (props) => {
  const { image, text, backgroundColor } = props;
  return (
    <div className={backgroundColor}>
      <img src={image} className="img" />
      <p className="desc">{text}</p>
    </div>
  );
  //  Write your code here.
};

const element = (
  <div className="bg-container">
    <div className="notification-container">
      <h1 className="heading">Notifications</h1>
      <div className="notifications-container">
        <Notification
          image="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
          text="Information Message"
          backgroundColor="main-notification primary"
        />
        <Notification
          image="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
          text="Success Message"
          backgroundColor="main-notification success"
        />
        <Notification
          image="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
          text="Warning Message"
          backgroundColor="main-notification warning"
        />
        <Notification
          image="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
          text="Error Message"
          backgroundColor="main-notification danger"
        />
      </div>
    </div>
  </div>
  //  Write your code here.
);

ReactDOM.render(element, document.getElementById("root"));
