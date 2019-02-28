import React, { Component } from 'react';
import { Router, Stack, Scene, Text } from 'react-native-router-flux';
import Register from './pages/register';
import Record from './pages/record';

export default class Routes extends Component {
    render() {
        return (
            <Router>
                <Stack key="root" hideNavBar={true}>
                    <Scene key="register" component={Register} title="Login" initial={true} />
                    <Scene key="records" component={Record} title="Show record"  />
                </Stack>
            </Router>
        );
    }
}
