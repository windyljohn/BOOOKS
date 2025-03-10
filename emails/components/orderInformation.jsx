import { formatPrice } from "@/lib/formatters";
import {
  Container,
  Column,
  Hr,
  Img,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

export default function OrderInformation({ item }) {
  const formattedPrice = formatPrice(item.price);
  return (
    <Container style={global.main}>
      <Section>
        <Row style={{ paddingBottom: "22px" }}>
          <Column width={100}>
            <Img src={item.image} height={150} width={100} />
          </Column>
          <Column
            align="left"
            style={{ paddingLeft: "20px", fontSize: "16px", maxWidth: "100px" }}
          >
            <Row>
              <Text style={global.title}>{item.title}</Text>
            </Row>
            <Row>
              <Text style={global.author}>{item.author}</Text>
            </Row>
          </Column>
          <Column align="right">
            <Text>
              {item.quantity} x {formattedPrice}
            </Text>
          </Column>
        </Row>
        <Hr style={global.hr} />
      </Section>
    </Container>
  );
}

const global = {
  main: {
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
    paddingTop: "20px",
  },
  hr: {
    borderColor: "#E5E5E5",
    margin: "0",
  },
  title: {
    fontSize: "14px",
    margin: "0",
  },
  author: {
    fontSize: "12px",
    margin: "0",
  },
  total: {
    fontSize: "16px",
    fontWeight: "bold",
  },
};
