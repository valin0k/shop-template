import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import { observer } from 'startupjs'
import { Text } from 'components'
import { BASE_URL } from 'clientHelpers'
import './index.styl'

const MENU_ITEMS = ['HOME', 'ABOUT', 'SHOP', 'PAGES', 'BLOG', 'CONTACT']
const ICONS = ['/search.png', '/bag.png', '/menu.png']

export default observer(function TopBar () {
  return pug`
    View.root
      View.container
        Image.logo(source={uri: BASE_URL + '/logo.png'})
        View.menu
          each item in MENU_ITEMS
            TouchableOpacity.menuItem
              Text(bold)=item
        View.cart
          each icon, i in ICONS
            TouchableOpacity
              Image.icon(source={uri: BASE_URL + icon} styleName={first: !i})
  `
})
