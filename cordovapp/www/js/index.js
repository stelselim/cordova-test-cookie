/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
  setInterval(getRequest, 1000);
}

function getRequest() {
  // Make the GET request
  var url = "http://192.168.178.174:8000/";
  var headers = {}; // Add any required headers here

  // Optional parameters (if needed)
  var params = {
    param1: "value1",
    param2: "value2",
  };

  // Make the GET request
  cordova.plugin.http.sendRequest(
    url,
    {
      method: "get",
    },
    function (response) {
      // Success callback
      console.log("Response data:", response.data);
      console.log("Response cookie:", response.cookie);
    },
    function (error) {
      // Error callback
      console.error("Error status:", error.status);
      console.error("Error message:", error.error);
    }
  );
}
