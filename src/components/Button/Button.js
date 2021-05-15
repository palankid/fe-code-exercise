import { bool } from 'prop-types';

import { ButtonStyled, ProgressIcon } from './Button.styled';

export default function Button({ children, progress, outline, ...props }) {
  return (
    <ButtonStyled type="button" outline={outline} disabled={progress} {...props}>
      {progress ? <ProgressIcon data-testid="progressIcon" outline={outline} /> : children}
    </ButtonStyled>
  );
}

Button.propTypes = {
  outline: bool,
  progress: bool,
};

Button.defaultProps = {
  outline: false,
  progress: false,
};
