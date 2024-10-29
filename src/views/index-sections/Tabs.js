import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components

function Tabs() {
  const [iconPills, setIconPills] = React.useState("1");

  return (
    <>
      <div className="section section-tabs">
      <h5 style={{"text-align": "center"}}>Community forum</h5>
        <Container>

          <Row>
            <Col className="ml-auto mr-auto" md="10" xl="6">
            
              <Card>
                <CardHeader>
                  <Nav className="justify-content-center" role="tablist" tabs>
                    <NavItem>
                      <NavLink
                        className={iconPills === "1" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setIconPills("1");
                        }}
                      >
                        <i className="now-ui-icons emoticons_satisfied"></i>
                        James
                      </NavLink>
                    </NavItem>
                   
                   
                    
                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent
                    className="text-center"
                    activeTab={"iconPills" + iconPills}
                  >
                    <TabPane tabId="iconPills1">
                      <p>
                      Just wanted to share how excited I am with my little garden’s progress lately! After following the app’s suggestions for pest control and plant care, my tomatoes and herbs are thriving like never before.The community tips on organic fertilizers have been a game-changer too—my plants are healthier and greener. Thanks to everyone for the inspiration and advice."
                      </p>
                    </TabPane>
                    
        
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
            <Col className="ml-auto mr-auto" md="10" xl="6">
            
            <Card>
              <CardHeader>
                <Nav className="justify-content-center" role="tablist" tabs>
                  <NavItem>
                    <NavLink
                      className={iconPills === "1" ? "active" : ""}
                      href="#pablo"
                      onClick={(e) => {
                        e.preventDefault();
                        setIconPills("1");
                      }}
                    >
                      <i className="now-ui-icons emoticons_satisfied"></i>
                      Ashley
                    </NavLink>
                  </NavItem>
                 
                 
                  
                </Nav>
              </CardHeader>
              <CardBody>
                <TabContent
                  className="text-center"
                  activeTab={"iconPills" + iconPills}
                >
                  <TabPane tabId="iconPills1">
                    <p>
                    "I wanted to share some great news from the farm today. After using our new watering schedule and crop rotation plan suggested by the app, I'm seeing healthier crops and better yields than ever before! The tips on soil health really made a difference. Plus, connecting with all of you in this community has been a game-changer—so much valuable advice and support. Here's to a bountiful harvest season for all of us!"








                    </p>
                  </TabPane>
                  
      
                </TabContent>
              </CardBody>
            </Card>
          </Col> 
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Tabs;
