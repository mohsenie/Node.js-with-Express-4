/*
 * written by mohsen.shaali
 * Date : 08/03/2015
 * Serve JSON to our AngularJS client
 */

exports.name = function (req, res) {
  res.json({
  	name: 'Markets'
  });
};