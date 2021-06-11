import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  return <p className="stat-notification">{message}</p>;
};

Notification.propTypes = {
  message: PropTypes.string,
};

export { Notification };
