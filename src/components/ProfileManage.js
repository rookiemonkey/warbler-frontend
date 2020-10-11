import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProfileManageGeneral from './mini/ProfileManageGeneral';
import ProfileManageAvatar from './mini/ProfileManageAvatar';
import ProfileManageHeader from './mini/ProfileManageHeader';
import ProfileManageAuthentication from './mini/ProfileManageAuthentication';

const ProfileManage = () => {

    return (
        <Container className="manageprofile_container">
            <Tab.Container
                id="left-tabs-example"
                defaultActiveKey="general"
            >
                <Row className="manageprofile_row">
                    <Col sm={3} className="manageprofile_aside">
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="general">
                                    General
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="avatar">
                                    Avatar
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="header">
                                    Profile Header
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="authentication">
                                    Authentication
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9} className="manageprofile_main">
                        <Tab.Content>
                            <Tab.Pane eventKey="general">
                                <ProfileManageGeneral />
                            </Tab.Pane>
                            <Tab.Pane eventKey="avatar">
                                <ProfileManageAvatar />
                            </Tab.Pane>
                            <Tab.Pane eventKey="header">
                                <ProfileManageHeader />
                            </Tab.Pane>
                            <Tab.Pane eventKey="authentication">
                                <ProfileManageAuthentication />
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Container>
    )
}

export default ProfileManage;