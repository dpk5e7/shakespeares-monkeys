import { Message, Icon } from "semantic-ui-react";


const Footer = () => {

  let footerStyle = {
    backgroundColor: "white",
  };

  return (
    <>
      <Message style={footerStyle}>
        <Message.Content>
          <Icon name="copyright outline" />
          2022 Shakespeare's Monkeys
        </Message.Content>
        <Message.Item as="a" href="https://buy.stripe.com/test_5kAbLm4G45Px39SfYY" target="_blank">
          Donate to Shakespeare's Monkeys
        </Message.Item>
      </Message>
    </>
  );
};

export default Footer;
