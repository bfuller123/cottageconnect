import React from 'react';
import PropTypes from 'prop-types';
import MerchantPortal from './Merchantportal';
import API from '../modules/API';

//TODO: replace address with user.address;

const Dashboard = ({ secretData, user, goods, categories, address }) => (
  <MerchantPortal merchant={user.name} goods={goods} categories={categories} address={address} email={user.email} addGoodBtnClick={API.updateMerchant} addCategoryBtnClick={API.updateMerchant} submitBtnClick={API.updateMerchant}/>
);

Dashboard.propTypes = {
  secretData: PropTypes.string.isRequired
};

export default Dashboard;
