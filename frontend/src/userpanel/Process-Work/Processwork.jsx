import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaShieldAlt, FaMoneyBillAlt, FaHandshake } from 'react-icons/fa';
import './ProcessSection.css';  // Custom styles for the section

const WhyChooseUs = () => {
  const [buyers, setBuyers] = useState(0);
  const [transactions, setTransactions] = useState(0);
  const [partners, setPartners] = useState(0);
  const [clients, setClients] = useState(0);

  useEffect(() => {
    // Incremental animations for counts
    const increment = (setter, finalValue, speed) => {
      let count = 0;
      const interval = setInterval(() => {
        count += 1;
        setter(count);
        if (count >= finalValue) clearInterval(interval);
      }, speed);
    };

    increment(setBuyers, 1000000, 2);
    increment(setTransactions, 2500, 5);
    increment(setPartners, 500, 20);
    increment(setClients, 15000, 1);
  }, []);

  return (
    <Container fluid className="why-choose-us-section py-5">
      <Row className="justify-content-center text-center">
        <Col lg={8}>
          <h2 className="headingtr">Why Choose CDIPL Properties</h2>
          <p className="pty ">
            CDIPL stands as a trusted channel partner in the real estate industry, offering unmatched property opportunities, exceptional customer service, and complete transparency in every deal.
          </p>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col lg={4} md={6} className="mb-4">
          <Card className="text-center p-4 shadow card-gradient hover-card">
            <div className="card-logo">
              <img src='./cdipl.png' alt="CDIPL Logo" />
            </div>
            <FaShieldAlt size={50} className="icon mb-3" />
            <Card.Body>
              <Card.Title style={{color:'white'}}>Trusted Channel Partner</Card.Title>
              <Card.Text>
                CDIPL ensures that you are partnering with a firm with a reputation for transparency and legal reliability, making your property investment secure.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6} className="mb-4">
          <Card className="text-center p-4 shadow card-gradient hover-card">
            <div className="card-logo">
              <img src='./cdipl.png' alt="CDIPL Logo" />
            </div>
            <FaMoneyBillAlt size={50} className="icon mb-3" />
            <Card.Body>
              <Card.Title style={{color:'white'}}>Profitable Investment Options</Card.Title>
              <Card.Text>
                Our properties offer the best interest rates in the market, giving you excellent returns on investment with zero hidden fees.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6} className="mb-4">
          <Card className="text-center p-4 shadow card-gradient hover-card">
            <div className="card-logo">
              <img src='./cdipl.png' alt="CDIPL Logo" />
            </div>
            <FaHandshake size={50} className="icon mb-3" />
            <Card.Body>
              <Card.Title style={{color:'white'}}>Low Commissions, High Benefits</Card.Title>
              <Card.Text >
                Enjoy the perks of being a CDIPL partner with one of the lowest commission structures, coupled with exclusive support and benefits.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Stats Section with Circular Animation */}
      <Row className="mt-5 text-center">
        <Col md={3} className="mb-4">
          <div className="stats-box">
            <div className="circle">{buyers.toLocaleString()}</div>
            <p className='try'>Happy Buyers & Sellers</p>
          </div>
        </Col>
        <Col md={3} className="mb-4">
          <div className="stats-box">
            <div className="circle">{transactions.toLocaleString()}</div>
            <p className='try'>Total Transactions</p>
          </div>
        </Col>
        <Col md={3} className="mb-4">
          <div className="stats-box">
            <div className="circle">{partners}</div>
            <p className='try'>Trusted Channel Partners</p>
          </div>
        </Col>
        <Col md={3} className="mb-4">
          <div className="stats-box">
            <div className="circle">{clients.toLocaleString()}</div>
            <p className='try'>Happy Clients</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default WhyChooseUs;
