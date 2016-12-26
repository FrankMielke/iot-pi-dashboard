(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.IoTFCommon = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/frank/Documents/Projects/IOTFoundation/components/Dashboard/constants/Const.js":[function(require,module,exports){
"use strict";

var _Const;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Const = (_Const = {
  "CONNECTED": "CONNECTED",
  "DISCONNECTED": "DISCONNECTED",
  "PAUSED": "PAUSED",

  RANGE_MIN: 60,
  RANGE_HOUR: 3600,
  RANGE_DAY: 86400,
  RANGE_WEEK: 604800,
  RANGE_MONTH: 2592000,

  // card type tags (use as comma separated list)
  "NO_DATAPOINTS": "NO_DATAPOINTS", // Do not show data set definition (e.g. usage cards)
  "SINGLE_DATAPOINT": "SINGLE_DATAPOINT", // Only one data point can be defined (e.g. additional device info)
  "EVENT_ONLY": "EVENT_ONLY", // Do not show property field in data point definition (e.g. weather service)
  "PROPERTY_ONLY": "PROPERTY_ONLY", // Show only event and property and hide type, min, max etc (e.g. in combination with SLOTS)
  "SPECIFIC": "SPECIFIC", // Select properties with a special meaning (e.g. device map)
  "NO_CUSTOMIZATION": "NO_CUSTOMIZATION", // Skip all customization Steps and add card instantly (e.g. separator)
  "SLOTS": "SLOTS", // Show predefined slots for a single device (e.g. elevator)
  "SOURCE_ONLY": "SOURCE_ONLY", // Select only the source (e.g. additional device info)
  "CARD_ONLY": "CARD_ONLY" }, _defineProperty(_Const, "CARD_ONLY", "CARD_ONLY"), _defineProperty(_Const, "OPTIONAL", "OPTIONAL"), _defineProperty(_Const, "DB_VIEW_BOARD", "DB_VIEW_BOARD"), _defineProperty(_Const, "DB_CREATE_BOARD", "DB_CREATE_BOARD"), _defineProperty(_Const, "DB_UPDATE_BOARD", "DB_UPDATE_BOARD"), _defineProperty(_Const, "DB_DELETE_BOARD", "DB_DELETE_BOARD"), _defineProperty(_Const, "DB_SHARE_BOARD", "DB_SHARE_BOARD"), _Const);

module.exports = Const;

},{}],"/Users/frank/Documents/Projects/IOTFoundation/components/Dashboard/dashboard/DashboardUtils.js":[function(require,module,exports){
'use strict';

var config = require('./config/DashboardConfig.json');

var DashboardUtils = {

  // create a unique rfc4122 conform UUID
  createUUID: function createUUID() {
    var dec2hex = [];
    for (var i = 0; i <= 15; i++) {
      dec2hex[i] = i.toString(16);
    }

    var uuid = '';
    for (var j = 1; j <= 36; j++) {
      if (j === 9 || j === 14 || j === 19 || j === 24) {
        uuid += '-';
      } else if (j === 15) {
        uuid += 4;
      } else if (j === 20) {
        uuid += dec2hex[Math.random() * 4 | 0 + 8];
      } else {
        uuid += dec2hex[Math.random() * 15 | 0];
      }
    }
    return uuid;
  },

  setDashboardConfig: function setDashboardConfig(temp) {
    config = temp;
  },

  getCapability: function getCapability(name) {
    var caps = config.capabilities;
    if (caps) {
      var value = caps[name];
      if (value === undefined) {
        // not set defaults to true
        value = true;
      }
      return value;
    }
  },

  getSettings: function getSettings(name) {
    var settings = config.settings;
    if (settings) {
      var value = settings[name];
      return value;
    }
  },

  getDefaultChartColors: function getDefaultChartColors() {
    var result = config.theme.palette;
    return result;
  }

};

module.exports = DashboardUtils;

},{"./config/DashboardConfig.json":"/Users/frank/Documents/Projects/IOTFoundation/components/Dashboard/dashboard/config/DashboardConfig.json"}],"/Users/frank/Documents/Projects/IOTFoundation/components/Dashboard/dashboard/config/DashboardConfig.json":[function(require,module,exports){
module.exports={
  "theme": {
    "canvas": "#142a36",
    "lightText": "#F7F7F7",
    "border": "#142a36",
    "title": "#E6E6E6",
    "titleText": "#F7F7F7",
    "textOnCanvas": "#F7F7F7",
    "hover": "#F9FAFB",
    "select": "#EBECED",
    "content": "#FDFDFD",
    "major": "#2E3636",
    "minor": "#899399",
    "least": "#a9acac",
    "accent": "#4581E0",
    "GOOD": "#8CD210",
    "FAIR": "#899399",
    "CRITICAL": "#FF5050",
    "font": "'Helvetica Neue',HelveticxfaNeue,Helvetica,'Segoe UI',Segoe,Calibri,Roboto,'Droid Sans','Arial Unicode MS',Arial,sans-serif",
    "logo": "/assets/dashboard/iot.jpg",

    "light": "#c7c7c7",
    "normal": "#959595",
    "dark": "#5a5a5a",

    "palette": ["#5596E6", "#4178BE", "#325C80", "#264A60", "#1D3649", "#323c3c", "#3c4646", "#5a6464", "#6d7777", "#959f9f"],

    "schemes": [
      {
        "name": 0,
        "light": "#9855D4",
        "normal": "#704199",
        "dark": "#311a41",
        "palette": ["#ba8FF7", "#9855D4", "#734098", "#562f72", "#412356", "#311a41"]
      },
      {
        "name": 1,
        "light": "#db2780",
        "normal": "#9e215f",
        "dark": "#3a0B2E",
        "palette": ["#ff3ca0", "#db2780", "#a6266e", "#7c1c58", "#601146", "#3a0B2E"]
      },
      {
        "name": 2,
        "light": "#00bfa0",
        "normal": "#068375",
        "dark": "#012b22",
        "palette": ["#41d6c3", "#00b4a0", "#008571", "#006d5d", "#005448", "#012b22"]
      },
      {
        "name": 3,
        "light": "#4178be",
        "normal": "#33598a",
        "dark": "#152935",
        "palette": ["#5596e6", "#4178be", "#325c80", "#264a60", "#1d3649", "#152935"]
      },
      {
        "name": 4,
        "light": "#00aec9",
        "normal": "#067f92",
        "dark": "#002e36",
        "palette": ["#00b3cf", "#00aec9", "#007182", "#005b69", "#00454f", "#002e36"]
      }
    ]
  },

  "capabilities": {
    "multipleDashboards": false,
    "remoteSynchronization": true,
    "useOldDialogs": false,
    "showControls": false,
    "breakpoints": {"xxl": 1649, "xl": 1324, "lg": 999, "md": 674, "sm": 349},
    "cols": {"xxl": 10, "xl": 8, "lg": 6, "md": 4, "sm": 2},
    "rowHeight": 105,
    "margin": [25,25]
  },

  "settings": {
    "configRepositoryURL": "/api/v0002/dashboard",
    "BACKUP_configRepositoryURL": "https://dcr.mybluemix.net/rest",
    "configRepositoryUser": "admin",
    "configRepositoryPassword": "admin",
    "forceStandaloneConfigRepo": false,
    "configName": "MyDashboardConfig",
    "defaultDashboards": [
      {
        "id": "AnalyticsDefaultBoard_DeviceCentric",
        "version": "1"
      },
      {
        "id": "AnalyticsDefaultBoard_RuleCentric",
        "version": "1"
      },
      {
        "id": "RiskManagementDefaultBoard",
        "version": "1"
      },
      {
        "id": "UsageDefaultBoard",
        "version": "1"
      }
    ]
  },

  "components": [
    {
      "name": "GenericVisCard",
      "displayName": "COMP_TITLE_GenericVis",
      "description": "COMP_DESC_GenericVis",
      "thumbnail" : "dots",
      "category": "Devices",
      "cardType": "",
      "wrapper": "ReactWrapper",
      "sizes": [[2,1],[2,2],[2,3],[3,4],[4,4]],
      "parameters" : {
       "title":"",
        "component": "GenericVisualizationCard",
        "title": "Generic visualization"
      },
      "events": {
        "inbound": ["device"]
      }
    },
    {
      "name": "RealTimeChart",
      "displayName": "COMP_TITLE_RealTimeChart",
      "description": "COMP_DESC_RealTimeChart",
      "thumbnail" : "line-chart",
      "category": "Devices",
      "cardType": "",
      "wrapper": "ReactWrapper",
      "sizes": [[2,3],[2,4],[3,4],[4,4]],
      "parameters" : {
        "component": "RealTimeChart",
        "title": "Line chart",
        "autoscroll": true
      },
      "customization": "RealTimeChartProperties",
      "events": {
        "inbound": ["device"]
      }
    },
    {
      "name": "BarChart",
      "displayName": "COMP_TITLE_BarChart",
      "description": "COMP_DESC_BarChart",
      "thumbnail" : "bar-chart",
      "category": "Devices",
      "cardType": "",
      "wrapper": "ReactWrapper",
      "sizes": [[2,3],[3,3],[4,4]],
      "parameters" : {
       "title":"",
        "component": "BarChart",
        "title": "Bar chart"
      },
      "customization": "BarChartProperties",
      "events": {
        "inbound": ["device","visibleDevices","datapoint"],
        "outbound": ["device","datapoint"]
      },
      "events": {
        "inbound": ["device"]
      }
    },
    {
      "name": "DonutChart",
      "displayName": "COMP_TITLE_DonutChart",
      "description": "COMP_DESC_DonutChart",
      "thumbnail" : "pie-chart",
      "category": "Devices",
      "cardType": "",
      "wrapper": "ReactWrapper",
      "sizes": [[2,3],[2,4],[4,3],[4,4]],
      "parameters" : {
       "title":"",
        "component": "DonutChart",
        "title": "Donut chart"
      },
      "events": {
        "inbound": ["device","visibleDevices","datapoint"],
        "outbound": ["device","datapoint"]
      },
      "events": {
        "inbound": ["device"]
      }
    },
    {
      "name": "Value",
      "displayName": "COMP_TITLE_Value",
      "description": "COMP_DESC_Value",
      "thumbnail" : "text-based",
      "category": "Devices",
      "cardType": "",
      "wrapper": "ReactWrapper",
      "sizes": [[2,1],[2,2],[2,3],[3,4],[4,4]],
      "parameters" : {
       "title":"",
        "component": "Value",
        "title": "Value"
      },
      "events": {
        "inbound": ["device"]
      }
    },
    {
      "name": "Gauge",
      "displayName": "COMP_TITLE_Gauge",
      "description": "COMP_DESC_Gauge",
      "thumbnail" : "gauge",
      "category": "Devices",
      "cardType": "",
      "wrapper": "ReactWrapper",
      "sizes": [[2,1],[2,4],[4,4]],
      "parameters" : {
        "component": "Gauge",
        "title": "Gauge"
      },
      "customization": "GaugeProperties",
      "events": {
        "inbound": ["device"]
      }
    },
    {
      "name": "DeviceValues",
      "displayName": "COMP_TITLE_DeviceValues",
      "description": "COMP_DESC_DeviceValues",
      "thumbnail" : "DeviceProperties",
      "category": "Devices",
      "cardType": "",
      "wrapper": "ReactWrapper",
      "sizes": [[2,4],[2,6],[2,8],[3,4],[3,6],[3,8]],
      "parameters" : {
        "component": "DeviceValues",
        "title": "Device Values"
      },
      "events": {
        "inbound": ["device"]
      }
    },
    {
      "name": "DeviceValuesAll",
      "displayName": "COMP_TITLE_AllDeviceProperties",
      "description": "COMP_DESC_AllDeviceProperties",
      "thumbnail" : "AllDeviceProperties",
      "category": "Devices",
      "cardType": "SOURCE_ONLY",
      "wrapper": "ReactWrapper",
      "sizes": [[2,4],[2,6],[2,8],[3,4],[3,6],[3,8]],
      "parameters" : {
        "component": "DeviceValues",
        "title": "All Device Values"
      },
      "events": {
        "inbound": ["device"]
      }
    },
    {
      "name": "DeviceList",
      "displayName": "COMP_TITLE_DeviceList",
      "description": "COMP_DESC_DeviceList",
      "thumbnail" : "DeviceList",
      "category": "Devices",
      "cardType": "SOURCE_ONLY,OPTIONAL,CARD_ONLY",
      "wrapper": "ReactWrapper",
      "sizes": [[2,4],[2,6],[3,4],[3,5],[4,4],[4,5]],
      "parameters" : {
        "component": "DeviceList",
        "title": "Device List"
      },
      "customization": "DeviceListProperties",
      "events": {
        "inbound": ["alerts","deviceData","selectedDevices"],
        "outbound": ["device","selectedDevices","visibleDevices","deviceData"]
      }
    },
    {
      "name": "DeviceInfo",
      "displayName": "COMP_TITLE_AdditionalInfo",
      "description": "COMP_DESC_AdditionalInfo",
      "thumbnail" : "DeviceInfo",
      "category": "Devices",
      "cardType": "SOURCE_ONLY,SINGLE_DATAPOINT",
      "wrapper": "ReactWrapper",
      "sizes": [[2,4],[2,6],[2,8],[3,4],[3,6],[3,8]],
      "customization": "DeviceInfoProperties",
      "parameters" : {
        "component": "DeviceInfo",
        "title": "Device Information"
      },
      "events": {
        "inbound": ["deviceData"],
        "outbound": ["device"]
      }
    },
    {
      "name": "DeviceMap",
      "displayName": "COMP_TITLE_DeviceMap",
      "description": "COMP_DESC_DeviceMap",
      "thumbnail" : "DeviceMap",
      "category": "Hidden",
      "cardType": "SPECIFIC,EVENT_ONLY",
      "wrapper": "ReactWrapper",
      "sizes": [[2,3],[4,5]],
      "specificProperties": [
        {
          "id": "longitude",
          "label": "Longitude property"
        },
        {
          "id": "latitude",
          "label": "Latitude property"
        }
      ],
      "parameters" : {
        "component": "DeviceMap",
        "title": "Device map"
      },
      "customization": "DeviceMapProperties",
      "events": {
        "inbound": ["device","selectedDevices","visibleDevices"]
      }
    },
    {
      "name": "DeviceMapFlex",
      "displayName": "COMP_TITLE_DeviceMap",
      "description": "COMP_DESC_FlexibleDeviceMap",
      "thumbnail" : "map",
      "category": "Devices",
      "cardType": "SLOTS,PROPERTY_ONLY,CARD_ONLY",
      "wrapper": "ReactWrapper",
      "sizes": [[2,3],[4,5]],
      "parameters" : {
        "component": "DeviceMapFlex",
        "title": "Device map",
        "plots": [
          {
            "id": "longitude",
            "event": "status",
            "property": "lng",
            "label": "Dashboard.RTI.DeviceMap.DatapointLng",
            "type": "float"
          },
          {
            "id": "latitude",
            "event": "status",
            "property": "lat",
            "label": "Dashboard.RTI.DeviceMap.DatapointLat",
            "type": "float"
          }
        ]
      },
      "customization": "DeviceMapProperties",
      "events": {
        "inbound": ["device","selectedDevices","visibleDevices"],
        "outbound": ["device"]
      }
    },
    {
      "name": "RuleCard",
      "displayName": "COMP_TITLE_Rules",
      "description": "COMP_DESC_Rules",
      "thumbnail" : "Rules",
      "category": "Analytics",
      "cardType": "SOURCE_ONLY,OPTIONAL,CARD_ONLY,SINGLE_DATAPOINT",
      "wrapper": "ReactWrapper",
      "sizes": [[2,4],[2,6],[2,8],[3,4],[3,6],[3,8]],
      "customization": "RuleProperties",
      "parameters" : {
        "component": "RuleCard",
        "title": "Rules"
      },
      "events": {
        "inbound": ["device"],
        "outbound": ["alerts","rule"]
      }
    },
    {
      "name": "RuleBreakCard",
      "displayName": "COMP_TITLE_DeviceAlerts",
      "description": "COMP_DESC_DeviceAlerts",
      "thumbnail" : "RuleBreaks",
      "category": "Analytics",
      "cardType": "SOURCE_ONLY,OPTIONAL,CARD_ONLY,SINGLE_DATAPOINT",
      "wrapper": "ReactWrapper",
      "sizes": [[2,4],[2,6],[2,8],[3,4],[3,6],[3,8]],
      "customization": "RuleBreakProperties",
      "parameters" : {
        "component": "RuleBreakCard",
        "title": "Rule Alerts"
      },
      "events": {
        "inbound": ["device","rule"],
        "outbound": ["alertData"]
      }
    },
    {
      "name": "RuleBreakInfo",
      "displayName": "COMP_TITLE_RuleBreakInfo",
      "description": "COMP_DESC_RuleBreakInfo",
      "thumbnail" : "RuleBreakInfo",
      "category": "Analytics",
      "cardType": "SOURCE_ONLY,SINGLE_DATAPOINT,CARD_ONLY",
      "wrapper": "ReactWrapper",
      "sizes": [[2,4],[2,6],[2,8],[3,4],[3,6],[3,8]],
      "customization": "RuleBreakInfoProperties",
      "parameters" : {
        "component": "RuleBreakInfo",
        "title": "Rule Break Information"
      },
      "events": {
        "inbound": ["alertData"]
      }
    },
    {
      "name": "PolicyCompliance",
      "displayName": "COMP_TITLE_PolicyCompliance",
      "description": "COMP_DESC_PolicyCompliance",
      "category": "RiskManagement",
      "cardType": "NO_DATAPOINTS",
      "thumbnail": "PolicyCompliance",
      "wrapper": "ReactWrapper",
      "sizes": [[2,2],[3,3],[3,4]],
      "showRefresh": true,
      "parameters" : {
        "component": "PolicyCompliance",
        "title": "Policy Compliance"
      }
    },
    {
      "name": "Blacklist",
      "displayName": "COMP_TITLE_Blacklist",
      "description": "COMP_DESC_Blacklist",
      "category": "RiskManagement",
      "cardType": "NO_DATAPOINTS",
      "thumbnail": "Blacklist",
      "wrapper": "ReactWrapper",
      "sizes": [[2,1],[2,2]],
      "showRefresh": true,
      "parameters" : {
        "component": "Blacklist",
        "title": "Blacklist Compliance"
      }
    },
    {
      "name": "Whitelist",
      "displayName": "COMP_TITLE_Whitelist",
      "description": "COMP_DESC_Whitelist",
      "category": "Hidden",
      "cardType": "NO_DATAPOINTS",
      "thumbnail": "Whitelist",
      "wrapper": "ReactWrapper",
      "sizes": [[2,1],[2,2]],
      "showRefresh": true,
      "parameters" : {
        "component": "Whitelist",
        "title": "Whitelist Compliance"
      }
    },
    {
      "name": "ConnectionSecurity",
      "displayName": "COMP_TITLE_ConnectionSecurity",
      "description": "COMP_DESC_ConnectionSecurity",
      "category": "RiskManagement",
      "cardType": "NO_DATAPOINTS",
      "thumbnail": "ConnectionSecurity",
      "wrapper": "ReactWrapper",
      "sizes": [[2,2],[2,3],[2,4],[4,3],[4,4]],
      "showRefresh": true,
      "parameters" : {
        "component": "ConnectionSecurity",
        "title": "Connection Security"
      }
    },
    {
      "name": "Transactions",
      "displayName": "COMP_TITLE_Transactions",
      "description": "COMP_DESC_Transactions",
      "category": "Hidden",
      "cardType": "NO_DATAPOINTS",
      "thumbnail": "Blockchain",
      "wrapper": "ReactWrapper",
      "sizes": [[2,3],[2,4]],
      "showRefresh": true,
      "parameters" : {
        "component": "Transactions",
        "title": "Blockchain Transactions"
      }
    },
    {
      "name": "DeviceTypes",
      "displayName": "COMP_TITLE_DeviceTypes",
      "description": "COMP_DESC_DeviceTypes",
      "category": "Usage",
      "cardType": "NO_DATAPOINTS",
      "thumbnail": "device-types",
      "wrapper": "ReactWrapper",
      "sizes": [[2,3],[2,4],[4,3],[4,4]],
      "sticky": false,
      "showRefresh": true,
      "parameters" : {
        "component": "DeviceTypes",
        "title": "Device types"
      }
    },
    {
      "name": "UsageDeviceCard",
      "displayName": "COMP_TITLE_UsageDevice",
      "description": "COMP_DESC_UsageDevice",
      "category": "Hidden",
      "cardType": "NO_DATAPOINTS",
      "thumbnail": "connected-devices",
      "wrapper": "ReactWrapper",
      "sizes": [[2,1],[2,2],[2,3],[3,4],[4,4]],
      "sticky": false,
      "showRefresh": true,
      "deprecated": true,
      "parameters" : {
        "component": "DeadCard",
        "deadCardLink": "http://link2-em-us.unicaondemand.com/frontend/dynamicAssets?e=t3FFF203B37ACB21D068F7555F491371A14DB35C26F75109FEF0BCA0DDA50A70417BA3BE7CD1DAD596EF29B52AF098C4970F67A82447C2F665F392AB8A30893FF4ADEA7E888AF3EF5DA087CC57C7087C5F4C13C563393ACD51AEFBFF9B0229DB3502FDA80BA565411",
        "title": "Device connections"
      }
    },
    {
      "name": "UsageDataCard",
      "displayName": "COMP_TITLE_UsageData",
      "description": "COMP_DESC_UsageData",
      "category": "Usage",
      "cardType": "NO_DATAPOINTS",
      "thumbnail": "traffic-consumption",
      "wrapper": "ReactWrapper",
      "sizes": [[2,1],[2,2],[2,3],[3,4],[4,4]],
      "sticky": false,
      "showRefresh": true,
      "parameters" : {
        "component": "UsageDataCard",
        "title": "Data transferred"
      }
    },
    {
      "name": "UsageStorageCard",
      "displayName": "COMP_TITLE_UsageStorage",
      "description": "COMP_DESC_UsageStorage",
      "category": "Hidden",
      "cardType": "NO_DATAPOINTS",
      "thumbnail": "storage-consumption",
      "wrapper": "ReactWrapper",
      "sizes": [[2,1],[2,2],[2,3],[3,4],[4,4]],
      "sticky": false,
      "showRefresh": true,
      "deprecated": true,
      "parameters" : {
        "component": "DeadCard",
        "deadCardLink": "http://link2-em-us.unicaondemand.com/frontend/dynamicAssets?e=t3FFF203B37ACB21D068F7555F491371A14DB35C26F75109FEF0BCA0DDA50A70417BA3BE7CD1DAD596EF29B52AF098C4970F67A82447C2F665F392AB8A30893FF4ADEA7E888AF3EF5DA087CC57C7087C5F4C13C563393ACD51AEFBFF9B0229DB3502FDA80BA565411",
        "title": "Storage consumed"
      }
    },
    {
      "name": "HorizontalLine",
      "displayName": "COMP_TITLE_HorizontalLine",
      "description": "COMP_DESC_HorizontalLine",
      "category": "Basic",
      "cardType": "NO_DATAPOINTS,NO_CUSTOMIZATION",
      "thumbnail": "horizontal-seperator",
      "wrapper": "ReactWrapper",
      "sizes": [[2,1],[3,1],[4,1],[6,1],[8,1]],
      "sticky": false,
      "parameters" : {
        "component": "HorizontalLine",
        "title": "Separator"
      }
    }
  ]}

},{}],"/Users/frank/Documents/Projects/IOTFoundation/components/Dashboard/utils/regex-email.js":[function(require,module,exports){
"use strict";

//
// Regular Expression for URL validation
//
// Author: Diego Perini
// Updated: 2010/12/05
// License: MIT
//
// Copyright (c) 2010-2013 Diego Perini (http://www.iport.it)
//
// Permission is hereby granted, free of charge, to any person
// obtaining a copy of this software and associated documentation
// files (the "Software"), to deal in the Software without
// restriction, including without limitation the rights to use,
// copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the
// Software is furnished to do so, subject to the following
// conditions:
//
// The above copyright notice and this permission notice shall be
// included in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
// OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
// HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
// WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
// FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
// OTHER DEALINGS IN THE SOFTWARE.
//
// the regular expression composed & commented
// could be easily tweaked for RFC compliance,
// it was expressly modified to fit & satisfy
// these test for an URL shortener:
//
//   http://mathiasbynens.be/demo/url-regex
//
// Notes on possible differences from a standard/generic validation:
//
// - utf-8 char class take in consideration the full Unicode range
// - TLDs have been made mandatory so single names like "localhost" fails
// - protocols have been restricted to ftp, http and https only as requested
//
// Changes:
//
// - IP address dotted notation validation, range: 1.0.0.0 - 223.255.255.255
//   first and last IP address of each class is considered invalid
//   (since they are broadcast/network addresses)
//
// - Added exclusion of private, reserved and/or local networks ranges
//
// - Made starting path slash optional (http://example.com?foo=bar)
//
// - Allow a dot (.) at the end of hostnames (http://example.com.)
//
// Compressed one-line versions:
//
// Javascript version
//
// /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i
//
// PHP version
//
// _^(?:(?:https?|ftp)://)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\x{00a1}-\x{ffff}0-9]-*)*[a-z\x{00a1}-\x{ffff}0-9]+)(?:\.(?:[a-z\x{00a1}-\x{ffff}0-9]-*)*[a-z\x{00a1}-\x{ffff}0-9]+)*(?:\.(?:[a-z\x{00a1}-\x{ffff}]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$_iuS
//
var re_weburl = new RegExp(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/);

module.exports = re_weburl;

},{}],"/Users/frank/Documents/Projects/IOTFoundation/components/Dashboard/utils/regex-weburl.js":[function(require,module,exports){
"use strict";

//
// Regular Expression for URL validation
//
// Author: Diego Perini
// Updated: 2010/12/05
// License: MIT
//
// Copyright (c) 2010-2013 Diego Perini (http://www.iport.it)
//
// Permission is hereby granted, free of charge, to any person
// obtaining a copy of this software and associated documentation
// files (the "Software"), to deal in the Software without
// restriction, including without limitation the rights to use,
// copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the
// Software is furnished to do so, subject to the following
// conditions:
//
// The above copyright notice and this permission notice shall be
// included in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
// OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
// HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
// WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
// FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
// OTHER DEALINGS IN THE SOFTWARE.
//
// the regular expression composed & commented
// could be easily tweaked for RFC compliance,
// it was expressly modified to fit & satisfy
// these test for an URL shortener:
//
//   http://mathiasbynens.be/demo/url-regex
//
// Notes on possible differences from a standard/generic validation:
//
// - utf-8 char class take in consideration the full Unicode range
// - TLDs have been made mandatory so single names like "localhost" fails
// - protocols have been restricted to ftp, http and https only as requested
//
// Changes:
//
// - IP address dotted notation validation, range: 1.0.0.0 - 223.255.255.255
//   first and last IP address of each class is considered invalid
//   (since they are broadcast/network addresses)
//
// - Added exclusion of private, reserved and/or local networks ranges
//
// - Made starting path slash optional (http://example.com?foo=bar)
//
// - Allow a dot (.) at the end of hostnames (http://example.com.)
//
// Compressed one-line versions:
//
// Javascript version
//
// /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i
//
// PHP version
//
// _^(?:(?:https?|ftp)://)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\x{00a1}-\x{ffff}0-9]-*)*[a-z\x{00a1}-\x{ffff}0-9]+)(?:\.(?:[a-z\x{00a1}-\x{ffff}0-9]-*)*[a-z\x{00a1}-\x{ffff}0-9]+)*(?:\.(?:[a-z\x{00a1}-\x{ffff}]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$_iuS
//
var re_weburl = new RegExp("^" +
// protocol identifier
"(?:(?:https?|ftp)://)" +
// user:pass authentication
"(?:\\S+(?::\\S*)?@)?" + "(?:" +
// IP address exclusion
// private & local networks
"(?!(?:10|127)(?:\\.\\d{1,3}){3})" + "(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})" + "(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})" +
// IP address dotted notation octets
// excludes loopback network 0.0.0.0
// excludes reserved space >= 224.0.0.0
// excludes network & broacast addresses
// (first & last IP address of each class)
"(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])" + "(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}" + "(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))" + "|" +
// host name
"(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)" +
// domain name
"(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*" +
// TLD identifier
"(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))" +
// TLD may end with dot
"\\.?" + ")" +
// port number
"(?::\\d{2,5})?" +
// resource path
"(?:[/?#]\\S*)?" + "$", "i");

module.exports = re_weburl;

},{}],"/Users/frank/Documents/Projects/IOTFoundation/components/app/RiskManagement/constants/AccessControlAddDialog.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var IP = exports.IP = 'IP';
var CIDR = exports.CIDR = 'CIDR';
var COUNTRY = exports.COUNTRY = 'COUNTRY';
var WHITE_LIST_BLACK_LIST_LIMITS = exports.WHITE_LIST_BLACK_LIST_LIMITS = 100;

},{}],"/Users/frank/Documents/Projects/IOTFoundation/components/app/RiskManagement/constants/Policies.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _PolicyTableHeaders;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PolicyTypes = exports.PolicyTypes = {
  CONNECTION_SECURITY: 'CONNECTION_SECURITY',
  WHITELIST: 'WHITELIST',
  BLACKLIST: 'BLACKLIST'
};

var AccessControlEntryTypes = exports.AccessControlEntryTypes = {
  LIST_IP_ADDRESS: 'LIST_IP_ADDRESS',
  LIST_IP_RANGE: 'LIST_IP_RANGE',
  LIST_CIDR: 'LIST_CIDR',
  LIST_COUNTRY: 'LIST_COUNTRY'
};

var SECURITY_LEVEL = exports.SECURITY_LEVEL = {
  DEFAULT: 'tls-optional',
  TLS_OPTIONAL: 'tls-optional',
  TLS_TOKEN: 'tls-token',
  TLS_CERTIFICATE: 'tls-certificate',
  TLS_TOKEN_CERTIFICATE: 'tls-token-certificate',
  TLS_CERTIFICATE_OR_TOKEN: 'tls-certificate-or-token'
};

var SECURITY_LEVEL_OPTIONS = exports.SECURITY_LEVEL_OPTIONS = [SECURITY_LEVEL.TLS_OPTIONAL, SECURITY_LEVEL.TLS_TOKEN, SECURITY_LEVEL.TLS_CERTIFICATE, SECURITY_LEVEL.TLS_TOKEN_CERTIFICATE, SECURITY_LEVEL.TLS_CERTIFICATE_OR_TOKEN];

var SECURITY_LEVEL_MSG_ROOT = exports.SECURITY_LEVEL_MSG_ROOT = 'RiskManagement.Policies.ConnectionSecurity.SecurityLevel';

var getPolicyTypes = exports.getPolicyTypes = function getPolicyTypes(nls) {
  return [{
    id: PolicyTypes.CONNECTION_SECURITY,
    name: nls.resolve('RiskManagement.Policies.ConnectionSecurity.policy.name'),
    description: nls.resolve('RiskManagement.Policies.ConnectionSecurity.policy.description'),
    policyType: PolicyTypes.CONNECTION_SECURITY,
    securityLevel: SECURITY_LEVEL.DEFAULT
  }, {
    id: PolicyTypes.BLACKLIST,
    name: nls.resolve('RiskManagement.Policies.AccessControl.BLACKLIST.policy.name'),
    description: nls.resolve('RiskManagement.Policies.AccessControl.BLACKLIST.policy.description'),
    policyType: PolicyTypes.BLACKLIST
  }, {
    id: PolicyTypes.WHITELIST,
    name: nls.resolve('RiskManagement.Policies.AccessControl.WHITELIST.policy.name'),
    description: nls.resolve('RiskManagement.Policies.AccessControl.WHITELIST.policy.description'),
    policyType: PolicyTypes.WHITELIST
  }];
};

var CommonPolicyProps = exports.CommonPolicyProps = {
  IS_DEFAULT: 'isDefault',
  IS_NEW: 'isNew',
  IS_ADDED: 'isAdded',
  IS_UPDATED: 'isUpdated',
  IS_DELETED: 'isDeleted'
};

var AccessControlTableHeaders = exports.AccessControlTableHeaders = {
  IP_COUNTRY: 'ipCountry',
  COMMENTS: 'comments',
  DATE_ADDED: 'dateAdded'
};

var AccessControlProps = exports.AccessControlProps = _extends({}, AccessControlTableHeaders, {
  TYPE: 'type',
  IS_ENABLED: 'isEnabled',
  POLICY_ID: 'policyId'
});

var ConnectionSecurityTableHeaders = exports.ConnectionSecurityTableHeaders = {
  DEVICE_TYPE: 'deviceType',
  NUMBER_OF_DEVICES: 'numberOfDevices',
  SECURITY_LEVEL: 'securityLevel',
  PREDICTED_COMPLIANCE: 'predictedCompliance'
};

var ConnectionSecurityProps = exports.ConnectionSecurityProps = _extends({}, ConnectionSecurityTableHeaders, {
  VERSION: 'version',
  POLICY_ID: 'policyId',
  LAST_UPDATED: 'lastUpdated'
});

var accessControlTableHeadersArray = Object.keys(AccessControlTableHeaders).map(function (key) {
  return AccessControlTableHeaders[key];
});

var PolicyTableHeaders = exports.PolicyTableHeaders = (_PolicyTableHeaders = {}, _defineProperty(_PolicyTableHeaders, PolicyTypes.CONNECTION_SECURITY, Object.keys(ConnectionSecurityTableHeaders).map(function (key) {
  return ConnectionSecurityTableHeaders[key];
})), _defineProperty(_PolicyTableHeaders, PolicyTypes.WHITELIST, accessControlTableHeadersArray), _defineProperty(_PolicyTableHeaders, PolicyTypes.BLACKLIST, accessControlTableHeadersArray), _PolicyTableHeaders);

},{}],"/Users/frank/Documents/Projects/IOTFoundation/components/app/RiskManagement/services/PolicyService.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.refreshCompliance = exports.savePolicyData = exports.saveAccessControl = exports.saveConnectionSecurity = exports.deletePolicy = exports.updatePolicy = exports.savePolicy = exports.saveTempPolicy = exports.loadAccessControlListsStatuses = exports.loadPoliciesByType = exports.loadPolicyCompliance = exports.loadSecurityLevels = exports.loadPolicyTypes = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _Policies = require('../constants/Policies.js');

var _API = require('../utils/API');

var _PoliciesUtils = require('../utils/PoliciesUtils');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var options = {
  credentials: 'same-origin',
  headers: {
    'Cache-Control': 'no-cache',
    Pragma: 'no-cache',
    'Content-type': 'application/json'
  }
};

var API = '/api/v0002/riskmgmt';

var loadPolicyTypes = exports.loadPolicyTypes = function loadPolicyTypes(nls) {
  return (0, _Policies.getPolicyTypes)(nls).map(function (policy) {
    return {
      id: policy.id,
      policyType: policy.policyType,
      hasSwitch: policy.policyType !== _Policies.PolicyTypes.CONNECTION_SECURITY,
      name: policy.name,
      description: policy.description,
      securityLevel: policy.securityLevel
    };
  });
};

var loadSecurityLevels = exports.loadSecurityLevels = function loadSecurityLevels(nls) {
  return _Policies.SECURITY_LEVEL_OPTIONS.map(function (option) {
    return {
      key: option,
      label: nls.resolve(_Policies.SECURITY_LEVEL_MSG_ROOT + '.' + option)
    };
  });
};

var loadPolicyCompliance = exports.loadPolicyCompliance = function loadPolicyCompliance(policyType, ids, initialLoad, callback) {
  var policiesParam = ids && ids.length > 0 ? '?policies=' + ids.join('+') : '';
  var params = '' + policyType + policiesParam;
  var mode = initialLoad ? 'active' : 'predict';
  var url = API + '/reporting/policies/' + mode + '/PolicyType/' + params;

  // Returns a new promise
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    var previousLen = 0;
    var previousLine = '';

    // Initializes the XHTMLHttpRequest callbacks
    xhr.addEventListener('abort', function () {
      return reject('loadPolicyCompliance aborted');
    });
    xhr.addEventListener('error', function () {
      return reject('RiskManagement.Error.internalError');
    });
    xhr.addEventListener('load', function () {
      return xhr.status === 200 ? resolve() : reject('RiskManagement.Error.internalError');
    });
    // xhr.addEventListener('loadend', () => ??.log('end'));
    xhr.open('GET', url, true);

    // On each chunk
    xhr.onreadystatechange = function () {
      var response = xhr.responseText;
      var chunk = response.slice(previousLen);
      previousLen = response.length;

      // Process the chunk
      var lines = chunk.split('\n');
      var lastLine = String(lines[lines.length - 1]);
      if (lastLine.length === 0 && lines.length > 1) {
        lastLine = lines[lines.length - 2];
      }

      // Only sends if there is data
      if (lastLine !== '' && lastLine !== previousLine) {
        try {
          callback(JSON.parse(lastLine));
        } catch (e) {
          console.log('Bad chunk, not a JSON - ' + e.message$);
        } // eslint-disable-line
      }
      previousLine = lastLine;
      return true;
    };
    xhr.send(null);
  });
};

var loadPoliciesByType = exports.loadPoliciesByType = function loadPoliciesByType(type) {
  return (0, _API.jsonFetch)(API + '/policies/type/' + type, options).then(function (response) {
    if (response.exception) {
      throw new Error((0, _API.getAPIError)(response));
    }
    return response;
  }).then(function (policies) {
    return (0, _PoliciesUtils.convertPoliciesToUIData)(type, policies.results);
  });
};

var loadAccessControlListsStatuses = exports.loadAccessControlListsStatuses = function loadAccessControlListsStatuses() {
  return (0, _API.jsonFetch)(API + '/policies/lists/status', options).then(function (response) {
    if (response.exception) {
      throw new Error((0, _API.getAPIError)(response));
    }
    return response;
  }).then(function (statuses) {
    return (0, _PoliciesUtils.convertAccessControlStatusesToUIData)(statuses);
  });
};

var saveTempPolicy = exports.saveTempPolicy = function saveTempPolicy(type, policy) {
  // (tableId, data) => {
  var data = (0, _PoliciesUtils.convertConnectionSecurityUIDataToBackendData)(policy, true);
  return (0, _API.jsonFetch)(API + '/policies/temp/', _extends({}, options, { method: 'POST', body: JSON.stringify(data) }));
};

var savePolicy = exports.savePolicy = function savePolicy(data) {
  return (0, _API.jsonFetch)(API + '/policies/', _extends({}, options, { method: 'POST', body: JSON.stringify(data) })).then(function (policy) {
    return policy;
  });
};

var updatePolicy = exports.updatePolicy = function updatePolicy(policyId, data) {
  return (0, _API.jsonFetch)(API + '/policies/' + policyId, _extends({}, options, { method: 'PUT', body: JSON.stringify(data) })).then(function (policy) {
    return policy;
  });
};

var deletePolicy = exports.deletePolicy = function deletePolicy(policyId) {
  return fetch(API + '/policies/' + policyId, _extends({}, options, { method: 'DELETE' }));
};

var getNewData = function getNewData(policyData) {
  return policyData.filter(function (policy) {
    return policy[_Policies.CommonPolicyProps.IS_ADDED] && !policy[_Policies.CommonPolicyProps.IS_DELETED];
  });
};

var saveData = function saveData(policyData) {
  return getNewData(policyData).map(function (policy) {
    return savePolicy.bind(null, (0, _PoliciesUtils.convertConnectionSecurityUIDataToBackendData)(policy, true));
  });
};

var getUpdatedData = function getUpdatedData(policyData) {
  return policyData.filter(function (policy) {
    return policy[_Policies.CommonPolicyProps.IS_UPDATED] && !policy[_Policies.CommonPolicyProps.IS_ADDED] && !policy[_Policies.CommonPolicyProps.IS_DELETED];
  });
};

var updateData = function updateData(policyData) {
  return getUpdatedData(policyData).map(function (policy) {
    return updatePolicy.bind(null, policy[_Policies.ConnectionSecurityProps.POLICY_ID], (0, _PoliciesUtils.convertConnectionSecurityUIDataToBackendData)(policy));
  });
};

var getDeletedData = function getDeletedData(policyData) {
  return policyData.filter(function (policy) {
    return policy[_Policies.CommonPolicyProps.IS_DELETED] && policy[_Policies.ConnectionSecurityProps.POLICY_ID];
  });
};

var deleteData = function deleteData(policyData) {
  return getDeletedData(policyData).map(function (policy) {
    return deletePolicy.bind(null, policy[_Policies.ConnectionSecurityProps.POLICY_ID]);
  });
};

var saveConnectionSecurity = exports.saveConnectionSecurity = function saveConnectionSecurity(policyData) {
  // Filter out entries with invalid device type
  var validPolicyData = policyData.filter(function (policy) {
    return policy[_Policies.CommonPolicyProps.IS_DEFAULT] || policy[_Policies.ConnectionSecurityProps.DEVICE_TYPE];
  });
  var savePromises = saveData(validPolicyData);
  var updatePromises = updateData(validPolicyData);
  var deletePromises = deleteData(validPolicyData);

  var promises = [].concat(_toConsumableArray(savePromises), _toConsumableArray(updatePromises), _toConsumableArray(deletePromises)).map(function (f) {
    return f();
  });

  return Promise.all(promises).then(function (results) {
    return results;
  }).catch(function (error) {
    return { message: error.message, exception: true };
  });
};

var saveAccessControl = exports.saveAccessControl = function saveAccessControl(policyType, policies) {
  var statusData = (0, _PoliciesUtils.convertAccessControlUIPoliciesDataToBackendStatusData)(policies);
  return (0, _API.jsonFetch)(API + '/policies/lists/status', _extends({}, options, { method: 'PUT', body: JSON.stringify(statusData) })).then(function () {
    var policyId = policies[policyType].find(function (obj) {
      return obj[_Policies.CommonPolicyProps.IS_DEFAULT];
    })[_Policies.AccessControlProps.POLICY_ID];
    var policyData = (0, _PoliciesUtils.convertAccessControlUIDataToBackendData)(policyType, policies[policyType]);
    return (0, _API.jsonFetch)(API + '/policies/' + policyId, _extends({}, options, { method: 'PUT', body: JSON.stringify(policyData) }));
  });
};

var savePolicyData = exports.savePolicyData = function savePolicyData(policyType, policies) {
  return policyType === _Policies.PolicyTypes.CONNECTION_SECURITY ? saveConnectionSecurity(policies[policyType]) : saveAccessControl(policyType, policies);
};

/** **************************************
 * NOT AVAILABLE FOR CODE REVIEW =P
 ****************************************/

var randomNumbers = [];
for (var i = 0; i < 100; i++) {
  randomNumbers.push(Math.floor(Math.random() * 81) + 10); // 10 to 90
}
randomNumbers = randomNumbers.sort(function (a, b) {
  return a - b;
});

var refreshCompliance = exports.refreshCompliance = function refreshCompliance(ids, initialLoad, callback) {
  return loadPolicyCompliance(_Policies.PolicyTypes.CONNECTION_SECURITY, ids, initialLoad, callback);
};

},{"../constants/Policies.js":"/Users/frank/Documents/Projects/IOTFoundation/components/app/RiskManagement/constants/Policies.js","../utils/API":"/Users/frank/Documents/Projects/IOTFoundation/components/app/RiskManagement/utils/API.js","../utils/PoliciesUtils":"/Users/frank/Documents/Projects/IOTFoundation/components/app/RiskManagement/utils/PoliciesUtils.js"}],"/Users/frank/Documents/Projects/IOTFoundation/components/app/RiskManagement/utils/API.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.jsonFetch = jsonFetch;
exports.getAPIError = getAPIError;
function jsonFetch(url, options) {
  return fetch(url, options).then(function (response) {
    if (!response.ok) {
      throw new Error('RiskManagement.Error.internalError');
    }
    var contentType = response.headers.get('content-type');
    var isJson = contentType && contentType.indexOf('application/json') !== -1;
    return isJson ? response.json() : response;
  }).catch(function () {
    throw new Error('RiskManagement.Error.internalError');
  });
}

function getAPIError(json) {
  var hasCode = json.message && json.exception && json.exception.id;
  return 'RiskManagement.Error.Codes.' + (hasCode ? json.exception.id : 'unknown');
}

},{}],"/Users/frank/Documents/Projects/IOTFoundation/components/app/RiskManagement/utils/Compliance.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Compliance = function () {
  function Compliance(pass, fail, unknown) {
    _classCallCheck(this, Compliance);

    this.pass = pass;
    this.fail = fail;
    this.unknown = unknown;
  }

  _createClass(Compliance, [{
    key: "compareTo",
    value: function compareTo(objectToCompare) {
      if (this.pass === objectToCompare.pass) {
        return 0;
      }
      return this.pass < objectToCompare.pass ? -1 : 1;
    }
  }]);

  return Compliance;
}();

exports.default = Compliance;

},{}],"/Users/frank/Documents/Projects/IOTFoundation/components/app/RiskManagement/utils/PoliciesUtils.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertAccessControlUIDataToBackendData = exports.convertAccessControlUIPoliciesDataToBackendStatusData = exports.convertAccessControlStatusesToUIData = exports.convertConnectionSecurityUIDataToBackendData = exports.convertPoliciesToUIData = undefined;

var _Policies = require('../constants/Policies');

var _AccessControlAddDialog = require('../constants/AccessControlAddDialog');

var AccessControlAddDialog = _interopRequireWildcard(_AccessControlAddDialog);

var _Compliance = require('./Compliance');

var _Compliance2 = _interopRequireDefault(_Compliance);

var _SecurityLevelParser = require('./SecurityLevelParser');

var _SecurityLevelParser2 = _interopRequireDefault(_SecurityLevelParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var levelParser = new _SecurityLevelParser2.default();

var convertAccessControlEntryTypeToAddDialogContentType = function convertAccessControlEntryTypeToAddDialogContentType(accessControlEntryType) {
  switch (accessControlEntryType) {
    case _Policies.AccessControlEntryTypes.LIST_CIDR:
      return AccessControlAddDialog.CIDR;
    case _Policies.AccessControlEntryTypes.LIST_COUNTRY:
      return AccessControlAddDialog.COUNTRY;
    case _Policies.AccessControlEntryTypes.LIST_IP_ADDRESS:
    case _Policies.AccessControlEntryTypes.LIST_IP_RANGE:
    default:
      return AccessControlAddDialog.IP;
  }
};

var convertAddDialogContentTypeToAccessControlEntryType = function convertAddDialogContentTypeToAccessControlEntryType(addDialogContentType, value) {
  switch (addDialogContentType) {
    case AccessControlAddDialog.IP:
      return value.indexOf('-') >= 0 ? _Policies.AccessControlEntryTypes.LIST_IP_RANGE : _Policies.AccessControlEntryTypes.LIST_IP_ADDRESS;
    case AccessControlAddDialog.CIDR:
      return _Policies.AccessControlEntryTypes.LIST_CIDR;
    case AccessControlAddDialog.COUNTRY:
      return _Policies.AccessControlEntryTypes.LIST_COUNTRY;
    default:
      return _Policies.AccessControlEntryTypes.LIST_IP_ADDRESS;
  }
};

var convertPoliciesToUIData = exports.convertPoliciesToUIData = function convertPoliciesToUIData(policyType, policiesArray) {
  var _ref3;

  if (_Policies.PolicyTypes.CONNECTION_SECURITY === policyType) {
    return policiesArray.map(function (policy) {
      var _ref;

      return _ref = {}, _defineProperty(_ref, _Policies.CommonPolicyProps.IS_DEFAULT, Boolean(policy.defaultPolicy)), _defineProperty(_ref, _Policies.ConnectionSecurityProps.POLICY_ID, policy.id), _defineProperty(_ref, _Policies.ConnectionSecurityProps.VERSION, policy.version), _defineProperty(_ref, _Policies.ConnectionSecurityProps.DEVICE_TYPE, policy.target || ''), _defineProperty(_ref, _Policies.ConnectionSecurityProps.SECURITY_LEVEL, levelParser.getSecurityLevel(policy.conditions)), _defineProperty(_ref, _Policies.ConnectionSecurityProps.PREDICTED_COMPLIANCE, new _Compliance2.default(0, 0, 0)), _defineProperty(_ref, _Policies.ConnectionSecurityProps.LAST_UPDATED, new Date(policy.lastUpdated).getTime()), _ref;
    }).sort(function (a, b) {
      return a[_Policies.ConnectionSecurityProps.DEVICE_TYPE] < b[_Policies.ConnectionSecurityProps.DEVICE_TYPE] ? -1 : 1;
    });
  }
  return policiesArray.length > 0 ? [].concat(_toConsumableArray(policiesArray[0].conditions.map(function (item) {
    var _ref2;

    return _ref2 = {}, _defineProperty(_ref2, _Policies.AccessControlProps.TYPE, convertAccessControlEntryTypeToAddDialogContentType(item.property)), _defineProperty(_ref2, _Policies.AccessControlProps.IP_COUNTRY, item.value), _defineProperty(_ref2, _Policies.AccessControlProps.COMMENTS, item.description), _defineProperty(_ref2, _Policies.AccessControlProps.DATE_ADDED, new Date(item.lastUpdated).toUTCString()), _ref2;
  })), [(_ref3 = {}, _defineProperty(_ref3, _Policies.CommonPolicyProps.IS_DEFAULT, true), _defineProperty(_ref3, _Policies.AccessControlProps.IS_ENABLED, policiesArray[0].enabled), _defineProperty(_ref3, _Policies.AccessControlProps.POLICY_ID, policiesArray[0].id), _ref3)]) : [];
};

var convertConnectionSecurityUIDataToBackendData = exports.convertConnectionSecurityUIDataToBackendData = function convertConnectionSecurityUIDataToBackendData(policy) {
  var isNew = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var newPolicy = {
    conditions: levelParser.postSecurityLevel(policy[_Policies.ConnectionSecurityProps.SECURITY_LEVEL]),
    target: policy[_Policies.ConnectionSecurityProps.DEVICE_TYPE],
    policyType: _Policies.PolicyTypes.CONNECTION_SECURITY
  };
  if (isNew) {
    var isDefault = policy[_Policies.CommonPolicyProps.IS_DEFAULT];
    newPolicy.name = policy[_Policies.ConnectionSecurityProps.DEVICE_TYPE] + '-' + policy[_Policies.ConnectionSecurityProps.SECURITY_LEVEL];
    newPolicy.severity = 1;
    newPolicy.targetType = isDefault ? 'ALL' : 'DEVICE_TYPE';
    newPolicy.violationActions = ['REJECT_CONNECTION'];
    if (isDefault) {
      newPolicy.defaultPolicy = true;
    } else {
      newPolicy.target = policy[_Policies.ConnectionSecurityProps.DEVICE_TYPE];
    }
  }
  return newPolicy;
};

var convertAccessControlStatusesToUIData = exports.convertAccessControlStatusesToUIData = function convertAccessControlStatusesToUIData(statuses) {
  var _ref4, _ref5, _ref6;

  return _ref6 = {}, _defineProperty(_ref6, _Policies.PolicyTypes.WHITELIST, [(_ref4 = {}, _defineProperty(_ref4, _Policies.CommonPolicyProps.IS_DEFAULT, true), _defineProperty(_ref4, _Policies.AccessControlProps.IS_ENABLED, statuses.whitelistActive), _ref4)]), _defineProperty(_ref6, _Policies.PolicyTypes.BLACKLIST, [(_ref5 = {}, _defineProperty(_ref5, _Policies.CommonPolicyProps.IS_DEFAULT, true), _defineProperty(_ref5, _Policies.AccessControlProps.IS_ENABLED, statuses.blacklistActive), _ref5)]), _ref6;
};

var convertAccessControlUIPoliciesDataToBackendStatusData = exports.convertAccessControlUIPoliciesDataToBackendStatusData = function convertAccessControlUIPoliciesDataToBackendStatusData(uiPoliciesData) {
  return {
    whitelistActive: uiPoliciesData[_Policies.PolicyTypes.WHITELIST].find(function (entry) {
      return entry[_Policies.CommonPolicyProps.IS_DEFAULT];
    })[_Policies.AccessControlProps.IS_ENABLED],
    blacklistActive: uiPoliciesData[_Policies.PolicyTypes.BLACKLIST].find(function (entry) {
      return entry[_Policies.CommonPolicyProps.IS_DEFAULT];
    })[_Policies.AccessControlProps.IS_ENABLED]
  };
};

var convertAccessControlUIDataToBackendData = exports.convertAccessControlUIDataToBackendData = function convertAccessControlUIDataToBackendData(policyType, uiData) {
  return {
    policyType: policyType,
    conditions: uiData.filter(function (entry) {
      return !entry[_Policies.CommonPolicyProps.IS_DEFAULT];
    }).filter(function (entry) {
      return !entry[_Policies.CommonPolicyProps.IS_DELETED];
    }).map(function (entry) {
      return {
        property: convertAddDialogContentTypeToAccessControlEntryType(entry[_Policies.AccessControlProps.TYPE], entry[_Policies.AccessControlProps.IP_COUNTRY]),
        value: entry[_Policies.AccessControlProps.IP_COUNTRY],
        description: entry[_Policies.AccessControlProps.COMMENTS],
        lastUpdated: entry[_Policies.AccessControlProps.DATE_ADDED] ? new Date(entry[_Policies.AccessControlProps.DATE_ADDED]).toISOString() : undefined,
        conditionType: 'PROPERTY',
        operator: 'IN',
        valueType: 'STRING'
      };
    })
  };
};

},{"../constants/AccessControlAddDialog":"/Users/frank/Documents/Projects/IOTFoundation/components/app/RiskManagement/constants/AccessControlAddDialog.js","../constants/Policies":"/Users/frank/Documents/Projects/IOTFoundation/components/app/RiskManagement/constants/Policies.js","./Compliance":"/Users/frank/Documents/Projects/IOTFoundation/components/app/RiskManagement/utils/Compliance.js","./SecurityLevelParser":"/Users/frank/Documents/Projects/IOTFoundation/components/app/RiskManagement/utils/SecurityLevelParser.js"}],"/Users/frank/Documents/Projects/IOTFoundation/components/app/RiskManagement/utils/SecurityLevelParser.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Policies = require('../constants/Policies');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TLS_OPTIONAL = [{
  conditionType: 'CONJUNCTION',
  operator: 'OR',
  conditions: [{
    conditionType: 'PROPERTY',
    property: 'CONN_IS_SECURE',
    operator: 'EQ',
    valueType: 'BOOLEAN',
    value: true
  }, {
    conditionType: 'PROPERTY',
    property: 'CONN_IS_SECURE',
    operator: 'EQ',
    valueType: 'BOOLEAN',
    value: false
  }]
}];

var TLS_TOKEN = [{
  conditionType: 'PROPERTY',
  property: 'CONN_IS_SECURE',
  operator: 'EQ',
  valueType: 'BOOLEAN',
  value: true
}, {
  conditionType: 'PROPERTY',
  property: 'CONN_USES_TOKEN',
  operator: 'EQ',
  valueType: 'BOOLEAN',
  value: true
}];

var TLS_CERTIFICATE = [{
  conditionType: 'PROPERTY',
  property: 'CONN_IS_SECURE',
  operator: 'EQ',
  valueType: 'BOOLEAN',
  value: true
}, {
  conditionType: 'PROPERTY',
  property: 'CONN_USES_CERTIFICATE',
  operator: 'EQ',
  valueType: 'BOOLEAN',
  value: true
}];

var TLS_TOKEN_CERTIFICATE = [{
  conditionType: 'PROPERTY',
  property: 'CONN_IS_SECURE',
  operator: 'EQ',
  valueType: 'BOOLEAN',
  value: true
}, {
  conditionType: 'PROPERTY',
  property: 'CONN_USES_TOKEN',
  operator: 'EQ',
  valueType: 'BOOLEAN',
  value: true
}, {
  conditionType: 'PROPERTY',
  property: 'CONN_USES_CERTIFICATE',
  operator: 'EQ',
  valueType: 'BOOLEAN',
  value: true
}];

var TLS_CERTIFICATE_OR_TOKEN = [{
  conditionType: 'PROPERTY',
  property: 'CONN_IS_SECURE',
  operator: 'EQ',
  valueType: 'BOOLEAN',
  value: true
}, {
  conditionType: 'CONJUNCTION',
  operator: 'OR',
  conditions: [{
    conditionType: 'PROPERTY',
    property: 'CONN_USES_TOKEN',
    operator: 'EQ',
    valueType: 'BOOLEAN',
    value: true
  }, {
    conditionType: 'PROPERTY',
    property: 'CONN_USES_CERTIFICATE',
    operator: 'EQ',
    valueType: 'BOOLEAN',
    value: true
  }]
}];

var SecurityLevelParser = function () {
  function SecurityLevelParser() {
    _classCallCheck(this, SecurityLevelParser);
  }

  _createClass(SecurityLevelParser, [{
    key: 'getSecurityLevel',
    value: function getSecurityLevel() {
      var conditions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      var options = {
        CONN_IS_SECURE: undefined,
        CONN_USES_TOKEN: undefined,
        CONN_USES_CERTIFICATE: undefined
      };

      conditions.forEach(function (condition) {
        if (condition.conditionType === 'CONJUNCTION') {
          condition.conditions.forEach(function (subCondition) {
            if (subCondition.conditionType === 'PROPERTY') {
              if (options[subCondition.property] !== undefined && subCondition.value !== undefined && options[subCondition.property] !== subCondition.value) {
                options[subCondition.property] = 'optional';
              } else if (condition.operator === 'OR') {
                options[subCondition.property] = 'either';
              } else {
                options[subCondition.property] = subCondition.value;
              }
            }
          });
        } else if (condition.conditionType === 'PROPERTY') {
          options[condition.property] = condition.value;
        }
      });

      if (options.CONN_IS_SECURE === 'optional') {
        return _Policies.SECURITY_LEVEL.TLS_OPTIONAL;
      } else if (options.CONN_IS_SECURE && options.CONN_USES_TOKEN === 'either' && options.CONN_USES_CERTIFICATE === 'either') {
        return _Policies.SECURITY_LEVEL.TLS_CERTIFICATE_OR_TOKEN;
      } else if (options.CONN_IS_SECURE && options.CONN_USES_TOKEN && options.CONN_USES_CERTIFICATE) {
        return _Policies.SECURITY_LEVEL.TLS_TOKEN_CERTIFICATE;
      } else if (options.CONN_IS_SECURE && options.CONN_USES_TOKEN) {
        return _Policies.SECURITY_LEVEL.TLS_TOKEN;
      } else if (options.CONN_IS_SECURE && options.CONN_USES_CERTIFICATE) {
        return _Policies.SECURITY_LEVEL.TLS_CERTIFICATE;
      }

      return null;
    }
  }, {
    key: 'postSecurityLevel',
    value: function postSecurityLevel(securityLevel) {
      switch (securityLevel) {
        case _Policies.SECURITY_LEVEL.TLS_OPTIONAL:
          return TLS_OPTIONAL;
        case _Policies.SECURITY_LEVEL.TLS_TOKEN:
          return TLS_TOKEN;
        case _Policies.SECURITY_LEVEL.TLS_CERTIFICATE:
          return TLS_CERTIFICATE;
        case _Policies.SECURITY_LEVEL.TLS_TOKEN_CERTIFICATE:
          return TLS_TOKEN_CERTIFICATE;
        case _Policies.SECURITY_LEVEL.TLS_CERTIFICATE_OR_TOKEN:
          return TLS_CERTIFICATE_OR_TOKEN;
        default:
          return TLS_OPTIONAL;
      }
    }
  }]);

  return SecurityLevelParser;
}();

exports.default = SecurityLevelParser;

},{"../constants/Policies":"/Users/frank/Documents/Projects/IOTFoundation/components/app/RiskManagement/constants/Policies.js"}],"/Users/frank/Documents/Projects/IOTFoundation/components/app/shared/DatePicker/DateTimePicker.jsx":[function(require,module,exports){
(function (global){
'use strict';

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _reactDatepicker = (typeof window !== "undefined" ? window['DatePicker'] : typeof global !== "undefined" ? global['DatePicker'] : null);

var _reactDatepicker2 = _interopRequireDefault(_reactDatepicker);

var _TimePicker = require('../TimePicker/TimePicker.jsx');

var _TimePicker2 = _interopRequireDefault(_TimePicker);

var _Checkbox = require('../../../common/components/Checkbox.jsx');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  datePickerContainer: {
    background: "white",
    position: "absolute",
    bottom: "36px",
    zIndex: "20",
    borderTop: "3px solid black !important",
    boxShadow: "0px 0px 3px 0px rgba(72,81,81,0.67)"
  },
  hideCalendar: {
    display: "none"
  },
  timePicker: {
    float: "right",
    width: "90px",
    margin: "7px",
    height: "30px"
  },
  checkboxContainer: {
    paddingTop: "5px",
    position: "absolute",
    height: "30px"
  },
  checkboxLabel: {
    float: "left",
    marginLeft: "10px",
    marginRight: "10px",
    marginTop: "7px"
  },
  realTime: {
    float: "left",
    width: "16px",
    height: "16px",
    marginLeft: "10px",
    marginTop: "10px",
    zIndex: "20"
  },
  dateInput: {
    width: "90px",
    height: "36px",
    fontSize: "12px"
  }
};

var DateTimePicker = function (_Component) {
  _inherits(DateTimePicker, _Component);

  function DateTimePicker(props) {
    _classCallCheck(this, DateTimePicker);

    var _this = _possibleConstructorReturn(this, (DateTimePicker.__proto__ || Object.getPrototypeOf(DateTimePicker)).call(this, props));

    _initialiseProps.call(_this);

    var dateTimeFormatted = props.dateTime.format("L HH:mm:ss");
    _this.state = {
      dateTime: props.dateTime || moment(),
      dateTimeFormatted: props.isRealTime ? props.nowAlias : dateTimeFormatted,
      pickerEnabled: false,
      beforeClickedOutside: false, // <- handleClickOutside sets pickerEnabled always to false,
      // we have to remember the previous state...
      isRealTime: props.isRealTime
    };
    return _this;
  }

  return DateTimePicker;
}(_react.Component);

DateTimePicker.propTypes = {
  theme: _react.PropTypes.object,
  isLeft: _react.PropTypes.bool,
  isRealTime: _react.PropTypes.bool,
  dateTime: _react.PropTypes.object,
  startDate: _react.PropTypes.object,
  endDate: _react.PropTypes.object,
  nowAlias: _react.PropTypes.string,
  checkboxLabel: _react.PropTypes.string,
  timePickerStyle: _react.PropTypes.object,
  checkboxStyle: _react.PropTypes.object,
  onChange: _react.PropTypes.func,
  setRealTime: _react.PropTypes.func,
  minDate: _react.PropTypes.object,
  maxDate: _react.PropTypes.object
};

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.defaultProps = {
    dateTime: moment(),
    timePickerStyle: {},
    checkboxStyle: {},
    onChange: function onChange() {},
    setRealTime: function setRealTime() {}
  };

  this.componentDidMount = function () {
    document.addEventListener('click', _this2.handleClickOutside, true);
  };

  this.componentWillUnmount = function () {
    document.removeEventListener('click', _this2.handleClickOutside, true);
  };

  this.handleClickOutside = function (e) {
    _this2.setState({ pickerEnabled: false, beforeClickedOutside: _this2.state.pickerEnabled });
  };

  this.onClick = function (e) {
    _this2.setState({ pickerEnabled: true, beforeClickedOutside: true });
  };

  this.componentWillReceiveProps = function (newProps) {
    var newDateTime = newProps.dateTime || moment();
    var dateTimeFormatted = newDateTime.format("L HH:mm:ss");
    _this2.setState({
      dateTime: newDateTime,
      dateTimeFormatted: newProps.isRealTime ? _this2.props.nowAlias : dateTimeFormatted
    });
  };

  this.onChange = function (bla, date) {
    if (_this2.props.maxDate && date.isAfter(_this2.props.maxDate)) date = _this2.props.maxDate.clone();
    if (_this2.props.minDate && date.isBefore(_this2.props.minDate)) date = _this2.props.minDate.clone();
    _this2.props.onChange(bla, date);
  };

  this.render = function () {
    var leftRight = _this2.props.isLeft ? { left: "0px" } : { right: "0px" };
    var showCalendarStyle = _this2.state.pickerEnabled ? Object.assign({}, styles.datePickerContainer, { borderColor: _this2.props.theme.normal }, leftRight || {}) : styles.hideCalendar;
    //for DatePicker: className={pickerStyles.editor}
    var timePickerStyle = Object.assign({}, styles.timePicker, _this2.props.timePickerStyle);
    var checkboxStyle = Object.assign({}, styles.realTime, _this2.props.checkboxStyle);
    var buttonStyle = Object.assign({}, styles.dateInput, { backgroundColor: "#eceff1" });
    var now = moment();
    return React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        { id: 'dialog', onClick: _this2.onClick, style: showCalendarStyle },
        React.createElement(_reactDatepicker2.default, {
          inline: true,
          selected: _this2.props.isRealTime ? now : _this2.props.dateTime,
          onChange: function onChange(date) {
            _this2.onChange(true, date);
          },
          maxDate: _this2.props.maxDate ? _this2.props.maxDate : undefined,
          minDate: _this2.props.minDate ? _this2.props.minDate : undefined
        }),
        React.createElement(
          'div',
          { style: styles.checkboxContainer },
          React.createElement(_Checkbox2.default, {
            style: checkboxStyle,
            checked: _this2.props.isRealTime,
            onChange: _this2.props.setRealTime,
            theme: _this2.props.theme
          }),
          React.createElement(
            'span',
            { style: styles.checkboxLabel },
            _this2.props.checkboxLabel
          )
        ),
        React.createElement(_TimePicker2.default, {
          style: timePickerStyle,
          dateTime: _this2.props.isRealTime ? now : _this2.props.dateTime,
          maxDate: now,
          disabled: _this2.props.isRealTime,
          onChange: function onChange(date) {
            _this2.onChange(false, date);
          }
        }),
        React.createElement('div', { style: { clear: "both" } })
      ),
      React.createElement(
        'button',
        {
          style: buttonStyle,
          onClick: function onClick(event) {
            //toggle state of dialog
            _this2.setState({ pickerEnabled: !_this2.state.beforeClickedOutside,
              beforeClickedOutside: _this2.state.pickerEnabled });
          }
        },
        _this2.state.dateTimeFormatted
      )
    );
  };
};

module.exports = DateTimePicker;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../../../common/components/Checkbox.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/Checkbox.jsx","../TimePicker/TimePicker.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/app/shared/TimePicker/TimePicker.jsx"}],"/Users/frank/Documents/Projects/IOTFoundation/components/app/shared/TimePicker/TimePicker.jsx":[function(require,module,exports){
(function (global){
'use strict';

var _TimePicker$propTypes;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _reactDom = (typeof window !== "undefined" ? window['ReactDOM'] : typeof global !== "undefined" ? global['ReactDOM'] : null);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _moment = (typeof window !== "undefined" ? window['moment'] : typeof global !== "undefined" ? global['moment'] : null);

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import Icons from '../Icons/Icons.jsx';
//TODO Move to Icons -- from TableHeaderCell
/*case 'expand-less':
  return (
    <g><path d="M12 8l-6 6 1.41 1.41 4.59-4.58 4.59 4.58 1.41-1.41z"></path></g>
  );
case 'expand-more':
  return (
    <g><path d="M16.59 8.59l-4.59 4.58-4.59-4.58-1.41 1.41 6 6 6-6z"></path></g>
  );
*/
// Author: Diego Perini <dperini@nwbox.com>
//from http://javascript.nwbox.com/cursor_position/, but added the !window.getSelection check, which
//is needed for newer versions of IE, which adhere to standards from react-date-picker/lib/TimeInput/
function getSelectionStart(input) {
  if (input.createTextRange && !global.getSelection) {
    //old IE only polyfill
    var r = document.selection.createRange().duplicate();
    r.moveEnd('character', input.value.length);
    if (r.text == '') return input.value.length;
    return input.value.lastIndexOf(r.text);
  } else return input.selectionStart; //standard
}

function getSelectionEnd(input) {
  if (input.createTextRange && !global.getSelection) {
    //old IE only polyfill
    var r = document.selection.createRange().duplicate();
    r.moveStart('character', -input.value.length);
    return r.text.length;
  } else return input.selectionEnd; //standard
}
//--------------------------------
function getCaretPosition(input) {
  return getSelectionStart(input);
}
function setCaretPosition(input, caretPos) {
  if (input != null) {
    if (input.selectionStart) {
      input.focus();
      input.setSelectionRange(caretPos, caretPos);
    } else if (input.createTextRange) {
      var range = input.createTextRange();
      range.move('character', caretPos);
      range.select();
    } else {
      input.focus();
    }
  }
}

var expandLess = // /\
React.createElement(
  'svg',
  { width: '20px', height: '20px', viewBox: '0 6 24 18' },
  React.createElement(
    'g',
    null,
    React.createElement('path', { fill: '#000000', d: 'M12 8l-6 6 1.41 1.41 4.59-4.58 4.59 4.58 1.41-1.41z' })
  )
);
var expandMore = // \/
React.createElement(
  'svg',
  { width: '20px', height: '20px', viewBox: '0 0 24 18' },
  React.createElement(
    'g',
    null,
    React.createElement('path', { fill: '#000000', d: 'M16.59 8.59l-4.59 4.58-4.59-4.58-1.41 1.41 6 6 6-6z' })
  )
);
var styles = {
  container: {
    position: "relative"
  },
  stretchToParent: {
    position: "absolute",
    top: "0px",
    left: "0px",
    right: "0px",
    bottom: "0px"
  },
  countup: {
    position: "absolute",
    top: "0px",
    right: "0px"
  },
  countdown: {
    position: "absolute",
    bottom: "0px",
    right: "0px"
  },
  timepickerSize: {
    width: "90px",
    height: "30px"
  }
};

var TimePicker = function (_Component) {
  _inherits(TimePicker, _Component);

  function TimePicker(props) {
    _classCallCheck(this, TimePicker);

    var _this = _possibleConstructorReturn(this, (TimePicker.__proto__ || Object.getPrototypeOf(TimePicker)).call(this, props));

    _initialiseProps.call(_this);

    var dateTimeFormatted = props.dateTime.format("HH:mm");
    _this.state = {
      dateTime: props.dateTime,
      dateTimeFormatted: dateTimeFormatted,
      lastValidTime: dateTimeFormatted,
      lastCaretPosition: 0
    };
    return _this;
  }

  _createClass(TimePicker, [{
    key: 'spinHelper',
    value: function spinHelper(changeHour, changeMinute) {
      var input = _reactDom2.default.findDOMNode(this).firstChild;
      var caret = this.state.lastCaretPosition || getCaretPosition(input) || input.value.length;
      console.debug("I ", caret);
      if (caret < 3) {
        //index of ":", e.g. |0|8|:45
        this.setTime(changeHour(this.state.dateTime));
      } else {
        //08:|4|5|
        this.setTime(changeMinute(this.state.dateTime));
      }
      setCaretPosition(input, caret);
    }
  }]);

  return TimePicker;
}(_react.Component);

TimePicker.propTypes = (_TimePicker$propTypes = {
  style: _react.PropTypes.object,
  theme: _react.PropTypes.object,
  width: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  dateTime: _react.PropTypes.object,
  maxDate: _react.PropTypes.object
}, _defineProperty(_TimePicker$propTypes, 'theme', _react.PropTypes.object), _defineProperty(_TimePicker$propTypes, 'onChange', _react.PropTypes.func), _defineProperty(_TimePicker$propTypes, 'disabled', _react.PropTypes.bool), _TimePicker$propTypes);

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.defaultProps = {
    width: undefined,
    dateTime: (0, _moment2.default)().hour(6).minute(0).second(0),
    theme: {},
    onChange: function onChange() {}
  };

  this.componentWillReceiveProps = function (nextProps) {
    if (_this2.props.dateTime.valueOf() != nextProps.dateTime.valueOf()) {
      var dateTimeFormatted = nextProps.dateTime.format("HH:mm");
      _this2.state = {
        dateTime: nextProps.dateTime,
        dateTimeFormatted: dateTimeFormatted,
        lastValidTime: dateTimeFormatted
      };
    }
  };

  this.setTime = function (dateTime) {
    // set a valid time to dateTime being reflected in displayed time
    dateTime = _moment2.default.min(dateTime, _this2.props.maxDate);
    var formattedTime = dateTime.format("HH:mm");
    _this2.setState({
      dateTime: dateTime,
      dateTimeFormatted: formattedTime,
      lastValidTime: formattedTime
    }, _this2.props.onChange(dateTime));
  };

  this.setTimeProgress = function (dateTimeFormatted) {
    // only update the input value and its predecessor
    _this2.setState({
      dateTimeFormatted: dateTimeFormatted,
      lastValidTime: dateTimeFormatted
    });
  };

  this.resetTimeProgress = function () {
    //reject last input and reset time to last valid
    _this2.setState({
      dateTimeFormatted: _this2.state.lastValidTime
    });
  };

  this.onChange = function (event) {
    var inputValue = event.target.value;
    var oldValue = _this2.state.lastValidTime;
    var match = inputValue.match(/^(([01]?[0-9]|2[0-3])(:([0-5]([0-9])?)?)?)?$/); // "", 1, 12, 12:, 12:4, 12:43
    if (match != null && inputValue == match[0]) {
      if (inputValue.match(/^[3-9]/)) {
        inputValue = "0" + inputValue;
      }
      if (inputValue.length == 2) {
        if (inputValue[1] == ":") {
          inputValue = "0" + inputValue; //0:, 1:, 2:
        } else if (oldValue.length > 3 || oldValue[2] != ":") {
          inputValue = inputValue + ":";
        }
      }
      _this2.setTimeProgress(inputValue);
    } else {
      _this2.resetTimeProgress();
    }
  };

  this.onBlur = function (event) {
    var inputValue = event.target.value;
    var match = inputValue.match(/^([01][0-9]|2[0-3]):([0-5][0-9])$/);
    if (match != null && inputValue == match[0] && match.length == 3) {
      _this2.setTime((0, _moment2.default)().hour(match[1]).minute(match[2]));
    } else {
      var matchFallback = inputValue.match(/^(([01]?[0-9]|2[0-3])(:([0-5]([0-9])?)?)?)?$/);
      //["02:3", "02:3", "02", ":3", "3", undefined, index: 0, input: "02:3"]
      //0: input 1: input opt. 2: hours 4: min partly 5: undefined (full minutes)
      var hour = 0,
          minute = 0;
      //empty
      if (matchFallback != null && matchFallback[0] == "") {
        var now = (0, _moment2.default)();
        _this2.setTime(now);
      } else if (matchFallback != null && parseInt(matchFallback[2], 10) >= 0) {
        //hour only
        hour = matchFallback[2];
        if (parseInt(matchFallback[4], 10) >= 0) {
          //first digit of minute
          //after blur this is considered as minute value
          minute = matchFallback[4];
        }
        _this2.setTime((0, _moment2.default)().hour(hour).minute(minute));
      }
    }
  };

  this.countUp = function () {
    if (!_this2.props.disabled) {
      _this2.spinHelper(function (stateTime) {
        return stateTime.add(1, 'h');
      }, function (stateTime) {
        return stateTime.add(1, 'm');
      });
    }
  };

  this.countDown = function () {
    if (!_this2.props.disabled) {
      _this2.spinHelper(function (stateTime) {
        return stateTime.subtract(1, 'h');
      }, function (stateTime) {
        return stateTime.subtract(1, 'm');
      });
    }
  };

  this.saveCaret = function (event) {
    var input = _reactDom2.default.findDOMNode(_this2).firstChild;
    var caret = getCaretPosition(input);
    _this2.setState({
      lastCaretPosition: caret
    });
  };

  this.setCaret = function (event) {
    var input = _reactDom2.default.findDOMNode(_this2).firstChild;
    setCaretPosition(input, _this2.state.lastCaretPosition || input.value.length);
  };

  this.render = function () {
    _this2.timeInput = React.createElement('input', {
      style: Object.assign({}, styles.timepickerSize, styles.stretchToParent),
      value: _this2.state.dateTimeFormatted,
      maxLength: 10,
      onChange: _this2.onChange,
      onBlur: _this2.onBlur,
      onKeyUp: _this2.saveCaret,
      onClick: _this2.saveCaret,
      onFocus: _this2.setCaret,
      type: 'text',
      disabled: _this2.props.disabled });
    return React.createElement(
      'div',
      {
        style: Object.assign({}, styles.timepickerSize, styles.container, _this2.props.style) },
      _this2.timeInput,
      React.createElement(
        'span',
        { onClick: function onClick() {
            _this2.countUp();
          }, style: styles.countup },
        expandLess
      ),
      React.createElement(
        'span',
        { onClick: function onClick() {
            _this2.countDown();
          }, style: styles.countdown },
        expandMore
      )
    );
  };
};

module.exports = TimePicker;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],"/Users/frank/Documents/Projects/IOTFoundation/components/common/common.jsx":[function(require,module,exports){
'use strict';

var IoTFCommon = {};

// Polyfills
if (!Array.prototype.findIndex) {
  Object.defineProperty(Array.prototype, "findIndex", {
    value: function value(predicate) {
      if (this === null) {
        throw new TypeError('Array.prototype.findIndex called on null or undefined');
      }
      if (typeof predicate !== 'function') {
        throw new TypeError('predicate must be a function');
      }
      var list = Object(this);
      var length = list.length >>> 0;
      var thisArg = arguments[1];
      var value;

      for (var i = 0; i < length; i++) {
        value = list[i];
        if (predicate.call(thisArg, value, i, list)) {
          return i;
        }
      }
      return -1;
    }
  });
}

if (!Array.prototype.find) {
  Object.defineProperty(Array.prototype, "find", {
    value: function value(predicate) {
      if (this === null) {
        throw new TypeError('Array.prototype.find called on null or undefined');
      }
      if (typeof predicate !== 'function') {
        throw new TypeError('predicate must be a function');
      }
      var list = Object(this);
      var length = list.length >>> 0;
      var thisArg = arguments[1];
      var value;

      for (var i = 0; i < length; i++) {
        value = list[i];
        if (predicate.call(thisArg, value, i, list)) {
          return value;
        }
      }
      return undefined;
    }
  });
}

// Stores
IoTFCommon.IoTFAuthStore = require('./stores/IoTFAuthStore.js');
IoTFCommon.IoTFDeviceStore = require('./stores/IoTFDeviceStore.js');
IoTFCommon.IoTFHistoryTimeseriesStore = require('./stores/IoTFHistoryTimeseriesStore.js');
IoTFCommon.IoTFHistoryCloudantStore = require('./stores/IoTFHistoryCloudantStore.js');
IoTFCommon.IoTFAlertStore = require('./stores/IoTFAlertStore.js');
IoTFCommon.IoTFUsageStore = require('./stores/IoTFUsageStore.js');
IoTFCommon.IoTFPermStore = require('./stores/IoTFPermStore.js');
IoTFCommon.IoTFTypeStore = require('./stores/IoTFTypeStore.js');
IoTFCommon.IoTFRMStore = require('./stores/IoTFRMStore.js');
IoTFCommon.IoTFBlockchainStore = require('./stores/IoTFBlockchainStore.js');
IoTFCommon.IoTFUserStore = require('./stores/IoTFUserStore.js');

// Common components
IoTFCommon.Accordion = require('./components/Accordion.jsx');
IoTFCommon.AccordionTable = require('./components/AccordionTable.jsx');
IoTFCommon.BarChart = require('./components/BarChart.jsx');
IoTFCommon.Button = require('./components/Button.jsx');
IoTFCommon.CardBarDatapoint = require('./components/CardBarDatapoint.jsx');
IoTFCommon.CardDatapoint = require('./components/CardDatapoint.jsx');
IoTFCommon.CardDatapointSlim = require('./components/CardDatapointSlim.jsx');
IoTFCommon.CardFooter = require('./components/CardFooter.jsx');
IoTFCommon.CardFooterDatapoint = require('./components/CardFooterDatapoint.jsx');
IoTFCommon.CardIndicator = require('./components/CardIndicator.jsx');
IoTFCommon.CardGalleryItem = require('./components/CardGalleryItem.jsx');
IoTFCommon.CardLineChart = require('./components/CardLineChart.jsx');
IoTFCommon.CardTable = require('./components/CardTable.jsx');
IoTFCommon.CheckBox = require('./components/CheckBox.jsx');
IoTFCommon.ColorSelection = require('./components/ColorSelection.jsx');
IoTFCommon.ComboBox = require('./components/ComboBox.jsx');
IoTFCommon.DonutChart = require('./components/DonutChart.jsx');
IoTFCommon.Dropdown = require('./components/Dropdown.jsx');
IoTFCommon.GalleryAccordion = require('./components/GalleryAccordion.jsx');
IoTFCommon.Gauge = require('./components/Gauge.jsx');
IoTFCommon.Icon = require('./components/Icon.jsx');
IoTFCommon.IconLink = require('./components/IconLink.jsx');
IoTFCommon.Image = require('./components/Image.jsx');
IoTFCommon.InputField = require('./components/InputField.jsx');
IoTFCommon.Label = require('./components/Label.jsx');
IoTFCommon.LineChart = require('./components/LineChart.jsx');
IoTFCommon.LineChartDygraphs = require('./components/LineChartDygraphs.jsx');
IoTFCommon.List = require('./components/List.jsx');
IoTFCommon.LoadIndicator = require('./components/LoadIndicator.jsx');
IoTFCommon.LoadIndicatorIcon = require('./components/LoadIndicatorIcon.jsx');
IoTFCommon.Option = require('./components/Option.jsx');
IoTFCommon.Paging = require('./components/Paging.jsx');
IoTFCommon.Portal = require('./components/Portal.jsx');
IoTFCommon.SearchField = require('./components/SearchField.jsx');
IoTFCommon.Section = require('./components/Section.jsx');
IoTFCommon.SegmentedBar = require('./components/SegmentedBar.jsx');
IoTFCommon.Select = require('./components/Select.jsx');
IoTFCommon.Sortable = require('./components/Sortable.jsx');
IoTFCommon.SwitchBtn = require('./components/SwitchBtn.jsx');
IoTFCommon.SimpleDialog = require('./components/SimpleDialog.jsx');
IoTFCommon.Confirmation = require('./components/Confirmation.jsx');
IoTFCommon.Information = require('./components/Information.jsx');
IoTFCommon.Decision = require('./components/Decision.jsx');
IoTFCommon.ActionCell = require('./components/ActionCell.jsx');
IoTFCommon.CardInfoItem = require('./components/CardInfoItem.jsx');
IoTFCommon.DeviceAlerts = require('./components/DeviceAlerts.jsx');
IoTFCommon.MapView = require('./components/MapView.jsx');
IoTFCommon.MapPin = require('./components/MapPin.jsx');
IoTFCommon.Tooltip = require('./components/Tooltip.jsx');
IoTFCommon.MultiSelect = require('./components/MultiSelect/MultiSelect.jsx');

module.exports = IoTFCommon;

},{"./components/Accordion.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/Accordion.jsx","./components/AccordionTable.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/AccordionTable.jsx","./components/ActionCell.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/ActionCell.jsx","./components/BarChart.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/BarChart.jsx","./components/Button.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/Button.jsx","./components/CardBarDatapoint.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/CardBarDatapoint.jsx","./components/CardDatapoint.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/CardDatapoint.jsx","./components/CardDatapointSlim.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/CardDatapointSlim.jsx","./components/CardFooter.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/CardFooter.jsx","./components/CardFooterDatapoint.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/CardFooterDatapoint.jsx","./components/CardGalleryItem.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/CardGalleryItem.jsx","./components/CardIndicator.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/CardIndicator.jsx","./components/CardInfoItem.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/CardInfoItem.jsx","./components/CardLineChart.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/CardLineChart.jsx","./components/CardTable.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/CardTable.jsx","./components/CheckBox.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/CheckBox.jsx","./components/ColorSelection.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/ColorSelection.jsx","./components/ComboBox.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/ComboBox.jsx","./components/Confirmation.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/Confirmation.jsx","./components/Decision.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/Decision.jsx","./components/DeviceAlerts.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/DeviceAlerts.jsx","./components/DonutChart.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/DonutChart.jsx","./components/Dropdown.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/Dropdown.jsx","./components/GalleryAccordion.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/GalleryAccordion.jsx","./components/Gauge.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/Gauge.jsx","./components/Icon.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/Icon.jsx","./components/IconLink.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/IconLink.jsx","./components/Image.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/Image.jsx","./components/Information.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/Information.jsx","./components/InputField.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/InputField.jsx","./components/Label.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/Label.jsx","./components/LineChart.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/LineChart.jsx","./components/LineChartDygraphs.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/LineChartDygraphs.jsx","./components/List.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/List.jsx","./components/LoadIndicator.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/LoadIndicator.jsx","./components/LoadIndicatorIcon.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/LoadIndicatorIcon.jsx","./components/MapPin.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/MapPin.jsx","./components/MapView.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/MapView.jsx","./components/MultiSelect/MultiSelect.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/MultiSelect/MultiSelect.jsx","./components/Option.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/Option.jsx","./components/Paging.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/Paging.jsx","./components/Portal.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/Portal.jsx","./components/SearchField.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/SearchField.jsx","./components/Section.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/Section.jsx","./components/SegmentedBar.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/SegmentedBar.jsx","./components/Select.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/Select.jsx","./components/SimpleDialog.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/SimpleDialog.jsx","./components/Sortable.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/Sortable.jsx","./components/SwitchBtn.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/SwitchBtn.jsx","./components/Tooltip.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/Tooltip.jsx","./stores/IoTFAlertStore.js":"/Users/frank/Documents/Projects/IOTFoundation/components/common/stores/IoTFAlertStore.js","./stores/IoTFAuthStore.js":"/Users/frank/Documents/Projects/IOTFoundation/components/common/stores/IoTFAuthStore.js","./stores/IoTFBlockchainStore.js":"/Users/frank/Documents/Projects/IOTFoundation/components/common/stores/IoTFBlockchainStore.js","./stores/IoTFDeviceStore.js":"/Users/frank/Documents/Projects/IOTFoundation/components/common/stores/IoTFDeviceStore.js","./stores/IoTFHistoryCloudantStore.js":"/Users/frank/Documents/Projects/IOTFoundation/components/common/stores/IoTFHistoryCloudantStore.js","./stores/IoTFHistoryTimeseriesStore.js":"/Users/frank/Documents/Projects/IOTFoundation/components/common/stores/IoTFHistoryTimeseriesStore.js","./stores/IoTFPermStore.js":"/Users/frank/Documents/Projects/IOTFoundation/components/common/stores/IoTFPermStore.js","./stores/IoTFRMStore.js":"/Users/frank/Documents/Projects/IOTFoundation/components/common/stores/IoTFRMStore.js","./stores/IoTFTypeStore.js":"/Users/frank/Documents/Projects/IOTFoundation/components/common/stores/IoTFTypeStore.js","./stores/IoTFUsageStore.js":"/Users/frank/Documents/Projects/IOTFoundation/components/common/stores/IoTFUsageStore.js","./stores/IoTFUserStore.js":"/Users/frank/Documents/Projects/IOTFoundation/components/common/stores/IoTFUserStore.js"}],"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/Accordion.jsx":[function(require,module,exports){
(function (global){
'use strict';

var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
var RPT = React.PropTypes;
var Icon = require('./Icon.jsx');

var styles = {

    container: {
        marginBottom: '15px',
        boxSizing: 'border-box',
        clear: 'both',
        cursor: 'pointer'
    },
    canvas: {
        paddingLeft: '10px',
        paddingRight: '25px'
    },

    canvasArrow: {
        cursor: 'default',
        marginTop: '15px'
    },

    title: {
        height: '24px',
        padding: '5px 0px',
        fontSize: '16px',
        fontWeight: '500',
        lineHeight: '15px'
    },
    icon: {
        float: 'right'
    },
    iconArrow: {
        float: 'right',
        color: "#ededed"
    },
    lineArrow: {
        clear: "both",
        marginTop: "10px",
        borderBottom: "2px solid",
        borderColor: "#ededed"
    }
};

var Accordion = React.createClass({
    displayName: 'Accordion',


    propTypes: {
        theme: RPT.object.isRequired,
        style: RPT.object,
        id: RPT.string,
        label: RPT.string,
        onRemove: RPT.func,
        onExpand: RPT.func,
        expanded: RPT.bool,
        noDelete: RPT.bool,
        showArrow: RPT.bool
    },

    getDefaultProps: function getDefaultProps() {
        return {
            label: '',
            expanded: false,
            showArrow: false
        };
    },

    componentWillMount: function componentWillMount() {},

    componentDidMount: function componentDidMount(payload) {},

    onRemove: function onRemove() {
        if (this.props.onRemove) {
            this.props.onRemove(this.props.id);
        }
        return false;
    },

    onToggle: function onToggle() {
        if (this.props.onExpand) {
            this.props.onExpand(!this.props.expanded ? this.props.id : null, this.props.id);
        }
    },

    render: function render() {
        var canvas = '';
        if (this.props.expanded) {
            canvas = React.createElement(
                'div',
                { style: styles.canvas },
                this.props.children
            );
        }

        var deleteIcon = React.createElement(Icon, { style: styles.icon, theme: this.props.theme, size: 20, color: this.props.theme.major, icon: 'delete', onClick: this.onRemove });
        if (this.props.noDelete) {
            deleteIcon = "";
        }

        var arrowIcon = '';
        var titleStyle = styles.title;
        if (this.props.showArrow && this.props.expanded) {
            titleStyle = Object.assign({}, titleStyle, { paddingBottom: "35px !important", color: "#5c91cc !important", fontWeight: "700 !important", fontSize: "14px !important" });
            arrowIcon = React.createElement(
                'span',
                null,
                React.createElement(Icon, { style: styles.iconArrow, theme: this.props.theme, size: 20, icon: 'expand-more', color: "#5c91cc" }),
                React.createElement('div', { style: styles.lineArrow })
            );
            canvas = React.createElement(
                'div',
                { style: styles.canvasArrow },
                ' ',
                this.props.children,
                ' '
            );
        }
        if (this.props.showArrow && !this.props.expanded) {
            titleStyle = Object.assign({}, titleStyle, { paddingBottom: "35px !important", color: "#5c91cc !important", fontWeight: "700 !important", fontSize: "14px !important" });
            arrowIcon = React.createElement(
                'span',
                null,
                React.createElement(Icon, { style: styles.iconArrow, theme: this.props.theme, size: 20, icon: 'chevron-right', color: "#c0c0c0" }),
                React.createElement('div', { style: styles.lineArrow })
            );
        }

        return React.createElement(
            'div',
            { key: this.props.id, style: Object.assign({}, styles.container, this.props.style) },
            React.createElement(
                'div',
                { style: titleStyle, onClick: this.onToggle },
                this.props.label,
                deleteIcon,
                arrowIcon
            ),
            canvas
        );
    }
});

module.exports = Accordion;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./Icon.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/Icon.jsx"}],"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/AccordionTable.jsx":[function(require,module,exports){
(function (global){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/************ Dependencies *************/
var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
var RPT = React.PropTypes;
var Icon = require('./Icon.jsx');

/************ Styles *************/
var styles = {
  container: {
    marginBottom: '15px',
    boxSizing: 'border-box',
    clear: 'both',
    cursor: 'pointer'
  },
  freeSpace: {
    marginRight: "20px"
  },
  hoveredRow: {
    backgroundColor: "#ededed"
  },
  icon: {
    float: 'right'
  },
  tableRow: {
    backgroundColor: "white",
    borderBottom: "1px solid #ededed",
    display: "flex",
    justifyContent: "space-around"
  },
  tableBody: {
    cursor: "default"
  },
  tableCell: {
    flexBasis: "0",
    flexGrow: "1",
    padding: "5px",
    textAlign: "center",
    wordBreak: "break-word"
  },
  title: {
    borderBottom: "2px solid #ededed",
    color: "#5c91cc",
    display: "flex",
    fontSize: "14px",
    fontWeight: "700",
    height: "24px",
    justifyContent: "space-around",
    lineHeight: "15px",
    padding: "5px 0px 25px"
  }
};

/*----------- AccordionTableCell ------------*/

var AccordionTableCell = React.createClass({
  displayName: 'AccordionTableCell',

  /************ Models *************/
  propTypes: {
    cell: RPT.object.isRequired,
    cellIndex: RPT.number,
    style: RPT.object,
    theme: RPT.object.isRequired
  },

  /************ View *************/
  render: function render() {
    var style = Object.assign({}, styles, this.props.style ? this.props.style : {});
    // use custom style for cell if there is one
    var cellStyle = _typeof(this.props.cell.style) == "object" ? Object.assign({}, style.tableCell, this.props.cell.style) : style.tableCell;
    return (
      // render cell
      React.createElement(
        'div',
        { style: cellStyle },
        this.props.cell.entry
      )
    );
  }
});

/*----------- AccordionTableRow ------------*/

var AccordionTableRow = React.createClass({
  displayName: 'AccordionTableRow',

  /************ Models *************/
  propTypes: {
    onMouseOutRow: RPT.func,
    onMouseOverRow: RPT.func,
    row: RPT.object.isRequired,
    rowIndex: RPT.number.isRequired,
    rowHover: RPT.bool,
    style: RPT.object,
    tableId: RPT.string,
    theme: RPT.object.isRequired
  },

  /************ Controller *************/
  getDefaultProps: function getDefaultProps() {
    return {
      rowHover: false
    };
  },

  getInitialState: function getInitialState() {
    return {
      isMouseOver: false
    };
  },

  onMouseOutRow: function onMouseOutRow(rowIndex) {
    if (this.props.rowHover) {
      this.setState({ isMouseOver: false });
    }
    if (this.props.onMouseOutRow) {
      this.props.onMouseOutRow(rowIndex, this.props.tableId);
    }
  },

  onMouseOverRow: function onMouseOverRow(rowIndex) {
    if (this.props.rowHover) {
      this.setState({ isMouseOver: true });
    }
    if (this.props.onMouseOverRow) {
      this.props.onMouseOverRow(rowIndex, this.props.tableId);
    }
  },

  /************ View *************/render: function render() {
    var self = this;
    var style = Object.assign({}, styles, this.props.style ? this.props.style : {});

    // use custom style for row if there is one
    var rowStyle = _typeof(this.props.row.style) == "object" ? Object.assign({}, style.tableRow, this.props.row.style) : style.tableRow;

    // use hoverStyle if enabled and mouse is over this row
    if (this.state.isMouseOver) {
      rowStyle = Object.assign({}, rowStyle, style.hoveredRow);
    }

    var mouseOutRowEvent = function mouseOutRowEvent() {
      self.onMouseOutRow(self.props.rowIndex);
    };

    var mouseOverRowEvent = function mouseOverRowEvent() {
      self.onMouseOverRow(self.props.rowIndex);
    };

    // render row
    var cells = this.props.row.cells.map(function (cell, cellIndex) {
      // 'key' is used to prevent react warning
      return React.createElement(AccordionTableCell, { cell: cell, cellIndex: cellIndex, key: cellIndex, style: style, theme: self.props.theme });
    });
    return React.createElement(
      'div',
      { onMouseLeave: mouseOutRowEvent, onMouseEnter: mouseOverRowEvent, style: rowStyle },
      cells,
      React.createElement('span', { style: style.freeSpace })
    );
  }
});

/*----------- AccordionTable ------------*/

var AccordionTable = React.createClass({
  displayName: 'AccordionTable',

  /************ Models *************/
  propTypes: {
    data: RPT.object,
    expanded: RPT.bool,
    id: RPT.string,
    onMouseOutRow: RPT.func,
    onMouseOverRow: RPT.func,
    onToggle: RPT.func,
    rowHover: RPT.bool,
    style: RPT.object,
    theme: RPT.object.isRequired
  },

  /************ Controller *************/
  getDefaultProps: function getDefaultProps() {
    return {
      data: {
        head: [],
        rows: []
      },
      expanded: false,
      rowHover: false
    };
  },

  getInitialState: function getInitialState() {
    return {
      expanded: this.props.expanded
    };
  },

  componentDidMount: function componentDidMount(payload) {},

  componentWillMount: function componentWillMount() {},

  componentWillReceiveProps: function componentWillReceiveProps(newProps) {
    if (newProps.expanded !== this.props.expanded) {
      //this.setState({expanded: newProps.expanded});
    }
  },

  onToggle: function onToggle() {
    this.setState({ expanded: !this.state.expanded });
    if (this.props.onToggle) {
      this.props.onToggle(!this.state.expanded ? this.props.id : null);
    }
  },

  /************ View *************/
  render: function render() {

    var props = this.props;
    var style = Object.assign({}, styles, this.props.style ? this.props.style : {});
    var tableBody = '';
    var iconName = "chevron-right";

    /*var renderCell = function(cell, cellIndex) {
      // use custom style for cell if there is one
      var cellStyle = typeof cell.style == "object" ? Object.assign({}, style.tableCell, cell.style) : style.tableCell;
      return (    
        // render cell
        <div key={cellIndex} style={cellStyle}>{/* 'key' is used to prevent react warning */ /*}
                                                                                             {cell.entry}
                                                                                             </div>
                                                                                             );
                                                                                             };
                                                                                             var renderRow = function(row, rowIndex) {
                                                                                             // use custom style for row if there is one
                                                                                             var rowStyle = typeof row.style == "object" ? Object.assign({}, style.tableRow, row.style) : style.tableRow;
                                                                                             // use hoverStyle if mouse is over this row
                                                                                             if (props.rowHover && state.hoveredRow === rowIndex) {
                                                                                             rowStyle = Object.assign({}, rowStyle, style.hoveredRow);
                                                                                             }
                                                                                             // render row
                                                                                             var cells = row.cells.map(renderCell);
                                                                                             return (
                                                                                             <div key={rowIndex} onMouseOver={mouseOverRow(rowIndex)} style={rowStyle}>{/* 'key' is used to prevent react warning */ /*}
                                                                                                                                                                                                                     {cells}
                                                                                                                                                                                                                     {/* freeSpace matching icon width to keep the head cells aligned with body columns */ /*}
                                                                                                                                                                                                                                                                                                           <span style={style.freeSpace}/>
                                                                                                                                                                                                                                                                                                           </div>
                                                                                                                                                                                                                                                                                                           );
                                                                                                                                                                                                                                                                                                           };*/

    var tableHead = this.props.data.head.map(function (cell, cellIndex) {
      // 'key' is used to prevent react warning
      return React.createElement(AccordionTableCell, { cell: cell, cellIndex: cellIndex, key: cellIndex, style: style, theme: props.theme });
    });

    if (this.state.expanded) {
      tableBody = this.props.data.rows.map(function (row, rowIndex) {
        // 'key' is used to prevent react warning
        return React.createElement(AccordionTableRow, { key: rowIndex, onMouseOutRow: props.onMouseOutRow, onMouseOverRow: props.onMouseOverRow,
          row: row, rowIndex: rowIndex, rowHover: props.rowHover, style: style, tableId: props.id, theme: props.theme });
      });
      iconName = "expand-more";
    }

    var arrowIcon = React.createElement(Icon, { style: styles.icon, theme: this.props.theme, size: 20, icon: iconName, color: "#5c91cc" });

    // View output
    return React.createElement(
      'div',
      { style: Object.assign({}, styles.container, this.props.style) },
      React.createElement(
        'div',
        { style: styles.title, onClick: this.onToggle },
        tableHead,
        arrowIcon
      ),
      React.createElement(
        'div',
        { style: style.tableBody },
        tableBody
      )
    );
  }
});

module.exports = AccordionTable;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./Icon.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/Icon.jsx"}],"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/ActionCell.jsx":[function(require,module,exports){
(function (global){
'use strict';

var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
var RPT = React.PropTypes;
var Icon = require('./Icon.jsx');

var styles = {
  container: {
    height: '100%'
  }
};

var ActionCell = React.createClass({
  displayName: 'ActionCell',

  propTypes: {
    theme: RPT.object.isRequired,
    style: RPT.object
  },

  onClick: function onClick(action) {
    action(this.props.id, this.props.type);
  },

  render: function render() {
    var self = this;
    return React.createElement(
      'div',
      { style: styles.container },
      this.props.actions.map(function (action) {
        var onClick = function onClick() {
          self.onClick(action.action);
        };
        return React.createElement(Icon, { key: action.icon, icon: action.icon, onClick: onClick, theme: self.props.theme, style: { fill: self.props.theme.major } });
      })
    );
  }
});

module.exports = ActionCell;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./Icon.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/Icon.jsx"}],"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/BarChart.jsx":[function(require,module,exports){
(function (global){
'use strict';

var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
var ReactDOM = (typeof window !== "undefined" ? window['ReactDOM'] : typeof global !== "undefined" ? global['ReactDOM'] : null);
var c3 = (typeof window !== "undefined" ? window['c3'] : typeof global !== "undefined" ? global['c3'] : null);
var RPT = React.PropTypes;
var Icon = require('./Icon.jsx');

var styles = {
  container: {
    width: "100%",
    height: "100%"
  }
};

var BarChart = React.createClass({
  displayName: 'BarChart',

  propTypes: {
    style: RPT.object,
    theme: RPT.object.isRequired,
    data: RPT.array,
    names: RPT.object,
    type: RPT.string,
    title: RPT.string,
    horizontal: RPT.bool,
    unit: RPT.string,
    precision: RPT.number,
    small: RPT.bool,
    width: RPT.number,
    height: RPT.number
  },

  getDefaultProps: function getDefaultProps() {
    return {
      data: [],
      names: {},
      horizontal: false,
      unit: "",
      precision: 0
    };
  },

  componentDidMount: function componentDidMount() {
    this.createGraph();
  },

  createGraph: function createGraph() {
    var self = this;
    this.destroyGraph();

    var container = ReactDOM.findDOMNode(this);

    var dom = document.createElement("div");
    container.appendChild(dom);

    this.width = this.props.width ? this.props.width : container.offsetWidth;
    this.height = this.props.height ? this.props.height : container.offsetHeight;

    var colors = this.props.theme.palette;

    if (this.width > 0 && this.height > 0) {

      dom.style.width = this.width + "px";
      dom.style.height = this.height + "px";

      var names = ['x'];
      var data = ['value'];
      for (var i = 0; i < this.props.data.length; i++) {
        var item = this.props.data[i];
        names.push(this.props.names[item[0]]);
        data.push(item[1]);
      }

      var config = {
        size: {
          width: this.width,
          height: this.height
        },
        data: {
          type: "bar",
          x: 'x',
          columns: [names, data],
          color: function color(inColor, data) {
            if (data.index !== undefined) {
              return colors[data.index % colors.length];
            }
            return inColor;
          },
          labels: {
            format: function format(v, id, i, j) {
              if (self.props.precision) {
                v = v.toFixed(self.props.precision);
              }
              return v + " " + (self.props.unit ? self.props.unit : "");
            }
          }
        },
        transition: {
          duration: 200
        },
        axis: {
          rotated: this.props.horizontal,
          x: {
            type: 'category'
          },
          y: {
            show: !this.props.small
          }
        },
        tooltip: {
          grouped: false
        },
        legend: {
          show: false
        },
        padding: {
          left: 0,
          bottom: 0,
          right: 0,
          top: 0
        },
        bar: {
          width: {
            ratio: 0.7,
            zerobased: false
          }
        }
      };

      if (this.props.horizontal) {
        config.padding = {
          left: 100,
          bottom: 0,
          right: 0,
          top: 0
        };
      } else {
        config.padding = {
          left: 0,
          bottom: 10,
          right: 0,
          top: 0
        };
      }

      this.graph = c3.generate(config);

      dom.appendChild(this.graph.element);
    }
  },

  destroyGraph: function destroyGraph() {
    var dom = ReactDOM.findDOMNode(this);
    while (dom.firstChild) {
      dom.removeChild(dom.firstChild);
    }
    this.graph = null;
  },

  updateGraph: function updateGraph() {
    var self = this;
    if (!this.graph) {
      this.createGraph();
    }
    if (this.graph) {
      var names = ['x'];
      var data = ['value'];
      for (var i = 0; i < this.props.data.length; i++) {
        var item = this.props.data[i];
        names.push(this.props.names[item[0]]);
        data.push(item[1]);
      }

      var container = ReactDOM.findDOMNode(this);
      var width = this.props.width ? this.props.width : container.offsetWidth;
      var height = this.props.height ? this.props.height : container.offsetHeight;
      if (this.width != width || this.height != height) {
        this.width = width;
        this.height = height;
        this.graph.resize({ height: this.height, width: this.width });
      }

      self.graph.load({
        columns: [names, data]
      });
    }
  },

  componentWillUnmount: function componentWillUnmount() {
    this.destroyGraph();
  },

  checkIfPropsChanged: function checkIfPropsChanged(a, b) {
    if (JSON.stringify(a.theme) != JSON.stringify(b.theme) || a.type != b.type || a.horizontal != b.horizontal || a.unit != b.unit || a.precision != b.precision || a.width != b.width || a.height != b.height) {
      this.createGraph();
    }
  },

  componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
    this.updateGraph();
    this.checkIfPropsChanged(prevProps, this.props);
  },

  render: function render() {
    if (!this.id) {
      this.id = "X" + Math.round(Math.random() * 1000000);
    }
    var style = Object.assign({}, styles.container, this.props.style ? this.props.style : {});
    return React.createElement('div', { className: 'barChart', id: this.id, style: style });
  }
});

module.exports = BarChart;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./Icon.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/Icon.jsx"}],"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/Button.jsx":[function(require,module,exports){
(function (global){
"use strict";

var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
var RPT = React.PropTypes;

var styles = {
  componentButtonText: {
    textAlign: "center",
    display: "inline-block",
    padding: "14px 35px",
    marginTop: "20px",
    marginBottom: "20px",
    marginRight: "20px",
    fontSize: "15px",
    borderStyle: "solid",
    borderWidth: "2px",
    transition: 'all 0.5s ease',
    WebkitTransition: 'all .5s ease-out',
    MozTransition: 'all .5s ease-out',
    Otransition: 'all .5s ease-out'
  }
};

var ButtonText = React.createClass({
  displayName: "ButtonText",

  propTypes: {
    style: RPT.object,
    theme: RPT.object,
    text: RPT.string,
    cursor: RPT.string,
    width: RPT.number,
    disabled: RPT.bool,
    onClick: RPT.func,
    isDelete: RPT.bool,
    isPrimary: RPT.bool,
    href: RPT.string,
    download: RPT.string,
    target: RPT.string,

    textColor: RPT.string,
    textHoverActiveColor: RPT.string,
    textPressColor: RPT.string,

    bgColor: RPT.string,
    bgHoverColor: RPT.string,
    bgPressColor: RPT.string,

    borderColor: RPT.string,
    borderHoverColor: RPT.string,
    borderPressColor: RPT.string
  },

  getInitialState: function getInitialState() {
    return { hover: false };
  },

  mouseOver: function mouseOver() {
    this.setState({ hover: true });
  },

  mouseOut: function mouseOut() {
    this.setState({ hover: false });
  },

  mouseDown: function mouseDown() {
    this.setState({ press: true });
  },

  mouseUp: function mouseUp() {
    this.setState({ press: false });
  },

  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if (nextProps.disabled !== undefined && nextProps.disabled) {
      this.setState({ disabled: true });
    } else {
      this.setState({ disabled: false });
    }
  },

  componentWillMount: function componentWillMount() {
    if (this.props.disabled) {
      this.setState({ disabled: true });
    } else {
      this.setState({ disabled: false });
    }
  },

  getDefaultProps: function getDefaultProps() {
    return {
      textColor: "#5596E6",
      textHoverColor: "#4178BE",
      bgColor: "",
      borderColor: "#5596E6",
      borderHoverColor: "#4178BE",

      textPrimaryColor: "#fff",
      textPrimaryHoverColor: "#fff",
      bgPrimaryColor: "#5596E6",
      bgPrimaryHoverColor: "#4178BE",
      borderPrimaryColor: "#5596E6",
      borderPrimaryHoverColor: "#4178BE",

      textDeleteColor: "#fff",
      textDeleteHoverColor: "#fff",
      bgDeleteColor: "#FC6574",
      bgDeleteHoverColor: "#FC363F",
      borderDeleteColor: "#FC6574",
      borderDeleteHoverColor: "#FC363F",

      text: "BUTTON",
      minWidth: "140px",
      minHeight: "50px",
      btnCursor: "pointer",
      onClick: function onClick() {},
      isPrimary: false,
      isDelete: false
    };
  },

  onClick: function onClick() {
    if (this.props.onClick && !this.props.disabled) {
      this.props.onClick();
    }
  },

  render: function render() {
    var stateStyle = {};

    stateStyle.width = this.props.width;

    if (this.props.isPrimary) {
      if (this.state.hover || this.state.press) {
        stateStyle.cursor = this.props.btnCursor;
        stateStyle.backgroundColor = this.props.bgPrimaryHoverColor;
        stateStyle.color = this.props.textPrimaryHoverColor;
        stateStyle.borderColor = this.props.borderPrimaryHoverColor;
      } else {
        stateStyle.cursor = this.props.btnCursor;
        stateStyle.backgroundColor = this.props.bgPrimaryColor;
        stateStyle.color = this.props.textPrimaryColor;
        stateStyle.borderColor = this.props.borderPrimaryColor;
      }
    } else if (this.props.isDelete) {
      if (this.state.hover || this.state.press) {
        stateStyle.cursor = this.props.btnCursor;
        stateStyle.backgroundColor = this.props.bgDeleteHoverColor;
        stateStyle.color = this.props.textDeleteHoverColor;
        stateStyle.borderColor = this.props.borderDeleteHoverColor;
      } else {
        stateStyle.cursor = this.props.btnCursor;
        stateStyle.backgroundColor = this.props.bgDeleteColor;
        stateStyle.color = this.props.textDeleteColor;
        stateStyle.borderColor = this.props.borderDeleteColor;
      }
    } else {
      if (this.state.hover || this.state.press) {
        stateStyle.cursor = this.props.btnCursor;
        stateStyle.backgroundColor = this.props.bgHoverColor;
        stateStyle.color = this.props.textHoverColor;
        stateStyle.borderColor = this.props.borderHoverColor;
      } else {
        stateStyle.cursor = this.props.btnCursor;
        stateStyle.backgroundColor = this.props.bgColor;
        stateStyle.color = this.props.textColor;
        stateStyle.borderColor = this.props.borderColor;
        stateStyle.width = this.props.width;
      }
    }

    if (this.state.disabled && this.props.disabled) {
      stateStyle.cursor = 'no-drop';
      stateStyle.backgroundColor = '';
      stateStyle.color = '#AEB8B8';
      stateStyle.borderColor = '#f4f4f4';
    }

    var styleBtn = Object.assign({}, styles.componentButtonText, stateStyle, this.props.style);
    var linkStyle = { textDecoration: 'none !important' };

    return React.createElement(
      "a",
      { style: linkStyle, download: this.props.download, target: this.props.target, href: this.props.href },
      " ",
      React.createElement(
        "div",
        { style: styleBtn, onClick: this.onClick, onMouseOver: this.mouseOver, onMouseOut: this.mouseOut, onMouseDown: this.mouseDown, onMouseUp: this.mouseUp },
        this.props.text,
        " ",
        this.props.disabled,
        " "
      ),
      " "
    );
  }
});

module.exports = ButtonText;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/CardBarDatapoint.jsx":[function(require,module,exports){
(function (global){
'use strict';

var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
var RPT = React.PropTypes;
var Icon = require('./Icon.jsx');
var SegmentedBar = require('./SegmentedBar.jsx');

var styles = {
	container: {
		position: "relative",
		clear: "both",
		padding: "13px 30px 14px 30px"
	},
	value: {
		fontSize: "16px",
		fontWeight: "300",
		color: "#325C80",
		lineHeight: "20px",
		float: "right"
	},
	label: {
		fontSize: "14px",
		color: "#6D7777",
		display: "block",
		fontWeight: "300",
		letterSpacing: "0.3px",
		lineHeight: "20px",
		float: "left"
	},
	action: {
		position: "absolute",
		top: "20px",
		right: "20px"
	},
	summary: {
		paddingTop: "10px",
		paddingBottom: "10px"
	},
	barContainer: {
		clear: "both",
		paddingTop: "4px"
	},
	left: {}
};

var CardBarDatapoint = React.createClass({
	displayName: 'CardBarDatapoint',

	propTypes: {
		theme: RPT.object.isRequired,
		style: RPT.object,
		label: RPT.string,
		minor: RPT.bool,
		onAction: RPT.func,
		icon: RPT.string,
		segments: RPT.array,
		total: RPT.number,
		summary: RPT.string,
		onSelect: RPT.func
	},

	render: function render() {

		styles.label.color = this.props.theme.major;
		styles.value.color = this.props.theme.major;

		var style = Object.assign({}, styles.container, { borderTop: "1px solid " + this.props.theme.minor }, this.props.style ? this.props.style : {});
		var styleValue = Object.assign({}, styles.value);
		var styleSummary = Object.assign({}, styles.summary, { color: this.props.theme.minor });
		var left = Object.assign({}, styles.left, this.props.onAction ? { paddingRight: "30px" } : {});

		var action = null;
		if (this.props.onAction) {
			var icon = "RiskManagement";
			if (this.props.icon) {
				icon = this.props.icon;
			}
			action = React.createElement(Icon, { theme: this.props.theme, color: "#000000", icon: icon, size: 24, style: styles.action, onClick: this.props.onAction });
		}

		var bar = null;
		if (this.props.segments) {
			bar = React.createElement(SegmentedBar, { theme: this.props.theme, segments: this.props.segments, total: this.props.total, onSelect: this.props.onSelect });
		}

		var summary = null;
		if (this.props.summary) {
			summary = React.createElement(
				'div',
				{ style: styleSummary },
				this.props.summary
			);
		}

		return React.createElement(
			'div',
			{ style: style },
			React.createElement(
				'div',
				{ style: left },
				React.createElement(
					'div',
					{ style: styles.label },
					this.props.label
				),
				React.createElement(
					'div',
					{ style: styleValue },
					this.props.children
				),
				React.createElement(
					'div',
					{ style: styles.barContainer },
					bar,
					summary
				)
			),
			action
		);
	}
});

module.exports = CardBarDatapoint;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./Icon.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/Icon.jsx","./SegmentedBar.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/SegmentedBar.jsx"}],"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/CardDatapoint.jsx":[function(require,module,exports){
(function (global){
'use strict';

var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
var RPT = React.PropTypes;
var Icon = require('./Icon.jsx');

var styles = {
	container: {
		position: "relative"
	},
	value: {
		fontSize: "30px",
		fontWeight: "300",
		lineHeight: "30px",
		color: "#325C80"
	},
	unit: {
		fontSize: "14px",
		color: "#6D7777",
		display: "block",
		marginBottom: "10px",
		fontWeight: "300",
		letterSpacing: "0.3px"
	},
	minor: {
		fontSize: "22px"
	},
	action: {
		position: "absolute",
		top: "10px",
		right: "0px"
	}
};

var CardDatapoint = React.createClass({
	displayName: 'CardDatapoint',

	propTypes: {
		theme: RPT.object.isRequired,
		style: RPT.object,
		unit: RPT.string,
		minor: RPT.bool,
		onAction: RPT.func,
		icon: RPT.string
	},

	render: function render() {

		styles.unit.color = this.props.theme.minor;
		styles.value.color = this.props.theme.major;

		var style = Object.assign({}, styles.container, this.props.style ? this.props.style : {});
		var styleValue = Object.assign({}, styles.value, this.props.minor ? styles.minor : {});

		var action = null;
		if (this.props.onAction) {
			var icon = "RiskManagement";
			if (this.props.icon) {
				icon = this.props.icon;
			}
			action = React.createElement(Icon, { theme: this.props.theme, icon: icon, size: 24, style: styles.action, onClick: this.props.onAction });
		}

		return React.createElement(
			'div',
			{ style: style },
			React.createElement(
				'div',
				{ style: styleValue },
				this.props.children
			),
			React.createElement(
				'div',
				{ style: styles.unit },
				this.props.unit
			),
			action
		);
	}
});

module.exports = CardDatapoint;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./Icon.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/Icon.jsx"}],"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/CardDatapointSlim.jsx":[function(require,module,exports){
(function (global){
'use strict';

var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
var RPT = React.PropTypes;
var Icon = require('./Icon.jsx');

var styles = {
	container: {
		position: "relative",
		clear: "both",
		padding: "13px 30px 29px 30px"
	},
	value: {
		fontSize: "16px",
		fontWeight: "300",
		color: "#325C80",
		lineHeight: "20px",
		float: "right"
	},
	label: {
		fontSize: "14px",
		color: "#6D7777",
		display: "block",
		fontWeight: "300",
		letterSpacing: "0.3px",
		lineHeight: "20px",
		float: "left"
	},
	action: {
		position: "relative",
		top: "-4px",
		right: "0px",
		float: "right",
		marginLeft: "10px"
	}
};

var CardDatapointSlim = React.createClass({
	displayName: 'CardDatapointSlim',

	propTypes: {
		theme: RPT.object.isRequired,
		style: RPT.object,
		label: RPT.string,
		onAction: RPT.func,
		icon: RPT.string
	},

	render: function render() {

		styles.label.color = this.props.theme.major;
		styles.value.color = this.props.theme.major;

		var style = Object.assign({}, styles.container, { borderTop: "1px solid " + this.props.theme.minor }, this.props.style ? this.props.style : {});
		var styleValue = Object.assign({}, styles.value);

		var action = null;
		if (this.props.onAction) {
			var icon = "RiskManagement";
			if (this.props.icon) {
				icon = this.props.icon;
			}
			action = React.createElement(Icon, { theme: this.props.theme, icon: icon, size: 24, style: styles.action, onClick: this.props.onAction });
		}

		return React.createElement(
			'div',
			{ style: style },
			React.createElement(
				'div',
				{ style: styles.label },
				this.props.label
			),
			action,
			React.createElement(
				'div',
				{ style: styleValue },
				this.props.children
			)
		);
	}
});

module.exports = CardDatapointSlim;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./Icon.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/Icon.jsx"}],"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/CardFooter.jsx":[function(require,module,exports){
(function (global){
"use strict";

var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
var RPT = React.PropTypes;

var styles = {
	container: {
		width: "100%",
		height: "40px",
		border: "1px solid",
		borderColor: "transparent",
		position: "absolute",
		bottom: "0px",
		left: "0px"
	}
};

var CardFooter = React.createClass({
	displayName: "CardFooter",

	propTypes: {
		theme: RPT.object.isRequired,
		style: RPT.object
	},

	render: function render() {
		styles.container.borderTopColor = this.props.theme.border;
		styles.container.backgroundColor = this.props.theme.content;

		var style = Object.assign({}, styles.container);
		return React.createElement(
			"div",
			{ style: style },
			this.props.children
		);
	}
});

module.exports = CardFooter;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/CardFooterDatapoint.jsx":[function(require,module,exports){
(function (global){
"use strict";

var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
var RPT = React.PropTypes;

var styles = {
	container: {
		float: "left",
		width: "50%"
	},
	value: {
		fontSize: "13px",
		fontWeight: "bold",
		textAlign: "left",
		paddingLeft: "30px"
	},
	title: {
		fontSize: "13px",
		fontWeight: "normal",
		letterSpacing: "0.5px",
		textTransform: "uppercase",
		paddingLeft: "30px",
		opacity: 0.5,
		marginTop: "5px"
	}
};

var CardFooterDatapoint = React.createClass({
	displayName: "CardFooterDatapoint",

	propTypes: {
		theme: RPT.object.isRequired,
		style: RPT.object,
		unit: RPT.string,
		title: RPT.string
	},

	render: function render() {

		styles.title.color = this.props.theme.minor;
		styles.value.color = this.props.theme.minor;

		var style = Object.assign({}, styles.container, this.props.style ? this.props.style : {});

		return React.createElement(
			"div",
			{ style: style },
			React.createElement(
				"div",
				{ style: styles.title },
				this.props.title
			),
			React.createElement(
				"div",
				{ style: styles.value },
				this.props.children,
				" ",
				this.props.unit
			)
		);
	}
});

module.exports = CardFooterDatapoint;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/CardGalleryItem.jsx":[function(require,module,exports){
(function (global){
'use strict';

var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
var Icon = require('./Icon.jsx');

var RPT = React.PropTypes;

var styles = {
  cardContainer: {
    width: '145px',
    height: '87px',
    float: 'left',
    marginLeft: '20px',
    marginBottom: '15px',
    backgroundColor: '#FFF',
    padding: '5px',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: 'rgba(228, 228, 228, 0.498039) 0px 1px 1px 0px',
    color: '#1D394D'
  },
  selectedCard: {
    borderBottom: '4px solid'
  },
  clickingLayer: {
    width: '100%',
    display: 'block',
    height: '100%',
    position: 'absolute',
    zIndex: '10'
  },
  cardDescriptionToggle: {
    marginRight: '5px',
    position: 'absolute',
    right: '0px',
    width: '25px',
    height: '25px',
    textAlign: 'center',
    display: 'block',
    top: '3px',
    zIndex: '11'
  },
  cardTitle: {
    position: 'absolute',
    bottom: '0px',
    marginBottom: '5px'
  },
  cardThumb: {
    alignSelf: 'center'
  },
  thumbContainer: {
    height: '100%',
    opacity: '1',
    position: 'relative',
    top: '21px',
    margin: '0 auto',
    width: '30px',
    MozTransition: 'all 0.5s ease',
    WebkitTransition: 'all 0.5s ease',
    OTransition: 'all 0.5s ease',
    transition: 'all 0.5s ease'
  },
  cardDescription: {
    overflow: 'hidden',
    fontSize: '11px',
    paddingTop: '20px',
    position: 'absolute',
    top: '48px',
    MozTransition: 'all 0.5s ease',
    WebkitTransition: 'all 0.5s ease',
    OTransition: 'all 0.5s ease',
    transition: 'all 0.5s ease',
    width: "135px"
  },
  cardDescriptionScroller: {
    MozTransition: 'none',
    WebkitTransition: 'none',
    OTransition: 'none',
    transition: 'none'
  }
};

var CardGalleryItem = React.createClass({
  displayName: 'CardGalleryItem',

  propTypes: {
    style: RPT.object,
    theme: RPT.object.isRequired,
    item: RPT.object.isRequired,
    nls: RPT.object,
    onClick: RPT.func,
    selected: RPT.bool
  },

  getDefaultProps: function getDefaultProps() {
    return {
      item: {}
    };
  },

  componentWillReceiveProps: function componentWillReceiveProps(props) {
    this.setState({
      selected: props.selected
    });
  },

  getInitialState: function getInitialState() {
    return {
      hoverInfo: false,
      selected: this.props.selected
    };
  },

  onMouseOver: function onMouseOver() {
    var self = this;
    if (this.scrollerPreTimer) {
      clearTimeout(this.scrollerPreTimer);
    }
    this.scrollerPreTimer = setTimeout(function () {
      self.scrollerPreTimer = null;
      self.setState({
        scrolling: true
      });
      self.startScrolling();
    }, 1000);
    this.setState({
      hoverInfo: true
    });
  },

  onMouseOut: function onMouseOut(e) {
    if (this.scrollerPreTimer) {
      clearTimeout(this.scrollerPreTimer);
    }
    this.stopScrolling();
    this.setState({
      hoverInfo: false,
      scrolling: false
    });
  },

  startScrolling: function startScrolling(pos) {
    var self = this;
    if (!pos) {
      pos = 0;
    }
    if (this.scrollTimer) {
      clearTimeout(this.scrollTimer);
    }
    if (this.descriptionHeight > 87) {
      pos--;
      if (this.descriptionNode) {
        this.descriptionNode.style.top = pos + "px";
      }
      if (pos > 87 - this.descriptionHeight) {
        this.scrollTimer = setTimeout(function () {
          self.startScrolling(pos);
        }, 50);
      }
    }
  },

  stopScrolling: function stopScrolling() {
    if (this.descriptionNode) {
      this.descriptionNode.style.top = "0px";
    }
    if (this.scrollTimer) {
      clearTimeout(this.scrollTimer);
      this.scrollTimer = null;
    }
  },

  onTouch: function onTouch(e) {
    //this.closeInfoLater(); // auto close after 10s
    this.setState({
      hoverInfo: !this.state.hoverInfo
    });
  },

  onClick: function onClick(e) {
    if (e.target.className !== 'infoTrigger') {
      if (this.props.onClick) {
        this.props.onClick(this.props.item);
      }
      this.setState({
        selected: true
      });
    }
  },

  closeInfoLater: function closeInfoLater() {
    if (this.closeTimer) {
      clearTimeout(this.closeTimer);
      this.closeTimer = null;
    }
    var self = this;
    this.closeTimer = setTimeout(function () {
      self.onMouseOut();
      self.closeTimer = null;
    }, 10000);
  },

  componentDidMount: function componentDidMount() {

    if (this.props.selected) {
      var newPos = $(this.refs.galleryItem).position().top - 160 > 0 ? $(this.refs.galleryItem).position().top - 160 : 0;
      $($(this.refs.galleryItem).scrollParent()).scrollTop(newPos);
    }
  },

  componentDidUpdate: function componentDidUpdate(prevProps, PrevState) {
    if (this.state.hoverInfo) {
      //$(this.refs.descriptionText).ellipsis();
    } else {}
  },

  componentWillUnmount: function componentWillUnmount() {
    if (this.scrollerPreTimer) {
      clearTimeout(this.scrollerPreTimer);
    }
    this.stopScrolling();
  },

  render: function render() {
    var self = this;
    var description = '';
    var cardTitle = this.props.nls.resolve("Dashboard.Cards.Gallery." + this.props.item.displayName);
    // Fallback if there is not translation (e.g. Custom cards)
    if (cardTitle.indexOf("Dashboard.Cards.Gallery.") > -1) {
      cardTitle = this.props.item.displayName;
    }
    var containerStyle = styles.cardContainer;
    var thumbContainerStyle = '';
    var infoColor = this.props.theme.light;

    if (this.state.selected) {
      containerStyle = Object.assign({}, containerStyle, styles.selectedCard, { borderColor: this.props.theme.accent });
    } else {
      containerStyle = styles.cardContainer;
    }

    var descriptionText = '';
    if (!description) {
      descriptionText = this.props.nls.resolve("Dashboard.Cards.Gallery." + this.props.item.description);
      // Fallback if there is not translation (e.g. Custom cards)
      if (descriptionText.indexOf("Dashboard.Cards.Gallery.") > -1) {
        descriptionText = this.props.item.description;
      }
    }

    // If no key is specified (for external cards) use the string itself
    if (cardTitle === "Dashboard.Cards.Gallery." + this.props.item.displayName) {
      cardTitle = this.props.item.displayName;
    }

    if (this.state.hoverInfo) {
      description = React.createElement(
        'div',
        { ref: function ref(node) {
            if (node) {
              self.descriptionNode = node;self.descriptionHeight = node.offsetHeight;
            }
          }, style: Object.assign({}, styles.cardDescription, { top: '0' }, this.state.scrolling ? styles.cardDescriptionScroller : {}) },
        React.createElement(
          'span',
          { style: { fontSize: '12px', width: "135px" }, title: cardTitle },
          cardTitle
        ),
        React.createElement('br', null),
        descriptionText
      );
      thumbContainerStyle = Object.assign({}, styles.thumbContainer, { opacity: '0.01', height: '0%' });
      infoColor = "#3C3C3B";
    } else {
      description = React.createElement(
        'div',
        { style: Object.assign({}, styles.cardDescription, { top: '48px' }) },
        React.createElement(
          'span',
          { style: { fontSize: '12px', whiteSpace: "nowrap", overflow: "hidden", "textOverflow": "ellipsis", width: "135px", display: "inline-block" }, title: cardTitle },
          cardTitle
        ),
        React.createElement('br', null),
        descriptionText
      );
      thumbContainerStyle = styles.thumbContainer;
    }

    return React.createElement(
      'div',
      { id: this.props.item.name, style: containerStyle, onClick: this.onClick, ref: 'galleryItem' },
      React.createElement(
        'div',
        { style: this.state.scrolling ? Object.assign({}, styles.cardDescriptionToggle, { opacity: 0.1 }) : styles.cardDescriptionToggle },
        React.createElement(
          'a',
          { className: 'infoTrigger', tabIndex: '1', href: 'javascript:void(0)' },
          React.createElement('div', { className: 'infoTrigger', style: styles.clickingLayer, onClick: this.onTouch, onMouseEnter: this.onMouseOver, onBlur: this.onMouseOut, onMouseLeave: this.onMouseOut })
        ),
        React.createElement(Icon, { theme: this.props.theme, color: infoColor, size: 20, icon: 'info' })
      ),
      React.createElement(
        'div',
        { style: thumbContainerStyle },
        React.createElement(
          'div',
          { style: styles.cardThumb },
          React.createElement(Icon, { theme: this.props.theme, color: '#3C3C3B', icon: this.props.item.thumbnail, size: 30 })
        )
      ),
      React.createElement(
        'div',
        { ref: 'descriptionText' },
        description
      )
    );
  }
});

module.exports = CardGalleryItem;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./Icon.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/Icon.jsx"}],"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/CardIndicator.jsx":[function(require,module,exports){
(function (global){
'use strict';

var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
var RPT = React.PropTypes;
var Icon = require('./Icon.jsx');

var styles = {
	container: {
		fontSize: "12px",
		width: "100%",
		boxShadow: "0px 1px 1px rgba(192, 192, 192, 0.5)",
		height: "40px",
		lineHeight: "40px",
		paddingLeft: "10px"
	}
};

var CardIndicator = React.createClass({
	displayName: 'CardIndicator',

	propTypes: {
		theme: RPT.object.isRequired,
		style: RPT.object,
		condition: RPT.string
	},

	render: function render() {
		styles.container.color = this.props.theme.least;
		var style = Object.assign({}, styles.container, this.props.style ? this.props.style : {});
		return React.createElement(
			'div',
			{ style: style },
			React.createElement(Icon, { icon: this.props.condition,
				color: this.props.theme[this.props.condition],
				size: 24,
				style: { verticalAlign: "middle", marginRight: "10px" },
				theme: this.props.theme
			}),
			this.props.children
		);
	}
});

module.exports = CardIndicator;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./Icon.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/Icon.jsx"}],"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/CardInfoItem.jsx":[function(require,module,exports){
(function (global){
"use strict";

var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
var RPT = React.PropTypes;

var styles = {
  property: {
    fontSize: "14px",
    fontWeight: "600",
    lineHeight: "14px",
    color: "#325C80"
  },
  value: {
    fontSize: "12px",
    color: "#6D7777",
    display: "block",
    marginBottom: "15px",
    marginLeft: "5px",
    marginTop: "5px",
    fontWeight: "500",
    letterSpacing: "0.3px"
  },
  minor: {
    fontSize: "22px"
  }
};

var CardInfoItem = React.createClass({
  displayName: "CardInfoItem",

  propTypes: {
    theme: RPT.object.isRequired,
    style: RPT.object,
    unit: RPT.string,
    minor: RPT.bool
  },

  render: function render() {

    styles.value.color = this.props.theme.minor;
    styles.property.color = this.props.theme.major;

    var style = Object.assign({}, this.props.style ? this.props.style : {});
    var styleValue = Object.assign({}, styles.property, this.props.minor ? styles.minor : {});

    return React.createElement(
      "div",
      { style: style },
      React.createElement(
        "div",
        { style: styleValue },
        this.props.property
      ),
      React.createElement(
        "div",
        { style: styles.value },
        this.props.children
      )
    );
  }
});

module.exports = CardInfoItem;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/CardLineChart.jsx":[function(require,module,exports){
(function (global){
'use strict';

var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
var ReactDOM = (typeof window !== "undefined" ? window['ReactDOM'] : typeof global !== "undefined" ? global['ReactDOM'] : null);
var c3 = (typeof window !== "undefined" ? window['c3'] : typeof global !== "undefined" ? global['c3'] : null);
var RPT = React.PropTypes;
var Icon = require('./Icon.jsx');
var LoadIndicator = require('./LoadIndicator.jsx');

var styles = {
  container: {
    position: "relative",
    width: "100%",
    height: "270px"
  }
};

var CardLineChart = React.createClass({
  displayName: 'CardLineChart',

  propTypes: {
    style: RPT.object,
    theme: RPT.object.isRequired,
    data: RPT.array,
    showRange: RPT.bool,
    unit: RPT.string,
    width: RPT.number,
    height: RPT.number
  },

  getDefaultProps: function getDefaultProps() {
    return {
      data: []
    };
  },

  componentDidMount: function componentDidMount() {
    this.createGraph();
  },

  createGraph: function createGraph() {
    var self = this;
    this.destroyGraph();

    var container = ReactDOM.findDOMNode(this);

    var dom = document.createElement("div");
    container.appendChild(dom);

    this.width = this.props.width ? this.props.width : container.offsetWidth;
    this.height = this.props.height ? this.props.height : container.offsetHeight;

    var colors = this.props.theme.palette;

    if (this.width > 0 && this.height > 0) {

      dom.style.width = this.width + "px";
      dom.style.height = this.height + "px";

      if (this.props.data && this.props.data.length > 0) {

        for (var i = 0; i < this.props.data.length; i++) {
          this.props.data[i][this.props.nls.resolve("Dashboard.Cards.Customization.TotalHeading")] = this.props.data[i].total;
        }

        var today = new Date();
        var weekAgo = new Date(today.getTime() - 1000 * 60 * 60 * 24 * 7);
        var zoomStart = today.toISOString().split("T")[0];
        var zoomEnd = weekAgo.toISOString().split("T")[0];

        var colorMap = {};
        colorMap[this.props.nls.resolve("Dashboard.Cards.Customization.TotalHeading")] = colors[0];

        var config = {
          size: {
            width: this.width,
            height: this.height
          },
          data: {
            type: "area",
            json: this.props.data,
            x: 'date',
            keys: {
              x: 'date',
              value: [this.props.nls.resolve("Dashboard.Cards.Customization.TotalHeading")]
            },
            colors: colorMap
          },
          axis: {
            x: {
              type: "timeseries",
              extent: [zoomEnd, zoomStart]
            },
            y: {
              label: this.props.unit
            }
          },
          grid: {
            x: {
              show: true
            },
            y: {
              show: true
            }
          },
          point: {
            r: 4,
            focus: {
              expand: {
                enabled: true,
                r: 6
              }
            }
          },
          legend: {
            hide: true
          },
          padding: {
            left: 50,
            bottom: 0,
            right: 0,
            top: 0
          }

        };

        if (this.props.showRange) {
          config.subchart = {
            show: true,
            size: {
              height: 30
            }
          };
        }

        this.graph = c3.generate(config);

        dom.appendChild(this.graph.element);
      }
    }
  },

  destroyGraph: function destroyGraph() {
    var dom = ReactDOM.findDOMNode(this);
    while (dom.firstChild) {
      dom.removeChild(dom.firstChild);
    }
    this.graph = null;
  },

  componentWillUnmount: function componentWillUnmount() {
    this.destroyGraph();
  },

  componentDidUpdate: function componentDidUpdate() {
    this.createGraph();
  },

  render: function render() {
    var style = Object.assign({}, styles.container, this.props.style ? this.props.style : {});

    style.borderLeftColor = this.props.theme.border;

    if (this.props.data && this.props.data.length > 0) {
      return React.createElement('div', { className: 'lineChart', style: style });
    } else {
      return React.createElement(LoadIndicator, { theme: this.props.theme, nls: this.props.nls });
    }
  }
});

module.exports = CardLineChart;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./Icon.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/Icon.jsx","./LoadIndicator.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/LoadIndicator.jsx"}],"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/CardTable.jsx":[function(require,module,exports){
(function (global){
'use strict';

var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
var c3 = (typeof window !== "undefined" ? window['c3'] : typeof global !== "undefined" ? global['c3'] : null);
var RPT = React.PropTypes;
var Icon = require('./Icon.jsx');

var styles = {
  container: {
    position: "relative",
    overflow: "hidden",
    fontSize: "14px"
  },
  table: {
    width: "100%"
  },
  headerRow: {
    borderBottom: "3px solid grey"
  },
  headerCell: {
    textAlign: "left",
    padding: "11px 7px 11px 0px"
  },
  row: {
    fontWeight: "300"
  },
  cell: {
    padding: "11px 7px 11px 0px"
  }
};

var CardTable = React.createClass({
  displayName: 'CardTable',

  propTypes: {
    style: RPT.object,
    theme: RPT.object.isRequired,
    data: RPT.array,
    header: RPT.array,
    width: RPT.number,
    height: RPT.number
  },

  getDefaultProps: function getDefaultProps() {
    return {
      header: [],
      data: []
    };
  },

  render: function render() {
    var style = Object.assign({}, styles.container, this.props.style ? this.props.style : {}, { width: this.props.width + 'px' });

    styles.headerRow.borderColor = this.props.theme.light;
    styles.cell.color = this.props.theme.minor;

    var data = this.props.data;
    var header = this.props.header;

    var self = this;

    var count = 0;

    return React.createElement(
      'div',
      { style: style },
      React.createElement(
        'table',
        { style: styles.table },
        React.createElement(
          'thead',
          null,
          React.createElement(
            'tr',
            { style: styles.headerRow },
            header.map(function (item) {
              return React.createElement(
                'th',
                { key: count++, style: styles.headerCell },
                item
              );
            })
          )
        ),
        React.createElement(
          'tbody',
          null,
          data.map(function (row) {
            return React.createElement(
              'tr',
              { key: count++, style: styles.row },
              row.map(function (cell) {
                return React.createElement(
                  'td',
                  { key: count++, style: styles.cell },
                  cell
                );
              })
            );
          })
        )
      )
    );
  }
});

module.exports = CardTable;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./Icon.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/Icon.jsx"}],"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/CheckBox.jsx":[function(require,module,exports){
(function (global){
"use strict";

var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var RPT = React.PropTypes;

var styles = {
  circle: {
    width: "16px",
    height: "16px",
    background: "#5596E6",
    MozBorderRadius: "50px",
    WebkitBorderRadius: "50px",
    borderRadius: "50px",
    float: "left",
    cursor: "pointer"
  },
  disabled: {
    background: '#AEB8B8',
    cursor: 'not-allowed'
  },
  disabledPointer: {
    cursor: 'not-allowed'
  },
  checkmark: {
    display: "inline-block",
    width: "22px",
    height: "22px",
    MsTransform: "rotate(45deg)",
    WebkitTransform: "rotate(45deg)",
    transform: "rotate(45deg)"
  },
  checkmarkBack: {
    position: "absolute",
    width: "2px",
    height: "9px",
    backgroundColor: "#ffffff",
    left: "7px",
    top: "6px"
  },
  checkmarkSeat: {
    position: "absolute",
    width: "4px",
    height: "2px",
    backgroundColor: "#ffffff",
    left: "4px",
    top: "13px"
  },
  inactiveCB: {
    width: "16px",
    height: "16px",
    background: "transparent",
    border: "2px solid",
    borderColor: "#AEB8B8",
    MozBorderRadius: "50px",
    WebkitBorderRadius: "50px",
    borderRadius: "50px",
    float: "left",
    cursor: "pointer",
    boxSizing: 'border-box'
  },
  hoverCB: {
    borderColor: "#5596E6"
  }
};

var CheckBox = React.createClass({
  displayName: "CheckBox",

  propTypes: {
    checked: RPT.bool,
    id: RPT.string,
    name: RPT.string,
    onChange: RPT.func,
    style: RPT.object,
    theme: RPT.object.isRequired,
    value: RPT.string,
    disabled: RPT.bool
  },

  getInitialState: function getInitialState() {
    return {
      checked: this.props.checked,
      disabled: false
    };
  },

  componentWillReceiveProps: function componentWillReceiveProps(props) {
    if (props.checked != this.state.checked) {
      this.setState({
        checked: props.checked
      });
    }
  },

  getDefaultProps: function getDefaultProps() {
    return {
      checked: false,
      id: Math.random().toString(),
      //labelRight: true,
      name: "checkBoxName"
    };
  },

  handleChange: function handleChange(event) {
    if (this.props.onChange && !this.props.disabled) {
      this.props.onChange(!this.props.checked, this.props.id);
    }
  },

  hoverCB: function hoverCB(event) {
    this.setState({
      hovered: true
    });
  },

  noHoverCB: function noHoverCB(event) {
    this.setState({
      hovered: false
    });
  },

  render: function render() {
    var outerStyle = Object.assign({}, this.props.style);
    var inactiveCB = {};

    if (this.state.hovered && !this.props.disabled) {
      inactiveCB = Object.assign({}, styles.inactiveCB, styles.hoverCB);
    } else {
      inactiveCB = !this.props.disabled ? styles.inactiveCB : Object.assign({}, styles.inactiveCB, styles.disabledPointer);
    }

    var circleStyle = !this.props.disabled ? styles.circle : Object.assign({}, styles.circle, styles.disabled);

    var checkBoxChecked = React.createElement(
      "div",
      { onClick: this.handleChange, style: circleStyle },
      React.createElement(
        "span",
        { style: styles.checkmark },
        React.createElement("span", { style: styles.checkmarkBack }),
        React.createElement("span", { style: styles.checkmarkSeat })
      )
    );
    var checkBoxInactive = React.createElement("div", { onClick: this.handleChange, style: inactiveCB });
    var output = this.props.checked ? checkBoxChecked : checkBoxInactive;
    return React.createElement(
      "div",
      { onMouseOver: this.hoverCB, onMouseOut: this.noHoverCB, style: outerStyle },
      output
    );
  }
});

module.exports = CheckBox;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/Checkbox.jsx":[function(require,module,exports){
(function (global){
"use strict";

var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var RPT = React.PropTypes;

var styles = {
  circle: {
    width: "16px",
    height: "16px",
    background: "#5596E6",
    MozBorderRadius: "50px",
    WebkitBorderRadius: "50px",
    borderRadius: "50px",
    float: "left",
    cursor: "pointer"
  },
  disabled: {
    background: '#AEB8B8',
    cursor: 'not-allowed'
  },
  disabledPointer: {
    cursor: 'not-allowed'
  },
  checkmark: {
    display: "inline-block",
    width: "22px",
    height: "22px",
    MsTransform: "rotate(45deg)",
    WebkitTransform: "rotate(45deg)",
    transform: "rotate(45deg)"
  },
  checkmarkBack: {
    position: "absolute",
    width: "2px",
    height: "9px",
    backgroundColor: "#ffffff",
    left: "7px",
    top: "6px"
  },
  checkmarkSeat: {
    position: "absolute",
    width: "4px",
    height: "2px",
    backgroundColor: "#ffffff",
    left: "4px",
    top: "13px"
  },
  inactiveCB: {
    width: "16px",
    height: "16px",
    background: "transparent",
    border: "2px solid",
    borderColor: "#AEB8B8",
    MozBorderRadius: "50px",
    WebkitBorderRadius: "50px",
    borderRadius: "50px",
    float: "left",
    cursor: "pointer",
    boxSizing: 'border-box'
  },
  hoverCB: {
    borderColor: "#5596E6"
  }
};

var CheckBox = React.createClass({
  displayName: "CheckBox",

  propTypes: {
    checked: RPT.bool,
    id: RPT.string,
    name: RPT.string,
    onChange: RPT.func,
    style: RPT.object,
    theme: RPT.object.isRequired,
    value: RPT.string,
    disabled: RPT.bool
  },

  getInitialState: function getInitialState() {
    return {
      checked: this.props.checked,
      disabled: false
    };
  },

  componentWillReceiveProps: function componentWillReceiveProps(props) {
    if (props.checked != this.state.checked) {
      this.setState({
        checked: props.checked
      });
    }
  },

  getDefaultProps: function getDefaultProps() {
    return {
      checked: false,
      id: Math.random().toString(),
      //labelRight: true,
      name: "checkBoxName"
    };
  },

  handleChange: function handleChange(event) {
    if (this.props.onChange && !this.props.disabled) {
      this.props.onChange(!this.props.checked, this.props.id);
    }
  },

  hoverCB: function hoverCB(event) {
    this.setState({
      hovered: true
    });
  },

  noHoverCB: function noHoverCB(event) {
    this.setState({
      hovered: false
    });
  },

  render: function render() {
    var outerStyle = Object.assign({}, this.props.style);
    var inactiveCB = {};

    if (this.state.hovered && !this.props.disabled) {
      inactiveCB = Object.assign({}, styles.inactiveCB, styles.hoverCB);
    } else {
      inactiveCB = !this.props.disabled ? styles.inactiveCB : Object.assign({}, styles.inactiveCB, styles.disabledPointer);
    }

    var circleStyle = !this.props.disabled ? styles.circle : Object.assign({}, styles.circle, styles.disabled);

    var checkBoxChecked = React.createElement(
      "div",
      { onClick: this.handleChange, style: circleStyle },
      React.createElement(
        "span",
        { style: styles.checkmark },
        React.createElement("span", { style: styles.checkmarkBack }),
        React.createElement("span", { style: styles.checkmarkSeat })
      )
    );
    var checkBoxInactive = React.createElement("div", { onClick: this.handleChange, style: inactiveCB });
    var output = this.props.checked ? checkBoxChecked : checkBoxInactive;
    return React.createElement(
      "div",
      { onMouseOver: this.hoverCB, onMouseOut: this.noHoverCB, style: outerStyle },
      output
    );
  }
});

module.exports = CheckBox;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/ColorSelection.jsx":[function(require,module,exports){
(function (global){
"use strict";

var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
var RPT = React.PropTypes;

var styles = {
  container: {
    marginBottom: "15px",
    boxSizing: "border-box"
  },
  colorTile: {
    margin: "5px",
    width: "24px",
    height: "24px",
    display: "inline-block",
    verticalAlign: "middle",
    fontSize: "20px",
    textAlign: "center"
  },
  tiles: {
    display: "block",
    width: "100%",
    float: "left"
  },
  after: {
    clear: "both"
  }
};

var ColorSelection = React.createClass({
  displayName: "ColorSelection",

  propTypes: {
    onChange: RPT.func,
    initialSelection: RPT.number,
    style: RPT.object,
    theme: RPT.object.isRequired
  },

  getDefaultProps: function getDefaultProps() {
    return {
      initialSelection: 0
    };
  },

  getInitialState: function getInitialState() {
    return {
      selection: this.props.initialSelection
    };
  },

  // componentWillReceiveProps: function(nextProps) {
  // 	if (nextProps.initialSelection !== undefined) {
  // 		this.setState({
  // 			selection: nextProps.initialSelection
  // 		});
  // 	}

  // },

  onSelect: function onSelect(id) {
    this.setState({
      selection: id
    });
    if (this.props.onChange) {
      this.props.onChange(id);
    }
  },

  render: function render() {
    var self = this;
    var schemes = this.props.theme.schemes;
    var tiles = schemes.map(function (scheme) {
      var style = Object.assign({}, styles.colorTile, {
        backgroundColor: scheme.normal,
        //borderTop: "4px solid " + scheme.dark,
        color: scheme.text
      });
      if (self.state.selection == scheme.name) {
        style.outline = "5px solid " + scheme.dark;
      }

      return React.createElement("div", { style: style, key: scheme.name, onClick: function onClick() {
          self.onSelect(scheme.name);
        } });
    });

    return React.createElement(
      "div",
      { style: styles.container },
      React.createElement(
        "div",
        { name: "tiles", style: styles.tiles },
        tiles.map(function (result) {
          return result;
        })
      ),
      React.createElement("div", { style: styles.after })
    );
  }
});

module.exports = ColorSelection;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/ComboBox.jsx":[function(require,module,exports){
(function (global){
'use strict';

/*global require, module*/
var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
var ReactDOM = (typeof window !== "undefined" ? window['ReactDOM'] : typeof global !== "undefined" ? global['ReactDOM'] : null);
var RPT = React.PropTypes;
var InputField = require('./InputField.jsx');
var Option = require('./Option.jsx');

var styles = {
  container: {
    display: "block",
    width: "100%"
  },
  inputField: {
    width: "100%",
    boxSizing: "border-box"
  },
  optionsContainer: {
    position: "relative",
    WebkitTransition: "all .2s ease-in-out",
    transition: "all .2s ease-in-out",
    overflowX: "auto",
    maxHeight: "220px",
    overflow: "auto",
    zIndex: "1000",
    borderBottom: '2px solid #E7E7E7'
  },
  emptyOption: {
    padding: "6px"
  }
};

// Documentation link:
// https://github.ibm.com/IoT/dashboard-component/wiki/Combobox-component
//

var ComboBox = React.createClass({
  displayName: 'ComboBox',


  propTypes: {
    theme: RPT.object.isRequired,
    style: RPT.object,
    onChange: RPT.func,
    initialValue: RPT.string,
    placeholderNoItems: RPT.string,
    placeholder: RPT.string,
    disabled: RPT.bool
  },

  getDefaultProps: function getDefaultProps() {
    return {
      placeholderNoItems: "",
      placeholder: '',
      disabled: false
    };
  },

  getInitialState: function getInitialState() {
    return {
      input: this.props.initialValue || "",
      hasInput: this.props.initialValue !== "",
      filteredChildren: [],
      isOpen: false
    };
  },

  componentWillMount: function componentWillMount() {
    this.chidrenAttachSelect();
  },

  componentWillReceiveProps: function componentWillReceiveProps(props) {
    if (props.value) {
      this.setState({ input: props.value });
    }
  },

  componentDidMount: function componentDidMount() {
    this.chidrenAttachSelect();
    this.filterChildren(this.state.input);
    this.updateOptionsSize();
  },

  componentDidReceiveProps: function componentDidReceiveProps() {
    this.chidrenAttachSelect();
    this.filterChildren(this.state.input);
  },

  updateOptionsSize: function updateOptionsSize() {
    if (this.refs.comboBox) {
      var newWidth = ReactDOM.findDOMNode(this.refs.comboBox).offsetWidth;
      styles.optionsContainer.width = newWidth;
    }
  },

  componentWillUpdate: function componentWillUpdate() {
    this.updateOptionsSize();
  },

  chidrenAttachSelect: function chidrenAttachSelect() {
    var self = this;
    var childrenWithSelect = [];
    React.Children.forEach(this.props.children, function (child) {
      var childWithSelect = React.cloneElement(child, { onSelect: self.onSelect });
      childrenWithSelect.push(childWithSelect);
    });
    this.setState({
      children: childrenWithSelect
    });
  },

  filterChildren: function filterChildren(comp) {
    var filteredChildren = [];

    React.Children.forEach(this.state.children, function (child) {
      if (child) {
        if (child.props && child.props.children && (child.props.children.indexOf(comp) !== -1 || child.props.value.indexOf(comp) !== -1)) {
          filteredChildren.push(child);
        }
      }
    });
    this.setState({ filteredChildren: filteredChildren });
    return filteredChildren;
  },

  handleInput: function handleInput(value) {
    if (value === "") {
      this.setState({ hasInput: false, input: value, isOpen: true });
    } else {
      this.setState({ hasInput: true, input: value, isOpen: true });
    }
    this.chidrenAttachSelect();
    this.filterChildren(value);
    this.onChange(value);
  },

  clear: function clear() {
    this.handleInput('');
    this.refs.inputField.setState({ value: '' });
  },

  onSelect: function onSelect(value, label, event) {
    this.setState({ input: label, hasInput: true, isOpen: false });
    this.onChange(label);
    if (this.props.onSelect) {
      this.props.onSelect(value);
    }
  },

  onSubmit: function onSubmit() {
    if (this.props.onSubmit) {
      this.props.onSubmit(this.state.input);
    }
  },

  onFocus: function onFocus() {
    this.setState({ isOpen: true });
    this.chidrenAttachSelect();
    this.filterChildren(this.state.input);
    if (this.props.onFocus) {
      this.props.onFocus(this.refs.inputField);
    }
  },

  onBlur: function onBlur() {
    this.setState({ isOpen: false, hasFocus: false });
    this.onChange(this.state.input);
    if (this.props.onBlur) {
      this.props.onBlur();
    }
  },

  onChange: function onChange(value) {
    if (this.props.onChange) {
      this.props.onChange(value);
    }
  },

  toggleOptions: function toggleOptions() {
    if (this.state.hasFocus) {
      this.setState({ isOpen: !this.state.isOpen });
    } else {
      this.setState({ hasFocus: true });
    }
  },

  renderInputField: function renderInputField() {
    return React.createElement(InputField, { style: styles.inputField, ref: 'inputField', containerStyle: { width: "100%" }, theme: this.props.theme, initialValue: this.props.initialValue, value: this.state.input, onChange: this.handleInput, onFocus: this.onFocus, onBlur: this.onBlur, onSubmit: this.onSubmit, placeholder: this.props.placeholder, readOnly: this.props.disabled, onClick: this.toggleOptions });
  },

  renderChildren: function renderChildren() {
    var children = "";

    var optionsContainer = Object.assign({}, styles.optionsContainer, this.props.optionsContainerStyle);

    if (this.state.hasInput) {
      if (this.state.filteredChildren.length !== 0) {
        children = this.state.filteredChildren;
      } else {
        children = this.props.placeholderNoItems !== '' ? React.createElement(
          Option,
          { value: null, theme: this.props.theme, style: styles.emptyOption, onSelect: function onSelect() {}, disabled: true },
          this.props.placeholderNoItems
        ) : '';
      }
    } else {
      children = this.state.children;
    }
    var lastIndex = Array.isArray(children) ? children.length - 1 : null;
    var childrenElement = children !== '' ? React.createElement(
      'div',
      { style: optionsContainer },
      React.Children.map(children, function (child, idx) {
        var currProps = {};
        if (lastIndex && lastIndex == idx) {
          currProps = { firstChild: false }; // Old style with border-bottom for last optioncurrProps= {lastChild:true,firstChild:false};
        } else if (idx === 0) {
          currProps = { lastChild: false, firstChild: true };
        } else {
          currProps = { lastChild: false, firstChild: false };
        }
        var newChild = React.cloneElement(child, currProps);
        return newChild;
      })
    ) : '';

    return childrenElement;
  },

  render: function render() {

    var containerStyle = Object.assign({}, { position: 'relative', height: '42px', width: '100%' }, this.props.style);
    return React.createElement(
      'div',
      { style: containerStyle },
      React.createElement(
        'div',
        { style: { position: 'absolute', width: '100%' } },
        React.createElement(
          'div',
          { ref: 'comboBox', style: styles.container },
          this.renderInputField(),
          this.state.isOpen && !this.props.disabled ? this.renderChildren() : ""
        )
      )
    );
  }
});

module.exports = ComboBox;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./InputField.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/InputField.jsx","./Option.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/Option.jsx"}],"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/Confirmation.jsx":[function(require,module,exports){
(function (global){
'use strict';

var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var Icon = require('./Icon.jsx');
var SimpleDialog = require('./SimpleDialog.jsx');
var Button = require('./Button.jsx');

var RPT = React.PropTypes;

var styles = {
  title: {
    fontSize: "25px",
    height: "30px",
    width: "330px",
    marginBottom: "8px",
    marginTop: "20px"
  },
  text: {
    fontSize: "14px",
    width: "385px"
  },
  buttons: {
    float: "right"
  },
  icon: {
    display: "block",
    margin: "20px auto",
    width: "44px"
  },
  iconContainer: {
    position: "absolute",
    top: "0px",
    left: "0px",
    width: "100px"

  },
  container: {
    position: "relative"

  },
  content: {
    position: "relative",
    marginLeft: "100px"
  }
};

var Confirmation = React.createClass({
  displayName: 'Confirmation',

  propTypes: {
    style: RPT.object,
    theme: RPT.object.isRequired,
    nls: RPT.object,
    onCancel: RPT.func,
    onExtraButtonClick: RPT.func,
    onSubmit: RPT.func,
    icon: RPT.string,
    isDeleteSubmit: RPT.bool,
    cancelText: RPT.string,
    extraButtonText: RPT.string,
    submitText: RPT.string,
    title: RPT.string,
    text: RPT.string,
    text2: RPT.string,
    width: RPT.number,
    height: RPT.number
  },

  getDefaultProps: function getDefaultProps() {
    return {
      icon: "error",
      isDeleteSubmit: false
    };
  },

  componentDidMount: function componentDidMount() {},

  onCancel: function onCancel() {
    if (this.props.onCancel) {
      this.props.onCancel();
    }
  },

  onExtraButtonClick: function onExtraButtonClick() {
    if (this.props.onExtraButtonClick) {
      this.props.onExtraButtonClick();
    }
  },

  onSubmit: function onSubmit() {
    if (this.props.onSubmit) {
      this.props.onSubmit();
    }
  },

  render: function render() {
    var self = this;

    var titleStyle = Object.assign({}, styles.title, { color: this.props.theme.major });
    var textStyle = Object.assign({}, styles.text, { color: this.props.theme.minor });

    var cancelText = this.props.cancelText ? this.props.cancelText : this.props.nls.resolve("Dialog.Cancel");
    var submitText = this.props.submitText ? this.props.submitText : this.props.nls.resolve("Dialog.Submit");
    var title = this.props.title ? this.props.title : this.props.nls.resolve("Dialog.Alert");
    var text = this.props.text ? this.props.text : this.props.nls.resolve("Dialog.AreUSure");
    var submitButtonStyle = this.props.style && this.props.style.submitButton ? Object.assign({}, { marginRight: "0px", marginBottom: "0px" }, this.props.style.submitButton) : { marginRight: "0px", marginBottom: "0px" };
    var iconColor = this.props.theme.accent;
    if (this.props.style && this.props.style.icon && this.props.style.icon.color) {
      iconColor = this.props.style.icon.color;
    }

    var extraButton = "";
    if (this.props.extraButtonText && this.props.onExtraButtonClick) {
      extraButton = React.createElement(Button, { onClick: this.onExtraButtonClick, style: { marginBottom: "0px" }, text: this.props.extraButtonText });
    }

    var text2 = !this.props.text2 ? "" : React.createElement(
      'div',
      null,
      React.createElement('br', null),
      this.props.text2
    );

    return React.createElement(
      SimpleDialog,
      { theme: this.props.theme, nls: this.props.nls, onCancel: this.onCancel },
      React.createElement(
        'div',
        { style: styles.container },
        React.createElement(
          'div',
          { style: styles.iconContainer },
          React.createElement(Icon, { style: styles.icon, theme: this.props.theme, color: iconColor, size: 44, icon: this.props.icon })
        ),
        React.createElement(
          'div',
          { style: styles.content },
          React.createElement(
            'div',
            { style: titleStyle },
            title
          ),
          React.createElement(
            'div',
            { style: textStyle },
            text,
            text2
          ),
          React.createElement(
            'div',
            { style: styles.buttons },
            React.createElement(Button, { onClick: this.onCancel, style: { marginBottom: "0px" }, text: cancelText }),
            extraButton,
            React.createElement(Button, { onClick: this.onSubmit, isPrimary: !this.props.isDeleteSubmit, isDelete: this.props.isDeleteSubmit, style: submitButtonStyle, text: submitText })
          )
        )
      )
    );
  }
});

module.exports = Confirmation;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./Button.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/Button.jsx","./Icon.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/Icon.jsx","./SimpleDialog.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/SimpleDialog.jsx"}],"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/Decision.jsx":[function(require,module,exports){
(function (global){
'use strict';

var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var Icon = require('./Icon.jsx');
var SimpleDialog = require('./SimpleDialog.jsx');
var Button = require('./Button.jsx');

var RPT = React.PropTypes;

var styles = {
  title: {
    fontSize: "25px",
    height: "30px",
    width: "330px",
    marginBottom: "8px",
    marginTop: "20px"
  },
  text: {
    fontSize: "14px"
  },
  buttons: {
    float: "right",
    whiteSpace: "nowrap"
  },
  icon: {
    display: "block",
    margin: "20px auto",
    width: "44px"
  },
  iconContainer: {
    position: "absolute",
    top: "0px",
    left: "0px",
    width: "100px"

  },
  container: {
    position: "relative"

  },
  content: {
    position: "relative",
    marginLeft: "100px"
  }
};

var Decision = React.createClass({
  displayName: 'Decision',

  propTypes: {
    style: RPT.object,
    theme: RPT.object.isRequired,
    nls: RPT.object,
    onAction: RPT.array,
    onCancel: RPT.func,
    icon: RPT.string,
    buttonText: RPT.array,
    title: RPT.string,
    text: RPT.string,
    width: RPT.number,
    height: RPT.number
  },

  getDefaultProps: function getDefaultProps() {
    return {
      icon: "error"
    };
  },

  componentDidMount: function componentDidMount() {},

  onAction: function onAction(index) {
    if (this.props.onAction) {
      this.props.onAction[index]();
    }
  },

  render: function render() {
    var self = this;

    var titleStyle = Object.assign({}, styles.title, { color: this.props.theme.major });
    var textStyle = Object.assign({}, styles.text, { color: this.props.theme.minor });

    var title = this.props.title ? this.props.title : this.props.nls.resolve("Dialog.Alert");
    var text = this.props.text ? React.createElement(
      'div',
      { style: textStyle },
      text
    ) : null;
    var iconColor = this.props.theme.accent;

    var buttonCount = -1;
    return React.createElement(
      SimpleDialog,
      { theme: this.props.theme, nls: this.props.nls, onCancel: this.props.onCancel, width: this.props.width },
      React.createElement(
        'div',
        { style: styles.container },
        React.createElement(
          'div',
          { style: styles.iconContainer },
          React.createElement(Icon, { style: styles.icon, theme: this.props.theme, color: iconColor, size: 44, icon: this.props.icon })
        ),
        React.createElement(
          'div',
          { style: styles.content },
          React.createElement(
            'div',
            { style: titleStyle },
            title
          ),
          React.createElement(
            'div',
            { style: textStyle },
            text,
            this.props.children
          ),
          React.createElement(
            'div',
            { style: styles.buttons },
            this.props.buttonText.map(function (item) {
              buttonCount++;
              return React.createElement(Button, { isPrimary: true, onClick: function (buttonCount) {
                  return function () {
                    self.onAction(buttonCount);
                  };
                }(buttonCount), style: { marginBottom: "0px" }, text: item });
            })
          )
        )
      )
    );
  }
});

module.exports = Decision;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./Button.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/Button.jsx","./Icon.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/Icon.jsx","./SimpleDialog.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/SimpleDialog.jsx"}],"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/DeviceAlerts.jsx":[function(require,module,exports){
(function (global){
'use strict';

/************ Dependencies *************/
var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var IoTFDeviceStore = require('../stores/IoTFDeviceStore.js');

var RPT = React.PropTypes;

/************ Styles *************/
var styles = {
  alertContainer: {
    display: "flex"
  },
  alertBox: {
    alignItems: "center",
    color: "#fff",
    display: "flex",
    flex: 1,
    flexDirection: "column",
    flexGrow: 1,
    height: "65px",
    justifyContent: "center",
    cursor: "pointer",
    fontSize: "14px",
    transition: "all 0.5s ease"
  },
  severityNumber: {
    fontSize: "14px",
    color: "white"
  },
  severityLabel: {
    color: "black",
    transition: "all 0.5s ease"
  },
  severityLabelSelected: {
    color: "white",
    transition: "all 0.5s ease"
  }
};

var DeviceAlerts = React.createClass({
  displayName: 'DeviceAlerts',

  /************ Models *************/
  propTypes: {
    alerts: RPT.object.isRequired,
    nls: RPT.object,
    severitiesShown: RPT.object,
    style: RPT.object,
    theme: RPT.object.isRequired,
    onSelect: RPT.func
  },

  /************ Controller *************/
  getDefaultProps: function getDefaultProps() {
    return {
      severitiesShown: {
        critical: true,
        high: true,
        low: true,
        medium: true
      }
    };
  },

  getInitialState: function getInitialState() {
    return {};
  },

  componentDidMount: function componentDidMount() {},

  componentWillUnmount: function componentWillUnmount() {},

  onUpdate: function onUpdate() {},

  onSelect: function onSelect(value) {
    if (this.state.selected == value) {
      value = null;
    }
    this.setState({
      selected: value
    });

    if (this.props.onSelect) {
      this.props.onSelect(value);
    }
  },

  /************ View *************/
  render: function render() {
    var self = this;
    var style = Object.assign({}, styles, this.props.style ? this.props.style : {});
    var selectedColor = { backgroundColor: this.props.theme.dark };
    var normalColor = { backgroundColor: this.props.theme.normal };
    var label = Object.assign({}, styles.severityLabel, { color: this.props.theme.light });

    var criticalAlertsBox = "",
        highAlertsBox = "",
        lowAlertsBox = "",
        mediumAlertsBox = "";
    // CriticalAlertsBox
    if (this.props.severitiesShown.critical === true) {
      criticalAlertsBox = React.createElement(
        'div',
        { onClick: function onClick() {
            self.onSelect("CRITICAL");
          }, style: Object.assign({}, style.alertBox, this.state.selected == "CRITICAL" ? selectedColor : normalColor) },
        React.createElement(
          'div',
          { style: style.severityNumber },
          this.props.alerts.critical
        ),
        React.createElement(
          'div',
          { style: !this.state.selected || this.state.selected == "CRITICAL" ? styles.severityLabelSelected : label },
          this.props.nls.resolve("Dashboard.RTI.DeviceAlerts.Critical")
        )
      );
    }

    // HighAlertsBox
    if (this.props.severitiesShown.high === true) {
      highAlertsBox = React.createElement(
        'div',
        { onClick: function onClick() {
            self.onSelect("HIGH");
          }, style: Object.assign({}, style.alertBox, this.state.selected == "HIGH" ? selectedColor : normalColor) },
        React.createElement(
          'div',
          { style: style.severityNumber },
          this.props.alerts.high
        ),
        React.createElement(
          'div',
          { style: !this.state.selected || this.state.selected == "HIGH" ? styles.severityLabelSelected : label },
          this.props.nls.resolve("Dashboard.RTI.DeviceAlerts.High")
        )
      );
    }

    // MediumAlertsBox
    if (this.props.severitiesShown.medium === true) {
      mediumAlertsBox = React.createElement(
        'div',
        { onClick: function onClick() {
            self.onSelect("MEDIUM");
          }, style: Object.assign({}, style.alertBox, this.state.selected == "MEDIUM" ? selectedColor : normalColor) },
        React.createElement(
          'div',
          { style: style.severityNumber },
          this.props.alerts.medium
        ),
        React.createElement(
          'div',
          { style: !this.state.selected || this.state.selected == "MEDIUM" ? styles.severityLabelSelected : label },
          this.props.nls.resolve("Dashboard.RTI.DeviceAlerts.Medium")
        )
      );
    }

    // LowAlertsBox
    if (this.props.severitiesShown.low == true) {
      lowAlertsBox = React.createElement(
        'div',
        { onClick: function onClick() {
            self.onSelect("LOW");
          }, style: Object.assign({}, style.alertBox, this.state.selected == "LOW" ? selectedColor : normalColor) },
        React.createElement(
          'div',
          { style: style.severityNumber },
          this.props.alerts.low
        ),
        React.createElement(
          'div',
          { style: !this.state.selected || this.state.selected == "LOW" ? styles.severityLabelSelected : label },
          this.props.nls.resolve("Dashboard.RTI.DeviceAlerts.Low")
        )
      );
    }

    var containerStyle = Object.assign({}, style.alertContainer, { backgroundColor: this.props.theme.normal });

    // View output
    return React.createElement(
      'div',
      { style: containerStyle },
      criticalAlertsBox,
      highAlertsBox,
      mediumAlertsBox,
      lowAlertsBox
    );
  }
});

module.exports = DeviceAlerts;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../stores/IoTFDeviceStore.js":"/Users/frank/Documents/Projects/IOTFoundation/components/common/stores/IoTFDeviceStore.js"}],"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/DonutChart.jsx":[function(require,module,exports){
(function (global){
'use strict';

var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
var ReactDOM = (typeof window !== "undefined" ? window['ReactDOM'] : typeof global !== "undefined" ? global['ReactDOM'] : null);
var c3 = (typeof window !== "undefined" ? window['c3'] : typeof global !== "undefined" ? global['c3'] : null);
var RPT = React.PropTypes;
var Icon = require('./Icon.jsx');

var styles = {
  container: {
    width: "100%",
    height: "100%",
    margin: "0 auto"
  }
};

var DonutChart = React.createClass({
  displayName: 'DonutChart',

  propTypes: {
    style: RPT.object,
    theme: RPT.object.isRequired,
    data: RPT.array,
    names: RPT.object,
    title: RPT.string,
    unit: RPT.string,
    unit2: RPT.string,
    label: RPT.number,
    width: RPT.number,
    height: RPT.number,
    focus: RPT.string,
    revert: RPT.bool,
    click: RPT.string,
    onOver: RPT.func,
    onOut: RPT.func,
    precision: RPT.number
  },

  getDefaultProps: function getDefaultProps() {
    return {
      data: [],
      names: {},
      precision: null
    };
  },

  componentDidMount: function componentDidMount() {
    this.createGraph();
  },

  createGraph: function createGraph() {
    var self = this;
    this.destroyGraph();

    var container = ReactDOM.findDOMNode(this);

    var dom = document.createElement("div");
    container.appendChild(dom);

    this.width = this.props.width ? this.props.width : container.offsetWidth;
    this.height = this.props.height ? this.props.height : container.offsetHeight;

    var colors = this.props.theme.palette;

    if (this.width > 0 && this.height > 0) {

      dom.style.width = this.width + "px";
      dom.style.height = this.height + "px";

      var config = {
        size: {
          width: this.width,
          height: this.height
        },
        data: {
          onclick: function onclick(d, i) {
            console.log("onclick", d, i);
          },
          onmouseover: function onmouseover(d, i) {
            if (self.props.onOver) {
              self.props.onOver(d, i);
            }
          },
          onmouseout: function onmouseout(d, i) {
            if (self.props.onOut) {
              self.props.onOut(d, i);
            }
          },
          type: "donut",
          columns: this.props.data
        },
        donut: {
          title: this.props.title, // cannot be removed
          label: {
            show: false
          },
          expand: true,
          width: 15
        },
        legend: {
          show: false
        },
        color: {
          pattern: colors
        },
        tooltip: {
          show: false
        }
      };

      this.graph = c3.generate(config);

      dom.appendChild(this.graph.element);

      this.setTitle();
    }
  },

  setTitle: function setTitle(text) {
    if (this.props.data) {
      var count = 0;
      for (var i = 0; i < this.props.data.length; i++) {
        var item = this.props.data[i];
        count += item[1];
      }

      if (count != Math.round(count)) {
        var precision = 2;
        if (this.props.precision != null) {
          precision = this.props.precision;
        }
        count = count.toFixed(precision);
      }

      if (text && typeof text != 'string') {
        var precision = 2;
        if (this.props.precision != null) {
          precision = this.props.precision;
        }
        text = text.toFixed(precision);
      }

      var label = d3.select('#' + this.id + ' text.c3-chart-arcs-title');

      //default
      var totalHeading = "Total";

      if (this.props.totalHeading) {
        totalHeading = this.props.totalHeading;
      }

      label.text('');
      label.selectAll("*").remove(); //html(''); // remove existant text

      if (text !== undefined) {
        label.insert('tspan').text(text).attr('dy', 0).attr('x', 0).attr('class', "donutMain").attr('fill', this.props.theme.normal);
        label.insert('tspan').text(this.props.unit).attr('dy', 20).attr('x', 0).attr('class', "donutMinor").attr('fill', this.props.theme.normal);
        if (this.props.unit2) label.insert('tspan').text(this.props.unit2).attr('dy', 18).attr('x', 0).attr('class', "donutMinor").attr('fill', this.props.theme.normal);
      } else {
        label.insert('tspan').text(count).attr('dy', 0).attr('x', 0).attr('class', "donutMain").attr('fill', this.props.theme.normal);
        label.insert('tspan').text(totalHeading).attr('dy', -25).attr('x', 0).attr('class', "donutMinor").attr('fill', '#899399');
        label.insert('tspan').text(this.props.unit).attr('dy', 45).attr('x', 0).attr('class', "donutMinor").attr('fill', this.props.theme.normal);
        if (this.props.unit2) label.insert('tspan').text(this.props.unit2).attr('dy', 18).attr('x', 0).attr('class', "donutMinor").attr('fill', this.props.theme.normal);
      }
    }
  },

  focus: function focus(id) {
    if (this.graph) {
      this.graph.focus(id);
    }
  },

  click: function click(id) {
    if (this.graph) {
      this.graph.click(id);
    }
  },

  revert: function revert(id) {
    if (this.graph) {
      this.graph.revert();
      this.setTitle();
    }
  },

  destroyGraph: function destroyGraph() {
    var dom = ReactDOM.findDOMNode(this);
    while (dom.firstChild) {
      dom.removeChild(dom.firstChild);
    }
    this.graph = null;
  },

  updateGraph: function updateGraph() {
    if (!this.graph) {
      this.createGraph();
    }
    if (this.graph) {
      var self = this;

      this.graph.load({
        columns: self.props.data
      });

      this.graph.data.names(this.props.names);

      var container = ReactDOM.findDOMNode(this);
      var width = this.props.width ? this.props.width : container.offsetWidth;
      var height = this.props.height ? this.props.height : container.offsetHeight;
      if (this.width != width || this.height != height) {
        this.width = width;
        this.height = height;
        this.graph.resize({ height: this.height, width: this.width });
      }

      this.setTitle();
    }
  },

  shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
    var self = this;
    // do not repaint for user interaction, otherwise the animation won't work
    if (nextProps.focus || nextProps.label) {
      if (nextProps.focus) {
        this.focussed = true;
        this.focus(nextProps.focus);
      }
      if (nextProps.label) {
        this.focussed = true;
        self.setTitle(nextProps.label);
      }
      return false;
    } else if (this.focussed) {
      this.focussed = false;
      this.revert();
      return false;
    } else {
      return true;
    }
  },

  componentWillUnmount: function componentWillUnmount() {
    this.destroyGraph();
  },

  componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
    this.updateGraph();
    this.checkIfPropsChanged(prevProps, this.props);
  },

  checkIfPropsChanged: function checkIfPropsChanged(a, b) {
    // Check if we have to remove an item. This fails in some situations if we use the normal
    // unload method. Therefore we just redraw the whole thing.
    var currentData = this.graph.data();
    for (var i = 0; i < currentData.length; i++) {
      var item = currentData[i];
      var found = false;
      for (var t = 0; t < this.props.data.length; t++) {
        var dataItem = this.props.data[t];
        if (dataItem[0] == item.id) {
          found = true;
          break;
        }
      }
      if (!found) {
        this.createGraph();
        return;
      }
    }

    if (JSON.stringify(a.theme) != JSON.stringify(b.theme) || a.unit != b.unit || a.precision != b.precision || a.width != b.width || a.height != b.height) {
      this.createGraph();
    }
  },

  render: function render() {
    if (!this.id) {
      this.id = "X" + Math.round(Math.random() * 1000000);
    }
    var style = Object.assign({}, styles.container, { width: this.props.width + "px", height: this.props.height + "px" }, this.props.style ? this.props.style : {});
    return React.createElement('div', { id: this.id, style: style });
  }
});

module.exports = DonutChart;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./Icon.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/Icon.jsx"}],"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/Dropdown.jsx":[function(require,module,exports){
(function (global){
'use strict';

var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
var ReactDOM = (typeof window !== "undefined" ? window['ReactDOM'] : typeof global !== "undefined" ? global['ReactDOM'] : null);
var RPT = React.PropTypes;
var Option = require('./Option.jsx');
var Portal = require('./Portal.jsx');

var styles = {
	containerStyle: {},
	dropboxWrapper: {
		position: "absolute"
	},
	dropboxContainer: {
		minWidth: "160px",
		position: "fixed"
	}
};

var Dropdown = React.createClass({
	displayName: 'Dropdown',


	propTypes: {
		theme: RPT.object.isRequired,
		style: RPT.object
	},

	getDefaultProps: function getDefaultProps() {
		return {
			topCorrection: 0,
			leftCorrection: 0
		};
	},

	getInitialState: function getInitialState() {
		return {
			isOpen: false,
			left: "0px",
			top: "0px"
		};
	},

	componentDidMount: function componentDidMount() {
		document.addEventListener('click', this.handleClickOutside, true);
		console.log($(ReactDOM.findDOMNode(this.refs.trigger).children[0]));
		var nodeOffsetPos = $(ReactDOM.findDOMNode(this.refs.trigger).children[0]).offset();
		var nodeOffsetDim = $(ReactDOM.findDOMNode(this.refs.trigger).children[0])[0].offsetHeight;
		this.setState({ left: nodeOffsetPos.left + "px", top: nodeOffsetPos.top + nodeOffsetDim - $(window).scrollTop() + "px" });
	},

	componentWillUnmount: function componentWillUnmount() {
		document.removeEventListener('click', this.handleClickOutside, true);
	},

	handleClickOutside: function handleClickOutside(e) {
		this.setState({ isOpen: false });
	},

	onClick: function onClick(event) {
		this.setState({ isOpen: !this.state.isOpen });
	},

	render: function render() {
		var self = this;
		var containerStyle = Object.assign({}, styles.containerStyle, this.props.style);
		styles.dropboxWrapper.left = this.state.left;
		styles.dropboxWrapper.top = this.state.top;

		styles.dropboxWrapper.fontFamily = this.props.theme.font;

		var lastIndex = Array.isArray(this.props.children) ? this.props.children.length - 1 : null;
		var options = React.createElement(
			Portal,
			null,
			React.createElement(
				'div',
				{ style: styles.dropboxWrapper },
				React.createElement(
					'div',
					{ style: styles.dropboxContainer },
					this.state.isOpen ? React.Children.map(this.props.children, function (child, idx) {
						if (idx !== 0) {
							var currProps = {};
							if (lastIndex && lastIndex == idx) {
								currProps = { onSelect: self.props.onSelect ? self.props.onSelect : function () {}, lastChild: true, firstChild: false };
							} else if (idx == 1) {
								currProps = { onSelect: self.props.onSelect ? self.props.onSelect : function () {}, lastChild: false, firstChild: true };
							} else {
								currProps = { onSelect: self.props.onSelect ? self.props.onSelect : function () {}, lastChild: false, firstChild: false };
							}
							var newChild = React.cloneElement(child, currProps);
							return newChild;
						} else {
							return null;
						}
					}) : null
				)
			)
		);
		return React.createElement(
			'div',
			{ style: containerStyle },
			React.createElement(
				'div',
				{ style: containerStyle, ref: 'trigger', onClick: this.onClick },
				this.props.children[0] || this.props.children
			),
			this.state.isOpen ? options : null
		);
	}
});

module.exports = Dropdown;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./Option.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/Option.jsx","./Portal.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/Portal.jsx"}],"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/GalleryAccordion.jsx":[function(require,module,exports){
(function (global){
'use strict';

var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
var ReactDOM = (typeof window !== "undefined" ? window['ReactDOM'] : typeof global !== "undefined" ? global['ReactDOM'] : null);
var RPT = React.PropTypes;
var Icon = require('./Icon.jsx');

var styles = {

  container: {
    marginBottom: '30px',
    boxSizing: 'border-box',
    clear: 'both',
    cursor: 'pointer'
  },
  canvas: {
    MozTransition: 'all 0.25s ease',
    WebkitTransition: 'all 0.25s ease',
    OTransition: 'all 0.25s ease',
    transition: 'all 0.25s ease',
    height: '116px',
    overflow: 'hidden',
    backgroundColor: '#F0F4F7',
    paddingTop: '15px'
  },
  wideCanvas: {},
  title: {
    fontSize: '18px',
    marginBottom: '20px',
    fontWeight: '300'
  },
  icon: {
    float: 'right'
  },
  toggleCtrlContainer: {
    clear: 'both',
    float: 'right',
    marginTop: '10px'
  }

};

var ITEMS_PER_ROW = 4;

var GalleryAccordion = React.createClass({
  displayName: 'GalleryAccordion',


  propTypes: {
    theme: RPT.object.isRequired,
    style: RPT.object,
    id: RPT.string,
    label: RPT.string,
    onRemove: RPT.func,
    onExpand: RPT.func,
    expanded: RPT.bool
  },

  getDefaultProps: function getDefaultProps() {
    return {
      label: ''
    };
  },

  getInitialState: function getInitialState() {
    var expandedStatus = false;
    for (var i = 0; i < this.props.children.length; i++) {
      if (this.props.selected === this.props.children[i].props.item.name && i >= ITEMS_PER_ROW * 2) {
        expandedStatus = true;
      }
    }
    return {
      expanded: this.props.expanded || expandedStatus ? true : false
    };
  },

  componentWillMount: function componentWillMount() {
    for (var i = 0; i < this.props.children.length; i++) {
      if (this.props.selected === this.props.children[i].props.item.name && i >= ITEMS_PER_ROW * 2) {
        this.setState({ expanded: true });
      }
    }
    if (this.props.children.length > 4) {
      styles.canvas.height = '226px';
    }
  },
  componentDidMount: function componentDidMount() {
    this.componentDidUpdate();
  },
  componentDidUpdate: function componentDidUpdate() {
    if (this.state.expanded) {
      $(this.refs.cardCanvas).css('height', $(this.refs.cardCanvas)[0].scrollHeight);
    } else {
      if (this.props.children.length > 4) {
        $(this.refs.cardCanvas).css('height', '226px');
      } else {
        $(this.refs.cardCanvas).css('height', '116px');
      }
    }
  },
  componentDidReceiveProps: function componentDidReceiveProps() {
    this.setState({
      selected: this.props.selected
    });
  },


  onRemove: function onRemove() {
    if (this.props.onRemove) {
      this.props.onRemove(this.props.id);
    }
    return false;
  },

  onToggle: function onToggle() {
    this.setState({
      expanded: !this.state.expanded
    });
  },

  render: function render() {
    var self = this;
    var canvas = '';
    var toggleCtrl = '';
    var childCount = ITEMS_PER_ROW * 2;
    if (this.state.expanded) {
      canvas = this.props.children;
      toggleCtrl = React.createElement(
        'div',
        { style: styles.toggleCtrlContainer },
        React.createElement(
          'a',
          { onClick: self.onToggle, href: 'javascript:void(0)' },
          self.props.nls.resolve('Dashboard.Cards.Customization.ShowLess')
        )
      );
    } else {
      var i = 0;
      canvas = this.props.children.filter(function (child) {
        if (i < childCount) {
          i++;
          return true;
        } else {
          i++;
          toggleCtrl = React.createElement(
            'div',
            { style: styles.toggleCtrlContainer },
            React.createElement(
              'a',
              { onClick: self.onToggle, href: 'javascript:void(0)' },
              self.props.nls.resolve('Dashboard.Cards.Customization.ShowMore')
            )
          );
          return false;
        }
      });
    }

    return React.createElement(
      'div',
      { style: styles.container },
      React.createElement(
        'div',
        { style: styles.title },
        this.props.label
      ),
      React.createElement(
        'div',
        { style: styles.canvas, ref: 'cardCanvas' },
        React.createElement('div', { style: styles.wideCanvas }),
        canvas
      ),
      toggleCtrl
    );
  }
});

module.exports = GalleryAccordion;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./Icon.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/Icon.jsx"}],"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/Gauge.jsx":[function(require,module,exports){
(function (global){
'use strict';

var d3 = (typeof window !== "undefined" ? window['d3'] : typeof global !== "undefined" ? global['d3'] : null);
var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
var ReactDOM = (typeof window !== "undefined" ? window['ReactDOM'] : typeof global !== "undefined" ? global['ReactDOM'] : null);
var RPT = React.PropTypes;

/**
* Flexible gauge.
*/
var styles = {
	container: {
		height: "100%",
		width: "100%",
		margin: "0 auto"
	}
};

var Gauge = React.createClass({
	displayName: 'Gauge',


	propTypes: {
		theme: RPT.object.isRequired,
		style: RPT.object,
		nls: RPT.object,
		value: RPT.number,
		minDegree: RPT.number,
		maxDegree: RPT.number,
		min: RPT.number,
		max: RPT.number,
		precision: RPT.number,
		needle: RPT.bool,
		unit: RPT.string,
		label: RPT.number,
		width: RPT.number,
		height: RPT.number,
		lowerThresholdMeaning: RPT.string,
		middleThresholdMeaning: RPT.string,
		upperThresholdMeaning: RPT.string,
		lowerThreshold: RPT.number,
		upperThreshold: RPT.number
	},

	getDefaultProps: function getDefaultProps() {
		return {
			minDegree: 45,
			maxDegree: 315,
			min: 0,
			max: 100,
			needle: false
		};
	},

	componentDidMount: function componentDidMount() {
		// create for the first time
		this.createSVG();
	},

	createSVG: function createSVG() {
		this.destroySVG();

		var self = this;

		var dom = ReactDOM.findDOMNode(this);
		// var dom = document.createElement("div");
		// root.appendChild(dom);

		this.width = this.props.width ? this.props.width : container.offsetWidth;
		this.height = this.props.height ? this.props.height : container.offsetHeight;
		var pi = Math.PI * 2;
		var radius = Math.min(this.width, this.height) / 2;
		var startAngle = this.props.minDegree / 360 * pi - pi / 2;
		var endAngle = this.props.maxDegree / 360 * pi - pi / 2;

		var group = d3.select(dom).append('svg').attr('width', +this.width).attr('height', +this.height).attr('viewBox', '0 0 ' + this.width + ' ' + this.height).attr('preserveAspectRatio', 'xMinYMin meet').append("g").attr("transform", "translate(" + this.width / 2 + "," + this.height / 2 + ")");

		// the scale to show the full range
		var scaleArc = d3.svg.arc().innerRadius(radius - 40).outerRadius(radius - 25).startAngle(startAngle).endAngle(endAngle);

		var scale = group.append("path").attr("fill", this.props.theme.minor).attr("d", scaleArc);

		// the value segment
		this.valueSegment = group.append("path").datum({ endAngle: 0, startAngle: 0 }).attr("fill", this.props.theme.normal);

		// the textual value
		this.label = group.append("svg:text").attr("dy", "-10px").attr("text-anchor", "middle").attr("font-size", "40px").attr("font-weight", "200").attr("fill", this.props.theme.normal);

		// the unit indicator
		if (this.props.unit) {
			var unit = group.append("svg:text").attr("dy", "20px").attr("text-anchor", "middle").attr("font-size", "16px").attr("font-weight", "200").attr("fill", this.props.theme.minor).text(this.props.unit);
		}

		// threshold indicator
		var tickSteps = (this.props.maxDegree - this.props.minDegree) / 100;
		var range = this.props.max - this.props.min;

		for (var i = 0; i <= 100; i++) {
			var line = group.append("svg:line").attr("x1", this.width / 2 - 20).attr("x2", this.width / 2 - 10).attr("y1", 0).attr("y2", 0).attr("stroke-width", "2");

			if (this.props.lowerThresholdMeaning && this.props.lowerThresholdMeaning != "NONE" && i <= (this.props.lowerThreshold - this.props.min) / range * 100) {
				line.attr("stroke", this.props.theme[this.props.lowerThresholdMeaning]);
			} else if (this.props.middleThresholdMeaning && this.props.middleThresholdMeaning != "NONE" && i > (this.props.lowerThreshold - this.props.min) / range * 100 && i < (this.props.upperThreshold - this.props.min) / range * 100) {
				line.attr("stroke", this.props.theme[this.props.middleThresholdMeaning]);
			} else if (this.props.upperThresholdMeaning && this.props.upperThresholdMeaning != "NONE" && i >= (this.props.upperThreshold - this.props.min) / range * 100) {
				line.attr("stroke", this.props.theme[this.props.upperThresholdMeaning]);
			} else {
				line.attr("stroke", this.props.theme.minor);
			}

			line.attr("transform", "rotate(" + (this.props.minDegree + tickSteps * i + 90) + ")");
		}

		this.updateSVG();
	},

	destroySVG: function destroySVG() {
		var dom = ReactDOM.findDOMNode(this);
		var children = dom.childNodes;
		for (var i = 0; i < children.length; i++) {
			var child = children[i];
			if (child.tagName === 'svg') {
				dom.removeChild(child);
				break;
			}
		}
	},

	updateSVG: function updateSVG() {
		// handle precision
		var value = this.props.value ? this.props.value : 0;

		if (this.props.precision !== undefined) {
			value = value.toFixed(this.props.precision);
		}
		var pi = Math.PI * 2;

		var radius = Math.min(this.width, this.height) / 2;
		var startAngle = this.props.minDegree / 360 * pi - pi / 2;
		var endAngle = this.props.maxDegree / 360 * pi - pi / 2;
		var val = (value - this.props.min) / (this.props.max - this.props.min);
		val = val * (endAngle - startAngle) + startAngle;
		val = Math.min(val, endAngle);
		val = Math.max(val, startAngle);

		var arc, arcTween;

		this.label.text(value);

		if (this.props.needle) {
			// show only a simple tick
			arc = d3.svg.arc().innerRadius(radius - 50).outerRadius(radius - 25);

			arcTween = function arcTween(transition, newAngle) {
				transition.attrTween("d", function (d) {
					if (d) {
						var interpolate = d3.interpolate(d.endAngle, newAngle);
						return function (t) {
							var val = interpolate(t);
							d.endAngle = val;
							d.startAngle = val - 0.05;
							return arc(d);
						};
					}
				});
			};
		} else {
			// show the full segment
			arc = d3.svg.arc().innerRadius(radius - 40).outerRadius(radius - 25).startAngle(startAngle);

			arcTween = function arcTween(transition, newAngle) {
				transition.attrTween("d", function (d) {
					if (d) {
						var interpolate = d3.interpolate(d.endAngle, newAngle);
						return function (t) {
							d.endAngle = interpolate(t);
							return arc(d);
						};
					}
				});
			};
		}

		this.valueSegment.transition().duration(200).call(arcTween, val);
	},

	componentWillUnmount: function componentWillUnmount() {
		this.destroySVG();
	},

	componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
		this.updateSVG();
		this.checkIfPropsChanged(prevProps, this.props);
	},

	checkIfPropsChanged: function checkIfPropsChanged(a, b) {
		if (JSON.stringify(a.theme) != JSON.stringify(b.theme) || a.min != b.min || a.max != b.max || a.unit != b.unit || a.lowerThresholdMeaning != b.lowerThresholdMeaning || a.middleThresholdMeaning != b.middleThresholdMeaning || a.upperThresholdMeaning != b.upperThresholdMeaning || a.lowerThreshold != b.lowerThreshold || a.upperThreshold != b.upperThreshold || a.unit != b.unit || a.min != b.min || a.max != b.max || a.precision != b.precision && !isNaN(a.precision) && !isNaN(b.precision) || a.width != b.width || a.height != b.height) {
			this.createSVG();
		}
	},

	render: function render() {
		var style = Object.assign({}, styles.container, { width: this.props.width + "px", height: this.props.height + "px" }, this.props.style ? this.props.style : {});
		return React.createElement('div', { style: style });
	}
});

module.exports = Gauge;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/Icon.jsx":[function(require,module,exports){
(function (global){
"use strict";

var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
var RPT = React.PropTypes;

var styles = {
  icon: {
    verticalAlign: "middle",
    cursor: "pointer"
  }
};

// Documentation link:
// https://github.ibm.com/IoT/dashboard-component/wiki/Icon-component
//

var Icon = React.createClass({
  displayName: "Icon",

  propTypes: {
    style: RPT.object,
    theme: RPT.object,
    //icon: RPT.isRequired,
    color: RPT.string,
    disabled: RPT.bool,
    size: RPT.number,
    onClick: RPT.func,
    onEnter: RPT.func,
    onLeave: RPT.func
  },

  getDefaultProps: function getDefaultProps() {
    return {
      disabled: false,
      size: 24,
      onClick: function onClick() {}
    };
  },

  getInitialState: function getInitialState() {
    return {
      viewportCorrection: this.getViewportCorrection()
    };
  },

  getViewportCorrection: function getViewportCorrection() {
    switch (this.props.icon) {
      case 'dash':
        return { x: 4 };
      case 'delete':
        // trashicon from design team
        return { x: -3 };
      case 'dot-empty':
        return { x: -7, y: -7 };
      case 'dot-full':
        return { x: -7, y: -7 };
      case 'fullscreen':
        // fullscreen icon from design team
        return { y: -2 };
      case 'refresh':
        // fullscreen icon from design team
        return { x: -4 };
      case 'bar-chart':
        return { y: -1, width: 19, height: 19 };
      case 'traffic-consumption':
        return { y: -1, width: 19, height: 19 };
      case 'storage-consumption':
        return { y: -2, width: 19, height: 19 };
      case 'device-types':
        return { y: -0.75, width: 21, height: 21 };
      case 'elevator':
        return { y: -5 };
      case 'horizontal-seperator':
        return { y: -9 };
      case 'line-chart':
        return { y: -5 };
      case 'line-graph2':
        return { width: 28, height: 15 };
      case 'pie-chart':
        return { width: 21, height: 21 };
      case 'text-based':
        return { x: 0, y: 0, width: 16, height: 16 };
      //case 'gauge':
      //    return {x:5, y:5};
      case 'weatherService':
        return { y: -3, width: 26, height: 26 };
      case 'mail':
        return { x: 0, y: 0, width: 32, height: 32 };
      case 'download':
        return { x: 0, y: 0, width: 32, height: 32 };
      case 'role':
        return { x: 0, y: 0, width: 32, height: 32 };
      case 'rule':
        return { x: -5, y: -1 };
      case 'add-new':
        return { x: 0, y: 0, width: 24, height: 24 };
      case 'firstPage':
      case 'lastPage':
        return { x: -3, y: -4, width: 18, height: 18 };
      case 'nextPage':
      case 'previousPage':
        return { x: -6, y: -4, width: 18, height: 18 };
      case 'edit':
        return { x: 0, y: 0, width: 32, height: 32 };
      case 'close':
        return { x: 0, y: 0, width: 32, height: 32 };
      case 'confirm':
        return { x: 0, y: 0, width: 32, height: 32 };
      case 'BrokenCard':
        return { x: 0, y: 0, width: 56, height: 43 };
      case 'bee':
        return { x: 0, y: 0, width: 65, height: 57 };
      case 'AllDeviceProperties':
        return { x: 0, y: 0, width: 19, height: 19 };
      case 'DeviceInfo':
        return { x: 0, y: 0, width: 19, height: 19 };
      case 'DeviceList':
        return { x: 0, y: 0, width: 19, height: 19 };
      case 'DeviceMap':
        return { x: 0, y: 0, width: 19, height: 19 };
      case 'DeviceProperties':
        return { x: 0, y: 0, width: 19, height: 19 };
      case 'RuleBreakInfo':
        return { x: 0, y: 0, width: 19, height: 19 };
      case 'RuleBreaks':
        return { x: 0, y: 0, width: 19, height: 19 };
      case 'Rules':
        return { x: 0, y: 0, width: 19, height: 19 };
      case 'deleted-rule':
        return { x: -2, y: -1, width: 21, height: 21 };
      case 'warning':
        return { x: 0, y: 0, width: 128, height: 128 };
      case 'PolicyCompliance':
        return { x: 0, y: 0, width: 20, height: 20 };
      case 'Blacklist':
        return { x: 0, y: 0, width: 20, height: 20 };
      case 'Whitelist':
        return { x: 0, y: 0, width: 20, height: 20 };
      case 'ConnectionSecurity':
        return { x: 0, y: 0, width: 20, height: 20 };
      case 'RiskManagement':
        return { x: 0, y: 0, width: 32, height: 32 };
    }
  },

  renderGraphic: function renderGraphic() {
    // see list of icons: http://dmfrancisco.github.io/react-icons/
    switch (this.props.icon) {
      case 'close':
        return React.createElement(
          "g",
          null,
          React.createElement("polygon", { points: "20.293,10.293 16,14.586 11.707,10.293 10.293,11.707 14.586,16 10.293,20.293 11.707,21.707 16,17.414 20.293,21.707 21.707,20.293 17.414,16 21.707,11.707" }),
          React.createElement("path", { d: "M16,2C8.269,2,2,8.269,2,16s6.269,14,14,14s14-6.269,14-14S23.731,2,16,2z M16,28C9.383,28,4,22.617,4,16S9.383,4,16,4 s12,5.383,12,12S22.617,28,16,28z" })
        );
      case 'confirm':
        return React.createElement(
          "g",
          null,
          React.createElement("polygon", { points: "14,18.586 10.707,15.293 9.293,16.707 14,21.414 22.707,12.707 21.293,11.293 \t" }),
          React.createElement("path", { d: "M16,2C8.269,2,2,8.269,2,16s6.269,14,14,14s14-6.269,14-14S23.731,2,16,2z M16,28C9.383,28,4,22.617,4,16S9.383,4,16,4 s12,5.383,12,12S22.617,28,16,28z" })
        );
      case 'copy':
        return React.createElement(
          "g",
          { id: "Group" },
          React.createElement("path", { id: "Shape", className: "st0", d: "M11,4.2V0H0v16.6h4.1v4.2h11V4.2H11L11,4.2z M4.1,15.2H1.4V1.4h8.3v2.8H4.1V15.2L4.1,15.2z M13.8,19.4H5.5V5.5h8.3V19.4L13.8,19.4z" }),
          React.createElement("rect", { id: "Rectangle-path", x: "7", y: "9", className: "st0", width: "5.5", height: "0.7" }),
          React.createElement("rect", { id: "Rectangle-path_1_", x: "7", y: "10", className: "st0", width: "5.5", height: "0.7" }),
          React.createElement("rect", { id: "Rectangle-path_2_", x: "7", y: "12", className: "st0", width: "5.5", height: "0.7" }),
          React.createElement("rect", { id: "Rectangle-path_3_", x: "7", y: "13", className: "st0", width: "2.8", height: "0.7" })
        );
      case 'dash':
        return React.createElement(
          "g",
          null,
          React.createElement("rect", { x: "9", y: "15", width: "14", height: "2" })
        );
      case 'edit':
        return React.createElement(
          "g",
          null,
          React.createElement("rect", { x: "24.379", y: "1.257", transform: "matrix(0.7071 -0.7071 0.7071 0.7071 3.8726 20.3492)", width: "4.243", height: "8.485" }),
          React.createElement("path", { d: "M5,21l6,6l15-15l-6-6L5,21z M11,24.171L7.828,21L20,8.829L23.172,12L11,24.171z" }),
          React.createElement("polygon", { points: "1,31 6,29 3,26" })
        );
      case 'eye':
        return React.createElement(
          "g",
          null,
          React.createElement("path", { d: "M12 4.5c-5 0-9.27 3.11-11 7.5 1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zm0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" })
        );
      case 'close-cross':
        return React.createElement(
          "g",
          null,
          React.createElement("path", { d: "M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z" })
        );
      case 'chevron-right':
        return React.createElement(
          "g",
          null,
          React.createElement("path", { d: "M10 6l-1.41 1.41 4.58 4.59-4.58 4.59 1.41 1.41 6-6z" })
        );
      case 'expand-more':
        return React.createElement(
          "g",
          null,
          React.createElement("path", { d: "M16.59 8.59l-4.59 4.58-4.59-4.58-1.41 1.41 6 6 6-6z" })
        );
      case 'mail':
        return React.createElement(
          "g",
          { id: "Layer_1" },
          React.createElement("path", { d: "M16,4L1,12v1v15h30V13v-1L16,4z M7,11h18v4.2L16,20l-9-4.8V11z M29,26H3V14.066L16,21l13-6.934V26z" })
        );
      case 'role':
        return React.createElement(
          "g",
          { id: "Layer_1" },
          React.createElement("path", { d: "M18,5V1h-4v4H6v26h20V5H18z M16,2c0.552,0,1,0.448,1,1s-0.448,1-1,1s-1-0.448-1-1S15.448,2,16,2z M24,29H8V7h6v2h4V7h6V29z " }),
          React.createElement("path", { d: "M16,11c-2.762,0-5,2.238-5,5s2.238,5,5,5s5-2.238,5-5S18.762,11,16,11z M16,19c-1.654,0-3-1.346-3-3s1.346-3,3-3s3,1.346,3,3S17.654,19,16,19z" }),
          React.createElement("path", { d: "M12,23c-1.104,0-2,0.896-2,2v2h12v-2c0-1.104-0.896-2-2-2H12z" })
        );
      case 'add-new':
        return React.createElement(
          "g",
          { id: "Layer_1" },
          React.createElement("path", { d: "M12,1C5.926,1,1,5.925,1,12s4.926,11,11,11s11-4.925,11-11S18.074,1,12,1z M17,13h-4v4h-2v-4H7v-2h4V7h2v4h4V13z" }),
          React.createElement("path", { d: "M12,1C5.926,1,1,5.925,1,12s4.926,11,11,11s11-4.925,11-11S18.074,1,12,1z M17,13h-4v4h-2v-4H7v-2h4V7h2v4h4V13z" })
        );
      case 'download':
        return React.createElement(
          "g",
          { id: "Layer_1" },
          React.createElement("polygon", { points: "24.708,13.707 23.294,12.292 17,18.587 17,2 15,2 15,18.585 8.708,12.292 7.294,13.707 16.001,22.414 \t" }),
          React.createElement("polygon", { points: "29,19 29,27 3,27 3,19 1,19 1,27 1,31 3,31 29,31 31,31 31,27 31,19 \t" })
        );
      case 'bee':
        return React.createElement(
          "g",
          { id: "Group" },
          React.createElement("path", { d: "M21.686,14 L38.313,14 C36.52,11.59 33.467,10 30,10 C26.533,10 23.48,11.59 21.687,14 L21.686,14 Z M20.064,18 C20.022,18.328 19.999,18.662 19.999,19 L19.999,22 L39.999,22 L39.999,19 C39.999,18.662 39.976,18.328 39.934,18 L20.064,18 L20.064,18 Z M19.999,29 C19.999,29.338 20.022,29.672 20.064,30 L39.934,30 C39.976,29.672 39.999,29.338 39.999,29 L39.999,26 L19.999,26 L19.999,29 L19.999,29 Z M29.999,38 C33.467,38 36.519,36.41 38.312,34 L21.686,34 C23.478,36.41 26.531,38 29.999,38 L29.999,38 Z M4.459,16.1 C3.609,16.453 2.809,16.972 2.115,17.665 C1.422,18.358 0.903,19.157 0.55,20.009 C0.185,20.892 0,21.832 0,22.772 C0,23.715 0.185,24.655 0.55,25.539 C0.904,26.393 1.423,27.191 2.116,27.884 C2.808,28.577 3.609,29.096 4.46,29.45 C5.340001,29.814 6.275001,30 7.212,30 L7.242,30 C8.178,30 9.112,29.814 9.992,29.45 C10.847,29.096 11.644,28.577 12.337,27.88501 C13.029,27.193 13.55,26.395 13.903,25.54 L19.999,10 L4.459,16.1 L4.459,16.1 Z M12.054,24.775 C11.79,25.412 11.408,25.982 10.921,26.47 C10.434,26.956 9.864,27.337 9.225,27.6 C8.588,27.866 7.92,28 7.211,28 C6.529,28 5.861,27.866 5.229,27.605 C4.585,27.335 4.014,26.955 3.529,26.469 C3.043,25.983 2.663,25.412 2.399,24.773 C2.131999,24.133 1.999,23.461 1.999,22.77 C1.999,22.085 2.131999,21.41401 2.397,20.77401 C2.663,20.13401 3.044,19.56401 3.529,19.07801 C4.014,18.59301 4.586,18.21201 5.189,17.96101 L16.462,13.53701 L12.054,24.77701 L12.054,24.775 Z M59.449,20.008 C59.094,19.156 58.576,18.358 57.883,17.664 C57.191,16.972 56.39,16.452 55.538,16.098 L39.999,10 L46.097,25.54 C46.451,26.394 46.971,27.192 47.663,27.885 C48.355,28.577 49.153,29.097 50.007,29.449 C50.887,29.813 51.822,29.999 52.757,29.999 L52.788,29.999 C53.724,29.999 54.66,29.813 55.538,29.449 C56.39,29.096 57.19,28.577 57.883,27.884 C58.576,27.192 59.095,26.394 59.448,25.539 C59.814,24.655 60,23.716 59.998,22.772 C59.998,21.832 59.813,20.892 59.448,20.007 L59.449,20.008 Z M57.599,24.775 C57.336,25.415 56.955,25.985 56.469,26.471 C55.985,26.955 55.413,27.337 54.776,27.604 C54.136,27.867 53.469,28.001 52.758,28.001 C52.078,28.001 51.408,27.867 50.77,27.601 C50.133,27.339 49.564,26.958 49.077,26.471 C48.589,25.984 48.207,25.413 47.957,24.811 L43.534,13.537 L54.77,17.947 C55.41,18.213 55.982,18.594 56.467,19.07899 C56.953,19.56499 57.334,20.13599 57.597,20.77299 C57.864,21.41499 57.997,22.08599 57.997,22.77599 C57.997,23.46299 57.864,24.13599 57.597,24.77599 L57.599,24.775 Z M24.999,8 C27.209,8 28.999,6.21 28.999,4 C28.999,1.79 27.209,0 24.999,0 C22.789,0 20.999,1.79 20.999,4 C20.999,6.21 22.789,8 24.999,8 L24.999,8 Z M24.999,2 C26.102,2 26.999,2.896 26.999,4 C26.999,5.104 26.102,6 24.999,6 C23.896,6 22.999,5.104 22.999,4 C22.999,2.896 23.896,2 24.999,2 L24.999,2 Z M34.999,8 C37.209,8 38.999,6.21 38.999,4 C38.999,1.79 37.209,0 34.999,0 C32.789,0 30.999,1.79 30.999,4 C30.999,6.21 32.789,8 34.999,8 L34.999,8 Z M34.999,2 C36.102,2 36.999,2.896 36.999,4 C36.999,5.104 36.102,6 34.999,6 C33.896,6 32.999,5.104 32.999,4 C32.999,2.896 33.896,2 34.999,2 L34.999,2 Z", id: "Page-1-Copy-7" })
        );
      case 'line-graph':
        return React.createElement(
          "g",
          { id: "Page-1-Copy" },
          React.createElement("path", { d: "M12.94,18 L17.939,18 L17.939,11.118 L12.94,11.118 L12.94,18 Z M13.94,12.118 L16.94,12.118 L16.94,17.001 L13.94,17.001 L13.94,12.118 Z", id: "Fill-1" }),
          React.createElement("path", { d: "M6.47,18 L11.469,18 L11.469,17 L6.47,17 L6.47,18 Z", id: "Fill-2" }),
          React.createElement("path", { d: "M6.47,15.686 L11.469,15.686 L11.469,14.686 L6.47,14.686 L6.47,15.686 Z", id: "Fill-3" }),
          React.createElement("path", { d: "M6.47,13.372 L11.469,13.372 L11.469,12.372 L6.47,12.372 L6.47,13.372 Z", id: "Fill-4" }),
          React.createElement("path", { d: "M6.47,11.058 L11.469,11.058 L11.469,10.058 L6.47,10.058 L6.47,11.058 Z", id: "Fill-5" }),
          React.createElement("path", { d: "M6.47,8.744 L11.469,8.744 L11.469,7.743 L6.47,7.743 L6.47,8.744 Z", id: "Fill-6" }),
          React.createElement("path", { d: "M0,18 L5,18 L5,0.069 L0,0.069 L0,18 Z", id: "Fill-7" })
        );
      case 'gauge':
        return React.createElement(
          "g",
          { id: "Page-1", stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
          React.createElement(
            "g",
            { id: "Group-9", transform: "translate(3.000000, 3.000000)" },
            React.createElement("path", { d: "M2.4863,13.0507 C-0.4697,10.0947 -0.4697,5.3017 2.4863,2.3457 C5.4423,-0.6103 10.2353,-0.6103 13.1913,2.3457 C16.1473,5.3017 16.1473,10.0947 13.1913,13.0507", id: "Stroke-76", stroke: "#3C3C3B", strokeWidth: "5" }),
            React.createElement("path", { d: "M7.8388,18.0507 C9.2198,18.0507 10.3388,16.9317 10.3388,15.5507 C10.3388,14.1697 9.2198,13.0507 7.8388,13.0507 C6.4578,13.0507 5.3388,14.1697 5.3388,15.5507 C5.3388,16.9317 6.4578,18.0507 7.8388,18.0507", id: "Fill-78", fill: "#3C3C3B" }),
            React.createElement("path", { d: "M7.8388,15.5507 L7.8388,6.5897", id: "Stroke-80", stroke: "#3C3C3B" })
          )
        );
      case 'bar-chart':
        return React.createElement(
          "g",
          { id: "Group-7", transform: "translate(2.000000, 0.000000)" },
          React.createElement("path", { d: "M0.9889,0.0854 L0.9889,17.9264", id: "Stroke-63", stroke: "#3C3C3B", strokeWidth: "5" }),
          React.createElement("path", { d: "M16.339,12.661 L11.339,12.661 L11.339,17.926 L16.339,17.926 L16.339,12.661 Z M15.339,16.926 L12.339,16.926 L12.339,13.661 L15.339,13.661 L15.339,16.926 Z", id: "Fill-64", fill: "#3C3C3B" }),
          React.createElement("path", { d: "M7.3215,17.9264 L7.3215,16.9114", id: "Stroke-65", stroke: "#3C3C3B", strokeWidth: "5" }),
          React.createElement("path", { d: "M7.3215,15.8014 L7.3215,14.7864", id: "Stroke-66", stroke: "#3C3C3B", strokeWidth: "5" }),
          React.createElement("path", { d: "M7.3215,13.6764 L7.3215,12.6614", id: "Stroke-67", stroke: "#3C3C3B", strokeWidth: "5" }),
          React.createElement("path", { d: "M7.3215,11.5514 L7.3215,10.5364", id: "Stroke-68", stroke: "#3C3C3B", strokeWidth: "5" }),
          React.createElement("path", { d: "M7.3215,9.4264 L7.3215,8.4114", id: "Stroke-69", stroke: "#3C3C3B", strokeWidth: "5" })
        );
      case 'connected-devices':
        return React.createElement(
          "g",
          { id: "Page-1", stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
          React.createElement(
            "g",
            { id: "Group-3" },
            React.createElement("path", { d: "M12.5798,15.8594 C13.9608,15.8594 15.0798,14.7404 15.0798,13.3594 C15.0798,11.9784 13.9608,10.8594 12.5798,10.8594 C11.1988,10.8594 10.0798,11.9784 10.0798,13.3594 C10.0798,14.7404 11.1988,15.8594 12.5798,15.8594", id: "Fill-20", fill: "#3C3C3B" }),
            React.createElement("path", { d: "M12.5801,17.8594 C10.0991,17.8594 8.0801,15.8404 8.0801,13.3594 C8.0801,10.8784 10.0991,8.8594 12.5801,8.8594 C15.0611,8.8594 17.0801,10.8784 17.0801,13.3594 C17.0801,15.8404 15.0611,17.8594 12.5801,17.8594 L12.5801,17.8594 Z", id: "Stroke-21", stroke: "#3C3C3B" }),
            React.createElement("path", { d: "M20.0798,5.8594 C21.4608,5.8594 22.5798,4.7404 22.5798,3.3594 C22.5798,1.9784 21.4608,0.8594 20.0798,0.8594 C18.6988,0.8594 17.5798,1.9784 17.5798,3.3594 C17.5798,4.7404 18.6988,5.8594 20.0798,5.8594", id: "Fill-22", fill: "#3C3C3B" }),
            React.createElement("path", { d: "M2.5798,10.8594 C3.9608,10.8594 5.0798,9.7404 5.0798,8.3594 C5.0798,6.9784 3.9608,5.8594 2.5798,5.8594 C1.1988,5.8594 0.0798,6.9784 0.0798,8.3594 C0.0798,9.7404 1.1988,10.8594 2.5798,10.8594", id: "Fill-23", fill: "#3C3C3B" }),
            React.createElement("path", { d: "M2.1246,8.3594 L8.5076,11.4384", id: "Stroke-24", stroke: "#3C3C3B" }),
            React.createElement("path", { d: "M20.0798,3.3594 L15.3188,9.8994", id: "Stroke-25", stroke: "#3C3C3B" })
          )
        );
      case 'device-types':
        return React.createElement(
          "g",
          { id: "Page-1", stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
          React.createElement(
            "g",
            { id: "Group-2", transform: "translate(0.000000, 1.000000)" },
            React.createElement("path", { d: "M18.988,18.976 L0.5,18.976 L0.5,0.488 L18.988,0.488 L18.988,18.976 Z", id: "Stroke-13", stroke: "#3C3C3B" }),
            React.createElement("path", { d: "M2.3746,2.2473 L3.6136,2.2473", id: "Stroke-15", stroke: "#3C3C3B" }),
            React.createElement("path", { d: "M4.1246,2.2473 L5.3636,2.2473", id: "Stroke-16", stroke: "#3C3C3B" }),
            React.createElement("path", { d: "M15.8746,2.2473 L17.1136,2.2473", id: "Stroke-17", stroke: "#3C3C3B" }),
            React.createElement("path", { d: "M14.7683,9.9819 C14.7683,12.7569 12.5193,15.0059 9.7443,15.0059 C6.9693,15.0059 4.7203,12.7569 4.7203,9.9819 C4.7203,7.2069 6.9693,4.9579 9.7443,4.9579 C12.5193,4.9579 14.7683,7.2069 14.7683,9.9819", id: "Fill-18", fill: "#3C3C3B" }),
            React.createElement("path", { d: "M6.3668,9.9819 C6.3668,8.1169 7.8788,6.6039 9.7438,6.6039", id: "Stroke-19", stroke: "#FFFFFF" })
          )
        );
      case 'dot-empty':
        return React.createElement(
          "g",
          { id: "Page-1", stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
          React.createElement(
            "g",
            { id: "Artboard-4-Copy", transform: "translate(-914.000000, -466.000000)", stroke: "#3C3C3B" },
            React.createElement("ellipse", { id: "Oval-10-Copy", cx: "918.5", cy: "470.5", rx: "3.5", ry: "3.5" })
          )
        );
      case 'dot-full':
        return React.createElement(
          "g",
          { id: "Page-1", stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
          React.createElement(
            "g",
            { id: "Artboard-4-Copy", transform: "translate(-894.000000, -466.000000)", stroke: "#3C3C3B", fill: "#3C3C3B" },
            React.createElement("ellipse", { id: "Oval-10-Copy", cx: "898.5", cy: "470.5", rx: "3.5", ry: "3.5" })
          )
        );
      case 'horizontal-seperator':
        return React.createElement(
          "g",
          { id: "Page-1", stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
          React.createElement("path", { d: "M0.2509,3.3819 L21.1429,3.3819", id: "Stroke-58", stroke: "#3C3C3B", strokeWidth: "5" })
        );
      case 'line-chart':
        return React.createElement(
          "g",
          { id: "Page-1", stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
          React.createElement(
            "g",
            { id: "Group-6" },
            React.createElement("path", { d: "M8.5723,14.9209 C9.9533,14.9209 11.0723,13.8019 11.0723,12.4209 C11.0723,11.0399 9.9533,9.9209 8.5723,9.9209 C7.1913,9.9209 6.0723,11.0399 6.0723,12.4209 C6.0723,13.8019 7.1913,14.9209 8.5723,14.9209", id: "Fill-26", fill: "#3C3C3B" }),
            React.createElement("path", { d: "M15.0627,5.5368 C16.4437,5.5368 17.5627,4.4178 17.5627,3.0368 C17.5627,1.6558 16.4437,0.5368 15.0627,0.5368 C13.6817,0.5368 12.5627,1.6558 12.5627,3.0368 C12.5627,4.4178 13.6817,5.5368 15.0627,5.5368", id: "Fill-27", fill: "#3C3C3B" }),
            React.createElement("path", { d: "M20.936,10.6948 C22.317,10.6948 23.436,9.5758 23.436,8.1948 C23.436,6.8138 22.317,5.6948 20.936,5.6948 C19.555,5.6948 18.436,6.8138 18.436,8.1948 C18.436,9.5758 19.555,10.6948 20.936,10.6948", id: "Fill-28", fill: "#3C3C3B" }),
            React.createElement("path", { d: "M2.6535,7.2864 C4.0345,7.2864 5.1535,6.1674 5.1535,4.7864 C5.1535,3.4054 4.0345,2.2864 2.6535,2.2864 C1.2725,2.2864 0.1535,3.4054 0.1535,4.7864 C0.1535,6.1674 1.2725,7.2864 2.6535,7.2864", id: "Fill-29", fill: "#3C3C3B" }),
            React.createElement("path", { d: "M2.6535,4.7864 L8.5725,12.4204 L15.0625,3.0724 L20.9365,8.1944", id: "Stroke-30", stroke: "#3C3C3B" })
          )
        );
      case 'overview':
        return React.createElement(
          "g",
          { id: "Page-1", stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
          React.createElement(
            "g",
            { id: "Group", stroke: "#3C3C3B" },
            React.createElement("path", { d: "M13.3303,13.0401 C10.5043,15.8661 5.9223,15.8661 3.0953,13.0401 C0.2693,10.2141 0.2693,5.6321 3.0953,2.8051 C5.9223,-0.0209 10.5043,-0.0209 13.3303,2.8051 C16.1563,5.6321 16.1563,10.2141 13.3303,13.0401 L13.3303,13.0401 Z", id: "Stroke-59" }),
            React.createElement("path", { d: "M3.0956,13.0401 L13.3306,2.8051", id: "Stroke-60" }),
            React.createElement("path", { d: "M3.0956,2.8055 L13.3306,13.0405", id: "Stroke-61" }),
            React.createElement("path", { d: "M10.8447,10.5545 C8.0187,13.3805 4.5487,14.4935 3.0957,13.0405 C1.6417,11.5865 2.7547,8.1175 5.5807,5.2905 C8.4077,2.4645 11.8767,1.3515 13.3307,2.8055 C14.7837,4.2585 13.6707,7.7285 10.8447,10.5545 L10.8447,10.5545 Z", id: "Stroke-62" })
          )
        );
      case 'paste':
        return React.createElement(
          "g",
          { id: "Group-10" },
          React.createElement("path", { id: "Shape", className: "st0", d: "M8.7,3.2V0H0v12.8h3.3V16H12V3.2H8.7L8.7,3.2z M10.9,14.9H4.4V4.3h6.5V14.9L10.9,14.9z" }),
          React.createElement("rect", { id: "Rectangle-path", x: "5.5", y: "6.4", className: "st0", width: "4.4", height: "0.5" }),
          React.createElement("rect", { id: "Rectangle-path_1_", x: "5.5", y: "7.5", className: "st0", width: "4.4", height: "0.5" }),
          React.createElement("rect", { id: "Rectangle-path_2_", x: "5.5", y: "8.5", className: "st0", width: "4.4", height: "0.5" }),
          React.createElement("rect", { id: "Rectangle-path_3_", x: "5.5", y: "9.6", className: "st0", width: "2.2", height: "0.5" })
        );
      case 'pie-chart':
        return React.createElement(
          "g",
          { id: "Page-1", stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
          React.createElement(
            "g",
            { id: "Group-8", transform: "translate(0.000000, -2.000000)" },
            React.createElement("path", { d: "M10.7812,4.6677 C14.9622,4.6677 18.3512,8.0567 18.3512,12.2377 C18.3512,16.4177 14.9622,19.8067 10.7812,19.8067 C6.6002,19.8067 3.2112,16.4177 3.2112,12.2377", id: "Stroke-70", stroke: "#3C3C3B", strokeWidth: "5" }),
            React.createElement("path", { d: "M9.5314,0.5909 L9.5314,9.7879", id: "Fill-71", fill: "#3C3C3B" }),
            React.createElement(
              "g",
              { id: "Group-75", transform: "translate(0.000000, 1.000000)" },
              React.createElement(
                "mask",
                { id: "mask-2", fill: "white" },
                React.createElement("use", { href: "#path-1" })
              ),
              React.createElement("g", { id: "Clip-74" }),
              React.createElement("path", { d: "M3.2116,11.2372 C3.2116,7.0562 6.6006,3.6672 10.7816,3.6672", id: "Stroke-73", stroke: "#3C3C3B", strokeWidth: "5", mask: "url(#mask-2)" })
            )
          )
        );
      case 'line-graph2':
        return React.createElement(
          "g",
          { id: "Group" },
          React.createElement("path", { d: "M19.6049314,1 L8.39641356,12.2071729 L3.58565424,7.39641356 L2,7.98206781 L8.39641356,14.3771365 L19.6049314,3.16996358 L24.4156907,7.98206781 L26.0013449,7.39641356 L19.6049314,1 Z", id: "Page-1" }),
          React.createElement("circle", { id: "Oval-10-Copy", cx: "8.5", cy: "12.5", r: "2.5" }),
          React.createElement("circle", { id: "Oval-10-Copy-2", cx: "19.5", cy: "2.5", r: "2.5" }),
          React.createElement("circle", { id: "Oval-10-Copy-3", cx: "25.5", cy: "7.5", r: "2.5" }),
          React.createElement("circle", { id: "Oval-10", cx: "2.5", cy: "7.5", r: "2.5" })
        );
      case 'storage-consumption':
        return React.createElement(
          "g",
          { id: "Page-1", stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
          React.createElement(
            "g",
            { id: "Group-4" },
            React.createElement("path", { d: "M18.08,5.107 L0.744,5.107 L0.744,0.107 L18.08,0.107 L18.08,5.107 Z", id: "Fill-31", fill: "#3C3C3B" }),
            React.createElement("path", { d: "M2.0424,2.6068 L3.2814,2.6068", id: "Stroke-32", stroke: "#FFFFFF" }),
            React.createElement("path", { d: "M3.7924,2.6068 L5.0314,2.6068", id: "Stroke-33", stroke: "#FFFFFF" }),
            React.createElement("path", { d: "M15.5424,2.6068 L16.7814,2.6068", id: "Stroke-34", stroke: "#FFFFFF" }),
            React.createElement("path", { d: "M18.08,9.197 L0.744,9.197 L0.744,6.197 L18.08,6.197 L18.08,9.197 Z", id: "Fill-35", fill: "#3C3C3B" }),
            React.createElement("path", { d: "M2.0424,7.697 L3.2814,7.697", id: "Stroke-36", stroke: "#FFFFFF" }),
            React.createElement("path", { d: "M3.7924,7.697 L5.0314,7.697", id: "Stroke-37", stroke: "#FFFFFF" }),
            React.createElement("path", { d: "M15.5424,7.697 L16.7814,7.697", id: "Stroke-38", stroke: "#FFFFFF" }),
            React.createElement("path", { d: "M18.08,15.287 L0.744,15.287 L0.744,10.287 L18.08,10.287 L18.08,15.287 Z", id: "Fill-39", fill: "#3C3C3B" }),
            React.createElement("path", { d: "M2.0424,12.7873 L3.2814,12.7873", id: "Stroke-40", stroke: "#FFFFFF" }),
            React.createElement("path", { d: "M3.7924,12.7873 L5.0314,12.7873", id: "Stroke-41", stroke: "#FFFFFF" }),
            React.createElement("path", { d: "M15.5424,12.7873 L16.7814,12.7873", id: "Stroke-42", stroke: "#FFFFFF" })
          )
        );
      case 'rule':
        return React.createElement(
          "g",
          { id: "Page-1", stroke: "none", strokeWidth: "1", fill: "#3C3C3B", fillRule: "evenodd" },
          React.createElement("rect", { id: "Rectangle-path", x: "0.00076076233", y: "18.2612552", width: "12.9984785", height: "1.27096234" }),
          React.createElement("path", { d: "M0.00076076233,0.467782451 L0.00076076233,3.00970713 L0.00076076233,16.9902929 L12.9992392,16.9902929 L12.9992392,3.00970713 L12.9992392,0.467782451 L0.00076076233,0.467782451 L0.00076076233,0.467782451 Z M11.6993914,15.7193305 L1.30060861,15.7193305 L1.30060861,4.28066947 L11.6993914,4.28066947 L11.6993914,15.7193305 L11.6993914,15.7193305 Z", id: "Shape" }),
          React.createElement("rect", { id: "Rectangle-path", x: "2.60045646", y: "9.36451883", width: "7.79908709", height: "0.63548117" }),
          React.createElement("rect", { id: "Rectangle-path", x: "2.60045646", y: "6.82259415", width: "7.79908709", height: "0.63548117" }),
          React.createElement("rect", { id: "Rectangle-path", x: "2.60045646", y: "11.9064435", width: "7.79908709", height: "0.63548117" })
        );
      case 'deleted-rule':
        return React.createElement(
          "g",
          { id: "Page-1" },
          React.createElement("polygon", { id: "Fill-1", className: "st0", points: "3,17.1 14,17.1 14,16 3,16 \t\t\t" }),
          React.createElement("polygon", { id: "Fill-1-Copy", className: "st0", points: "0.8,15.8 15.8,0.8 15.1,0.1 0.1,15.1 \t\t\t" }),
          React.createElement("polygon", { id: "Fill-2", className: "st0", points: "3,1 3,3.1 3,10.7 4.1,9.6 4.1,4.2 9.5,4.2 12.7,1 \t\t\t" }),
          React.createElement("polygon", { id: "Fill-3", className: "st0", points: "12.9,5.1 12.9,13.8 4.2,13.8 3.1,14.9 14,14.9 14,4 \t\t\t" })
        );
      case 'star':
        return React.createElement(
          "g",
          null,
          React.createElement("path", { d: "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" })
        );
      case 'star-outline':
        return React.createElement(
          "g",
          null,
          React.createElement("path", { d: "M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" })
        );
      case 'text-based':
        return React.createElement(
          "g",
          { id: "Page-1", stroke: "none", strokeWidth: "1", fillRule: "evenodd" },
          React.createElement("path", { d: "M10.2511681,9.97622275 L7.7465479,4.01586084 L5.27363179,9.97622275 L10.2511681,9.97622275 Z M0.909040527,15.535 L0.909040527,15.1439833 C1.46562557,15.0805749 1.88305809,14.8692167 2.16135061,14.5099023 C2.43964313,14.1505879 2.91696049,13.1748174 3.59331699,11.5825614 L8.1058605,0.96170376 L8.5285812,0.96170376 L13.9182702,13.2311722 C14.2775846,14.0484363 14.5646795,14.5539347 14.7795636,14.7476827 C14.9944477,14.9414306 15.355518,15.0735295 15.8627854,15.1439833 L15.8627854,15.535 L10.3568482,15.535 L10.3568482,15.1439833 C10.9909325,15.0876203 11.3995584,15.0189289 11.5827383,14.937907 C11.7659182,14.8568851 11.8575067,14.6578561 11.8575067,14.340814 C11.8575067,14.2351333 11.8222804,14.0484335 11.7518266,13.7807091 C11.6813728,13.5129846 11.5827389,13.2311736 11.4559221,12.9352677 L10.5576406,10.8533682 L4.89318315,10.8533682 C4.32955273,12.2694896 3.99314087,13.1342971 3.88393748,13.4478165 C3.77473408,13.761336 3.7201332,14.0096819 3.7201332,14.1928618 C3.7201332,14.5592215 3.86808397,14.8128514 4.16398994,14.953759 C4.34716983,15.0383036 4.69238828,15.1017111 5.19965566,15.1439833 L5.19965566,15.535 L0.909040527,15.535 Z", id: "A" })
        );
      case 'traffic-consumption':
        return React.createElement(
          "g",
          { id: "Page-1", stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
          React.createElement(
            "g",
            { id: "Group-5", transform: "translate(0.000000, 1.000000)" },
            React.createElement("path", { d: "M0.6431,4.3771 L5.8771,4.3771", id: "Stroke-43", stroke: "#3C3C3B" }),
            React.createElement("path", { d: "M17.5295,4.1658 L17.8035,4.4398 L14.8365,7.4068", id: "Stroke-44", stroke: "#3C3C3B" }),
            React.createElement("path", { d: "M14.8365,1.4728 L17.5295,4.1658", id: "Stroke-45", stroke: "#3C3C3B" }),
            React.createElement("path", { d: "M5.7998,10.0021 L1.7398,10.0021", id: "Stroke-46", stroke: "#3C3C3B" }),
            React.createElement("path", { d: "M4.2269,12.9064 L1.2599,9.9394 L4.2269,6.9724", id: "Stroke-47", stroke: "#3C3C3B" }),
            React.createElement("path", { d: "M18.5091,10.0021 L8.7401,10.0021", id: "Stroke-48", stroke: "#3C3C3B" }),
            React.createElement("path", { d: "M8.8832,11.9352 C8.5252,10.6882 8.3002,8.9172 8.3002,6.9462 C8.3002,4.9752 8.5252,3.2042 8.8832,1.9572", id: "Stroke-49", stroke: "#3C3C3B" }),
            React.createElement("path", { d: "M7.6331,0.1129 C6.6201,0.1129 5.8001,3.1719 5.8001,6.9459 C5.8001,10.7199 6.6201,13.7799 7.6331,13.7799", id: "Stroke-50", stroke: "#3C3C3B" }),
            React.createElement("path", { d: "M8.8832,11.9352 C9.2112,13.0762 9.6492,13.7792 10.1332,13.7792 C11.1452,13.7792 11.9662,10.7202 11.9662,6.9462 C11.9662,3.1722 11.1452,0.1132 10.1332,0.1132 C9.6492,0.1132 9.2112,0.8162 8.8832,1.9572", id: "Stroke-51", stroke: "#3C3C3B" }),
            React.createElement("path", { d: "M8.8832,1.9573 C8.5252,3.2043 8.3002,4.9753 8.3002,6.9463 C8.3002,8.9173 8.5252,10.6883 8.8832,11.9353", id: "Stroke-52", stroke: "#3C3C3B" }),
            React.createElement("path", { d: "M10.1331,0.1129 L7.6331,0.1129", id: "Stroke-53", stroke: "#3C3C3B" }),
            React.createElement("path", { d: "M10.1331,13.7796 L7.6331,13.7796", id: "Stroke-54", stroke: "#3C3C3B" }),
            React.createElement("path", { d: "M8.6431,4.3771 L17.8031,4.4391", id: "Stroke-55", stroke: "#3C3C3B" }),
            React.createElement("path", { d: "M8.6939,11.6981 C8.6609,11.6841 8.6269,11.6701 8.5939,11.6561 C8.5899,11.6631 8.5859,11.6701 8.5819,11.6771 C8.6239,11.6791 8.6529,11.6941 8.6939,11.6981", id: "Fill-56", fill: "#3C3C3B" }),
            React.createElement("path", { d: "M8.7032,12.0734 L8.7032,12.0734 C8.1662,10.7214 7.8712,8.9004 7.8712,6.9464 C7.8712,4.9924 8.1662,3.1714 8.7032,1.8194 L8.7032,1.8194 C9.0092,1.0464 9.3792,0.4804 9.8072,0.1134 L7.6402,0.1134 L7.6402,0.3034 L7.6402,0.6134 C7.1062,0.6134 5.8002,2.8324 5.8002,6.9464 C5.8002,11.0604 7.1062,13.2794 7.6402,13.2794 L7.6402,13.4864 L7.6402,13.7794 L9.8072,13.7794 C9.3792,13.4124 9.0092,12.8464 8.7032,12.0734", id: "Fill-57", fill: "#3C3C3B" })
          )
        );
      case 'BrokenCard':
        return React.createElement(
          "g",
          { id: "Group-18" },
          React.createElement("polygon", { points: "30.6667 22.0557 37.2497 28.6737 39.4177 26.4937 30.6667 17.6947 15.3337 33.1107 8.7507 26.4937 6.5827 28.6737 15.3337 37.4727" }),
          React.createElement("path", { d: "M45.2,22.4 C44.952,22.4 44.711,22.377 44.467,22.363 L44.467,41.458 L1.533,41.458 L1.533,13.708 L33.518,13.708 C33.184,12.597 33,11.42 33,10.2 C33,8.722 33.276,7.311 33.758,6 L0,6 L0,12.167 L0,43 L46,43 L46,22.36 C45.734,22.377 45.47,22.4 45.2,22.4" }),
          React.createElement("polygon", { points: "48.2857 6 45.1577 9.128 42.0297 6 40.9997 7.03 44.1277 10.158 40.9997 13.286 42.0297 14.316 45.1577 11.188 48.2857 14.316 49.3157 13.286 46.1877 10.158 49.3157 7.03" }),
          React.createElement("path", { d: "M35,10.2 C35,15.833 39.567,20.4 45.2,20.4 C50.833,20.4 55.4,15.833 55.4,10.2 C55.4,4.567 50.833,0 45.2,0 C39.567,0 35,4.567 35,10.2 M45.2,18.486 C40.631,18.486 36.914,14.769 36.914,10.2 C36.914,5.631 40.631,1.914 45.2,1.914 C49.769,1.914 53.486,5.631 53.486,10.2 C53.486,14.769 49.769,18.486 45.2,18.486" })
        );
      case 'Usage':
        return React.createElement(
          "g",
          null,
          React.createElement("path", { d: "M19.35 10.04c-.68-3.45-3.71-6.04-7.35-6.04-2.89 0-5.4 1.64-6.65 4.04-3.01.32-5.35 2.87-5.35 5.96 0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zm-.35 7.96h-13c-2.21 0-4-1.79-4-4s1.79-4 4-4h.71c.66-2.31 2.77-4 5.29-4 3.04 0 5.5 2.46 5.5 5.5v.5h1.5c1.66 0 3 1.34 3 3s-1.34 3-3 3z" })
        );
      case 'Alert':
        return React.createElement(
          "g",
          null,
          React.createElement("path", { d: "M14.4 6l-.4-2h-9v17h2v-7h5.6l.4 2h7v-10z" })
        );
      case 'Basic':
        return React.createElement(
          "g",
          null,
          React.createElement("path", { d: "M19.35 10.04c-.68-3.45-3.71-6.04-7.35-6.04-2.89 0-5.4 1.64-6.65 4.04-3.01.32-5.35 2.87-5.35 5.96 0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zm-.35 7.96h-13c-2.21 0-4-1.79-4-4s1.79-4 4-4h.71c.66-2.31 2.77-4 5.29-4 3.04 0 5.5 2.46 5.5 5.5v.5h1.5c1.66 0 3 1.34 3 3s-1.34 3-3 3z" })
        );
      case 'Devices':
        return React.createElement(
          "g",
          null,
          React.createElement("path", { d: "M15 9h-6v6h6v-6zm-2 4h-2v-2h2v2zm8-2v-2h-2v-2c0-1.1-.9-2-2-2h-2v-2h-2v2h-2v-2h-2v2h-2c-1.1 0-2 .9-2 2v2h-2v2h2v2h-2v2h2v2c0 1.1.9 2 2 2h2v2h2v-2h2v2h2v-2h2c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2zm-4 6h-10v-10h10v10z" })
        );
      case 'favorite':
        return React.createElement(
          "g",
          null,
          React.createElement("path", { d: "M12 21.35l-1.45-1.32c-5.15-4.67-8.55-7.75-8.55-11.53 0-3.08 2.42-5.5 5.5-5.5 1.74 0 3.41.81 4.5 2.09 1.09-1.28 2.76-2.09 4.5-2.09 3.08 0 5.5 2.42 5.5 5.5 0 3.78-3.4 6.86-8.55 11.54l-1.45 1.31z" })
        );
      case 'favorite-outline':
        return React.createElement(
          "g",
          null,
          React.createElement("path", { d: "M16.5 3c-1.74 0-3.41.81-4.5 2.09-1.09-1.28-2.76-2.09-4.5-2.09-3.08 0-5.5 2.42-5.5 5.5 0 3.78 3.4 6.86 8.55 11.54l1.45 1.31 1.45-1.32c5.15-4.67 8.55-7.75 8.55-11.53 0-3.08-2.42-5.5-5.5-5.5zm-4.4 15.55l-.1.1-.1-.1c-4.76-4.31-7.9-7.16-7.9-10.05 0-2 1.5-3.5 3.5-3.5 1.54 0 3.04.99 3.57 2.36h1.87c.52-1.37 2.02-2.36 3.56-2.36 2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" })
        );
      case 'Sample':
        return React.createElement(
          "g",
          null,
          React.createElement("path", { d: "M11.99 2c-5.52 0-9.99 4.48-9.99 10s4.47 10 9.99 10c5.53 0 10.01-4.48 10.01-10s-4.48-10-10.01-10zm.01 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5h-10.22c.8 2.04 2.78 3.5 5.11 3.5z" })
        );
      case 'Custom':
        return React.createElement(
          "g",
          null,
          React.createElement("path", { d: "M20.5 11h-1.5v-4c0-1.1-.9-2-2-2h-4v-1.5c0-1.38-1.12-2.5-2.5-2.5s-2.5 1.12-2.5 2.5v1.5h-4c-1.1 0-1.99.9-1.99 2v3.8h1.49c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7h-1.5v3.8c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7v1.5h3.8c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5s-1.12-2.5-2.5-2.5z" })
        );
      case 'Test':
        return React.createElement(
          "g",
          null,
          React.createElement("path", { d: "M14.4 6l-.4-2h-9v17h2v-7h5.6l.4 2h7v-10z" })
        );
      case 'camera':
        return React.createElement(
          "g",
          null,
          React.createElement("path", { d: "M9.4 10.5l4.77-8.26c-.7-.15-1.42-.24-2.17-.24-2.4 0-4.6.85-6.32 2.25l3.66 6.35.06-.1zm12.14-1.5c-.92-2.92-3.15-5.26-6-6.34l-3.66 6.34h9.66zm.26 1h-7.49l.29.5 4.76 8.25c1.64-1.78 2.64-4.14 2.64-6.75 0-.69-.07-1.35-.2-2zm-13.26 2l-3.9-6.75c-1.63 1.78-2.64 4.14-2.64 6.75 0 .69.07 1.35.2 2h7.49l-1.15-2zm-6.08 3c.92 2.92 3.15 5.26 6 6.34l3.66-6.34h-9.66zm11.27 0l-3.9 6.76c.7.15 1.42.24 2.17.24 2.4 0 4.6-.85 6.32-2.25l-3.66-6.35-.93 1.6z" })
        );
      case 'map':
        return React.createElement(
          "g",
          null,
          React.createElement("path", { d: "M20.5 3l-.16.03-5.34 2.07-6-2.1-5.64 1.9c-.21.07-.36.25-.36.48v15.12c0 .28.22.5.5.5l.16-.03 5.34-2.07 6 2.1 5.64-1.9c.21-.07.36-.25.36-.48v-15.12c0-.28-.22-.5-.5-.5zm-5.5 16l-6-2.11v-11.89l6 2.11v11.89z" })
        );
      case 'menu':
        return React.createElement(
          "g",
          null,
          React.createElement("path", { d: "M3 18h18v-2h-18v2zm0-5h18v-2h-18v2zm0-7v2h18v-2h-18z" })
        );
      case 'CRITICAL':
        return React.createElement(
          "g",
          null,
          React.createElement("path", { d: "M12 2c-5.53 0-10 4.47-10 10s4.47 10 10 10 10-4.47 10-10-4.47-10-10-10zm5 13.59l-1.41 1.41-3.59-3.59-3.59 3.59-1.41-1.41 3.59-3.59-3.59-3.59 1.41-1.41 3.59 3.59 3.59-3.59 1.41 1.41-3.59 3.59 3.59 3.59z" })
        );
      case 'GOOD':
        return React.createElement(
          "g",
          null,
          React.createElement("path", { d: "M9 16.17l-4.17-4.17-1.42 1.41 5.59 5.59 12-12-1.41-1.41z" })
        );
      case 'FAIR':
        return React.createElement(
          "g",
          null,
          React.createElement("path", { d: "M9 16.17l-4.17-4.17-1.42 1.41 5.59 5.59 12-12-1.41-1.41z" })
        );
      case 'radio-button-on':
        return React.createElement(
          "g",
          null,
          React.createElement("path", { d: "M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" })
        );
      case 'check':
        return React.createElement(
          "g",
          null,
          React.createElement("path", { d: "M9 16.17l-4.17-4.17-1.42 1.41 5.59 5.59 12-12-1.41-1.41z" })
        );
      case 'search':
        return React.createElement(
          "g",
          null,
          React.createElement("path", { d: "M15.5 14h-.79l-.28-.27c.98-1.14 1.57-2.62 1.57-4.23 0-3.59-2.91-6.5-6.5-6.5s-6.5 2.91-6.5 6.5 2.91 6.5 6.5 6.5c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99 1.49-1.49-4.99-5zm-6 0c-2.49 0-4.5-2.01-4.5-4.5s2.01-4.5 4.5-4.5 4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5z" })
        );
      case 'dots':
        return React.createElement(
          "g",
          null,
          React.createElement("path", { d: "M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" })
        );
      case 'arrow-drop-up':
        return React.createElement(
          "g",
          null,
          React.createElement("path", { d: "M7 14l5-5 5 5z" })
        );
      case 'arrow-drop-down':
        return React.createElement(
          "g",
          null,
          React.createElement("path", { d: "M7 10l5 5 5-5z" })
        );
      case 'more-vert':
        return React.createElement(
          "g",
          null,
          React.createElement("path", { d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" })
        );
      case 'delete':
        // trashicon from design team
        return React.createElement(
          "g",
          null,
          React.createElement("path", { d: "M4.46428571,1.5 L10.4166667,1.5 L10.4166667,0 L4.46428571,0 L4.46428571,1.5 Z M0,2.24985 L0,5.99985 L0.744047619,5.99985 L0.744047619,20.99985 L14.1369048,20.99985 L14.1369048,5.99985 L14.8809524,5.99985 L14.8809524,2.24985 L0,2.24985 Z M2.23214286,7.49985 L12.6488095,7.49985 L12.6488095,19.49985 L2.23214286,19.49985 L2.23214286,7.49985 Z M3.7202381,18 L4.46428571,18 L4.46428571,8.99925 L3.7202381,8.99925 L3.7202381,18 Z M5.95238095,18 L6.69642857,18 L6.69642857,8.99925 L5.95238095,8.99925 L5.95238095,18 Z M8.18452381,18 L8.92857143,18 L8.92857143,8.99925 L8.18452381,8.99925 L8.18452381,18 Z M10.4166667,18 L11.1607143,18 L11.1607143,8.99925 L10.4166667,8.99925 L10.4166667,18 Z" })
        );
      case 'fullscreen-exit':
        return React.createElement(
          "g",
          null,
          React.createElement("path", { d: "M5 16h3v3h2v-5h-5v2zm3-8h-3v2h5v-5h-2v3zm6 11h2v-3h3v-2h-5v5zm2-11v-3h-2v5h5v-2h-3z" })
        );
      case 'highlight-remove':
        return React.createElement(
          "g",
          null,
          React.createElement("path", { d: "M14.59 8l-2.59 2.59-2.59-2.59-1.41 1.41 2.59 2.59-2.59 2.59 1.41 1.41 2.59-2.59 2.59 2.59 1.41-1.41-2.59-2.59 2.59-2.59-1.41-1.41zm-2.59-6c-5.53 0-10 4.47-10 10s4.47 10 10 10 10-4.47 10-10-4.47-10-10-10zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" })
        );
      case 'fullscreen':
        // fullscreen icon from design team
        return React.createElement(
          "g",
          null,
          React.createElement("path", { d: "M0,-0.0002375 L0,3.16722083 L0,18.9997625 L24,18.9997625 L24,-0.0002375 L0,-0.0002375 Z M1.6,4.7497625 L22.4,4.7497625 L22.4,17.4164292 L1.6,17.4164292 L1.6,4.7497625 Z M14.1656,14.0180417 L19.2,9.03608333 L19.2,12.6666667 L20.8,12.6666667 L20.8,6.33333333 L14.4,6.33333333 L14.4,7.91666667 L18.0688,7.91666667 L13.0344,12.898625 L14.1656,14.0180417 Z" })
        );
      case 'remove':
        return React.createElement(
          "g",
          null,
          React.createElement("path", { d: "M19 13h-14v-2h14v2z" })
        );
      case 'undo':
        return React.createElement(
          "g",
          null,
          React.createElement("path", { d: "M12.5 8c-2.65 0-5.05.99-6.9 2.6l-3.6-3.6v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78c-1.39-4.19-5.32-7.22-9.97-7.22z" })
        );
      case 'settings':
        return React.createElement(
          "g",
          null,
          React.createElement("path", { d: "M11,14 C9.345,14 8,12.657 8,11 C8,9.343 9.345,8 11,8 C12.655,8 14,9.343 14,11 C14,12.657 12.655,14 11,14 M19.433,11 C19.433,10.549 19.388,10.11 19.319,9.678 L22,7.333 L19.723,3.595 L16.526,4.639 C15.762,3.975 14.877,3.449 13.909,3.092 L13.2,0 L8.8,0 L8.091,3.092 C7.123,3.449 6.238,3.975 5.474,4.64 L2.277,3.595 L0,7.333 L2.68,9.679 C2.612,10.11 2.567,10.549 2.567,11 C2.567,11.451 2.612,11.89 2.68,12.321 L0,14.667 L2.278,18.405 L5.474,17.36 C6.238,18.025 7.123,18.551 8.091,18.908 L8.8,22 L13.2,22 L13.909,18.908 C14.877,18.551 15.762,18.025 16.526,17.361 L19.722,18.405 L22,14.667 L19.319,12.322 C19.388,11.89 19.433,11.451 19.433,11" })
        );
      case 'add-circle-outline':
        return React.createElement(
          "g",
          null,
          React.createElement("path", { d: "M13 7h-2v4h-4v2h4v4h2v-4h4v-2h-4v-4zm-1-5c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" })
        );
      case 'save':
        return React.createElement(
          "g",
          null,
          React.createElement("path", { d: "M17 3h-12c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-12l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10h-10v-4h10v4z" })
        );
      case 'restore':
        return React.createElement(
          "g",
          null,
          React.createElement("path", { d: "M13 3c-4.97 0-9 4.03-9 9h-3l3.89 3.89.07.14 4.04-4.03h-3c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42c1.63 1.63 3.87 2.64 6.36 2.64 4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08v-4.25h-1.5z" })
        );
      case 'apps':
        return React.createElement(
          "g",
          null,
          React.createElement("path", { d: "M4 8h4v-4h-4v4zm6 12h4v-4h-4v4zm-6 0h4v-4h-4v4zm0-6h4v-4h-4v4zm6 0h4v-4h-4v4zm6-10v4h4v-4h-4zm-6 4h4v-4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z" })
        );
      case 'arrow-down':
        return React.createElement(
          "g",
          null,
          React.createElement("path", { d: "M7.41 7.84l4.59 4.58 4.59-4.58 1.41 1.41-6 6-6-6z" })
        );
      case 'arrow-up':
        return React.createElement(
          "g",
          null,
          React.createElement("path", { d: "M7.41 15.41l4.59-4.58 4.59 4.58 1.41-1.41-6-6-6 6z" })
        );
      case 'info':
        return React.createElement(
          "g",
          null,
          React.createElement("path", { d: "M11 17h2v-6h-2v6zm1-15c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-11h2v-2h-2v2z" })
        );
      case 'date':
        return React.createElement(
          "g",
          { fill: "#1D394D", fillRule: "evenodd" },
          React.createElement("path", { d: "M13 1V0h-2v1H5V0H3v1H0v15h16V1h-3zm1 13H2V5h12v9z" }),
          React.createElement("path", { d: "M4 7h2v2H4V7zm6 0h2v2h-2V7zM7 7h2v2H7V7zm-3 3h2v2H4v-2zm6 0h2v2h-2v-2zm-3 0h2v2H7v-2z" })
        );
      case 'blueInfo':
        return React.createElement(
          "g",
          null,
          React.createElement("path", { fill: "#5C91CC", d: "M11,0C4.9,0,0,4.9,0,11s4.9,11,11,11s11-4.9,11-11S17.1,0,11,0z M12.8,18.2H9.2V8.9h3.6V18.2z M12.8,7.4H9.2 V4.3h3.6V7.4z" })
        );
      case 'dashboard':
        return React.createElement(
          "g",
          null,
          React.createElement("path", { d: "M3 13h8v-10h-8v10zm0 8h8v-6h-8v6zm10 0h8v-10h-8v10zm0-18v6h8v-6h-8z" })
        );
      case 'grade':
        return React.createElement(
          "g",
          null,
          React.createElement("path", { d: "M12 17.27l6.18 3.73-1.64-7.03 5.46-4.73-7.19-.61-2.81-6.63-2.81 6.63-7.19.61 5.46 4.73-1.64 7.03z" })
        );
      case 'lock':
        return React.createElement(
          "g",
          null,
          React.createElement("path", { d: "M18 8h-1v-2c0-2.76-2.24-5-5-5s-5 2.24-5 5v2h-1c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9h-6.2v-2c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" })
        );
      case 'location':
        return React.createElement(
          "g",
          null,
          React.createElement("path", { d: "M12 2c-3.87 0-7 3.13-7 7 0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" })
        );
      case 'play-arrow':
        return React.createElement(
          "g",
          null,
          React.createElement("path", { d: "M8 5v14l11-7z" })
        );
      case 'circle-filled':
        return React.createElement(
          "g",
          null,
          React.createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" })
        );
      case 'sync':
        return React.createElement(
          "g",
          null,
          React.createElement("path", { d: "M12 4v-3l-4 4 4 4v-3c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46c.78-1.23 1.24-2.69 1.24-4.26 0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8l-1.46-1.46c-.78 1.23-1.24 2.69-1.24 4.26 0 4.42 3.58 8 8 8v3l4-4-4-4v3z" })
        );
      case 'refresh':
        // refresh icon from design team
        return React.createElement(
          "g",
          null,
          React.createElement("path", { d: "M8.88679436,20.5188676 C4.80331235,20.5188676 1.48113239,17.1966876 1.48113239,13.1132056 C1.48113239,9.02972363 4.80331235,5.70754368 8.88679436,5.70754368 L13.7641633,5.70754368 L10.5849126,8.88679436 L11.6320732,9.93395496 L16.5990507,4.96697748 L11.6320732,0 L10.5849126,1.0471606 L13.7641633,4.22641128 L8.88679436,4.22641128 C3.98646784,4.22641128 0,8.21287912 0,13.1132056 C0,18.0135322 3.98646784,22 8.88679436,22 C11.260309,22 13.491635,21.0757734 15.1704985,19.3969098 L14.1233379,18.3497492 C12.7244084,19.7486788 10.8648467,20.5188676 8.88679436,20.5188676" })
        );
      case 'headset-mic':
        return React.createElement(
          "g",
          null,
          React.createElement("path", { d: "M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8h-4v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h4v1h-7v2h6c1.66 0 3-1.34 3-3v-10c0-4.97-4.03-9-9-9z" })
        );
      case 'bug-report':
        return React.createElement(
          "g",
          null,
          React.createElement("path", { d: "M20 8h-2.81c-.45-.78-1.07-1.45-1.82-1.96l1.63-1.63-1.41-1.41-2.17 2.17c-.46-.11-.93-.17-1.42-.17-.49 0-.96.06-1.41.17l-2.18-2.17-1.41 1.41 1.62 1.63c-.74.51-1.36 1.18-1.81 1.96h-2.81v2h2.09c-.05.33-.09.66-.09 1v1h-2v2h2v1c0 .34.04.67.09 1h-2.09v2h2.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3h2.81v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1h2.09v-2zm-6 8h-4v-2h4v2zm0-4h-4v-2h4v2z" })
        );
      case 'message':
        return React.createElement(
          "g",
          null,
          React.createElement("path", { d: "M20 2h-16c-1.1 0-1.99.9-1.99 2l-.01 18 4-4h14c1.1 0 2-.9 2-2v-12c0-1.1-.9-2-2-2zm-2 12h-12v-2h12v2zm0-3h-12v-2h12v2zm0-3h-12v-2h12v2z" })
        );
      case 'messenger':
        return React.createElement(
          "g",
          null,
          React.createElement("path", { d: "M20 2h-16c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2v-12c0-1.1-.9-2-2-2z" })
        );
      case 'instant-mix':
        return React.createElement(
          "g",
          null,
          React.createElement("path", { d: "M7 4H5v5h2V4zm12 0h-2v9h2V4zM3 13h2v7h2v-7h2v-2H3v2zm12-6h-2V4h-2v3H9v2h6V7zm-4 13h2v-9h-2v9zm4-5v2h2v3h2v-3h2v-2h-6z" })
        );
      case 'home':
        return React.createElement(
          "g",
          null,
          React.createElement("path", { d: "M10 20v-6h4v6h5v-8h3l-10-9-10 9h3v8z" })
        );
      case 'error':
        return React.createElement(
          "g",
          null,
          React.createElement("path", { d: "M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm1 15h-2v-2h2v2zm0-4h-2v-6h2v6z" })
        );
      case 'warn':
        return React.createElement(
          "g",
          null,
          React.createElement("path", { d: "M16.2,13.5L8.7,0.4c-0.3-0.5-0.7-0.5-1,0L0.1,13.5c-0.3,0.5,0,0.9,0.5,0.9h15.1 C16.3,14.3,16.5,13.9,16.2,13.5z M9.2,12.9h-2V11h2V12.9z M9.2,7.2L9,10.4H7.4L7.1,7.2V4.3h2.1V7.2z" })
        );
      case 'warning':
        return React.createElement(
          "g",
          { id: "Warning" },
          React.createElement("path", { d: "M62.5,10.5l-60,104h120L62.5,10.5z M62.5,18.504l53.074,91.996H9.426L62.5,18.504z" }),
          React.createElement("polygon", { points: "58.5,54.5 58.5,62.5 60.5,82.5 64.5,82.5 66.5,62.5 66.5,54.5" }),
          React.createElement("circle", { cx: "62.5", cy: "90.5", r: "4" })
        );

      // for demos
      case 'elevator':
        return React.createElement(
          "g",
          { id: "Page-1", stroke: "#3C3C3B", fill: "none", strokeWidth: "1", fillRule: "evenodd" },
          React.createElement(
            "g",
            { id: "Group-11" },
            React.createElement("path", { d: "M23.477,12.633 L8.609,12.633 L8.609,0.508 L23.477,0.508 L23.477,12.633 Z", id: "Stroke-5" }),
            React.createElement("path", { d: "M16.0428,12.633 L16.0428,0.508", id: "Stroke-6" }),
            React.createElement("path", { d: "M3.3297,10.0326 L3.3297,3.9696", id: "Stroke-7" }),
            React.createElement("path", { d: "M0.4254,6.4563 L3.3924,3.4893 L6.3594,6.4563", id: "Stroke-8" }),
            React.createElement("path", { d: "M28.7559,3.4895 L28.7559,9.5525", id: "Stroke-9" }),
            React.createElement("path", { d: "M31.6602,7.0658 L28.6932,10.0328 L25.7262,7.0658", id: "Stroke-10", s: true })
          )
        );
      case 'weatherService':
        return React.createElement(
          "g",
          { id: "Page-1", stroke: "none", strokeWidth: "1", fillRule: "evenodd" },
          React.createElement(
            "g",
            { id: "Group-10" },
            React.createElement("path", { d: "M19.5047,5.8701 C19.4827,5.8701 19.4627,5.8731 19.4407,5.8731 C19.0467,3.0931 16.6637,0.9531 13.7747,0.9531 C11.5457,0.9531 9.6187,2.2281 8.6707,4.0861 C8.2977,4.0211 7.9167,3.9811 7.5257,3.9811 C3.8387,3.9811 0.8507,6.9691 0.8507,10.6561 C0.8507,14.3421 3.8387,17.3311 7.5257,17.3311 L19.5047,17.3311 C22.6697,17.3311 25.2347,14.7651 25.2347,11.6001 C25.2347,8.4361 22.6697,5.8701 19.5047,5.8701 L19.5047,5.8701 Z", id: "Stroke-11" })
          )
        );
      case 'sport':
        return React.createElement(
          "g",
          null,
          React.createElement("path", { d: "M14 3.8c.99 0 1.8-.81 1.8-1.8 0-1-.81-1.8-1.8-1.8-1 0-1.8.81-1.8 1.8s.8 1.8 1.8 1.8zm.12 6.2h4.88v-1.8h-3.62l-2-3.33c-.3-.5-.84-.83-1.46-.83-.17 0-.34.03-.49.07l-5.43 1.69v5.2h1.8v-3.67l2.11-.66-3.91 15.33h1.8l2.87-8.11 2.33 3.11v5h1.8v-6.41l-2.49-4.54.73-2.87 1.08 1.82z" })
        );
      case 'visibility':
        return React.createElement(
          "g",
          null,
          React.createElement("path", { d: "M12 4.5c-5 0-9.27 3.11-11 7.5 1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zm0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" })
        );
      case 'visibility-off':
        return React.createElement(
          "g",
          null,
          React.createElement("path", { d: "M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16c.57-.23 1.18-.36 1.83-.36zm-10-2.73l2.28 2.28.46.46c-1.66 1.29-2.96 3.01-3.74 4.99 1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42 2.93 2.92 1.27-1.27-17.73-17.73-1.27 1.27zm5.53 5.53l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z" })
        );
      case 'previousPage':
        return React.createElement(
          "g",
          { id: "Rule-Break-(Luke)", stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
          React.createElement(
            "g",
            { id: "Prev-Page", fill: "#838383" },
            React.createElement("polygon", { id: "Shape", points: "4.61236111 0.0316666667 0.0582253086 5 4.61236111 9.96833333 5.57282407 8.92055556 1.97881173 5 5.57282407 1.07944444" })
          )
        );
      case 'up':
        return React.createElement(
          "g",
          null,
          React.createElement("path", { d: "M12 8l-6 6 1.41 1.41 4.59-4.58 4.59 4.58 1.41-1.41z" })
        );
      case 'down':
        return React.createElement(
          "g",
          null,
          React.createElement("path", { d: "M16.59 8.59l-4.59 4.58-4.59-4.58-1.41 1.41 6 6 6-6z" })
        );
      case 'nextPage':
        return React.createElement(
          "g",
          { id: "Rule-Break-(Luke)", stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
          React.createElement(
            "g",
            { id: "Next-Page", transform: "translate(3.000000, 5.000000) rotate(-180.000000) translate(-3.000000, -5.000000) ", fill: "#838383" },
            React.createElement("polygon", { id: "Shape", points: "4.61236111 0.0316666667 0.0582253086 5 4.61236111 9.96833333 5.57282407 8.92055556 1.97881173 5 5.57282407 1.07944444" })
          )
        );
      case 'firstPage':
        return React.createElement(
          "g",
          { id: "Rule-Break-(Luke)", stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
          React.createElement(
            "g",
            { id: "First-page", fill: "#838383" },
            React.createElement("polygon", { id: "Shape", points: "4.61236111 0.0316666667 0.0582253086 5 4.61236111 9.96833333 5.57282407 8.92055556 1.97881173 5 5.57282407 1.07944444" }),
            React.createElement("polygon", { id: "Shape", points: "9.74569444 0.0316666667 5.19155864 5 9.74569444 9.96833333 10.7061574 8.92055556 7.11214506 5 10.7061574 1.07944444" })
          )
        );
      case 'lastPage':
        return React.createElement(
          "g",
          { id: "Rule-Break-(Luke)", stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
          React.createElement(
            "g",
            { id: "Last-Page", transform: "translate(5.500000, 5.000000) rotate(-180.000000) translate(-5.500000, -5.000000) ", fill: "#838383" },
            React.createElement("polygon", { id: "Shape", points: "4.61236111 0.0316666667 0.0582253086 5 4.61236111 9.96833333 5.57282407 8.92055556 1.97881173 5 5.57282407 1.07944444" }),
            React.createElement("polygon", { id: "Shape", points: "9.74569444 0.0316666667 5.19155864 5 9.74569444 9.96833333 10.7061574 8.92055556 7.11214506 5 10.7061574 1.07944444" })
          )
        );
      case 'invert':
        return React.createElement(
          "g",
          { id: "Access-Copy-7", transform: "translate(-891.000000, -252.000000)", fill: "#355d7f" },
          React.createElement("path", { d: "M894.3102,268.3 L893.6778,267.668 L892.7293,266.7195 L892.729,266.7198 L892.7286,266.7194 L891.9485,267.4995 L891.7533,267.6945 L893.052,268.9932 L894.9996,270.9414 L895.0003,270.9415 L897.5971,268.3439 L898.2466,267.6944 L897.2706,266.7194 L897.2704,266.7196 L897.2703,266.7195 L895.6902,268.2996 L895.6902,266.67 C895.6902,263.924 897.9242,261.691 900.6692,261.691 L902.2993,261.691 L900.7195,263.2708 L901.6944,264.246 L904.9404,261 L903.9666,260.0259 L901.6944,257.753 L900.8169,258.6314 L900.7195,258.7288 L900.7194,258.729 L901.1938,259.2034 L902.299701,260.31 L900.6692,260.31 C897.1622,260.31 894.3102,263.163 894.3102,266.67 L894.3102,268.3 Z", id: "Combined-Shape" })
        );
      case 'AllDeviceProperties':
        return React.createElement(
          "g",
          { id: "Group" },
          React.createElement("path", { className: "a", d: "M7.64,14.19a2.57,2.57,0,0,0-5,0H0v1.29H2.66a2.57,2.57,0,0,0,5,0H19.36V14.19H7.64ZM5.15,15.48a0.65,0.65,0,1,1,.65-0.65A0.65,0.65,0,0,1,5.15,15.48Z" }),
          React.createElement("path", { className: "a", d: "M16.68,9a2.57,2.57,0,0,0-5,0H0v1.29H11.7a2.57,2.57,0,0,0,5,0h2.67V9H16.68Zm-2.49,1.29a0.65,0.65,0,1,1,.65-0.65A0.65,0.65,0,0,1,14.19,10.31Z" }),
          React.createElement("path", { className: "a", d: "M7.64,3.86a2.57,2.57,0,0,0-5,0H0V5.15H2.66a2.57,2.57,0,0,0,5,0H19.36V3.86H7.64ZM5.15,5.15A0.65,0.65,0,1,1,5.79,4.5,0.65,0.65,0,0,1,5.15,5.15Z" })
        );
      case 'DeviceMap':
        return React.createElement(
          "g",
          { id: "Group", fill: "#000000" },
          React.createElement("path", { d: "M12.67,3.67l-6-2.25L1.42,2.92V17.17l5.25-1.5,6,2.25,5.25-1.5V2.17ZM5.92,13.79l-3,.75V4l3-.75v10.5Zm6,1.69-4.5-1.69V3.29L11.92,5v10.5Zm4.5-.94-3,.94V5l3-.75V14.54Z" })
        );
      case 'DeviceProperties':
        return React.createElement(
          "g",
          { id: "Group" },
          React.createElement("path", { className: "a", d: "M7.64,4.83a2.57,2.57,0,0,0-5,0H0V6.12H2.66a2.57,2.57,0,0,0,5,0H19.36V4.83H7.64ZM5.15,6.12a0.65,0.65,0,1,1,.65-0.65A0.65,0.65,0,0,1,5.15,6.12Z" }),
          React.createElement("rect", { x: "-0.02", y: "9.99", width: "19.38", height: "1.29" }),
          React.createElement("rect", { x: "-0.02", y: "15.16", width: "19.38", height: "1.29" })
        );
      case 'DeviceInfo':
        return React.createElement(
          "g",
          { id: "Group" },
          React.createElement("path", { className: "a", d: "M18,11.84h-3V10.48h3A0.46,0.46,0,0,0,18.41,10V9.5A0.46,0.46,0,0,0,18,9h-3V7.58h3a0.46,0.46,0,0,0,.46-0.46V6.59A0.46,0.46,0,0,0,18,6.13h-3V4.33H13.33V1.13A0.46,0.46,0,0,0,12.87.67H12.35a0.46,0.46,0,0,0-.46.46v3.2H10.38V1.16A0.46,0.46,0,0,0,9.92.71H9.39a0.46,0.46,0,0,0-.46.46V4.33H7.46V1.16A0.46,0.46,0,0,0,7,.71H6.48A0.46,0.46,0,0,0,6,1.16V4.33H4.37V6h-3a0.46,0.46,0,0,0-.46.46V7a0.46,0.46,0,0,0,.46.46h3V9h-3a0.46,0.46,0,0,0-.46.46V10a0.46,0.46,0,0,0,.46.46h3V12h-3a0.46,0.46,0,0,0-.46.46v0.52a0.46,0.46,0,0,0,.46.46h3v1.65H6v3.16a0.31,0.31,0,0,0,0,.07l0.36,0.36H7a0.46,0.46,0,0,0,.46-0.46V15H8.92v3.16a0.46,0.46,0,0,0,.46.46H9.9a0.46,0.46,0,0,0,.46-0.46V15h1.51v3.13a0.46,0.46,0,0,0,.46.46h0.53a0.46,0.46,0,0,0,.46-0.46V15h1.62V13.28h3a0.46,0.46,0,0,0,.46-0.46V12.3A0.46,0.46,0,0,0,18,11.84Zm-8.15,2.5a4.67,4.67,0,1,1,4.67-4.67A4.67,4.67,0,0,1,9.84,14.34Z" }),
          React.createElement("path", { className: "a", d: "M10.62,7.33a0.78,0.78,0,1,1-.78-0.78,0.78,0.78,0,0,1,.78.78" }),
          React.createElement("polyline", { className: "a", points: "10.62 8.89 8.29 8.89 8.29 9.67 9.07 9.67 9.07 12 8.29 12 8.29 12.78 11.4 12.78 11.4 12 10.62 12" })
        );
      case 'DeviceList':
        return React.createElement(
          "g",
          { id: "Group" },
          React.createElement("path", { className: "a", d: "M18,11.84h-3V10.48h3A0.46,0.46,0,0,0,18.41,10V9.5A0.46,0.46,0,0,0,18,9h-3V7.58h3a0.46,0.46,0,0,0,.46-0.46V6.59A0.46,0.46,0,0,0,18,6.13h-3V4.33H13.33V1.13A0.46,0.46,0,0,0,12.87.67H12.35a0.46,0.46,0,0,0-.46.46v3.2H10.38V1.17A0.46,0.46,0,0,0,9.92.71H9.4a0.46,0.46,0,0,0-.46.46V4.33H7.47V1.17A0.46,0.46,0,0,0,7,.71H6.48A0.46,0.46,0,0,0,6,1.17V4.33H4.37V6h-3a0.46,0.46,0,0,0-.46.46V7a0.46,0.46,0,0,0,.46.46h3V9h-3a0.46,0.46,0,0,0-.46.46V10a0.46,0.46,0,0,0,.46.46h3V12h-3a0.46,0.46,0,0,0-.46.46v0.52a0.46,0.46,0,0,0,.46.46h3v1.65H6v3.16a0.31,0.31,0,0,0,0,.07l0.37,0.37H7a0.46,0.46,0,0,0,.46-0.46V15H8.92v3.16a0.46,0.46,0,0,0,.46.46H9.9a0.46,0.46,0,0,0,.46-0.46V15h1.51v3.13a0.46,0.46,0,0,0,.46.46h0.53a0.46,0.46,0,0,0,.46-0.46V15h1.62V13.28h3a0.46,0.46,0,0,0,.46-0.46V12.3A0.46,0.46,0,0,0,18,11.84m-8.32,0a2.12,2.12,0,1,1,2.12-2.12,2.12,2.12,0,0,1-2.12,2.12" })
        );
      case 'RuleBreakInfo':
        return React.createElement(
          "g",
          { id: "Group" },
          React.createElement("rect", { x: "3.17", y: "17.93", width: "13", height: "1.27" }),
          React.createElement("path", { className: "a", d: "M3.17,0.14V16.66h13V0.14h-13Zm11.7,15.25H4.47V3.95h10.4V15.39Z" }),
          React.createElement("polyline", { className: "a", points: "10.7 8.66 8.36 8.66 8.36 9.44 9.14 9.44 9.14 11.78 8.36 11.78 8.36 12.56 11.47 12.56 11.47 11.78 10.7 11.78" }),
          React.createElement("path", { className: "a", d: "M10.7,7.11a0.78,0.78,0,1,1-.78-0.78,0.78,0.78,0,0,1,.78.78" })
        );
      case 'RuleBreaks':
        return React.createElement(
          "g",
          { id: "Group" },
          React.createElement("rect", { x: "3.17", y: "17.93", width: "13", height: "1.27" }),
          React.createElement("path", { className: "a", d: "M3.17,0.14V16.66h13V0.14h-13Zm11.7,15.25H4.47V3.95h10.4V15.39Z" }),
          React.createElement("polyline", { className: "a", points: "8.96 6.45 8.96 7.76 9.31 11.02 10.03 11.02 10.38 7.76 10.38 6.45" }),
          React.createElement("path", { className: "a", d: "M10.38,12.33a0.72,0.72,0,1,1-.71-0.65,0.68,0.68,0,0,1,.71.65" })
        );
      case 'Rules':
        return React.createElement(
          "g",
          { id: "Group" },
          React.createElement("rect", { x: "3.17", y: "17.93", width: "13", height: "1.27" }),
          React.createElement("path", { className: "a", d: "M3.17,0.14V16.66h13V0.14h-13Zm11.7,15.25H4.47V3.95h10.4V15.39Z" }),
          React.createElement("rect", { x: "5.77", y: "9.03", width: "7.8", height: "0.64" }),
          React.createElement("rect", { x: "5.77", y: "6.49", width: "7.8", height: "0.64" }),
          React.createElement("rect", { x: "5.77", y: "11.58", width: "7.8", height: "0.64" })
        );
      case 'ConnectionSecurity':
        return React.createElement(
          "g",
          null,
          React.createElement("path", { d: "M14.72,1.3V2.94L11.2,6.46H9.56V8.1L8.63,9l-.44.44.18.59A3.61,3.61,0,1,1,6,7.65l.59.18L7,7.39,13.08,1.3h1.64M16,0H12.54l-.38.38-6,6A4.92,4.92,0,1,0,9.66,9.84L10.48,9l.38-.38V7.76h.88l.38-.38,3.52-3.53L16,3.48V0Z" }),
          React.createElement("circle", { cx: "3.88", cy: "12.14", r: "1.03" }),
          React.createElement("rect", { x: "9.95", y: "3.62", width: "4.38", height: "0.52", transform: "translate(0.81 9.72) rotate(-45)" })
        );
      case 'PolicyCompliance':
        return React.createElement(
          "g",
          null,
          React.createElement("path", { d: "M13.35,7.63V0H3.18V7.63H0v8.9H16.52V7.63ZM4.45,1.27h7.63V7.63H4.45ZM15.25,8.9v6.35h-14V8.9Z" }),
          React.createElement("rect", { x: "5.72", y: "3.81", width: "5.08", height: "0.64" }),
          React.createElement("rect", { x: "5.72", y: "5.08", width: "5.08", height: "0.64" }),
          React.createElement("polygon", { points: "10.17 12.07 6.36 12.07 6.36 11.44 5.72 11.44 5.72 12.07 5.72 12.71 6.36 12.71 10.17 12.71 10.8 12.71 10.8 12.07 10.8 11.44 10.17 11.44 10.17 12.07" })
        );
      case 'Blacklist':
        return React.createElement(
          "g",
          null,
          React.createElement("path", { d: "M11.7,1.3V15.22H1.3V1.3H11.7M13,0H0V16.52H13V0Z" }),
          React.createElement("polygon", { points: "10.64 12.9 2.36 12.9 2.36 14.17 10.64 14.17 10.64 12.9 10.64 12.9" }),
          React.createElement("polygon", { points: "8.99 6.49 8.27 5.77 6.5 7.54 4.73 5.77 4 6.49 5.77 8.26 4 10.03 4.73 10.76 6.5 8.99 8.27 10.76 8.99 10.03 7.22 8.26 8.99 6.49" })
        );
      case 'Whitelist':
        return React.createElement(
          "g",
          null,
          React.createElement("path", { d: "M11.7,1.3V15.22H1.3V1.3H11.7M13,0H0V16.52H13V0Z" }),
          React.createElement("polygon", { points: "10.64 12.9 2.36 12.9 2.36 14.17 10.64 14.17 10.64 12.9 10.64 12.9" }),
          React.createElement("polygon", { points: "5.52 8.98 3.7 7.16 2.92 7.95 5.52 10.55 10.33 5.74 9.55 4.95 5.52 8.98" })
        );
      case 'Blockchain':
        return React.createElement(
          "g",
          null,
          React.createElement("path", { d: "M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4v-1.9h-4c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9h-4c-1.71 0-3.1-1.39-3.1-3.1zm4.1 1h8v-2h-8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4v1.9h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" })
        );
      case 'RiskManagement':
        return React.createElement(
          "g",
          null,
          React.createElement("polygon", { points: "14.5,21.586 12.207,19.293 10.793,20.707 14.5,24.414 21.207,17.707 19.793,16.293" }),
          React.createElement("path", { d: "M24,12.466V9c0-4.418-3.582-8-8-8c-4.419,0-8,3.582-8,8v3.467C6.145,14.436,5,17.082,5,20c0,6.074,4.926,11,11,11 c6.076,0,11-4.926,11-11C27,17.081,25.855,14.436,24,12.466z M10,9c0-3.309,2.691-6,6-6c3.309,0,6,2.691,6,6v1.788 C20.273,9.661,18.215,9,16,9c-2.215,0-4.273,0.661-6,1.788V9z M16,29c-4.971,0-9-4.029-9-9s4.029-9,9-9c4.971,0,9,4.029,9,9 S20.971,29,16,29z" })
        );
      default:
        return null;
    }
  },

  onClick: function onClick(evt) {
    if (this.props.onClick) {
      this.props.onClick(evt);
    }
  },

  onEnter: function onEnter(evt) {
    if (this.props.onEnter) {
      this.props.onEnter(evt);
    }
  },

  onLeave: function onLeave(evt) {
    if (this.props.onLeave) {
      this.props.onLeave(evt);
    }
  },

  componentWillMount: function componentWillMount() {
    // If there is no color specified take the theme color or (if the theme is absent) a default color
    // TODO: this should be state.  props can't change
    //this.props.color=this.props.color?this.props.color:this.props.theme&&this.props.theme.title||"#5a5a5a";
  },

  loadExternalIcon: function loadExternalIcon(icon, styleIcon) {
    if (icon.type === 'svg') {
      return icon;
    } else if (icon instanceof String) {
      return React.createElement("img", { src: icon, style: styleIcon });
    }
  },

  render: function render() {
    var iotIcon = '';

    var styleIcon = Object.assign({}, styles.icon, {
      fill: this.props.color,
      width: this.props.size,
      height: this.props.size
    }, this.props.style);

    if (this.props.disabled) {
      styleIcon.cursor = "not-allowed";
      styleIcon.opacity = 0.3;
    }

    iotIcon = this.renderGraphic();

    if (iotIcon) {
      var viewport = Object.assign({}, { x: 0, y: 0, width: 24, height: 24 }, this.state.viewportCorrection);
      iotIcon = React.createElement(
        "svg",
        { viewBox: viewport.x + ' ' + viewport.y + ' ' + viewport.width + ' ' + viewport.height,
          preserveAspectRatio: "xMidYMid meet",
          style: styleIcon
        },
        iotIcon
      );
    } else {
      iotIcon = this.loadExternalIcon(this.props.icon, styleIcon);
      console.log(iotIcon);
    }

    return React.createElement(
      "span",
      { onClick: this.onClick, onMouseEnter: this.onEnter, onMouseLeave: this.onLeave },
      iotIcon
    );
  }
});

module.exports = Icon;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/IconLink.jsx":[function(require,module,exports){
(function (global){
'use strict';

var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
var RPT = React.PropTypes;
var Icon = require('./Icon.jsx');

var styles = {
	container: {
		cursor: "pointer"
	},
	action: {
		verticalAlign: "middle",
		margin: "4px"
	},
	label: {
		marginLeft: "5px"
	}
};

var IconLink = React.createClass({
	displayName: 'IconLink',

	propTypes: {
		style: RPT.object,
		theme: RPT.object.isRequired,
		icon: RPT.string,
		color: RPT.string,
		size: RPT.number,
		action: RPT.func
	},

	getDefaultProps: function getDefaultProps() {
		return {
			size: 24
			// color default is set in componentWillMount
		};
	},

	onClick: function onClick() {
		if (this.props.action) {
			this.props.action();
		}
	},

	componentWillMount: function componentWillMount() {
		// TODO: this should be state.  props can't change
		//this.props.color=this.props.color?this.props.color:this.props.theme&&this.props.theme.major||"#5a5a5a";
	},

	render: function render() {
		var styleContainer = Object.assign({}, this.props.style, styles.container);
		var linkLabel = Object.assign({}, styles.label, {
			lineHeight: this.props.size + "px",
			color: this.props.color
		});

		return React.createElement(
			'div',
			{ style: styleContainer, onClick: this.onClick },
			React.createElement(Icon, { icon: this.props.icon,
				color: this.props.color,
				size: this.props.size,
				style: { verticalAlign: "middle" },
				theme: this.props.theme
			}),
			React.createElement(
				'span',
				{ style: linkLabel },
				this.props.children
			)
		);
	}
});

module.exports = IconLink;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./Icon.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/Icon.jsx"}],"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/Image.jsx":[function(require,module,exports){
(function (global){
"use strict";

var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
var RPT = React.PropTypes;

var styles = {
    imageWrapper: {
        width: "inherit",
        height: "inherit"
    },
    imageError: {
        height: "100%",
        width: "100%",
        display: "table"
    },
    imageErrorText: {
        display: "table-cell",
        verticalAlign: "middle",
        textAlign: "center"
    }
};

// TODO Called IoTImage because of Namespace conflicts -> Fix this
var Image = React.createClass({
    displayName: "Image",

    propTypes: {
        url: RPT.string,
        width: RPT.number,
        height: RPT.number,
        style: RPT.object,
        onError: RPT.func
    },

    getDefaultProps: function getDefaultProps() {
        return {};
    },

    getInitialState: function getInitialState() {
        return {
            url: this.props.url ? this.props.url : "",
            width: this.props.width ? this.props.width + "px" : "",
            height: this.props.height ? this.props.height + "px" : "",
            error: false
        };
    },

    componentWillReceiveProps: function componentWillReceiveProps(props) {
        this.setState({ error: false });
        console.log(props.url);
        this.setState({ url: props.url });
        if (this.state.width !== props.width) {
            this.setState({ width: props.width });
        }
        if (this.state.height !== props.height) {
            this.setState({ height: props.height });
        }
    },

    handleError: function handleError(e) {
        if (typeof this.props.onError === 'function') {
            this.props.onError(e.target.value);
        } else {
            this.setState({ error: true });
        }
    },

    onLoad: function onLoad(e) {
        if (typeof this.props.onLoad === 'function') {
            this.props.onLoad(e);
        }
    },

    render: function render() {
        var errorMsg = "";

        var image = React.createElement("img", { width: this.state.width, height: this.state.height, src: this.state.url, onError: this.handleError, onLoad: this.onLoad, style: this.props.style });

        if (this.state.error && this.state.url !== "") {
            errorMsg = React.createElement(
                "div",
                { style: styles.imageError },
                React.createElement(
                    "span",
                    { style: styles.imageErrorText },
                    "No image available"
                )
            );
            image = "";
        }

        return React.createElement(
            "div",
            { style: styles.imageWrapper },
            image,
            errorMsg
        );
    }
});

module.exports = Image;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/Information.jsx":[function(require,module,exports){
(function (global){
'use strict';

var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var Icon = require('./Icon.jsx');
var SimpleDialog = require('./SimpleDialog.jsx');
var Button = require('./Button.jsx');

var RPT = React.PropTypes;

var styles = {
  title: {
    fontSize: "25px",
    height: "30px",
    width: "330px",
    marginBottom: "8px",
    marginTop: "20px"
  },
  text: {
    fontSize: "14px",
    width: "385px",
    height: "50px"
  },
  buttons: {
    float: "right"
  },
  icon: {
    display: "block",
    margin: "20px auto",
    width: "44px"
  },
  iconContainer: {
    position: "absolute",
    top: "0px",
    left: "0px",
    width: "100px"

  },
  container: {
    position: "relative"

  },
  content: {
    position: "relative",
    marginLeft: "100px"
  }
};

var Information = React.createClass({
  displayName: 'Information',

  propTypes: {
    style: RPT.object,
    theme: RPT.object.isRequired,
    nls: RPT.object,
    onSubmit: RPT.func,
    icon: RPT.string,
    submitText: RPT.string,
    title: RPT.string,
    text: RPT.string,
    width: RPT.number,
    height: RPT.number
  },

  getDefaultProps: function getDefaultProps() {
    return {
      icon: "info"
    };
  },

  componentDidMount: function componentDidMount() {},

  onSubmit: function onSubmit() {
    if (this.props.onSubmit) {
      this.props.onSubmit();
    }
  },

  render: function render() {
    var self = this;

    var titleStyle = Object.assign({}, styles.title, { color: this.props.theme.major });
    var textStyle = Object.assign({}, styles.text, { color: this.props.theme.minor });

    var submitText = this.props.submitText ? this.props.submitText : this.props.nls.resolve("Dialog.Submit");
    var title = this.props.title ? this.props.title : this.props.nls.resolve("Dialog.Alert");
    var text = this.props.text ? this.props.text : this.props.nls.resolve("Dialog.AreUSure");
    var iconColor = this.props.theme.accent;

    return React.createElement(
      SimpleDialog,
      { theme: this.props.theme, nls: this.props.nls, onCancel: this.onCancel },
      React.createElement(
        'div',
        { style: styles.container },
        React.createElement(
          'div',
          { style: styles.iconContainer },
          React.createElement(Icon, { style: styles.icon, theme: this.props.theme, color: iconColor, size: 44, icon: this.props.icon })
        ),
        React.createElement(
          'div',
          { style: styles.content },
          React.createElement(
            'div',
            { style: titleStyle },
            title
          ),
          React.createElement(
            'div',
            { style: textStyle },
            text
          ),
          React.createElement(
            'div',
            { style: styles.buttons },
            React.createElement(Button, { onClick: this.onSubmit, isPrimary: true, style: { marginRight: "0px", marginBottom: "0px" }, text: submitText })
          )
        )
      )
    );
  }
});

module.exports = Information;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./Button.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/Button.jsx","./Icon.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/Icon.jsx","./SimpleDialog.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/SimpleDialog.jsx"}],"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/InputField.jsx":[function(require,module,exports){
(function (global){
'use strict';

/*global require, module */
var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
var RPT = React.PropTypes;
var re_weburl = require('../../Dashboard/utils/regex-weburl');
var re_email = require('../../Dashboard/utils/regex-email');

var styles = {
  field: {
    border: 'none',
    borderBottom: '3px solid #9EAAA9',
    boxShadow: 'none!important',
    display: 'block',
    position: 'relative',
    width: '100%',
    height: '42px',
    //  padding: '8px 0px',
    fontWeight: 'bold',
    fontSize: '14px',
    color: '#555',
    outline: 'none',
    lineHeight: '1.42857143',
    boxSizing: 'border-box',
    WebkitTransition: 'all .2s ease-in-out',
    transition: 'all .2s ease-in-out',
    backgroundColor: 'transparent',
    left: '0px !important',
    paddingLeft: '0px !important'
  },
  fieldContainer: {
    width: '100%',
    float: 'left'
  },
  validationWarning: {
    position: 'relative',
    top: '-25px',
    textAlign: 'right',
    height: '0px',
    paddingRight: '10px'
  },
  after: {
    clear: 'both'
  },
  disabled: {
    cursor: 'not-allowed',
    color: '#9EAAA9'
  },
  warningMessage: {
    color: '#d10e0e'
  }
};

var InputField = React.createClass({
  displayName: 'InputField',


  propTypes: {
    theme: RPT.object.isRequired,
    style: RPT.object,
    containerStyle: RPT.object,
    onChange: RPT.func,
    onSubmit: RPT.func,
    initialValue: RPT.string,
    isInvalid: RPT.bool,
    placeholder: RPT.string,
    readOnly: RPT.bool,
    required: RPT.bool,
    noTyping: RPT.bool,
    noUnderscore: RPT.bool,
    min: RPT.number,
    max: RPT.number,
    type: RPT.string,
    warning: RPT.string
  },

  validated: false,

  getDefaultProps: function getDefaultProps() {
    return {
      initialValue: '',
      isInvalid: false,
      type: 'text',
      style: { label: {} },
      readOnly: false,
      noTyping: false,
      noUnderscore: false,
      required: false
    };
  },

  getInitialState: function getInitialState() {
    return {
      value: this.props.initialValue !== undefined ? this.props.initialValue : '',
      isValid: !this.props.isInvalid || !this.props.required || this.props.initialValue
    };
  },

  validateType: function validateType(value) {
    var currType = this.props.type || 'text';
    var isValid = true;

    switch (currType) {
      case 'url':
        isValid = value.match(re_weburl) !== null;
        break;
      case 'email':
        isValid = value.match(re_email) !== null;
        break;
      case 'text':
        isValid = !this.props.required || value.length > 0;
        break;
    }
    if (this.props.isInvalid) {
      isValid = false;
    }
    this.validated = true;
    if (this.state.isValid !== isValid) {
      this.setState({ isValid: isValid });
    }
    return isValid;
  },

  componentWillReceiveProps: function componentWillReceiveProps(props) {
    if (props.value) {
      this.setState({ value: props.value });
    }
    if (props.isInvalid != this.props.isInvalid) {
      this.setState({ isValid: !props.isInvalid });
    }
  },

  handleChange: function handleChange(event) {
    this.setState({
      value: event.target.value
    });
    if (this.props.onChange) {
      this.props.onChange(event.target.value);
    }
    this.validateType(event.target.value);
  },

  handleSubmit: function handleSubmit(event) {
    if (event.key == "Enter") {
      if (this.validateType(event.target.value) && this.props.onSubmit) {
        this.props.onSubmit(event.target.value);
      }
    }
  },

  handleOnFocus: function handleOnFocus(event) {
    if (!this.props.readOnly) {
      this.setState({
        hasFocus: true
      });
      if (this.props.onFocus) {
        this.props.onFocus(event.target.value);
      }
    }
  },

  handleClick: function handleClick(event) {
    if (!this.props.readOnly) {
      this.setState({
        hasFocus: true
      });
      if (this.props.onClick) {
        this.props.onClick(event.target.value);
      }
    }
  },

  handleOnBlur: function handleOnBlur(event) {
    this.setState({
      hasFocus: false
    });
    if (this.props.onBlur) {
      this.props.onBlur(event.target.value);
    }
    this.validateType(event.target.value);
  },

  render: function render() {
    var warning = "";
    var warningMessage = "";
    if (!this.state.isValid && this.validated) {
      if (this.props.warning) {
        warningMessage = React.createElement(
          'div',
          { style: styles.warningMessage },
          this.props.warning
        );
      } else {
        warning = React.createElement(
          'div',
          { style: styles.validationWarning },
          '!'
        );
      }
    }
    if (this.state.hasFocus) {
      styles.field.borderColor = '#4581E0';
    } else {
      styles.field.borderColor = '#9EAAA9';
    }
    if (!this.state.isValid && this.validated) {
      styles.field.borderColor = '#d10e0e';
    }
    var inputStyle;
    if (this.props.noUnderscore === true) {
      inputStyle = Object.assign({}, styles.field, { borderBottom: "none" }, this.props.style);
    } else {
      inputStyle = Object.assign({}, styles.field, this.props.style);
    }

    if (this.props.readOnly) {
      inputStyle = Object.assign({}, inputStyle, styles.disabled);
    }

    var containerStyle = Object.assign({}, styles.fieldContainer, this.props.containerStyle);

    var inputField = React.createElement('input', { type: this.props.type, min: this.props.min, max: this.props.max, style: inputStyle, name: 'field',
      value: this.state.value, readOnly: this.props.readOnly || this.props.noTyping, onKeyDown: this.handleSubmit, onChange: this.handleChange,
      onFocus: this.handleOnFocus, onClick: this.handleClick, onBlur: this.handleOnBlur, placeholder: this.props.placeholder, title: ' ' });

    return React.createElement(
      'div',
      { style: styles.formElement },
      React.createElement(
        'div',
        { style: containerStyle },
        inputField,
        warning
      ),
      warningMessage,
      React.createElement('div', { style: styles.after })
    );
  }
});

module.exports = InputField;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../../Dashboard/utils/regex-email":"/Users/frank/Documents/Projects/IOTFoundation/components/Dashboard/utils/regex-email.js","../../Dashboard/utils/regex-weburl":"/Users/frank/Documents/Projects/IOTFoundation/components/Dashboard/utils/regex-weburl.js"}],"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/Label.jsx":[function(require,module,exports){
(function (global){
"use strict";

var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
var RPT = React.PropTypes;

var styles = {

  container: {
    marginBottom: "15px",
    boxSizing: "border-box",
    clear: "both"
  },
  childContainer: {},
  label: {
    textAlign: "left",
    paddingRight: "15px",
    paddingTop: "7px",
    display: "inline-block",
    fontSize: "13px",
    color: "#9EAAA9"
  }

};

// Documentation link:
// https://github.ibm.com/IoT/dashboard-component/wiki/Label-component
//

var Label = React.createClass({
  displayName: "Label",


  propTypes: {
    theme: RPT.object.isRequired,
    style: RPT.object,
    label: RPT.string,
    labelFor: RPT.string,
    customContainerStyle: RPT.object
  },

  getDefaultProps: function getDefaultProps() {
    return {
      label: ""
    };
  },

  getInitialState: function getInitialState() {
    return {
      hasFocus: false
    };
  },

  componentWillMount: function componentWillMount() {
    this.updateTheme();
  },

  onFocus: function onFocus(e) {
    this.setState({ hasFocus: true });
  },

  onBlur: function onBlur(e) {
    this.setState({ hasFocus: false });
  },

  updateTheme: function updateTheme() {
    styles.label.color = this.state.hasFocus ? "#4581E0" : "#9EAAA9";
    styles.label.color = styles.label.color ? styles.label.color : this.props.theme && this.props.theme.title || "#323232";
  },

  render: function render() {
    var self = this;
    this.updateTheme();
    var styleLabel = Object.assign({}, styles.label, this.props.style);
    var styleContainer = Object.assign({}, styles.container, this.props.customContainerStyle);
    return React.createElement(
      "div",
      { style: styleContainer },
      React.createElement(
        "label",
        { style: styleLabel, htmlFor: this.props.labelFor },
        this.props.label
      ),
      React.createElement(
        "div",
        { style: styles.childContainer },
        React.Children.map(this.props.children, function (child, idx) {
          // TODO: can't modify props
          //child.props.onFocus=self.onFocus;
          //child.props.onBlur=self.onBlur;
          return child;
        })
      )
    );
  }
});

module.exports = Label;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/LineChart.jsx":[function(require,module,exports){
(function (global){
'use strict';

var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
var ReactDOM = (typeof window !== "undefined" ? window['ReactDOM'] : typeof global !== "undefined" ? global['ReactDOM'] : null);
var c3 = (typeof window !== "undefined" ? window['c3'] : typeof global !== "undefined" ? global['c3'] : null);
var RPT = React.PropTypes;
var Icon = require('./Icon.jsx');

var styles = {
  container: {
    width: "100%",
    height: "100%"
  }
};

var LineChart = React.createClass({
  displayName: 'LineChart',

  propTypes: {
    style: RPT.object,
    theme: RPT.object.isRequired,
    data: RPT.object,
    initialData: RPT.object,
    plots: RPT.array,
    title: RPT.string,
    range: RPT.number,
    autoscroll: RPT.bool,
    stacked: RPT.bool,
    steps: RPT.bool,
    threshold: RPT.number,
    overview: RPT.bool,
    legend: RPT.bool,
    small: RPT.bool,
    width: RPT.number,
    height: RPT.number
  },

  getDefaultProps: function getDefaultProps() {
    return {
      data: {},
      plots: [],
      range: 60,
      threshold: 300,
      autoscroll: true,
      overview: true,
      stacked: false,
      steps: false,
      legend: true,
      small: false

    };
  },

  getInitialState: function getInitialState() {
    return {
      data: this.props.initialData ? this.props.initialData : []
    };
  },

  componentDidMount: function componentDidMount() {
    this.createGraph();
  },

  startScrolling: function startScrolling() {
    this.stopScrolling();
    var self = this;
    this.scrollInterval = setInterval(function () {
      self.adjustWindow();
    }, 1000);
  },

  stopScrolling: function stopScrolling() {
    if (this.scrollInterval) {
      clearInterval(this.scrollInterval);
    }
  },

  adjustWindow: function adjustWindow() {
    if (this.graph) {
      this.graph.axis.max({
        x: new Date()
      });
      if (this.props.threshold) {
        var startDate = new Date(new Date().getTime() - this.props.threshold * 1000);
        this.graph.axis.min({
          x: startDate
        });
      }
      var end = new Date(new Date().getTime() - this.props.range * 1000);
      var start = new Date();
      this.graph.internal.config.axis_x_tick_values = this.generateTickValues(end, start);
      this.graph.zoom([end, start]);
    }
  },

  createGraph: function createGraph() {
    if (this.props.autoscroll) {
      this.startScrolling();
    } else {
      this.stopScrolling();
    }

    var self = this;
    this.destroyGraph();

    var container = ReactDOM.findDOMNode(this);

    var dom = document.createElement("div");
    container.appendChild(dom);

    this.width = this.props.width ? this.props.width : container.offsetWidth;
    this.height = this.props.height ? this.props.height : container.offsetHeight;

    var colors = this.props.theme.palette;

    if (this.width > 0 && this.height > 0) {

      dom.style.width = this.width + "px";
      dom.style.height = this.height + "px";

      var now = new Date();
      var before = new Date(now.getTime() - 1000 * this.props.range);
      var zoomStart = now;
      var zoomEnd = before;

      var keys = [];
      var colorMap = {};
      var names = {};
      for (var i = 0; i < this.props.plots.length; i++) {
        var plot = this.props.plots[i];
        keys.push(plot.id);
        colorMap[plot.id] = colors[i % colors.length];
        names[plot.id] = plot.label;
      }

      var config = {
        size: {
          width: this.width,
          height: this.height
        },
        padding: {
          left: this.props.small ? 0 : 50,
          bottom: 0,
          right: 0,
          top: 0
        },
        // padding: {
        //   left: this.props.small?20:50,
        //   bottom: 20,
        //   right: 20,
        //   top: 20
        // },
        data: {
          type: this.props.steps ? "step" : "area",
          json: [this.state.data],
          x: 'timestamp',
          keys: {
            x: 'timestamp',
            value: keys
          },
          groups: this.props.stacked ? [keys] : undefined,
          colors: colorMap,
          names: names
          //            xFormat: '%Y-%m-%d %H:%M:%S'
        },
        line: {
          connectNull: true,
          step: {
            type: 'step-after'
          }
        },
        axis: {
          x: {
            type: "timeseries",
            extent: [zoomEnd, zoomStart],
            tick: {
              values: this.generateTickValues(zoomEnd, zoomStart),
              format: '%H:%M:%S',
              culling: {
                max: 3
              },
              fit: true
            },
            min: before,
            show: true
          },
          y: {
            show: !this.props.small
          }
        },
        grid: {
          x: {
            show: true
          },
          y: {
            show: true
          }
        },
        point: {
          r: 4,
          focus: {
            expand: {
              enabled: true,
              r: 6
            }
          },
          show: !this.props.stacked // seems not to work with stacked
        },
        transition: {
          duration: 0
        },
        legend: {
          hide: !this.props.legend
        }
      };

      if (this.props.overview) {
        config.subchart = {
          show: true,
          size: {
            height: 30
          },
          onbrush: function onbrush(domain) {
            self.onZoomOrPan(domain);
          }
        };
      }

      this.graph = c3.generate(config);

      dom.appendChild(this.graph.element);

      this.beautifyLegend();
    }
  },

  beautifyLegend: function beautifyLegend() {
    //<rect class="c3-legend-item-tile" x="22.75" y="0" width="10" height="10" style="pointer-events: none; fill: rgb(186, 143, 247);"></rect>

    var tiles = d3.selectAll('#' + this.id + ' .c3-legend-item-tile');
    tiles.attr('rx', 7).attr('ry', 7);
  },

  onZoomOrPan: function onZoomOrPan(domain) {
    console.log("Zoom and Pan! ");
    console.log(domain);
    if (this.graph && domain && domain.length > 1) {
      this.graph.internal.config.axis_x_tick_values = this.generateTickValues(domain[0], domain[1]);
      this.graph.flush();
    }
  },

  generateTickValues: function generateTickValues(end, start) {
    // range in seconds
    var range = (start.getTime() - end.getTime()) / 1000;
    var leftEnd = end.getTime() / 1000;
    // depending on size, show 2 or 5 ticks
    var steps = range / (this.props.small ? 2 : 5);

    var breakpoints = [1, 5, 15, 60, 300, 1800, 3600, 10800, 21600, 86400];

    for (var i = 0; i < breakpoints.length; i++) {
      var breakpoint = breakpoints[i];
      if (steps < breakpoint) {
        steps = breakpoint;
        leftEnd = Math.floor(leftEnd / breakpoint) * breakpoint;
        break;
      }
    }

    var values = [];
    var date = leftEnd;
    for (var j = 0; j < 5; j++) {
      var newDate = new Date(leftEnd * 1000);
      values.push(newDate);
      leftEnd = leftEnd + steps;
    }
    return values;
  },

  destroyGraph: function destroyGraph() {
    var dom = ReactDOM.findDOMNode(this);
    while (dom.firstChild) {
      dom.removeChild(dom.firstChild);
    }
    this.graph = null;
  },

  updateGraph: function updateGraph() {
    var self = this;
    if (!this.graph) {
      this.createGraph();
    }
    if (this.graph) {
      var container = ReactDOM.findDOMNode(this);
      var width = this.props.width ? this.props.width : container.offsetWidth;
      var height = this.props.height ? this.props.height : container.offsetHeight;
      if (this.width != width || this.height != height) {
        this.width = width;
        this.height = height;
        this.graph.resize({ height: this.height, width: this.width });
      }

      var keys = [];
      for (var i = 0; i < this.props.plots.length; i++) {
        keys.push(this.props.plots[i].id);
      }

      // sort by timestamp
      var done = false;
      for (var i = this.state.data.length - 1; i >= 0; i--) {
        if (this.state.data[i].timestamp == this.props.data.timestamp) {
          // replace a value with identical timestamp
          this.state.data.splice(i, 1, this.props.data);
          done = true;
          break;
        } else if (this.state.data[i].timestamp > this.props.data.timestamp) {
          // squeeze it into the right place according to the timestamp
          this.state.data.splice(i + 1, 0, this.props.data);
          done = true;
          break;
        }
      }
      if (!done) {
        this.state.data.push(this.props.data);
      }

      if (this.props.threshold) {
        var startDate = new Date().getTime() - this.props.threshold * 1000;
        while (this.state.data.length > 0) {
          var item = this.state.data[0];
          if (!item.timestamp || item.timestamp < startDate) {
            this.state.data.shift();
          } else {
            break;
          }
        }
      }

      self.graph.load({
        json: this.state.data,
        keys: {
          x: "timestamp",
          value: keys
        }
      });

      this.beautifyLegend();
    }
  },

  componentWillUnmount: function componentWillUnmount() {
    this.destroyGraph();
  },

  componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
    var oldProps = Object.assign({}, this.props);
    var newProps = Object.assign({}, prevProps);
    oldProps.data = null;
    newProps.data = null;
    if (JSON.stringify(oldProps) != JSON.stringify(newProps)) {
      this.createGraph();
      this.updateGraph();
    } else {
      this.updateGraph();
    }
  },

  onEnter: function onEnter() {
    this.stopScrolling();
  },

  onLeave: function onLeave() {
    if (this.props.autoscroll) {
      this.startScrolling();
    }
  },

  render: function render() {
    var style = Object.assign({}, styles.container, this.props.style ? this.props.style : {});
    if (!this.id) {
      this.id = "X" + Math.round(Math.random() * 1000000);
    }
    return React.createElement('div', { id: this.id, className: 'lineChart', style: style, onMouseOver: this.onEnter, onMouseOut: this.onLeave });
  }
});

module.exports = LineChart;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./Icon.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/Icon.jsx"}],"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/LineChartDygraphs.jsx":[function(require,module,exports){
(function (global){
'use strict';

var _legend;

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _reactDom = (typeof window !== "undefined" ? window['ReactDOM'] : typeof global !== "undefined" ? global['ReactDOM'] : null);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _dygraphs = (typeof window !== "undefined" ? window['Dygraph'] : typeof global !== "undefined" ? global['Dygraph'] : null);

var _dygraphs2 = _interopRequireDefault(_dygraphs);

var _LineChartRangeSelection = require('./LineChartRangeSelection.jsx');

var _LineChartRangeSelection2 = _interopRequireDefault(_LineChartRangeSelection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  container: {
    width: "100%",
    height: "100%"
  },
  legend: (_legend = {
    width: "100%",
    height: "30px",
    margin: "10 auto"
  }, _defineProperty(_legend, 'width', "80%"), _defineProperty(_legend, 'textAlign', "center"), _legend),
  legendEntry: {
    //float: "left"
    display: "inline-block",
    cursor: "pointer"
  },
  legendIcon: {
    width: "8px",
    height: "8px",
    display: "inline-block",
    borderRadius: "4px",
    margin: "0 5px 0 15px"
  },
  legendLabel: {
    fontSize: "12px"
  }
};

var LineChartDygraphs = function (_Component) {
  _inherits(LineChartDygraphs, _Component);

  function LineChartDygraphs(props) {
    _classCallCheck(this, LineChartDygraphs);

    var _this = _possibleConstructorReturn(this, (LineChartDygraphs.__proto__ || Object.getPrototypeOf(LineChartDygraphs)).call(this, props));

    _this.componentWillReceiveProps = function (nextProps) {};

    _this.componentDidUpdate = function (prevProps, prevState) {
      if (_this.props.legend != prevProps.legend || _this.props.overview != prevProps.overview || _this.props.stacked != prevProps.stacked || _this.props.steps != prevProps.steps || _this.height <= 0 || _this.width <= 0 || _this.props.height != prevProps.height || _this.props.width != prevProps.width || JSON.stringify(_this.props.plots) != JSON.stringify(prevProps.plots) || JSON.stringify(_this.props.theme) != JSON.stringify(prevProps.theme)) {
        _this.createGraph();
        _this.updateGraph();
      } else if (_this.props.data != prevProps.data) {
        _this.updateGraph();
      }

      if (_this.props.isRealTime != prevProps.isRealTime || _this.props.threshold != prevProps.threshold || _this.props.windowStart != prevProps.windowStart || _this.props.windowEnd != prevProps.windowEnd) {

        if (_this.graph) {
          if (_this.props.isRealTime) {
            setTimeout(function () {
              _this.startScrolling();
            }, 1);
          } else {
            _this.stopScrolling();
            _this.graph.updateOptions({
              dateWindow: [_this.props.windowStart, _this.props.windowEnd]
            });
          }
        }
      }
    };

    _this.componentDidMount = function () {
      _this.createGraph();
    };

    _this.startScrolling = function () {
      _this.stopScrolling();
      _this.adjustWindow();
    };

    _this.stopScrolling = function () {
      if (_this.scrollInterval) {
        clearTimeout(_this.scrollInterval);
      }
    };

    _this.adjustWindow = function () {
      if (_this.graph) {
        var end = new Date().getTime() - _this.props.threshold * 1000;
        var start = new Date().getTime();
        _this.graph.updateOptions({ 'dateWindow': [end, start] });
        // simple algorithm to calculate the speed
        var speed = _this.props.threshold * 2;
        if (speed < 50) {
          speed = 50;
        }

        if (_this.props.standby) {
          // slow down when a dialog is open
          speed = 1000;
        }

        var next = start + speed;
        var now = new Date().getTime();
        var wait = next - now;
        if (wait < 1) {
          wait = 1;
        }
      }
      var self = _this;
      _this.scrollInterval = setTimeout(function () {
        self.adjustWindow();
      }, wait);
    };

    _this.createGraph = function () {
      var self = _this;
      _this.destroyGraph();

      if (_this.props.isRealTime) {
        _this.startScrolling();
      } else {
        _this.stopScrolling();
      }

      var container = _reactDom2.default.findDOMNode(_this).firstChild;

      var dom = document.createElement("div");
      dom.style.height = "100%";
      container.appendChild(dom);

      _this.width = _this.props.width ? _this.props.width : container.offsetWidth;
      _this.height = _this.props.height ? _this.props.height : container.offsetHeight;

      if (_this.props.overview) {
        _this.height -= 40;
      }

      if (_this.props.legend) {
        _this.height = _this.height - 40;
      }

      var colors = _this.props.theme.palette;

      if (_this.width > 0 && _this.height > 0) {
        dom.style.width = _this.width + "px";
        dom.style.height = _this.height + "px";

        var keys = [];
        var colorMap = {};
        var names = {};
        for (var i = 0; i < _this.props.plots.length; i++) {
          var plot = _this.props.plots[i];
          keys.push(plot.id);
          colorMap[plot.id] = colors[i % colors.length];
          names[plot.id] = plot.label;
        }

        if (Object.keys(_this.props.plots).length > 0) {
          var _dgConfig;

          var labels = ['Time'];

          var dgConfig = (_dgConfig = {
            showRoller: false,
            animatedZooms: false,
            labels: labels,
            hideOverlayOnMouseOut: true,
            showLabelsOnHighlight: true,
            connectSeparatedPoints: true,
            ylabel: "",
            includeZero: true,
            fillGraph: true,
            strokeWidth: 1,
            drawPoints: true,
            stepPlot: _this.props.steps,
            stackedGraph: _this.props.stacked,
            gridLineColor: _this.props.theme.minor,
            axisLabelColor: _this.props.theme.minor,
            axisLineColor: _this.props.theme.minor
          }, _defineProperty(_dgConfig, 'strokeWidth', 1), _defineProperty(_dgConfig, 'highlightCircleSize', 3), _defineProperty(_dgConfig, 'highlightSeriesOpts', {
            strokeWidth: 2,
            strokeBorderWidth: 0,
            highlightCircleSize: 3
          }), _defineProperty(_dgConfig, 'series', {}), _defineProperty(_dgConfig, 'legend', _this.props.isRealTime ? "never" : "onmouseover"), _dgConfig);

          var plot;
          for (var i in _this.props.plots) {
            plot = _this.props.plots[i];
            if (plot) {
              var item = {};
              dgConfig.series[plot.label] = item;
              labels.push(plot.label);
              item.color = _this.props.theme.palette[i % _this.props.theme.palette.length];
            }
          }

          dgConfig.labels = labels;
          _this.graph = new _dygraphs2.default(dom, _this.props.data, dgConfig);
        }
      }
    };

    _this.destroyGraph = function () {
      _this.stopScrolling();
      var dom = _reactDom2.default.findDOMNode(_this).firstChild;
      while (dom.firstChild) {
        dom.removeChild(dom.firstChild);
      }
      _this.graph = null;
    };

    _this.updateGraph = function () {
      var self = _this;
      if (!_this.graph) {
        _this.createGraph();
      }
      if (_this.graph) {
        var container = _reactDom2.default.findDOMNode(_this);
        var width = _this.props.width ? _this.props.width : container.offsetWidth;
        var height = _this.props.height ? _this.props.height : container.offsetHeight;
        if (_this.width != width || _this.height != height) {
          _this.width = width;
          _this.height = height;
          //this.graph.resize({height: this.height, width: this.width});
        }

        var data = _this.props.data;
        if (data.length == 0) {
          data = [];
          // add fake data to avoid charting error
          var fakeData = [];
          fakeData.push(new Date());
          for (var i = 0; i < _this.props.plots.length; i++) {
            fakeData.push(null);
          }
          data.push(fakeData);
        }
        _this.graph.updateOptions({ 'file': data });
      }
    };

    _this.componentWillUnmount = function () {
      _this.destroyGraph();
    };

    _this.onHighlight = function (plot) {
      if (plot) {
        // TODO this does not work if the last item has no value for this series
        _this.graph.setSelection(_this.props.data[_this.props.data.length - 1], plot.label);
      } else {
        _this.graph.clearSelection();
      }
    };

    _this.onRangeChanged = function (evt, temporary) {
      // var left = new Date(evt[0]);
      // var right = new Date(evt[1]);
      _this.graph.updateOptions({
        dateWindow: [evt[0], evt[1]]
      });
      if (_this.props.onChange) {
        _this.props.onChange(evt[0], evt[1], temporary);
      }
    };

    _this.render = function () {
      var self = _this;
      var style = Object.assign({}, styles.container, _this.props.style ? _this.props.style : {});
      if (!_this.id) {
        _this.id = "X" + Math.round(Math.random() * 1000000);
      }
      var count = 0;

      var legend = "";
      if (_this.props.legend && _this.height > 0) {
        var legend = React.createElement(
          'div',
          { style: styles.legend },
          _this.props.plots.map(function (plot) {
            var iconStyle = Object.assign({}, styles.legendIcon, { backgroundColor: self.props.theme.palette[count % self.props.theme.palette.length] });
            var labelStyle = Object.assign({}, styles.legendLabel, { color: self.props.theme.minor });
            count++;
            return React.createElement(
              'div',
              { key: plot.id, style: styles.legendEntry, onMouseOver: function onMouseOver() {
                  self.onHighlight(plot);
                }, onMouseOut: function onMouseOut() {
                  self.onHighlight();
                } },
              React.createElement('div', { style: iconStyle }),
              React.createElement(
                'span',
                { style: labelStyle },
                plot.label
              )
            );
          })
        );
      }

      var overview = "";
      if (_this.props.overview && _this.graph) {
        var end = void 0,
            start = void 0,
            endDate = void 0,
            startDate = void 0;
        if (_this.props.isRealTime) {
          endDate = moment();
          startDate = endDate.clone().subtract(_this.props.threshold, 's');
          end = endDate.valueOf();
          start = startDate.valueOf();
        } else {
          endDate = _this.props.endDate;
          startDate = _this.props.startDate;
          end = _this.props.windowEnd;
          start = _this.props.windowStart;
        }
        overview = React.createElement(_LineChartRangeSelection2.default, {
          theme: _this.props.theme,
          nls: _this.props.nls,
          data: _this.props.data,
          plots: _this.props.plots,
          height: 30,
          width: _this.props.rangeWidth,
          stacked: _this.props.stacked,
          steps: _this.props.steps,
          onChange: _this.onRangeChanged,
          windowStart: start,
          windowEnd: end,
          defaultThresholds: _this.props.defaultThresholds,
          isRealTime: _this.props.isRealTime,
          threshold: _this.props.threshold,
          startDate: startDate,
          endDate: endDate,
          setDateTime: _this.props.setDateTime,
          setThreshold: _this.props.setThreshold,
          setRealTime: _this.props.setRealTime,
          getMinimumRange: _this.props.getMinimumRange
        });
      }

      return React.createElement(
        'div',
        { id: _this.id, className: 'lineChart', style: style },
        React.createElement('div', null),
        overview,
        legend
      );
    };

    _this.state = {};
    return _this;
  }

  return LineChartDygraphs;
}(_react.Component);

LineChartDygraphs.propTypes = {
  style: _react.PropTypes.object,
  theme: _react.PropTypes.object.isRequired,
  nls: _react.PropTypes.object,
  data: _react.PropTypes.array,
  plots: _react.PropTypes.array,
  height: _react.PropTypes.number,
  width: _react.PropTypes.number,
  stacked: _react.PropTypes.bool,
  steps: _react.PropTypes.bool,
  overview: _react.PropTypes.bool,
  legend: _react.PropTypes.bool,
  small: _react.PropTypes.bool, //still needed?
  standby: _react.PropTypes.bool,
  range: _react.PropTypes.number,
  threshold: _react.PropTypes.number,
  isRealTime: _react.PropTypes.bool,
  startDate: _react.PropTypes.object,
  endDate: _react.PropTypes.object,
  windowStart: _react.PropTypes.number,
  windowEnd: _react.PropTypes.number,
  onChange: _react.PropTypes.func,
  //children only:
  defaultThresholds: _react.PropTypes.array,
  setDateTime: _react.PropTypes.func,
  setRealTime: _react.PropTypes.func,
  setThreshold: _react.PropTypes.func,
  getMinimumRange: _react.PropTypes.func,
  rangeWidth: _react.PropTypes.number
};

LineChartDygraphs.defaultProps = {
  data: [],
  plots: [],
  threshold: 300,
  overview: true,
  stacked: false,
  steps: false,
  legend: true,
  small: false
};

module.exports = LineChartDygraphs;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./LineChartRangeSelection.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/LineChartRangeSelection.jsx"}],"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/LineChartInteractionPane.jsx":[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _dygraphs = (typeof window !== "undefined" ? window['Dygraph'] : typeof global !== "undefined" ? global['Dygraph'] : null);

var _dygraphs2 = _interopRequireDefault(_dygraphs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(255,255,255,0.5)",
    position: "absolute",
    top: 0,
    borderBottom: "1px solid grey"
  },
  slider: {
    borderBottom: "3px solid black",
    position: "absolute",
    bottom: -2,
    height: "30px"
  },
  handle: {
    position: "absolute",
    width: "12px",
    height: "12px",
    borderRadius: "6px",
    border: "4px solid black",
    backgroundColor: "white",
    transition: "all 0.3s ease"
  },
  mover: {
    position: "absolute",
    width: "20px",
    height: "40px",
    backgroundColor: "transparent",
    zIndex: 1
  },
  cover: {
    position: "absolute",
    backgroundColor: "rgba(0,0,0,0.05)",
    height: "30px"
  }
};

var LineChartInteractionPane = function (_Component) {
  _inherits(LineChartInteractionPane, _Component);

  function LineChartInteractionPane(props) {
    _classCallCheck(this, LineChartInteractionPane);

    var _this = _possibleConstructorReturn(this, (LineChartInteractionPane.__proto__ || Object.getPrototypeOf(LineChartInteractionPane)).call(this, props));

    _initialiseProps.call(_this);

    _this.state = {
      dragging: false,
      dragElement: null,
      initialPos: null,
      windowStart: props.windowStart,
      windowEnd: props.windowEnd,
      grabLeft: false,
      grabRight: false
    };
    return _this;
  }

  return LineChartInteractionPane;
}(_react.Component);

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.componentWillReceiveProps = function (props) {
    var model = {};
    console.log(props);
    if (!_this2.state.dragging) {
      if (props.windowStart != _this2.state.windowStart) {
        model.windowStart = props.windowStart;
      }
      if (props.windowEnd != _this2.state.windowEnd) {
        model.windowEnd = props.windowEnd;
      }
      if (Object.keys(model).length > 0) {
        _this2.setState(model);
      }
    }
  };

  this.componentDidUpdate = function (props, state) {
    if (_this2.state.dragging && (!state || !state.dragging)) {
      document.addEventListener('mousemove', _this2.onMouseMove);
      document.addEventListener('mouseup', _this2.onMouseUp);
    } else if (!_this2.state.dragging && state && state.dragging) {
      document.removeEventListener('mousemove', _this2.onMouseMove);
      document.removeEventListener('mouseup', _this2.onMouseUp);
    }
  };

  this.onMouseDown = function (type, evt) {
    if (evt.button !== 0) return;
    //console.log(evt)
    _this2.setState({
      dragging: true,
      dragType: type,
      dragElement: evt.target,
      dragStart: evt.clientX,
      grabLeft: type != "right",
      grabRight: type != "left"
    });
    evt.stopPropagation();
    evt.preventDefault();
  };

  this.onMouseMove = function (evt) {
    if (!_this2.state.dragging) return;
    var diff = evt.pageX - _this2.state.dragStart;
    _this2.setState({
      dragDiff: diff
    }, function () {
      var range = _this2.getZoomRange();
      if (_this2.props.onChange) {
        _this2.props.onChange(range, true);
      }
    });
  };

  this.onMouseUp = function (evt) {
    var range = _this2.getZoomRange();

    _this2.setState({
      dragging: false,
      dragType: null,
      dragElement: null,
      dragStart: 0,
      dragDiff: 0,
      grabLeft: false,
      grabRight: false,
      windowStart: range[0],
      windowEnd: range[1]
    });
    if (_this2.props.onChange) {
      _this2.props.onChange(range, false);
    }
  };

  this.getZoomRange = function () {
    var start = _this2.props.startDate.valueOf();
    var end = _this2.props.endDate.valueOf();
    var factor = (end - start) / _this2.props.width;
    var zoomStart = _this2.state.windowStart + (_this2.state.dragType == 'left' || _this2.state.dragType == 'center' ? _this2.state.dragDiff * factor : 0);
    var zoomEnd = _this2.state.windowEnd + (_this2.state.dragType == 'center' || _this2.state.dragType == 'right' ? _this2.state.dragDiff * factor : 0);
    var minimumDist = _this2.props.getMinimumRange() * 1000;

    if (zoomStart < start) {
      zoomStart = start;
      if (zoomEnd < start + minimumDist) {
        zoomEnd = start + minimumDist;
      }
    }
    if (zoomEnd > end) {
      zoomEnd = end;
      if (zoomStart > end - minimumDist) {
        zoomStart = end - minimumDist;
      }
    }
    if ((_this2.state.dragType == "left" || _this2.state.dragType == "center" && _this2.state.dragDiff > 0) && zoomStart > zoomEnd - minimumDist) {
      zoomStart = zoomEnd - minimumDist;
    }
    if ((_this2.state.dragType == "right" || _this2.state.dragType == "center" && _this2.state.dragDiff < 0) && zoomEnd < zoomStart + minimumDist) {
      zoomEnd = zoomStart + minimumDist;
    }
    return [zoomStart, zoomEnd];
  };

  this.render = function () {
    var currentRange = _this2.getZoomRange();
    var zoomStart = currentRange[0];
    var zoomEnd = currentRange[1];

    var start = _this2.props.startDate.valueOf();
    var end = _this2.props.endDate.valueOf();

    if (_this2.props.width > 0) {
      var leftPos = (zoomStart - start) / (end - start) * _this2.props.width;
      var rightPos = (zoomEnd - start) / (end - start) * _this2.props.width;

      var containerStyle = _extends({}, styles.container, { width: _this2.props.width + "px",
        height: _this2.props.height + "px", borderColor: _this2.props.theme.minor });
      var sliderStyle = _extends({}, styles.slider, { borderColor: _this2.props.theme.normal,
        left: leftPos + "px", width: rightPos - leftPos + "px" });
      var coverLeftStyle = _extends({}, styles.cover, { left: "0px", width: leftPos + "px" });
      var coverRightStyle = _extends({}, styles.cover, { left: rightPos + "px", right: "0px" });
      var leftHandleStyle = _extends({}, styles.handle, { borderColor: _this2.props.theme.normal,
        left: "-5px", bottom: "-7px", transform: _this2.state.grabLeft ? "scale(1.3)" : "scale(1)" });
      var rightHandleStyle = _extends({}, styles.handle, { borderColor: _this2.props.theme.normal,
        right: "-5px", bottom: "-7px", transform: _this2.state.grabRight ? "scale(1.3)" : "scale(1)" });
      var leftMoverStyle = _extends({}, styles.mover, { left: "-10px", bottom: "-10px" });
      var rightMoverStyle = _extends({}, styles.mover, { right: "-10px", bottom: "-10px" });

      return React.createElement(
        'div',
        { style: containerStyle },
        React.createElement('div', { style: coverLeftStyle }),
        React.createElement(
          'div',
          {
            onMouseDown: function onMouseDown(evt) {
              return _this2.onMouseDown('center', evt);
            },
            style: sliderStyle },
          React.createElement('div', { style: leftHandleStyle }),
          React.createElement('div', { style: rightHandleStyle }),
          React.createElement('div', {
            onMouseDown: function onMouseDown(evt) {
              return _this2.onMouseDown('left', evt);
            },
            style: leftMoverStyle }),
          React.createElement('div', {
            onMouseDown: function onMouseDown(evt) {
              return _this2.onMouseDown('right', evt);
            },
            style: rightMoverStyle })
        ),
        React.createElement('div', { style: coverRightStyle })
      );
    } else {
      return React.createElement('div', null);
    }
  };
};

LineChartInteractionPane.propTypes = {
  style: _react.PropTypes.object,
  theme: _react.PropTypes.object.isRequired,
  windowStart: _react.PropTypes.number,
  windowEnd: _react.PropTypes.number,
  startDate: _react.PropTypes.object,
  endDate: _react.PropTypes.object,
  onChange: _react.PropTypes.func,
  width: _react.PropTypes.number,
  height: _react.PropTypes.number,
  getMinimumRange: _react.PropTypes.func
};

exports.default = LineChartInteractionPane;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/LineChartRangeSelection.jsx":[function(require,module,exports){
(function (global){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _dygraphs = (typeof window !== "undefined" ? window['Dygraph'] : typeof global !== "undefined" ? global['Dygraph'] : null);

var _dygraphs2 = _interopRequireDefault(_dygraphs);

var _Button = require('./Button.jsx');

var _Button2 = _interopRequireDefault(_Button);

var _Select = require('./Select.jsx');

var _Select2 = _interopRequireDefault(_Select);

var _Option = require('./Option.jsx');

var _Option2 = _interopRequireDefault(_Option);

var _LineChartInteractionPane = require('./LineChartInteractionPane.jsx');

var _LineChartInteractionPane2 = _interopRequireDefault(_LineChartInteractionPane);

var _DateTimePicker = require('../../app/shared/DatePicker/DateTimePicker.jsx');

var _DateTimePicker2 = _interopRequireDefault(_DateTimePicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  outerContainer: {
    position: "relative",
    height: "30px"
  },
  buttonContainer: {
    position: "absolute",
    top: "0px",
    height: "30px",
    width: "90px"
  },
  button: {
    width: "100%",
    height: "30px"
  },
  alignLeft: {
    left: "0px"
  },
  alignRight: {
    right: "0px"
  },
  container: {
    position: "relative",
    marginLeft: "100px",
    marginRight: "100px",
    marginTop: "10px"
  },
  inputStyle: {
    fontSize: 12,
    fontWeight: "normal",
    textAlign: "center",
    marginTop: "-2px"
  }
};

var LineChartRangeSelection = function (_Component) {
  _inherits(LineChartRangeSelection, _Component);

  function LineChartRangeSelection(props) {
    _classCallCheck(this, LineChartRangeSelection);

    var _this = _possibleConstructorReturn(this, (LineChartRangeSelection.__proto__ || Object.getPrototypeOf(LineChartRangeSelection)).call(this, props));

    _this.componentWillReceiveProps = function (nextProps) {};

    _this.componentDidMount = function () {
      _this.createGraph();
    };

    _this.createGraph = function () {
      var self = _this;
      _this.destroyGraph();
      var container = ReactDOM.findDOMNode(_this).firstChild.firstChild;

      var dom = document.createElement("div");
      dom.style.height = "100%";
      container.appendChild(dom);

      _this.width = _this.props.width ? _this.props.width : container.offsetWidth;
      _this.height = _this.props.height ? _this.props.height : container.offsetHeight;

      var colors = _this.props.theme.palette;

      var start = void 0,
          end = void 0;
      if (_this.props.isRealTime) {
        end = moment().valueOf();
        start = moment().clone().subtract(_this.props.threshold, 's').valueOf();
      } else {
        end = _this.props.endDate.valueOf();
        start = _this.props.startDate.valueOf();
      }

      if (_this.width > 0 && _this.height > 0) {
        dom.style.width = _this.width + "px";
        dom.style.height = _this.height + "px";

        var keys = [];
        var colorMap = {};
        var names = {};
        for (var i = 0; i < _this.props.plots.length; i++) {
          var plot = _this.props.plots[i];
          keys.push(plot.id);
          colorMap[plot.id] = colors[i % colors.length];
          names[plot.id] = plot.label;
        }

        if (Object.keys(_this.props.plots).length > 0) {
          var labels = ['Time'];
          var dgConfig = {
            showRoller: false,
            animatedZooms: false,
            labels: labels,
            legend: "never",
            hideOverlayOnMouseOut: true,
            highlightCircleSize: 0,
            interactionModel: _dygraphs2.default.Interaction.nonInteractiveModel_,
            connectSeparatedPoints: true,
            includeZero: true,
            fillGraph: false,
            strokeWidth: 1,
            drawPoints: false,
            stepPlot: _this.props.steps,
            stackedGraph: _this.props.stacked,
            showRangeSelector: false,
            series: {},
            axes: {
              y: {
                drawGrid: false,
                drawAxis: false
              },
              x: {
                drawGrid: false,
                drawAxis: false
              }
            },
            dateWindow: [start, end]

          };

          var plot;
          for (var i in _this.props.plots) {
            plot = _this.props.plots[i];
            if (plot) {
              var item = {};
              dgConfig.series[plot.label] = item;
              labels.push(plot.label);
              var color = _this.props.theme.palette[i % _this.props.theme.palette.length];
              item.color = color;
            }
          }

          dgConfig.labels = labels;

          _this.graph = new _dygraphs2.default(dom, _this.props.data, dgConfig);
        }
      }
    };

    _this.destroyGraph = function () {
      var dom = ReactDOM.findDOMNode(_this).firstChild.firstChild;
      while (dom.firstChild) {
        dom.removeChild(dom.firstChild);
      }
      _this.graph = null;
    };

    _this.updateGraph = function () {
      var self = _this;
      if (!_this.graph) {
        _this.createGraph();
      }
      if (_this.graph) {
        var container = ReactDOM.findDOMNode(_this).firstChild;
        var width = _this.props.width ? _this.props.width : container.offsetWidth;
        var height = _this.props.height ? _this.props.height : container.offsetHeight;
        if (_this.width != width || _this.height != height) {
          _this.width = width;
          _this.height = height;
          _this.graph.resize({ height: _this.height, width: _this.width });
        }

        var data = _this.props.data;
        if (data.length == 0) {
          data = [];
          // add fake data to avoid charting error
          var fakeData = [];
          fakeData.push(new Date());
          for (var i = 0; i < _this.props.plots.length; i++) {
            fakeData.push(null);
          }
          data.push(fakeData);
        }

        var start = void 0,
            end = void 0;
        if (_this.props.isRealTime) {
          end = moment().valueOf();
          start = moment().clone().subtract(_this.props.threshold, 's').valueOf();
        } else {
          end = _this.props.endDate.valueOf();
          start = _this.props.startDate.valueOf();
        }

        _this.graph.updateOptions({
          'file': data,
          dateWindow: [start, end]
        });
      }
    };

    _this.onThresholdChanged = function (value) {
      console.log("threshold changed to ", value);
      if (value && typeof value === 'string') {
        value = parseInt(value, 10);
      }
      _this.props.setThreshold(value);
    };

    _this.componentWillUnmount = function () {
      _this.destroyGraph();
    };

    _this.componentDidUpdate = function (prevProps, prevState) {
      var oldProps = _extends({}, prevProps, { start: null, end: null, startDate: null, endDate: null, data: null });
      var newProps = _extends({}, _this.props, { start: null, end: null, startDate: null, endDate: null, data: null });
      if (JSON.stringify(oldProps) != JSON.stringify(newProps)) {
        _this.createGraph();
        _this.updateGraph();
      } else {
        _this.updateGraph();
      }
    };

    _this.render = function () {
      var style = Object.assign({}, styles.container, _this.props.style ? _this.props.style : {});
      style = _extends({}, style, { width: _this.width + "px", height: _this.height + "px" });
      var leftStyle = Object.assign({}, styles.buttonContainer, styles.alignLeft);
      var rightStyle = Object.assign({}, styles.buttonContainer, styles.alignRight);
      var threshold = parseInt(_this.props.threshold, 10);
      var selectStyle = { height: "36px", backgroundColor: "#eceff1" };
      var optionsStyle = { width: "200px", bottom: "30px", fontSize: "12px", backgroundColor: "#eceff1" };
      var thresholdSelect = React.createElement(
        _Select2.default,
        {
          onChange: _this.onThresholdChanged,
          value: "" + _this.props.threshold,
          noUnderscore: true,
          style: selectStyle,
          optionsStyle: optionsStyle,
          inputStyle: styles.inputStyle,
          theme: _this.props.theme },
        _this.props.defaultThresholds.map(function (optionData, index) {
          return React.createElement(
            _Option2.default,
            {
              key: index,
              style: { paddingTop: "5px", paddingBottom: "5px" },
              value: optionData.value.toString(),
              selected: threshold == optionData.value },
            optionData.text
          );
        })
      );
      var nowOnlyText = React.createElement('button', { style: styles.button, value: 'nls.now' });
      var rightPicker = React.createElement(_DateTimePicker2.default, {
        isLeft: false,
        isRealTime: _this.props.isRealTime,
        dateTime: _this.props.endDate,
        nowAlias: 'now',
        checkboxLabel: 'real-time',
        onChange: function onChange(byDatePicker, date) {
          _this.props.setDateTime(false, byDatePicker, date);
        },
        setRealTime: _this.props.setRealTime,
        maxDate: moment(),
        minDate: _this.props.startDate.clone().add(60, 's'),
        theme: _this.props.theme
      });
      var leftPicker = React.createElement(_DateTimePicker2.default, {
        isLeft: true,
        isRealTime: _this.props.isRealTime,
        dateTime: _this.props.startDate,
        nowAlias: 'now',
        checkboxLabel: 'real-time',
        onChange: function onChange(byDatePicker, date) {
          _this.props.setDateTime(true, byDatePicker, date);
        },
        setRealTime: _this.props.setRealTime,
        maxDate: _this.props.endDate.clone().subtract(60, 's'),
        theme: _this.props.theme
      });
      var leftButton = React.createElement(
        'div',
        { style: leftStyle },
        _this.props.isRealTime ? thresholdSelect : leftPicker
      );
      var rightButton = React.createElement(
        'div',
        { style: rightStyle },
        rightPicker
      );
      return React.createElement(
        'div',
        { className: 'historyDatepicker', style: styles.outerContainer },
        React.createElement(
          'div',
          { className: 'lineChart', style: style },
          React.createElement('div', null),
          !_this.props.isRealTime ? React.createElement(_LineChartInteractionPane2.default, _this.props) : undefined
        ),
        leftButton,
        rightButton
      );
    };

    _this.state = {};
    return _this;
  }

  return LineChartRangeSelection;
}(_react.Component);

LineChartRangeSelection.propTypes = {
  style: _react.PropTypes.object,
  theme: _react.PropTypes.object.isRequired,
  nls: _react.PropTypes.object,
  data: _react.PropTypes.array,
  plots: _react.PropTypes.array,
  stacked: _react.PropTypes.bool,
  steps: _react.PropTypes.bool,
  windowStart: _react.PropTypes.number,
  windowEnd: _react.PropTypes.number,
  defaultThresholds: _react.PropTypes.array,
  isRealTime: _react.PropTypes.bool,
  threshold: _react.PropTypes.number,
  startDate: _react.PropTypes.object,
  endDate: _react.PropTypes.object,
  setDateTime: _react.PropTypes.func,
  setRealTime: _react.PropTypes.func,
  setThreshold: _react.PropTypes.func,
  getMinimumRange: _react.PropTypes.func,
  onChange: _react.PropTypes.func,
  width: _react.PropTypes.number,
  height: _react.PropTypes.number
};

LineChartRangeSelection.defaultProps = {
  data: [],
  plots: [],
  stacked: false,
  steps: false
};

module.exports = LineChartRangeSelection;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../../app/shared/DatePicker/DateTimePicker.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/app/shared/DatePicker/DateTimePicker.jsx","./Button.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/Button.jsx","./LineChartInteractionPane.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/LineChartInteractionPane.jsx","./Option.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/Option.jsx","./Select.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/Select.jsx"}],"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/List.jsx":[function(require,module,exports){
(function (global){
'use strict';

/************ Dependencies *************/
var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
var Icon = require('./Icon.jsx');
var Tooltip = require('./Tooltip.jsx');
var Paging = require('./Paging.jsx');
var RPT = React.PropTypes;
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

/************ Styles *************/
var styles = {
  actionsContainer: {
    MozTransition: 'all 0.25s ease',
    WebkitTransition: 'all 0.25s ease',
    OTransition: 'all 0.25s ease',
    transition: 'all 0.25s ease',
    whiteSpace: "nowrap",
    opacity: "1",
    marginTop: "7px"
  },
  outerActions: {
    flex: "0 0 auto"
  },
  description: {
    fontSize: "12px",
    overflow: "hidden",
    width: "100%"
  },
  infoContainer: {
    flex: "0 1 auto",
    overflow: "hidden",
    width: "100%"
  },
  itemContainer: {
    padding: "8px 20px",
    cursor: "pointer",
    position: "relative",
    display: "flex",
    justifyContent: "space-between"
  },
  list: {
    position: "relative",
    MozTransition: 'top 0.5s ease',
    WebkitTransition: 'top 0.5s ease',
    OTransition: 'top 0.5s ease',
    transition: 'top 0.5s ease',
    top: 0
  },
  border: {
    borderBottom: "1px solid #bbb"
  },
  listAndPaging: {
    flex: '1 0 auto',
    height: '100px',
    overflow: 'hidden'
  },
  listSeparator: {
    borderTop: "1px solid #bbb",
    marginBottom: "5px",
    marginTop: "3px"
  },
  paging: {
    bottom: "0px",
    position: "absolute",
    width: "100%"
  },
  title: {
    fontSize: "14px",
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap"
  },
  icon: {
    margin: "0 5px"
  },
  expandIcon: {
    position: "absolute",
    cursor: "pointer",
    zIndex: 1,
    overflow: "visible",
    right: "25px",
    top: "15px",
    opacity: '1',
    MozTransition: 'all 0.25s ease',
    WebkitTransition: 'all 0.25s ease',
    OTransition: 'all 0.25s ease',
    transition: 'all 0.25s ease',
    outline: 'none',
    width: "0px"
  },
  expandIconRotate: {
    transform: "rotate(90deg)"
  },
  expandIconOpen: {
    opacity: "0.3"
  },
  actionContainerCollapsed: {
    width: "0px",
    opacity: "0"
  },
  scroller: {
    position: 'absolute',
    bottom: '20px',
    right: '20px'
  },
  scrollerButton: {
    width: '30px',
    height: '30px',
    borderRadius: '2px',
    display: 'inline-block',
    border: '1px solid silver',
    margin: '2px',
    backgroundColor: 'white'
  },
  scrollerIcon: {
    top: '2px',
    left: '2px',
    position: 'relative'
  },
  spaceEater: {
    flex: "99 0 auto"
  }
};

/*----------- ListItem ------------*/

var ListItem = React.createClass({
  displayName: 'ListItem',

  /************ Models *************/
  propTypes: {
    actions: RPT.array,
    nls: RPT.object,
    style: RPT.object,
    theme: RPT.object.isRequired,
    title: RPT.string,
    selected: RPT.bool,
    onClick: RPT.func,
    noBorder: RPT.bool,
    onSelection: RPT.func,
    alwaysExpand: RPT.bool,
    id: RPT.string
  },

  /************ Controller *************/
  getDefaultProps: function getDefaultProps() {
    return {
      actions: [],
      title: "",
      selected: false,
      inactive: false,
      noBorder: false,
      onSelection: null,
      alwaysExpand: false
    };
  },

  getInitialState: function getInitialState() {
    return {
      hover: false,
      expanded: false
    };
  },

  componentDidMount: function componentDidMount() {
    var listEntryHeight = $(this.refs.listEntry).height() + 1; // Addition with 1, because of borderHeight
  },

  componentWillUnmount: function componentWillUnmount() {},

  onClick: function onClick() {
    if (this.props.onClick) {
      this.props.onClick(this.props.id, !this.props.selected);
    }
    if (this.props.onSelection) {
      this.props.onSelection(this.props.id, !this.props.selected);
    }
  },

  onMouseOver: function onMouseOver() {
    this.setState({
      hover: true
    });
  },

  onMouseOut: function onMouseOut() {
    this.setState({
      hover: false
    });
  },

  onExpand: function onExpand(evt) {
    evt.stopPropagation();
    this.setState({
      expanded: !this.state.expanded
    });
    return false;
  },

  onCloseActions: function onCloseActions() {
    this.setState({
      expanded: false
    });
  },
  /************ View *************/
  render: function render() {
    var self = this;
    var style = Object.assign({}, styles);

    var descriptionStyle = Object.assign({}, style.description, { color: this.props.theme.minor });
    var titleStyle = Object.assign({}, style.title, { color: this.props.theme.major });
    if (this.props.inactive) {
      descriptionStyle.opacity = "0.3";
      titleStyle.opacity = "0.3";
    }

    var containerStyle = Object.assign({}, style.itemContainer, this.props.style);

    if (this.state.hover) {
      containerStyle.backgroundColor = this.props.theme.hover;
    }
    if (this.props.selected) {
      containerStyle.backgroundColor = this.props.theme.select;
    }

    if (!this.props.noBorder) {
      containerStyle = Object.assign(containerStyle, style.border);
    }

    // Construct actions
    var actions = this.props.actions.map(function (item, index) {
      var itemStyle = Object.assign({}, styles.icon, item.style ? item.style : {});

      if (item.tooltip !== undefined) {
        return React.createElement(
          Tooltip,
          { theme: self.props.theme, value: item.tooltip.value, direction: 'left', showOnClick: true, asSpan: true, delay: 500, idx: index },
          React.createElement(Icon, {
            icon: item.icon,
            style: itemStyle,
            color: self.props.theme.major,
            key: index //to prevent react warning
            , nls: self.props.nls,
            onClick: function onClick(evt) {
              item.onClick(self.props.id);evt.stopPropagation();return false;
            },
            theme: self.props.theme
          })
        );
      } else {
        return React.createElement(Icon, {
          icon: item.icon,
          style: itemStyle,
          color: self.props.theme.major,
          key: index //to prevent react warning
          , nls: self.props.nls,
          onClick: function onClick(evt) {
            item.onClick(self.props.id);evt.stopPropagation();return false;
          },
          theme: self.props.theme
        });
      }
    });

    var expandIconStyle = Object.assign({}, styles.expandIcon, this.state.expanded ? styles.expandIconOpen : {});
    var expandIcon = "";
    if (!this.props.alwaysExpand && actions.length > 0) {
      expandIcon = React.createElement(
        'a',
        { style: expandIconStyle, tabIndex: '1', href: 'javascript:void(0)', onBlur: this.onCloseActions },
        React.createElement(Icon, { theme: this.props.theme, style: styles.expandIconRotate, color: this.props.theme.major, icon: 'dots', onClick: this.onExpand })
      );
    }

    var actionContainerStyle = Object.assign({}, styles.actionsContainer, !this.state.expanded && !this.props.alwaysExpand ? styles.actionContainerCollapsed : {});

    // View output
    return React.createElement(
      'div',
      { name: 'entry', ref: 'listEntry', style: containerStyle, onClick: this.onClick, onMouseOver: this.onMouseOver, onMouseOut: this.onMouseOut },
      React.createElement(
        'div',
        { style: style.infoContainer },
        React.createElement(
          'div',
          { style: titleStyle },
          this.props.title
        ),
        React.createElement(
          'div',
          { style: descriptionStyle },
          this.props.children
        )
      ),
      React.createElement('div', { style: styles.spaceEater }),
      React.createElement(
        'div',
        { style: styles.outerActions },
        React.createElement(
          'div',
          { style: actionContainerStyle },
          actions
        )
      ),
      expandIcon
    );
  }

});

/*----------- List ------------*/

var List = React.createClass({
  displayName: 'List',

  /************ Models *************/
  propTypes: {
    nls: RPT.object,
    border: RPT.object,
    style: RPT.object,
    theme: RPT.object.isRequired,
    expanded: RPT.bool,
    selectFirstItem: RPT.bool,
    scrollable: RPT.bool,
    height: RPT.number
  },

  /************ Controller *************/
  getDefaultProps: function getDefaultProps() {
    return {
      border: {
        between: true,
        bottom: true,
        top: true
      },
      expanded: false
    };
  },

  getInitialState: function getInitialState() {
    return {
      filteredList: []
    };
  },

  componentDidMount: function componentDidMount() {
    this.computeEntriesPerPage();
  },

  componentWillMount: function componentWillMount() {},

  componentWillUnmount: function componentWillUnmount() {
    console.log("Unmount");
  },

  componentWillReceiveProps: function componentWillReceiveProps(newProps) {
    var self = this;
    // FLM: Removed this because it can lead to loops
    if (newProps.height != this.props.height) {
      setTimeout(function () {
        self.computeEntriesPerPage();
      }, 500);
    }
  },

  computeEntriesPerPage: function computeEntriesPerPage() {
    var tag = $(this.refs.list);
    var availableHeight = this.props.height ? this.props.height : tag.height();
    if (availableHeight <= 0) {
      return;
    }
    var entryHeight = tag.find("[name='entry']").outerHeight(true);
    if (typeof entryHeight == "number" && typeof availableHeight == "number") {
      //entryHeight += 1; // addition of 1 for border between entries
      var entriesPerPage = Math.floor(availableHeight / entryHeight);
      if (entriesPerPage != this.state.entriesPerPage || entryHeight != this.state.entryHeight) {
        this.setState({
          entriesPerPage: entriesPerPage,
          entryHeight: entryHeight
        });
        console.log("Entries per pages: ", entriesPerPage);
      }
    } else if (this.state.entriesPerPage != -1) {
      this.setState({
        entriesPerPage: -1
      });
    }
  },

  filterByPage: function filterByPage(from, to, entriesPerNewPage, currentPage) {
    var self = this;
    //    setTimeout(function() {
    if (from === undefined) {
      // empty list and no paging
      self.setState({
        from: null,
        to: null
      });
    } else {
      if (self.state.from != from || self.state.to != to) {
        self.setState({
          from: from,
          to: to
        });
      }
    }
    //    },1);
  },

  onSelection: function onSelection(id, state) {
    if (state) {
      this.setState({
        selected: id
      });
    } else {
      this.setState({
        selected: null
      });
    }
  },

  onClearSelection: function onClearSelection() {
    var self = this;
    var allItems = React.Children.toArray(this.props.children);
    if (this.state.selected) {
      for (var i = 0; i < allItems.length; i++) {
        var item = allItems[i];
        if (item.props && item.props.id == this.state.selected) {
          if (item.props.onClick) {
            item.props.onClick(item.props.id, true);
          }
          self.onSelection(self.state.selected, false);
          return;
        }
      }
    }
  },

  onScrollUp: function onScrollUp() {
    var pos = this.state.from;
    if (pos === undefined) {
      pos = 0;
    }
    pos = pos - this.state.entriesPerPage;
    if (pos < 0) {
      pos = 0;
    }
    this.setState({
      from: pos
    });
  },

  onScrollDown: function onScrollDown() {
    var pos = this.state.from;
    if (pos === undefined) {
      pos = 0;
    }
    var size = React.Children.toArray(this.props.children).length;
    if (pos + this.state.entriesPerPage < size) {
      pos = pos + this.state.entriesPerPage;
    }
    this.setState({
      from: pos
    });
  },

  componentDidUpdate: function componentDidUpdate() {
    var self = this;
    if (this.state.entriesPerPage === undefined || this.state.entriesPerPage == -1 && React.Children.count(this.props.children)) {
      self.computeEntriesPerPage();
    }
  },

  /************ View *************/
  render: function render() {
    var self = this;
    var style = Object.assign({}, styles, this.props.style ? this.props.style : {});
    var listProps = this.props;
    var listLength = this.state.filteredList.length;

    var allItems = React.Children.toArray(this.props.children);
    var itemsOnPage = null;
    if (this.props.scrollable) {
      itemsOnPage = allItems;
    } else if (this.state.to === null) {
      itemsOnPage = [];
    } else {
      itemsOnPage = allItems.slice(this.state.from, this.state.to + 1);
    }

    // find selected item to move the focused page, just in case it moves out of focus
    var focusItem = undefined;
    if (this.state.selected) {
      for (var i = 0; i < allItems.length; i++) {
        var item = allItems[i];
        if (item.props && item.props.id == this.state.selected) {
          if (this.state.to && (this.state.from < i || this.state.to > i)) {
            focusItem = i;
          }
        }
      }
    }

    // set callbacks and selection
    var augmentedItems = [];
    for (var i = 0; i < itemsOnPage.length; i++) {
      var item = itemsOnPage[i];
      var selected = false;
      if (this.state.selected && item.props && item.props.id == this.state.selected) {
        selected = true;
      }
      var newItem = React.cloneElement(item, {
        onSelection: this.onSelection,
        selected: selected
      });
      augmentedItems.push(newItem);
    }

    // preselect the first item if nothing has been clicked before
    if (augmentedItems.length > 0 && this.props.selectFirstItem && !this.preselectionDone && !this.state.selected) {
      this.preselectionDone = true;
      setTimeout(function () {
        var item = augmentedItems[0];
        self.setState({
          selected: augmentedItems[0].props.id
        });
        if (item.props.onClick) {
          item.props.onClick(item.props.id, true);
        }
      }, 500);
    }

    var listStyle = style.list;

    var control = "";
    if (this.props.scrollable) {
      var from = this.state.from ? this.state.from : 0;
      if (this.state.from !== undefined) {
        listStyle = Object.assign({}, listStyle, { top: -this.state.entryHeight * from + 'px' });
      }

      var scrollerButtonStyle = Object.assign({}, styles.scrollerButton, { backgroundColor: this.props.theme.hover, borderColor: this.props.theme.select });
      var scrollerButtonStyleUp = Object.assign({}, scrollerButtonStyle, from == 0 ? { opacity: 0.3 } : {});
      var scrollerButtonStyleDown = Object.assign({}, scrollerButtonStyle, from + this.state.entriesPerPage >= itemsOnPage.length ? { opacity: 0.3 } : {});
      control = React.createElement(
        'div',
        { style: styles.scroller },
        React.createElement(
          'div',
          { style: scrollerButtonStyleUp },
          React.createElement(Icon, {
            icon: 'up',
            style: styles.scrollerIcon,
            color: self.props.theme.major,
            nls: self.props.nls,
            onClick: function onClick(evt) {
              self.onScrollUp();evt.stopPropagation();return false;
            },
            theme: self.props.theme
          })
        ),
        React.createElement(
          'div',
          { style: scrollerButtonStyleDown },
          React.createElement(Icon, {
            icon: 'down',
            style: styles.scrollerIcon,
            color: self.props.theme.major,
            nls: self.props.nls,
            onClick: function onClick(evt) {
              self.onScrollDown();evt.stopPropagation();return false;
            },
            theme: self.props.theme
          })
        )
      );
    } else {
      control = React.createElement(
        'div',
        { style: style.paging },
        React.createElement(Paging, { key: 'listPaging', onClearSelection: this.onClearSelection, onChange: this.filterByPage, focusItem: focusItem, perPage: this.state.entriesPerPage, theme: this.props.theme, total: React.Children.count(this.props.children) })
      );
    }

    // View output
    return React.createElement(
      'div',
      { ref: 'listAndPaging', style: style.listAndPaging },
      React.createElement(
        'div',
        { ref: 'list', style: listStyle },
        augmentedItems
      ),
      control
    );
  }

});

List.ListItem = ListItem;
module.exports = List;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./Icon.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/Icon.jsx","./Paging.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/Paging.jsx","./Tooltip.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/Tooltip.jsx"}],"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/LoadIndicator.jsx":[function(require,module,exports){
(function (global){
'use strict';

var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
var RPT = React.PropTypes;
var Icon = require('./Icon.jsx');

var styles = {};

var LoadIndicator = React.createClass({
	displayName: 'LoadIndicator',

	propTypes: {
		theme: RPT.object.isRequired,
		style: RPT.object,
		wait: RPT.number,
		useDataPoints: RPT.bool,
		nls: RPT.object
	},

	getDefaultProps: function getDefaultProps() {
		return {
			wait: 30,
			useDataPoints: false
		};
	},

	getInitialState: function getInitialState() {
		return {
			counter: this.props.wait
		};
	},

	componentDidMount: function componentDidMount() {
		this.startCounter();
	},

	startCounter: function startCounter() {
		var self = this;
		setTimeout(function () {
			var counter = self.state.counter;
			if (counter > 0 && self.isMounted()) {
				self.setState({
					counter: counter - 1
				});
				self.startCounter();
			}
		}, 1000);
	},

	render: function render() {
		var text = "";
		if (this.state) {
			if (this.state.counter <= 0) {
				if (this.props.children) {
					text = this.props.children;
				} else {
					if (this.props.useDataPoints) {
						text = React.createElement(
							'div',
							null,
							React.createElement(
								'span',
								null,
								this.props.nls.resolve('Dashboard.Cards.Customization.NoMessages')
							)
						);
					} else {
						text = React.createElement(
							'div',
							null,
							React.createElement(
								'span',
								null,
								this.props.nls.resolve('Dashboard.Cards.Customization.NoData')
							)
						);
					}
				}
			} else {
				text = this.props.nls.resolve('Dashboard.Cards.Customization.Loading') + " " + (this.state.counter % 3 - 2 == 0 ? ":" : ".") + (this.state.counter % 3 - 1 == 0 ? ":" : ".") + (this.state.counter % 3 == 0 ? ":" : ".");
			}
		}
		return React.createElement(
			'div',
			null,
			text
		);
	}
});

module.exports = LoadIndicator;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./Icon.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/Icon.jsx"}],"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/LoadIndicatorIcon.jsx":[function(require,module,exports){
(function (global){
"use strict";

var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
var RPT = React.PropTypes;

var styles = {
  circle: {
    stroke: "white",
    fill: "transparent",
    strokeDasharray: 50,
    strokeDashoffset: -50,

    WebkitAnimationName: "spin",
    MozAnimationName: "spin",
    MsAnimationName: "spin",
    OAnimationName: "spin",
    animationName: "spin",

    WebkitAnimationDuration: "1.5s",
    MozAnimationDuration: "1.5s",
    MsAnimationDuration: "1.5s",
    OAnimationDuration: "1.5s",
    animationDuration: "1.5s",

    WebkitAnimationDirection: "forward",
    MozAnimationDirection: "forward",
    MsAnimationDirection: "forward",
    OAnimationDirection: "forward",
    animationDirection: "forward",

    WebkitAnimationIterationCount: "infinite",
    MozAnimationIterationCount: "infinite",
    MsAnimationIterationCount: "infinite",
    OAnimationIterationCount: "infinite",
    animationIterationCount: "infinite"
  },
  loader: {
    strokeWidth: "2px"
  }
};

// Documentation link:
// https://github.ibm.com/IoT/dashboard-component/wiki/Icon-component
//

var LoadIndicatorIcon = React.createClass({
  displayName: "LoadIndicatorIcon",

  propTypes: {
    style: RPT.object,
    theme: RPT.object,
    //icon: RPT.isRequired,
    color: RPT.string,
    disabled: RPT.bool,
    size: RPT.number,
    onClick: RPT.func,
    onEnter: RPT.func,
    onLeave: RPT.func
  },

  getDefaultProps: function getDefaultProps() {
    return {
      disabled: false,
      size: 24,
      onClick: function onClick() {}
    };
  },

  getInitialState: function getInitialState() {
    return {};
  },

  componentWillMount: function componentWillMount() {},

  render: function render() {

    return React.createElement(
      "svg",
      { width: "24px", height: "24px", viewBox: "0 0 19 19" },
      React.createElement(
        "g",
        { style: styles.loader, id: "Page-1", stroke: "none", fill: "none" },
        React.createElement("circle", { style: styles.circle, id: "Oval", transform: "translate(9.000000, 9.000000) rotate(-90.000000) translate(-9.000000, -9.000000) ", cx: "9", cy: "9", r: "8" })
      )
    );
  }
});

module.exports = LoadIndicatorIcon;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/MapPin.jsx":[function(require,module,exports){
(function (global){
"use strict";

var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
var RPT = React.PropTypes;

/**
* Pin in a map
*/
var styles = {
	container: {
		height: "100%",
		width: "100%"
	}
};

var MapPin = React.createClass({
	displayName: "MapPin",


	propTypes: {
		theme: RPT.object.isRequired,
		style: RPT.object,
		icon: RPT.string,
		id: RPT.string,
		lng: RPT.number,
		lat: RPT.number,
		showLabel: RPT.bool,
		payload: RPT.object
	},

	getDefaultProps: function getDefaultProps() {
		return {
			icon: "/assets/dashboard/MapPinGrey.png"
		};
	},

	render: function render() {
		var style = Object.assign({}, styles.container, this.props.style ? this.props.style : {});
		return React.createElement("div", { style: style });
	}
});

module.exports = MapPin;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/MapView.jsx":[function(require,module,exports){
(function (global){
'use strict';

var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
var ReactDOM = (typeof window !== "undefined" ? window['ReactDOM'] : typeof global !== "undefined" ? global['ReactDOM'] : null);
var $ = (typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null);
var RPT = React.PropTypes;
//var ol = require('openlayers');
var ol = window.ol;

/**
* Generic map to show pins
*/
var styles = {
  container: {
    height: "100%",
    width: "100%"
  }
};

var MapView = React.createClass({
  displayName: 'MapView',


  propTypes: {
    theme: RPT.object.isRequired,
    style: RPT.object,
    showMyLocation: RPT.bool,
    lat: RPT.number,
    lng: RPT.number,
    zoom: RPT.number,
    minZoom: RPT.number,
    maxZoom: RPT.number,
    type: RPT.string,
    homeIcon: RPT.string,
    onClick: RPT.func,
    width: RPT.number,
    height: RPT.number
  },

  getDefaultProps: function getDefaultProps() {
    return {
      showMyLocation: true,
      lng: null,
      lat: null,
      zoom: 18,
      minZoom: 0,
      maxZoom: 20,
      type: "osm",
      homeIcon: "/assets/dashboard/MapPinRed.png"
    };
  },

  componentDidMount: function componentDidMount() {
    this.createMap();
  },

  createMap: function createMap() {
    this.destroyMap();

    var dom = ReactDOM.findDOMNode(this);

    var type = this.props.type;
    // MapQuest is no longer free. I leave the code here because we might get another free
    // card renderer in the future. I will hardcode the renderer to plain osm.
    type = "default";

    var layer = null;
    if (type == "road") {
      layer = new ol.layer.Tile({
        source: new ol.source.MapQuest({ layer: 'osm' })
      });
    } else if (type == "sat") {
      layer = new ol.layer.Tile({
        source: new ol.source.MapQuest({ layer: 'sat' })
      });
    } else if (type == "hyb") {
      layer = new ol.layer.Group({
        layers: [new ol.layer.Tile({
          source: new ol.source.MapQuest({ layer: 'sat' })
        }), new ol.layer.Tile({
          source: new ol.source.MapQuest({ layer: 'hyb' })
        })]
      });
    } else if (type == "osm") {
      layer = new ol.layer.Tile({
        source: new ol.source.MapQuest({ layer: 'osm' })
      });
    } else {
      layer = new ol.layer.Tile({
        source: new ol.source.OSM()
      });
    }

    var zoom = this.props.zoom;
    if (zoom < this.props.minZoom) {
      zoom = this.props.minZoom;
    }
    if (zoom > this.props.maxZoom) {
      zoom = this.props.maxZoom;
    }
    this.map = new ol.Map({
      layers: [layer],
      interactions: ol.interaction.defaults({ mouseWheelZoom: false }),
      target: dom,
      view: new ol.View({
        zoom: zoom,
        minZoom: this.props.minZoom,
        maxZoom: this.props.maxZoom
      })
    });

    this.map.getView().setCenter(ol.proj.transform([this.props.lng, this.props.lat], 'EPSG:4326', 'EPSG:3857'));

    this.markers = [];

    if (this.props.showMyLocation) {
      this.getMyLocation();
    } else {
      if (this.props.lat !== undefined && this.props.lng != undefined) {
        this.myPosition = {
          lng: this.props.lng,
          lat: this.props.lat
        };
      }
    }
    this.updateMap();
  },

  initEvents: function initEvents() {
    var element = document.getElementById('popup');

    var popup = new ol.Overlay({
      element: element,
      positioning: 'bottom-center',
      stopEvent: false
    });
    this.map.addOverlay(popup);

    this.map.on('click', function (evt) {
      var feature = this.map.forEachFeatureAtPixel(evt.pixel, function (feature, layer) {
        return feature;
      });
      if (feature) {
        var geometry = feature.getGeometry();
        var coord = geometry.getCoordinates();
        popup.setPosition(coord);
        $(element).popover({
          'placement': 'top',
          'html': true,
          'content': feature.get('name')
        });
        $(element).popover('show');
      } else {
        $(element).popover('destroy');
      }
    });

    // change mouse cursor when over marker
    this.map.on('pointermove', function (e) {
      if (e.dragging) {
        $(element).popover('destroy');
        return;
      }
      var pixel = this.map.getEventPixel(e.originalEvent);
      var hit = this.map.hasFeatureAtPixel(pixel);
      this.map.getTarget().style.cursor = hit ? 'pointer' : '';
    });
  },

  destroyMap: function destroyMap() {
    if (this.map) {
      this.map.setTarget(null);
      this.map = null;
    }
  },

  getMyLocation: function getMyLocation() {
    var self = this;
    navigator.geolocation.getCurrentPosition(function (position) {
      self.myPosition = {
        lng: position.coords.longitude,
        lat: position.coords.latitude
      };
      self.updateMap();
    }, function () {
      console.log("Cannot determine location");
    });
  },

  updateMap: function updateMap() {
    this.cleanupMarkers();

    if (this.map && this.myPosition) {
      if (!this.myMarker) {
        var icon = $('<img src="' + this.props.homeIcon + '">')[0];
        this.myMarker = new ol.Overlay({
          position: ol.proj.transform([this.myPosition.lng, this.myPosition.lat], 'EPSG:4326', 'EPSG:3857'),
          offset: [-15, -30],
          element: icon
        });
        this.map.addOverlay(this.myMarker);
      }

      //this.myMarker.setPosition([this.myPosition.lng, this.myPosition.lat]);
    }

    if (this.props.children && this.props.children.length > 0) {
      this.showPins();
    } else {
      var self = this;
      if (this.myPosition) {
        self.map.getView().setCenter(ol.proj.transform([self.myPosition.lng, self.myPosition.lat], 'EPSG:4326', 'EPSG:3857'));
      }
    }
  },

  showPins: function showPins() {
    var self = this;

    var pins = this.props.children;
    var trigger = function trigger(pin) {
      return function () {
        if (self.props.onClick) {
          self.props.onClick(pin.props.payload);
        }
      };
    };
    for (var i = 0; i < pins.length; i++) {
      var pin = pins[i];
      var icon = pin.props.icon ? pin.props.icon : this.props.icon;
      var lng = pin.props.lng;
      var lat = pin.props.lat;
      if (lng && lat) {
        var name = pin.props.id;
        if (!pin.props.showLabel) {
          name = "";
        }
        var iconNode = $('<div style="font-size: 12px"><img title="' + pin.props.id + '" src="' + icon + '">' + name + '</div>')[0];
        var marker = new ol.Overlay({
          position: ol.proj.transform([lng, lat], 'EPSG:4326', 'EPSG:3857'),
          offset: [-15, -30],
          element: iconNode
        });
        iconNode.addEventListener('click', trigger(pin));
        this.map.addOverlay(marker);

        this.assignMarker(marker, pin);
        this.markers.push(marker);
      }
    }

    this.focusMarker();
  },

  assignMarker: function assignMarker(marker, item) {
    marker.userObject = item;
  },

  cleanupMarkers: function cleanupMarkers() {
    if (this.myMarker) {
      this.map.removeOverlay(this.myMarker);
    }
    this.myMarker = null;

    if (this.markers) {
      for (var i = 0; i < this.markers.length; i++) {
        var marker = this.markers[i];
        if (marker) {
          this.map.removeOverlay(marker);
        }
      }
    }
    this.markers = [];
  },

  focusMarker: function focusMarker() {
    var coordinates = [];
    if (this.markers) {
      for (var i = 0; i < this.markers.length; i++) {
        var position = ol.proj.transform(this.markers[i].getPosition(), 'EPSG:3857', 'EPSG:4326');
        coordinates.push(position);
      }
      if (this.myPosition) {
        coordinates.push(ol.proj.transform(this.myMarker.getPosition(), 'EPSG:3857', 'EPSG:4326'));
      }

      var extent = ol.extent.boundingExtent(coordinates);
      //extent = [8.018633106257766, 48.01862738258205, 8.96175012551248, 48.99163315445185];
      var size = this.map.getSize();
      var view = this.map.getView();
      view.fitExtent(ol.proj.transformExtent(extent, 'EPSG:4326', 'EPSG:3857'), size);
      var zoomLevel = this.map.getView().getZoom();
      this.map.getView().setZoom(zoomLevel - 0.5);
    }
  },

  selectMarker: function selectMarker(marker, type, item) {
    // TODO
  },

  componentWillReceiveProps: function componentWillReceiveProps(newProps) {
    if (!newProps.showMyLocation) {
      this.myPosition = null;
    }
  },

  componentWillUnmount: function componentWillUnmount() {
    this.destroyMap();
  },

  shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
    var self = this;
    if (nextProps.width != this.props.width || nextProps.height != this.props.height || nextProps.showMyLocation != this.props.showMyLocation || nextProps.maxZoom != this.props.maxZoom || nextProps.type != this.props.type) {
      setTimeout(function () {
        self.createMap();
      }, 1);
    } else {
      setTimeout(function () {
        self.updateMap();
      }, 1);
    }

    return false;
  },

  render: function render() {
    var style = Object.assign({}, styles.container, this.props.style ? this.props.style : {});
    return React.createElement('div', { style: style });
  }
});

module.exports = MapView;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/MultiSelect/MultiSelect.jsx":[function(require,module,exports){
(function (global){
'use strict';

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _TagEditor = require('./TagEditor.jsx');

var _TagEditor2 = _interopRequireDefault(_TagEditor);

var _Repeatable = require('./Repeatable.jsx');

var _Repeatable2 = _interopRequireDefault(_Repeatable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* Importations */


/* Class implementation for multiple selection editor */
var MultiSelect = function (_Component) {
  _inherits(MultiSelect, _Component);

  function MultiSelect() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MultiSelect);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MultiSelect.__proto__ || Object.getPrototypeOf(MultiSelect)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
      //The editor can have two designs: tag editor and repeatable dropdowns
      var editor = _this.props.tagEditor ? _TagEditor2.default : _Repeatable2.default;

      return React.createElement(editor, _this.props);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }
  /* Being rendered */


  /* Property types */


  /* Returns the default properties */


  return MultiSelect;
}(_react.Component);

MultiSelect.propTypes = {
  tagEditor: _react.PropTypes.bool,
  maxItems: _react.PropTypes.number,
  selections: _react.PropTypes.array,
  options: _react.PropTypes.array,
  numberOfMandatoryItems: _react.PropTypes.number,
  textPlaceholder: _react.PropTypes.string,
  textAddAnother: _react.PropTypes.string,
  nls: _react.PropTypes.object,
  theme: _react.PropTypes.object,
  onChange: _react.PropTypes.func
};
MultiSelect.defaultProps = {
  tagEditor: false,
  maxItems: 10,
  numberOfMandatoryItems: 0,
  width: "100%",
  selections: [],
  options: [],
  textPlaceholder: 'MultiSelect.textPlaceholder',
  textAddAnother: 'MultiSelect.textAddAnother',
  nls: { resolve: function resolve() {} },
  theme: {},
  onChange: function onChange() {}
};
;

module.exports = MultiSelect;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./Repeatable.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/MultiSelect/Repeatable.jsx","./TagEditor.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/MultiSelect/TagEditor.jsx"}],"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/MultiSelect/Repeatable.jsx":[function(require,module,exports){
(function (global){
'use strict';

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _RepeatableAddAnother = require('./RepeatableAddAnother.jsx');

var _RepeatableAddAnother2 = _interopRequireDefault(_RepeatableAddAnother);

var _RepeatableDropDown = require('./RepeatableDropDown.jsx');

var _RepeatableDropDown2 = _interopRequireDefault(_RepeatableDropDown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* Importations */


/* Class implementation for the repeatable drop downs editor */
var Repeatable = function (_Component) {
  _inherits(Repeatable, _Component);

  /* Being created */


  /* Converts from id to text */


  /* Rendering */
  function Repeatable(props) {
    _classCallCheck(this, Repeatable);

    //Initial state
    var _this = _possibleConstructorReturn(this, (Repeatable.__proto__ || Object.getPrototypeOf(Repeatable)).call(this, props));

    _this.render = function () {
      //Component to add another
      var addAnother = _this.state.selections.length == _this.props.options.length ? undefined : React.createElement(_RepeatableAddAnother2.default, { onClick: _this.addItem,
        textAddAnother: _this.props.textAddAnother,
        nls: _this.props.nls,
        theme: _this.props.theme });

      //Drop downs
      var dropDowns = _this.createDropDowns(_this.state.selections);

      //Style
      var repeatableStyle = {
        width: _this.props.width
      };

      //Renders the dropdowns
      return React.createElement(
        'div',
        { style: repeatableStyle },
        dropDowns,
        addAnother
      );
    };

    _this.returnKey = function () {
      _this.keyGenerator = (_this.keyGenerator || 1) + 1;
      return _this.keyGenerator;
    };

    _this.idToText = function (id) {
      var search = _this.props.options.filter(function (o) {
        return o.id === id;
      });
      return search.length === 0 ? "" : search[0].text;
    };

    _this.createDropDowns = function (data) {
      var _this$props = _this.props,
          theme = _this$props.theme,
          textPlaceholder = _this$props.textPlaceholder,
          nls = _this$props.nls;

      var disableRemove = _this.state.selections.length <= _this.props.numberOfMandatoryItems;

      return data.map(function (o, i) {
        return React.createElement(_RepeatableDropDown2.default, { value: _this.idToText(o),
          key: _this.state.keys[i],
          theme: theme,
          textPlaceholder: textPlaceholder,
          nls: nls,
          disableRemove: disableRemove,
          returnOptions: _this.returnOptions,
          onRemovedItem: _this.removedItem,
          onChangedItem: _this.changedItem });
      });
    };

    _this.raiseOnChange = function (selections) {
      _this.props.onChange(selections.filter(function (o) {
        return o != "";
      }));
    };

    _this.returnOptions = function () {
      return _this.props.options.filter(function (o) {
        return _this.state.selections.indexOf(o.id) == -1;
      });
    };

    _this.changedItem = function (index, value) {
      var newSelections = _this.state.selections.slice(0);
      newSelections[index] = value;

      _this.setState({ selections: newSelections });
      _this.raiseOnChange(newSelections);
    };

    _this.removedItem = function (index) {
      var newSelections = _this.state.selections.filter(function (o, i) {
        return i != index;
      });
      var newKeys = _this.state.keys.filter(function (o, i) {
        return i != index;
      });
      _this.setState({ selections: newSelections, keys: newKeys });
      _this.raiseOnChange(newSelections);
    };

    _this.addItem = function () {
      var newSelections = _this.state.selections.slice(0);
      newSelections.push("");
      var newKeys = _this.state.keys.slice(0);
      newKeys.push(_this.returnKey());

      _this.setState({ selections: newSelections, keys: newKeys });
    };

    _this.state = {
      selections: _this.props.selections,
      keys: _this.props.selections.map(function (o) {
        return _this.returnKey();
      })
    };

    //If there are mandatory items, add them to the list
    while (_this.state.selections.length < _this.props.numberOfMandatoryItems) {
      _this.state.selections.push("");
      _this.state.keys.push(_this.returnKey());
    }
    return _this;
  }

  /* Creates the dropdowns */


  /* Returns a random key */


  /* Raise onChange */


  /* Returns the possible options for the dropdown */


  /* Changed an item */


  /* Removed an item */


  /* Add another new blank item */


  return Repeatable;
}(_react.Component);

;

/* Exports */
module.exports = Repeatable;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./RepeatableAddAnother.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/MultiSelect/RepeatableAddAnother.jsx","./RepeatableDropDown.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/MultiSelect/RepeatableDropDown.jsx"}],"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/MultiSelect/RepeatableAddAnother.jsx":[function(require,module,exports){
(function (global){
'use strict';

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _Icon = require('../Icon.jsx');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* Importations */


/* Class implementation for the add another button */
var AddAnother = function (_Component) {
  _inherits(AddAnother, _Component);

  function AddAnother() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AddAnother);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AddAnother.__proto__ || Object.getPrototypeOf(AddAnother)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
      /* Rendered icon */
      var icon = React.createElement(_Icon2.default, {
        icon: 'add-new',
        theme: _this.props.theme });
      var nls = _this.props.nls;

      /* Style */
      var style = {
        cursor: "pointer"
      };

      /* Renders */
      return React.createElement(
        'div',
        { style: style,
          onClick: _this.props.onClick },
        icon,
        ' \xA0',
        nls.resolve(_this.props.textAddAnother)
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  /* Rendering */


  return AddAnother;
}(_react.Component);

;

/* Exports */
module.exports = AddAnother;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../Icon.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/Icon.jsx"}],"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/MultiSelect/RepeatableDropDown.jsx":[function(require,module,exports){
(function (global){
'use strict';

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _Option = require('../Option.jsx');

var _Option2 = _interopRequireDefault(_Option);

var _Select = require('../Select.jsx');

var _Select2 = _interopRequireDefault(_Select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* Importations */


/* Class implementation for the add another button */
var DropDown = function (_Component) {
  _inherits(DropDown, _Component);

  function DropDown() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, DropDown);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DropDown.__proto__ || Object.getPrototypeOf(DropDown)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
      var _this$props = _this.props,
          theme = _this$props.theme,
          value = _this$props.value,
          textPlaceholder = _this$props.textPlaceholder,
          nls = _this$props.nls;


      var styleCombo = {
        display: "table-cell",
        width: "100%"
      };
      var styleRemove = {
        display: "table-cell",
        minWidth: "45px",
        padding: "10px",
        verticalAlign: "top"
      };

      var comboColumn = React.createElement(
        'div',
        { style: styleCombo },
        React.createElement(
          _Select2.default,
          { theme: theme,
            initialValue: value,
            placeholder: nls.resolve(textPlaceholder),
            onChange: _this.changed },
          _this.buildComboChildren()
        )
      );

      var removeColumn = React.createElement(
        'div',
        { style: styleRemove },
        _this.returnRemoveIcon()
      );

      return React.createElement(
        'div',
        { ref: 'container' },
        comboColumn,
        removeColumn
      );
    }, _this.buildComboChildren = function () {
      return _this.props.returnOptions().map(function (o, i) {
        return React.createElement(
          _Option2.default,
          { value: o.id, key: i },
          o.text
        );
      });
    }, _this.changed = function (value) {
      _this.props.onChangedItem(_this.getIndex(), value);
    }, _this.getIndex = function () {
      //Determines this item index
      var container = _this.refs.container;
      var parent = container.parentNode;
      return Array.prototype.indexOf.call(parent.childNodes, container);
    }, _this.onRemove = function () {
      //Calls parent method
      _this.props.onRemovedItem(_this.getIndex());
    }, _this.returnRemoveIcon = function () {
      var icon = React.createElement(IoTFCommon.Icon, {
        icon: 'delete',
        disabled: _this.props.disableRemove,
        theme: _this.props.theme });

      var anchor = React.createElement(
        'a',
        {
          href: 'javascript:void(0)',
          onClick: _this.onRemove },
        icon
      );

      return _this.props.disableRemove ? icon : anchor;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  /* Rendering */


  /* Returns the default properties */


  /* Builds the children */


  /* Changed */


  /* Returns this item index */


  /* Clicked in the button to remove the item */


  /* Returns the remove icon */


  return DropDown;
}(_react.Component);

DropDown.defaultProps = {
  disableRemove: false
};
;

/* Exports */
module.exports = DropDown;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../Option.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/Option.jsx","../Select.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/Select.jsx"}],"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/MultiSelect/TagEditor.jsx":[function(require,module,exports){
(function (global){
'use strict';

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* Importations */


/* Class implementation for the tag editor */
var TagEditor = function (_Component) {
  _inherits(TagEditor, _Component);

  function TagEditor() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TagEditor);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TagEditor.__proto__ || Object.getPrototypeOf(TagEditor)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
      return React.createElement(
        'span',
        null,
        'The tag editor has not being implemented yet'
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  /* Rendering */


  return TagEditor;
}(_react.Component);

;

/* Exports */
module.exports = TagEditor;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/Option.jsx":[function(require,module,exports){
(function (global){
'use strict';

var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
var RPT = React.PropTypes;
var Icon = require('./Icon.jsx');

var styles = {
    optionContainer: {
        borderStyle: "solid",
        padding: "10px",
        fontSize: "14px",
        borderRightWidth: "2px",
        borderLeftWidth: "2px",
        borderColor: "#E7E7E7",
        backgroundColor: "",
        color: "",
        cursor: "pointer",
        boxSizing: "border-box",
        MozBoxSizing: "border-box",
        WebkitBoxSizing: "border-box"
    },
    selectionTickContainer: {
        display: "inline",
        float: "right"
    },
    selectionTick: {}
};

var Option = React.createClass({
    displayName: 'Option',

    propTypes: {
        theme: RPT.object,
        style: RPT.object,
        value: RPT.string,
        selected: RPT.bool,
        disabled: RPT.bool,
        onSelect: RPT.func,
        onClick: RPT.func,
        lastChild: RPT.bool
    },

    getInitialState: function getInitialState() {
        return {
            hover: false,
            disabled: this.props.disabled || false
        };
    },

    getDefaultProps: function getDefaultProps() {
        return {
            selected: false,
            theme: {
                "light": "#c7c7c7",
                "title": "#323232",
                "dark": "#5a5a5a"
            }
        };
    },

    componentWillMount: function componentWillMount() {
        styles.optionContainer.borderColor = "#E7E7E7";
    },

    mouseOver: function mouseOver() {
        this.setState({ hover: true });
    },

    mouseOut: function mouseOut() {
        this.setState({ hover: false });
    },

    handleMouseDown: function handleMouseDown(event) {
        event.preventDefault();
        event.stopPropagation();
        if (!this.state.disabled) {
            if (typeof this.props.children == "string" && this.props.children !== "") {

                this.props.onSelect(this.props.value, this.props.children, event);
                if (this.props.onClick) {
                    this.props.onClick();
                }
            } else {
                this.props.onSelect(this.props.value, event);
            }
        }
    },

    render: function render() {

        if (this.props.lastChild === true) {
            styles.optionContainer.borderBottomWidth = "2px";
            styles.optionContainer.borderTopWidth = "0px";
        } else if (this.props.firstChild === true) {
            styles.optionContainer.borderTopWidth = "1px";
            styles.optionContainer.borderBottomWidth = "0px";
        } else {
            styles.optionContainer.borderTopWidth = "0px";
            styles.optionContainer.borderBottomWidth = "0px";
        }

        var option = "";

        if (!this.state.disabled) {
            styles.optionContainer.cursor = "pointer";
            if (this.state.hover || this.props.selected) {
                styles.optionContainer.backgroundColor = "#4581E0";
                styles.optionContainer.color = "#FFFFFF";
                styles.selectionTick.color = "#FFFFFF";
                styles.optionContainer.borderColor = "#4581E0";
            } else {
                styles.optionContainer.backgroundColor = "#F7F7F7";
                styles.optionContainer.color = this.props.theme.major;
                styles.selectionTick.color = this.props.theme.title;
                styles.optionContainer.borderColor = "#E7E7E7";
            }
        } else {
            styles.optionContainer.backgroundColor = "#F9F9F9";
            styles.optionContainer.color = this.props.theme.minor;
            styles.optionContainer.cursor = "default";
        }

        var selectionTick = this.props.selected ? React.createElement(
            'div',
            { style: styles.selectionTickContainer },
            React.createElement(Icon, { theme: this.props.theme, icon: 'check', color: styles.selectionTick.color, size: 12 }),
            ' '
        ) : "";

        var containerStyle = Object.assign({}, styles.optionContainer, this.props.style);
        if (this.props.onSelect !== undefined) {
            option = React.createElement(
                'div',
                { onMouseDown: this.handleMouseDown, style: containerStyle,
                    onMouseOver: this.mouseOver, onMouseOut: this.mouseOut
                },
                this.props.children,
                selectionTick
            );
        } else {
            option = React.createElement(
                'option',
                { value: this.props.value, selected: this.props.selected },
                this.props.children
            );
        }

        return option;
    }
});

module.exports = Option;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./Icon.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/Icon.jsx"}],"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/Paging.jsx":[function(require,module,exports){
(function (global){
'use strict';

/************ Dependencies *************/
var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
var Icon = require('./Icon.jsx');
var RPT = React.PropTypes;

/************ Styles *************/
var styles = {
  bar: {
    backgroundColor: "#f1f1f1",
    border: "1px solid #dfdfdf",
    display: "flex",
    justifyContent: "space-between",
    padding: "5px",
    width: "100%"
  },
  currentMaxDivider: {
    marginLeft: "5px",
    marginRight: "5px",
    textAlign: "center"
  },
  inputPageNo: {
    width: "30px"
  },
  inputPageNoLarge: {
    width: "40px"
  },
  pagingBackwards: {
    display: "inline-block",
    marginLeft: "10px"
  },
  pagingForwards: {
    display: "inline-block",
    marginRight: "10px"
  }
};

var Paging = React.createClass({
  displayName: 'Paging',

  /************ Models *************/
  propTypes: {
    onChange: RPT.func,
    perPage: RPT.number,
    style: RPT.object,
    theme: RPT.object.isRequired,
    total: RPT.number,
    focusItem: RPT.number,
    onClearSelection: RPT.func
  },

  /************ Controller *************/
  getDefaultProps: function getDefaultProps() {
    return {
      perPage: -1,
      total: 0
    };
  },

  getInitialState: function getInitialState() {
    return {
      currentPage: 1,
      currentPageBuffer: 1,
      showPaging: false
    };
  },

  componentDidMount: function componentDidMount() {},

  componentWillUnmount: function componentWillUnmount() {},

  componentWillReceiveProps: function componentWillReceiveProps(newProps) {
    if (newProps.total < 1) {
      this.setState({
        showPaging: false
      });
      // render anyway to clear the last entries
      if (this.props.total != newProps.total && this.props.onChange) {
        this.props.onChange();
      }
    } else {
      if (!this.state.showPaging || newProps.focusItem != this.props.focusItem || newProps.perPage != this.props.perPage || newProps.total != this.props.total) {
        var self = this;
        self.setState({
          showPaging: true
        });
        self.updatePage(self.state.currentPage, newProps.perPage, newProps.total, newProps.focusItem);
      }
    }
  },

  // Paging functions
  goToFirstPage: function goToFirstPage() {
    if (this.props.onClearSelection) {
      this.props.onClearSelection();
    }
    this.updatePage(1, this.props.perPage, this.props.total);
  },

  goToLastPage: function goToLastPage() {
    if (this.props.onClearSelection) {
      this.props.onClearSelection();
    }
    this.updatePage(Math.ceil(this.props.total / this.props.perPage), this.props.perPage, this.props.total);
  },

  goToNextPage: function goToNextPage() {
    if (this.props.onClearSelection) {
      this.props.onClearSelection();
    }
    this.updatePage(this.state.currentPage + 1, this.props.perPage, this.props.total);
  },

  goToPreviousPage: function goToPreviousPage() {
    if (this.props.onClearSelection) {
      this.props.onClearSelection();
    }
    this.updatePage(this.state.currentPage - 1, this.props.perPage, this.props.total);
  },

  handleNewPageInput: function handleNewPageInput(event) {
    if (this.props.onClearSelection) {
      this.props.onClearSelection();
    }
    console.log("handleNewPageInput:#", event.target.value.length, event.target.value.length !== 0);
    if (event.target.value.length !== 0) {
      this.updatePage(event.target.value, this.props.perPage, this.props.total);
    } else {
      this.setState({ currentPage: "", currentPageBuffer: this.state.currentPage });
    }
  },

  handlePagingInputClick: function handlePagingInputClick(event) {
    var self = this;
    $(this.refs.pagingInput).blur(function (e) {
      if (e.target.value.length == 0) {
        $(self.refs.pagingInput).val(self.state.currentPageBuffer);
        self.setState({ currentPage: self.state.currentPageBuffer, currentPageBuffer: 1 });
      }
    });
    $(this.refs.pagingInput).select();
  },

  updatePage: function updatePage(newPage, perPage, total, focusItem) {
    if (newPage < 1) newPage = 1;
    if (perPage < -1) perPage = -1;
    if (total < 0) total = 0;
    if (focusItem !== undefined && focusItem < 0) focusItem = undefined;

    var self = this;
    console.log("newPage", newPage);
    if (perPage == -1) {
      this.setState({
        currentPage: 1
      }, function () {
        if (self.props.onChange) {
          var from = 0;
          var to = 0;
          var entriesPerNewPage = 1;
          self.props.onChange(from, to, entriesPerNewPage, newPage);
        }
      });
    } else {
      var lastPage = Math.ceil(total / perPage);

      // calculate new page if we want to focus on an item
      if (focusItem !== undefined) {
        if (typeof focusItem == "string") {
          focusItem = parseInt(focusItem, 10);
        }
        newPage = Math.floor(focusItem / perPage) + 1;
        console.log("New page: " + newPage + " focusItem: " + focusItem);
      }

      // check if new page is a different, valid number
      if (typeof newPage == "string") {
        newPage = parseInt(newPage, 10);
      }
      if (typeof newPage !== "number" || isNaN(newPage) || newPage < 1 || newPage === this.state.currentPage && perPage === this.props.perPage && total === this.props.total) {
        return;
      }

      // check if the newPage is available
      if (lastPage < newPage) {
        newPage = lastPage;
      }

      // update current page
      //      if (newPage != this.state.currentPage) {
      this.setState({
        currentPage: newPage
      }, function () {
        //call properties onChange function
        if (self.props.onChange) {
          var from = (newPage - 1) * perPage;
          var to = Math.min(newPage * perPage, total) - 1;
          var entriesPerNewPage = to - from + 1;
          self.props.onChange(from, to, entriesPerNewPage, newPage);
        }
      });
      //      }
    }
  },

  /************ View *************/
  render: function render() {
    if (!this.state.showPaging) {
      return React.createElement('span', null);
    }

    var lastPage = Math.ceil(this.props.total / this.props.perPage);
    if (lastPage < 1) {
      lastPage = "";
    }
    var style = Object.assign({}, styles, this.props.style ? this.props.style : {});

    // View output
    return React.createElement(
      'div',
      { style: style.bar },
      React.createElement(
        'div',
        null,
        React.createElement(
          'div',
          { style: style.pagingBackwards },
          React.createElement(Icon, { icon: "firstPage", nls: this.props.nls, onClick: this.goToFirstPage, theme: this.props.theme })
        ),
        React.createElement(
          'div',
          { style: style.pagingBackwards },
          React.createElement(Icon, { icon: "previousPage", nls: this.props.nls, onClick: this.goToPreviousPage, theme: this.props.theme })
        )
      ),
      React.createElement(
        'div',
        null,
        React.createElement(
          'span',
          null,
          React.createElement('input', { ref: 'pagingInput', onChange: this.handleNewPageInput, onClick: this.handlePagingInputClick, style: lastPage > 9 ? style.inputPageNoLarge : style.inputPageNo, type: 'text', value: this.state.currentPage })
        ),
        React.createElement(
          'span',
          { style: style.currentMaxDivider },
          '/'
        ),
        React.createElement(
          'span',
          null,
          lastPage
        )
      ),
      React.createElement(
        'div',
        null,
        React.createElement(
          'div',
          { style: style.pagingForwards },
          React.createElement(Icon, { icon: "nextPage", nls: this.props.nls, onClick: this.goToNextPage, theme: this.props.theme })
        ),
        React.createElement(
          'div',
          { style: style.pagingForwards },
          React.createElement(Icon, { icon: "lastPage", nls: this.props.nls, onClick: this.goToLastPage, theme: this.props.theme })
        )
      )
    );
  }

});

module.exports = Paging;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./Icon.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/Icon.jsx"}],"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/Portal.jsx":[function(require,module,exports){
(function (global){
'use strict';

var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
var ReactDOM = (typeof window !== "undefined" ? window['ReactDOM'] : typeof global !== "undefined" ? global['ReactDOM'] : null);

var RPT = React.PropTypes;

var styles = {};

var Portal = React.createClass({
  displayName: 'Portal',


  componentDidMount: function componentDidMount() {
    this.popup = document.createElement("div");
    this.popup.style.position = 'relative';
    this.popup.style.zIndex = '9999';
    document.body.style.overflow = 'hidden';
    document.body.appendChild(this.popup);
    this._child = ReactDOM.render(this.props.children, this.popup);
  },

  componentDidUpdate: function componentDidUpdate() {
    if (!this._child) {
      return;
    }
    this._child.setState({});
  },

  componentWillUnmount: function componentWillUnmount() {
    React.unmountComponentAtNode(this.popup);
    document.body.style.overflow = 'auto';
    document.body.removeChild(this.popup);
  },

  render: function render() {
    return null;
  }

});

module.exports = Portal;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/SearchField.jsx":[function(require,module,exports){
(function (global){
'use strict';

/*global require, module */
var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
var RPT = React.PropTypes;
var re_weburl = require('../../Dashboard/utils/regex-weburl');
var Icon = require('./Icon.jsx');

var styles = {
  field: {
    border: 'none',
    borderBottom: '3px solid #9EAAA9',
    boxShadow: 'none!important',
    display: 'block',
    position: 'relative',
    width: '100%',
    height: '35px',
    padding: '8px 0px',
    fontWeight: 'bold',
    fontSize: '14px',
    color: '#555',
    outline: 'none',
    lineHeight: '1.42857143',
    boxSizing: 'border-box',
    WebkitTransition: 'all .2s ease-in-out',
    transition: 'all .2s ease-in-out',
    backgroundColor: '#EFEFEF',
    borderColor: 'transparent',
    paddingLeft: "10px"

  },
  fieldContainer: {
    width: '100%',
    float: 'left'
  },
  validationWarning: {
    position: 'relative',
    top: '-25px',
    textAlign: 'right',
    height: '0px',
    paddingRight: '10px'
  },
  after: {
    clear: 'both'
  },
  formElement: {
    paddingLeft: "40px",
    position: "relative"
  },
  icon: {
    position: "absolute",
    top: "8px",
    left: "8px"
  }

};

var SearchField = React.createClass({
  displayName: 'SearchField',


  propTypes: {
    theme: RPT.object.isRequired,
    style: RPT.object,
    onChange: RPT.func,
    onSubmit: RPT.func,
    initialValue: RPT.string,
    placeholder: RPT.string,
    readOnly: RPT.bool,
    type: RPT.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      initialValue: '',
      type: 'text',
      style: { label: {} },
      readOnly: false
    };
  },

  getInitialState: function getInitialState() {
    return {
      value: this.props.initialValue || '',
      isValid: true
    };
  },

  validateType: function validateType(value) {
    var currType = this.props.type || 'text';
    var isValid = true;

    switch (currType) {
      case 'url':
        isValid = value.match(re_weburl) !== null;
    }

    return isValid;
  },

  componentWillReceiveProps: function componentWillReceiveProps(props) {
    if (props.value) {
      this.setState({ value: props.value });
    }
  },

  handleChange: function handleChange(event) {
    this.setState({
      value: event.target.value
    });
    if (this.props.onChange) {
      this.props.onChange(event.target.value);
    }
    this.setState({ isValid: this.validateType(event.target.value) });
  },

  handleSubmit: function handleSubmit(event) {
    if (event.key == "Enter") {
      if (this.props.onSubmit) {
        this.props.onSubmit(event.target.value);
      }
    }
  },

  handleClick: function handleClick(event) {
    this.setState({
      hasFocus: true
    });
    if (this.props.onClick) {
      this.props.onClick(event.target.value);
    }
  },

  render: function render() {
    var warning = this.state.isValid ? '' : React.createElement(
      'div',
      { style: styles.validationWarning },
      '!'
    );

    var inputStyle = Object.assign({}, styles.field, this.props.style);

    var containerStyle = Object.assign({}, styles.fieldContainer, this.props.containerStyle);

    var inputField = React.createElement('input', { type: this.props.type, style: inputStyle, name: 'field', value: this.state.value, readOnly: this.props.readOnly, onKeyDown: this.handleSubmit, onChange: this.handleChange, onFocus: this.handleOnFocus, onClick: this.handleClick, onBlur: this.handleOnBlur, placeholder: this.props.placeholder });

    return React.createElement(
      'div',
      { style: styles.formElement },
      React.createElement(Icon, { theme: this.props.theme, color: this.props.theme.accent, icon: 'search', size: 24, style: styles.icon }),
      React.createElement(
        'div',
        { style: containerStyle },
        inputField,
        warning
      ),
      React.createElement('div', { style: styles.after })
    );
  }
});

module.exports = SearchField;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../../Dashboard/utils/regex-weburl":"/Users/frank/Documents/Projects/IOTFoundation/components/Dashboard/utils/regex-weburl.js","./Icon.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/Icon.jsx"}],"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/Section.jsx":[function(require,module,exports){
(function (global){
'use strict';

var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
var Reflux = (typeof window !== "undefined" ? window['Reflux'] : typeof global !== "undefined" ? global['Reflux'] : null);

var RPT = React.PropTypes;

var styles = {
  sectionWrapper: {
    clear: "both",
    marginBottom: '40px'
  },

  headingSection: {
    color: "#5c91cc",
    fontWeight: "700",
    display: "inline-block",
    textTransform: "none",
    fontSize: "14px",
    marginTop: "20px",
    marginBottom: '10px'
  },

  hr: {
    borderTop: '1px solid #eee',
    boxSizing: 'content-box',
    height: '2px',
    backgroundColor: '#4983c6',
    marginTop: '0px',
    borderStyle: 'solid',
    marginBottom: '20px',
    border: '0px'
  }

};

var Section = React.createClass({
  displayName: 'Section',


  propTypes: {},

  getDefaultProps: function getDefaultProps() {
    return {};
  },

  getInitialState: function getInitialState() {
    return {};
  },

  componentDidUpdate: function componentDidUpdate() {},

  render: function render() {
    var hrStyle = styles.hr;
    var headingSection = "";

    headingSection = React.createElement(
      'div',
      null,
      this.props.headingSection
    );

    if (this.props.theme) {
      hrStyle = Object.assign({}, hrStyle, { backgroundColor: this.props.theme.light });
    }

    return React.createElement(
      'div',
      { style: styles.sectionWrapper },
      React.createElement(
        'div',
        { style: styles.headingSection },
        headingSection
      ),
      React.createElement('hr', { style: hrStyle }),
      React.createElement(
        'div',
        null,
        this.props.children
      )
    );
  }
});
module.exports = Section;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/SegmentedBar.jsx":[function(require,module,exports){
(function (global){
"use strict";

var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
var RPT = React.PropTypes;

var styles = {
	container: {
		position: "relative",
		height: "13px",
		width: "100%"
	},
	segmentContainer: {
		position: "relative",
		height: "100%",
		float: "left"

	},
	segment: {
		width: "100%",
		height: "100%",
		transition: "outlineWidth 0.3s ease",
		zIndex: 0,
		outline: "0px solid black"
	},
	segmentHover: {
		zIndex: 1,
		outline: "3px solid black"
	},
	segmentContainerHover: {
		zIndex: 1
	},
	break: {
		clear: "both"
	}
};

var Segment = React.createClass({
	displayName: "Segment",

	propTypes: {
		theme: RPT.object.isRequired,
		style: RPT.object,
		color: RPT.string,
		tooltip: RPT.string,
		onSelect: RPT.func
	},

	getInitialState: function getInitialState() {
		return {
			selected: false
		};
	},

	onSelect: function onSelect() {
		if (this.props.onSelect) {
			this.props.onSelect(this.props.tooltip, this.anchor);
		}
		this.setState({ selected: true });
	},

	onDeselect: function onDeselect() {
		if (this.props.onSelect) {
			this.props.onSelect(null, null);
		}
		this.setState({ selected: false });
	},

	setAnchor: function setAnchor(anchor) {
		this.anchor = anchor;
	},

	render: function render() {
		var style = Object.assign({}, styles.segmentContainer, this.props.style ? this.props.style : {});
		var segmentStyle = Object.assign({}, styles.segment, { backgroundColor: this.props.theme.normal });

		if (this.props.color) {
			segmentStyle = Object.assign(segmentStyle, { backgroundColor: this.props.color });
		}

		if (this.state.selected) {
			segmentStyle = Object.assign(segmentStyle, styles.segmentHover, { outlineColor: this.props.color });
			style = Object.assign(style, styles.segmentContainerHover);
		}

		return React.createElement(
			"div",
			{ style: style, ref: this.setAnchor },
			React.createElement("div", { style: segmentStyle, onMouseOver: this.onSelect, onMouseOut: this.onDeselect })
		);
	}
});

var SegmentedBar = React.createClass({
	displayName: "SegmentedBar",

	propTypes: {
		theme: RPT.object.isRequired,
		style: RPT.object,
		total: RPT.number,
		segments: RPT.array,
		onSelect: RPT.func
	},

	render: function render() {
		var self = this;
		var style = Object.assign({}, styles.container, this.props.style ? this.props.style : {});

		var segments = null;
		if (this.props.segments) {
			var count = 0;
			var sum = 0;
			segments = this.props.segments.map(function (item) {
				var percentage = 0;
				if (self.props.total) {
					percentage = Math.round(item.count / self.props.total * 100);
				}
				sum += percentage;
				if (sum > 100) {
					percentage = percentage - 1;
				}
				var segmentStyle = { width: percentage + "%" };
				return React.createElement(
					Segment,
					{ key: count++, theme: self.props.theme, color: item.color, tooltip: item.tooltip, onSelect: self.props.onSelect, style: segmentStyle },
					item.count
				);
			});
		}

		return React.createElement(
			"div",
			{ style: style },
			segments,
			React.createElement("div", { style: styles.break })
		);
	}
});

module.exports = SegmentedBar;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/Select.jsx":[function(require,module,exports){
(function (global){
'use strict';

var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
var RPT = React.PropTypes;
var InputField = require('./InputField.jsx');
var Icon = require('./Icon.jsx');

var styles = {
  selectBox: {
    cursor: 'pointer',
    position: 'relative'
  },
  optionsContainer: {
    position: 'absolute',
    minWidth: '100%',
    zIndex: '1990'
  },
  iconContainer: {
    position: 'relative',
    top: '-30px',
    float: 'right',
    outlineWidth: '0px !important'
  },
  inputField: {
    width: '100%',
    cursor: 'pointer'
  },
  after: {
    //clear: 'both'
  }
};

// Documentation link:
// https://github.ibm.com/IoT/dashboard-component/wiki/Select-component
//

var SelectBox = React.createClass({
  displayName: 'SelectBox',

  propTypes: {
    className: RPT.string,
    theme: RPT.object.isRequired,
    style: RPT.object,
    optionsStyle: RPT.object,
    inputStyle: RPT.object,
    onChange: RPT.func,
    placeholder: RPT.string,
    label: RPT.string,
    initialValue: RPT.string,
    noUnderscore: RPT.bool,
    value: RPT.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      initialValue: '',
      placeholder: '',
      noUnderscore: false
    };
  },

  getInitialState: function getInitialState() {
    return {
      isOpen: false,
      value: this.props.value || null
    };
  },

  componentDidMount: function componentDidMount() {
    this.updateInput(this.props.value);
  },

  componentWillReceiveProps: function componentWillReceiveProps(props) {
    this.updateInput(props.value);
  },

  onSelect: function onSelect(value, label, event) {
    this.setState({ input: label, isOpen: false, value: value });
    if (this.props.onChange) {
      this.props.onChange(value);
    }
  },

  toggleOptionsContainer: function toggleOptionsContainer() {
    this.setState({ isOpen: true }); //!this.state.isOpen });
    if (!this.state.isOpen) {
      this.onFocus();
    }
  },

  onFocus: function onFocus() {
    if (this.props.onFocus) {
      this.props.onFocus();
    }
  },

  onBlur: function onBlur() {
    //this.setState({ isOpen: false });
    if (this.props.onBlur) {
      this.props.onBlur();
    }
  },

  updateInput: function updateInput(newVal) {
    var self = this;
    React.Children.forEach(this.props.children, function (child) {
      if (newVal === child.props.value) {
        self.setState({ input: child.props.children, value: newVal });
      }
    });
  },

  handleChange: function handleChange(event) {},

  renderInputField: function renderInputField() {
    var style = Object.assign({}, styles.inputField, this.props.inputStyle ? this.props.inputStyle : {});
    return React.createElement(InputField, {
      style: style,
      containerStyle: { width: '100%', cursor: 'pointer' },
      theme: this.props.theme,
      placeholder: this.props.placeholder,
      initialValue: this.props.initialValue,
      value: this.state.input,
      onFocus: this.onFocus,
      onClick: this.toggleOptionsContainer, o: true,
      nBlur: this.onBlur,
      noTyping: true,
      noUnderscore: this.props.noUnderscore });
  },

  renderChildren: function renderChildren() {
    var self = this;
    var children = this.props.children;
    var lastIndex = Array.isArray(children) ? children.length - 1 : null;
    var childrenElement = React.Children.map(children, function (child, idx) {
      var currProps = {};
      if (lastIndex && lastIndex === idx) {
        currProps = { lastChild: true, firstChild: false };
      } else if (idx === 0) {
        currProps = { lastChild: false, firstChild: true };
      } else {
        currProps = { lastChild: false, firstChild: false };
      }

      if (self.state.value === child.props.value) {
        currProps.selected = true;
      } else {
        currProps.selected = false;
      }

      currProps.onSelect = self.onSelect;
      var newChild = React.cloneElement(child, currProps);
      return newChild;
    });
    var optionsContainerStyle = Object.assign({}, styles.optionsContainer, this.props.optionsStyle);
    return React.createElement(
      'div',
      { style: optionsContainerStyle },
      React.createElement(
        ReactCSSTransitionGroup,
        { transitionName: 'actionIcons', transitionEnterTimeout: 500, transitionLeaveTimeout: 500 },
        childrenElement
      )
    );
  },

  render: function render() {
    var selectBox = Object.assign({}, styles.selectBox, this.props.style);
    return React.createElement(
      'div',
      { className: this.props.className, style: selectBox },
      this.renderInputField(),
      React.createElement(
        'a',
        { style: styles.iconContainer, tabIndex: '1', onBlur: this.onBlur, href: 'javascript:void(0)' },
        React.createElement(Icon, { icon: "arrow-drop-down", size: 15, theme: this.props.theme, onClick: this.toggleOptionsContainer })
      ),
      this.state.isOpen ? this.renderChildren() : '',
      React.createElement('div', { style: styles.after })
    );
  }
});

module.exports = SelectBox;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./Icon.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/Icon.jsx","./InputField.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/InputField.jsx"}],"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/SimpleDialog.jsx":[function(require,module,exports){
(function (global){
'use strict';

var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var Icon = require('./Icon.jsx');

var RPT = React.PropTypes;

var styles = {
  backdrop: {
    backgroundColor: 'rgba(21,41,53,0.3)',
    width: '100%',
    height: '100%',
    position: 'fixed',
    top: '0px',
    left: '0px',
    zIndex: '2000',
    overflowY: 'auto',
    overflowX: 'auto'
  },
  dialog: {
    maxWidth: '600px',
    maxHeight: '500px',
    fontSize: '14px',
    fontFamily: '"Helvetica Neue",HelveticaNeue,Helvetica,"Segoe UI",Segoe,Calibri,Roboto,"Droid Sans","Arial Unicode MS",Arial,sans-serif',
    color: '#333333',
    background: 'white',
    margin: '0 auto',
    top: '40px',
    position: 'absolute',
    overflow: 'hidden'
  },
  container: {
    padding: "30px",
    overflow: "auto"
  },
  cancelContainer: {
    position: 'absolute',
    top: '10px',
    right: '10px'
  },
  cancel: {}

};

var SimpleDialog = React.createClass({
  displayName: 'SimpleDialog',

  propTypes: {
    style: RPT.object,
    theme: RPT.object.isRequired,
    nls: RPT.object,
    onCancel: RPT.func,
    width: RPT.number,
    height: RPT.number
  },

  getDefaultProps: function getDefaultProps() {
    return {};
  },

  componentWillMount: function componentWillMount() {
    // var mql = window.matchMedia("(min-width: 800px)");
    // mql.addListener(this.mediaQueryChanged);
    // this.setState({mql: mql});
  },

  componentDidMount: function componentDidMount() {
    this.centerDialog();
  },

  centerDialog: function centerDialog() {
    var backdrop = ReactDOM.findDOMNode(this);
    var dialog = backdrop.firstChild;

    var windowWidth = backdrop.offsetWidth;
    var windowHeight = backdrop.offsetHeight;

    var width = this.props.width ? this.props.width : dialog.offsetWidth;
    var height = this.props.height ? this.props.height : dialog.offsetHeight;

    dialog.style.left = (windowWidth - width) / 2 + "px";
  },

  onCancel: function onCancel() {
    if (this.props.onCancel) {
      this.props.onCancel();
    }
  },

  render: function render() {
    var self = this;

    var cancel = "";
    if (this.props.onCancel) {
      cancel = React.createElement(
        'div',
        { style: styles.cancelContainer },
        React.createElement(Icon, { icon: 'highlight-remove', style: styles.cancel, onClick: this.onCancel, color: '#000', size: 28, theme: this.props.theme })
      );
    }

    var styleDialog = Object.assign({}, styles.dialog);
    if (this.props.width) {
      styleDialog.width = this.props.width + "px";
      styleDialog.maxWidth = this.props.width + "px";
    }
    if (this.props.height) {
      styleDialog.height = this.props.height + "px";
      styleDialog.maxHeight = this.props.height + "px";
    }

    return React.createElement(
      'div',
      { className: 'modalDialog', style: styles.backdrop, onClick: this.onCancel },
      React.createElement(
        'div',
        { style: styleDialog, onClick: function onClick(evt) {
            evt.stopPropagation();return true;
          } },
        cancel,
        React.createElement(
          'div',
          { style: styles.container },
          this.props.children
        )
      )
    );
  }
});

module.exports = SimpleDialog;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./Icon.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/Icon.jsx"}],"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/Sortable.jsx":[function(require,module,exports){
(function (global){
'use strict';

var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
var ReactDOM = (typeof window !== "undefined" ? window['ReactDOM'] : typeof global !== "undefined" ? global['ReactDOM'] : null);
var RPT = React.PropTypes;
var Icon = require('./Icon.jsx');

var styles = {
  listStyle: {
    listStyle: 'none',
    paddingLeft: '0px'
  },
  itemWithHandleStyle: {
    paddingLeft: '35px',
    position: 'relative'
  },
  handleStyle: {
    position: 'absolute',
    left: '0px'
  }
};

var Sortable = React.createClass({
  displayName: 'Sortable',


  propTypes: {
    theme: RPT.object.isRequired,
    style: RPT.object,
    onUpdate: RPT.func
  },

  componentDidMount: function componentDidMount() {
    var self = this;
    var ref = this.refs.list;
    if (this.refs.list) {
      $(this.refs.list).sortable({
        handle: this.props.handle ? '.' + this.props.handle : '.listHandle',
        axis: 'y',
        opacity: '0.5',
        stop: function stop() {
          var newArray = [];
          for (var i = 0; i < $(ref)[0].children.length; i++) {
            var currentPlot = $(ref)[0].children[i].id;
            console.log(currentPlot);
            newArray.push(currentPlot);
          }
          if (self.props.onUpdate) {
            $(self.refs.list).sortable("cancel");
            console.log(newArray);
            self.props.onUpdate(newArray);
          }
          //          var newArray = [];
          //          for(var i = 0; i < $(ref)[0].children.length; i++){
          //            var currentPlot = self.getPlotByID($(ref)[0].children[i].id);
          //            console.log(currentPlot);
          //            newArray.push(currentPlot);
          //          }
          //          console.log(newArray);
          //           console.log(self.state.plots);
          //          self.setState({plots:newArray});
        }
      });
    }
  },

  render: function render() {
    var handle = '';
    var listItemStyle = {};
    var handleName = this.props.handle ? this.props.handle : 'listHandle';

    if (this.props.useHandle === true) {
      handle = React.createElement(
        'div',
        { className: handleName, style: styles.handleStyle },
        React.createElement(Icon, { theme: this.props.theme, icon: 'menu', color: this.props.theme.light })
      );
      listItemStyle = Object.assign({}, styles.itemWithHandleStyle);
    }

    return React.createElement(
      'ul',
      { ref: 'list', style: styles.listStyle },
      this.props.children.map(function (child) {
        return React.createElement(
          'li',
          { id: child.props.id, key: child.props.id, style: listItemStyle },
          handle,
          child
        );
      })
    );
  }
});

module.exports = Sortable;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./Icon.jsx":"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/Icon.jsx"}],"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/SwitchBtn.jsx":[function(require,module,exports){
(function (global){
"use strict";

var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
var RPT = React.PropTypes;

var styles = {
  container: {
    paddingTop: "5px"
  },
  switchBtn: {
    position: "relative",
    border: "3px solid",
    borderColor: " #4581E0",
    width: "48px",
    float: "left",
    backgroundColor: "#4581E0",
    borderRadius: "13px",
    WebkitTransition: "all .15s ease-out",
    MozTransition: "all .15s ease-out",
    MsTransition: "all .15s ease-out",
    OTransition: "all .15s ease-out",
    transition: "all .15s ease-out"
  },
  label: {},
  toggleElement: {
    display: "block",
    WebkitTransition: "left .15s ease-out",
    MozTransition: "left .15s ease-out",
    MsTransition: "left .15s ease-out",
    OTransition: "left .15s ease-out",
    transition: "left .15s ease-out",
    width: "20px",
    height: "20px",
    backgroundColor: "white",
    position: "relative",
    borderRadius: "10px"
  },
  falseState: {
    left: "23px"
  },
  trueState: {
    left: "0px"
  },
  stateText: {
    lineHeight: "24px",
    marginLeft: "15px"
  }
};

var SwitchBtn = React.createClass({
  displayName: "SwitchBtn",

  propTypes: {
    theme: RPT.object.isRequired,
    style: RPT.object,
    initialValue: RPT.bool,
    value: RPT.bool,
    trueText: RPT.string,
    falseText: RPT.string,
    label: RPT.string
  },

  getInitialState: function getInitialState() {
    return {
      value: this.props.initialValue
    };
  },

  getDefaultProps: function getDefaultProps() {
    return {
      initialValue: true,
      onChange: function onChange() {},
      trueText: "On",
      falseText: "Off"
    };
  },

  toggleState: function toggleState(e) {
    var toggleState = this.state.value;
    this.setState({ value: !toggleState });
    this.props.onChange(!toggleState, e);
  },

  componentWillMount: function componentWillMount() {
    // Apply theme colors here
    var theme = this.props.theme;
    styles.stateText.color = theme ? theme.major : "#323232";
  },

  render: function render() {
    var toggleStateStyle = this.state.value ? styles.trueState : styles.falseState;
    var toggleElementStyle = Object.assign({}, styles.toggleElement, toggleStateStyle);
    var toggleSwitchStyle = Object.assign({}, styles.switchBtn, this.state.value ? {} : {
      backgroundColor: this.props.theme.minor,
      borderColor: this.props.theme.minor
    });
    var text = "";
    if (this.props.trueText !== "" && this.props.falseText !== "") {
      text = this.state.value ? this.props.trueText : this.props.falseText;
    } else {
      text = "";
    }

    return React.createElement(
      "div",
      null,
      React.createElement(
        "div",
        { style: this.props.containerStyle ? this.props.containerStyle : styles.container,
          title: text },
        React.createElement(
          "div",
          {
            style: this.props.toggleSwitchStyle ? Object.assign(toggleSwitchStyle, this.props.toggleSwitchStyle) : toggleSwitchStyle,
            onClick: this.toggleState },
          React.createElement("div", { style: toggleElementStyle })
        ),
        React.createElement(
          "div",
          null,
          React.createElement(
            "span",
            {
              style: this.props.stateText ? Object.assign(styles.stateText, this.props.stateText) : styles.stateText },
            text
          )
        )
      )
    );
  }
});

module.exports = SwitchBtn;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],"/Users/frank/Documents/Projects/IOTFoundation/components/common/components/Tooltip.jsx":[function(require,module,exports){
(function (global){
"use strict";

/*******************************/
/*            Usage            */
/*******************************/
/*
Enclose your target with the tooltip component.
If you enclose multiple targets, only the first one is applied with the tooltip.
Be cautious when using css classes for the target having a margin style not equal to 0px!
It will cause to render the tooltip or the target incorrectly or false placed.
To avoid this problem you can add the margin as inline-style to your taget.
*/

/**************************************/
/*            Dependencies            */
/**************************************/
var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
var reductivlyUpdate = React.addons.update;
var RPT = React.PropTypes;

/********************************/
/*            Styles            */
/********************************/

var styles = {
  container: {
    position: "relative"
  },
  roundedRectangle: {
    backgroundColor: "#000",
    borderRadius: "6px",
    color: "#fff",
    padding: "5px 5px",
    position: "absolute",
    textAlign: "center",
    visibility: "hidden",
    zIndex: 2000
  },
  triangle: {
    position: "absolute"
  }
};

var Tooltip = React.createClass({
  displayName: "Tooltip",

  /********************************/
  /*            Models            */
  /********************************/
  child: {},
  containerStyle: {
    height: "0px",
    width: "0px"
  },
  propTypes: {
    direction: RPT.oneOf(["bottom", "left", "right", "top"]),
    style: RPT.object,
    theme: RPT.object,
    value: RPT.oneOfType([RPT.object, RPT.string]),
    key: RPT.string,
    asSpan: RPT.bool,
    delay: RPT.number,
    showOnClick: RPT.bool
  },
  roundedRectangleSize: {
    height: "0px",
    width: "0px"
  },
  triangleSize: "7px",

  /************************************/
  /*            Controller            */
  /************************************/

  /**
   * After initial render a rerender will be invoked to correct the style of the tooltip
   */
  componentDidMount: function componentDidMount() {
    this.determineContainerStyle();
    this.determineRoundedRectangleSize();
    this.customizeStyles(this.props.direction);
  },

  /**
   * If the target or the value of the tooltip has changed an update of the tooltip's style is necessary
   */
  componentDidUpdate: function componentDidUpdate(prevProps) {
    var isFurtherUpdateNeeded = false;
    if (prevProps.children != this.props.children) {
      this.determineContainerStyle();
      isFurtherUpdateNeeded = true;
    }
    if (prevProps.value != this.props.value) {
      isFurtherUpdateNeeded = true;
    }
    if (isFurtherUpdateNeeded) {
      this.determineRoundedRectangleSize();
      this.customizeStyles(this.props.direction);
    }
  },

  /**
   * Give the target the props.children as default
   */
  componentWillMount: function componentWillMount() {
    this.child = this.props.children;
  },

  /**
   * If the direction of the tooltip has changed an update of the tooltip's style is necessary
   */
  componentWillReceiveProps: function componentWillReceiveProps(newProps) {
    if (newProps.direction != this.props.direction) {
      this.customizeStyles(newProps.direction);
    }
  },

  /**
   * Update the style of the tooltip according to it's direction and the target's size
   */
  customizeStyles: function customizeStyles(direction) {
    var directionStartCase, oppositeDirectionLowerCase;
    var orthogonalDirection1LowerCase, orthogonalDirection1StartCase;
    var orthogonalDirection2StartCase, orthogonalDirectionLength;
    // determine opposite and orthogonal directions
    switch (direction) {
      case "bottom":
        directionStartCase = "Bottom";
        oppositeDirectionLowerCase = "top";
        orthogonalDirection1LowerCase = "left";
        orthogonalDirection1StartCase = "Left";
        orthogonalDirection2StartCase = "Right";
        orthogonalDirectionLength = this.roundedRectangleSize.width;
        break;
      case "left":
        directionStartCase = "Left";
        oppositeDirectionLowerCase = "right";
        orthogonalDirection1LowerCase = "top";
        orthogonalDirection1StartCase = "Top";
        orthogonalDirection2StartCase = "Bottom";
        orthogonalDirectionLength = this.roundedRectangleSize.height;
        break;
      case "right":
        directionStartCase = "Right";
        oppositeDirectionLowerCase = "left";
        orthogonalDirection1LowerCase = "top";
        orthogonalDirection1StartCase = "Top";
        orthogonalDirection2StartCase = "Bottom";
        orthogonalDirectionLength = this.roundedRectangleSize.height;
        break;
      default:
        // case "top"
        directionStartCase = "Top";
        oppositeDirectionLowerCase = "bottom";
        orthogonalDirection1LowerCase = "left";
        orthogonalDirection1StartCase = "Left";
        orthogonalDirection2StartCase = "Right";
        orthogonalDirectionLength = this.roundedRectangleSize.width;
        break;
    }
    var customizedStyles = $.extend(true, {}, styles, this.props.style); // work with the assigned style
    $.extend(true, customizedStyles.container, this.containerStyle); // set container size to child size
    customizedStyles.roundedRectangle[oppositeDirectionLowerCase] = "calc(100% + " + this.triangleSize + ")"; // to position the rounded rectangle
    customizedStyles.roundedRectangle[orthogonalDirection1LowerCase] = "50%"; // to center the rounded rectangle
    customizedStyles.roundedRectangle["margin" + orthogonalDirection1StartCase] = "-" + (0.5 * orthogonalDirectionLength).toString() + "px"; // to center the rounded rectangle
    customizedStyles.roundedRectangle.visibility = this.state.styles.roundedRectangle.visibility; // to keep the current visibility
    customizedStyles.triangle["border" + orthogonalDirection1StartCase] = this.triangleSize + " solid transparent"; // to draw one side of the triangle
    customizedStyles.triangle["border" + orthogonalDirection2StartCase] = this.triangleSize + " solid transparent", // to draw one side of the triangle
    customizedStyles.triangle["border" + directionStartCase] = this.triangleSize + " solid #000"; // to draw one side of the triangle
    customizedStyles.triangle[orthogonalDirection1LowerCase] = "50%"; // to center the triangle
    customizedStyles.triangle["margin" + orthogonalDirection1StartCase] = "-" + this.triangleSize; // to center the triangle
    customizedStyles.triangle[direction] = "100%"; // to position the triangle
    customizedStyles = $.extend(true, {}, customizedStyles, this.props.style); // work with the assigned style
    this.setState({
      styles: customizedStyles
    });
  },

  /**
   * Determine the style of the tooltip's container.
   * If there is a margin style in the target, it will be removed from it and
   * added to the container to prevent incorrect visualization.
   */
  determineContainerStyle: function determineContainerStyle() {
    // get child size
    var childTag = $(this.refs.tooltip).children(":first");
    this.containerStyle = {
      height: childTag.outerHeight(),
      width: childTag.outerWidth()
    };
    // if there is no style applied no further process is needed
    if (!this.props.children.props.style) {
      this.child = this.props.children;
      return;
    }
    // remove margins from child and add them to container
    this.child = reductivlyUpdate(this.props.children, { props: { style: { $merge: {} } } }); // make this.props.children.props.style mutable
    for (var prop in this.props.children.props.style) {
      if (prop == "margin" || prop == "marginBottom" || prop == "marginLeft" || prop == "marginRight" || prop == "marginTop") {
        this.containerStyle[prop] = this.props.children.props.style[prop]; // add margin to container
        this.child.props.style[prop] = "0px"; // remove margin from child
      }
    }
  },

  /**
   * Since the size of the rounded rectangle depends on the content,
   * the size has to be determined after it was rendered
   */
  determineRoundedRectangleSize: function determineRoundedRectangleSize() {
    var roundedRectangleTag = $(this.refs["tooltip.roundedRectangle"]);
    this.roundedRectangleSize = {
      height: roundedRectangleTag.outerHeight(),
      width: roundedRectangleTag.outerWidth()
    };
  },

  /**
   * Get the default values of the props
   */
  getDefaultProps: function getDefaultProps() {
    return {
      direction: "top",
      style: {},
      value: "",
      idx: 0
    };
  },

  /**
   * Get the initial style
   */
  getInitialState: function getInitialState() {
    return {
      styles: styles
    };
  },

  onClick: function onClick(e, t, e2) {
    var self = this;
    if (this.state.styles.roundedRectangle.visibility === "hidden") {
      this.onMouseEnter(e, t, e2, true);
      setTimeout(function () {
        self.onMouseLeave();
      }, 4000);
    } else {
      self.onMouseLeave();
    }
  },

  /**
   * Hide the tooltip if the mouse left the target
   */
  onMouseLeave: function onMouseLeave() {
    var self = this;
    if (self.tipDelay) {
      clearTimeout(self.tipDelay);
    }
    var stateChange = {
      styles: {
        roundedRectangle: {
          visibility: {
            $set: "hidden"
          }
        }
      }
    };
    this.setState(function (prevState) {
      return reductivlyUpdate(prevState, stateChange);
    });
  },

  /**
   * Show the tooltip if the mouse enters the target
   */
  onMouseEnter: function onMouseEnter(e, t, e2, noDelay) {
    var self = this;

    var showTip = function showTip() {
      var stateChange = {
        styles: {
          roundedRectangle: {
            visibility: {
              $set: "visible"
            }
          }
        }
      };
      self.setState(function (prevState) {
        return reductivlyUpdate(prevState, stateChange);
      });
    };
    if (this.props.delay && !noDelay) {
      self.tipDelay = setTimeout(showTip, this.props.delay);
    } else {
      showTip();
    }
  },

  /******************************/
  /*            View            */
  /******************************/
  render: function render() {
    var customizedStyles = this.state.styles;
    var clickFunction = this.props.showOnClick ? this.onClick : function () {};

    // View output
    if (this.props.asSpan) {
      return React.createElement(
        "span",
        { onClick: clickFunction, onMouseEnter: this.onMouseEnter, onMouseLeave: this.onMouseLeave, ref: "tooltip", style: customizedStyles.container, key: this.props.value + this.props.idx },
        this.child,
        React.createElement(
          "div",
          { ref: "tooltip.roundedRectangle", style: customizedStyles.roundedRectangle },
          this.props.value,
          React.createElement("span", { style: customizedStyles.triangle })
        )
      );
    } else {
      return React.createElement(
        "div",
        { onClick: clickFunction, onMouseEnter: this.onMouseEnter, onMouseLeave: this.onMouseLeave, ref: "tooltip", style: customizedStyles.container, key: this.props.value + this.props.idx },
        this.child,
        React.createElement(
          "div",
          { ref: "tooltip.roundedRectangle", style: customizedStyles.roundedRectangle },
          this.props.value,
          React.createElement("span", { style: customizedStyles.triangle })
        )
      );
    }
    ;
  }
});

module.exports = Tooltip;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],"/Users/frank/Documents/Projects/IOTFoundation/components/common/stores/IoTFAlertStore.js":[function(require,module,exports){
(function (global){
"use strict";

var Reflux = (typeof window !== "undefined" ? window['Reflux'] : typeof global !== "undefined" ? global['Reflux'] : null);
//var ibmiotf = require('ibmiotf');
var mqtt = (typeof window !== "undefined" ? window['Messaging'] : typeof global !== "undefined" ? global['Messaging'] : null);
var $ = (typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null);
var Const = require('../../Dashboard/constants/Const');
var IoTFAuthStore = require('./IoTFAuthStore.js');

//------------------------- Alerts per device

var Actions = Reflux.createActions(['fetchHistoricalAlertSummary', 'fetchHistoricalAlertListByRuleId', 'fetchHistoricalAlertListByDeviceId', 'fetchHistoricalAlertSummaryByRule', 'fetchAlertDetails', 'fetchRules', 'fetchEdgeRules', 'markAsRead', 'markAsUnread', 'markAsCleared']);

var State = {
  CONNECTED: "CONNECTED",
  DISCONNECTED: "DISCONNECTED"
};
var COND_TRIGGER = {
  EVERYTIME: "EVERYTIME",
  CUSTOM: "CUSTOM",
  BECOMETRUE: "BECOMETRUE"
};
var IoTFAlertStore = Reflux.createStore({

  client: null,

  // cache per type/device
  cache: {},
  // cache per rule
  rules: {},
  // cache per rule
  edgeRules: {},
  // cache all alerts
  alerts: {},

  lastAlertCalls: {},

  // cache for rules that are available
  rulesList: {},

  // cache for edge rules that are available
  edgeRulesList: {},

  activeRulesCalls: [],

  activeEdgeRulesCalls: [],

  //cache for actions
  cacheActions: {},

  historianRequests: [],

  historianRequestDelay: 100, // in millis

  lastValueInterval: 24 * 60 * 60 * 1000, // look up last value in previous 24 hours

  alertThreshold: 1000,

  Actions: Actions,

  auth: {},

  state: State.DISCONNECTED,

  // Set API in setAPIVersion function
  vPrefix: "",
  vRules: "",
  vEdgeRules: "/api/v0002/rti/edgeRule",
  historicalAlertSummaryURL: "/device-alert-summary",
  historicalAlertSummaryURLByRule: "/rule-summary/",
  historicalAlertListByDeviceIdURL: "",
  historicalAlertListByRuleIdURL: "/rule-alert/",
  alertMarkReadURL: '/mark-read',
  clearAlertURL: 'clear/',

  setAPIVersion: function setAPIVersion() {
    var v3 = global.localStorage.getItem("RTIV3") == "on";
    if (v3 == true) {
      this.vPrefix = "/api/v0003/rti/alerts";
      this.vRules = "/api/v0003/rti/rules";
      this.vEdgeRules = "/api/v0003/rti/alerts", this.historicalAlertSummaryURL = "/summary";
      this.historicalAlertSummaryURLByRule = "/summary";
      this.historicalAlertListByDeviceIdURL = "";
      this.historicalAlertListByRuleIdURL = "/rules/";
      this.alertMarkReadURL = '';
      this.clearAlertURL = 'clear/';

      if (global.localStorage.getItem("RTIV3_test") == "on") {
        this.vPrefix = "https://10.70.190.163:9465/analytics-alert/77ehrs/alerts";
        this.vRules = "https://10.70.190.163:9465/analytics/77ehrs/rule";
        this.vEdgeRules = "https://10.70.190.163:9465/analytics-alert/77ehrs/alerts";
      }
    } else {
      this.vPrefix = "/api/v0002/rti/alert";
      this.vRules = "/api/v0002/rti/rule";
      this.vEdgeRules = "/api/v0002/rti/edgeRule", this.historicalAlertSummaryURL = "/device-alert-summary";
      this.historicalAlertSummaryURLByRule = "/rule-summary/";
      this.historicalAlertListByDeviceIdURL = "";
      this.historicalAlertListByRuleIdURL = "/rule-alert/";
      this.alertMarkReadURL = '/mark-read';
      this.clearAlertURL = 'clear/';
    }
  },

  setNLS: function setNLS(nls) {
    this.nls = nls;
  },

  init: function init() {
    IoTFAuthStore.listen(this.onAuth);
    this.listenTo(Actions.fetchHistoricalAlertSummary, this.onFetchHistoricalAlertSummary);
    this.listenTo(Actions.fetchHistoricalAlertListByRuleId, this.onFetchHistoricalAlertListByRuleId); //getHistory and new coming alerts
    this.listenTo(Actions.fetchHistoricalAlertListByDeviceId, this.onFetchHistoricalAlertListByDeviceId); //getHistory and new coming alerts
    this.listenTo(Actions.fetchHistoricalAlertSummaryByRule, this.onFetchHistoricalAlertSummaryByRule);
    this.listenTo(Actions.fetchAlertDetails, this.onFetchAlertDetails);
    this.listenTo(Actions.fetchRules, this.onFetchRules);
    this.listenTo(Actions.fetchEdgeRules, this.onFetchEdgeRules);
    this.listenTo(Actions.markAsRead, this.onMarkAsRead);
    this.listenTo(Actions.markAsUnread, this.onMarkAsUnread);
    this.listenTo(Actions.markAsCleared, this.onMarkAsCleared);

    this.setAPIVersion();
  },

  onAuth: function onAuth(payload) {
    console.log("Retrieving auth:", payload);
    this.auth = {
      ltpa: payload.ltpa !== null ? encodeURIComponent(payload.ltpa) : null,
      org: encodeURIComponent(payload.org),
      apiKey: payload.apiKey !== null ? encodeURIComponent(payload.apiKey) : null,
      apiToken: payload.apiToken !== null ? encodeURIComponent(payload.apiToken) : null
    };

    // auth was updated
    var self = this;
    this.fetchActions(function () {
      if (!self.client) {
        self.initClient();
        self.connectClient();
      };
    }, function () {
      console.log("AlertStore FAIL - unable to load actions data");
      if (!self.client) {
        //Let still connect even action fail, action name is not available for display.
        self.initClient();
        self.connectClient();
      }
    });
  },

  initClient: function initClient() {
    var auth = IoTFAuthStore.getAuth();
    var randomNumber = Math.floor(Math.random() * 90000) + 10000;
    var clientId = 'a:' + auth.org + ':ptl' + randomNumber;

    var host = auth.org + ".messaging." + auth.domain;

    var port = 443;

    this.client = new window.Messaging.Client(host, port, clientId);

    var self = this;

    this.client.onMessageArrived = function (message) {
      if (message && message.payloadString !== "") {
        console.log("MQTT Client: Message Arrived on topic " + message.destinationName);

        var topic = message.destinationName;
        var typeIdOriginal = topic.split("/")[2];
        var deviceId = topic.split("/")[4];
        var evtType = topic.split("/")[6];

        var typeId = self.getDeviceTypeFromMsg(typeIdOriginal);

        var data = JSON.parse(message.payloadString);
        // add to cache an flatten the structure
        var msgData = {
          timestamp: data.timestamp,
          device_id: data.deviceId,
          ruleOutput: {
            ruleContent: data.ruleOutput.ruleContent
          },
          read_flag: false
        };
        for (var key in data.ruleOutput) {
          if (key !== "ruleContent") {
            if (key === "name") {
              msgData.ruleOutput["data:" + key] = data.ruleOutput[key];
            } else {
              msgData.ruleOutput[key] = data.ruleOutput[key];
            }
          }
        }

        var alertObject = self.createAlertObject(typeId, deviceId, msgData, true);
        // the fact that we pass only a single object shows that it is live data -> simplified duplicate alert checking
        var isUnique = self.addToAlertCache(alertObject);
        self.addToRuleCache(data.ruleOutput.ruleContent.id, alertObject);
        self.addToDeviceCache(typeId, deviceId, alertObject);

        // Note: We trigger for every alert. It is the responsibility of the card
        // to handle the load wisely
        if (isUnique) {
          // only if we cannot find this alert in the general alert cache we will trigger
          self.trigger({
            device: deviceId,
            type: typeId,
            rule: data.ruleOutput.ruleContent.id,
            alert: alertObject
          });
        }
      }
    };

    this.client.onConnectionLost = function (responseObj) {
      console.log("MQTT Client: Connection lost", responseObj);
      self.state = State.DISCONNECTED;
      setTimeout(function () {
        console.log("MQTT Client: Reconnecting...");
        self.connectClient();
      }, 100);
    };
  },

  connectClient: function connectClient() {
    var auth = IoTFAuthStore.getAuth();
    var self = this;
    var options = {
      onSuccess: function onSuccess() {
        self.state = State.CONNECTED;
        console.log("MQTT Client: Successfully opened a connection to the MQTT broker for RTI");
        self.client.subscribe("iot-2/type/+/id/+/cmd/alert/fmt/json");
        // as a reference: this is how a device specific topic looks like
        // "iot-2/type/$$RTI_UI:" + deviceType + "/id/" + deviceId + "/cmd/alert/fmt/json";
      },
      onFailure: function onFailure(error) {
        console.log("MQTT Client: An error occured whilst trying to open a connection to the MQTT broker", error);
        self.state = State.DISCONNECTED;
      },
      useSSL: true,
      cleanSession: true
    };

    if (auth.ltpa) {
      options.userName = "use-ltpa-token";
      options.password = auth.ltpa;
    } else if (auth.apiKey) {
      options.userName = auth.apiKey;
      options.password = auth.apiToken;
    } else {
      throw new Error("No LTPA token or API key defined for connection");
    }

    this.client.connect(options);
  },

  addToDeviceCache: function addToDeviceCache(deviceType, deviceId, alerts, start, end) {
    // Note: For live alerts we do not save start and end since we cannot be sure that there are no holes
    // in the range.

    // create empty cache
    if (!this.cache[deviceType]) {
      this.cache[deviceType] = {};
    }
    var obj = this.cache[deviceType][deviceId];
    if (!obj) {
      this.cache[deviceType][deviceId] = {
        alerts: [],
        start: start,
        end: end
      };
      obj = this.cache[deviceType][deviceId];
    } else {
      if (obj.start && start && obj.start > start) {
        this.start = start;
      }
      if (this.end && end && this.end < end) {
        this.end = end;
      }
    }

    if (!Array.isArray(alerts)) {
      // only a single alert
      if (obj.alerts.length == 0) {
        // this is the first one
        obj.alerts.unshift(alerts);
        return true;
      } else {
        // just check against the last alert since this is a live alert
        var oldAlert = obj.alerts[obj.alerts.length - 1];
        if (oldAlert.timestamp + "#" + oldAlert.rule.id != alerts.timestamp + "#" + alerts.rule.id) {
          obj.alerts.unshift(alerts);
          // check threshold and remove first element if necessary
          if (obj.alerts.length > this.alertThreshold) {
            obj.alerts.pop();
          }
          return true;
        } else {
          return false;
        }
      }
    } else {
      // add alerts to array and filter duplicates
      var allAlerts = obj.alerts.concat(alerts);
      var sortFunc = function sortFunc(a, b) {
        if (a.timestamp + "#" + a.rule.id < b.timestamp + "#" + b.rule.id) return 1;else if (a.timestamp + "#" + a.rule.id > b.timestamp + "#" + b.rule.id) return -1;else return 0;
      };
      // first sort by rule and timestamp since there might be multiple alerts per timestamp but for
      //  different rules
      allAlerts.sort(sortFunc);
      // then remove duplicates and limit to threshold
      var previousKey = "";

      for (var i = 0; i < allAlerts.length; i++) {
        var alert = allAlerts[i];

        if (alert.timestamp + "#" + alert.rule.id == previousKey || i >= this.alertThreshold) {
          // remove this alert since it has the same timestamp and device than the one before
          allAlerts.splice(i, 1);
          i--;
        } else {
          previousKey = alert.timestamp + "#" + alert.rule.id;
        }
      }
      // alerts are already limited to threshold and sorted by timestamp
      obj.alerts = allAlerts;
      return true;
    }
  },

  addToRuleCache: function addToRuleCache(ruleId, alerts, start, end) {
    // Note: For live alerts we do not save start and end since we cannot be sure that there are no holes
    // in the range.
    var rule = this.rules[ruleId];
    if (!rule) {
      rule = {
        alerts: [],
        start: start,
        end: end
      };
      this.rules[ruleId] = rule;
    } else {
      if (rule.start && start && rule.start > start) {
        rule.start = start;
      }
      if (rule.end && end && rule.end < end) {
        rule.end = end;
      }
    }

    // add alerts to array and filter duplicates
    if (!Array.isArray(alerts)) {
      // only a single alert
      if (rule.alerts.length == 0) {
        // this is the first one
        rule.alerts.unshift(alerts);
        return true;
      } else {
        // just check against the last alert since this is a live alert
        var lastAlert = rule.alerts[rule.alerts.length - 1];
        if (lastAlert.timestamp + "#" + lastAlert.device_id != alerts.timestamp + "#" + alerts.device_id) {
          rule.alerts.unshift(alerts);
          // check threshold and remove first element if necessary
          if (rule.alerts.length > this.alertThreshold) {
            rule.alerts.pop();
          }
          return true;
        } else {
          return false;
        }
      }
    } else {
      // more complex sorting since we have a bunch of historic alerts
      var allAlerts = rule.alerts.concat(alerts);
      var sortFunc = function sortFunc(a, b) {
        if (a.timestamp + "#" + a.device_id < b.timestamp + "#" + b.device_id) return 1;else if (a.timestamp + "#" + a.device_id > b.timestamp + "#" + b.device_id) return -1;else return 0;
      };
      // first sort by device and timestamp since there might be multiple alerts per timestamp but for
      // different devices
      allAlerts.sort(sortFunc);
      // then remove duplicates and limit to threshold
      var previousKey = "";
      for (var i = 0; i < allAlerts.length; i++) {
        var alert = allAlerts[i];
        if (alert.timestamp + "#" + alert.device_id == previousKey || i >= this.alertThreshold) {
          // remove this alert since it has the same timestamp and device than the one before
          allAlerts.splice(i, 1);
          i--;
        } else {
          previousKey = alert.timestamp + "#" + alert.device_id;
        }
      }

      // alerts are already limited to threshold and sorted by timestamp
      rule.alerts = allAlerts;
    }
  },

  addToAlertCache: function addToAlertCache(alerts, start, end) {
    // Note: For live alerts we do not save start and end since we cannot be sure that there are no holes
    // in the range.
    if (!this.alerts || !this.alerts.alerts) {
      this.alerts = {
        alerts: [],
        start: start,
        end: end
      };
    } else {
      if (this.alerts.start && start && this.alerts.start > start) {
        this.alerts.start = start;
      }
      if (this.alerts.end && end && this.alerts.end < end) {
        this.alerts.end = end;
      }
    }

    if (!Array.isArray(alerts)) {
      // only a single alert
      if (this.alerts.alerts.length == 0) {
        // this is the first one
        this.alerts.alerts.unshift(alerts);
        return true;
      } else {
        // just check against the last alert since this is a live alert
        var oldAlert = this.alerts.alerts[0];
        if (oldAlert.timestamp + "#" + oldAlert.rule.id + "#" + oldAlert.device_id != alerts.timestamp + "#" + alerts.rule.id + "#" + alerts.device_id) {
          this.alerts.alerts.unshift(alerts);
          // check threshold and remove first element if necessary
          if (this.alerts.alerts.length > this.alertThreshold) {
            this.alerts.alerts.pop();
          }
          return true;
        } else {
          return false;
        }
      }
    } else {
      // add alerts to array and filter duplicates
      var allAlerts = this.alerts.alerts.concat(alerts);
      var sortFunc = function sortFunc(a, b) {
        if (a.timestamp + "#" + a.rule.id + "#" + a.device_id < b.timestamp + "#" + b.rule.id + "#" + b.device_id) return 1;else if (a.timestamp + "#" + a.rule.id + "#" + a.device_id > b.timestamp + "#" + b.rule.id + "#" + b.device_id) return -1;else return 0;
      };
      // first sort by device and timestamp since there might be multiple alerts per timestamp but for
      // different devices
      allAlerts.sort(sortFunc);
      // then remove duplicates and limit to threshold
      var previousKey = "";
      for (var i = 0; i < allAlerts.length; i++) {
        var alert = allAlerts[i];
        if (alert.timestamp + "#" + alert.rule.id + "#" + alert.device_id == previousKey || i >= this.alertThreshold) {
          // remove this alert since it has the same timestamp and device than the one before
          allAlerts.splice(i, 1);
          i--;
        } else {
          previousKey = alert.timestamp + "#" + alert.rule.id + "#" + alert.device_id;
        }
      }

      // alerts are already limited to threshold and sorted by timestamp
      this.alerts.alerts = allAlerts;
      return true;
    }
  },

  //msgRawDeviceType = $$RTI_UI:<deviceType>
  getDeviceTypeFromMsg: function getDeviceTypeFromMsg(msgRawDeviceType) {

    return msgRawDeviceType.replace("$$RTI_UI:", "");
  },

  createAlertObject: function createAlertObject(deviceType, deviceId, messageJSON, isRealTimeData) {
    var isV3 = global.localStorage.getItem('RTIV3') == "on";
    var alertObject = {
      msgType: "alert",
      device_id: deviceId,
      device_type: deviceType,
      read_flag: messageJSON.read_flag !== undefined ? messageJSON.read_flag : false,
      edge_flag: messageJSON.edge_flag !== undefined ? messageJSON.edge_flag : false,
      status: "NEW",
      timestamp: parseInt(messageJSON.timestamp),
      rule: messageJSON.ruleOutput ? messageJSON.ruleOutput : {}
    };

    // If old API (v2)
    if (!isV3) {
      alertObject.rule.id = messageJSON.ruleOutput.ruleContent.id;
      alertObject.rule.name = messageJSON.ruleOutput.ruleContent.name;
      alertObject.id = alertObject.device_id + "-" + alertObject.rule.id + "-" + alertObject.timestamp;
      alertObject.severity = alertObject.rule.ruleContent ? alertObject.rule.ruleContent.severity : 0;
    } else {
      alertObject.rule.id = messageJSON.rule_id;
      alertObject.rule.name = messageJSON.rule_name;
      alertObject.id = messageJSON.id;
      alertObject.severity = messageJSON.rule_severity;
    }

    var self = this;
    var createActionObj = function createActionObj(actionID) {
      var action = self.cacheActions[actionID];
      if (action) {
        return { id: actionID,
          name: action.name };
      }
    };
    var newActionArray = [];
    if (alertObject.rule.ruleContent && alertObject.rule.ruleContent.actions) {
      for (var ii = 0; ii < alertObject.rule.ruleContent.actions.length; ii++) {
        var actionID = alertObject.rule.ruleContent.actions[ii];
        var action = createActionObj(actionID);
        if (action) {
          newActionArray.push(action);
        } else if (isRealTimeData) {
          //not find the action
          this.fetchAction(actionID, function (action) {
            //fetch action
            if (action) {
              newActionArray.push(action);
              self.cacheActions[actionID] = action;
            } else {
              newActionArray.push({ id: actionID,
                name: actionID }); //if can't find name
              self.cacheActions[actionID] = { id: actionID,
                name: "- (" + self.nls.resolve("Dashboard.RTI.AlertStore.DeletedAction") + ")" };
            }
          }, function (id) {
            newActionArray.push({ id: id,
              name: id }); //if can't find name
            self.cacheActions[id] = { id: id,
              name: "- (" + self.nls.resolve("Dashboard.RTI.AlertStore.DeletedAction") + ")" };
          });
        } else {
          newActionArray.push({ id: actionID,
            name: "- (" + self.nls.resolve("Dashboard.RTI.AlertStore.DeletedAction") + ")" }); //if can't find name
          self.cacheActions[actionID] = { id: actionID,
            name: "- (" + self.nls.resolve("Dashboard.RTI.AlertStore.DeletedAction") + ")" };
        }
      };
      alertObject.rule.ruleContent.actions = newActionArray;
    }

    //--------- transform to UI trigger condition model --------------
    if (alertObject.rule.ruleContent) {
      alertObject.rule.ruleContent.triggerCondition = this.getRuleTriggerConditionModel(alertObject.rule.ruleContent.transforms);
      delete alertObject.rule.ruleContent.transforms;
    }

    return alertObject;
  },

  // Mark the alert as unread again
  onMarkAsUnread: function onMarkAsUnread(ids) {
    this.onMarkAsRead(ids, true);
  },

  getAlertWithId: function getAlertWithId(alerts, id) {
    if (!alerts || alerts.length == 0) {
      return null;
    }
    var found = alerts.find(function (item) {
      return item.id == id;
    });
    if (found) {
      return found;
    } else {
      return null;
    }
  },

  removeAlertWithId: function removeAlertWithId(alerts, id) {
    if (!alerts || alerts.length == 0) {
      return false;
    }
    var index = alerts.findIndex(function (item) {
      return item.id == id;
    });
    if (index != -1) {
      alerts.splice(index, 1);
      return true;
    } else {
      return false;
    }
  },

  // Mark the alert as read and show it faded out
  onMarkAsRead: function onMarkAsRead(ids, removeFlag) {
    console.log("Mark as read");

    // change the alert in the cache to have an immediate feedback
    for (var t in ids) {
      // find alert based on id
      var id = ids[t];
      var found = null;

      // all alerts
      if (this.alerts.alerts) {
        var alert = this.getAlertWithId(this.alerts.alerts, id);
        if (alert) {
          alert.read_flag = !removeFlag;
          found = alert;
        }
      }

      // rule alerts
      if (this.rules) {
        for (var i in this.rules) {
          var alerts = this.rules[i].alerts;
          var alert = this.getAlertWithId(alerts, id);
          if (alert) {
            alert.read_flag = !removeFlag;
            found = alert;
          }
        }
      }

      // device alerts
      if (this.cache) {
        for (var i in this.cache) {
          var type = this.cache[i];
          for (var s in type) {
            var device = type[s];
            var alerts = device.alerts;
            var alert = this.getAlertWithId(alerts, id);
            if (alert) {
              alert.read_flag = !removeFlag;
              found = alert;
            }
          }
        }
      }

      if (found) {
        if (!removeFlag) this.setAlertAsRead(found);else this.setAlertAsUnRead(found);
      }
    }
  },

  // Mark the alert as cleared and do no longer show it
  onMarkAsCleared: function onMarkAsCleared(ids) {
    console.log("Mark as cleared");

    // directly remove from the cache to have an immediate feedback
    for (var t in ids) {
      // find alert based on id
      var id = ids[t];
      var alert = null;

      // all alerts
      if (this.alerts.alerts) {
        this.removeAlertWithId(this.alerts.alerts, id);
      }

      // rule alerts
      if (this.rules) {
        for (var i in this.rules) {
          var alerts = this.rules[i].alerts;
          this.removeAlertWithId(alerts, id);
        }
      }

      // device alerts
      if (this.cache) {
        for (var i in this.cache) {
          var type = this.cache[i];
          for (var s in type) {
            var device = type[s];
            var alerts = device.alerts;
            this.removeAlertWithId(alerts, id);
          }
        }
      }
    }
  },

  /** This method used to fetch historical alert summary in last 24 h
    URL example: /historySummary?start=1461569641233&user=lalli@cn.ibm.com
    @param {string} userId - current user Id, eg. lalli@cn.ibm.com
  */
  onFetchHistoricalAlertSummary: function onFetchHistoricalAlertSummary(reqId, interval, onlyCached) {
    var self = this;
    var userId = IoTFAuthStore.getUser().name;

    var end = new Date().getTime();
    var start = end - interval * 1000;

    if (this.alerts.start < start) {
      // we already have all historic alerts
      // catch only the new alerts
      // Note: We need to catch the alerts from history since we cannot be sure that live alerts
      // came in without interruption
      start = this.alerts.end;
    }

    // send what we have and resend it after the request returns
    if (this.alerts && this.alerts.alerts) {
      self.trigger({
        requestId: reqId,
        alerts: this.alerts.alerts,
        range: interval
      });
    }

    if (onlyCached) {
      return;
    }

    var url = this.vPrefix + this.historicalAlertSummaryURL + '?start=' + start + '?end=' + end + '&user=' + userId + '&top=' + this.alertThreshold;

    var option = {
      url: url,
      contentType: "application/json",
      success: function success(response) {
        console.debug("fetchHistoricalAlertSummary: ", response);

        if (response.length > 0) {
          var alerts = [];
          for (var j = 0; j < response.length; j++) {
            var alertSum = JSON.parse(response[j]).alert_summary;
            if (alertSum.length > 0) {
              for (var i = 0; i < alertSum.length; i++) {
                var alert = alertSum[i];
                var dKey = alert.device_id;

                var typeId = dKey.split(":")[1];
                var deviceId = dKey.split(":")[2];
                var timestamp = parseInt(alert.timestamp);

                var data = JSON.parse(alert.deviceMessage.raw_ruleoutput);
                var msgData = {
                  timestamp: timestamp,
                  device_id: dKey,
                  ruleOutput: {
                    ruleContent: data.ruleContent
                  },
                  read_flag: !!alert.read_flag,
                  edge_flag: alert.deviceMessage.edge_flag
                };
                for (var key in data) {
                  if (key !== "ruleContent") {
                    if (key === "name") {
                      msgData.ruleOutput["data:" + key] = data[key];
                    } else {
                      msgData.ruleOutput[key] = data[key];
                    }
                  }
                }
                var alertObject = self.createAlertObject(typeId, deviceId, msgData);
                alerts.push(alertObject);
              } //end for
            } //end if
          } // end for alert_summaries

          self.addToAlertCache(alerts, start, end);
          // send the cached data since we have cleanup function in addToAlertCache
          var alerts = self.alerts.alerts;
          self.trigger({
            requestId: reqId,
            alerts: alerts,
            range: interval
          });
        } // end if response
        else {
            self.trigger({
              requestId: reqId,
              emptyResponse: true
            });
          }
        //TODO - no severity countend for
      }, //end success
      error: function error(err) {
        self.trigger({
          requestId: reqId,
          emptyResponse: true,
          error: true
        });
      }
    };
    $.ajax(option);
  },

  /** This method used to fetch historical alert summary group by rule in last XXX
    this is java interface
    @GET @Path("/rule-summary") @Consumes(MediaType.APPLICATION_JSON) @Produces(MediaType.APPLICATION_JSON) public List<String> getSummary(
    final @PathParam("tenant_id") String tenantId,
    final @DefaultValue("") @QueryParam(value = "start") String start,
    final @DefaultValue("") @QueryParam(value = "end") String end,
    final @DefaultValue("") @QueryParam(value = "user") String user)
  */
  onFetchHistoricalAlertSummaryByRule: function onFetchHistoricalAlertSummaryByRule(reqID, interval, type, device) {
    var self = this;
    var userId = IoTFAuthStore.getUser().name;

    //start time stamp, present time minus 24 h
    var now = new Date().getTime();
    var startTimestamp = now - interval || now - this.lastValueInterval;

    var v3Prop = global.localStorage.getItem("RTIV3") == "on" ? "&_alertonly=false" : "";
    var url = this.vPrefix + this.historicalAlertSummaryURLByRule + '?start=' + startTimestamp + '&end=' + now + '&user=' + encodeURIComponent(userId) + v3Prop;

    // filter for devices
    if (type && device) {
      url += "&deviceId=" + IoTFAuthStore.getAuth().org + ":" + type + ":" + device;
    }

    //jquery ajax option
    var option = {
      url: url,
      contentType: "application/json",
      success: function success(response) {
        var rules = [];
        for (var j = 0; j < response.length; j++) {
          var orgRule = global.localStorage.getItem("RTIV3") == "on" ? response[j] : JSON.parse(response[j]);
          var rule = {
            count: orgRule.count,
            severity: orgRule.rule_severity,
            timestamp: global.localStorage.getItem("RTIV3") == "on" ? new Date().getTime() : orgRule.timestamp,
            id: orgRule.rule_id,
            title: orgRule.rule_name,
            isEdge: orgRule.edge_flag ? orgRule.edge_flag : false
          };

          var rulesWithSameId = rules.filter(function (item) {
            return item.id == rule.id;
          });
          if (rulesWithSameId.length > 0) {
            var oldRule = rulesWithSameId[0];
            // accumulate the counts for all versions of the rule
            oldRule.count = rule.count + oldRule.count;
          } else {
            rules.push(rule);
          }
        }
        if (rules.length > 0) {
          self.trigger({
            requestId: reqID,
            rules: rules,
            range: interval / 1000
          });
        } else {
          self.trigger({
            requestId: reqID,
            rules: rules,
            emptyResponse: true,
            range: interval / 1000
          });
        }
      },
      error: function error() {
        self.trigger({
          requestId: reqID,
          emptyResponse: true,
          error: true
        });
      }
    };
    $.ajax(option);
  },

  /***************************************************************************************************************
    This method used to fetch historical alert list by device id
    URL example: /history/v2gkpk:MQTTDevice:device3/?start=1461456000000end=1461577270172&top=1000&user=lalli@cn.ibm.com
    @param {string} deviceKey - required, org:type:id
    @param {number} start - optional, start time, inclusive, in milliseconds since January 1, 1970, 00:00:00 GMT.
    @param {number} end - optional, end time, exclusive, in milliseconds since January 1, 1970, 00:00:00 GMT
    @param {number} top - optional, the maximum number of the records returned, default is 1000
    @param {string} ruleId - optional, rule id
    @param {string} order - optional, based on event time, 'desc' or 'asc', 'desc' is the default value
     https://awd6j9.hou02-1.test.internetofthings.ibmcloud.com/api/v0002/rti/tenant/xxxxx/gt7qhm:RobotCPU:robotCPUFL2/?start=1462390467360&top=1000&user=daon@us.ibm.com
  ***************************************************************************************************************/
  onFetchHistoricalAlertListByDeviceId: function onFetchHistoricalAlertListByDeviceId(reqId, device, type, range, onlyCached) {
    var self = this;
    if (!device) {
      throw 'no device id provided';
    }
    var auth = IoTFAuthStore.getAuth();
    var userId = IoTFAuthStore.getUser().name;

    var end = new Date().getTime();
    var start = end - range * 1000;

    // check cache
    var obj = this.cache[type];
    if (obj) {
      obj = obj[device];
      if (obj) {
        // check if we have a new range which needs a complete query
        if (obj.start < start) {
          // we already have all historic alerts
          // catch only the new alerts
          // Note: We need to catch the alerts from history since we cannot be sure that live alerts
          // came in without interruption
          start = obj.end;
        }
        // send what we have and resend it after the request returns
        self.trigger({
          requestId: reqId,
          device: device,
          type: type,
          alerts: obj.alerts,
          range: range
        });
      }
    }

    if (onlyCached) {
      return;
    }

    var urlBuilder = "";
    if (global.localStorage.getItem("RTIV3") == "on") {
      urlBuilder = this.vPrefix + this.historicalAlertListByDeviceIdURL + '/types/' + type + "/devices/" + device + '&_start=' + start + '&_end=' + end + '&_limit=' + this.alertThreshold;
    } else {
      urlBuilder = this.vPrefix + this.historicalAlertListByDeviceIdURL + '?deviceId=' + auth.org + ":" + type + ":" + device + '&user=' + userId + '&start=' + start + '&end=' + end + '&top=' + this.alertThreshold;
    }

    var option = {
      url: urlBuilder,
      contentType: "application/json",
      success: function success(response) {
        if (response.length > 0) {
          var alerts = [];
          for (var i = 0; i < response.length; i++) {
            var alert = JSON.parse(response[i]);
            var dKey = alert.device_id;

            var typeId = dKey.split(":")[1];
            var deviceId = dKey.split(":")[2];
            var timestamp = parseInt(alert.timestamp);

            var data = JSON.parse(alert.deviceMessage.raw_ruleoutput);
            var msgData = {
              timestamp: timestamp,
              device_id: dKey,
              ruleOutput: {
                ruleContent: data.ruleContent
              },
              read_flag: !!alert.read_flag,
              edge_flag: alert.deviceMessage.edge_flag
            };
            for (var key in data) {
              if (key !== "ruleContent") {
                if (key === "name") {
                  msgData.ruleOutput["data:" + key] = data[key];
                } else {
                  msgData.ruleOutput[key] = data[key];
                }
              }
            }

            var alertObject = self.createAlertObject(typeId, deviceId, msgData);
            alerts.push(alertObject);
          } //end for

          self.addToDeviceCache(type, device, alerts, start, end);
          // send the cached data since we have cleanup function in addToRuleCache
          var obj = self.cache[type][device];
          self.trigger({
            requestId: reqId,
            device: device,
            type: type,
            alerts: obj.alerts,
            range: range
          });
        } //end if
        else {
            self.trigger({
              requestId: reqId,
              emptyResponse: true
            });
          }
      }, //end success
      error: function error(err) {
        self.trigger({
          requestId: reqId,
          emptyResponse: true,
          error: true
        });
      }
    };
    $.ajax(option);
  },

  /** this method used to fetch historical list by rule id
    this is java interface
    @GET @Path("/rule-alert/{rule_id}") @Produces(MediaType.APPLICATION_JSON) public List<String> getHistory(
        final @PathParam("rule_id") String rule,
        final @DefaultValue("100") @QueryParam(value = "top") String top,
        final @DefaultValue("desc") @QueryParam(value = "order") String order,
        final @DefaultValue("") @QueryParam(value = "start") String start,
        final @DefaultValue("") @QueryParam(value = "end") String end,
        final @DefaultValue("") @QueryParam(value = "user") String user)
  */
  onFetchHistoricalAlertListByRuleId: function onFetchHistoricalAlertListByRuleId(reqId, ruleId, range, card, onlyCached) {
    var self = this;
    var isV3 = global.localStorage.getItem("RTIV3") == "on";
    if (!ruleId) {
      throw 'no rule provided provided';
    }
    var userId = IoTFAuthStore.getUser().name;

    var end = new Date().getTime();
    var start = end - range * 1000;

    // check cache
    var rule = this.rules[ruleId];
    if (rule) {
      // check if we have a new range which needs a complete query
      if (rule.start < start) {
        // we already have all historic alerts
        // catch only the new alerts
        // Note: We need to catch the alerts from history since we cannot be sure that live alerts
        // came in without interruption
        start = rule.end;
      }

      // Delete card call
      delete self.lastAlertCalls[card + ruleId];

      // send what we have and resend it after the request returns
      self.trigger({
        requestId: reqId,
        rule: rule,
        alerts: rule.alerts,
        range: range
      });
    }

    if (onlyCached) {
      return;
    }

    // Only continue if this is triggert by different cards
    if (this.lastAlertCalls[card + ruleId]) {
      this.lastAlertCalls[card + ruleId].reqs.push(reqId);
      return;
    } else {
      this.lastAlertCalls[card + ruleId] = { reqs: [reqId] };
    }

    var urlBuilder = "";

    if (isV3) {
      var startV3 = encodeURIComponent(moment(start).format("YYYY-MM-DD[T]HH:mm:ss.SSSZZ"));
      var endV3 = encodeURIComponent(moment(end).format("YYYY-MM-DD[T]HH:mm:ss.SSSZZ"));
      urlBuilder = this.vPrefix + this.historicalAlertListByRuleIdURL + ruleId + '?_user=' + encodeURIComponent(userId) + "&_start=" + startV3 + "&_end=" + endV3 + "&_limit=" + this.alertThreshold;
    } else {
      urlBuilder = this.vPrefix + this.historicalAlertListByRuleIdURL + '?user=' + encodeURIComponent(userId) + "&ruleId=" + ruleId + "&start=" + start + "&end=" + end + "&top=" + this.alertThreshold;
    }

    var option = {
      url: urlBuilder,
      contentType: "application/json",
      success: function success(response) {
        if (!isV3) {
          if (response.length > 0) {
            var alerts = [];
            for (var i = 0; i < response.length; i++) {
              var alert = JSON.parse(response[i]);
              var dKey = alert.device_id;

              var typeId = dKey.split(":")[1];
              var deviceId = dKey.split(":")[2];
              var timestamp = parseInt(alert.timestamp);

              var data = JSON.parse(alert.deviceMessage.raw_ruleoutput);
              var msgData = {
                timestamp: timestamp,
                device_id: dKey,
                ruleOutput: {
                  ruleContent: data.ruleContent
                },
                read_flag: !!alert.read_flag,
                edge_flag: alert.deviceMessage.edge_flag
              };
              for (var key in data) {
                if (key !== "ruleContent") {
                  if (key === "name") {
                    msgData.ruleOutput["data:" + key] = data[key];
                  } else {
                    msgData.ruleOutput[key] = data[key];
                  }
                }
              }

              var alertObject = self.createAlertObject(typeId, deviceId, msgData);
              alerts.push(alertObject);
            } //end for

            self.addToRuleCache(ruleId, alerts, start, end);
            // send the cached data since we have cleanup function in addToRuleCache
            var rule = self.rules[ruleId];
            for (var i = 0; i < self.lastAlertCalls[card + ruleId].reqs.length; i++) {
              self.trigger({
                requestId: self.lastAlertCalls[card + ruleId].reqs[i],
                rule: rule,
                alerts: rule.alerts,
                range: range
              });
            }
          } // end if response
          else {
              self.trigger({
                requestId: reqId,
                emptyResponse: true
              });
            }
          // Delete card call
          delete self.lastAlertCalls[card + ruleId];
        } else {
          if (response.results.length > 0) {
            var alerts = [];
            for (var i = 0; i < response.results.length; i++) {
              var alert = response.results[i];
              var timestamp = moment(alert.event_time, "YYYY-MM-DD[T]HH:mm:ss.SSSZZ");
              var msgData = {
                timestamp: timestamp.valueOf(),
                read_flag: !!alert.read_flag,
                id: alert.id,
                rule_id: alert.rule_id,
                rule_name: alert.rule_name,
                rule_severity: alert.rule_severity
              };
              var alertObject = self.createAlertObject("typeId", "deviceId", msgData);
              alerts.push(alertObject);
            }

            self.addToRuleCache(ruleId, alerts, start, end);
            // send the cached data since we have cleanup function in addToRuleCache
            var rule = self.rules[ruleId];
            for (var i = 0; i < self.lastAlertCalls[card + ruleId].reqs.length; i++) {
              self.trigger({
                requestId: self.lastAlertCalls[card + ruleId].reqs[i],
                rule: rule,
                alerts: rule.alerts,
                range: range
              });
            }
          } else {
            self.trigger({
              requestId: reqId,
              emptyResponse: true
            });
          }
        }
      }, //end success
      error: function error() {
        self.trigger({
          requestId: reqId,
          emptyResponse: true,
          error: true
        });
      }
    };
    $.ajax(option);
  },

  setAlertAsUnRead: function setAlertAsUnRead(alert) {
    // API not yet implemented
  },

  /** this method used to set read flag for one single alert
    URL example: /history/v2gkpk:MQTTDevice:iot-realtime-insights-device3/mark-read/?rule=Ho25r5gd&timestamp=1461569641233&users=lalli@cn.ibm.com
    @param {string} deviceId - required, device id
    @param {string} ruleId - required, ths alert's rule id
    @param {number} timestamp - required, the alert's timestamp
    @param {object} payload - required, if alert is realtime, shoule be {"key" : "rawRuleOutput", "value" : rawRuleOutput} , if historical alert, should be {}
  */
  setAlertAsRead: function setAlertAsRead(alert) {
    var isV3 = global.localStorage.getItem("RTIV3") == "on";
    if (!alert) {
      throw 'no alert param provided';
    }
    var userId = IoTFAuthStore.getUser().name;
    var deviceKey = this.auth.org + ":" + alert.device_type + ":" + alert.device_id;
    var url = "";

    // If old API (v2)
    if (!isV3) {
      url = this.vPrefix + this.alertMarkReadURL + '?deviceId=' + encodeURIComponent(deviceKey) + '&rule=' + alert.rule.id + '&timestamp=' + alert.timestamp + '&user=' + encodeURIComponent(userId);
    } else {
      url = this.vPrefix + this.alertMarkReadURL + '/' + alert.id;
    }
    console.log(url);

    //jquery ajax option
    var option = {
      url: url,
      type: 'PUT',
      data: JSON.stringify({ user: userId, operation: "read" }),
      contentType: "application/json",
      success: function success(response) {
        console.log("mark-read SUCCESS - ");
        // Model has alread been updated in the cache for immediate feedback.
        // No need the redraw again.
      },
      error: function error(_error) {
        console.log("mark-read FAIL - ", _error);
      }
    };
    $.ajax(option);
  },

  /** this method used to clear all alerts for current user
    URL example: /history/v2gkpk:MQTTDevice:iot-realtime-insights-device3/clear?user=lalli@cn.ibm.com
    @param {string} deviceId - required, device id
    @param {string} userId - required, current user Id, eg. lalli@cn.ibm.com
    @param {array} payload - required, an array of alerts' date and rule id example: [{"key": "1461655471210","value": "jGwgasku"}]
   */
  clearAlert: function clearAlert(deviceId, payload) {
    if (!deviceId) {
      throw 'no device id provided';
    }
    if (!payload) {
      throw 'no payload provided';
    }
    var userId = IoTFAuthStore.getUser().name;

    var url = this.vPrefix + this.historicalAlertListByDeviceIdURL + deviceId + '/' + this.clearAlertURL + '?user=' + userId;
    //jquery ajax option
    var option = {
      url: url,
      type: 'PUT',
      contentType: "application/json",
      data: JSON.stringify(payload),
      success: function success(response) {
        console.debug(response);

        //TODO -
      }
    };
    $.ajax(option);
  },

  //------------------------------------Fetch Edge Rules -------------------------------

  onFetchEdgeRules: function onFetchEdgeRules(reqId) {
    var self = this;

    if (self.edgeRulesListFetched == true) {
      self.trigger({
        requestId: reqId,
        edgeRulesList: this.edgeRulesList
      });
    }

    // Only continue if this is triggert by different cards
    if (this.activeEdgeRulesCalls.length > 0) {
      this.activeEdgeRulesCalls.push(reqId);
      return;
    } else {
      this.activeEdgeRulesCalls = [reqId];
    }

    var urlBuilder = this.vEdgeRules;

    var triggerToAll = function triggerToAll(response) {
      for (var i = 0; i < self.activeEdgeRulesCalls.length; i++) {
        self.trigger(Object.assign({}, response, { requestId: self.activeEdgeRulesCalls[i] }));
      }
      self.activeEdgeRulesCalls = [];
      self.edgeRulesListFetched = true;
    };

    var option = {
      url: urlBuilder,
      contentType: "application/json",
      success: function success(response) {
        if (response.length > 0) {
          var rules = {};
          for (var i = 0; i < response.length; i++) {
            var rule = response[i];
            var rID = rule.id;

            rules[rID] = rule;
          } //end if
          // send the cached data since we have cleanup function in addToRuleCache
          self.edgeRulesList = rules;
          triggerToAll({
            edgeRulesList: self.edgeRulesList
          });
        } // end if response
        else {
            triggerToAll({
              emptyResponse: true
            });
          }
      }, //end success
      error: function error(err) {
        triggerToAll({
          emptyResponse: true,
          error: true
        });
      }
    };
    $.ajax(option);
  },

  //------------------------------------Fetch AlertDetail -------------------------------

  onFetchAlertDetails: function onFetchAlertDetails(alertID, reqId) {
    var urlBuilder = this.vPrefix + "/" + alertID;
    var self = this;
    var option = {
      url: urlBuilder,
      contentType: "application/json",
      success: function success(response) {
        console.log("TODO", response);
        self.trigger({
          alertDetail: response,
          requestId: reqId
        });
      }, //end success
      error: function error(err) {
        self.trigger({
          emptyResponse: true,
          error: true,
          requestId: reqId
        });
      }
    };
    $.ajax(option);
  },

  //------------------------------------Fetch Rules -------------------------------

  onFetchRules: function onFetchRules(reqId) {
    var self = this;
    var isV3 = global.localStorage.getItem("RTIV3") == "on";
    if (self.rulesListFetched == true) {
      self.trigger({
        requestId: reqId,
        rulesList: this.rulesList
      });
    }

    // Only continue if this is triggert by different cards
    if (this.activeRulesCalls.length > 0) {
      this.activeRulesCalls.push(reqId);
      return;
    } else {
      this.activeRulesCalls = [reqId];
    }

    var urlBuilder = this.vRules;
    urlBuilder = isV3 ? this.vPrefix + this.historicalAlertSummaryURLByRule + "?_alertonly=false" : urlBuilder;

    var triggerToAll = function triggerToAll(response) {
      for (var i = 0; i < self.activeRulesCalls.length; i++) {
        self.trigger(Object.assign({}, response, { requestId: self.activeRulesCalls[i] }));
      }
      self.activeRulesCalls = [];
      self.rulesListFetched = true;
    };

    var option = {
      url: urlBuilder,
      contentType: "application/json",
      success: function success(response) {
        if (response.length > 0) {
          var rules = {};
          for (var i = 0; i < response.length; i++) {
            var rule = response[i];
            var rID = isV3 ? rule.rule_id : rule.id;

            rules[rID] = rule;
          } //end if
          // send the cached data since we have cleanup function in addToRuleCache
          self.rulesList = rules;
          triggerToAll({
            rulesList: self.rulesList
          });
        } // end if response
        else {
            triggerToAll({
              emptyResponse: true
            });
          }
      }, //end success
      error: function error(err) {
        triggerToAll({
          emptyResponse: true,
          error: true
        });
      }
    };
    $.ajax(option);
  },
  //------------------------------------ Fetch Rule Actions ---------------------
  setCacheActions: function setCacheActions(actions) {
    if (!actions) {
      return;
    }
    this.cacheActions = {};
    for (var ii = 0; ii < actions.length; ii++) {
      var action = actions[ii];
      this.cacheActions[action.id] = action;
    };
  },
  fetchActions: function fetchActions(callback, errorCallback) {
    var actionUrl = "/api/v0002/rti/action/";
    var opts = {
      url: actionUrl,
      contentType: "application/json"
    };

    //console.log(opts);
    var self = this;
    $.ajax(opts).done(function (response) {
      //console.log(response);
      try {

        if (response.length > 0) {
          self.setCacheActions(response);
          callback();
        } else {
          // handle bad result?
          console.error("API call - Fail to get RTI Actions");
          errorCallback();
        }
      } catch (e) {
        console.error(e);errorCallback();
      }
    }).fail(function (response) {
      console.error(response);
      errorCallback();
    });
  },

  fetchAction: function fetchAction(id, callback, errorCallback) {
    var actionUrl = "/api/v0002/rti/action/" + id;
    var opts = {
      url: actionUrl,
      contentType: "application/json"
    };

    //console.log(opts);
    var self = this;
    $.ajax(opts).done(function (response) {
      //console.log(response);
      try {

        if (response) {
          self.cacheActions[id] = response;
          callback(response);
        } else {
          // handle bad result?
          console.log("API call - Fail to get RTI Action ", id);
          errorCallback();
        }
      } catch (e) {
        console.error(e);errorCallback();
      }
    }).fail(function (response) {
      console.error(response);
      errorCallback(id);
    });
  },
  //------------------------------------- Rule Condition transform -------------------
  getRuleTriggerConditionModel: function getRuleTriggerConditionModel(transforms) {

    var condition = { type: 'COND_TRIGGER.EVERYTIME' }; //trigger everytime
    if (!transforms || transforms.length <= 0) {
      return condition;
    }
    var transform = transforms[0];
    //Transfrom model from backend
    if (transform) {
      if (transform.type === "StatisticsFilter" && transform.duration) {

        condition.type = COND_TRIGGER.CUSTOM;
        if (transform.duration.indexOf(":") > -1) {
          // HH:MM:SS format
          condition = {
            type: transform.duration.split(',')[transform.duration.split(',').length - 1],
            times: Number(transform.parameters.split(',')[3]),
            duration: transform.duration.split(',')[0],
            unit: 'timer'
          };
        } else {
          // 4, minute format
          condition = {
            type: transform.duration.split(',')[transform.duration.split(',').length - 1],
            times: Number(transform.parameters.split(',')[3]),
            duration: Number(transform.duration.split(',')[0]),
            unit: transform.duration.split(',')[1]
          };
        }
      } else if (transform.type === "DeliverOnChange") {
        condition.type = COND_TRIGGER.BECOMETRUE;
      }
    }
    return condition;
  }

});

module.exports = IoTFAlertStore;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../../Dashboard/constants/Const":"/Users/frank/Documents/Projects/IOTFoundation/components/Dashboard/constants/Const.js","./IoTFAuthStore.js":"/Users/frank/Documents/Projects/IOTFoundation/components/common/stores/IoTFAuthStore.js"}],"/Users/frank/Documents/Projects/IOTFoundation/components/common/stores/IoTFAuthStore.js":[function(require,module,exports){
(function (global){
'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Reflux = (typeof window !== "undefined" ? window['Reflux'] : typeof global !== "undefined" ? global['Reflux'] : null);
var Utils = require('../../Dashboard/dashboard/DashboardUtils');
var Const = require('../../Dashboard/constants/Const');

var Actions = Reflux.createActions(['setAuth', 'getAuth', 'showPermissionDialog', 'isAllowed']);

var IoTFAuthStore = Reflux.createStore({

  Actions: Actions,

  auth: {
    ltpa: null,
    id: null,
    org: null,
    domain: null,
    apiKey: null,
    apiToken: null,
    roleAuthService: null
  },

  init: function init() {
    var self = this;
    this.listenTo(Actions.setAuth, function (a, b, c, d, e, f, g) {
      self.onSetAuth(a, b, c, d, e, f, g);
    });
  },

  setRoleAuthService: function setRoleAuthService(roleAuthService) {
    this.auth.roleAuthService = roleAuthService;
  },

  getAuth: function getAuth() {
    return this.auth;
  },

  isAllowed: function isAllowed(operationID) {
    // handle stand alone dashboard
    if (!this.auth.roleAuthService) {
      return true;
    }

    var idIsAllowed = this.auth.roleAuthService.isAllowed(operationID);
    if (idIsAllowed) {
      //if(this.isAllowedTest(operationID)){
      return true;
    } else {
      return false;
    }
  },

  showPermissionDialog: function showPermissionDialog(operationID) {
    this.auth.roleAuthService.showDialog(operationID);
    //this.showPermissionDialogTest(operationID);
  },

  isAllowedTest: function isAllowedTest(operationID) {
    //var opIDs = [Const.DB_VIEW_BOARD,Const.DB_CREATE_BOARD,Const.DB_UPDATE_BOARD,Const.DB_DELETE_BOARD,Const.DB_SHARE_BOARD];
    var opIDs = [Const.DB_VIEW_BOARD, Const.DB_CREATE_BOARD, Const.DB_UPDATE_BOARD, Const.DB_DELETE_BOARD, Const.DB_SHARE_BOARD];
    //var opIDs = ["CREATE_DASHBOARD","UPDATE_DASHBOARD","DELETE_DASHBOARD","SHARE_DASHBOARD"];
    return opIDs.indexOf(operationID) !== -1;
  },

  showPermissionDialogTest: function showPermissionDialogTest(operationID) {
    console.log("NO PERMISSIONS FOR ", operationID);
  },

  onSetAuth: function onSetAuth(org, ltpa, id, domain, apiKey, apiToken, roleAuthService) {
    if (org) {
      this.auth.org = org;
    };
    if (ltpa) {
      this.auth.ltpa = ltpa;
    };
    if (id) {
      this.auth.id = id;
    };
    if (domain) {
      this.auth.domain = domain;
    };
    if (apiKey) {
      this.auth.apiKey = apiKey;
    };
    if (apiToken) {
      this.auth.apiToken = apiToken;
    };
    if (roleAuthService) {
      this.auth.roleAuthService = roleAuthService;
    };

    console.log(Utils.getSettings('hideCredentialDialog'));

    // send credentials to proxy
    if (window.location.hostname.indexOf("internetofthings") == -1 && !Utils.getSettings('hideCredentialDialog')) {
      var _$$ajax;

      var payload = {
        org: this.auth.org,
        ltpa: this.auth.ltpa,
        domain: this.auth.domain,
        id: this.auth.id,
        apiKey: this.auth.apiKey,
        apiToken: this.auth.apiToken
      };
      $.ajax((_$$ajax = {
        method: "POST",
        dataType: "json",
        cache: false,
        url: "/setcredentials"
      }, _defineProperty(_$$ajax, 'cache', false), _defineProperty(_$$ajax, 'data', payload), _defineProperty(_$$ajax, 'crossDomain', true), _defineProperty(_$$ajax, 'timeout', 30000), _defineProperty(_$$ajax, 'success', function success(data) {
        console.log("Successfully set credentials in proxy.");
      }), _defineProperty(_$$ajax, 'error', function error(data) {
        console.log("Cannot set credentials in proxy.");
      }), _$$ajax));
    }

    this.trigger(this.auth);
  },

  getUser: function getUser() {
    // TODO Get user name from platform if we are not in the sample app
    var user = {
      password: localStorage.getItem("Dashboard_DcrPassword")
    };

    if (this.auth.id) {
      user.name = this.auth.id;
    }
    if (this.auth.ltpa) {
      user.password = this.auth.ltpa;
    }

    // if (!user.name){ user.name = "admin";}
    // if (!user.password){ user.password = "admin";}
    return user;
  }
});

module.exports = IoTFAuthStore;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../../Dashboard/constants/Const":"/Users/frank/Documents/Projects/IOTFoundation/components/Dashboard/constants/Const.js","../../Dashboard/dashboard/DashboardUtils":"/Users/frank/Documents/Projects/IOTFoundation/components/Dashboard/dashboard/DashboardUtils.js"}],"/Users/frank/Documents/Projects/IOTFoundation/components/common/stores/IoTFBlockchainStore.js":[function(require,module,exports){
(function (global){
"use strict";

var Reflux = (typeof window !== "undefined" ? window['Reflux'] : typeof global !== "undefined" ? global['Reflux'] : null);
var $ = (typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null);
var IoTFAuthStore = require('./IoTFAuthStore.js');

var Actions = Reflux.createActions(['getUsageData']);

var mockData = {
  "today": {
    "transactions": 160,
    "messages": 19.2
  },
  "week": {
    "transactions": 923,
    "messages": 180.7
  }
};

var IoTFBlockchainStore = Reflux.createStore({

  Actions: Actions,

  auth: {},

  buildUrl: function buildUrl(name, policyType) {
    return "/reporting/policies/" + name + "/PolicyType/" + policyType;
  },

  init: function init() {
    this.getAuth();
    IoTFAuthStore.listen(this.onAuth);
    this.listenTo(Actions.getUsageData, this.onGetUsageData);
  },

  onAuth: function onAuth(payload) {
    console.log("Retrieving auth:", payload);
    this.auth = {
      ltpa: payload.ltpa !== null ? encodeURIComponent(payload.ltpa) : null,
      org: encodeURIComponent(payload.org),
      apiKey: payload.apiKey !== null ? encodeURIComponent(payload.apiKey) : null,
      apiToken: payload.apiToken !== null ? encodeURIComponent(payload.apiToken) : null
    };
  },

  getAuth: function getAuth() {
    var auth = IoTFAuthStore.getAuth();
    this.auth = {
      ltpa: auth.ltpa ? encodeURIComponent(auth.ltpa) : auth.ltpa,
      org: auth.org ? encodeURIComponent(auth.org) : auth.org,
      apiKey: auth.apiKey ? encodeURIComponent(auth.apiKey) : auth.apiKey,
      apiToken: auth.apiToken ? encodeURIComponent(auth.apiToken) : auth.apiToken
    };
  },

  onGetUsageData: function onGetUsageData() {
    var self = this;
    setTimeout(function () {
      self.trigger(mockData);
    }, 100);
  }

});

module.exports = IoTFBlockchainStore;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./IoTFAuthStore.js":"/Users/frank/Documents/Projects/IOTFoundation/components/common/stores/IoTFAuthStore.js"}],"/Users/frank/Documents/Projects/IOTFoundation/components/common/stores/IoTFDeviceStore.js":[function(require,module,exports){
(function (global){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var Reflux = (typeof window !== "undefined" ? window['Reflux'] : typeof global !== "undefined" ? global['Reflux'] : null);
//var ibmiotf = require('ibmiotf');
var mqtt = (typeof window !== "undefined" ? window['Messaging'] : typeof global !== "undefined" ? global['Messaging'] : null);
var Moment = (typeof window !== "undefined" ? window['moment'] : typeof global !== "undefined" ? global['moment'] : null);
var $ = (typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null);
var Const = require('../../Dashboard/constants/Const');
var IoTFAuthStore = require('./IoTFAuthStore.js');

var Actions = Reflux.createActions(['clearDeviceCache', 'clearCache', 'fetchDevice', 'fetchDevices', 'fetchDeviceHistory', 'startWatch', 'stopWatch', 'stopAllWatches']);

var State = {
  CONNECTED: "CONNECTED",
  DISCONNECTED: "DISCONNECTED"
};

var IoTFDeviceStore = Reflux.createStore({

  client: null,

  // keep track of watched objects
  watches: {},

  // caches the last value and timestamp in following structure: type->id->event
  cache: {},

  deviceTypes: {},

  deviceCache: {},

  lecRequests: [],

  requestDelay: 250, // in millis

  Actions: Actions,

  auth: {},

  state: State.DISCONNECTED,

  init: function init() {
    IoTFAuthStore.listen(this.onAuth);
    this.listenTo(Actions.clearDeviceCache, this.clearDeviceCache);
    this.listenTo(Actions.clearCache, this.clearCache);
    this.listenTo(Actions.fetchDevice, this.onFetchDevice);
    this.listenTo(Actions.fetchDevices, this.onFetchDevices);
    this.listenTo(Actions.fetchDeviceHistory, this.onFetchDeviceHistory);
    this.listenTo(Actions.startWatch, this.onStartWatch);
    this.listenTo(Actions.stopWatch, this.onStopWatch);
    this.listenTo(Actions.stopAllWatches, this.onStopAllWatches);
  },

  onAuth: function onAuth(payload) {
    console.log("Retrieving auth:", payload);
    this.auth = {
      ltpa: payload.ltpa !== null ? encodeURIComponent(payload.ltpa) : null,
      org: encodeURIComponent(payload.org),
      apiKey: payload.apiKey !== null ? encodeURIComponent(payload.apiKey) : null,
      apiToken: payload.apiToken !== null ? encodeURIComponent(payload.apiToken) : null
    };

    // auth was updated
    this.initClient();
    this.connectClient();
  },

  initClient: function initClient() {
    var auth = IoTFAuthStore.getAuth();
    var randomNumber = Math.floor(Math.random() * 90000) + 10000;
    var clientId = 'a:' + auth.org + ':ptl' + randomNumber;

    var host = auth.org + ".messaging." + auth.domain;

    var port = 443;

    this.client = new window.Messaging.Client(host, port, clientId);

    var self = this;

    this.client.onMessageArrived = function (message) {
      try {
        if (message && message.payloadString !== "") {
          console.log("MQTT message on " + message.destinationName);

          var topic = message.destinationName;
          var typeId = topic.split("/")[2];
          var deviceId = topic.split("/")[4];
          var evtType = topic.split("/")[6];

          var data = JSON.parse(message.payloadString);

          // add to cache and flatten the structure
          var timestamp = new Date().getTime();
          var props = self.addToCache(typeId, deviceId, evtType, data, timestamp);

          self.trigger({
            deviceEvent: {
              deviceId: deviceId,
              deviceType: typeId,
              eventType: evtType,
              data: props
            }
          });
        }
      } catch (e) {
        console.log("Problems handling MQTT messages");
        console.error(e);
      }
    };

    this.client.onConnectionLost = function (responseObj) {
      console.log("MQTT Client: Connection lost", responseObj);
      self.state = State.DISCONNECTED;
      setTimeout(function () {
        console.log("MQTT Client: Reconnecting...");
        self.connectClient();
      }, 100);
    };
  },

  connectClient: function connectClient() {
    var auth = IoTFAuthStore.getAuth();
    var self = this;
    var options = {
      onSuccess: function onSuccess() {
        self.state = State.CONNECTED;
        console.log("MQTT Client: Successfully opened a connection to the MQTT broker");
        self.handlePendingSubscribes();
      },
      onFailure: function onFailure(error) {
        console.log("MQTT Client: An error occured whilst trying to open a connection to the MQTT broker");
        self.state = State.DISCONNECTED;
      },
      useSSL: true,
      cleanSession: true
    };

    if (auth.ltpa) {
      options.userName = "use-ltpa-token";
      options.password = auth.ltpa;
    } else if (auth.apiKey) {
      options.userName = auth.apiKey;
      options.password = auth.apiToken;
    } else {
      throw new Error("No LTPA token or API key defined for connection");
    }

    this.client.connect(options);
  },

  getPlayOrgAuth: function getPlayOrgAuth() {
    var auth = IoTFAuthStore.getAuth();
    var orgid = auth.org;
    var DEMO_ORG = "play";

    if (orgid === DEMO_ORG) {
      var Base64 = { _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", encode: function encode(e) {
          var t = "";var n, r, i, s, o, u, a;var f = 0;e = Base64._utf8_encode(e);while (f < e.length) {
            n = e.charCodeAt(f++);r = e.charCodeAt(f++);i = e.charCodeAt(f++);s = n >> 2;o = (n & 3) << 4 | r >> 4;u = (r & 15) << 2 | i >> 6;a = i & 63;if (isNaN(r)) {
              u = a = 64;
            } else if (isNaN(i)) {
              a = 64;
            }t = t + this._keyStr.charAt(s) + this._keyStr.charAt(o) + this._keyStr.charAt(u) + this._keyStr.charAt(a);
          }return t;
        }, decode: function decode(e) {
          var t = "";var n, r, i;var s, o, u, a;var f = 0;e = e.replace(/[^A-Za-z0-9\+\/\=]/g, "");while (f < e.length) {
            s = this._keyStr.indexOf(e.charAt(f++));o = this._keyStr.indexOf(e.charAt(f++));u = this._keyStr.indexOf(e.charAt(f++));a = this._keyStr.indexOf(e.charAt(f++));n = s << 2 | o >> 4;r = (o & 15) << 4 | u >> 2;i = (u & 3) << 6 | a;t = t + String.fromCharCode(n);if (u != 64) {
              t = t + String.fromCharCode(r);
            }if (a != 64) {
              t = t + String.fromCharCode(i);
            }
          }t = Base64._utf8_decode(t);return t;
        }, _utf8_encode: function _utf8_encode(e) {
          e = e.replace(/\r\n/g, "\n");var t = "";for (var n = 0; n < e.length; n++) {
            var r = e.charCodeAt(n);if (r < 128) {
              t += String.fromCharCode(r);
            } else if (r > 127 && r < 2048) {
              t += String.fromCharCode(r >> 6 | 192);t += String.fromCharCode(r & 63 | 128);
            } else {
              t += String.fromCharCode(r >> 12 | 224);t += String.fromCharCode(r >> 6 & 63 | 128);t += String.fromCharCode(r & 63 | 128);
            }
          }return t;
        }, _utf8_decode: function _utf8_decode(e) {
          var t = "";var n = 0;var r = 0;var c1 = 0;var c2 = 0;while (n < e.length) {
            r = e.charCodeAt(n);if (r < 128) {
              t += String.fromCharCode(r);n++;
            } else if (r > 191 && r < 224) {
              c2 = e.charCodeAt(n + 1);t += String.fromCharCode((r & 31) << 6 | c2 & 63);n += 2;
            } else {
              c2 = e.charCodeAt(n + 1);c3 = e.charCodeAt(n + 2);t += String.fromCharCode((r & 15) << 12 | (c2 & 63) << 6 | c3 & 63);n += 3;
            }
          }return t;
        } };
      var playApiKey = "a-play-f5cym38oit";
      var playApiToken = "Co0D)Z!50xF89PiaRH";
      var auth = 'Basic ' + Base64.encode(playApiKey + ":" + playApiToken);
      return auth;
    } else {
      return null;
    }
  },

  // Current implementation: get device data from latest cache. Should be fine since it does not change
  // to often.
  onFetchDevice: function onFetchDevice(reqID, id, type) {
    var self = this;
    var devices = this.getCachedDevices("General");
    if (devices && devices.length > 0) {
      for (var i = 0; i < devices.length; i++) {
        var device = devices[i];
        if (device.typeId == type && device.deviceId == id) {
          this.trigger({
            reqID: reqID,
            device: device
          });
          return;
        }
      }
    }

    // load the device since it is not in cache
    var deviceUrl = "/api/v0002/device/types/" + encodeURIComponent(type) + "/devices/" + encodeURIComponent(id);
    var opts = {
      url: deviceUrl,
      contentType: "application/json"
    };

    var playAuth = this.getPlayOrgAuth();
    if (playAuth) {
      if (opts.headers) {
        opts.headers.Authorization = playAuth; // key: a-play-f5cym38oit token: Co0D)Z!50xF89PiaRH
      } else {
        opts.headers = { Authorization: playAuth }; // key: a-play-f5cym38oit token: Co0D)Z!50xF89PiaRH
      }
    }

    //console.log(opts);
    $.ajax(opts).done(function (response) {
      //console.log(response);
      try {
        var devices = [];
        devices.push(response);
        self.cacheDevices("General", devices);
        self.trigger({
          reqID: reqID,
          device: response
        });
      } catch (e) {
        console.error(e);
      }
    }).fail(function (response) {
      console.error(response);
    });
  },

  // cache the latest device data for easy access
  cacheDevices: function cacheDevices(reqID, devices) {
    if (!this.deviceCache) {
      this.deviceCache = {};
    }
    if (!this.deviceCache[reqID]) {
      this.deviceCache[reqID] = {};
    }
    for (var i = 0; i < devices.length; i++) {
      var device = devices[i];
      this.deviceCache[reqID][device.typeId + "-" + device.deviceId] = device;
    }
  },

  getCachedDevices: function getCachedDevices(reqID) {
    var self = this;
    var arr = [];
    if (this.deviceCache && !reqID && Object.keys(this.deviceCache).length > 0) {
      var firstCache = Object.keys(this.deviceCache)[0];
      arr = Object.keys(this.deviceCache[firstCache]).map(function (key) {
        return self.deviceCache[firstCache][key];
      });
    } else if (reqID && this.deviceCache && this.deviceCache[reqID]) {
      arr = Object.keys(this.deviceCache[reqID]).map(function (key) {
        return self.deviceCache[reqID][key];
      });
    }
    return arr;
  },

  /**
  * Returns the device cache object.
  */
  getDeviceCache: function getDeviceCache() {
    return this.deviceCache ? this.deviceCache : {};
  },

  clearDeviceCache: function clearDeviceCache() {
    // clear the cached devices every time we start the dashboard to avoid old content
    this.deviceCache = null;
  },

  clearCache: function clearCache() {
    // clear the cached devices every time we start the dashboard to avoid old content
    this.cache = {};
  },

  onFetchDevices: function onFetchDevices(reqID, filters, sortProperty, force) {
    var self = this;
    if (!self.bookmarks) {
      self.bookmarks = {};
    }
    // see if we can deliver the devices from cache
    // TODO implement paging and backend search instead
    if (this.deviceCache && this.deviceCache[reqID]) {
      var cachedDevices = this.getCachedDevices(reqID);
      setTimeout(function () {
        self.trigger({
          reqID: reqID,
          devices: cachedDevices
        });
      }, 1);
      if (!self.bookmarks[reqID] && !force) return;
    }

    // retrieve it from the backend
    var deviceUrl = "/api/v0002/bulk/devices?_limit=100";
    var opts = {
      url: deviceUrl,
      contentType: "application/json"
    };

    var playAuth = this.getPlayOrgAuth();
    if (playAuth) {
      if (opts.headers) {
        opts.headers.Authorization = playAuth; // key: a-play-f5cym38oit token: Co0D)Z!50xF89PiaRH
      } else {
        opts.headers = { Authorization: playAuth }; // key: a-play-f5cym38oit token: Co0D)Z!50xF89PiaRH
      }
    }

    // ex. filters = { "deviceId": "abcdef", "typeId": "xyzabc", "deviceInfo.descriptiveLocation": "at home" }
    if (filters) {
      for (var i in filters) {
        if (filters.hasOwnProperty(i) && filters[i] != "") {
          opts.url += "&" + i + "=" + filters[i];
        }
      }
      opts.url += "&_fuzzy=true";
    }
    if (reqID && this.bookmarks && this.bookmarks[reqID]) {
      opts.url += "&_bookmark=" + this.bookmarks[reqID];
    }
    if (sortProperty) {
      // requires comma-separated list in quotes
      opts.url += "&_sort=" + sortProperty;
    }

    // Promise for REDUXMIG
    var promise = new Promise(function (resolve, reject) {
      $.ajax(opts).done(function (response) {
        //console.log(response);
        try {
          if (response.meta && response.meta.total_rows) {
            self.cacheDevices(reqID, response.results);
            var cachedDevices = self.getCachedDevices(reqID);
            self.trigger({
              devices: cachedDevices,
              reqID: reqID,
              bookmark: response.bookmark
            });
            self.bookmarks[reqID] = response.bookmark;
            resolve({
              devices: cachedDevices,
              reqID: reqID,
              bookmark: response.bookmark
            });
          } else {
            // handle bad result?
            reject();
          }
        } catch (e) {
          console.error(e);
          reject();
        }
      }).fail(function (response) {
        console.error(response);
        reject();
      });
    });

    // REDUXMIG
    return promise;
  },

  handlePendingSubscribes: function handlePendingSubscribes() {
    // handle subscribes that happened before connect
    var topics = Object.keys(this.watches);
    for (var i = 0; i < topics.length; i++) {
      var topic = topics[i];
      console.debug("handle pending subscribe to " + topic);
      this.client.subscribe(topic);
    }
  },

  getCache: function getCache() {
    return this.cache;
  },

  /**
  * Get the last value and timestamp for a property from the cache
  */
  getFromCache: function getFromCache(type, device, event) {
    var obj = this.cache[type];
    if (obj) {
      obj = obj[device];
      if (obj) {
        obj = obj[event];
        return obj;
      }
    }
    return null;
  },

  checkIfDataExists: function checkIfDataExists(type, device, event) {
    if (event == "+") {
      event = null;
    }

    if (!event) {
      var result = this.getEventsFromCache(type, device);
      if (result && Object.keys(result).length > 0) {
        return true;
      }
    } else {
      var result = this.getFromCache(type, device, event);
      if (result) {
        return true;
      }
    }
    return false;
  },

  /**
  * Get the last value and timestamp for all events of a device
  */
  getEventsFromCache: function getEventsFromCache(type, device) {
    var obj = this.cache[type];
    if (obj) {
      obj = obj[device];
      return obj;
    }
    return null;
  },
  /**
  * Caches all devices, events and property names to have something to prefill comboboxes.
  * Use this also to have the last value without extra query.
  */
  addToCache: function addToCache(type, device, event, data, timestamp) {
    if (!this.cache[type]) {
      this.cache[type] = {};
    }
    if (!this.cache[type][device]) {
      this.cache[type][device] = {};
    }
    if (!this.cache[type][device][event]) {
      this.cache[type][device][event] = {};
    }
    var obj = this.cache[type][device][event];
    // flatten structure
    var props = this.generateListOfProperties(data, null, timestamp);
    if (props) {
      // merge new props with old ones
      Object.assign(obj, props);
    }
    // this returns only the set of props in the payload
    return props;
  },

  /*
  * Creates a flattened list of properties for the event data. Used for caching.
  */
  generateListOfProperties: function generateListOfProperties(data, prefix, timestamp) {
    var result = {};
    if (prefix) {
      prefix = prefix + ".";
    } else {
      prefix = "";
    }
    // strip off default prefixes
    if (prefix == "d.") {
      prefix = "";
    }
    for (var i in data) {
      var item = data[i];
      if ((typeof item === 'undefined' ? 'undefined' : _typeof(item)) == "object") {
        Object.assign(result, this.generateListOfProperties(item, prefix + i, timestamp));
      } else if (item !== undefined) {
        result[prefix + i] = {
          value: item,
          timestamp: timestamp
        };
      }
    }
    return result;
  },

  /**
  * Strips of a leading d. prefix. This is necessary since the historian returns the property names without prefix.
  * Therefore we have to normalize it.
  */
  normalizeProperty: function normalizeProperty(property) {
    var hasPrefix = property.indexOf("d.") === 0;
    if (hasPrefix) {
      property = property.substring(2);
    }
    return property;
  },

  /**
  * Same as normalizeProperty for the full payload of an MQTT message.
  */
  normalizePayload: function normalizePayload(payload) {
    if (payload && payload.d) {
      payload = payload.d;
    }

    return payload;
  },

  /**
  * Gets the device type for a device. This is necessary to make a historian request.
  * Therefore we handle multiple request in a list of callback.
  */
  getDeviceType: function getDeviceType(device, callback) {
    var self = this;

    // check if we have it in cache
    if (this.deviceTypes[device]) {
      var obj = this.deviceTypes[device];
      // We have an entry for this device type. This can be the deviceType itself or an array of
      // callbacks because others are already waiting for it.
      if ($.isArray(obj)) {
        // Add the callback to the list.
        obj.push(callback);
      } else {
        // we already have a value -> return it
        callback(obj);
      }
      return;
    } else {
      // create an array of callback to handle multiple requestors
      this.deviceTypes[device] = [callback];
    }

    // handle callbacks for all requests
    var deliverDeviceType = function deliverDeviceType(deviceType) {
      var obj = self.deviceTypes[device];
      // set the value
      self.deviceTypes[device] = deviceType;

      // call the callbacks
      for (var i = 0; i < obj.length; i++) {
        obj[i](deviceType);
      }
    };

    // we do not have it in cache -> make a request

    var deviceUrl = "/api/v0002/bulk/devices?deviceId=" + device;
    var opts = {
      url: deviceUrl,
      contentType: "application/json"
    };

    var playAuth = this.getPlayOrgAuth();
    if (playAuth) {
      if (opts.headers) {
        opts.headers.Authorization = playAuth; // key: a-play-f5cym38oit token: Co0D)Z!50xF89PiaRH
      } else {
        opts.headers = { Authorization: playAuth }; // key: a-play-f5cym38oit token: Co0D)Z!50xF89PiaRH
      }
    }

    var self = this;

    console.debug("getDeviceType -- ", device);

    $.ajax(opts).done(function (response) {
      try {
        if (response.results && response.results[0] && response.results[0].typeId) {
          var typeId = response.results[0].typeId;
          deliverDeviceType(typeId);
        } else {
          // handle bad result?
          deliverDeviceType(null);
        }
      } catch (e) {
        console.error(e);
        deliverDeviceType(null);
      }
    }).fail(function (response) {
      console.error(response);
      deliverDeviceType(null);
    });
  },

  /**
  * Publishes the values in the cache for this property. Returns false if nothing found.
  */
  publishCachedValues: function publishCachedValues(type, deviceId, event) {
    if (event == "+") {
      event = null;
    }

    var result = false;

    if (!event) {
      // handle all events of a device
      var events = this.getEventsFromCache(type, deviceId);
      if (events) {
        events = Object.keys(events);
        for (var i = 0; i < events.length; i++) {
          var event = events[i];
          this.publishCachedValuesSingleEvent(type, deviceId, event);
        }
        result = true;
      }
    } else {
      // handle single event
      result = this.publishCachedValuesSingleEvent(type, deviceId, event);
    }

    return result;
  },

  publishCachedValuesSingleEvent: function publishCachedValuesSingleEvent(type, deviceId, event) {
    var data = this.getFromCache(type, deviceId, event);

    // Send the whole event. Timestamp is in the data
    if (data) {
      var groups = {};
      // form groups of timestamps to trigger per timestamp
      for (var key in data) {
        var prop = data[key];
        var timestamp = prop.timestamp;
        if (!groups[timestamp]) {
          groups[timestamp] = {};
        }
        groups[timestamp][key] = prop;
      }

      // now send all props of the same timestamp at once
      for (var timestamps in groups) {
        var payload = groups[timestamps];

        this.trigger({
          deviceEvent: {
            deviceType: type,
            deviceId: deviceId,
            eventType: event,
            data: payload
          }
        });
      }

      return true;
    }
    return false;
  },
  /**
  * Add an entry in the list of watched properties.
  */
  addWatch: function addWatch(topic, watchId) {
    if (!this.watches[topic]) {
      this.watches[topic] = [];
    }

    var watches = this.watches[topic];
    if (watches.indexOf(watchId) == -1) {
      watches.push(watchId);
    }
  },

  /**
  * Unsubscribes from all watches.
  */
  onStopAllWatches: function onStopAllWatches() {
    //console.debug("onStopAllWatches -- ");

    for (var topic in this.watches) {
      var watches = this.watches[topic];
      delete this.watches[topic];
      console.debug("unsubscribing from " + topic);
      this.client.unsubscribe(topic);
    }
  },

  /**
  * Unsubscribes from watch.
  */
  onStopWatch: function onStopWatch(watchId) {
    //console.debug("onStopWatch -- ", watchId);

    for (var topic in this.watches) {
      var watches = this.watches[topic];
      var index = watches.indexOf(watchId);
      if (index > -1) {
        watches.splice(index, 1);
      }
      // unsubscribe all watches without listener
      if (watches.length == 0) {
        console.debug("unsubscribing from " + topic);
        this.client.unsubscribe(topic);
      }
    }
  },

  /**
  * Property Watch will trigger when a specific property (JSON) on an event is received from the device.
  * Used for property and event watch.
  */
  onStartWatch: function onStartWatch(watchId, type, deviceId, event) {
    //console.debug("onStartWatch -- ", type, deviceId, event);
    if (!event) {
      event = "+";
    }
    if (!type) {
      type = "+";
    }
    var topic = "iot-2/type/" + type + "/id/" + deviceId + "/evt/" + event + "/fmt/json";

    // this is the first time somebody is subscribing for that property -> create subscribe
    if (!this.watches[topic] || this.watches[topic].length == 0) {
      this.addWatch(topic, watchId);

      // if there is already a connection subscribe right away, otherwise during pending subscribe handling
      if (this.state == State.CONNECTED) {
        console.debug("subscribe to " + topic);
        this.client.subscribe(topic);
      }
    }

    // publish already cached values to have a fast start
    var foundRecentEvents = this.publishCachedValues(type, deviceId, event);

    // call last event cache for this event
    if (!foundRecentEvents) {
      // we do not have any recent values in the cache -> get it from device cache

      var self = this;

      if (type != "+") {
        var eventSnippet = "";
        // always query all events to prevent error messages if there are typos in the event name
        // if (event != "+") {
        //   eventSnippet = "/" + event;
        // }
        var cacheUrl = "/api/v0002/device/types/" + type + "/devices/" + deviceId + "/events" + eventSnippet;
        var opts = {
          url: cacheUrl,
          contentType: "application/json",
          userData: {
            type: type,
            device: deviceId,
            event: event
          }
        };

        var playAuth = this.getPlayOrgAuth();
        if (playAuth) {
          if (opts.headers) {
            opts.headers.Authorization = playAuth; // key: a-play-f5cym38oit token: Co0D)Z!50xF89PiaRH
          } else {
            opts.headers = { Authorization: playAuth }; // key: a-play-f5cym38oit token: Co0D)Z!50xF89PiaRH
          }
        }

        self.queueLECRequests(opts);
      }
    }
  },

  /**
  * Do not send all last event cache requests at a time. Images would not load for seconds and UI would be slow.
  */
  queueLECRequests: function queueLECRequests(opts) {
    var self = this;
    // check if we have this request already
    var result = this.lecRequests.filter(function (item) {
      return opts.url == item.url;
    });
    if (result.length == 0) {
      // we do not have it in the queue -> add request
      this.lecRequests.push(opts);
      if (!this.lecTimer) {
        this.lecTimer = setTimeout(function () {
          self.lecTimer = null;
          self.performLECRequest();
        }, this.requestDelay);
      }
    }
    // if it is in the queue, just wait
  },

  performLECRequest: function performLECRequest() {
    var self = this;
    if (this.lecRequests.length > 0) {
      if (!this.lecTimer) {
        this.lecTimer = setTimeout(function () {
          self.lecTimer = null;
          self.performLECRequest();
        }, this.requestDelay);
      }
      var opts = this.lecRequests.shift();
      // we have to carry the raw data to identify e.g. gateways which do not return data at all in the call
      var userData = opts.userData;
      opts.userData = undefined;
      $.ajax(opts).done(function (response) {
        console.log("received last event for " + userData.type + " " + userData.device + " " + userData.event);
        if ($.isArray(response)) {
          // all events by last event cache
          if (response.length > 0) {
            for (var i = 0; i < response.length; i++) {
              var entry = response[i];
              var currentData = self.checkIfDataExists(entry.typeId, entry.deviceId, entry.eventId);
              if (!currentData) {
                var d = new Moment(entry.timestamp, Moment.ISO_8601);
                var raw = atob(entry.payload);
                self.addToCache(entry.typeId, entry.deviceId, entry.eventId, JSON.parse(raw), Moment(d).valueOf());
                self.publishCachedValues(entry.typeId, entry.deviceId, entry.eventId);
              }
            }

            // Make sure that we mark the queried event, even if it was not in the result set.
            // This can happen if you use DeviceMap and it asks for events that does not exist on that device
            if (!self.checkIfDataExists(userData.type, userData.device, userData.event)) {
              var d = new Moment();
              self.addToCache(userData.type, userData.device, userData.event, {}, Moment(d).valueOf());
            }
          } else {
            // This can happen if we have e.g. a gateway which does not return events at all.
            // Mark it in the cache to avoid querying the LEC again and again
            var d = new Moment();
            self.addToCache(userData.type, userData.device, userData.event, {}, Moment(d).valueOf());
          }
        } else if (response.eventId && response.payload) {
          // single value from event cache

          // check if we already have recent values
          var currentData = self.checkIfDataExists(response.typeId, response.deviceId, response.eventId);
          if (!currentData) {
            var d = new Moment(response.timestamp, Moment.ISO_8601);
            self.addToCache(response.typeId, response.deviceId, response.eventId, JSON.parse(atob(response.payload)), Moment(d).valueOf());
            self.publishCachedValues(response.typeId, response.deviceId, response.eventId);
          }
        } else {
          // Just to make sure, set a marker to do not query again
          var d = new Moment();
          self.addToCache(userData.type, userData.device, userData.event, {}, Moment(d).valueOf());
        }
      }).fail(function (response) {
        console.log("Retrieval of last value failed. Mark it in cache.");
        var d = new Moment();
        self.addToCache(userData.type, userData.device, userData.event, {}, Moment(d).valueOf());
      });
    }
  }

});

module.exports = IoTFDeviceStore;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../../Dashboard/constants/Const":"/Users/frank/Documents/Projects/IOTFoundation/components/Dashboard/constants/Const.js","./IoTFAuthStore.js":"/Users/frank/Documents/Projects/IOTFoundation/components/common/stores/IoTFAuthStore.js"}],"/Users/frank/Documents/Projects/IOTFoundation/components/common/stores/IoTFHistoryCloudantStore.js":[function(require,module,exports){
(function (global){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var Reflux = (typeof window !== "undefined" ? window['Reflux'] : typeof global !== "undefined" ? global['Reflux'] : null);
var Moment = (typeof window !== "undefined" ? window['moment'] : typeof global !== "undefined" ? global['moment'] : null);
var MomentTimezone = (typeof window !== "undefined" ? window['momentTimezone'] : typeof global !== "undefined" ? global['momentTimezone'] : null);
var $ = (typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null);
var Const = require('../../Dashboard/constants/Const');
var IoTFAuthStore = require('./IoTFAuthStore.js');

var Actions = Reflux.createActions(['getHistoricalData', 'getDBInstances']);

var IoTFHistoryCloudantStore = Reflux.createStore({
  historyCache: {},

  historyRequests: [],
  bucketRequests: [],

  requestDelay: 250, // in millis

  Actions: Actions,

  databases: null,

  activeRequests: 0,

  auth: {},
  // sort by timestamp
  compareByTime: function compareByTime(a, b) {
    if (this.getTimestamp(a) > this.getTimestamp(b)) return 1;else if (this.getTimestamp(a) < this.getTimestamp(b)) return -1;else return 0;
  },
  mergeArrays: function mergeArrays(list1, list2) {
    var i1 = 0;
    var i2 = 0;
    var merged = [];
    while (i1 < list1.length && i2 < list2.length) {
      if (this.compareByTime(list1[i1], list2[i2]) < 0) {
        //L < R
        merged.push(list1[i1]);
        i1++;
      } else if (this.compareByTime(list1[i1], list2[i2]) > 0) {
        //L > R
        merged.push(list2[i2]);
        i2++;
      } else {
        merged.push(list1[i1]);
        i1++;
        i2++;
      }
    }
    if (i1 < list1.length) {
      for (; i1 < list1.length; i1++) {
        merged.push(list1[i1]);
      }
    } else {
      for (; i2 < list2.length; i2++) {
        merged.push(list2[i2]);
      }
    }
    return merged;
  },

  /*
  var list = [1,2,3,4,5,6,7,8,9];
  console.log(subArrayL(list, function(item){
    return item <= 5;
  }));
  > [1, 2, 3, 4, 5]*/
  subArrayL: function subArrayL(list, filterUntil) {
    var index = this.findIndex(list, filterUntil);
    return list.slice(0, index);
  },
  subArrayR: function subArrayR(list, filterUntil) {
    var exclusive = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    var index = this.findLastIndex(list, filterUntil);
    return list.slice(index + 1, list.length);
  },
  findIndex: function findIndex(list, filterUntil) {
    for (var i = 0; i < list.length; i++) {
      if (!filterUntil(list[i])) {
        return i;
      }
    }
    return list.length;
  },
  findLastIndex: function findLastIndex(list, filterUntil) {
    for (var i = list.length - 1; i >= 0; i--) {
      if (!filterUntil(list[i])) {
        return i;
      }
    }
    return -1;
  },

  init: function init() {
    IoTFAuthStore.listen(this.onAuth);
    this.listenTo(Actions.getHistoricalData, this.onGetHistoricalData);
    this.listenTo(Actions.getDBInstances, this.onGetDBInstances);
  },

  onAuth: function onAuth(payload) {
    console.log("Retrieving auth:", payload);
    this.auth = {
      ltpa: payload.ltpa !== null ? encodeURIComponent(payload.ltpa) : null,
      org: encodeURIComponent(payload.org),
      apiKey: payload.apiKey !== null ? encodeURIComponent(payload.apiKey) : null,
      apiToken: payload.apiToken !== null ? encodeURIComponent(payload.apiToken) : null
    };
  },

  /**
  * Stores the history values in a cache. Values are stored per time range.
  * If the entry is flagged as incomplete, it will take the values from cache but
  * queries the database anyway to get a better result.
  */
  addToHistoryCache: function addToHistoryCache(type, device, event, start, end, data, complete) {
    var self = this;
    if (!this.historyCache[type]) {
      this.historyCache[type] = {};
    }
    if (!this.historyCache[type][device]) {
      this.historyCache[type][device] = {};
    }
    if (!this.historyCache[type][device][event]) {
      this.historyCache[type][device][event] = [];
    }

    data = data.sort(this.compareByTime);

    //may or may not be added to the list!
    var newItem = {
      start: start,
      end: end,
      data: data,
      complete: complete // contains ALL entries in that time frame
    };
    newItem.debugStart = new moment(newItem.start).format("HH:mm:ss.SSS");
    newItem.debugEnd = new moment(newItem.end).format("HH:mm:ss.SSS");

    // keep multiple request results of different ranges if necessary
    // + split up ranges to not store duplicates
    var results = this.historyCache[type][device][event];
    if (results.length > 1 && results[0].data.length > 1) {
      var start = results[0].start;
      var end = results[results.length - 1].end;
      console.debug("start: " + new Date(start));
      console.debug("end  : " + new Date(end));
      var range = end - start;
      var start_rel = Math.round((newItem.start - start) * 250 / range);
      var end_rel = Math.round((newItem.end - start) * 250 / range);
      var output = "";
      console.debug("newItem: ");
      for (var e = 0; e < end_rel; e++) {
        if (e < start_rel) {
          output += " ";
        } else if (e == start_rel) {
          if (newItem.complete) {
            output += "[";
          } else {
            output += "{";
          }
        } else if (newItem.complete) {
          output += "_";
        } else {
          output += ".";
        }
      }
      if (e == end_rel) {
        if (newItem.complete) {
          output += "]";
        } else {
          output += "}";
        }
      }

      console.debug(output);
      for (var d = 0; d < results.length; d++) {
        var start_rel = Math.round((results[d].start - start) * 250 / range);
        var end_rel = Math.round((results[d].end - start) * 250 / range);
        var output = "";
        //console.debug("slot: " + d + "/" + results[d].slot + "--(" + results[d].data.length + ")");
        for (var e = 0; e < end_rel; e++) {
          if (e < start_rel) {
            output += " ";
          } else if (e == start_rel) {
            if (results[d].complete) {
              output += "[";
            } else {
              output += "{";
            }
          } else if (results[d].complete) {
            output += "_";
          } else {
            output += ".";
          }
        }
        if (e == end_rel) {
          if (results[d].complete) {
            output += "]";
          } else {
            output += "}";
          }
        }

        //console.debug(output);
      }
    }

    // check time range and merge
    if (results.length == 0) {
      newItem.slot += "|first";
      results.push(newItem); //add a new time slot without conditions
    } else {
      var appendAfterLoop = null;
      for (var i = 0; i < results.length; i++) {
        var oldItem = results[i];
        oldItem.debugStart = new moment(oldItem.start).format("HH:mm:ss.SSS");
        oldItem.debugEnd = new moment(oldItem.end).format("HH:mm:ss.SSS");

        if (oldItem.start <= newItem.start) {
          //old starting first
          if (newItem.start <= oldItem.end) {
            //overlap left old/new
            if (newItem.end <= oldItem.end) {
              //new fully contained
              if (oldItem.complete) {
                //#aaaaa #aaaab
                //do nothing, done
                //old  1*2*3*4
                //new  _ _ 3 _
                break;
              } else {
                if (newItem.complete) {
                  //#aaaba
                  //split old into left and right, insert a complete block
                  //done
                  //later concat neighboring non-complete blocks
                  //old  0 _ 2 3 _ 5 _ 7
                  //new  _ _ _ 3*4 _ _ _
                  //-->  0 _ 2|3*4|5 _ 7
                  newItem.slot += "|aaaba";
                  var left = this.subArrayL(oldItem.data, function (item) {
                    return self.getTimestamp(item) <= newItem.start;
                  });
                  var right = this.subArrayR(oldItem.data, function (item) {
                    return self.getTimestamp(item) >= newItem.end;
                  });

                  if (left.length > 0) {

                    var leftItem = {
                      start: oldItem.start,
                      end: newItem.start,
                      data: left,
                      complete: false,
                      slot: "aaaba left"
                    };
                  }
                  if (right.length > 0) {
                    var rightItem = {
                      start: newItem.end,
                      end: oldItem.end,
                      data: right,
                      complete: false,
                      slot: "aaaba right"
                    };
                  }
                  if (left.length > 0 && leftItem.data.length > 0 && right.length > 0 && rightItem.data.length > 0) {
                    results.splice(i, 1, leftItem, newItem, rightItem);
                    i += 2;
                  } else if (left.length == 0 && right.length > 0 && rightItem.data.length > 0) {
                    results.splice(i, 1, newItem, rightItem);
                    i++;
                  } else if (left.length > 0 && leftItem.data.length > 0 && right.length == 0) {
                    results.splice(i, 1, leftItem, newItem);
                    i++;
                  } else {
                    results.splice(i, 1, newItem);
                  }
                  break;
                } else {
                  //#aaabb
                  //merge old and new yielding one non-complete block
                  //done
                  oldItem.data = this.mergeArrays(oldItem.data, newItem.data);
                  oldItem.slot += "|aaabb";
                  break;
                }
              }
            } else {
              //overlap left and right old/new
              // old  1 2 3 _ _
              // new  _ _ 3 4 5
              if (oldItem.complete) {
                //#aabaa #aabab
                //keep whole oldItem and change newItem to remainder of newItem
                //continue
                newItem.data = this.subArrayR(newItem.data, function (item) {
                  return self.getTimestamp(item) >= oldItem.end;
                });

                oldItem.slot += "|aaba* old";
                newItem.slot += "|aaba* new";
                if (newItem.data.length > 0) {
                  //should be always true, but for newItem.end > data[last]
                  //otherwise had been caught in a case above, aaaa*
                  newItem.start = oldItem.end;
                  if (i == results.length - 1) {
                    appendAfterLoop = newItem;
                  }
                  continue;
                } else {
                  break;
                }
              } else {
                if (newItem.complete) {
                  //#aabba
                  //split old left, keep whole newItem in next iteration
                  //must not keep leftest data in itemNew being also in oldItem
                  //continue with next slot and newItem/RIGHT
                  newItem.slot += "|aabba";
                  oldItem.data = this.subArrayL(oldItem.data, function (item) {
                    return self.getTimestamp(item) <= newItem.start;
                  });
                  if (oldItem.data.length > 0) {
                    oldItem.end = newItem.start;
                    oldItem.slot += "|aabba old left";
                  } else {
                    results.splice(i, 1); //delete old
                    i--;
                  }
                  if (i == results.length - 1) {
                    appendAfterLoop = newItem;
                  }
                  continue;
                } else {
                  //#aabbb
                  //merge old into new pending
                  //continue with next slot and old++new
                  //must not keep leftest data in old++new being also in previous oldItem (by def checked)
                  newItem.data = this.mergeArrays(oldItem.data, newItem.data);
                  newItem.slot += "|aabbb pending";
                  //newItem.start = this.getTimestamp(newItem.data[0]); // shrink non-complete slots to match borders
                  //newItem.end = this.getTimestamp(newItem.data[newItem.data.length-1]);
                  newItem.start = oldItem.start;
                  results.splice(i, 1); //delete old
                  i--;
                  if (i == results.length - 1) {
                    appendAfterLoop = newItem;
                  }
                  continue;
                }
              }
            }
          } else {
            //#ab
            //current old left from new not overlapping
            //do nothing, continue with next oldItem
            if (i == results.length - 1) {
              appendAfterLoop = newItem;
            }
            continue;
          }
        } else {
          //new starting first newItem.start < oldItem.start
          //notice: the conditions differ from above! oldItem and newItem switch roles
          if (oldItem.start <= newItem.end) {
            //overlap left new/old
            if (oldItem.end <= newItem.end) {
              //new overlapping both sides (but not previous slot)
              if (newItem.complete) {
                //#baaaa #baaab
                //with left not overlapping previous slot, create a block from newItem.start to oldItem.end
                //replace oldItem -> complete
                //continue with next slot and remainder of newItem
                var newLeft = this.subArrayL(newItem.data, function (item) {
                  return self.getTimestamp(item) <= oldItem.end;
                });
                oldItem.start = newItem.start; //maybe expand to the left
                oldItem.data = newLeft; //overwrite the existing slot with new data
                oldItem.complete = true;
                oldItem.slot += "|baaa*";
                var newRight = this.subArrayR(newItem.data, function (item) {
                  return self.getTimestamp(item) >= oldItem.end;
                });
                if (newRight.length > 0) {
                  newItem.start = oldItem.end;
                  newItem.data = newRight;
                  if (i == results.length - 1) {
                    appendAfterLoop = newItem;
                  }
                  continue;
                }
              } else {

                if (oldItem.complete) {
                  //#baaba
                  //create newItemLeft, take oldItem, continue with remainder
                  oldItem.slot += "|baaba old";
                  var newLeft = this.subArrayL(newItem.data, function (item) {
                    return self.getTimestamp(item) <= oldItem.start;
                  }); //start, not end!
                  if (newLeft.length > 0) {
                    var newItemLeft = {
                      start: newItem.start,
                      end: oldItem.start,
                      data: newLeft,
                      complete: false,
                      slot: "baaba left" };
                    results.splice(i, 1, newItemLeft, oldItem); //resp. splice(i-1,0,new)
                    i++;
                  }
                  newItem.data = this.subArrayR(newItem.data, function (item) {
                    return self.getTimestamp(item) >= oldItem.end;
                  });
                  if (newItem.data.length > 0) {
                    newItem.start = oldItem.end;
                    if (i == results.length - 1) {
                      appendAfterLoop = newItem;
                    }
                    continue;
                  }
                } else {
                  //#baabb
                  // old and new incomplete
                  //create a block from newItem.start to oldItem.end
                  //MERGE oldItem and newItem -> non-complete
                  //continue with next slot and remainder of newItem
                  var newLeft = this.subArrayL(newItem.data, function (item) {
                    return self.getTimestamp(item) <= oldItem.end;
                  });
                  oldItem.data = this.mergeArrays(oldItem.data, newLeft);
                  oldItem.start = this.getTimestamp(oldItem.data[0]);
                  oldItem.end = this.getTimestamp(oldItem.data[oldItem.data.length - 1]);
                  oldItem.slot += "|baabb";
                  newItem.data = this.subArrayR(newItem.data, function (item) {
                    return self.getTimestamp(item) >= oldItem.end;
                  });
                  if (newItem.data.length > 0) {
                    newItem.start = oldItem.end;
                    if (i == results.length - 1) {
                      appendAfterLoop = newItem;
                    }
                    continue;
                  }
                }
              }
            } else {
              //new/old overlapping left, new first
              //no overlap to previous slot
              if (newItem.complete == oldItem.complete) {
                //#babaa #babbb
                // equivalence
                //return one block without duplicates -> merge and resp. complete tag
                oldItem.data = this.mergeArrays(oldItem.data, newItem.data);
                oldItem.start = newItem.start;
                oldItem.slot += "|bab-aa/bb";
                break;
              } else {
                //XOR
                if (oldItem.complete && !newItem.complete) {
                  //#babab
                  //newItem until oldItem.start followed by complete oldItem
                  oldItem.slot += "|babab old";
                  newItem.data = this.subArrayL(newItem.data, function (item) {
                    return self.getTimestamp(item) <= oldItem.start;
                  });
                  if (newItem.data.length > 0) {
                    newItem.end = oldItem.start;
                    newItem.slot += "|babab left";
                    results.splice(i, 1, newItem, oldItem);
                    i++;
                  }
                  break;
                } else {
                  //#babba
                  //! oldItem.complete && newItem.complete
                  //complete newItem ++ oldItem-remainder
                  oldItem.data = this.subArrayR(oldItem.data, function (item) {
                    return self.getTimestamp(item) >= newItem.end;
                  });
                  if (oldItem.data.length > 0) {
                    oldItem.start = newItem.end;
                    oldItem.slot += "|babba old";
                    newItem.slot += "|babba new left";
                    results.splice(i, 1, newItem, oldItem);
                    i++;
                  } else {
                    oldItem = newItem;
                    oldItem.slot += "|babba new only";
                  }
                }
              }
            }
          } else {
            //#bb
            // no overlapping, newItem first
            //insert newItem before oldItem
            //done
            results.splice(i, 0, newItem);
            i++;
            break;
          }
        }
      }
      if (appendAfterLoop != null) {
        results.push(appendAfterLoop);
      }

      //consolidate/concat neighboring complete (and also non-complete) blocks
      for (var i = 1; i < results.length; i++) {
        if (results[i - 1].end == results[i].start && results[i - 1].complete == results[i].complete) {
          results[i - 1].data = results[i - 1].data.concat(results[i].data);
          results[i - 1].end = results[i].end;
          results.splice(i, 1); //delete results[i];
          i--;
        }
      }
    }
    console.log(this.historyCache[type][device][event]);
    //for testing only: check whether all slots are in right order and don't overlap (but start and end)
    var results = this.historyCache[type][device][event];
    for (var j = 1; j < results.length; j++) {
      var end_last = results[j - 1].end;
      var start = results[j].start;
      var end = results[j].end;
      if (!(end_last <= start && start <= end)) {
        console.error(JSON.stringify(results));
        console.error("j:" + j);
      }
      if (results[j].data.length > 0) {
        var last_inner = results[j].data[0];
        if (this.getTimestamp(last_inner) < start) {
          console.error("j:" + j + " k: " + 0 + "timestamp less than start");
          console.log(this.getTimestamp(last_inner));
          console.log(start);
        }
        for (var k = 1; k < results[j].data.length; k++) {
          var inner = results[j].data[k];
          if (this.getTimestamp(last_inner) > inner) {
            console.error("j:" + j + " k: " + 0 + "timestamp in wrong order");
          }
          if (this.getTimestamp(inner) > end) {
            console.error("j:" + j + " k: " + 0 + "timestamp greater than end");
          }
        }
      }
    }
  },

  getTimestamp: function getTimestamp(data) {
    for (var i in data) {
      var item = data[i];
      if (item.timestamp) {
        return item.timestamp;
      }
    }
    return null;
  },
  //for a new request this method gathers cached data and returns an array of intervals for missing data
  publishCachedHistoryValues: function publishCachedHistoryValues(request) {
    var newSpan = {
      start: request.start,
      end: request.end
    }; //span the whole request, will be splitted to filter already complete slots
    var splittedRequestIntervals = [];
    var devices = this.historyCache[request.type];
    if (devices) {
      var events = devices[request.device];
      if (events) {
        var items = events[request.event];

        if (items) {
          //gather to-be-requested intervals
          for (var i = 0; i < items.length; i++) {
            var sendit = false;
            var item = items[i];
            //inside <-item--[_new_]--> or overlapping <-item--[_new_-_->_]
            if (newSpan.start >= item.start && newSpan.start <= item.end) {
              if (item.complete) {
                newSpan.start = item.end; //skip complete block
              }
              sendit = true;
            }
            //request spans the slot, if slot complete, two spans are needed
            if (newSpan.start <= item.start && newSpan.end >= item.end) {
              if (item.complete) {
                var leftSpan = { start: newSpan.start, end: item.start }; //close the already open span
                splittedRequestIntervals.push(leftSpan);
                newSpan.start = item.end; //and create a new one
              }
              sendit = true;
            }
            //request either is inside this slot (more detailed) or overlapping the slot
            if (newSpan.end <= item.end && newSpan.end >= item.start) {
              if (item.complete) {
                //request ends here... complete remainder is not considered anymore
                splittedRequestIntervals.push({ start: newSpan.start, end: item.start });
                newSpan.start = item.end; //disable span, since empty
              }
              sendit = true;
            }
            if (newSpan.end < item.start) {
              break; //since there will be no more relevant slot
            }
            if (sendit) {
              // Send the full batch without further looking into it. Will be cut down later.
              //we could also use the resp. subarrays to trigger less event-data
              this.trigger({
                historyEvent: {
                  deviceType: request.type,
                  deviceId: request.device,
                  eventType: request.event,
                  data: item.data,
                  complete: item.complete,
                  cached: true
                }
              });
            }
          }
        }
      }
    }
    if (newSpan.start <= newSpan.end) {
      splittedRequestIntervals.push(newSpan);
    }
    return splittedRequestIntervals;
  },

  /*
  * Creates a flattened list of properties for the event data. Used for caching.
  */
  generateListOfProperties: function generateListOfProperties(data, prefix, timestamp) {
    var result = {};
    if (prefix) {
      prefix = prefix + ".";
    } else {
      prefix = "";
    }
    // strip off default prefixes
    if (prefix == "d.") {
      prefix = "";
    }
    for (var i in data) {
      var item = data[i];
      if ((typeof item === 'undefined' ? 'undefined' : _typeof(item)) == "object") {
        Object.assign(result, this.generateListOfProperties(item, prefix + i, timestamp));
      } else if (item !== undefined) {
        result[prefix + i] = {
          value: item,
          timestamp: timestamp,
          debug: new moment(timestamp).format("HH:mm:ss.SSS")
        };
      }
    }
    return result;
  },

  /**
  * Strips of a leading d. prefix. This is necessary since the historian returns the property names without prefix.
  * Therefore we have to normalize it.
  */
  normalizeProperty: function normalizeProperty(property) {
    var hasPrefix = property.indexOf("d.") === 0;
    if (hasPrefix) {
      property = property.substring(2);
    }
    return property;
  },

  /**
  * Same as normalizeProperty for the full payload of an MQTT message.
  */
  normalizePayload: function normalizePayload(payload) {
    if (payload && payload.d) {
      payload = payload.d;
    }

    return payload;
  },

  onGetDBInstances: function onGetDBInstances() {
    // use cached value if possible
    if (this.databases) {
      self.trigger({
        databases: this.databases
      });
      return;
    }

    var self = this;
    var seviceUrl = "/api/v0002/s2s/services/";
    var opts = {
      url: seviceUrl,
      contentType: "application/json"
    };
    $.ajax(opts).done(function (response) {
      if (response && response.length > 0) {
        var databases = [];
        for (var i = 0; i < response.length; i++) {
          var service = response[i];
          if (service.bound && service.type == "CLOUDANT" && service.setup) {
            databases.push(service);
          }
        }
        this.databases = databases;

        self.trigger({
          databases: databases
        });
      }
    }).fail(function (response) {
      console.log(response);
    });
  },

  onGetHistoricalData: function onGetHistoricalData(type, deviceId, event, start, end, database, hires) {
    if (type != "+") {
      if (!end) {
        end = new Date().getTime();
      }
      if (!start) {
        start = end - 300 * 1000;
      }

      console.log(" -> query historian for history -- " + type + "/" + deviceId + "/" + event);

      // Queue the requests to avoid having 50 request at a time. This would result in slow interaction and
      // delayed image loading
      var request = {
        type: type,
        device: deviceId,
        event: event,
        start: start,
        end: end,
        database: database,
        hires: hires,
        buckets: this.getBuckets(start, end, database.dbBucket, database.dbTZ)
      };
      this.queueHistorianRequests(request);
    }
  },

  getBuckets: function getBuckets(start, end, bucketType, dbTZ) {
    var buckets = [];
    var unit = void 0;
    switch (bucketType) {
      case "DAY":
        {
          unit = "d";
          //formatCmp = "YYYY-MM-DD";
          break;
        }
      case "WEEK":
        {
          unit = "w";
          //formatCmp = "YYYY-[w]ww";
          break;
        }
      case "MONTH":
        {
          unit = "M";
          //formatCmp = "YYYY-MM";
          break;
        }
      default:
        console.error("unknown bucketType", bucketType);
    }

    var next = function next(date) {
      var nextDate = moment(date).tz(dbTZ);
      nextDate.add(1, bucketType.toLowerCase());
      return nextDate;
    };

    var leftDate = moment(start).tz(dbTZ).startOf(bucketType.toLowerCase());
    var rightDate = moment(end).tz(dbTZ).endOf(bucketType.toLowerCase());

    while (!leftDate.isAfter(rightDate)) {
      buckets.push({
        bucket: this.getBucketName(bucketType, leftDate),
        start: leftDate.valueOf(),
        end: next(leftDate).valueOf()
      });
      leftDate = next(leftDate);
    }

    return buckets;
  },

  getBucketName: function getBucketName(bucketType, date) {
    if (bucketType == "DAY") {
      var bucket = date.format("YYYY-MM-DD");
    } else if (bucketType == "WEEK") {
      var bucket = date.format("GGGG-[w]ww"); //weekYear() + "-w" + today.week();
    } else if (bucketType == "MONTH") {
      var bucket = date.format("YYYY-MM");
    }
    return bucket;
  },


  /**
  * Do not send all historian requests at a time. Images would not load for seconds and UI would be slow.
  */
  queueHistorianRequests: function queueHistorianRequests(request) {
    var self = this;
    // Check if we have the results in cache.
    // If we have cached values, the method returns the remaining time span and publishes what it has
    var remainingTimeSlots = this.publishCachedHistoryValues(request);
    for (var t = 0; t < remainingTimeSlots.length; t++) {
      request = _extends({}, request);
      var timeSlot = remainingTimeSlots[t];

      if (timeSlot.start >= timeSlot.end) {
        // no need for a query, we have everything in cache
        break;
      } else {
        // reduce the query if possible
        request.start = timeSlot.start;
        request.end = timeSlot.end;
      }
      // check if we have this request already
      var itsamatch = false;
      for (var i = 0; i < this.historyRequests.length; i++) {
        var item = this.historyRequests[i];
        if (item.type == request.type && item.device == request.device && item.event == request.event) {
          // adapt the timeframe
          if (item.end < request.start || item.start > request.end) {
            // we still need two requests
          }if (item.end == request.end && item.start == request.start) {
            // we already have the same request
            itsamatch = true;
          } else if (request.hires) {
            // make sure to have hiRes results and make an extra query
          } else {
            // just combine the requests
            item.start = Math.min(item.start, request.start);
            item.end = Math.max(item.end, request.end);
            itsamatch = true;
          }
          if (itsamatch) {
            break;
          }
        }
      }

      if (!itsamatch) {
        // we do not have it in the queue -> add request
        this.historyRequests.push(request);
        if (!this.historianTimer) {
          this.historianTimer = setTimeout(function () {
            self.historianTimer = null;
            self.performHistorianRequest();
          }, self.requestDelay);
        }
      }
    }
  },

  startLoading: function startLoading() {
    if (this.loadEvent) {
      clearTimeout(this.loadEvent);
      this.loadEvent = null;
    }
    this.trigger({
      loading: true
    });
  },

  stopLoading: function stopLoading() {
    if (this.loadEvent) {
      clearTimeout(this.loadEvent);
      this.loadEvent = null;
    }
    var self = this;
    this.loadEvent = setTimeout(function () {
      self.loadEvent = 0;
      self.trigger({
        loading: false
      });
    }, 500);
  },

  performHistorianRequest: function performHistorianRequest() {
    var _this = this;

    var self = this;
    if (this.historyRequests.length > 0 || this.bucketRequests.length > 0) {
      var querykey;
      var today;
      var bucket;
      var start;
      var end;
      var query;
      var cloudantUrl;
      var opts;

      (function () {
        if (!_this.historianTimer) {
          _this.historianTimer = setTimeout(function () {
            self.historianTimer = null;
            self.performHistorianRequest();
          }, self.requestDelay);
        }

        var request = null;
        if (_this.bucketRequests.length > 0) {
          // first handle the per bucket requests
          request = _this.bucketRequests.shift();
        } else {
          var mainRequest = _this.historyRequests.shift();
          // spread the request to the buckets
          if (mainRequest.buckets.length > 10) {
            console.warn("You try to query " + mainRequest.buckets.length + " cloudant database buckets. Limiting this to 10 requests for performance reasons. Consider using a different bucket size.");
          }
          for (var i = 0; i < mainRequest.buckets.length && i < 10; i++) {
            request = _extends({}, mainRequest, { bucket: mainRequest.buckets[i].bucket });
            _this.bucketRequests.push(request);
          }
          request = _this.bucketRequests.shift();
        }

        querykey = '"' + request.type + '","' + request.device + '","' + request.event + '"';
        today = moment().tz(request.database.dbTZ); //browser time BST

        bucket = request.bucket;
        start = moment(request.start).tz(request.database.dbTZ);
        end = moment(request.end).tz(request.database.dbTZ);


        start = start.format("YYYY-MM-DDTHH:mm:ss.SSSZ");
        end = end.format("YYYY-MM-DDTHH:mm:ss.SSSZ");
        query = 'deviceType:"' + request.type + '" AND deviceId:"' + request.device + '" AND eventType:"' + request.event + '" AND timestamp:["' + start + '" TO "' + end + '"]';
        //sort the result by a Math.random() value to get interval-spread values

        cloudantUrl = '/api/v0002/cloudant-proxy/' + request.database.dbID + '/iotp_' + _this.auth.org + '_' + request.database.dbName + '_' + bucket + '/' + '_design/iotp/_search/search?include_docs=false&limit=100&q=' + query + '&sort="sort<number>"';


        console.log("DO FETCH HISTORY FOR", start, end);
        opts = {
          url: cloudantUrl,
          type: "get",
          contentType: "application/json",
          dataType: "json"
        };


        _this.startLoading();

        $.ajax(opts).done(function (response) {
          console.log(response);
          if (response.rows) {
            var items = response.rows;
            if (items.length > 0) {
              var item = items[0];
              var convertedItems = [];
              for (var i = items.length - 1; i >= 0; i--) {
                var item = items[i];
                var rawData = JSON.parse(item.fields.data);
                var timestamp = Date.parse(item.fields.timestamp);
                var data = self.generateListOfProperties(rawData, null, timestamp);
                convertedItems.push(data);
              }

              self.addToHistoryCache(request.type, request.device, request.event, request.start, request.end, convertedItems, response.total_rows == response.rows.length);

              self.trigger({
                historyEvent: {
                  deviceType: request.type,
                  deviceId: request.device,
                  eventType: request.event,
                  data: convertedItems
                }
              });
            }
          }
          self.stopLoading();
        }).fail(function (response) {
          console.log("Retrieval of history failed");
          self.stopLoading();
        });
      })();
    }
  }

});

module.exports = IoTFHistoryCloudantStore;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../../Dashboard/constants/Const":"/Users/frank/Documents/Projects/IOTFoundation/components/Dashboard/constants/Const.js","./IoTFAuthStore.js":"/Users/frank/Documents/Projects/IOTFoundation/components/common/stores/IoTFAuthStore.js"}],"/Users/frank/Documents/Projects/IOTFoundation/components/common/stores/IoTFHistoryTimeseriesStore.js":[function(require,module,exports){
(function (global){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var Reflux = (typeof window !== "undefined" ? window['Reflux'] : typeof global !== "undefined" ? global['Reflux'] : null);
var Moment = (typeof window !== "undefined" ? window['moment'] : typeof global !== "undefined" ? global['moment'] : null);
var MomentTimezone = (typeof window !== "undefined" ? window['momentTimezone'] : typeof global !== "undefined" ? global['momentTimezone'] : null);
var $ = (typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null);
var Const = require('../../Dashboard/constants/Const');
var IoTFAuthStore = require('./IoTFAuthStore.js');

var Actions = Reflux.createActions(['getHistoricalData']);

var IoTFHistoryTimeseriesStore = Reflux.createStore({

  historyCache: {},

  historyRequests: [],

  requestDelay: 250, // in millis

  Actions: Actions,

  auth: {},

  init: function init() {
    IoTFAuthStore.listen(this.onAuth);
    this.listenTo(Actions.getHistoricalData, this.onGetHistoricalData);
  },

  onAuth: function onAuth(payload) {
    console.log("Retrieving auth:", payload);
    this.auth = {
      ltpa: payload.ltpa !== null ? encodeURIComponent(payload.ltpa) : null,
      org: encodeURIComponent(payload.org),
      apiKey: payload.apiKey !== null ? encodeURIComponent(payload.apiKey) : null,
      apiToken: payload.apiToken !== null ? encodeURIComponent(payload.apiToken) : null
    };

    // auth was updated
    this.checkForHistorian();
  },

  addToHistoryCache: function addToHistoryCache(type, device, event, start, end, data) {
    if (!this.historyCache[type]) {
      this.historyCache[type] = {};
    }
    if (!this.historyCache[type][device]) {
      this.historyCache[type][device] = {};
    }
    if (!this.historyCache[type][device][event]) {
      this.historyCache[type][device][event] = [];
    }
    // keep multiple request results of different ranges if necessary
    var results = this.historyCache[type][device][event];
    // check time range and merge
    if (results.length == 0) {
      var newItem = {
        start: start,
        end: end,
        data: data
      };
      results.push(newItem);
    } else {
      for (var i = 0; i < results.length; i++) {
        var item = results[i];
        if (item.start >= start && item.end <= end) {
          // old item is fully contained in the new one -> replace old item
          var newItem = {
            start: start,
            end: end,
            data: data
          };
          results.splice(i, 1, newItem);
        } else if (item.start <= start && item.end >= end) {
          // new item is fully contained in the old one -> do nothing
        } else if (start < item.start && end <= item.end && end >= item.start) {
          // new item extends the old one to the left
          for (var t = 0; t < data.length; t++) {
            var timestamp = this.getTimestamp(data[t]);
            if (timestamp && timestamp < item.start) {
              // just add it at the end since it will be sorted anyway
              item.data.push(data[t]);
            }
          }
          item.start = start;
        } else if (end > item.end && start >= item.start && start <= item.end) {
          // new item extends the old one to the right
          for (var t = 0; t < data.length; t++) {
            var timestamp = this.getTimestamp(data[t]);
            if (timestamp && timestamp > item.end) {
              // just add it at the end since it will be sorted anyway
              item.data.push(data[t]);
            }
          }
          item.end = end;
        } else {
          // create a new entry
          var newItem = {
            start: start,
            end: end,
            data: data
          };
          results.push(newItem);
        }
      }
    }
  },

  getTimestamp: function getTimestamp(data) {
    for (var i in data) {
      var item = data[i];
      if (item.timestamp) {
        return item.timestamp;
      }
    }
    return null;
  },

  publishCachedHistoryValues: function publishCachedHistoryValues(request) {
    var newSpan = {
      start: request.start,
      end: request.end
    };

    var devices = this.historyCache[request.type];
    if (devices) {
      var events = devices[request.device];
      if (events) {
        var items = events[request.event];
        for (var i = 0; i < items.length; i++) {
          var sendit = false;
          var item = items[i];
          if (newSpan.start >= item.start && newSpan.start <= item.end) {
            newSpan.start = item.end;
            sendit = true;
          }
          if (newSpan.end <= item.end && newSpan.end >= item.start) {
            newSpan.end = item.start;
            sendit = true;
          }
          if (sendit) {
            // Send the full batch without further looking into it. Will be cut down later.
            this.trigger({
              historyEvent: {
                deviceType: request.type,
                deviceId: request.device,
                eventType: request.event,
                data: item.data
              }
            });
          }
        }
      }
    }

    return newSpan;
  },

  /*
  * Creates a flattened list of properties for the event data. Used for caching.
  */
  generateListOfProperties: function generateListOfProperties(data, prefix, timestamp) {
    var result = {};
    if (prefix) {
      prefix = prefix + ".";
    } else {
      prefix = "";
    }
    // strip off default prefixes
    if (prefix == "d.") {
      prefix = "";
    }
    for (var i in data) {
      var item = data[i];
      if ((typeof item === 'undefined' ? 'undefined' : _typeof(item)) == "object") {
        Object.assign(result, this.generateListOfProperties(item, prefix + i, timestamp));
      } else if (item !== undefined) {
        result[prefix + i] = {
          value: item,
          timestamp: timestamp
        };
      }
    }
    return result;
  },

  /**
  * Strips of a leading d. prefix. This is necessary since the historian returns the property names without prefix.
  * Therefore we have to normalize it.
  */
  normalizeProperty: function normalizeProperty(property) {
    var hasPrefix = property.indexOf("d.") === 0;
    if (hasPrefix) {
      property = property.substring(2);
    }
    return property;
  },

  /**
  * Same as normalizeProperty for the full payload of an MQTT message.
  */
  normalizePayload: function normalizePayload(payload) {
    if (payload && payload.d) {
      payload = payload.d;
    }

    return payload;
  },

  // TODO Check for Cloudant instead
  checkForHistorian: function checkForHistorian() {
    this.historianAvailable = true;
    return;

    // var self = this;
    // var historianUrl = "/api/v0002/";
    // var opts = {
    //   url: historianUrl,
    //   contentType: "application/json"
    // };
    // $.ajax(opts)
    // .done(function(response) {
    //   if (response.config && response.config.historian && response.config.historian.enabled) {
    //     self.historianAvailable = true;
    //   } else {
    //     self.historianAvailable = false;
    //   }
    // })
    // .fail(function(response) {
    //   console.log("Historian is not available");
    //   self.historianAvailable = false;
    // });
  },

  onGetHistoricalData: function onGetHistoricalData(type, deviceId, event, start, end) {
    if (this.historianAvailable === true) {
      if (type != "+") {
        if (!end) {
          end = new Date().getTime();
        }
        if (!start) {
          start = end - 300 * 1000; // one hour per default
        }

        console.log(" -> query historian for history -- " + type + "/" + deviceId + "/" + event);

        // Queue the requests to avoid having 50 request at a time. This would result in slow interaction and
        // delayed image loading
        var request = {
          type: type,
          device: deviceId,
          event: event,
          start: start,
          end: end
        };
        this.queueHistorianRequests(request);
      }
    }
  },

  /**
  * Do not send all historian requests at a time. Images would not load for seconds and UI would be slow.
  */
  queueHistorianRequests: function queueHistorianRequests(request) {
    var self = this;
    // Check if we have the results in cache.
    // If we have cached values, the method returns the remaining time span and publishes what it has
    var remainingTime = this.publishCachedHistoryValues(request);
    if (remainingTime.start >= remainingTime.end) {
      // no need for a query, we have everything in cache
      return;
    } else {
      // reduce the query if possible
      request.start = remainingTime.start;
      request.end = remainingTime.end;
    }

    // check if we have this request already
    var itsamatch = false;
    for (var i = 0; i < this.historyRequests.length; i++) {
      var item = this.historyRequests[i];
      if (item.type == request.type && item.device == request.device && item.event == request.event) {
        // adapt the timeframe to serve both requests in one
        item.start = Math.min(item.start, request.start);
        item.end = Math.max(item.end, request.end);
        itsamatch = true;
        break;
      }
    }

    if (!itsamatch) {
      // we do not have it in the queue -> add request
      this.historyRequests.push(request);
      if (!this.historianTimer) {
        this.historianTimer = setTimeout(function () {
          self.historianTimer = null;
          self.performHistorianRequest();
        }, this.requestDelay);
      }
    }
  },

  performHistorianRequest: function performHistorianRequest() {
    var self = this;
    if (this.historyRequests.length > 0) {
      if (!this.historianTimer) {
        this.historianTimer = setTimeout(function () {
          self.historianTimer = null;
          self.performHistorianRequest();
        }, this.requestDelay);
      }
      var request = this.historyRequests.shift();

      var eventSnippet = "";
      if (event != "+") {
        eventSnippet = "evt_type=" + request.event;
      }
      var historianUrl = "/api/v0002/historian/types/" + request.type + "/devices/" + request.device + "?" + eventSnippet + "&start=" + request.start + "&end=" + request.end + "&top=1000";
      var opts = {
        url: historianUrl,
        contentType: "application/json"
      };

      $.ajax(opts).done(function (response) {
        if (response.events) {
          // normal historian call
          // check if we already have recent values
          var items = response.events;
          if (items.length > 0) {
            var item = items[0];

            var convertedItems = [];
            for (var i = items.length - 1; i >= 0; i--) {
              var item = items[i];
              var data = self.generateListOfProperties(item.evt, null, item.timestamp["$date"]);
              convertedItems.push(data);
            }

            self.addToHistoryCache(item.device_type, item.device_id, item.evt_type, request.start, request.end, convertedItems);

            self.trigger({
              historyEvent: {
                deviceType: item.device_type,
                deviceId: item.device_id,
                eventType: item.evt_type,
                data: convertedItems
              }
            });
          }
        }
      }).fail(function (response) {
        console.log("Retrieval of history failed");
      });
    }
  }

});

module.exports = IoTFHistoryTimeseriesStore;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../../Dashboard/constants/Const":"/Users/frank/Documents/Projects/IOTFoundation/components/Dashboard/constants/Const.js","./IoTFAuthStore.js":"/Users/frank/Documents/Projects/IOTFoundation/components/common/stores/IoTFAuthStore.js"}],"/Users/frank/Documents/Projects/IOTFoundation/components/common/stores/IoTFPermStore.js":[function(require,module,exports){
(function (global){
'use strict';

var Reflux = (typeof window !== "undefined" ? window['Reflux'] : typeof global !== "undefined" ? global['Reflux'] : null);

var Actions = Reflux.createActions(['showRPDialog', 'closeRPDialog']);

var IoTFPermStore = Reflux.createStore({

		Actions: Actions,

		init: function init() {
				this.listenTo(Actions.showRPDialog, this.onShowRPDialog);
				this.listenTo(Actions.closeRPDialog, this.onCloseRPDialog);
		},

		onCloseRPDialog: function onCloseRPDialog() {
				this.trigger({ visible: false });
		},
		onShowRPDialog: function onShowRPDialog(payload) {
				if (payload.action == "requestPermission") {
						this.trigger({ visible: payload.params.visible, operationId: payload.params.operationId, label: payload.params.label });
				}
		},

		getTheme: function getTheme() {
				var defaultTheme = {
						"canvas": "#142a36",
						"lightText": "#F7F7F7",
						"border": "#E6E6E6",
						"title": "#F7F7F7",
						"titleText": "#899399",
						"content": "#FDFDFD",
						"major": "#2E3636",
						"minor": "#899399",
						"accent": "#4581E0",
						"good": "#8CD210",
						"bad": "#FF5050",
						"font": "'Helvetica Neue',HelveticaNeue,Helvetica,'Segoe UI',Segoe,Calibri,Roboto,'Droid Sans','Arial Unicode MS',Arial,sans-serif",
						"logo": "/assets/dashboard/iot.jpg",

						"light": "#c7c7c7",
						"normal": "#959595",
						"dark": "#5a5a5a",

						"chart": ["#5596E6", "#4178BE", "#325C80", "#264A60", "#1D3649", "#323c3c", "#3c4646", "#5a6464", "#6d7777", "#959f9f"],

						"schemes": [{ // green
								"name": 0,
								"light": "#c8d2d2",
								"normal": "#8cd211",
								"dark": "#4b8400"
						}]
				};
				return defaultTheme;
		}
});

module.exports = IoTFPermStore;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],"/Users/frank/Documents/Projects/IOTFoundation/components/common/stores/IoTFRMStore.js":[function(require,module,exports){
(function (global){
"use strict";

var _PolicyService = require('../../app/RiskManagement/services/PolicyService.js');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var mockupMode = localStorage.mockupProgress >= 0 && localStorage.mockupProgress <= 2;
var Reflux = (typeof window !== "undefined" ? window['Reflux'] : typeof global !== "undefined" ? global['Reflux'] : null);
var $ = (typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null);
var IoTFAuthStore = require('./IoTFAuthStore.js');

var Actions = Reflux.createActions(['getPolicyCompliance', //query card endpoint (all)
'getBlacklistWhitelist', //query only the blacklist or whitelist card endpoint
'getConnectionSecurity', //query connection security card endpoint

'unsetPolicyCompliance', //clear timeouts when unmounting
'unsetBlacklistWhitelist', 'unsetConnectionSecurity', 'registerPolicyCompliance', //count needed requests on mounting
'registerBlacklistWhitelist', 'registerConnectionSecurity']);
var progressCount = 0;
var mockupProgress = [{ Progress: 0, Total: 300, AbsenteeRatio: 0.33, ViolationRatio: 0.5, AbsenteesTotal: undefined, ViolationsTotal: undefined }, { Progress: 0.63, Total: 360, AbsenteeRatio: 0.38, ViolationRatio: 0.5, AbsenteesTotal: undefined, ViolationsTotal: undefined }, { Progress: 1.0, Total: 412, AbsenteeRatio: 0.29, ViolationRatio: 0.4, AbsenteesTotal: 119, ViolationsTotal: 165 }];

var getProgressByLS = function getProgressByLS() {
  console.log("PC", progressCount);
  var val = localStorage.mockupProgress;
  if (val >= 0 && val <= 2) {
    mockupProgress[val].Progress = progressCount;
    return val;
  } else {
    return 2;
  }
};

var IoTFRMStore = Reflux.createStore({
  jsonNameFromApi: function jsonNameFromApi(apiName) {
    switch (apiName) {
      case "CONNECTION_SECURITY":
        return "ConnectionSecurity";
      case "WHITELIST":
        return "Whitelist";
      case "BLACKLIST":
        return "Blacklist";
      default:
        return apiName;
    }
  },


  Actions: Actions,

  rmCache: {},
  triggerCache: function triggerCache(polType) {
    this.trigger(_defineProperty({}, this.jsonNameFromApi(polType), this.rmCache[this.jsonNameFromApi(polType)]));
  },
  updateCache: function updateCache(newCache, polType) {
    this.rmCache = Object.assign(this.rmCache, newCache);
    this.triggerCache(polType);
  },

  subscribedRequests: {
    ConnectionSecurity: 0,
    PolicyCompliance: 0,
    BlacklistWhitelist: 0
  },
  timer: {
    CONNECTION_SECURITY: undefined,
    WHITELIST: undefined,
    BLACKLIST: undefined
  },
  // timer_standby: {
  //   CONNECTION_SECURITY: undefined,
  //   WHITELIST: undefined,
  //   BLACKLIST: undefined,
  //   STATUS: undefined
  // },
  TIMEOUT_DEFAULT: 1000,
  // TIMEOUT_STANDBY: 900000,

  blacklistActive: undefined, // [true <=> blacklist, false <=> whitelist, undefined <=> none]
  statusRequestRunning: false, // used to reject in-parallel requests
  auth: {},

  buildUrl: function buildUrl(policyType) {
    return "/api/v0002/riskmgmt/reporting/policies/active/PolicyType/" + policyType;
  },

  init: function init() {
    this.getAuth();
    IoTFAuthStore.listen(this.onAuth);
    this.listenTo(Actions.getPolicyCompliance, this.onGetPolicyCompliance);
    this.listenTo(Actions.getConnectionSecurity, this.onGetConnectionSecurity);
    this.listenTo(Actions.getBlacklistWhitelist, this.onGetBlacklistWhitelist);

    this.listenTo(Actions.unsetPolicyCompliance, this.onUnsetPolicyCompliance);
    this.listenTo(Actions.unsetBlacklistWhitelist, this.onUnsetBlacklistWhitelist);
    this.listenTo(Actions.unsetConnectionSecurity, this.onUnsetConnectionSecurity);

    this.listenTo(Actions.registerPolicyCompliance, this.onRegisterPolicyCompliance);
    this.listenTo(Actions.registerBlacklistWhitelist, this.onRegisterBlacklistWhitelist);
    this.listenTo(Actions.registerConnectionSecurity, this.onRegisterConnectionSecurity);
  },

  onAuth: function onAuth(payload) {
    console.log("Retrieving auth:", payload);
    this.auth = {
      ltpa: payload.ltpa !== null ? encodeURIComponent(payload.ltpa) : null,
      org: encodeURIComponent(payload.org),
      apiKey: payload.apiKey !== null ? encodeURIComponent(payload.apiKey) : null,
      apiToken: payload.apiToken !== null ? encodeURIComponent(payload.apiToken) : null
    };
  },

  getAuth: function getAuth() {
    var auth = IoTFAuthStore.getAuth();
    this.auth = {
      ltpa: auth.ltpa ? encodeURIComponent(auth.ltpa) : auth.ltpa,
      org: auth.org ? encodeURIComponent(auth.org) : auth.org,
      apiKey: auth.apiKey ? encodeURIComponent(auth.apiKey) : auth.apiKey,
      apiToken: auth.apiToken ? encodeURIComponent(auth.apiToken) : auth.apiToken
    };
  },
  checkBlacklistWhitelist: function checkBlacklistWhitelist(callbackBl, callbackWl, callbackNone) {
    this.statusRequestRunning = true;
    var opts = {
      url: "/api/v0002/riskmgmt/policies/lists/status",
      contentType: "application/json"
    };
    $.ajax(opts).done(function (response) {
      try {
        if (response.whitelistActive) {
          this.blacklistActive = false;
          callbackWl();
        } else if (response.blacklistActive) {
          this.blacklistActive = true;
          callbackBl();
        } else {
          this.blacklistActive = undefined;
          callbackNone();
        }
        this.statusRequestRunning = false;
      } catch (e) {
        console.error(e);
      }
    }.bind(this)).fail(function (response) {
      console.error(response);
    });
  },
  onGetBlacklistWhitelist: function onGetBlacklistWhitelist() {
    var forceRefresh = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var lastPolicyType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

    //first of all provide already available data
    if (this.blacklistActive) {
      if (this.rmCache.Blacklist && this.rmCache.Blacklist.Total) {
        this.triggerCache("BLACKLIST");
      }
    } else if (this.blacklist === false) {
      if (this.rmCache.Whitelist && this.rmCache.Whitelist.Total) {
        this.triggerCache("WHITELIST");
      }
    }
    if (mockupMode && forceRefresh) {
      progressCount = 0.0;
    }
    if ((this.blacklistActive === undefined || forceRefresh) && !this.statusRequestRunning) {
      // trigger request only initially or per refresh and not in parallel
      this.checkBlacklistWhitelist(function () {
        //callback for blacklist active
        // if(this.timer_standby["STATUS"]){
        // clearInterval(this.timer["STATUS"]);
        // this.timer["STATUS"] = undefined;
        // }
        if (this.rmCache.Blacklist && this.rmCache.Blacklist.Total) {
          this.triggerCache("BLACKLIST");
        }
        // if(lastPolicyType === "BLACKLIST"){ //consecutive call
        //   clearTimeout(this.timer[lastPolicyType]);
        //   this.timer[lastPolicyType] = undefined;
        //   //this.timer_standby[lastPolicyType] = setTimeout(this.requestPolicy.bind(this, lastPolicyType, false), this.TIMEOUT_STANDBY);
        // } else { //switched policyType
        clearTimeout(this.timer["WHITELIST"]);
        this.timer["WHITELIST"] = undefined;
        this.updateCache({ "Whitelist": undefined }, "WHITELIST");
        this.requestPolicyIfNeeded("BLACKLIST", forceRefresh);
        // }
      }.bind(this), function () {
        //callback for whitelist active
        // if(this.timer_standby["STATUS"]){
        //clearInterval(this.timer["STATUS"]);
        //this.timer["STATUS"] = undefined;
        // }
        if (this.rmCache.Whitelist && this.rmCache.Whitelist.Total) {
          this.triggerCache("WHITELIST");
        }
        // if(lastPolicyType === "WHITELIST"){ //consecutive call
        //   clearTimeout(this.timer[lastPolicyType]);
        //   this.timer[lastPolicyType] = undefined;
        //   this.timer_standby[lastPolicyType] = setTimeout(this.requestPolicy.bind(this, lastPolicyType, false), this.TIMEOUT_STANDBY);
        // } else { //switched policyType
        clearTimeout(this.timer["BLACKLIST"]);
        this.timer["BLACKLIST"] = undefined;
        this.updateCache({ "Blacklist": undefined }, "BLACKLIST");
        this.requestPolicyIfNeeded("WHITELIST", forceRefresh);
        // }
      }.bind(this), function () {
        //callback to deactivate both
        this.updateCache({ "Whitelist": undefined }, "WHITELIST");
        this.clearTimeouts("WHITELIST");
        this.updateCache({ "Blacklist": undefined }, "BLACKLIST");
        this.clearTimeouts("BLACKLIST");

        //wait and check whether blacklist or whitelist have been activated
        // if(this.timer_standby["STATUS"] === undefined){ //and only call it once at a time
        //   this.timer_standby["STATUS"] = setInterval(this.onGetBlacklistWhitelist.bind(this, false, undefined), this.TIMEOUT_STANDBY);
        // }
      }.bind(this));
    }
  },

  onGetConnectionSecurity: function onGetConnectionSecurity() {
    var forceRefresh = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    if (mockupMode && forceRefresh) {
      progressCount = 0.0;
    }
    if (this.rmCache.ConnectionSecurity && this.rmCache.ConnectionSecurity.Total) {
      this.triggerCache("CONNECTION_SECURITY");
    }
    this.requestPolicyIfNeeded("CONNECTION_SECURITY", forceRefresh);
  },

  onGetPolicyCompliance: function onGetPolicyCompliance() {
    var forceRefresh = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    if (mockupMode && forceRefresh) {
      progressCount = 0.0;
    }
    this.onGetConnectionSecurity(forceRefresh);
    this.onGetBlacklistWhitelist(forceRefresh);
  },

  processAPIComplianceData: function processAPIComplianceData(apiJSON) {
    var policyType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "CONNECTION_SECURITY";
    var withDeviceTypes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    if (mockupMode) {
      apiJSON = {
        Progress: mockupProgress[getProgressByLS()].Progress,
        Results: {
          unknownValue: {
            "": {
              Total: mockupProgress[getProgressByLS()].Total,
              AbsenteeRatio: mockupProgress[getProgressByLS()].AbsenteeRatio,
              ViolationRatio: mockupProgress[getProgressByLS()].ViolationRatio,
              AbsenteesTotal: mockupProgress[getProgressByLS()].AbsenteesTotal,
              ViolationsTotal: mockupProgress[getProgressByLS()].ViolationsTotal
            },
            device_type_1: {
              Total: mockupProgress[getProgressByLS()].Total * 0.4,
              AbsenteeRatio: mockupProgress[getProgressByLS()].AbsenteeRatio,
              ViolationRatio: mockupProgress[getProgressByLS()].ViolationRatio,
              AbsenteesTotal: mockupProgress[getProgressByLS()].AbsenteesTotal * 0.4,
              ViolationsTotal: mockupProgress[getProgressByLS()].ViolationsTotal * 0.4
            },
            device_type_2: {
              Total: mockupProgress[getProgressByLS()].Total * 0.6,
              AbsenteeRatio: mockupProgress[getProgressByLS()].AbsenteeRatio,
              ViolationRatio: mockupProgress[getProgressByLS()].ViolationRatio,
              AbsenteesTotal: mockupProgress[getProgressByLS()].AbsenteesTotal * 0.6,
              ViolationsTotal: mockupProgress[getProgressByLS()].ViolationsTotal * 0.6
            }
          }
        }
      };
    }
    var ts = Object.keys(apiJSON.Results)[0];

    var valuesAccumulated = {
      total: 0,
      violations: 0,
      absentees: 0,
      violations2: 0,
      absentees2: 0
    };
    var deviceTypesFailed = [];
    var apiResult = apiJSON.Results[ts];
    // sum up the failing counts by device type
    for (var key in apiResult) {
      if (apiResult.hasOwnProperty(key)) {
        if (withDeviceTypes) {
          deviceTypesFailed.push({ name: key, count: Math.round(apiResult[key].ViolationRatio * apiResult[key].Total) });
        }
        valuesAccumulated.total += apiResult[key].Total * 1.0;
        valuesAccumulated.violations += Math.round(apiResult[key].ViolationRatio * apiResult[key].Total);
        valuesAccumulated.absentees += Math.round(apiResult[key].AbsenteeRatio * apiResult[key].Total);
        if (apiJSON.Progress == 1) {
          // use accurate values if totals are known
          valuesAccumulated.violations2 += apiResult[key].ViolationsTotal * 1.0;
          valuesAccumulated.absentees2 += apiResult[key].AbsenteesTotal * 1.0;
        }
      }
    }
    var guiJSON = {};
    var item = this.jsonNameFromApi(policyType);
    guiJSON[item] = {
      Progress: apiJSON.Progress,
      Total: valuesAccumulated.total,
      passed: {
        count: 0,
        ratio: 0.0,
        deviceTypes: []
      },
      failed: {
        count: valuesAccumulated.violations,
        ratio: valuesAccumulated.violations / (valuesAccumulated.total * 1.0),
        deviceTypes: withDeviceTypes ? deviceTypesFailed : []
      },
      unknown: {
        count: valuesAccumulated.absentees,
        ratio: valuesAccumulated.absentees / (valuesAccumulated.total * 1.0),
        deviceTypes: []
      }
    };
    if (apiJSON.Progress < 1) {
      guiJSON[item].failed.count = Math.round(guiJSON[item].failed.ratio * guiJSON[item].Total);
      guiJSON[item].unknown.count = Math.round(guiJSON[item].unknown.ratio * guiJSON[item].Total);
    } else {
      guiJSON[item].failed.count = valuesAccumulated.violations2;
      guiJSON[item].unknown.count = valuesAccumulated.absentees2;
    }
    guiJSON[item].passed.count = guiJSON[item].Total - guiJSON[item].failed.count - guiJSON[item].unknown.count;
    guiJSON[item].passed.ratio = 1 - guiJSON[item].failed.ratio - guiJSON[item].unknown.ratio;
    return guiJSON;
  },

  /* let policyType in/of ["CONNECTION_SECURITY","BLACKLIST","WHITELIST"]
  */
  requestPolicyIfNeeded: function requestPolicyIfNeeded(policyType, forceRefresh) {
    if (this.timer[policyType] === undefined /*&& this.timer_standby[policyType] === undefined */) {
        this.requestPolicy(policyType, forceRefresh); //first request, recurse by timeout
      } else if (forceRefresh) {
      this.clearTimeouts(policyType); // restart timeout and ask for newest update
      this.requestPolicy(policyType, forceRefresh);
    } // else already running...
  },

  requestPolicy: function requestPolicy(policyType, forceRefresh) {
    var mockupProxy = undefined;
    if (mockupMode) {
      progressCount = Math.min(1.0, progressCount + 0.01);
      mockupProxy = function (callback) {
        this.timer[policyType] = setTimeout(callback.bind({}), 0);
      }.bind(this);
    } else {
      mockupProxy = function (callback) {
        this.timer[policyType] = setTimeout(function () {
          var d = new Date();
          console.debug("fetch ", policyType, d, d.getMilliseconds());
          this.trigger({ loading: true });
          (0, _PolicyService.loadPolicyCompliance)(policyType, undefined, true, callback);
        }.bind(this), 0);
      }.bind(this);
    }
    var callback = function (polType, json) {
      try {
        var newCache = polType == "CONNECTION_SECURITY" ? this.processAPIComplianceData(json, polType, true) : this.processAPIComplianceData(json, polType, false);
        this.updateCache(newCache, polType);
        this.trigger({ loading: false });
        //if progress incomplete poll the API each second until complete
        // if(newCache[this.jsonNameFromApi(polType)].Progress < 1){
        //   // clearTimeout(this.timer_standby[polType]);
        //   // this.timer_standby[polType] = undefined;
        //   this.timer[polType] = setTimeout(this.requestPolicy.bind(this, polType, false), this.TIMEOUT_DEFAULT);
        // }
        // else { //check for updates in a greater interval -- currently not
        // if(polType == "BLACKLIST" || polType == "WHITELIST"){
        //   this.onGetBlacklistWhitelist(false, polType);
        // } else {
        //   clearTimeout(this.timer[polType]);
        //   this.timer[polType] = undefined;
        //   this.timer_standby[polType] = setTimeout(this.requestPolicy.bind(this, polType, false), this.TIMEOUT_STANDBY);
        // }
        //}
      } catch (e) {
        console.error(e);
      }
    }.bind(this, policyType);
    mockupProxy(callback);
  },

  onUnsetPolicyCompliance: function onUnsetPolicyCompliance() {
    this.subscribedRequests.PolicyCompliance--;
    if (this.subscribedRequests.PolicyCompliance == 0) {
      this.clearUpRequests("PC");
    }
  },
  onUnsetBlacklistWhitelist: function onUnsetBlacklistWhitelist() {
    this.subscribedRequests.BlacklistWhitelist--;
    if (this.subscribedRequests.BlacklistWhitelist == 0) {
      this.clearUpRequests("WL");
      this.clearUpRequests("BL");
    }
  },
  onUnsetConnectionSecurity: function onUnsetConnectionSecurity() {
    this.subscribedRequests.ConnectionSecurity--;
    if (this.subscribedRequests.ConnectionSecurity == 0) {
      this.clearUpRequests("CS");
    }
  },

  clearTimeouts: function clearTimeouts(polType) {
    clearTimeout(this.timer[polType]);
    this.timer[polType] = undefined;
    // clearTimeout(this.timer_standby[polType]);
    // this.timer_standby[polType] = undefined;
  },

  clearUpRequests: function clearUpRequests(toBeCleared) {
    var PCActive = this.subscribedRequests.PolicyCompliance > 0;
    var CSActive = this.subscribedRequests.ConnectionSecurity > 0;
    var WLBLActive = this.subscribedRequests.BlacklistWhitelist > 0;
    //if PC is no longer needed, stop all requests that aren't used elsewhere
    if (toBeCleared == "PC") {
      if (!CSActive) {
        //stop CSS
        this.clearTimeouts("CONNECTION_SECURITY");
      }
      if (!WLBLActive) {
        //stop WL or BL
        this.clearTimeouts("WHITELIST"); //either one already is undefined ...
        this.clearTimeouts("BLACKLIST");
      }
    } else if (PCActive) {
      //do nothing, as requests are still needed
    } else {
      // if(! WLBLActive){ // without blacklist and/or whitelist no blacklist-whitelist-active request needed
      //   clearInterval(this.timer_standby["STATUS"]);
      //   // this.timer_standby["STATUS"]=undefined;
      // }
      //independently stop
      switch (toBeCleared) {
        case "CS":
          {
            //stop CSE
            this.clearTimeouts("CONNECTION_SECURITY");
          }break;
        case "WL":
          {
            //stop WL
            this.clearTimeouts("WHITELIST");
          }break;
        case "BL":
          {
            //stop BL
            this.clearTimeouts("BLACKLIST");
          }break;
      }
    }
  },

  onRegisterPolicyCompliance: function onRegisterPolicyCompliance() {
    this.subscribedRequests.PolicyCompliance++;
  },
  onRegisterBlacklistWhitelist: function onRegisterBlacklistWhitelist() {
    this.subscribedRequests.BlacklistWhitelist++;
  },
  onRegisterConnectionSecurity: function onRegisterConnectionSecurity() {
    this.subscribedRequests.ConnectionSecurity++;
  }

});

module.exports = IoTFRMStore;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../../app/RiskManagement/services/PolicyService.js":"/Users/frank/Documents/Projects/IOTFoundation/components/app/RiskManagement/services/PolicyService.js","./IoTFAuthStore.js":"/Users/frank/Documents/Projects/IOTFoundation/components/common/stores/IoTFAuthStore.js"}],"/Users/frank/Documents/Projects/IOTFoundation/components/common/stores/IoTFTypeStore.js":[function(require,module,exports){
(function (global){
"use strict";

var Reflux = (typeof window !== "undefined" ? window['Reflux'] : typeof global !== "undefined" ? global['Reflux'] : null);
var $ = (typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null);
var Const = require('../../Dashboard/constants/Const');
var IoTFAuthStore = require('./IoTFAuthStore.js');

/**
* Handles device types and message schemas
*/

var Actions = Reflux.createActions(['getDeviceType', 'getDeviceTypes', 'getMessageSchema', 'getMessageSchemas', 'getMessageSchemaForDeviceType', 'clearMessageSchemaCache']);

var MockMessageSchema = [{
  "id": "5X0DRc5Z",
  "items": [{
    "id": 1,
    "timestamp": false,
    "metaui": {
      "unit": null,
      "min": null,
      "max": null,
      "precision": null,
      "iconName": null,
      "meaning": null
    },
    "subItems": [],
    "event": "",
    "description": "asdf",
    "subType": null,
    "name": "asdf",
    "length": null,
    "keyIndex": false,
    "type": "float",
    "composite": false,
    "formula": ""
  }],
  "created": "7 Jun 2016 09:36:13 GMT",
  "updated": "7 Jun 2016 09:36:13 GMT",
  "deviceType": "DeviceType1",
  "name": "DeviceType1",
  "format": "JSON"
}, {
  "id": "FCGskihV",
  "items": [{
    "id": 1,
    "timestamp": false,
    "metaui": {
      "unit": "Watt",
      "min": null, "max": null,
      "precision": null,
      "iconName": null,
      "meaning": "meaning_temperature"
    },
    "subItems": [],
    "event": "status",
    "description": "String Property",
    "subType": null,
    "name": "StringProp",
    "length": null,
    "keyIndex": false,
    "type": "string",
    "composite": false,
    "formula": ""
  }, {
    "id": 2,
    "timestamp": false,
    "metaui": {
      "unit": "Ã°C",
      "min": -10,
      "max": 110,
      "precision": 2,
      "iconName": null,
      "meaning": "meaning_pressure"
    },
    "subItems": [],
    "event": "status",
    "description": "Float Property",
    "subType": null,
    "name": "FloatProp",
    "length": null,
    "keyIndex": false,
    "type": "float",
    "composite": false,
    "formula": ""
  }, {
    "id": 3,
    "timestamp": false,
    "metaui": {
      "unit": "MyUnit",
      "min": null,
      "max": null,
      "precision": null,
      "iconName": null,
      "meaning": "meaning_doorState"
    },
    "subItems": [],
    "event": "status",
    "description": "Integer Property",
    "subType": null,
    "name": "IntegerProp",
    "length": null,
    "keyIndex": false,
    "type": "int",
    "composite": false,
    "formula": ""
  }],
  "created": "7 Jun 2016 10:31:23 GMT",
  "updated": "7 Jun 2016 10:31:23 GMT",
  "deviceType": "DeviceType3",
  "name": "DeviceType3",
  "format": "JSON"
}, {
  "id": "KoBxgcZJ",
  "items": [{
    "id": 1,
    "timestamp": false,
    "metaui": {
      "unit": "m",
      "min": 6,
      "max": 9,
      "precision": 3,
      "iconName": null,
      "meaning": "meaning_pressure"
    },
    "subItems": [],
    "event": "status",
    "description": "Float prop",
    "subType": null,
    "name": "Float",
    "length": null,
    "keyIndex": false,
    "type": "float",
    "composite": false,
    "formula": ""
  }, {
    "id": 2,
    "timestamp": false,
    "metaui": {
      "unit": "Unit",
      "min": 6,
      "max": 8,
      "precision": 3,
      "iconName": null,
      "meaning": "meaning_brightness"
    },
    "subItems": [],
    "event": "status",
    "description": "Float2 prop",
    "subType": null,
    "name": "Float2",
    "length": null,
    "keyIndex": false,
    "type": "float",
    "composite": false,
    "formula": ""
  }, {
    "id": 3,
    "timestamp": false,
    "metaui": {
      "unit": "Watt",
      "min": null, "max": null,
      "precision": null,
      "iconName": null,
      "meaning": "meaning_temperature"
    },
    "subItems": [],
    "event": "status",
    "description": "String Property",
    "subType": null,
    "name": "StringProp",
    "length": null,
    "keyIndex": false,
    "type": "string",
    "composite": false,
    "formula": ""
  }, {
    "id": 4,
    "timestamp": false,
    "metaui": {
      "unit": "Ã°C",
      "min": -10,
      "max": 110,
      "precision": 2,
      "iconName": null,
      "meaning": "meaning_pressure"
    },
    "subItems": [],
    "event": "status",
    "description": "Float Property",
    "subType": null,
    "name": "FloatProp",
    "length": null,
    "keyIndex": false,
    "type": "float",
    "composite": false,
    "formula": ""
  }, {
    "id": 5,
    "timestamp": false,
    "metaui": {
      "unit": "MyUnit",
      "min": null,
      "max": null,
      "precision": null,
      "iconName": null,
      "meaning": "meaning_doorState"
    },
    "subItems": [],
    "event": "status",
    "description": "Integer Property",
    "subType": null,
    "name": "IntegerProp",
    "length": null,
    "keyIndex": false,
    "type": "int",
    "composite": false,
    "formula": ""
  }],
  "created": "7 Jun 2016 10:33:10 GMT",
  "updated": "7 Jun 2016 11:03:44 GMT",
  "deviceType": "FLMType",
  "name": "FLMType",
  "format": "JSON"
}];

var IoTFTypeStore = Reflux.createStore({

  types: null,
  schemas: null,
  typeSchemaMap: {},

  Actions: Actions,

  auth: {},

  typePrefix: "/api/v0002/device/types",
  schemaPrefix: "/api/v0002/rti/message/schema",

  init: function init() {
    this.getAuth();
    IoTFAuthStore.listen(this.onAuth);
    this.listenTo(Actions.getDeviceType, this.onGetDeviceType);
    this.listenTo(Actions.getDeviceTypes, this.onGetDeviceTypes);
    this.listenTo(Actions.getMessageSchema, this.onGetMessageSchema);
    this.listenTo(Actions.getMessageSchemas, this.onGetMessageSchemas);
    this.listenTo(Actions.getMessageSchemaForDeviceType, this.onGetMessageSchemaForDeviceType);
    this.listenTo(Actions.clearMessageSchemaCache, this.onClearMessageSchemaCache);
  },

  onAuth: function onAuth(payload) {
    console.log("Retrieving auth:", payload);
    this.auth = {
      ltpa: payload.ltpa !== null ? encodeURIComponent(payload.ltpa) : null,
      org: encodeURIComponent(payload.org),
      apiKey: payload.apiKey !== null ? encodeURIComponent(payload.apiKey) : null,
      apiToken: payload.apiToken !== null ? encodeURIComponent(payload.apiToken) : null
    };
  },

  getAuth: function getAuth() {
    var auth = IoTFAuthStore.getAuth();
    this.auth = {
      ltpa: auth.ltpa ? encodeURIComponent(auth.ltpa) : auth.ltpa,
      org: auth.org ? encodeURIComponent(auth.org) : auth.org,
      apiKey: auth.apiKey ? encodeURIComponent(auth.apiKey) : auth.apiKey,
      apiToken: auth.apiToken ? encodeURIComponent(auth.apiToken) : auth.apiToken
    };
  },

  onGetDeviceType: function onGetDeviceType(id) {
    var self = this;
    // check if there is already an open request
    if (this.typeRequestInFlight) {
      return;
    }

    this.getDeviceType(id, function (obj) {
      if (obj) {
        self.trigger({
          deviceTypeId: id,
          deviceType: obj
        });
      }
    });
  },

  onGetDeviceTypes: function onGetDeviceTypes(id) {
    var self = this;
    // check if there is already an open request
    if (this.typeRequestInFlight) {
      return;
    }

    this.fetchDeviceTypes(function (obj) {
      if (obj) {
        self.trigger({
          deviceTypes: obj
        });
      }
    });
  },

  getDeviceType: function getDeviceType(id, callback) {
    var self = this;
    this.fetchDeviceTypes(function (types) {
      if (types) {
        var obj = types[id];
        if (obj) {
          callback(obj);
        } else {
          callback(null);
        }
      } else {
        callback(null);
      }
    });
  },

  fetchDeviceTypes: function fetchDeviceTypes(callback) {
    var self = this;

    // check if we have the cache
    if (this.types !== null) {
      callback(this.types);
      return;
    }

    // not in cache -> fetch device types
    var opts = {
      url: this.typePrefix + "?_limit=100",
      contentType: "application/json"
    };

    console.debug("getDeviceTypes");

    this.typeRequestInFlight = true;

    $.ajax(opts).done(function (response) {
      try {
        self.types = {};
        if (response.results) {
          for (var i = 0; i < response.results.length; i++) {
            var deviceType = response.results[i];
            if (deviceType && deviceType.id) {
              self.types[deviceType.id] = deviceType;
            }
          }
        }
        self.typeRequestInFlight = false;
        callback(self.types);
      } catch (e) {
        console.error(e);
        callback(null);
      }
    }).fail(function (response) {
      console.error(response);
      self.typeRequestInFlight = false;
      callback(null);
    });
  },

  onGetMessageSchemaForDeviceType: function onGetMessageSchemaForDeviceType(id) {
    var self = this;
    // check if there is already an open request
    if (this.schemaRequestInFlight) {
      return;
    }

    var resolve = function resolve() {
      var schemaId = self.typeSchemaMap[id];
      if (schemaId) {
        var schema = self.schemas[schemaId];
        self.trigger({
          deviceTypeId: id,
          messageSchema: schema
        });
      }
    };

    if (!this.schemas) {
      this.fetchMessageSchemas(function (schemas) {
        if (schemas) {
          resolve();
        }
      });
    } else {
      resolve();
    }
  },

  onGetMessageSchemas: function onGetMessageSchemas() {
    var self = this;
    // check if there is already an open request

    var resolve = function resolve(_resolve, reject) {
      if (self.schemas && self.typeSchemaMap) {
        var schemas = {};
        for (var deviceTypeId in self.typeSchemaMap) {
          var schemaId = self.typeSchemaMap[deviceTypeId];
          if (schemaId) {
            var schema = self.schemas[schemaId];
            if (schema) {
              schemas[deviceTypeId] = schema;
            }
          }
        }

        self.trigger({
          messageSchemas: schemas
        });
        _resolve({
          messageSchemas: schemas
        });
      }
    };

    // Promise for REDUXMIG
    var promise = new Promise(function (pResolve, pReject) {
      if (self.schemaRequestInFlight) {
        // do nothing and wait
      } else if (!self.schemas) {
        self.fetchMessageSchemas(function (schemas) {
          if (schemas) {
            resolve(pResolve, pReject);
          }
        });
      } else {
        resolve(pResolve, pReject);
      }
    });

    // REDUXMIG
    return promise;
  },

  onGetMessageSchema: function onGetMessageSchema(id) {
    var self = this;
    // check if there is already an open request
    if (this.schemaRequestInFlight) {
      return;
    }

    this.getMessageSchema(id, function (obj) {
      if (obj) {
        self.trigger({
          messageSchema: id,
          messageSchemaId: obj
        });
      }
    });
  },

  getMessageSchema: function getMessageSchema(id, callback) {
    var self = this;
    this.fetchMessageSchemas(function (schemas) {
      if (schema) {
        var obj = schemas[id];
        if (obj) {
          callback(obj);
        } else {
          callback(null);
        }
      } else {
        callback(null);
      }
    });
  },

  fetchMessageSchemas: function fetchMessageSchemas(callback) {
    var self = this;

    // check if we have the cache
    if (this.schemas !== null) {
      callback(this.schemas);
      return;
    }

    // not in cache -> fetch device types
    var opts = {
      url: this.schemaPrefix,
      contentType: "application/json"
    };

    console.debug("getMessageSchemas");

    this.schemaRequestInFlight = true;

    // HACK only for mocking
    // self.schemas = {};
    // if (MockMessageSchema) {
    //   for (var i = 0; i < MockMessageSchema.length; i++) {
    //     var schema = MockMessageSchema[i];
    //     if (schema && schema.id) {
    //       self.schemas[schema.id] = schema;
    //       if (schema.deviceType) {
    //         self.typeSchemaMap[schema.deviceType] = schema.id;
    //       }
    //     }
    //   }
    // }
    // self.schemaRequestInFlight = false;
    // callback(self.schemas);
    // return;
    // END only for mocking


    $.ajax(opts).done(function (response) {
      try {
        self.schemas = {};
        if (response) {
          for (var i = 0; i < response.length; i++) {
            var schema = response[i];
            if (schema && schema.id) {

              schema.items = self.flattenProperties(schema.items);
              self.schemas[schema.id] = schema;
              if (schema.deviceType) {
                self.typeSchemaMap[schema.deviceType] = schema.id;
              }
            }
          }
        }
        self.schemaRequestInFlight = false;
        callback(self.schemas);
      } catch (e) {
        console.error(e);
        callback(null);
      }
    }).fail(function (response) {
      self.schemaRequestInFlight = false;
      if (response.status == 400) {
        // RTI not enabled -> no schema
        self.schemas = {};
        callback({});
      } else {
        console.error(response);
        callback(null);
      }
    });
  },

  flattenProperties: function flattenProperties(properties, prefix) {
    var flatProps = [];

    if (!prefix) {
      prefix = "";
    }

    for (var i = 0; i < properties.length; i++) {
      var property = properties[i];
      // handle meta ui
      try {
        property.metaui = JSON.parse(property.metaui);
      } catch (e) {
        console.error("Malformed metaui: " + property.metaui);
        property.metaui = {};
      }

      // handle parent relation
      if (prefix) {
        property.name = prefix + "." + property.name;
      }

      if (!property.subItems || property.subItems.length == 0) {
        // add the prop only if it is not a struct
        flatProps.push(property);
      } else {
        // handle children
        if (property.subItems.length > 0) {
          flatProps = flatProps.concat(this.flattenProperties(property.subItems, property.name));
          property.subItems = null;
        }
      }
    }

    return flatProps;
  },

  clearMessageSchemaCache: function clearMessageSchemaCache() {
    this.schemas = null;
    this.typeSchemaMap = {};
  }

});

module.exports = IoTFTypeStore;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../../Dashboard/constants/Const":"/Users/frank/Documents/Projects/IOTFoundation/components/Dashboard/constants/Const.js","./IoTFAuthStore.js":"/Users/frank/Documents/Projects/IOTFoundation/components/common/stores/IoTFAuthStore.js"}],"/Users/frank/Documents/Projects/IOTFoundation/components/common/stores/IoTFUsageStore.js":[function(require,module,exports){
(function (global){
'use strict';

var Reflux = (typeof window !== "undefined" ? window['Reflux'] : typeof global !== "undefined" ? global['Reflux'] : null);
var $ = (typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null);
var Const = require('../../Dashboard/constants/Const');
var IoTFAuthStore = require('./IoTFAuthStore.js');

var Actions = Reflux.createActions(['fetchDeviceCount', 'fetchDataTrafficUsage', 'fetchActiveDeviceUsage', 'fetchHistoricalDataUsage', 'fetchDeviceTypes']);

var IoTFUsageStore = Reflux.createStore({

	Actions: Actions,

	state: Const.DISCONNECTED,

	auth: {

		// org: encodeURIComponent("6qkzjf"),
		// apiKey: encodeURIComponent("a-6qkzjf-3egnjdo5qy"),
		// apiToken: encodeURIComponent("CW-aWx_sGeFGc&F?ls")

		// org: "jgccc5",
		// apiKey: "a-jgccc5-tkutlvvnem",
		// apiToken: "YfqMJVD18qcH@ispr0"

	},

	init: function init() {
		var self = this;
		this.listenTo(Actions.fetchDeviceTypes, this.onFetchDeviceTypes);
		this.listenTo(Actions.fetchDeviceCount, this.onFetchDeviceCount);
		this.listenTo(Actions.fetchDataTrafficUsage, this.onFetchDataTrafficUsage);
		this.listenTo(Actions.fetchActiveDeviceUsage, this.onFetchActiveDeviceUsage);
		this.listenTo(Actions.fetchHistoricalDataUsage, this.onFetchHistoricalDataUsage);

		IoTFAuthStore.listen(function (payload) {
			console.log("Retrieving auth:");
			self.auth = {
				ltpa: payload.ltpa !== null ? encodeURIComponent(payload.ltpa) : null,
				domain: encodeURIComponent(payload.domain),
				org: encodeURIComponent(payload.org),
				apiKey: payload.apiKey !== null ? encodeURIComponent(payload.apiKey) : null,
				apiToken: payload.apiToken !== null ? encodeURIComponent(payload.apiToken) : null
			};
			console.log(self.auth);
		});
	},

	getPlayOrgAuth: function getPlayOrgAuth() {
		var auth = IoTFAuthStore.getAuth();
		var orgid = auth.org;
		var DEMO_ORG = "play";

		if (orgid === DEMO_ORG) {
			var Base64 = { _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", encode: function encode(e) {
					var t = "";var n, r, i, s, o, u, a;var f = 0;e = Base64._utf8_encode(e);while (f < e.length) {
						n = e.charCodeAt(f++);r = e.charCodeAt(f++);i = e.charCodeAt(f++);s = n >> 2;o = (n & 3) << 4 | r >> 4;u = (r & 15) << 2 | i >> 6;a = i & 63;if (isNaN(r)) {
							u = a = 64;
						} else if (isNaN(i)) {
							a = 64;
						}t = t + this._keyStr.charAt(s) + this._keyStr.charAt(o) + this._keyStr.charAt(u) + this._keyStr.charAt(a);
					}return t;
				}, decode: function decode(e) {
					var t = "";var n, r, i;var s, o, u, a;var f = 0;e = e.replace(/[^A-Za-z0-9\+\/\=]/g, "");while (f < e.length) {
						s = this._keyStr.indexOf(e.charAt(f++));o = this._keyStr.indexOf(e.charAt(f++));u = this._keyStr.indexOf(e.charAt(f++));a = this._keyStr.indexOf(e.charAt(f++));n = s << 2 | o >> 4;r = (o & 15) << 4 | u >> 2;i = (u & 3) << 6 | a;t = t + String.fromCharCode(n);if (u != 64) {
							t = t + String.fromCharCode(r);
						}if (a != 64) {
							t = t + String.fromCharCode(i);
						}
					}t = Base64._utf8_decode(t);return t;
				}, _utf8_encode: function _utf8_encode(e) {
					e = e.replace(/\r\n/g, "\n");var t = "";for (var n = 0; n < e.length; n++) {
						var r = e.charCodeAt(n);if (r < 128) {
							t += String.fromCharCode(r);
						} else if (r > 127 && r < 2048) {
							t += String.fromCharCode(r >> 6 | 192);t += String.fromCharCode(r & 63 | 128);
						} else {
							t += String.fromCharCode(r >> 12 | 224);t += String.fromCharCode(r >> 6 & 63 | 128);t += String.fromCharCode(r & 63 | 128);
						}
					}return t;
				}, _utf8_decode: function _utf8_decode(e) {
					var t = "";var n = 0;var r = 0;var c1 = 0;var c2 = 0;while (n < e.length) {
						r = e.charCodeAt(n);if (r < 128) {
							t += String.fromCharCode(r);n++;
						} else if (r > 191 && r < 224) {
							c2 = e.charCodeAt(n + 1);t += String.fromCharCode((r & 31) << 6 | c2 & 63);n += 2;
						} else {
							c2 = e.charCodeAt(n + 1);c3 = e.charCodeAt(n + 2);t += String.fromCharCode((r & 15) << 12 | (c2 & 63) << 6 | c3 & 63);n += 3;
						}
					}return t;
				} };
			var playApiKey = "a-play-f5cym38oit";
			var playApiToken = "Co0D)Z!50xF89PiaRH";
			var auth = 'Basic ' + Base64.encode(playApiKey + ":" + playApiToken);
			return auth;
		} else {
			return null;
		}
	},

	onFetchDeviceCount: function onFetchDeviceCount() {
		//var deviceUrl = "https://" + IoTFCredentials.org + ".internetofthings.ibmcloud.com/";
		var opts = {
			url: "/api/v0002/bulk/devices",
			contentType: "application/json"
		};

		var playAuth = this.getPlayOrgAuth();
		if (playAuth) {
			if (opts.headers) {
				opts.headers.Authorization = playAuth; // key: a-play-f5cym38oit token: Co0D)Z!50xF89PiaRH
			} else {
				opts.headers = { Authorization: playAuth }; // key: a-play-f5cym38oit token: Co0D)Z!50xF89PiaRH
			}
		}

		console.log(opts);
		var self = this;
		$.ajax(opts).done(function (response) {
			console.log(response);
			try {
				if (response.meta && response.meta.total_rows) {
					self.trigger({
						deviceCount: response.meta.total_rows
					});
				} else {
					// handle bad result?
				}
			} catch (e) {
				console.error(e);
			}
		}).fail(function (response) {
			console.error(response);
		});
	},

	onFetchDeviceTypes: function onFetchDeviceTypes() {
		//var deviceUrl = "https://" + IoTFCredentials.org + ".internetofthings.ibmcloud.com/";
		var opts = {
			url: "/api/v0002/bulk/devices?_limit=0&_facets=typeId",
			contentType: "application/json"
		};
		console.log(opts);
		var self = this;

		var sortDeviceTypes = function sortDeviceTypes(a, b) {
			if (!a || !b) {
				return 0;
			}
			if (a.count < b.count) {
				return 1;
			}
			if (a.count > b.count) {
				return -1;
			}
		};

		var playAuth = this.getPlayOrgAuth();
		if (playAuth) {
			if (opts.headers) {
				opts.headers.Authorization = playAuth; // key: a-play-f5cym38oit token: Co0D)Z!50xF89PiaRH
			} else {
				opts.headers = { Authorization: playAuth }; // key: a-play-f5cym38oit token: Co0D)Z!50xF89PiaRH
			}
		}

		$.ajax(opts).done(function (response) {
			console.log(response);
			try {

				var types = [];
				if (response.meta && response.meta.facets && response.meta.facets.typeId) {
					for (var key in response.meta.facets.typeId) {
						if (response.meta.facets.typeId.hasOwnProperty(key)) {
							types.push({ deviceType: key, count: response.meta.facets.typeId[key] });
						}
					}
				}
				types.sort(sortDeviceTypes);
				self.trigger({
					deviceTypes: types
				});
			} catch (e) {
				console.error(e);
			}
		}).fail(function (response) {
			console.error(response);
		});
	},

	onFetchDataTrafficUsage: function onFetchDataTrafficUsage() {
		console.debug("IoTFUsageStore::onFetchDataTrafficUsage");

		var today = new Date();
		var offset = -today.getTimezoneOffset(); // convert to UTC
		today = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1, 0, 0 + offset, -1);
		var lastMonthStart = new Date(today.getFullYear(), today.getMonth() - 1, 1, 0, 0 + offset);
		var thisMonthStart = new Date(today.getFullYear(), today.getMonth(), 1, 0, 0 + offset, 0);
		var rangeStart = lastMonthStart.toISOString().split("T")[0];
		var rangeEnd = today.toISOString().split("T")[0];

		var self = this;

		// FLM: This API does not show sensible values
		// var lastMonthOpts = {
		// 	url: "/api/v0002/usage/data-traffic?start="+lastMonthStart+"&end="+lastMonthEnd+"&detail=false",
		// 	contentType: "application/json",
		// 	success: function(response) {
		// 		console.debug(response);
		// 		try {
		// 			if (response.average !== undefined) {
		// 				var bytes = response.average;
		// 				self.trigger({ dataTrafficUsageLastMonth: (bytes / 1000000).toFixed(1) + " MB" });
		// 			}
		// 		} catch (e) { console.error("parse error: " + response); }
		// 	}
		// };
		// if (this.auth.apiKey !== null) {
		// 	// if running as localhost
		// 	lastMonthOpts.url += "&org="+this.auth.org+"&apiKey="+this.auth.apiKey+"&apiToken="+this.auth.apiToken;
		// }

		// var thisMonthOpts = {
		// 	url: "/api/v0002/usage/data-traffic?start="+thisMonthStart+"&end="+thisMonthEnd+"&detail=false",
		// 	contentType: "application/json",
		// 	success: function(response) {
		// 		console.debug(response);
		// 		try {
		// 			if (response.average !== undefined) {
		// 				var bytes = response.average;
		// 				self.trigger({ dataTrafficUsageThisMonth: (bytes / 1000000).toFixed(1) + " MB" });
		// 			}
		// 		} catch (e) { console.error("parse error: " + response); }
		// 	}
		// };
		// if (this.auth.apiKey !== null) {
		// 	// if running as localhost
		// 	thisMonthOpts.url += "&org="+this.auth.org+"&apiKey="+this.auth.apiKey+"&apiToken="+this.auth.apiToken;
		// }

		//$.ajax(lastMonthOpts);
		//$.ajax(thisMonthOpts);

		var rangeOpts = {
			url: "/api/v0002/usage/data-traffic?start=" + rangeStart + "&end=" + rangeEnd + "&detail=true",
			contentType: "application/json",
			success: function success(response) {
				console.debug(response);
				try {
					if (response.days !== undefined) {
						var days = response.days;
						var sumThisMonth = 0;
						var sumLastMonth = 0;
						var todaysConsumption = 0;
						for (var i = 0; i < days.length; i++) {
							var date = new Date(days[i].date);
							var offset = -date.getTimezoneOffset(); // convert to UTC
							date = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0 + offset, 0);

							var day = days[i];
							if (lastMonthStart <= date && thisMonthStart > date) {
								sumLastMonth += day.total;
							} else if (thisMonthStart <= date && today >= date) {
								sumThisMonth += day.total;
							}
							// handle todays entry
							if (i == days.length - 1) {
								todaysConsumption = day.total;
							}

							days[i].total = parseFloat((day.total / 1048576).toFixed(3));
						}
						// consumption this month
						sumThisMonth = sumThisMonth / 1048576;
						sumLastMonth = sumLastMonth / 1048576;
						todaysConsumption = todaysConsumption / 1048576;
						self.trigger({
							dataTrafficUsageDetails: days,
							dataTrafficUsageThisMonth: sumThisMonth.toFixed(1),
							dataTrafficUsageLastMonth: sumLastMonth.toFixed(1),
							dataTrafficUsageToday: todaysConsumption.toFixed(1)
						});
					}
				} catch (e) {
					console.error("parse error: " + response);
				}
			}
		};

		$.ajax(rangeOpts);
	},

	onFetchActiveDeviceUsage: function onFetchActiveDeviceUsage() {
		console.debug("IoTFUsageStore::onFetchActiveDeviceUsage");

		var today = new Date();
		var lastMonthStart = new Date(today.getFullYear(), today.getMonth() - 1, 1).toISOString().split("T")[0];
		var lastMonthEnd = new Date(today.getFullYear(), today.getMonth(), 0).toISOString().split("T")[0];
		var thisMonthStart = new Date(today.getFullYear(), today.getMonth(), 1).toISOString().split("T")[0];
		var thisMonthEnd = today.toISOString().split("T")[0];
		var rangeStart = new Date(today.getFullYear(), today.getMonth() - 1, 1).toISOString().split("T")[0];
		var rangeEnd = today.toISOString().split("T")[0];

		var self = this;

		var lastMonthOpts = {
			url: "/api/v0002/usage/active-devices?start=" + lastMonthStart + "&end=" + lastMonthEnd + "&detail=false",
			contentType: "application/json",
			success: function success(response) {
				console.debug(response);
				try {
					if (response.average !== undefined) {
						self.trigger({ activeDeviceUsageLastMonth: response.average.toFixed(1) });
					}
				} catch (e) {
					console.error("parse error: " + response);
				}
			}
		};

		var thisMonthOpts = {
			url: "/api/v0002/usage/active-devices?start=" + thisMonthStart + "&end=" + thisMonthEnd + "&detail=false",
			contentType: "application/json",
			success: function success(response) {
				console.debug(response);
				try {
					if (response.average !== undefined) {
						self.trigger({ activeDeviceUsageThisMonth: response.average.toFixed(1) });
					}
				} catch (e) {
					console.error("parse error: " + response);
				}
			}
		};

		var rangeOpts = {
			url: "/api/v0002/usage/active-devices?start=" + rangeStart + "&end=" + rangeEnd + "&detail=true",
			contentType: "application/json",
			success: function success(response) {
				console.debug(response);
				try {
					if (response.days !== undefined) {
						self.trigger({ activeDeviceUsageDetails: response.days });
					}
				} catch (e) {
					console.error("parse error: " + response);
				}
			}
		};

		console.log(lastMonthOpts, thisMonthOpts);

		$.ajax(lastMonthOpts);
		$.ajax(thisMonthOpts);
		$.ajax(rangeOpts);
	},

	onFetchHistoricalDataUsage: function onFetchHistoricalDataUsage() {
		console.debug("IoTFUsageStore::onFetchActiveDeviceUsage");

		var today = new Date();
		var offset = -today.getTimezoneOffset(); // convert to UTC
		today = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1, 0, 0 + offset, -1);
		var lastMonthStart = new Date(today.getFullYear(), today.getMonth() - 1, 1, 0, 0 + offset);
		var thisMonthStart = new Date(today.getFullYear(), today.getMonth(), 1, 0, 0 + offset, 0);
		var rangeStart = lastMonthStart.toISOString().split("T")[0];
		var rangeEnd = today.toISOString().split("T")[0];

		var self = this;

		// var lastMonthOpts = {
		// 	url: "/api/v0002/usage/historical-data?start="+lastMonthStart+"&end="+lastMonthEnd+"&detail=false",
		// 	contentType: "application/json",
		// 	success: function(response) {
		// 		console.debug(response);
		// 		try {
		// 			if (response.average !== undefined) {
		// 				var bytes = response.average;
		// 				self.trigger({ historicalDataUsageLastMonth: (bytes / 1000000).toFixed(1) + " MB" });
		// 			}
		// 		} catch (e) { console.error("parse error: " + response); }
		// 	}
		// };
		// if (this.auth.apiKey !== null) {
		// 	// if running as localhost
		// 	lastMonthOpts.url += "&org="+this.auth.org+"&apiKey="+this.auth.apiKey+"&apiToken="+this.auth.apiToken;
		// }

		// var thisMonthOpts = {
		// 	url: "/api/v0002/usage/historical-data?start="+thisMonthStart+"&end="+thisMonthEnd+"&detail=false",
		// 	contentType: "application/json",
		// 	success: function(response) {
		// 		console.debug(response);
		// 		try {
		// 			if (response.average !== undefined) {
		// 				var bytes = response.average;
		// 				self.trigger({ historicalDataUsageThisMonth: (bytes / 1000000).toFixed(1) + " MB" });
		// 			}
		// 		} catch (e) { console.error("parse error: " + response); }
		// 	}
		// };
		// if (this.auth.apiKey !== null) {
		// 	// if running as localhost
		// 	thisMonthOpts.url += "&org="+this.auth.org+"&apiKey="+this.auth.apiKey+"&apiToken="+this.auth.apiToken;
		// }

		// $.ajax(lastMonthOpts);
		// $.ajax(thisMonthOpts);

		var rangeOpts = {
			url: "/api/v0002/usage/historical-data?start=" + rangeStart + "&end=" + rangeEnd + "&detail=true",
			contentType: "application/json",
			success: function success(response) {
				console.debug(response);
				try {
					if (response.days !== undefined) {
						var days = response.days;
						var valueThisMonth = 0;
						var valueLastMonth = 0;
						var todaysConsumption = 0;
						var lastValue = 0;
						for (var i = 0; i < days.length; i++) {
							var date = new Date(days[i].date);
							var offset = -date.getTimezoneOffset(); // convert to UTC
							date = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0 + offset, 0);

							var day = days[i];
							if (lastMonthStart <= date && thisMonthStart > date) {
								if (day.total > valueLastMonth) {
									valueLastMonth = day.total;
								}
							} else if (thisMonthStart <= date && today >= date) {
								if (day.total > valueThisMonth) {
									valueThisMonth = day.total;
								}
							}
							// handle todays entry
							if (i == days.length - 1) {
								todaysConsumption = day.total - lastValue;
								if (todaysConsumption < 0) {
									todaysConsumption = 0;
								}
								if (date.getDate() == 1) {
									todaysConsumption = day.total;
								}
							}
							lastValue = day.total;
							days[i].total = parseFloat((day.total / 1024).toFixed(3));
						}
						// consumption this month
						valueThisMonth = valueThisMonth / 1024;
						valueLastMonth = valueLastMonth / 1024;
						todaysConsumption = todaysConsumption / 1024;

						self.trigger({
							historicalDataUsageDetails: days,
							historicalDataUsageThisMonth: valueThisMonth.toFixed(1),
							historicalDataUsageLastMonth: valueLastMonth.toFixed(1),
							dataUsageToday: todaysConsumption.toFixed(1)
						});
					}
				} catch (e) {
					console.error("parse error: " + response);
				}
			}
		};

		$.ajax(rangeOpts);
	}
});

module.exports = IoTFUsageStore;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../../Dashboard/constants/Const":"/Users/frank/Documents/Projects/IOTFoundation/components/Dashboard/constants/Const.js","./IoTFAuthStore.js":"/Users/frank/Documents/Projects/IOTFoundation/components/common/stores/IoTFAuthStore.js"}],"/Users/frank/Documents/Projects/IOTFoundation/components/common/stores/IoTFUserStore.js":[function(require,module,exports){
(function (global){
'use strict';

var Reflux = (typeof window !== "undefined" ? window['Reflux'] : typeof global !== "undefined" ? global['Reflux'] : null);

var Actions = Reflux.createActions(['setUsers', 'getUsers']);

var IoTFUserStore = Reflux.createStore({

  Actions: Actions,

  users: [],

  getUsers: function getUsers() {
    return this.users;
  },

  setUsers: function setUsers(users) {
    this.users = users;
  }
});

module.exports = IoTFUserStore;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},["/Users/frank/Documents/Projects/IOTFoundation/components/common/common.jsx"])("/Users/frank/Documents/Projects/IOTFoundation/components/common/common.jsx")
});
//# sourceMappingURL=IoTFCommon.js.map
