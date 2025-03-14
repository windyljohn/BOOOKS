import {
  Body,
  Container,
  Column,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
  Link,
  Button,
} from "@react-email/components";
import * as React from "react";

export default function NewsletterEmail({}) {
  const date = new Date(Date.now());

  return (
    <Html>
      <Preview>Your 10% discount code inside</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={track.container}>
            <Row>
              <Column
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <Img
                  src="https://wind-boooks.s3.ap-southeast-2.amazonaws.com/boooks-icon.png"
                  height={32}
                  style={{ display: "block" }}
                />
                <Text style={{ ...global.title, display: "block" }}>
                  BOOOKS
                </Text>
              </Column>
            </Row>
          </Section>
          <Hr style={global.hr} />
          <Section style={message}>
            <Row>
              <Column style={{ display: "flex", justifyContent: "center" }}>
                <Img
                  src="https://wind-boooks.s3.ap-southeast-2.amazonaws.com/email-welcome.jpg"
                  width={600}
                  style={{ marginBottom: "20px" }}
                />
              </Column>
            </Row>
            <Heading style={global.heading}>
              Welcome to BOOOKS community
            </Heading>
            <Text style={{ ...global.text, marginBottom: "20px" }}>
              Thank you for signing up! As part of the community you'll receive
              notification for new arrivals and exclusive offers.
            </Text>
            <Text style={{ ...global.text }}>
              Stay tuned for updates and enjoy the perks of being one of the
              first to know about our latest products and promotions!
            </Text>
            <Row>
              <Column
                style={{
                  display: "flex",
                  justifyContent: "center",

                  marginTop: "20px",
                }}
              >
                <Link
                  href="https://boooks-nine.vercel.app/"
                  style={{
                    fontSize: "12px",
                    fontFamily: "GT Walsheim Pro",
                    fontWeight: "normal",
                    border: "solid 1.5px #000",
                    padding: "8px 12px",
                    color: "#000",
                  }}
                >
                  Shop all Books
                </Link>
              </Column>
            </Row>
          </Section>
          <Hr style={{ ...global.hr }} />
          <Section style={paddingY}>
            <Row style={footer.policy}>
              <Column>
                <Text style={footer.text}>Web Version</Text>
              </Column>
              <Column>
                <Text style={footer.text}>Privacy Policy</Text>
              </Column>
            </Row>
            <Row>
              <Text
                style={{ ...footer.text, paddingTop: 30, paddingBottom: 30 }}
              >
                Please contact us if you have any questions. (If you reply to
                this email, we won't be able to see it.)
              </Text>
            </Row>
            <Row>
              <Text style={footer.text}>
                © 2025 BOOOKS, Inc. All Rights Reserved.
              </Text>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const paddingX = {
  paddingLeft: "40px",
  paddingRight: "40px",
};

const paddingY = {
  paddingTop: "22px",
  paddingBottom: "22px",
};

const paragraph = {
  margin: "0",
  lineHeight: "2",
};

const global = {
  paddingX,
  paddingY,
  defaultPadding: {
    ...paddingX,
    ...paddingY,
  },
  title: {
    fontSize: "32px",
    display: "inline",
    fontFamily: "GT Walsheim Pro",
    fontWeight: "bold",
  },
  order: {
    fontSize: "12px",
    fontFamily: "GT Walsheim Pro",
    fontWeight: "normal",
  },
  heading: {
    fontSize: "24px",
    lineHeight: "1.3",
    textAlign: "center",
    letterSpacing: "-1px",
    fontFamily: "GT Walsheim Pro",
    fontWeight: 500,
  },
  text: {
    ...paragraph,
    color: "#000",
    textAlign: "center",
    fontSize: "14px",
    lineHeight: 1.4,
    fontFamily: "GT Walsheim Pro",
    fontWeight: 400,
  },
  button: {
    border: "1px solid #929292",
    fontSize: "16px",
    textDecoration: "none",
    padding: "10px 0px",
    width: "220px",
    display: "block",
    textAlign: "center",
    fontWeight: 500,
    color: "#000",
  },
  hr: {
    borderColor: "#E5E5E5",
    margin: "0",
  },
  total: {
    fontSize: "16px",
    fontWeight: "bold",
    fontFamily: "GT Walsheim Pro",
    fontWeight: "bold",
  },
  shipping: {
    fontSize: "14px",
    fontWeight: "bold",
    fontFamily: "GT Walsheim Pro",
    fontWeight: "normal",
  },
};

const main = {
  backgroundColor: "#ffffff",
  fontFamily: "GT Walsheim Pro",
  fontWeight: 300,
};

const container = {
  margin: "10px auto",
  width: "600px",
  maxWidth: "100%",
  border: "1px solid #E5E5E5",
};

const track = {
  container: {
    padding: "22px 40px",
    backgroundColor: "#F5F5F5",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  number: {
    margin: "12px 0 0 0",
    fontWeight: 500,
    lineHeight: "1.4",
    color: "#6F6F6F",
  },
};

const message = {
  padding: "22px 40px",
  textAlign: "left",
};

const adressTitle = {
  ...paragraph,
  fontSize: "15px",
  fontWeight: "bold",
  fontFamily: "GT Walsheim Pro",
  fontWeight: "bold",
};

const footer = {
  policy: {
    width: "166px",
    margin: "auto",
  },
  text: {
    margin: "0",
    color: "#3c3c3c",
    fontSize: "13px",
    textAlign: "center",
    fontFamily: "GT Walsheim Pro",
    fontWeight: "light",
  },
};
