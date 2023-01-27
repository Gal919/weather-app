import React from 'react';
import { useDispatch } from 'react-redux';
import { changeTheme } from '../store/theme/themeActions';
import { ToggleSwitch, Switch, Input } from './styles/Toggle';

const Toogle = () => {
  const dispatch = useDispatch();

  const onToggle = () => {
    dispatch(changeTheme());
  };

  return (
    <ToggleSwitch>
      <Input type='checkbox' onChange={onToggle} />
      <Switch />
    </ToggleSwitch>
  );
}

export default Toogle;