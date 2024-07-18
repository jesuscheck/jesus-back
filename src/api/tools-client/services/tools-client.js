'use strict';

/**
 * tools-client service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tools-client.tools-client');
