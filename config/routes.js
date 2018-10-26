/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  //routing for amenties
  'GET /amenities/:id': 'AmenitiesController.find',
  'POST /amenities': 'AmenitiesController.create',
  'PATCH /amenities/:id': 'AmenitiesController.update',
  'DELETE /amenities/:id': 'AmenitiesController.destroy',

  //routing for bhkUnits
  'GET /bhkUnits/:id': 'BhkUnitsController.find',
  'POST /bhkUnits': 'BhkUnitsController.create',
  'PATCH /bhkUnits/:id': 'BhkUnitsController.update',
  'DELETE /bhkUnits/:id': 'BhkUnitsController.destroy',

  //routing for user
  'GET /user/:username': 'UserController.find',
  'POST /user': 'UserController.create',
  'PATCH /user/:username': 'UserController.update',
  'DELETE /user/:username': 'UserController.destroy',

  //routing for user-admin
  'GET /userAdmin/:username': 'UserAdminController.find',
  'POST /userAdmin': 'UserAdminController.create',
  'PATCH /userAdmin/:username': 'UserAdminController.update',
  'DELETE /userAdmin/:username': 'UserAdminController.destroy',


  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


  //  ╔═╗╔═╗╦  ╔═╗╔╗╔╔╦╗╔═╗╔═╗╦╔╗╔╔╦╗╔═╗
  //  ╠═╣╠═╝║  ║╣ ║║║ ║║╠═╝║ ║║║║║ ║ ╚═╗
  //  ╩ ╩╩  ╩  ╚═╝╝╚╝═╩╝╩  ╚═╝╩╝╚╝ ╩ ╚═╝



  //  ╦ ╦╔═╗╔╗ ╦ ╦╔═╗╔═╗╦╔═╔═╗
  //  ║║║║╣ ╠╩╗╠═╣║ ║║ ║╠╩╗╚═╗
  //  ╚╩╝╚═╝╚═╝╩ ╩╚═╝╚═╝╩ ╩╚═╝


  //  ╔╦╗╦╔═╗╔═╗
  //  ║║║║╚═╗║
  //  ╩ ╩╩╚═╝╚═╝


};
