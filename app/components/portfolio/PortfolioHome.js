import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
import { connect } from 'react-redux'

import { PricingCard, Text } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons'

import colors from '../../colors'
import { push_portfolio } from '../../actions/navigation'

class PortfolioHome extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headingContainer}>
          <View style={styles.headerIcon}>
            <Icon color='white' name='ios-calculator-outline' size={100} />
          </View>
          <View style={styles.headerText}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.balanceView}>
                <Text style={styles.balanceText}>RANDOM NUMBER: </Text>
              </View>
              <Text style={styles.balanceScore}>89</Text>
            </View>
          </View>
        </View>
        <View style={styles.bodycontainer}>
          <PricingCard
            color={colors.secondary2}
            title='This Is A Junk Page'
            titleFont='codeBold'
            price='JUNK'
            pricingFont='Dolce_Bold'
            infoFont='geo'
            info={['(Junk)', 'Junk, Melon (cetacean) of the sperm whale']}
            button={{ title: 'DO NOT', icon: 'fingerprint', fontFamily: 'Dolce_Bold' }}
            onButtonPress={() => this.props.dispatch(push_portfolio({ key: 'Reload', type: 'reload' }))}
          />
        </View>
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.grey5
  },
  headingContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.secondary2,
    paddingLeft: 30,
    paddingRight: 30,
  },
  headerIcon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  headerText: {
    flex: 2,
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  balanceView: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  balanceText: {
    fontSize: 15,
    fontFamily: 'Dolce',
    color: colors.grey5,
    paddingTop: 10,
  },
  balanceScore: {
    fontSize: 35,
    color: 'white',
  },
  bodycontainer: {
    flex: 2,
    paddingTop: 10,
  },
  heading: {
    color: 'white',
    marginTop: 10,
    fontSize: 22
  },
  bodycontainer: {
    margin: 15
  },
}

export default connect()(PortfolioHome)
