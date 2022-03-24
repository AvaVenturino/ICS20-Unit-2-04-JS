// Copyright (c) 2022 Ava Venturino All rights reserved
//
// Created by: Ava Venturino
// Created on: Mar 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function gets users address and shows it back to user.
 */
function calculate () {
  // input
  const base = parseInt(document.getElementById("base-of-triangle").value)
  const height = parseInt(document.getElementById("height-of-triangle").value)
  // process
  const area = (base * height)/2
  // output
  document.getElementById("area").innerHTML =
    "The area is: " + area + ' cm²' 
}
