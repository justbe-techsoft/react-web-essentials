import React from 'react';
import { Tabs, Tab, ButtonGroup, Button } from 'react-bootstrap'






export const HomeComponent = () => {
    return (
        <Tabs defaultActiveKey="myEvents" id="uncontrolled-tab-example">
            <Tab eventKey="myEvents" title="MY EVENTS">
                <ButtonGroup aria-label="Basic example">
                    <Button variant="secondary">Left</Button>
                    <Button variant="secondary">Middle</Button>
                    <Button variant="secondary">Right</Button>
                </ButtonGroup>
            </Tab>
            <Tab eventKey="all" title="ALL">
                <h1>RAHUL</h1>
            </Tab>
        </Tabs>
    )
}
