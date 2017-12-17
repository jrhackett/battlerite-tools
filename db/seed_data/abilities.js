const bakko = [
  { 
    name: 'War Axe', 
    description:'Swing your axe to deal 9 damage. Successful hits charges your axe and reduces the cooldown of Blood Axe by 0.6s. Each charge increases the power of Blood Axe.',
    key: 'lmb',
    champion_id: 1
  },
  {
    name: 'Blood Axe',
    description: 'Throw an axe that deals 16 damage. Deals 4 bonus damage for each weapon charge.',
    key: 'rmb',
    champion_id: 1
  },
  {
    name: 'Valiant Leap',
    description: 'Leap into the air and strike down upon your enemies dealing 22 damage and inflicting Snare',
    key: 'space',
    champion_id: 1
  },
  {
    name: 'War Stomp',
    description: 'Leap into the air and strike down upon your enemies dealing 8 damage and inflicting Incapacitate.',
    key: 'ex-space',
    champion_id: 1
  },
  {
    name: 'Bulwark',
    description: 'Put up your shield and block incoming attacks. Reflects enemy projectiles and inflicts Stun on enemy melee attackers.',
    key: 'q',
    champion_id: 1
  },
  {
    name: 'Shield Dash',
    description: 'Dash forward and push an enemy in front of you. Pushing an enemy into a wall deals 16 damage.',
    key: 'e',
    champion_id: 1
  },
  {
    name: 'Shield Slam',
    description: 'Dash forward and slam an enemy dealing 12 damage, knocking it back and inflicting Fading Snare.',
    key: 'ex-e',
    champion_id: 1
  },
  {
    name: 'War Shout',
    description: 'Let loose a War Shout that shields all nearby allies absorbing up to 40 damage.',
    key: 'r',
    champion_id: 1
  },
  {
    name: 'Heroic Charge',
    description: 'Rush forward and grab an enemy dealing 35 damage and pushing it in front of you. Deals 28 area damage and inflicts Stun when reaching max distance or when colliding with a wall or another enemy.',
    key: 'f',
    champion_id: 1
  }
]

const croak = [
  { 
    name: 'Blade Flurry', 
    description:'Strike with your blades to deal 8 damage. Frog Leap and Camouflage increase the attack speed for a limited amount of strikes.',
    key: 'lmb',
    champion_id: 2
  },
  {
    name: 'Toxin Muck',
    description: 'Spit toxin muck at target location. Deals 6 damage, inflicts Toxin and heals you for 6 health.',
    key: 'rmb',
    champion_id: 2
  },
  {
    name: 'Sludge Spit',
    description: 'Spit a vicious sludge projectile that deals 10 damage and inflicts Toxin and Blind.',
    key: 'ex-rmb',
    champion_id: 2
  },
  {
    name: 'Frog Leap',
    description: 'Leap attack and strike with your blades to deal 20 damage in front of you. Can be recast.',
    key: 'space',
    champion_id: 2
  },
  {
    name: 'Camouflage',
    description: 'Turn invisible, remove negative effects and gain Fading Haste. Using Blade Flurry while invisible inflicts Stun. Camouflage fades when an ability is used.',
    key: 'q',
    champion_id: 2
  },
  {
    name: 'Deceit',
    description: 'Turn invisible, remove negative effects and gain Fading Haste. Using Blade Flurry while invisible inflicts Incapacitate and causes you to enter Camouflage. Deceit fades when and ability is used.',
    key: 'ex-q',
    champion_id: 2
  },
  {
    name: 'Noxious Lunge',
    description: 'Lunge forward, piercing through enemies dealing 12 damage.',
    key: 'e',
    champion_id: 2
  },
  {
    name: 'Toxin Blades',
    description: 'When activated your Blade Flurry attacks deal 2 bonus damage, heal you for 2 health, and inflicts Toxin.',
    key: 'r',
    champion_id: 2
  },
  {
    name: 'Venom Wind',
    description: 'Dash forward in the shape of a venomous wind, piercing through enemies inflicting Venom.',
    key: 'f',
    champion_id: 2
  }
]

