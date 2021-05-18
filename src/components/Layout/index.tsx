import cn from 'classnames';
import React, { FC } from 'react';
import s from './style.module.scss';

type Props = unknown & React.HTMLProps<HTMLDivElement>;

const Layout: FC<Props> = ({ children, className }) => <div className={cn(s.root, className)}>{children}</div>;

export default Layout;
