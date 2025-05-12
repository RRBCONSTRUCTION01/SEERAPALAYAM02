var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrance",
      "name": "ENTRANCE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "0-entrance"
        },
        {
          "yaw": 0.5185887902466604,
          "pitch": 0.18493761254453034,
          "rotation": 0,
          "target": "1-parking"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-parking",
      "name": "PARKING",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.196650915977647
      },
      "linkHotspots": [
        {
          "yaw": 0.1489499510215353,
          "pitch": 0.2885182699687121,
          "rotation": 0,
          "target": "1-parking"
        },
        {
          "yaw": -0.17035428409593223,
          "pitch": 0.027046317770961892,
          "rotation": 5.497787143782138,
          "target": "2-living"
        },
        {
          "yaw": -3.126813491688665,
          "pitch": 0.32774051496931733,
          "rotation": 0,
          "target": "0-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-living",
      "name": "LIVING",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.05065964598178674,
        "pitch": 0.01776869561503247,
        "fov": 0.6977772274897653
      },
      "linkHotspots": [
        {
          "yaw": 0.05065964598178674,
          "pitch": 0.01776869561503247,
          "rotation": 0,
          "target": "2-living"
        },
        {
          "yaw": -0.856318347427182,
          "pitch": 0.3999979950879382,
          "rotation": 0.7853981633974483,
          "target": "1-parking"
        },
        {
          "yaw": -1.8703427122616763,
          "pitch": 0.3419642202306701,
          "rotation": 0,
          "target": "4-kbedroom"
        },
        {
          "yaw": 3.1033711014607697,
          "pitch": -0.0013005234411842537,
          "rotation": 0,
          "target": "3-dining"
        },
        {
          "yaw": 1.8433922965529153,
          "pitch": 0.23921177805775962,
          "rotation": 0,
          "target": "8-kitchen"
        },
        {
          "yaw": 0.7952066854446436,
          "pitch": 0.14382357625066255,
          "rotation": 0,
          "target": "6-mbedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-dining",
      "name": "DINING",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "3-dining"
        },
        {
          "yaw": -1.32712269401285,
          "pitch": 0.05310338980259033,
          "rotation": 0,
          "target": "8-kitchen"
        },
        {
          "yaw": -2.411511986758466,
          "pitch": 0.03979211443089525,
          "rotation": 0,
          "target": "6-mbedroom"
        },
        {
          "yaw": 3.107959630466013,
          "pitch": -0.07649495428542608,
          "rotation": 0,
          "target": "2-living"
        },
        {
          "yaw": 2.2236494694495423,
          "pitch": 0.10658659931713288,
          "rotation": 0,
          "target": "1-parking"
        },
        {
          "yaw": 1.2685632969824088,
          "pitch": -0.002803288062322551,
          "rotation": 0,
          "target": "8-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-kbedroom",
      "name": "K.BEDROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "4-kbedroom"
        },
        {
          "yaw": -1.9098854222415511,
          "pitch": 0.17702830360147281,
          "rotation": 5.497787143782138,
          "target": "5-ktoilet"
        },
        {
          "yaw": 2.332567002658731,
          "pitch": 0.34722180324472873,
          "rotation": 0.7853981633974483,
          "target": "3-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-ktoilet",
      "name": "K.TOILET",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 0.6977772274897653
      },
      "linkHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "5-ktoilet"
        },
        {
          "yaw": 3.0455083556685913,
          "pitch": 0.3020122371705636,
          "rotation": 0.7853981633974483,
          "target": "4-kbedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-mbedroom",
      "name": "M.BEDROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": -0.000005937801168087731,
        "fov": 0.7334542099246516
      },
      "linkHotspots": [
        {
          "yaw": 0,
          "pitch": -0.000005937801168087731,
          "rotation": 0,
          "target": "6-mbedroom"
        },
        {
          "yaw": -2.090837974843728,
          "pitch": 0.33614582358541867,
          "rotation": 0,
          "target": "2-living"
        },
        {
          "yaw": -2.251330325686663,
          "pitch": 0.036449166505795105,
          "rotation": 5.497787143782138,
          "target": "3-dining"
        },
        {
          "yaw": -2.2196258568921596,
          "pitch": 0.07767843723524948,
          "rotation": 0,
          "target": "4-kbedroom"
        },
        {
          "yaw": -2.023969601415814,
          "pitch": 0.07523346392794572,
          "rotation": 0.7853981633974483,
          "target": "1-parking"
        },
        {
          "yaw": 2.8059171934550022,
          "pitch": 0.08851580054834152,
          "rotation": 0.7853981633974483,
          "target": "7-mtoilet"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-mtoilet",
      "name": "M.TOILET",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 0.8654974732676682
      },
      "linkHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "7-mtoilet"
        },
        {
          "yaw": 2.0646540273602803,
          "pitch": 0.08541593599104402,
          "rotation": 5.497787143782138,
          "target": "6-mbedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-kitchen",
      "name": "KITCHEN",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.11126833653935897,
        "pitch": -0.018191778263597413,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 0.11126833653935897,
          "pitch": -0.018191778263597413,
          "rotation": 0,
          "target": "8-kitchen"
        },
        {
          "yaw": 1.5033626180868236,
          "pitch": 0.20084092253910946,
          "rotation": 0,
          "target": "3-dining"
        },
        {
          "yaw": 1.6138474663656357,
          "pitch": 0.09279110762707177,
          "rotation": 0,
          "target": "4-kbedroom"
        },
        {
          "yaw": 1.8418577955731248,
          "pitch": 0.28129966885653523,
          "rotation": 0.7853981633974483,
          "target": "2-living"
        },
        {
          "yaw": 1.8463032453551795,
          "pitch": 0.11378393235784046,
          "rotation": 0.7853981633974483,
          "target": "1-parking"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "qtvr",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
