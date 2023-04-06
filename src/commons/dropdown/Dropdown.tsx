import { Menu, MenuItem, Position } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';
import { Popover2 } from '@blueprintjs/popover2';
import React, { useState } from 'react';

import { UpdateCourseConfiguration, UserCourse } from '../application/types/SessionTypes';
import ControlButton from '../ControlButton';
import Profile from '../profile/Profile';
import DropdownAbout from './DropdownAbout';
import DropdownHelp from './DropdownHelp';

type DropdownProps = DispatchProps & StateProps;

type DispatchProps = {
  handleLogOut: () => void;
  handleCreateCourse: (courseConfig: UpdateCourseConfiguration) => void;
};

type StateProps = {
  name?: string;
  courses: UserCourse[];
  courseId?: number;
};

const Dropdown: React.FC<DropdownProps> = props => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  function menu(props: DropdownProps) {
    const profile =
      props.name && props.courseId != null ? (
        <MenuItem icon={IconNames.USER} onClick={toggleProfileOpen} text={titleCase(props.name)} />
      ) : null;

    const logout = props.name ? (
      <MenuItem icon={IconNames.LOG_OUT} text="Logout" onClick={props.handleLogOut} />
    ) : null;

    return (
      <Menu>
        {profile}

        <MenuItem icon={IconNames.HELP} onClick={toggleAboutOpen} text="About" />
        <MenuItem icon={IconNames.ERROR} onClick={toggleHelpOpen} text="Help" />
        {logout}
      </Menu>
    );
  }

  const toggleAboutOpen = () => {
    setIsAboutOpen(oldValue => !oldValue);
  };

  const toggleHelpOpen = () => setIsHelpOpen(oldValue => !oldValue);

  const toggleProfileOpen = () => setIsProfileOpen(oldValue => !oldValue);

  return (
    <>
      <Popover2 content={menu(props)} inheritDarkTheme={false} placement={Position.BOTTOM}>
        <ControlButton icon={IconNames.CARET_DOWN} />
      </Popover2>

      <DropdownAbout isOpen={isAboutOpen} onClose={toggleAboutOpen} />
      <DropdownHelp isOpen={isHelpOpen} onClose={toggleHelpOpen} />

      {props.name ? <Profile isOpen={isProfileOpen} onClose={toggleProfileOpen} /> : null}
    </>
  );
};

const titleCase = (str: string) =>
  str.replace(/\w\S*/g, wrd => wrd.charAt(0).toUpperCase() + wrd.substr(1).toLowerCase());

export default Dropdown;
