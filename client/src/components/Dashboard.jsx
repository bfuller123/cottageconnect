import React from 'react';
import PropTypes from 'prop-types';
import MerchantPortal from './Merchantportal';
import API from '../modules/API';


const Dashboard = ({ secretData, user, goods, categories, businessName, address, btnClickHandler, addClick, removeClick, itemChanged }) => (
  <MerchantPortal merchant={user.name} goods={goods} categories={categories} address={address} email={user.email} addGoodBtnClick={addClick} addCategoryBtnClick={addClick} removeClickHandler={removeClick} submitBtnClick={btnClickHandler} inputChangeHandler={itemChanged} />
);

Dashboard.propTypes = {
  secretData: PropTypes.string.isRequired
};

export default Dashboard;
