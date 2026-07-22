#!/usr/bin/env node
/*
Copyright 2026 Element Creations Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE in the repository root for full details.
*/


import * as asar from "@electron/asar";

const ASAR_PATH = "webapp.asar";

    await asar.createPackage("deploys/element-v1.12.24", ASAR_PATH);

   