import PropTypes from 'prop-types';

const Section = ({ title, children }) => (
  <section>
    <h2 className="section-title">{title}</h2>
    {children}
  </section>
);

Section.defaultProps = {
  title: '',
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
};
export { Section };
