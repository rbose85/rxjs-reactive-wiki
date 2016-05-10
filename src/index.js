import Cycle from '@cycle/core'
import CycleDOM from '@cycle/dom'
import Rx from 'rx'

require('./index.css');

const elem = document.createElement('div');
elem.id = 'container';
document.body.appendChild(elem);

const main = () => ({
  DOM: Rx.Observable.just(CycleDOM.h('span', 'Hi there!'))
});

const drivers = {
  DOM: CycleDOM.makeDOMDriver('#container')
};

Cycle.run(main, drivers);
