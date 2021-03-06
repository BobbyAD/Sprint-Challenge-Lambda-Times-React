import React, { Component } from 'react';

import Tabs from './Tabs';
import Cards from './Cards';
import Carousel from '../Carousel/Carousel';

// Importing our tab and card data. No need to change anything here.
import { tabData, cardData } from '../../data';

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'all',
      tabs: [],
      cards: []
    };
  }

  componentDidMount() {
    this.setState({
      tabs: tabData,
      cards: cardData
    })
  }

  changeSelected = tab => {
    this.setState({
      selected: tab
    })
  };

  filterCards = () => {
    if (this.state.selected === 'all') {
      return this.state.cards;
    } else {
      const filteredCards = this.state.cards.filter(element => {
        if (element.tab === this.state.selected) {
          return true;
        } else {
          return false;
        }
      })
      return filteredCards;
    }
  };

  render() {
    return (
      <div className="content-container">
        <Tabs 
          tabs={this.state.tabs} 
          selectedTab={this.state.selected}
          selectTabHandler={this.changeSelected}
        />
        <Carousel />
        <Cards cards={this.filterCards()} />
      </div>
    );
  }
}
