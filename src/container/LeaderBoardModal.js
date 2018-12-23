// @flow

import { connect } from 'react-redux'

import LeaderBoardModal from '../component/LeaderBoardModal'

const mapStateToProps = state => ({
  visible: state.modal.visible,
})

export default connect(mapStateToProps)(LeaderBoardModal)
