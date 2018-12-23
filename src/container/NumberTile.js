// @flow

import { connect } from 'react-redux'
import React from 'react'

import { Text } from 'react-native'

type Props = {
  text: string,
}

const Icon = ({ text }: Props) =>
  <Text>
    {text}
  </Text>

const mapStateToProps = (state, ownProps) => ({
  title: ownProps.number.toString(),
})

export default connect(mapStateToProps)(Icon)
