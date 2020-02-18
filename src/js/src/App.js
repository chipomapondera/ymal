import React, { Component} from 'react';
import Container from './Page/Container';
import StylingServicePage from './Page/SSPage';
import './App.css';
import {getAllSubjects, getAllYmalProducts} from './client';
import {
  Spin,
  Icon,
} from 'antd';

const getIndicator = () => {
  return <Icon type="loading" style={{fonstSize:24}} spin />
}

class App extends Component {

  state = {
    subjects: [],
    ymalProducts: [],
    isFetching: false
  }

  componentDidMount() {
    this.fetchSubjects();
    this.fetchYmalProducts();
  }

  fetchSubjects = () => {
    this.setState({
      isFetching: true
    });
    getAllSubjects()
      .then(res => res.json()
      .then(subjects => {
      console.log(subjects);
      this.setState({
        subjects,
        isFetching: false
      });
    }));
  }

  fetchYmalProducts = () => {
    this.setState({
      isFetching: true
    });
    getAllYmalProducts()
      .then(res => res.json()
      .then(ymalProducts => {
      console.log(ymalProducts);
      this.setState({
        ymalProducts,
        isFetching: false
      })
    }));
  }

  render() {

    const {subjects, ymalProducts, isFetching} = this.state;

    if(isFetching) {
      return(
        <Container>
          <Spin indicator={getIndicator()} />
        </Container>
      );
    }

    return(
      <StylingServicePage subjects={subjects} ymalProducts={ymalProducts} />
    )
  }
}

export default App;
