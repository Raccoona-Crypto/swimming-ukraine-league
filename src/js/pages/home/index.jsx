import React, { Component } from 'react';

import Events from '../../components/events';
import Members from '../../components/members';

export default class Home extends Component {
    render() {
        return (
            <main>
                <Events sectionTitle='Актуальные соревнования' />
                <Members />
            </main>
        );
    }
}
