import Icon from './Icon';

const CloseIcon = (props) => (
  <Icon strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M6 18L18 6M6 6l12 12" />
  </Icon>
);

export default CloseIcon;
