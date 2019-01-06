// @flow

import { connect } from 'react-redux';

import SuccessModal from '../component/SuccessModal';

const mapStateToProps = state => ({
  visible: state.modal.visible,
  timerCount: state.timer.count,
});

export default connect(mapStateToProps)(SuccessModal);
