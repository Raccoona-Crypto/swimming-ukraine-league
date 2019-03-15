import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import Events from '../../components/events';

@inject('User')
@observer
export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            eventsList: [
                {
                    'id': 756,
                    'title': 'Обласний турнір з плавання пам\'яті капітнана ЗСУ Максима Савченка',
                    'dateStart': '27.03.2019',
                    'dateEnd': '27.03.2019',
                    'country': 'Украина',
                    'city': 'Сумы'
                },
                {
                    'id': 123,
                    'title': 'Другий Всеукраїнський кубок Академії спорту з плавання 2019',
                    'dateStart': '23.03.2019',
                    'dateEnd': '24.03.2019',
                    'country': 'Украина',
                    'city': 'Киев'
                },
                {
                    'id': 235,
                    'title': 'Чемпіонат України з плавання в категорії "Мастерс"',
                    'dateStart': '28.04.2019',
                    'dateEnd': '29.04.2019',
                    'country': 'Украина',
                    'city': 'Одесса'
                },
                {
                    'id': 78,
                    'title': 'Перший етап Ліги плавання України',
                    'dateStart': '15.03.2019',
                    'dateEnd': '17.03.2019',
                    'country': 'Украина',
                    'city': 'Харків',
                },
            ],
        };
    }

    render() {
        return (
            <main>
                <Events
                    eventsList={this.state.eventsList}
                    sectionTitle="Актуальные соревнования"
                />
            </main>
        );
    }
}
