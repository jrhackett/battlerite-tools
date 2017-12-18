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
    description: 'Leap towards target location and gain Shock Vault. Shock Vault: Movement speed is increased by 100% and then fades over 1.5s. Your next Bash hit consumes this effect to deal 6 bonus damage. Fading Snare: Target\'s Movement speed is reduced to 0% and gradually restores overtime.',
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
    name: 'Revolver Shot',
    description: 'Fire a revolver shot dealing 6 damage.',
    key: 'lmb',
    champion_id: 13
  },
  {
    name: 'Snipe',
    description: 'Fire a piercing bullet that deals 38 damage and inflicts Stun.',
    key: 'rmb',
    champion_id: 13
  },
  {
    name: 'Snap Shot',
    description: 'Fire a piercing bullet that deals 12 damage and inflicts Root.',
    key: 'ex-rmb',
    champion_id: 13
  },
  {
    name: 'Blast Vault',
    description: 'Detonate a grenade that launches you into the air. The explosion deals 12 damage and inflicts Stun on nearby enemies.',
    key: 'space',
    champion_id: 13
  },
  {
    name: 'Stealth',
    description: 'Turn invisible and gain Fading Haste. Removes movement impairing effects.',
    key: 'q',
    champion_id: 13
  },
  {
    name: 'Smoke Veil',
    description: 'Enter Stealth, gain a Fading Haste and grant all nearby allies a Shield that absorbs up to 32 damage.',
    key: 'ex-q',
    champion_id: 13
  },
  {
    name: 'Disabling Shot',
    description: 'Fire a shot that inflicts Snare and interrupts the next ability cast. Inflicts Silence when an ability is interrupted.',
    key: 'e',
    champion_id: 13
  },
  {
    name: 'Junk Shot',
    description: 'Fire piercing bullets in a cone dealing 18 damage and knocking enemies back.',
    key: 'r',
    champion_id: 13
  },
  {
    name: 'Explosive Shells',
    description: 'Fire 4 explosive shells dealing a total of 112 impact damage and 64 area damage.',
    key: 'lmb',
    champion_id: 13
  }
]

const jumong = [
  {
    name: 'Hunting Arrow',
    description: 'Fire an arrow that deals 16 damage. Successful hits charges your bow. A fully charged bow enables you to recast Steady Shot, Black Arrow or Rain Of Arrows.',
    key: 'lmb',
    champion_id: 14
  },
  {
    name: 'Guided Arrow',
    description: 'Fire an arrow that bounces up to 3 times. Deals 6/6/6 damage, heals self for 6/6/6 health and inflicts Seeker\'s Mark on each hit.',
    key: 'ex-lmb',
    champion_id: 14
  },
  {
    name: 'Steady Shot',
    description: 'Projectile attack that deals 28 damage.',
    key: 'rmb',
    champion_id: 14
  },
  {
    name: 'Seekers Arrow',
    description: 'Fire a piercing arrow that turns to hit the same target again after impact dealing 12/12/12 damage. Each hit charges your weapon.',
    key: 'ex-rmb',
    champion_id: 14
  },
  {
    name: 'Black Arrow',
    description: 'Dash towards move direction and fire an arrow that deals 8 damage.',
    key: 'space',
    champion_id: 14
  },
  {
    name: 'Rain Of Arrows',
    description: 'Fire arrows that rain down at target location dealing 20 damage over 2s and Snaring enemies. The first hit inflicts Seeker\'s Mark.',
    key: 'q',
    champion_id: 14
  },
  {
    name: 'Bear Trap',
    description: 'Place a trap that inflicts Root on all nearby enemies when the trap is triggered.',
    key: 'e',
    champion_id: 14
  },
  {
    name: 'Prowl',
    description: 'You become immaterial, movement speed increases by 100% and all movement impairing effects are removed. Running into an enemy inflicts Seeker\'s Mark.',
    key: 'r',
    champion_id: 14
  },
  {
    name: 'Dragon Slayer',
    description: 'Hold to charge an arrow for up to 2s to increase its damage and travel distance. The arrow deals 45-60 damage and pulls the target hit with it. Pulling a target into an enemy or into a wall deals 30 damage to the enemy hit and stuns both targets for 1.2s.',
    key: 'f',
    champion_id: 14
  }
]