const freya = [
  {
    name: 'Bash',
    description: 'Strike with your maces to deal 10/10/16 damage. Deals 2 bonus damage if target is affected by Static.',
    key: 'lmb',
    champion_id: 3
  },
  {
    name: 'Storm Mace',
    description: 'Throw a mace that deals 10 damage and inflicts Static. Consumes Static instead if the enemy is already affected by Static, knocking them back and inflicting Incapacitate if knocked into a wall',
    key: 'rmb',
    champion_id: 3
  },
  {
    name: 'Spring',
    description: 'Leap towards target and gain Spring. Spring: Movement speed is increased by 100% and then fades over 1.5s. Your next Bash hit consumes this effect to deal 6 bonus damage.',
    key: 'space',
    champion_id: 3
  },
  {
    name: 'Shock Vault',
    description: 'Leap towards target location and gain Shock Vault. Shock Vault: Movement speed is increased by 100% and then fades over 1.5s. Your next Bash hit consumes this effect to deal 6 bonus damage. \ 
                  Fading Snare: Target\'s Movement speed is reduced to 0% and gradually restores overtime.',
    key: 'ex-space',
    champion_id: 3
  },
  {
    name: 'Electric Shield',
    description: 'Counter incoming melee and projectile attacks. Countering any attack pulls that enemy towards you and inflicts Static. You gain a shield when you counter the first attack. Static: Target is vulnerable to Freya\'s attacks for 3s',
    key: 'q',
    champion_id: 3
  },
  {
    name: 'Thunderclap',
    description: 'Jump into air and slam your mace into the ground. Deals 10 damage and inflicts Static in an area. Deals 6 bonus damage to enemies with Static.',
    key: 'e',
    champion_id: 3
  },
  {
    name: 'Thunderslam',
    description: 'Jump into the air and slam your mace into the ground. Deals 12 dmagae, inflicts Static and Fading Snare in a line. Deals 6 bonus damage to enemies with Static.',
    key: 'ex-e',
    champion_id: 3
  },
  {
    name: 'Charged Strike',
    description: 'Melee attack that deals 14 damage and grants a Shield. Consumes Static from enemies, increasing the power of the Shield for each Static consumed.',
    key: 'r',
    champion_id: 3
  },
  {
    name: 'Lightning Strike',
    description: 'Leap high into the air and strike down upon your enemies. Deals 45 damage and inflicts Static. Deals 15 damage if the enemy is already affected by Static.',
    key: 'f',
    champion_id: 3
  }
]

const raigon = [
  {
    name: 'Sword Slash',
    description: '',
    key: 'lmb',
    champion_id: 4
  },
  {
    name: 'Slicing Winds',
    description: '',
    key: 'ex-lmb',
    champion_id: 4
  },
  {
    name: 'Retribution',
    description: '',
    key: 'rmb',
    champion_id: 4
  },
  {
    name: 'Heavenly Strike',
    description: '',
    key: 'space',
    champion_id: 4
  },
  {
    name: 'Parry',
    description: '',
    key: 'q',
    champion_id: 4
  },
  {
    name: 'Seismic Shock',
    description: '',
    key: 'e',
    champion_id: 4
  },
  {
    name: 'Tectonic Shock',
    description: '',
    key: 'ex-e',
    champion_id: 4
  },
  {
    name: 'Dragon Palm',
    description: '',
    key: 'r',
    champion_id: 4
  },
  {
    name: 'Wrath of the Tiger',
    description: '',
    key: 'f',
    champion_id: 4
  }
]

const rook = [
  {
    name: 'Pummel',
    description: '',
    key: 'lmb',
    champion_id: 5
  },
  {
    name: 'Eat',
    description: '',
    key: 'ex-lmb',
    champion_id: 5
  },
  {
    name: 'Crushing Blow',
    description: '',
    key: 'rmb',
    champion_id: 5
  },
  {
    name: 'Meat Bolt',
    description: '',
    key: 'ex-rmb',
    champion_id: 5
  },
  {
    name: 'Rush',
    description: '',
    key: 'space',
    champion_id: 5
  },
  {
    name: 'Beserk',
    description: '',
    key: 'q',
    champion_id: 5
  },
  {
    name: 'Boulder Toss',
    description: '',
    key: 'e',
    champion_id: 5
  },
  {
    name: 'Smack',
    description: '',
    key: 'r',
    champion_id: 5
  },
  {
    name: 'Tremor',
    description: '',
    key: 'f',
    champion_id: 5
  }
]

const ruh_kaan = [
  {
    name: 'Defiled Blade',
    description: '',
    key: 'lmb',
    champion_id: 6
  },
  {
    name: 'Shadowbolt',
    description: '',
    key: 'rmb',
    champion_id: 6
  },
  {
    name: 'Sinister Strike',
    description: '',
    key: 'space',
    champion_id: 6
  },
  {
    name: 'Reaping Scythe',
    description: '',
    key: 'ex-space',
    champion_id: 6
  },
  {
    name: 'Consume',
    description: '',
    key: 'q',
    champion_id: 6
  },
  {
    name: 'Claw of the Wicked',
    description: '',
    key: 'e',
    champion_id: 6
  },
  {
    name: 'Claw of the Undying',
    description: '',
    key: 'ex-e',
    champion_id: 6
  },
  {
    name: 'Nether Void',
    description: '',
    key: 'r',
    champion_id: 6
  },
  {
    name: 'Shadow Beast',
    description: '',
    key: 'f',
    champion_id: 6
  }
]

