import { Message, Icon } from "semantic-ui-react";


const Footer = () => {

  let footerStyle = {
    backgroundColor: "white",
  };

  return (
    <>
      <Message style={footerStyle}>
        <Icon name="copyright outline" />
        Shakespeare's Monkeys
      </Message>
    </>
  );
};

export default Footer;
