import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProfileManageGeneral from './mini/ProfileManageGeneral';
import ProfileManageAvatar from './mini/ProfileManageAvatar';
import ProfileManageAuthentication from './mini/ProfileManageAuthentication';

const ProfileManage = () => {

    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
                <Col sm={3}>
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
                            <Nav.Link eventKey="authentication">
                                Authentication
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col sm={9}>
                    <Tab.Content>
                        <Tab.Pane eventKey="general">
                            <ProfileManageGeneral />
                        </Tab.Pane>
                        <Tab.Pane eventKey="avatar">
                            <ProfileManageAvatar />
                        </Tab.Pane>
                        <Tab.Pane eventKey="authentication">
                            <ProfileManageAuthentication />
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    )
}

export default ProfileManage;