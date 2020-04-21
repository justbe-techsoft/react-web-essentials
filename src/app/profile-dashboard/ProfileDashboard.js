import React from 'react';

import { Button, Tabs, Tab, ButtonGroup } from 'react-bootstrap'





export const ProfileDashboard = () => {
    return (
        <div style={{ margin: '10%' }}>
            <Tabs defaultActiveKey="myEvents" id="uncontrolled-tab-example">
                <Tab eventKey="myEvents" title="My Events">
                    <div style={{ margin: '10%', textAlign: 'center' }}>
                        <ButtonGroup aria-label="Basic example">
                            <Button variant="secondary">Upcoming</Button>
                            <Button variant="secondary">Live</Button>
                            <Button variant="secondary">Completed</Button>
                        </ButtonGroup>
                    </div>
                    <div style={{ margin: '10%', textAlign: 'center' }}>
                        <ButtonGroup aria-label="Basic example">
                            <Button variant="secondary">INCREMENT</Button>
                            <Button variant="secondary">DECREMENT</Button>
                        </ButtonGroup>
                    </div>
                </Tab>
                <Tab eventKey="all" title="All">
                    <div style={{ margin: '10%', textAlign: 'center' }}>
                        <ButtonGroup aria-label="Basic example">
                            <Button variant="secondary">Upcoming</Button>
                            <Button variant="secondary">Live</Button>
                            <Button variant="secondary">Completed</Button>
                        </ButtonGroup>
                    </div>
                </Tab>
            </Tabs>
        </div>
    )
}