const shifu = [
  {
    name: 'Spear Slash',
    description: '',
    key: 'lmb',
    champion_id: 7
  },
  {
    name: 'Impale',
    description: '',
    key: 'rmb',
    champion_id: 7
  },
  {
    name: 'Fleetfoot',
    description: '',
    key: 'space',
    champion_id: 7
  },
  {
    name: 'Tempest Rush',
    description: '',
    key: 'ex-space',
    champion_id: 7
  },
  {
    name: 'Kunju',
    description: '',
    key: 'q',
    champion_id: 7
  },
  {
    name: 'Javelin',
    description: '',
    key: 'e',
    champion_id: 7
  },
  {
    name: 'Harpoon',
    description: '',
    key: 'ex-e',
    champion_id: 7
  },
  {
    name: 'Tendon Swing',
    description: '',
    key: 'r',
    champion_id: 7
  },
  {
    name: 'Whirlwind',
    description: '',
    key: 'f',
    champion_id: 7
  }
]

const thorn = [
  {
    name: 'Root Claw',
    description: '',
    key: 'lmb',
    champion_id: 8
  },
  {
    name: 'Leeching Thorns',
    description: '',
    key: 'rmb',
    champion_id: 8
  },
  {
    name: 'Thorn Barrage',
    description: '',
    key: 'ex-rmb',
    champion_id: 8
  },
  {
    name: 'Burrow',
    description: '',
    key: 'space',
    champion_id: 8
  },
  {
    name: 'Root Network',
    description: '',
    key: 'ex-space',
    champion_id: 8
  },
  {
    name: 'Evil Clutch',
    description: '',
    key: 'q',
    champion_id: 8
  },
  {
    name: 'Entangling Roots',
    description: '',
    key: 'e',
    champion_id: 8
  },
  {
    name: 'Barbed Husk',
    description: '',
    key: 'r',
    champion_id: 8
  },
  {
    name: 'Dead Roots',
    description: '',
    key: 'f',
    champion_id: 8
  }
]

const ashka = [
  {
    name: 'Fireball',
    description: 'Launch a Fireball that deals 15 damage. Reapplies Ignite on impact.',
    key: 'lmb',
    champion_id: 9
  },
  {
    name: 'Fire Storm',
    description: 'Launch 3 Fire Storm projectiles. Each projectile deals 16 damage and inflicts Ignite to enemies.',
    key: 'rmb',
    champion_id: 9
  },
  {
    name: 'Searing Flight',
    description: 'Transform into fire and fly to target location dealing 10 damage to nearby enemies.',
    key: 'space',
    champion_id: 9
  },
  {
    name: 'Searing Fire',
    description: 'Transform into Pure Fire and travel to target location dealing 10 damage to nearby enemies.',
    key: 'ex-space',
    champion_id: 9
  },
  {
    name: 'Flamestrike',
    description: 'Engulf an area in flames dealing 20 area damage and inflicting Stun to the enemies in the area.',
    key: 'q',
    champion_id: 9
  },
  {
    name: 'Molten Chains',
    description: 'Give rise to a lava stream, inflicting Petrify to nearby enemies.',
    key: 'ex-q',
    champion_id: 9
  },
  {
    name: 'Molten Fist',
    description: 'Turn into a fist of magma and dash forward. Inflicts Snare and knocks the enemy back.',
    key: 'e',
    champion_id: 9
  },
  {
    name: 'Firewall',
    description: 'Summon a firewall at target location. The wall blocks projectiles and inflicts Ignite to enemies that pass through it.',
    key: 'r',
    champion_id: 9
  },
  {
    name: 'Infernal Scorch',
    description: 'Transform into a fire elemental and dash forward dealing 36 damage and inflicts Ignite and Stun to enemies hit. The ground below becomes scorched, delaing 3 damage every 0.5s.',
    key: 'f',
    champion_id: 9
  }
]

const destiny = [
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 10
  },
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 10
  },
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 10
  },
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 10
  },
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 10
  },
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 10
  },
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 10
  },
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 10
  },
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 10
  }
]

