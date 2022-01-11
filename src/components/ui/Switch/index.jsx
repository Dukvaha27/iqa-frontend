import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const StyledSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #909399;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 34px;

    &:before {
      position: absolute;
      content: '';
      height: 16px;
      width: 16px;
      left: 2px;
      bottom: 2px;
      background-color: white;
      -webkit-transition: 0.4s;
      transition: 0.4s;
      border-radius: 50%;
    }

    ${(props) =>
      props.on &&
      css`
        background: #409eff;
        &:before {
          transform: translateX(20px);
        }
      `}
  }
`;

const StyledSwitchText = styled.span`
  font-size: 14px;
  line-height: 16px;
  margin-left: 12px;
  color: ${(props) => (props.on && '#409EFF') || '#000000'};
`;

export const Switch = ({ children, ...props }) => {
  return (
    <>
      <StyledSwitch {...props}>
        <input type="checkbox" disabled={props.disabled} />
        <span />
      </StyledSwitch>
      <StyledSwitchText on={props.on}>{children}</StyledSwitchText>
    </>
  );
};

Switch.propTypes = {
  on: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  children: PropTypes.string,
};

Switch.defaultProps = {
  on: false,
  disabled: false,
  children: null,
};