import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import TabBarNav from './TabBarNav';

import './TabBar.css';

const TabBar = ({ children, className, vertical, ...attrs }) => {
    const [activeTab, setActiveTab] = useState(null);
  
    useEffect(() => {
        const childLabels = React.Children.map(children, ({ props }) => props.label);
        setActiveTab(childLabels[0]);
    }, [children]);
  
    const renderTabs = () => {
        return React.Children.map(children, child => {
            const navLabel = child.props.label;
            return (
                <TabBarNav
                    key={navLabel}
                    navLabel={navLabel}
                    className={classNames({ active: activeTab === navLabel })}
                    onChangeActiveTab={setActiveTab}
                />
            );
        });
    };
  
    const cloneChildWithActiveTab = child => {
        return React.cloneElement(child, { activeTab });
    };
  
    const classes = classNames('tab-bar', className, { vertical });
  
    return (
        <div className={classes} {...attrs}>
            <div className="tab-bar-nav">{renderTabs()}</div>
            <div className="tab-container">{React.Children.map(children, cloneChildWithActiveTab)}</div>
         </div>
    );
};
  
TabBar.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    vertical: PropTypes.bool,
};
  
TabBar.defaultProps = {
    children: null,
    className: '',
    vertical: false,
};
  
export default TabBar;