const taya = [
  {
    name: 'Razor Boomerang',
    description: 'Throws a piercing boomerang that deals 14 damage and returns upon reaching maximum distance.',
    key: 'lmb',
    champion_id: 15
  },
  {
    name: 'X Strike',
    description: 'Throw two boomerangs in arc. Each boomerang deals 14 damage. Inflicts Stun on the way out and deals 6 bonus damage if you hit both boomerangs at max range.',
    key: 'rmb',
    champion_id: 15
  },
  {
    name: 'Spinning Boomerang',
    description: 'Throw a boomerang that deals 16 damage. The boomerang returns after a short delay dealing 24 damage and inflicting Stun on enemies hit.',
    key: 'ex-rmb',
    champion_id: 15
  },
  {
    name: 'Haste',
    description: 'Removes all movement impairing effects and increases movement speed by 80%. Razor Boomerang deals increases damage when Haste is active.',
    key: 'space',
    champion_id: 15
  },
  {
    name: 'Wind Strike',
    description: 'Spinning attack that deals 12 damage and knocks nearby enemies away.',
    key: 'q',
    champion_id: 15
  },
  {
    name: 'Zephyr',
    description: 'Dash forward and perform a spin attack that deals 16 damage and knocks nearby enemies away.',
    key: 'ex-q',
    champion_id: 15
  },
  {
    name: 'Wind Bomb',
    description: 'Throw a Wind Bomb to target location that pulls nearby enemies towards the center of the impact and inflicts Fading Snare.',
    key: 'e',
    champion_id: 15
  },
  {
    name: 'Tornado',
    description: 'Target ally is swept up into the air and becomes unhittable. Ally is tossed out of the Tornado when the effect ends.',
    key: 'r',
    champion_id: 15
  },
  {
    name: 'Companion Call',
    description: 'Your mount rushes towards you from target location dealing 26 damage to enemies in its path. You are granted a shield and instantly mount when it reaches you. As long as the shield holds you cannot be demounted and you can throw empowered Razor Boomerangs.',
    key: 'f',
    champion_id: 15
  }
]

const varesh = [
  {
    name: 'Hand of Corruption',
    description: 'Fire a projectile that deals 14 damage, heals self for 2 health and inflicts Corruption.',
    key: 'lmb',
    champion_id: 16
  },
  {
    name: 'Hand of Judgement',
    description: 'Fire a projectile that deals 22 damage and inflicts Judgement(Increases damage taken by 15% for 5s.',
    key: 'rmb',
    champion_id: 16
  },
  {
    name: 'Hand of Punishment',
    description: 'Fire a projectile that deals 14 damage, and heals you for 6 health and inflicts both Judgement and Corruption.',
    key: 'ex-rmb',
    champion_id: 16
  },
  {
    name: 'Inhibitors Guard',
    description: 'Shield a target ally. Shield absorbs up to 28 damage.',
    key: 'space',
    champion_id: 16
  },
  {
    name: 'Wuju',
    description: 'Counter the next melee or projectile attack. Countering an attack teleports you to a new location and knocks away enemies. Consumes Judgement to deal 8 bonus damage and to Silence the target. Consumes Corruption to heal you for 8 health and to Snare the target.',
    key: 'q',
    champion_id: 16
  },
  {
    name: 'Shatter',
    description: 'Spawn an exploding shard at target location dealing 12 area damage. Consumes Corruption to heal you for 8 health and to Snare the target. Consumes Judgement to deal 8 bonus damage and to Silence the target.',
    key: 'e',
    champion_id: 16
  },
  {
    name: 'Crush',
    description: 'Spawn an exploding shard at the target location dealing 12 area damage and knocking enemies back. Consumes Judgement to deal 8 bonus damage and to Silence the target. Consumes Corruption to heal you for 8 health and to Snare the target.',
    key: 'ex-e',
    champion_id: 16
  },
  {
    name: 'Kinetic Energy',
    description: 'Turn immaterial and dash forward to a target location. Spawns a Shatter shard at each enemy you pass through.',
    key: 'r',
    champion_id: 16
  },
  {
    name: 'Powers Combined',
    description: 'Dash forward in target direction dealing 24 damage and inflicting both Judgement and Corruption on all enemies hit. This effect repeats itself up to 3 times as long as an enemy is hit.',
    key: 'f',
    champion_id: 16
  }
]

