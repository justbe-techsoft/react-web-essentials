import React from 'react';

import { Button, Tabs, Tab, ButtonGroup } from 'react-bootstrap'
import { connect } from 'react-redux';
import { incrementCount, decrementCount, } from '../redux/alpha'



const mapStateToProps = (state) => {
    return { count: state.alpha.count }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increamentCount: () => {
            dispatch(incrementCount(1))
        },
        decrementCount: () => {
            dispatch(decrementCount(1))
        }
    }
}



const ProfileDashboard = (props) => {
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
                            <Button variant="secondary">{props.count}</Button>
                            <Button variant="secondary" onClick={props.increamentCount}>INCREMENT</Button>
                            <Button variant="secondary" onClick={props.decrementCount}>DECREMENT</Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProfileDashboard);