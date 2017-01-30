import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'

import { Text } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'

import colors from '../../colors'
import { pop_profile } from '../../actions/navigation'

class Updates extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.secondaryText}>
          Updates
        </Text>
        <Icon color='black' name='smile-o' size={60} />
      </View>
    )
  }
}

const styles = {
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: colors.grey3
  },
  secondaryText: {
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
    paddingTop: 50,
    paddingBottom: 20,
  }
}

export default connect()(Updates)