const ezmo = [
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 11
  },
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 11
  },
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 11
  },
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 11
  },
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 11
  },
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 11
  },
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 11
  },
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 11
  },
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 11
  }
]

const iva = [
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 12
  },
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 12
  },
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 12
  },
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 12
  },
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 12
  },
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 12
  },
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 12
  },
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 12
  },
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 12
  }
]

const jade = [
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 13
  },
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 13
  },
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 13
  },
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 13
  },
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 13
  },
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 13
  },
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 13
  },
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 13
  },
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 13
  }
]

const jumong = [
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 14
  },
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 14
  },
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 14
  },
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 14
  },
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 14
  },
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 14
  },
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 14
  },
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 14
  },
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 14
  }
]

const taya = [
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 15
  },
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 15
  },
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 15
  },
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 15
  },
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 15
  },
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 15
  },
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 15
  },
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 15
  },
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 15
  }
]

const varesh = [
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 16
  },
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 16
  },
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 16
  },
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 16
  },
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 16
  },
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 16
  },
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 16
  },
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 16
  },
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 16
  }
]

const blossom = [
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 17
  },
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 17
  },
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 17
  },
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 17
  },
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 17
  },
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 17
  },
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 17
  },
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 17
  },
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 17
  }
]

const lucie = [
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 18
  },
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 18
  },
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 18
  },
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 18
  },
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 18
  },
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 18
  },
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 18
  },
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 18
  },
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 18
  }
]

const oldur = [
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 19
  },
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 19
  },
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 19
  },
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 19
  },
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 19
  },
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 19
  },
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 19
  },
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 19
  },
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 19
  }
]

const pearl = [
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 20
  },
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 20
  },
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 20
  },
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 20
  },
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 20
  },
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 20
  },
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 20
  },
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 20
  },
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 20
  }
]

const pestilus = [
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 21
  },
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 21
  },
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 21
  },
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 21
  },
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 21
  },
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 21
  },
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 21
  },
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 21
  },
  {
    name: '',
    description: '',
    key: 'lmb',
    champion_id: 21
  }
]

const poloma = [
  {
    name: 'Soul Bolt',
    description: 'Fire a Soul Bolt that deals 10 damage and inflicts Soul Bind on enemy hit. Heals 8 health and applies Spirit Link on ally hit.',
    key: 'lmb',
    champion_id: 22
  },
  {
    name: 'Other Side',
    description: 'Send target ally into the spirit realm making them invulnerable and increases their movement speed by 40%. Heals self and nearby allies for 12 health when the effect ends.',
    key: 'rmb',
    champion_id: 22
  },
  {
    name: 'Spirit Guide',
    description: 'Summon a Spirit Guide that heals an ally for 16 health or deals 12 damage and knocks an enemy back. Can be cast again to teleport to the spirit.',
    key: 'space',
    champion_id: 22
  },
  {
    name: 'Soul Transfer',
    description: 'Summon a spirit that does 16 damage to enemies or heals 20 health to allies. You and the target swap locations on impact. Can be recast again to teleport to the spirit if no target is hit.',
    key: 'ex-space',
    champion_id: 22
  },
  {
    name: 'Spirit Rift',
    description: 'Open a rift that inflicts Spell Block to nearby enemies. The SPell Block inflicts Panic when triggered.',
    key: 'q',
    champion_id: 22
  },
  {
    name: 'Soul Drain',
    description: 'Opens a rift that drains 15 health and inflicts Spell Block. The Spell block inflicts Panic when triggered.',
    key: 'ex-q',
    champion_id: 22
  },
  {
    name: 'Ghost Wolf',
    description: 'Summon a Ghost Wolf that strikes up to 3 targets. Deals 20/16/12 damage and inflicts Soul Bind on each hit.',
    key: 'e',
    champion_id: 22
  },
  {
    name: 'Pixie',
    description: 'Summon a Pixie that follows you and mimics your Soul Bolt casts. Mimicked Soul Bolts deals reduced damage and healing.',
    key: 'r',
    champion_id: 22
  },
  {
    name: 'Ancestral Spirit',
    description: 'Become immaterial for 0.7s while summoning an Ancestral Spirit at target location. Deals 12 damage and inflicts Fading Snare to enemies and heals allies for 16 health. The spirit releases a second wave of energy after 2s that deals 36 damage and heals 24 health.',
    key: 'f',
    champion_id: 22
  }
]

