const bakko = [
  { 
    name: 'War Axe', 
    description:'',
    key: 'LMB',
    champion_id: 1
  },
  {
    name: 'Blood Axe',
    description: '',
    key: 'RMB',
    champion_id: 1
  },
  {
    name: 'Valiant Leap',
    description: '',
    key: 'SPACE',
    champion_id: 1
  },
  {
    name: 'War Stomp',
    description: '',
    key: 'SHIFT+SPACE',
    champion_id: 1
  },
  {
    name: 'Bulwark',
    description: '',
    key: 'Q',
    champion_id: 1
  },
  {
    name: 'Shield Dash',
    description: '',
    key: 'E',
    champion_id: 1
  },
  {
    name: 'Shield Slam',
    description: '',
    key: 'SHIFT+E',
    champion_id: 1
  },
  {
    name: 'War Shout',
    description: '',
    key: 'R',
    champion_id: 1
  },
  {
    name: 'Heroic Charge',
    description: '',
    key: 'F',
    champion_id: 1
  }
]

const croak = [
  { 
    name: 'Blade Flurry', 
    description:'',
    key: 'LMB',
    champion_id: 2
  },
  {
    name: 'Toxin Muck',
    description: '',
    key: 'RMB',
    champion_id: 2
  },
  {
    name: 'Sludge Spit',
    description: '',
    key: 'SHIFT+RMB',
    champion_id: 2
  },
  {
    name: 'Frog Leap',
    description: '',
    key: 'SPACE',
    champion_id: 2
  },
  {
    name: 'Camouflage',
    description: '',
    key: 'Q',
    champion_id: 2
  },
  {
    name: 'Deceit',
    description: '',
    key: 'SHIFT+Q',
    champion_id: 2
  },
  {
    name: 'Noxious Lunge',
    description: '',
    key: 'E',
    champion_id: 2
  },
  {
    name: 'Toxin Blades',
    description: '',
    key: 'R',
    champion_id: 2
  },
  {
    name: 'Venom Wind',
    description: '',
    key: 'F',
    champion_id: 2
  }
]

const abilities = [
  ...bakko,
  ...croak
]

module.exports = abilities
