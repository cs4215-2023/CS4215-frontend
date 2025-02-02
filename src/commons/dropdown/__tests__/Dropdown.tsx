import { shallow } from 'enzyme';

import Profile from '../../profile/Profile';
import Dropdown from '../Dropdown';

test('Dropdown does not mount Profile, DropdownCourses and DropdownCreateCourses components when a user is not logged in', () => {
  const props = {
    handleLogOut: () => {},
    updateLatestViewedCourse: () => {},
    handleCreateCourse: () => {},
    courses: [],
    isAboutOpen: false,
    isHelpOpen: false,
    isProfileOpen: false
  };
  const app = <Dropdown {...props} />;
  const tree = shallow(app);
  expect(tree.debug()).toMatchSnapshot();
  // Expect the Profile component to NOT be mounted
  expect(tree.find(Profile)).toHaveLength(0);
});

test('Dropdown correctly mounts Profile, DropdownCourses, and DropdownCreateCourses components when a user is logged in', () => {
  const props = {
    handleLogOut: () => {},
    updateLatestViewedCourse: () => {},
    handleCreateCourse: () => {},
    courses: [],
    isAboutOpen: false,
    isHelpOpen: false,
    isProfileOpen: false,
    name: 'Some user'
  };
  const app = <Dropdown {...props} />;
  const tree = shallow(app);
  expect(tree.debug()).toMatchSnapshot();
  // Expect the Profile component to be mounted
  expect(tree.find(Profile)).toHaveLength(1);
});
