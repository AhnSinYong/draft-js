/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @format
 * @flow
 * @emails oncall+draft_js
 */

'use strict';

import type {BlockNodeRecord} from 'BlockNodeRecord';

const CharacterMetadata = require('CharacterMetadata');

function applyEntityToContentBlock(
  contentBlock: BlockNodeRecord,
  start: number,
  end: number,
  entityKey: ?string,
): BlockNodeRecord {
  let characterList = contentBlock.getCharacterList();
  while (start < end) {
    characterList = characterList.set(
      start,
      CharacterMetadata.applyEntity(characterList.get(start), entityKey),
    );
    start++;
  }
  return contentBlock.set('characterList', characterList);
}

module.exports = applyEntityToContentBlock;
