import React, { Component } from 'react'
import {
  Dimensions,
  StyleSheet,
  ScrollView,
  View,
  Image,
  TouchableOpacity
} from 'react-native'
import { connect } from 'react-redux'
import { restart_feed } from '../actions/navigation'

import Icon from 'react-native-vector-icons/MaterialIcons'
import { Text, Button, SocialIcon } from 'react-native-elements'

import colors from '../colors'

const window = Dimensions.get('window');
const uri = 'http://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/pops-regular-show-5.1.jpg';

class SideMenuView extends Component {
  render() {
    return (
      <View style={styles.menu}>
        <View style={styles.menuHeader}>
          <Image
            style={styles.avatar}
            source={{uri}}/>
          <View style={styles.profileText}>
            <Text style={styles.name}>Chappie</Text>
            {/* <Text style={styles.title}>Con Man</Text> */}
          </View>
        </View>

        <View style={styles.menuBody}>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => console.log('Button Pressed')}>
            <Icon
              reverse
              name='pregnant-woman'
              size={35}
              color='#E91E63'
              style={styles.iconStyle} />
            <Text style={[styles.menuItemText, {color: '#E91E63'}]}>Pregnant Woman</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => console.log('Button Pressed')}>
            <Icon
              reverse
              name='list'
              size={35}
              style={styles.iconStyle}
              color='#3F51B5' />
            <Text style={[styles.menuItemText, {color: '#3F51B5'}]}>Todo List</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => console.log('Button Pressed')}>
            <Icon
              reverse
              color='#00BCD4'
              size={35}
              name='weekend'
              style={styles.iconStyle} />
            <Text style={[styles.menuItemText, {color: '#00BCD4'}]}>Couch Slouch</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => console.log('Button Pressed')}>
            <Icon
              reverse
              color='#a82400'
              size={35}
              name='save'
              style={styles.iconStyle} />
            <Text style={[styles.menuItemText, {color: '#a82400'}]}>Floppy</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => console.log('Button Pressed')}>
            <Icon
              reverse
              color='#FF5722'
              size={35}
              name='videogame-asset'
              style={styles.iconStyle} />
            <Text style={[styles.menuItemText, {color: '#FF5722'}]}>Yada Yada</Text>
          </TouchableOpacity>
          <View style={styles.iconPadding}>
            <Text style={styles.shareText}>Barf Bag:</Text>
          </View>
        </View>

        <View style={styles.menuFooter}>
          <View style={styles.socialIconContainers}>
            <SocialIcon
              type='instagram'
              onPress={() => console.log('Write about us on Medium')} />
          </View>
          <View style={styles.socialIconContainers}>
            <SocialIcon
              raised={true}
              type='facebook'
              onPress={() => console.log('Share on Facebook!')} />
          </View>
          <View style={styles.socialIconContainers}>
            <SocialIcon
              type='twitter'
              onPress={() => console.log('Tweet about us.')} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    flexDirection: 'column',
    width: window.width,
    height: window.height,
    backgroundColor: '#ededed',
    paddingTop: 20,
  },
  menuHeader: {
    flex: 2,
    flexDirection: 'row',
    paddingLeft: 20,
    paddingTop: 20,
  },
  menuBody: {
    flex: 10,
    flexDirection: 'column',
    backgroundColor: '#D8D8D8'
  },
  menuFooter: {
    flex: 1.5,
    flexDirection: 'row',
    paddingBottom: 30,
    backgroundColor: '#D8D8D8'
  },
  socialIconContainers: {
    paddingLeft: 10,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    flex: 1,
  },
  profileText: {
    flex: 4,
    flexDirection: 'column',
    paddingLeft: 20,
  },
  name: {
    flex: 1.5,
    fontSize: 18,
    color: 'black',
    paddingTop: 15,
    paddingBottom: 10,
  },
  title: {
    flex: 3,
    fontSize: 13,
    color: 'grey',
  },
  iconContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  iconPadding: {
    flex: 4,
  },
  shareText: {
    position: 'absolute',
    bottom: 10,
    left: 80,
    fontSize: 28,
    color: colors.grey1,
  },
  iconStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  menuItemText: {
    fontSize: 20,
    paddingLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
});

export default connect()(SideMenuView)