const sirius = [
  {
    name: 'Crescent Strike',
    description: 'Strike to deal 8 damage to an enemy. Deals 22 damage and inflicts Weaken if weapon is fully charged. Your weapon charges over time.',
    key: 'lmb',
    champion_id: 23
  },
  {
    name: 'Crescent Gale',
    description: 'Launch a Crescent Gale that deals 24 damage and inflicts Snare.',
    key: 'ex-lmb',
    champion_id: 23
  },
  {
    name: 'Sunlight',
    description: 'Call down a beam of sunlight that heals the nearest ally for 14 health. Recharges faster for each nearby ally.',
    key: 'rmb',
    champion_id: 23
  },
  {
    name: 'Celestial Split',
    description: 'Teleport to the target location dealing 10 damage to nearby enemies and healing nearby allies for 10 health.',
    key: 'space',
    champion_id: 23
  },
  {
    name: 'Celestial Rift',
    description: 'Teleport to target location dealing 14 damage to nearby enemies, pulling them towards you and healing nearby allies for 14 health. Recharges your weapon.',
    key: 'ex-space',
    champion_id: 23
  },
  {
    name: 'Lunar Strike',
    description: 'Petrifies all enemies at target location. Enemies gain a shield that absorbs up to 20 damage and is unable to move or use abilities for 3.4s. This effect breaks when the shield breaks.',
    key: 'e',
    champion_id: 23
  },
  {
    name: 'Sunrise',
    description: 'Counter the next melee or projectile attack. Countering an attack teleports you to a new location, healing nearby allies for 12 health. Your weapon is also recharged.',
    key: 'q',
    champion_id: 23
  },
  {
    name: 'Astral Beam',
    description: 'Channel a beam of light that deals 100 damage to enemies, heals allies for 100 health, and heals self for 50 health.',
    key: 'f',
    champion_id: 23
  },
  {
    name: 'Prismatic Strike',
    description: 'Dash forward and strike. Deals 18 damage and inflicts Fading Snare.',
    key: 'r',
    champion_id: 23
  }
]

const alysia = [
  {
    name: 'Frost Bolt',
    description: 'Launch a cold bolt that deals 15 damage. Deals 2 bonus damage and adds Chill duration to enemies affected by Chill.',
    key: 'lmb',
    champion_id: 24
  },
  {
    name: 'Ice Lance',
    description: 'Projectile attack that deals 22 damage and inflicts Chill. Deals 6 bonus damage to enemies already affected by Chill.',
    key: 'rmb',
    champion_id: 24
  },
  {
    name: 'Arctic Wind',
    description: 'Soar gracefully to target location.',
    key: 'space',
    champion_id: 24
  },
  {
    name: 'Glacial Prism',
    description: 'Shield a target ally. Glacial Prism absorbs up to 24 damage for 1.4s. When it breaks, it explodes to inflict Chill on nearby enemies.',
    key: 'q',
    champion_id: 24
  },
  {
    name: 'Ice Block',
    description: 'Freeze target ally for 3.5s, making them immune to disables and blocking up to 40 damage. Ally cannot move or use abilities while frozen and heal for 30. Knocks back enemies and inflicts Chill when it expires.',
    key: 'ex-q',
    champion_id: 24
  },
  {
    name: 'Flash Freeze',
    description: 'Call down a frozen star at target location. After a 0.9s delay, it deals 15 damage and inflicts Chill to enemies in the area. Inflicts Freeze to enemies already affected by Chill.',
    key: 'e',
    champion_id: 24
  },
  {
    name: 'Snow Cone',
    description: 'Channel a cone of snow that deals 24 damage and inflicts Chill over 0.9s. Inflicts Freeze when you hit a Chilled target.',
    key: 'ex-e',
    champion_id: 24
  },
  {
    name: 'Ice Crown',
    description: 'Launch a fragile sculpture that knocks enemies back and blocks enemy attacks for 1.5s. When it breaks, it launches a cone of icicles that deals 20 damage and inflicts Chill.',
    key: 'r',
    champion_id: 24
  },
  {
    name: 'Frozen Gallery',
    description: 'Mark a path of frost in front of you. After a 0.9s delay, the patch deals 35 damage and inflicts Freeze to enemies hit, turning them into beautiful statues.',
    key: 'f',
    champion_id: 24
  },

]

const abilities = [
  ...bakko,
  ...croak,
  ...freya,
  ...raigon,
  ...rook,
  ...ruh_kaan,
  ...shifu,
  ...thorn,
  ...ashka,
  ...alysia,
  ...destiny,
  ...ezmo,
  ...iva,
  ...jade,
  ...jumong,
  ...taya,
  ...varesh,
  ...blossom,
  ...lucie,
  ...oldur,
  ...pearl,
  ...pestilus,
  ...poloma,
  ...sirius
]

module.exports = abilities
