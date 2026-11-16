// written by scripts/collect_scenes.py
window.DEEPBA_SCENES = {
 "teaser": [
  "dtu_scan55",
  "mip360_counter",
  "eth3d_kicker",
  "imc_lincoln_memorial_statue",
  "co3d_teddybear__187_20190_36737",
  "re10k_024152256b6bcac7"
 ],
 "datasets": [
  {
   "key": "dtu",
   "name": "DTU",
   "note": "The 15 scans of the SPARF protocol, 49 images each.",
   "scenes": [
    {
     "id": "dtu_scan8",
     "name": "scan8",
     "images": 49,
     "iterations": 100,
     "rra5": 100.0,
     "rta5": 99.6,
     "auc30": 92.1
    },
    {
     "id": "dtu_scan21",
     "name": "scan21",
     "images": 49,
     "iterations": 100,
     "rra5": 96.2,
     "rta5": 77.1,
     "auc30": 86.8
    },
    {
     "id": "dtu_scan30",
     "name": "scan30",
     "images": 49,
     "iterations": 100,
     "rra5": 69.0,
     "rta5": 76.9,
     "auc30": 83.8
    },
    {
     "id": "dtu_scan31",
     "name": "scan31",
     "images": 49,
     "iterations": 100,
     "rra5": 98.0,
     "rta5": 97.0,
     "auc30": 89.7
    },
    {
     "id": "dtu_scan34",
     "name": "scan34",
     "images": 49,
     "iterations": 100,
     "rra5": 90.2,
     "rta5": 96.8,
     "auc30": 88.8
    },
    {
     "id": "dtu_scan38",
     "name": "scan38",
     "images": 49,
     "iterations": 100,
     "rra5": 100.0,
     "rta5": 98.9,
     "auc30": 93.2
    },
    {
     "id": "dtu_scan40",
     "name": "scan40",
     "images": 49,
     "iterations": 100,
     "rra5": 98.4,
     "rta5": 93.4,
     "auc30": 89.7
    },
    {
     "id": "dtu_scan41",
     "name": "scan41",
     "images": 49,
     "iterations": 100,
     "rra5": 100.0,
     "rta5": 96.8,
     "auc30": 91.5
    },
    {
     "id": "dtu_scan45",
     "name": "scan45",
     "images": 49,
     "iterations": 100,
     "rra5": 99.5,
     "rta5": 70.7,
     "auc30": 85.6
    },
    {
     "id": "dtu_scan55",
     "name": "scan55",
     "images": 49,
     "iterations": 100,
     "rra5": 86.8,
     "rta5": 99.7,
     "auc30": 89.3
    },
    {
     "id": "dtu_scan63",
     "name": "scan63",
     "images": 49,
     "iterations": 100,
     "rra5": 99.9,
     "rta5": 76.9,
     "auc30": 87.8
    },
    {
     "id": "dtu_scan82",
     "name": "scan82",
     "images": 49,
     "iterations": 100,
     "rra5": 100.0,
     "rta5": 91.5,
     "auc30": 91.2
    },
    {
     "id": "dtu_scan103",
     "name": "scan103",
     "images": 49,
     "iterations": 100,
     "rra5": 97.9,
     "rta5": 91.6,
     "auc30": 89.6
    },
    {
     "id": "dtu_scan110",
     "name": "scan110",
     "images": 49,
     "iterations": 100,
     "rra5": 99.9,
     "rta5": 96.7,
     "auc30": 90.6
    },
    {
     "id": "dtu_scan114",
     "name": "scan114",
     "images": 49,
     "iterations": 100,
     "rra5": 98.0,
     "rta5": 98.9,
     "auc30": 90.6
    }
   ]
  },
  {
   "key": "mip360",
   "name": "Mip-NeRF 360",
   "note": "All 7 scenes with every image (125 to 311). counter runs 500 iterations, as in the paper.",
   "scenes": [
    {
     "id": "mip360_bicycle",
     "name": "bicycle",
     "images": 194,
     "iterations": 100,
     "rra5": 100.0,
     "rta5": 98.2,
     "auc30": 93.3
    },
    {
     "id": "mip360_bonsai",
     "name": "bonsai",
     "images": 292,
     "iterations": 100,
     "rra5": 17.4,
     "rta5": 26.4,
     "auc30": 59.9
    },
    {
     "id": "mip360_counter",
     "name": "counter",
     "images": 240,
     "iterations": 500,
     "rra5": 96.5,
     "rta5": 99.4,
     "auc30": 91.1
    },
    {
     "id": "mip360_garden",
     "name": "garden",
     "images": 185,
     "iterations": 100,
     "rra5": 100.0,
     "rta5": 100.0,
     "auc30": 93.8
    },
    {
     "id": "mip360_kitchen",
     "name": "kitchen",
     "images": 279,
     "iterations": 100,
     "rra5": 92.6,
     "rta5": 99.7,
     "auc30": 91.0
    },
    {
     "id": "mip360_room",
     "name": "room",
     "images": 311,
     "iterations": 100,
     "rra5": 39.2,
     "rta5": 34.8,
     "auc30": 37.6
    },
    {
     "id": "mip360_stump",
     "name": "stump",
     "images": 125,
     "iterations": 100,
     "rra5": 98.3,
     "rta5": 92.6,
     "auc30": 89.1
    }
   ]
  },
  {
   "key": "eth3d",
   "name": "ETH3D",
   "note": "All 13 high-resolution multi-view training scenes with every image.",
   "scenes": [
    {
     "id": "eth3d_courtyard",
     "name": "courtyard",
     "images": 38,
     "iterations": 100,
     "rra5": 16.6,
     "rta5": 25.5,
     "auc30": 26.6
    },
    {
     "id": "eth3d_delivery_area",
     "name": "delivery_area",
     "images": 40,
     "iterations": 100,
     "rra5": 66.0,
     "rta5": 33.5,
     "auc30": 65.1
    },
    {
     "id": "eth3d_electro",
     "name": "electro",
     "images": 42,
     "iterations": 100,
     "rra5": 90.9,
     "rta5": 38.3,
     "auc30": 68.7
    },
    {
     "id": "eth3d_facade",
     "name": "facade",
     "images": 76,
     "iterations": 100,
     "rra5": 39.4,
     "rta5": 16.1,
     "auc30": 43.9
    },
    {
     "id": "eth3d_kicker",
     "name": "kicker",
     "images": 31,
     "iterations": 100,
     "rra5": 93.3,
     "rta5": 81.9,
     "auc30": 85.0
    },
    {
     "id": "eth3d_meadow",
     "name": "meadow",
     "images": 15,
     "iterations": 100,
     "rra5": 56.2,
     "rta5": 22.9,
     "auc30": 42.7
    },
    {
     "id": "eth3d_office",
     "name": "office",
     "images": 23,
     "iterations": 100,
     "rra5": 91.3,
     "rta5": 48.2,
     "auc30": 67.2
    },
    {
     "id": "eth3d_pipes",
     "name": "pipes",
     "images": 14,
     "iterations": 100,
     "rra5": 100.0,
     "rta5": 65.9,
     "auc30": 73.5
    },
    {
     "id": "eth3d_playground",
     "name": "playground",
     "images": 32,
     "iterations": 100,
     "rra5": 74.4,
     "rta5": 38.9,
     "auc30": 71.1
    },
    {
     "id": "eth3d_relief",
     "name": "relief",
     "images": 18,
     "iterations": 100,
     "rra5": 60.8,
     "rta5": 58.8,
     "auc30": 75.3
    },
    {
     "id": "eth3d_relief_2",
     "name": "relief_2",
     "images": 20,
     "iterations": 100,
     "rra5": 33.2,
     "rta5": 35.8,
     "auc30": 54.2
    },
    {
     "id": "eth3d_terrace",
     "name": "terrace",
     "images": 23,
     "iterations": 100,
     "rra5": 87.4,
     "rta5": 67.2,
     "auc30": 72.1
    },
    {
     "id": "eth3d_terrains",
     "name": "terrains",
     "images": 42,
     "iterations": 100,
     "rra5": 89.4,
     "rta5": 38.1,
     "auc30": 58.0
    }
   ]
  },
  {
   "key": "imc",
   "name": "IMC2021",
   "note": "All 9 phototourism scenes, one 25-image bag each: the bag of the paper's run where DeepBA did best.",
   "scenes": [
    {
     "id": "imc_british_museum",
     "name": "british_museum",
     "images": 25,
     "iterations": 100,
     "rra5": 100.0,
     "rta5": 76.0,
     "auc30": 86.3,
     "bag": "25bag_013"
    },
    {
     "id": "imc_florence_cathedral_side",
     "name": "florence_cathedral_side",
     "images": 25,
     "iterations": 100,
     "rra5": 100.0,
     "rta5": 93.3,
     "auc30": 92.0,
     "bag": "25bag_006"
    },
    {
     "id": "imc_lincoln_memorial_statue",
     "name": "lincoln_memorial_statue",
     "images": 25,
     "iterations": 100,
     "rra5": 100.0,
     "rta5": 99.0,
     "auc30": 95.1,
     "bag": "25bag_023"
    },
    {
     "id": "imc_london_bridge",
     "name": "london_bridge",
     "images": 25,
     "iterations": 100,
     "rra5": 100.0,
     "rta5": 83.0,
     "auc30": 86.6,
     "bag": "25bag_007"
    },
    {
     "id": "imc_milan_cathedral",
     "name": "milan_cathedral",
     "images": 25,
     "iterations": 100,
     "rra5": 100.0,
     "rta5": 83.3,
     "auc30": 89.1,
     "bag": "25bag_004"
    },
    {
     "id": "imc_mount_rushmore",
     "name": "mount_rushmore",
     "images": 25,
     "iterations": 100,
     "rra5": 100.0,
     "rta5": 77.3,
     "auc30": 84.7,
     "bag": "25bag_011"
    },
    {
     "id": "imc_piazza_san_marco",
     "name": "piazza_san_marco",
     "images": 25,
     "iterations": 100,
     "rra5": 99.7,
     "rta5": 82.7,
     "auc30": 87.3,
     "bag": "25bag_016"
    },
    {
     "id": "imc_sagrada_familia",
     "name": "sagrada_familia",
     "images": 25,
     "iterations": 100,
     "rra5": 96.7,
     "rta5": 89.3,
     "auc30": 87.8,
     "bag": "25bag_005"
    },
    {
     "id": "imc_st_pauls_cathedral",
     "name": "st_pauls_cathedral",
     "images": 25,
     "iterations": 100,
     "rra5": 100.0,
     "rta5": 89.3,
     "auc30": 90.4,
     "bag": "25bag_005"
    }
   ]
  },
  {
   "key": "co3d",
   "name": "CO3Dv2",
   "note": "12 held-out sequences of 12 categories, 10 frames each (the paper's frames): per category the sequence where DeepBA did best in the paper's run.",
   "scenes": [
    {
     "id": "co3d_apple__43_2134_6384",
     "name": "apple",
     "images": 10,
     "iterations": 100,
     "rra5": 100.0,
     "rta5": 86.7,
     "auc30": 90.7,
     "sequence": "43_2134_6384"
    },
    {
     "id": "co3d_bench__206_21811_45891",
     "name": "bench",
     "images": 10,
     "iterations": 100,
     "rra5": 100.0,
     "rta5": 100.0,
     "auc30": 96.6,
     "sequence": "206_21811_45891"
    },
    {
     "id": "co3d_bicycle__375_42529_85239",
     "name": "bicycle",
     "images": 10,
     "iterations": 100,
     "rra5": 100.0,
     "rta5": 86.7,
     "auc30": 92.3,
     "sequence": "375_42529_85239"
    },
    {
     "id": "co3d_car__206_21805_45881",
     "name": "car",
     "images": 10,
     "iterations": 100,
     "rra5": 100.0,
     "rta5": 100.0,
     "auc30": 93.5,
     "sequence": "206_21805_45881"
    },
    {
     "id": "co3d_chair__62_4322_10924",
     "name": "chair",
     "images": 10,
     "iterations": 100,
     "rra5": 100.0,
     "rta5": 95.6,
     "auc30": 94.1,
     "sequence": "62_4322_10924"
    },
    {
     "id": "co3d_hydrant__194_20925_42241",
     "name": "hydrant",
     "images": 10,
     "iterations": 100,
     "rra5": 100.0,
     "rta5": 100.0,
     "auc30": 95.4,
     "sequence": "194_20925_42241"
    },
    {
     "id": "co3d_laptop__182_19688_35488",
     "name": "laptop",
     "images": 10,
     "iterations": 100,
     "rra5": 100.0,
     "rta5": 97.8,
     "auc30": 91.5,
     "sequence": "182_19688_35488"
    },
    {
     "id": "co3d_motorcycle__365_39244_76495",
     "name": "motorcycle",
     "images": 10,
     "iterations": 100,
     "rra5": 100.0,
     "rta5": 95.6,
     "auc30": 94.2,
     "sequence": "365_39244_76495"
    },
    {
     "id": "co3d_teddybear__187_20190_36737",
     "name": "teddybear",
     "images": 10,
     "iterations": 100,
     "rra5": 100.0,
     "rta5": 97.8,
     "auc30": 93.5,
     "sequence": "187_20190_36737"
    },
    {
     "id": "co3d_toyplane__373_41482_82819",
     "name": "toyplane",
     "images": 10,
     "iterations": 100,
     "rra5": 100.0,
     "rta5": 93.3,
     "auc30": 92.7,
     "sequence": "373_41482_82819"
    },
    {
     "id": "co3d_toytruck__273_29211_57116",
     "name": "toytruck",
     "images": 10,
     "iterations": 100,
     "rra5": 100.0,
     "rta5": 100.0,
     "auc30": 92.9,
     "sequence": "273_29211_57116"
    },
    {
     "id": "co3d_umbrella__191_20629_39283",
     "name": "umbrella",
     "images": 10,
     "iterations": 100,
     "rra5": 97.8,
     "rta5": 100.0,
     "auc30": 89.5,
     "sequence": "191_20629_39283"
    }
   ]
  },
  {
   "key": "re10k",
   "name": "RealEstate10K",
   "note": "The 12 of the paper's 108 clips where DeepBA did best, 10 frames each.",
   "scenes": [
    {
     "id": "re10k_0122933cf8ab3317",
     "name": "0122933c",
     "images": 10,
     "iterations": 100,
     "rra5": 100.0,
     "rta5": 100.0,
     "auc30": 96.3,
     "clip": "0122933cf8ab3317"
    },
    {
     "id": "re10k_0278b3d8abd9654d",
     "name": "0278b3d8",
     "images": 10,
     "iterations": 100,
     "rra5": 100.0,
     "rta5": 95.6,
     "auc30": 95.6,
     "clip": "0278b3d8abd9654d"
    },
    {
     "id": "re10k_03482c3bd66de195",
     "name": "03482c3b",
     "images": 10,
     "iterations": 100,
     "rra5": 100.0,
     "rta5": 97.8,
     "auc30": 94.8,
     "clip": "03482c3bd66de195"
    },
    {
     "id": "re10k_040a7af97273204f",
     "name": "040a7af9",
     "images": 10,
     "iterations": 100,
     "rra5": 100.0,
     "rta5": 100.0,
     "auc30": 94.7,
     "clip": "040a7af97273204f"
    },
    {
     "id": "re10k_10fbe4690dec6258",
     "name": "10fbe469",
     "images": 10,
     "iterations": 100,
     "rra5": 100.0,
     "rta5": 97.8,
     "auc30": 94.4,
     "clip": "10fbe4690dec6258"
    },
    {
     "id": "re10k_02ee66b3efbf3b0a",
     "name": "02ee66b3",
     "images": 10,
     "iterations": 100,
     "rra5": 100.0,
     "rta5": 100.0,
     "auc30": 94.3,
     "clip": "02ee66b3efbf3b0a"
    },
    {
     "id": "re10k_00620c2b77518524",
     "name": "00620c2b",
     "images": 10,
     "iterations": 100,
     "rra5": 100.0,
     "rta5": 100.0,
     "auc30": 94.1,
     "clip": "00620c2b77518524"
    },
    {
     "id": "re10k_024152256b6bcac7",
     "name": "02415225",
     "images": 10,
     "iterations": 100,
     "rra5": 100.0,
     "rta5": 97.8,
     "auc30": 94.1,
     "clip": "024152256b6bcac7"
    },
    {
     "id": "re10k_000c3ab189999a83",
     "name": "000c3ab1",
     "images": 10,
     "iterations": 100,
     "rra5": 100.0,
     "rta5": 100.0,
     "auc30": 93.8,
     "clip": "000c3ab189999a83"
    },
    {
     "id": "re10k_01a628e2c509b823",
     "name": "01a628e2",
     "images": 10,
     "iterations": 100,
     "rra5": 100.0,
     "rta5": 97.8,
     "auc30": 93.6,
     "clip": "01a628e2c509b823"
    },
    {
     "id": "re10k_0068e97c1c1f61aa",
     "name": "0068e97c",
     "images": 10,
     "iterations": 100,
     "rra5": 100.0,
     "rta5": 100.0,
     "auc30": 93.4,
     "clip": "0068e97c1c1f61aa"
    },
    {
     "id": "re10k_00ca5123d8ff6f83",
     "name": "00ca5123",
     "images": 10,
     "iterations": 100,
     "rra5": 100.0,
     "rta5": 100.0,
     "auc30": 93.4,
     "clip": "00ca5123d8ff6f83"
    }
   ]
  }
 ]
};
