import { useEffect } from 'react'

import { Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';

import Account from './Account/Account';
import Home from './Home/Home';
import History from './History/History';
import { ShopLayout } from '../../layout/ShopLayout';
import { fetchShopData } from 'store/shop/action';

function BarberShopRouter({ fetchShopData }) {
  useEffect(() => {
    fetchShopData()
  }, [])

  return (
    <ShopLayout>
      <Routes>
        <Route path="account" element={<Account />} />
        <Route path="history" element={<History />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </ShopLayout>
  )
}

const mapStateToProps = (state) => ({})

const actions = {
  fetchShopData: fetchShopData
}

export default compose(
  connect(mapStateToProps, actions)
)(BarberShopRouter)