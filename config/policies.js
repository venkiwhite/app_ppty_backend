/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

module.exports.policies = {

  /***************************************************************************
  *                                                                          *
  * Default policy for all controllers and actions, unless overridden.       *
  * (`true` allows public access)                                            *
  *                                                                          *
  ***************************************************************************/

  // '*': true,
  /*UserController: {
    'validate' : true,
    'create': ['isLoggedOut'],
    '*': ['isLoggedIn']
  },
  UserAdminController: {
    'validate' : true,
    'create': ['isLoggedOut'],
    '*': ['isLoggedIn']
  },
  AmenitiesController:{
    'create': ['isLoggedIn', 'isTokenValid', 'isAdmin'],
    'update': ['isLoggedIn', 'isTokenValid', 'isAdmin'],
    'destroy': ['isLoggedIn', 'isTokenValid', 'isAdmin'],
    '*': ['isLoggedIn', 'isTokenValid']
  },
  BhkUnitsController:{
    'create': ['isLoggedIn', 'isTokenValid', 'isAdmin'],
    'update': ['isLoggedIn', 'isTokenValid', 'isAdmin'],
    'destroy': ['isLoggedIn', 'isTokenValid', 'isAdmin'],
    '*': ['isLoggedIn']
  },
  SpecificationsController:{
    'create': ['isLoggedIn', 'isTokenValid', 'isAdmin'],
    'update': ['isLoggedIn', 'isTokenValid', 'isAdmin'],
    'destroy': ['isLoggedIn', 'isTokenValid', 'isAdmin'],
    '*': ['isLoggedIn']
  }*/

};
