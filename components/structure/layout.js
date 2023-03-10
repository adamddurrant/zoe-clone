import Alert from "../home/alert";
import Footer from "../home/footer";
import Meta from "./meta";
import Header from "./header";
import Container from "./container";

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className='min-h-screen'>
        <Alert preview={preview} />
        <Container>
          <Header />
        </Container>
        <main id='main'>{children}</main>
      </div>
      <Footer />
    </>
  );
}