const blossom = [
  {
    name: 'Thwack!',
    description: 'Throw an infused acorn that deals 10 damage. Deals 20 damage and inflicts Snare if weapon is fully charged.',
    key: 'lmb',
    champion_id: 17
  },
  {
    name: 'Nourish',
    description: 'Summon the vitalizing powers of nature to heal nearest ally for 12 health. Applies Butterflies.',
    key: 'rmb',
    champion_id: 17
  },
  {
    name: 'Hop',
    description: 'Hop towards target location and avoid incoming attacks. Grants invisibility, 20% increased movement speed and removes movement impairing effects upon landing. Invisibility fades when an ability is used.',
    key: 'space',
    champion_id: 17
  },
  {
    name: '',
    description: 'Dash forward and avoid incoming attacks. Hitting an enemy deals 25 damage and knocks them back. Grants invisibility, 20% increased movement speed and removes movement impairing effects upon landing. Invisibility fades when an ability is used.',
    key: 'ex-space',
    champion_id: 17
  },
  {
    name: 'Tree of Life',
    description: 'Summon an immovable Tree of Life sapling that heals nearby allies for 12 health and an additional 30 health over 5s.',
    key: 'q',
    champion_id: 17
  },
  {
    name: 'Forest Sanctuary',
    description: 'Summon an immovable Forest Guardian sapling that absorbs all the damage taken by nearby allies over 6s.',
    key: 'ex-q',
    champion_id: 17
  },
  {
    name: 'Boom Bloom',
    description: 'Launch a Boom Bloom seed that deals 15 damage. The seed will take root and bloom after a short delay to inflict Stun on all nearby enemies.',
    key: 'e',
    champion_id: 17
  },
  {
    name: 'Gust',
    description: 'Summon a barrier of wind that pushes enemies away, and reflects projectiles.',
    key: 'r',
    champion_id: 17
  },
  {
    name: 'Dance of the Dryads',
    description: 'Launch into the air and unleash 3 waves of energy upon landing. Each wave deals 20 damage and inflicts Weaken to enemies struck.',
    key: 'f',
    champion_id: 17
  }
]

const lucie = [
  {
    name: 'Toxic Bolt',
    description: 'Projectile attack that deals 12 damage and inflicts Toxic.',
    key: 'lmb',
    champion_id: 18
  },
  {
    name: 'Deadly Injection',
    description: 'Fire a bolt inflicting Deadly Injection (Reduces movement speed by 15% for 2s. Explodes dealing 24 damage to nearby enemies when the effect ends) on an enemy hit',
    key: 'ex-lmb',
    champion_id: 18
  },
  {
    name: 'Healing Potion',
    description: 'Throw a potion that heals the nearest ally for 14 health and applies Revitalize. Recharges faster for each nearby ally.',
    key: 'rmb',
    champion_id: 18
  },
  {
    name: 'Barrier',
    description: 'Shield a target ally. Barrier absorbs up to 50 damage.',
    key: 'space',
    champion_id: 18
  },
  {
    name: 'Clarity Potion',
    description: 'Throw a Clarity Potion to target location knocking nearby enemies away. The impact also removes positive effects from enemies and negative effects from allies.',
    key: 'q',
    champion_id: 18
  },
  {
    name: 'Panic Flask',
    description: 'Throw a flask dealing 12 damage and cause target to Panic.',
    key: 'e',
    champion_id: 18
  },
  {
    name: 'Petrify Bolt',
    description: 'Fire an exploding bolt that inflicts Petrify on enemies in the area.',
    key: 'ex-e',
    champion_id: 18
  },
  {
    name: 'Roll',
    description: 'Roll forward and avoid incoming attacks.',
    key: 'r',
    champion_id: 18
  },
  {
    name: 'Crippling Goo',
    description: 'Throw a vial of mixed chemicals to target location dealing 18 impact damage and Snaring enemies. Covers the ground in a crippling goo that deals 80 damage over a short duration.',
    key: 'f',
    champion_id: 18
  }
]

const oldur = [
  {
    name: 'Sands of Time',
    description: 'Launch a projectile that deals 12 damage and inflicts Time Bomb. Target takes 8 additional damage after 3.5s.',
    key: 'lmb',
    champion_id: 19
  },
  {
    name: 'Chrono Bolt',
    description: 'Launch a projectile that deals 16 damage and knocks target back. Consumes TIme Bomb, dealing all damage instantly.',
    key: 'ex-lmb',
    champion_id: 19
  },
  {
    name: 'Rejuvenating Sand',
    description: 'Throw rejuvenating sand that heals the nearest ally for 14 health. Recharges faster for each nearby ally.',
    key: 'rmb',
    champion_id: 19
  },
  {
    name: 'Shifting Sands',
    description: 'Turn into sand and travel in target direction. Allies passed through are healed for 12 health and enemies are dealt 8 damage.',
    key: 'space',
    champion_id: 19
  },
  {
    name: 'Time Bender',
    description: 'Negate projectile and melee attacks in front of you. Enemy melee attackers are knocked back and the first negated projectile will linger on within your hourglass, which you can launch by recasting this ability.',
    key: 'q',
    champion_id: 19
  },
  {
    name: 'Chronoflux',
    description: 'Place a time rift at target location. The rift reduces movement speed and reflects projectiles.',
    key: 'ex-q',
    champion_id: 19
  },
  {
    name: 'Quicksand',
    description: 'Throw an Hourglass to target location that explodes, dealing 16 damage and inflicting Fading Snare. Consumes Time Bomb, dealing all damage instantly.',
    key: 'e',
    champion_id: 19
  },
  {
    name: 'Stone Glass',
    description: 'Area attack that inflicts Stone Glass (inflicts petrify after 1s) and knocks the enemies back.',
    key: 'r',
    champion_id: 19
  },
  {
    name: 'Time Travel',
    description: 'Target ally\'s cooldowns are accelerated by 25%. Target is removed from the fight for a short duration before reappearing at target location, inflicting Stun on all nearby enemies for 2s.',
    key: 'f',
    champion_id: 19
  }
]

