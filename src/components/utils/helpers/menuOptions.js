import {
  TeamOutlined,
  UserOutlined,
  PushpinOutlined,
  PlusCircleOutlined
} from '@ant-design/icons';
import ROUTES from '../../Routes';
import Link from '../../UI/Link/Link';


function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

export const MENU_OPTIONS = [
  getItem('Client', 'sub1', <UserOutlined />, [
    getItem(<Link to={ROUTES.SHOP} linkName={'Shop'} />, '1',),
  ]),
  getItem('Admin', 'sub2', <TeamOutlined />, [
    getItem(<Link to={ROUTES.ADD_PRODUCT} linkName={'Add Products'} />, '2', <PlusCircleOutlined />),
    getItem(<Link to={ROUTES.ALL_PRODUCT} linkName={'All Products'} />, '3', <PushpinOutlined />),
  ]
  ),
];