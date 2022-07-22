import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Creators as FlashMessageActions } from '../../store/ducks/flashMessage';


import Toastr from '../Toastr';

// class FlashMessage extends Component {
export const FlashMessage = () => {
  const dispatch = useDispatch();

  const flashMessageDetails = useSelector((state) => state.flashMessage);
  const { open, id, message, variant, params, duration } = flashMessageDetails;

  // useEffect(() => {
	// 	dispatch(FlashMessageActions.bindActionCreators())
	// }, []);

  const handleClose = (event, source) => {
    if (source === 'clickaway') {
      return;
    }
    dispatch(FlashMessageActions.hideMessage());
  };

  return (
    (id || message) && (
      <Toastr
        open={open}
        duration={duration}
        onClose={handleClose}
        // message={id ? intl.formatMessage({ id }, params) : message}
        message={message}
        variant={variant}
      />
    )
  );
}


// const mapStateToProps = state => ({
//   open: state.flashMessage.open,
//   id: state.flashMessage.id,
//   duration: state.flashMessage.duration,
//   message: state.flashMessage.message,
//   variant: state.flashMessage.variant,
//   params: state.flashMessage.params
// });

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(FlashMessageActions, dispatch);

// export default compose(
//   connect(mapStateToProps, mapDispatchToProps)
// )(FlashMessage);
