/*

 ----------------------------------------------------------------------------
 | qewd-oidc-admin: Administration Interface for QEWD OpenId Connect Server |
 |                                                                          |
 | Copyright (c) 2018 M/Gateway Developments Ltd,                           |
 | Redhill, Surrey UK.                                                      |
 | All rights reserved.                                                     |
 |                                                                          |
 | http://www.mgateway.com                                                  |
 | Email: rtweed@mgateway.com                                               |
 |                                                                          |
 |                                                                          |
 | Licensed under the Apache License, Version 2.0 (the "License");          |
 | you may not use this file except in compliance with the License.         |
 | You may obtain a copy of the License at                                  |
 |                                                                          |
 |     http://www.apache.org/licenses/LICENSE-2.0                           |
 |                                                                          |
 | Unless required by applicable law or agreed to in writing, software      |
 | distributed under the License is distributed on an "AS IS" BASIS,        |
 | WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. |
 | See the License for the specific language governing permissions and      |
 |  limitations under the License.                                          |
 ----------------------------------------------------------------------------

  02 October 2018

*/

var reactLoader = require('qewd-react').loader;

var params = {
  applicationName: 'oidc-provider-admin',
  MainPage: require('./MainPage'),
  log: true,
  jwt: true,
  config: {
    title: 'QEWD OpenId Connect Server Administration',
    loginModal: {
      oidc: true
    },
    shutdown: {
      buttonText: 'Restart'
    },
    navs: [
      {
        text: 'Admin',
        eventKey: 'admin',
        default: true,  // default=true to make this display by default
        panel: {
          title: 'Administration Portal',
          bsStyle: 'warning',
          contentComponent: require('./AdminPortal')
        }
      }
    ],
    local: false
  }
};

reactLoader(params);
