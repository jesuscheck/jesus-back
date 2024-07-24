'use strict';

/**
 * cain-account service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cain-account.cain-account');
