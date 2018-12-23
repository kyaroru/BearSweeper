// @flow

import React, { Component } from 'react'
import { View, Modal, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import Button from 'common/Button';
import * as Colors from 'themes/colors';
import { hideModal } from '../action/Modal'

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.modalBg,
    padding: 30,
  },
  innerModal: {
    borderRadius: 10,
    backgroundColor: Colors.white,
    padding: 10,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
  },
})

class LeaderBoardModal extends Component {
  props: {
    visible: boolean,
    dispatch: Function,
  }
  render() {
    const dismiss = () => this.props.dispatch(hideModal());
    return (
      <Modal
        transparent
        visible={this.props.visible}
        onRequestClose={() => {
          dismiss(); // this modal can be dismiss (some cannot dismiss like fingerprint)
        }}
      >
        <TouchableWithoutFeedback onPress={dismiss}>
          <View style={styles.modal}>
            <View style={styles.innerModal}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>Congratulations</Text>
              </View>
              <View style={styles.content}>
                <Text style={styles.label}>You've won the game!</Text>
                <Button title="Of course!" onPress={dismiss} />
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    )
  }
}


export default LeaderBoardModal
