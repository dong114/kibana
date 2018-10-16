/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import { cloneDeep } from 'lodash';
const canvasWeather = require('./canvas_weather.json');
const conditionalAssets = require('./conditional_assets.json');
const dublinDemo = require('./dublin_eah_workshop.json');
const ecommerceRevenueTracking = require('./ecommerce_revenue_tracking.json');
const elasticTemplate = require('./elastic_template.json');
const flightsOverview = require('./flights_overview.json');
const logsWebTraffic = require('./logs_web_traffic.json');
const markdownStyles = require('./markdown_styles.json');
const operationalMonitoring = require('./sample_data_operational_monitoring.json');
const randomizedTour2018 = require('./randomized_tour_2018.json');

export const templates = [
  cloneDeep(canvasWeather),
  cloneDeep(conditionalAssets),
  cloneDeep(dublinDemo),
  cloneDeep(ecommerceRevenueTracking),
  cloneDeep(elasticTemplate),
  cloneDeep(flightsOverview),
  cloneDeep(logsWebTraffic),
  cloneDeep(markdownStyles),
  cloneDeep(operationalMonitoring),
  cloneDeep(randomizedTour2018),
];
