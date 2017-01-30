import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'

import { Text } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'

import colors from '../../colors'
import { pop_portfolio } from '../../actions/navigation'

class PortfolioReload extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.mainText}>
          WHAT IS THIS
        </Text>
        <Text style={styles.secondaryText}>
          SHIT ASS?
        </Text>
        <Icon color='#DAA520' name='shower' size={100} />
      </View>
    )
  }
}

const styles = {
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: colors.secondary2
  },
  mainText: {
    paddingTop: 50,
    fontSize: 50,
    color: 'white',
    textAlign: 'center',
  },
  secondaryText: {
    fontSize: 38,
    color: 'white',
    textAlign: 'center',
    paddingBottom: 30,
  }
}

export default connect()(PortfolioReload)
