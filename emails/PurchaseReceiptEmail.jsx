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
} from "@react-email/components";
import * as React from "react";
import OrderInformation from "./components/orderInformation";
import { formatPrice } from "@/lib/formatters";

export default function PurchaseReceiptEmail({
  amount,
  name,
  address,
  orderNumber,
  shipping,
  items,
}) {
  const totalPrice = formatPrice(amount / 100);

  const date = new Date(Date.now());

  const formattedDate = new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(date);

  return (
    <Html>
      <Preview>
        Get your order summary, estimated delivery date and more
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={track.container}>
            <Row>
              <Column
                style={{ alignItems: "center", display: "flex", gap: "5px" }}
              >
                <Img
                  src="https://wind-boooks.s3.ap-southeast-2.amazonaws.com/boooks-icon.png"
                  height={25}
                  style={{ display: "block" }}
                />
                <Text style={{ ...global.title, display: "block" }}>
                  BOOOKS
                </Text>
              </Column>
              <Column align="right">
                <Text style={global.order}>
                  {formattedDate} • Order #{orderNumber}
                </Text>
              </Column>
            </Row>
          </Section>
          <Hr style={global.hr} />
          <Section style={message}>
            <Heading style={global.heading}>Order Confirmed!</Heading>
            <Text style={{ ...global.text, fontWeight: "500" }}>
              Hello {name},
            </Text>
            <Text style={{ ...global.text }}>
              Your order has been confirmed and will be shipping in the next 3
              days.
            </Text>
          </Section>
          <Section
            style={{ ...paddingX, paddingTop: "11px", paddingBottom: "22px" }}
          >
            <Text style={{ ...adressTitle, paddingBottom: "11px" }}>
              Order summary:
            </Text>
            {items.map((item) => (
              <OrderInformation key={item.id} style={main} item={item} />
            ))}
            <Row>
              <Column>
                <Text style={global.shipping}>Shipping</Text>
              </Column>
              <Column align="right">
                <Text style={global.shipping}>
                  {shipping ? formatPrice(10) : "free"}
                </Text>
              </Column>
            </Row>
            <Row>
              <Column>
                <Text style={global.total}>Total</Text>
              </Column>
              <Column align="right">
                <Text style={global.total}>{totalPrice}</Text>
              </Column>
            </Row>
          </Section>

          <Section
            style={{ ...paddingX, paddingTop: "22px", paddingBottom: "44px" }}
          >
            <Text style={adressTitle}>Shipping to:</Text>
            <Text style={{ ...global.text, fontSize: 14 }}>{address}</Text>
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
    fontSize: "22px",
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
    fontSize: "32px",
    lineHeight: "1.3",
    textAlign: "left",
    letterSpacing: "-1px",
    fontFamily: "GT Walsheim Pro",
    fontWeight: "bold",
  },
  text: {
    ...paragraph,
    color: "#000",
    textAlign: "left",
    fontSize: "16px",
    fontFamily: "GT Walsheim Pro",
    fontWeight: "light",
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
