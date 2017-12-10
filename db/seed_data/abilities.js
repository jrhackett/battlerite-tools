const bakko = [
  { 
    name: 'War Axe', 
    description:'',
    key: 'lmb',
    champion_id: 1
  },
  {
    name: 'Blood Axe',
    description: '',
    key: 'rmb',
    champion_id: 1
  },
  {
    name: 'Valiant Leap',
    description: '',
    key: 'space',
    champion_id: 1
  },
  {
    name: 'War Stomp',
    description: '',
    key: 'ex-space',
    champion_id: 1
  },
  {
    name: 'Bulwark',
    description: '',
    key: 'q',
    champion_id: 1
  },
  {
    name: 'Shield Dash',
    description: '',
    key: 'e',
    champion_id: 1
  },
  {
    name: 'Shield Slam',
    description: '',
    key: 'ex-e',
    champion_id: 1
  },
  {
    name: 'War Shout',
    description: '',
    key: 'r',
    champion_id: 1
  },
  {
    name: 'Heroic Charge',
    description: '',
    key: 'f',
    champion_id: 1
  }
]

const croak = [
  { 
    name: 'Blade Flurry', 
    description:'',
    key: 'lmb',
    champion_id: 2
  },
  {
    name: 'Toxin Muck',
    description: '',
    key: 'rmb',
    champion_id: 2
  },
  {
    name: 'Sludge Spit',
    description: '',
    key: 'ex-rmb',
    champion_id: 2
  },
  {
    name: 'Frog Leap',
    description: '',
    key: 'space',
    champion_id: 2
  },
  {
    name: 'Camouflage',
    description: '',
    key: 'q',
    champion_id: 2
  },
  {
    name: 'Deceit',
    description: '',
    key: 'ex-q',
    champion_id: 2
  },
  {
    name: 'Noxious Lunge',
    description: '',
    key: 'e',
    champion_id: 2
  },
  {
    name: 'Toxin Blades',
    description: '',
    key: 'r',
    champion_id: 2
  },
  {
    name: 'Venom Wind',
    description: '',
    key: 'f',
    champion_id: 2
  }
]

const freya = [
  {
    name: 'Bash',
    description: '',
    key: 'lmb',
    champion_id: 3
  },
  {
    name: 'Storm Mace',
    description: '',
    key: 'rmb',
    champion_id: 3
  },
  {
    name: 'Spring',
    description: '',
    key: 'space',
    champion_id: 3
  },
  {
    name: 'Shock Vault',
    description: '',
    key: 'ex-space',
    champion_id: 3
  },
  {
    name: 'Electric Shield',
    description: '',
    key: 'q',
    champion_id: 3
  },
  {
    name: 'Thunderclap',
    description: '',
    key: 'e',
    champion_id: 3
  },
  {
    name: 'Thunderslam',
    description: '',
    key: 'ex-e',
    champion_id: 3
  },
  {
    name: 'Charged Strike',
    description: '',
    key: 'r',
    champion_id: 3
  },
  {
    name: 'Lightning Strike',
    description: 'f',
    key: 'f',
    champion_id: 3
  }
]

const abilities = [
  ...bakko,
  ...croak,
  ...freya
]

module.exports = abilities
