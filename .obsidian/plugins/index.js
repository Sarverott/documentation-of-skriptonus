/*
[RATTISH:] are you good? any issues? let me know if something needs special discussion. i hope that you find pleasent my attempt to provide coasy and familiar marking signs. if you want another input-output marker style feel free to inform me

gh api -H "Accept: application/vnd.github+json"  -H "X-GitHub-Api-Version: 2022-11-28" /licenses

CLI.in = gh api   -H "Accept: application/vnd.github+json"   -H "X-GitHub-Api-Version: 2022-
... 11-28"  /licenses ;; CLI.out =
*/
import fs from "fs";
import { exec } from "child_process";

function listLicense(){
    exec(`gh api -H "Accept: application/vnd.github+json"  -H "X-GitHub-Api-Version: 2022-11-28" /licenses`, (error, stdout, stderr) => {
        if (error) {
          console.error(`exec error: ${error}`);
          return;
        }
        console.log( JSON.stringify(JSON.parse(stdout))
        //console.error(`stderr: ${stderr}`);
      });
}
function aboutLicense(){

}

console.log(`[
    {
      "key": "agpl-3.0",
      "name": "GNU Affero General Public License v3.0",
      "spdx_id": "AGPL-3.0",
      "url": "https://api.github.com/licenses/agpl-3.0",
      "node_id": "MDc6TGljZW5zZTE="
    },
    {
      "key": "apache-2.0",
      "name": "Apache License 2.0",
      "spdx_id": "Apache-2.0",
      "url": "https://api.github.com/licenses/apache-2.0",
      "node_id": "MDc6TGljZW5zZTI="
    },
    {
      "key": "bsd-2-clause",
      "name": "BSD 2-Clause \\"Simplified\\" License",
      "spdx_id": "BSD-2-Clause",
      "url": "https://api.github.com/licenses/bsd-2-clause",
      "node_id": "MDc6TGljZW5zZTQ="
    },
    {
      "key": "bsd-3-clause",
      "name": "BSD 3-Clause \\"New\\" or \\"Revised\\" License",
      "spdx_id": "BSD-3-Clause",
      "url": "https://api.github.com/licenses/bsd-3-clause",
      "node_id": "MDc6TGljZW5zZTU="
    },
    {
      "key": "bsl-1.0",
      "name": "Boost Software License 1.0",
      "spdx_id": "BSL-1.0",
      "url": "https://api.github.com/licenses/bsl-1.0",
      "node_id": "MDc6TGljZW5zZTI4"
    },
    {
      "key": "cc0-1.0",
      "name": "Creative Commons Zero v1.0 Universal",
      "spdx_id": "CC0-1.0",
      "url": "https://api.github.com/licenses/cc0-1.0",
      "node_id": "MDc6TGljZW5zZTY="
    },
    {
      "key": "epl-2.0",
      "name": "Eclipse Public License 2.0",
      "spdx_id": "EPL-2.0",
      "url": "https://api.github.com/licenses/epl-2.0",
      "node_id": "MDc6TGljZW5zZTMy"
    },
    {
      "key": "gpl-2.0",
      "name": "GNU General Public License v2.0",
      "spdx_id": "GPL-2.0",
      "url": "https://api.github.com/licenses/gpl-2.0",
      "node_id": "MDc6TGljZW5zZTg="
    },
    {
      "key": "gpl-3.0",
      "name": "GNU General Public License v3.0",
      "spdx_id": "GPL-3.0",
      "url": "https://api.github.com/licenses/gpl-3.0",
      "node_id": "MDc6TGljZW5zZTk="
    },
    {
      "key": "lgpl-2.1",
      "name": "GNU Lesser General Public License v2.1",
      "spdx_id": "LGPL-2.1",
      "url": "https://api.github.com/licenses/lgpl-2.1",
      "node_id": "MDc6TGljZW5zZTEx"
    },
    {
      "key": "mit",
      "name": "MIT License",
      "spdx_id": "MIT",
      "url": "https://api.github.com/licenses/mit",
      "node_id": "MDc6TGljZW5zZTEz"
    },
    {
      "key": "mpl-2.0",
      "name": "Mozilla Public License 2.0",
      "spdx_id": "MPL-2.0",
      "url": "https://api.github.com/licenses/mpl-2.0",
      "node_id": "MDc6TGljZW5zZTE0"
    },
    {
      "key": "unlicense",
      "name": "The Unlicense",
      "spdx_id": "Unlicense",
      "url": "https://api.github.com/licenses/unlicense",
      "node_id": "MDc6TGljZW5zZTE1"
    }
  ]
  `)));