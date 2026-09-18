var APP_DATA = {
  "scenes": [
    {
      "id": "0-living-area",
      "name": "Living Area",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.019655462600001172,
        "pitch": 0,
        "fov": 1.388104641105506
      },
      "linkHotspots": [
        {
          "yaw": 0.3388008948105057,
          "pitch": 0.20837819298362703,
          "rotation": 5.497787143782138,
          "target": "1-stairs"
        },
        {
          "yaw": -0.00768280511349495,
          "pitch": 0.05565744049304655,
          "rotation": 0.7853981633974483,
          "target": "2-dining-area"
        },
        {
          "yaw": 0.1743441688745797,
          "pitch": 0.005755996479361869,
          "rotation": 0.7853981633974483,
          "target": "4-kitchen-area"
        },
        {
          "yaw": -0.050650712399631814,
          "pitch": -0.019794292196777974,
          "rotation": 0,
          "target": "3-guest-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-stairs",
      "name": "Stairs",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.1840646714713028,
          "pitch": 0.19573006383368963,
          "rotation": 0,
          "target": "0-living-area"
        },
        {
          "yaw": 0.8707472284408073,
          "pitch": 0.2338346374273339,
          "rotation": 0,
          "target": "2-dining-area"
        },
        {
          "yaw": 1.1626693168482767,
          "pitch": 0.03827547948628229,
          "rotation": 0,
          "target": "3-guest-room"
        },
        {
          "yaw": 1.5641194298845802,
          "pitch": 0.12118293684505943,
          "rotation": 0,
          "target": "4-kitchen-area"
        },
        {
          "yaw": -0.2178453010310264,
          "pitch": 0.007238975604986209,
          "rotation": 7.0685834705770345,
          "target": "10-2nd-floor-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-dining-area",
      "name": "Dining Area",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.375736033672121,
          "pitch": 0.024630090819096395,
          "rotation": 0,
          "target": "4-kitchen-area"
        },
        {
          "yaw": 0.014137430042826082,
          "pitch": 0.08963378898461727,
          "rotation": 0,
          "target": "1-stairs"
        },
        {
          "yaw": 0.247898303612903,
          "pitch": 0.03466477216991848,
          "rotation": 0,
          "target": "0-living-area"
        },
        {
          "yaw": 2.4722340302534036,
          "pitch": 0.05200800300609387,
          "rotation": 0,
          "target": "3-guest-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-guest-room",
      "name": "Guest Room",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.7780874852077133,
          "pitch": 0.34411990570518824,
          "rotation": 0,
          "target": "2-dining-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-kitchen-area",
      "name": "Kitchen Area",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.07703434402360188,
          "pitch": 0.11019122691657834,
          "rotation": 0,
          "target": "2-dining-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-master-bedroom",
      "name": "Master Bedroom",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.32879013325355544,
          "pitch": 0.07105583710677266,
          "rotation": 0,
          "target": "10-2nd-floor-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-3-floor-hallway",
      "name": "3 Floor Hallway",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.04568109274718424,
          "pitch": 0.1252277250649989,
          "rotation": 0,
          "target": "7-bedroom-2"
        },
        {
          "yaw": 3.1122071612979303,
          "pitch": 0.21184771791057955,
          "rotation": 0,
          "target": "9-family-area"
        },
        {
          "yaw": -1.4512311873500785,
          "pitch": 0.6175677842465603,
          "rotation": 4.71238898038469,
          "target": "10-2nd-floor-hallway"
        },
        {
          "yaw": 0.35432332681735446,
          "pitch": 0.22376710505177755,
          "rotation": 0.7853981633974483,
          "target": "11-storage-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-bedroom-2",
      "name": "Bedroom 2",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.4514479397423727,
          "pitch": 0.2416147806318527,
          "rotation": 5.497787143782138,
          "target": "6-3-floor-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-study-room",
      "name": "Study Room",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.4069307265989721,
          "pitch": 0.15046255044942392,
          "rotation": 0,
          "target": "10-2nd-floor-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-family-area",
      "name": "Family Area",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.557373895119202,
          "pitch": 0.033678646398199064,
          "rotation": 5.497787143782138,
          "target": "6-3-floor-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-2nd-floor-hallway",
      "name": "2nd Floor Hallway",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.06399591651631908,
          "pitch": 0.24455673332607475,
          "rotation": 0,
          "target": "5-master-bedroom"
        },
        {
          "yaw": 2.9924957184182297,
          "pitch": 0.1439980580790987,
          "rotation": 0,
          "target": "8-study-room"
        },
        {
          "yaw": -0.883434761972687,
          "pitch": -1.2785425414514489,
          "rotation": 0,
          "target": "6-3-floor-hallway"
        },
        {
          "yaw": -0.42463522857188707,
          "pitch": 0.8393127685368516,
          "rotation": 4.71238898038469,
          "target": "1-stairs"
        },
        {
          "yaw": -1.4967762717627924,
          "pitch": -0.018553088738460843,
          "rotation": 0.7853981633974483,
          "target": "6-3-floor-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-storage-room",
      "name": "Storage Room",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.9819951346319211,
          "pitch": 0.019773419989753904,
          "rotation": 0,
          "target": "6-3-floor-hallway"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
