import React from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar';
import Body from './Body';
import TrendingCenter from './TrendingCenters';
import PopularCenter from './PopularCenter';
import Gallery from './Gallery';
import ContactUs from './ContactUs';
import Footer from './Footer';
import '../../public/css/style.scss';
import * as userActions from '../actions/actionCreator';
/**
 * creates Landing Page component
 *  @returns {funct} Landing Page
 */
class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            centers: [],
            fetchingCenters: false
        };
    }

    componentDidMount() {
        this.props.getTrendingCenters();
    }

    componentWillReceiveProps(nextProps) {
      console.log(nextProps)
        if (nextProps.getCenters[0]) {
            this.setState({ centers: nextProps.getCenters, fetchingCenters: false });
        } else {
            this.setState({ fetchingCenters: true });
        }
    }

  render() {
    return (
    <div>
          <Navbar />
            <Body />
            <TrendingCenter 
            centers = 
            {this.state.centers} />
            <PopularCenter />
            <Gallery />
            <ContactUs />
            <Footer />
        </div>
    );
  }
  }

function mapStateToProps(state, ownProps) {
    return {
        getCenters: state.centers.foundCenters
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getTrendingCenters: (centerData) => dispatch(userActions.getTrendingCenters(centerData))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);

