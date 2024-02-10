import Header from "./components/template/Header";
import SideNavigation from "./components/template/SideNavigation";
import { Col, Row } from "reactstrap";
import Footer from "./components/template/Footer";

function App() {
  const styles = {
    contentDiv: {
      display: "flex",
    },
    contentMargin: {
      marginLeft: "10px",
      width: "100%",
    },
  };
  return (
    <>
      <Row>
        <Col>
          <Header></Header>
        </Col>
      </Row>

      <div style={styles.contentDiv}>
        <SideNavigation></SideNavigation>
       </div>
       <Footer />
    </>
  );
}

export default App;