const pearl = [
  {
    name: 'Volatile Water',
    description: 'Launch a projectile that deals 15 damage. Deals 22 damage and Silences the enemy if your staff is fully charged.',
    key: 'lmb',
    champion_id: 20
  },
  {
    name: 'Overflow',
    description: 'Recharges your weapon.',
    key: 'ex-lmb',
    champion_id: 20
  },
  {
    name: 'Healing Wave',
    description: 'Channel a healing wave that heals the nearest ally for 21 health over 0.3s. Recharges faster for each nearby ally.',
    key: 'rmb',
    champion_id: 20
  },
  {
    name: 'Dive',
    description: 'Dive into a pool of water and travel to target location. Recharges your staff.',
    key: 'space',
    champion_id: 20
  },
  {
    name: 'Tidal Wave',
    description: 'Counter the next melee or projectile attack causing a tidal wave that deals 15 damage and knocks nearby enemies back. The wave also heals you for 12 health.',
    key: 'q',
    champion_id: 20
  },
  {
    name: 'Bubble Barrier',
    description: 'Spawn a bubble barrier at target location that slows enemy projectiles and enemies that enter the space.',
    key: 'e',
    champion_id: 20
  },
  {
    name: 'Unstable Bubble',
    description: 'Spawn a bubble barrier at target location that slows enemy projectiles and anyone that enters the space. Explodes when the effect ends dealing 26 damage and knocking enemies back.',
    key: 'ex-e',
    champion_id: 20
  },
  {
    name: 'Bubble Shield',
    description: 'Shield target ally removing all negative effects. Shield absorbs up to 26 damage.',
    key: 'r',
    champion_id: 20
  },
  {
    name: 'Jaws',
    description: 'Summon Jaws from the depths to devour enemies dealing 20 area damage. Devoured enemies are removed from battle until Jaws spews them out, dealing 20 damage to all enemies near the landing site. Can be recasted to redirect the landing site.',
    key: 'f',
    champion_id: 20
  }
]

const pestilus = [
  {
    name: 'Moth',
    description: 'Projectile Attack that deals 10 damage on enemy hit and heals 7 health on ally hit. Inflicts Moth and heals you for 3 health.',
    key: 'lmb',
    champion_id: 21
  },
  {
    name: 'Bloodsucker',
    description: 'Projectile attack that deals 30 damage on enemy hit, heals 30 health on ally hit and deals 15 damage to self. Cannot deal lethal damage to self. Hitting a Queen with Bloodsucker kills it, without dealing any damage to self.',
    key: 'rmb',
    champion_id: 21
  },
  {
    name: 'Vomit',
    description: 'Vomit upon enemies in front of you, dealing 8 damage and knocking enemies back. Inflicts Moth and Root.',
    key: 'ex-rmb',
    champion_id: 21
  },
  {
    name: 'Infest',
    description: 'Lunge at enemies or allies to Infest them for up to 2s. Heals allies and self for 8 health. Infested enemies take 25% more damage and infested allies absorb 75% damage. Can be recasted to cancel the effect.',
    key: 'space',
    champion_id: 21
  },
  {
    name: 'Queen',
    description: 'Summon a Queen that heals nearby allies for 16 health and 18 additional health over 5s. The Queen explodes after the duration, dealing 18 damage and Panic to nearby enemies. This effect does not occur if the Queen is killed by an enemy.',
    key: 'q',
    champion_id: 21
  },
  {
    name: 'Arachnophobia',
    description: 'Throw a spider egg that breaks on impact inflicting Panic on all nearby enemies.',
    key: 'e',
    champion_id: 21
  },
  {
    name: 'Brain Bug',
    description: 'Throw a Brain Bug that infests the enemy allowing you to control it\'s movement. ',
    key: 'ex-e',
    champion_id: 21
  },
  {
    name: 'Swarm',
    description: 'Shield a target ally. Swarm absorbs up to 28 damage and spreads Moth to nearby enemies if destroyed by damage.',
    key: 'r',
    champion_id: 21
  },
  {
    name: 'Scarab Pack',
    description: 'Summon and command 3 Scarabs to attack enemies or aid allies. A Scarab deals 26 damage on enemy hit and heals 26 health on ally hit. Scarabs stick to their target for a short duration. Deals 24 damage to enemy and heals 24 health to ally over 4s. Damage and healing done heals self for 24 health.',
    key: 'f',
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
