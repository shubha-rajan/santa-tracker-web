/*
 * Copyright 2015 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */

goog.provide('app.levels');
goog.require('app.blocks');

/**
 * Array of levels.
 * @type {!Array.<!app.PuzzleLevel>}
 */
app.levels = [];

app.levels.push(new app.Level({
  startBlocks: app.blocks.blockXml('maze_moveNorth', {deletable: false}),
  toolbox: app.blocks.miniBlockXml('maze_moveNorth') +
      app.blocks.miniBlockXml('maze_moveSouth') +
      app.blocks.miniBlockXml('maze_moveWest') +
      app.blocks.miniBlockXml('maze_moveEast') +
      app.blocks.miniBlockXml('block_bear') +
      app.blocks.miniBlockXml('block_blue') +
      app.blocks.miniBlockXml('block_red')
}));
/**
 * Create levels. If you add or remove levels, be sure to adjust the total number of levels
 * specified inside `codelab/js/constants.js` (i.e., the non-frame page).
 */
