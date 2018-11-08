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
  UserController: {
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
    'create': ['isTokenValid', 'isAdmin'],
    'update': ['isTokenValid', 'isAdmin'],
    'destroy': ['isTokenValid', 'isAdmin'],
    '*': ['isTokenValid']
  },
  BhkUnitsController:{
    'create': ['isTokenValid', 'isAdmin'],
    'update': ['isTokenValid', 'isAdmin'],
    'destroy': ['isTokenValid', 'isAdmin'],
    '*': ['isTokenValid']
  },
  SpecificationsController:{
    'create': ['isTokenValid', 'isAdmin'],
    'update': ['isTokenValid', 'isAdmin'],
    'destroy': ['isTokenValid', 'isAdmin'],
    '*': ['isTokenValid']
  }

};
