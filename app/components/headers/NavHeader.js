import React, { Component, PropTypes } from 'react'
import { View, Text, StyleSheet, NavigationExperimental } from 'react-native'

const {
  Header: NavigationHeader,
} = NavigationExperimental

const snuts = "MOVIES";
const nusts = "JUNK";
const brofile = "PROFILE";

class Header extends Component {
  _back = () => {
    this.props.pop()
  }

  _renderTitleComponent = (props) => {
      switch (props.scene.route.key) {
          case 'Profile':
              return <NavigationHeader.Title>
                <Text style={styles.punks}>
                  {brofile}
                </Text>
              </NavigationHeader.Title>
          case 'Feed':
              return <NavigationHeader.Title>
                <Text style={styles.bunks}>
                  {snuts}
                </Text>
              </NavigationHeader.Title>
          case 'Portfolio':
              return <NavigationHeader.Title>
                <Text style={styles.junks}>
                  {nusts}
                </Text>
              </NavigationHeader.Title>
      }
    }

  render() {
    return (
      <NavigationHeader
        {...this.props}
        renderTitleComponent={this._renderTitleComponent}
        onNavigateBack={this._back}
      />
    );
  }
}

const styles = StyleSheet.create({
  junks: {
    fontFamily: 'monospace',
    color: '#77DD77',
  },
  bunks: {
    fontFamily: 'sans-serif-thin',
    color: 'tan',
    },
  punks: {
    fontFamily: 'sans-serif-thin',
    color: 'crimson',
  },
});

export default Header;
