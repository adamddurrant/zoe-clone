import Alert from "./alert";
import Footer from "./footer";
import Meta from "./meta";
import Header from "./header";
import Container from "./container";
import EmailSignup from "./email-signup";

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className='min-h-screen'>
        <Alert preview={preview} />
        <Container>
          <Header />
        </Container>
        <main>{children}</main>
      </div>
      <EmailSignup />
      <Footer />
    </>
  );
}
