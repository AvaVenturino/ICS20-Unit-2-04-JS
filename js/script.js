// Copyright (c) 2022 Ava Venturino All rights reserved
//
// Created by: Ava Venturino
// Created on: Mar 2022
// This file contains the JS functions for index.html

/**
 * This function gets users address and shows it back to user.
 */
function enterClicked() {
  // input
  const userStreetNumber = parseInt(document.getElementById("number-entered").value)
  const streetName = document.getElementById("street-entered").value

  // output
  document.getElementById("address").innerHTML =
    "The address is: " + userStreetNumber + " " + streetName + "."
}
