import React from 'react'


  export const storeAuthUser = (user, token = null) => {
    if (token !== null) {
        localStorage.setItem('auth_token', token);
        localStorage.setItem('active_user', JSON.stringify(user));
        localStorage.setItem('is_logded_in', true);
    }
  }
  
  export const getUserObject = () => {
    let activeUser = localStorage.getItem('active_user');
  
    if (activeUser == null || activeUser == undefined || activeUser == '') {
        return null;
    }
  
    let user = JSON.parse(activeUser);
    
    return user
  }
  
  export const updateUserShop = (store) => {
    let activeUser = localStorage.getItem('active_user');
  
    if (activeUser == null || activeUser == undefined || activeUser == '') {
        return null;
    }
  
    let user = JSON.parse(activeUser);
  
    user.store = store;
    
    localStorage.setItem('active_user', JSON.stringify(user));
  }
  
  export const getAuthToken = () => {
    return localStorage.getItem('auth_token') || null;
  }

  export const clearAuth = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('activeUser')
  }
  


