import classes from "./page.module.css";

export const metadata = {
  title: "Privacy Policy",
  description: "Created by win",
};

export default function PrivacyPolicy() {
  return (
    <section className={classes.section}>
      <p className={classes.title}>Privacy Policy</p>
      <p className={classes.paragraph}>
        At BOOOKS, we value your privacy and are committed to protecting your
        personal information. This Privacy Policy outlines how we collect, use,
        disclose, and protect your information when you visit our website, use
        our services, and make purchases on BOOOKS.com.
      </p>
      <p className={classes.header}>Information We Collect</p>
      <p className={classes.paragraph}>
        We collect various types of information to provide you with a
        personalized and efficient shopping experience. This may include:
      </p>
      <ul className={classes.list}>
        <li>
          <span>Personal Information:</span> When you create an account, make a
          purchase, or contact us, we may collect your name, email address,
          phone number, shipping address, billing address, and payment
          information.
        </li>
        <li>
          <span>Payment Information:</span> We may collect your credit/debit
          card information or other payment methods, which are processed
          securely through third-party payment processors.
        </li>
        <li>
          <span>Usage Data:</span> We collect information about how you interact
          with our website, such as your IP address, browser type, operating
          system, and pages visited.
        </li>
        <li>
          <span>Cookies:</span> We use cookies to enhance user experience,
          analyze website traffic, and personalize content. You can control
          cookie settings through your browser.
        </li>
      </ul>
      <p className={classes.header}>How We Use Your Information</p>
      <p className={classes.paragraph}>
        We use the information we collect for the following purposes:
      </p>
      <ul className={classes.list}>
        <li>
          To process and complete your orders, including payment and shipping.
        </li>
        <li>
          To communicate with you regarding your orders, account, and
          promotions.
        </li>
        <li>To improve our website, services, and customer experience.</li>
        <li>To send you marketing communications (if you have opted in).</li>
        <li>To comply with legal obligations and resolve disputes.</li>
      </ul>
      <p className={classes.header}>Sharing Your Information</p>
      <p className={classes.paragraph}>
        We may share your personal information with the following parties in
        specific circumstances:
      </p>
      <ul className={classes.list}>
        <li>
          <span>Service Providers:</span> We may share your information with
          third-party service providers who assist us with operations such as
          payment processing, shipping, and website maintenance.
        </li>
        <li>
          <span> Legal Compliance:</span> We may disclose your information if
          required by law or in response to legal processes, such as subpoenas,
          court orders, or requests from government authorities.
        </li>
      </ul>
      <p className={classes.header}>Contact Us</p>
      <p className={classes.paragraph}>
        If you have any questions or concerns about this Privacy Policy or your
        personal information, please contact us at:
      </p>
      <ul className={classes.list}>
        <li>
          <span>Email:</span>
          <a href="mailto:windylreylado@gmail.com"> hello@boooks.com</a>
        </li>
        <li>
          <span>Phone:</span> <a href="tel:(63) 927 0734 789">(02) 716-1255</a>
        </li>
      </ul>
    </section>
  );
}
