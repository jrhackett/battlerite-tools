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
    description: 'Strike with your sword to deal 10 damage. Successful hits charges your weapon and reduces the cooldown of Retribution by 1s. Each charge increases the power of Retribution.',
    key: 'lmb',
    champion_id: 4
  },
  {
    name: 'Slicing Winds',
    description: 'Infuse your blade with determination, causing your next 2 Sword Slashes to send forth Slicing Winds. Deals 10 damage to enemies and heals you for 14 health.',
    key: 'ex-lmb',
    champion_id: 4
  },
  {
    name: 'Retribution',
    description: 'Dash forward and strike to deal 11 damage and leech 9 health. Deals 3 bonus damage and leeches 2 bonus health per weapon charge.',
    key: 'rmb',
    champion_id: 4
  },
  {
    name: 'Heavenly Strike',
    description: 'Leap and strike with your sword to deal 20 damage in front of you upon landing.',
    key: 'space',
    champion_id: 4
  },
  {
    name: 'Parry',
    description: 'Deflect up to 5 attacks. Melee attacks trigger a Counterattack and projectiles are redirected towards your aim direction.',
    key: 'q',
    champion_id: 4
  },
  {
    name: 'Seismic Shock',
    description: 'Sunder the earth with your blade in a forward slash, dealing 10 and launching struck enemy up in the air for 1.4s.',
    key: 'e',
    champion_id: 4
  },
  {
    name: 'Tectonic Shock',
    description: 'Cleave the earth with your blade in a forward slash, dealing 10 damage and launching struck enemy up in the air for 1s. Inflicts Incapacitate for 2s upon landing.',
    key: 'ex-e',
    champion_id: 4
  },
  {
    name: 'Dragon Palm',
    description: 'Dash forward and palm strike an enemy. Deals 8 damage and knocks the enemy back, inflicting a Fading Snare. Knocking an enemy into a wall inflicts 10 additional damage.',
    key: 'r',
    champion_id: 4
  },
  {
    name: 'Wrath of the Tiger',
    description: 'Dash and strike an enemy, dealing 20 damage. Upon hit, slash all enemies in an area around you, dealing up to 84 damage over 3s. When the duration ends or upon Recast, dash towards your aim direction.',
    key: 'f',
    champion_id: 4
  }
]

const rook = [
  {
    name: 'Pummel',
    description: 'Strike in melee to deal 10 damage. Successful hits reduces the cooldown of Crushing Blow by 0.5s.',
    key: 'lmb',
    champion_id: 5
  },
  {
    name: 'Eat',
    description: 'Eat your meat and restore 16 health plus 24 health over 4s. Nomnomnomnom',
    key: 'ex-lmb',
    champion_id: 5
  },
  {
    name: 'Crushing Blow',
    description: 'Jump into the air and slam your mace into the ground. Deals 16 damage and inflicts Armor Break to enemies in the area.',
    key: 'rmb',
    champion_id: 5
  },
  {
    name: 'Meat Bolt',
    description: 'Throw a Meat Bolt that deals 24 damage and inflicts Snare.',
    key: 'ex-rmb',
    champion_id: 5
  },
  {
    name: 'Rush',
    description: 'Rush forward and slam into an enemy. Deals 12-24 damage and inflicts Stun. Damage increases with travel distance.',
    key: 'space',
    champion_id: 5
  },
  {
    name: 'Beserk',
    description: 'Counter the next melee or projectile attack. Enter a berserk rage when you successfully counter an attack increasing your attack speed, movement speed and making you temporarily invulnerable.',
    key: 'q',
    champion_id: 5
  },
  {
    name: 'Boulder Toss',
    description: 'Toss a boulder that deals 16 area damage and knocks enemies hit back.',
    key: 'e',
    champion_id: 5
  },
  {
    name: 'Smack',
    description: 'Smack enemies with your meat to deal 12 damage and knock them back. Knocking an enemy into a wall inflicts Incapacitate.',
    key: 'r',
    champion_id: 5
  },
  {
    name: 'Tremor',
    description: 'Jump into the air and slam your hammer into the ground 3 times. The shockwave deals 24/30/36 damage.',
    key: 'f',
    champion_id: 5
  }
]

const ruh_kaan = [
  {
    name: 'Defiled Blade',
    description: 'Strike to deal damage to an enemy. Deals 6 bonus damage, heals self for 12 health and inflicts Curse if weapon is charged. Your weapon charges over time.',
    key: 'lmb',
    champion_id: 6
  },
  {
    name: 'Shadowbolt',
    description: 'Launch a shadowy bolt of energy that deals 30 damage.',
    key: 'rmb',
    champion_id: 6
  },
  {
    name: 'Sinister Strike',
    description: 'Dash attack that deals 16 area damage.',
    key: 'space',
    champion_id: 6
  },
  {
    name: 'Reaping Scythe',
    description: 'Consume the life force of nearby enemies dealing 30 damage and leeching 30 health over 1.8s.',
    key: 'ex-space',
    champion_id: 6
  },
  {
    name: 'Consume',
    description: 'Negate projectile and melee attacks in front of you inflicting Snare on enemy melee attackers. Negating an attack charges your weapon and resets the cooldown of Shadowbolt.',
    key: 'q',
    champion_id: 6
  },
  {
    name: 'Claw of the Wicked',
    description: 'Launch a claw that drains 10 health and pulls an enemy towards you',
    key: 'e',
    champion_id: 6
  },
  {
    name: 'Claw of the Undying',
    description: 'Launch a claw that heals an ally for 24 health and pulls it towards you.',
    key: 'ex-e',
    champion_id: 6
  },
  {
    name: 'Nether Void',
    description: 'Warp to target location and unleash a shadow blast that inflicts Curse on all nearby enemies.',
    key: 'r',
    champion_id: 6
  },
  {
    name: 'Shadow Beast',
    description: 'Transform into a shadow beast. Replaces Defiled Blade with Fang of the Faceless (Swing your fangs in a direction, deals 20 damage and leeches 16 health.) and Shadowbolt with Shadow Claw (Lauch a claw that deals 20 damage, leeches 16 health and pulls an enemy towards you). Your other abilities, except Sinister Strike, are disabled when shapeshifting.',
    key: 'f',
    champion_id: 6
  }
]

const shifu = [
  {
    name: 'Spear Slash',
    description: 'Strike with your spear to deal 10 damage. Successful hits charges your weapon. Each charge increases the damage of Impale.',
    key: 'lmb',
    champion_id: 7
  },
  {
    name: 'Impale',
    description: 'Thrust your spear in a line to deal 9 damage to all enemies hit and 5 bonus damage per weapon charge. Deals less damage to multiple enemies.',
    key: 'rmb',
    champion_id: 7
  },
  {
    name: 'Fleetfoot',
    description: 'You become temporarily immaterial and your movement speed is increased by 35%. Removes negative effects.',
    key: 'space',
    champion_id: 7
  },
  {
    name: 'Tempest Rush',
    description: 'You become temporarily immaterial, your movement speed is increased by 50%, and your Spear Slash hits heal you for a flat amount. You also deal less damage during this effect.',
    key: 'ex-space',
    champion_id: 7
  },
  {
    name: 'Kunju',
    description: 'Counter the next melee or projectile attack. Heal yourself for 16 health, you become Immaterial and teleport behind your enemy when you counter an attack. Your next Spear Slash deals bonus damage.',
    key: 'q',
    champion_id: 7
  },
  {
    name: 'Javelin',
    description: 'Throw a javelin that deals 10 damage and leap towards the enemy. Javelin can be used to pull yourself to a wall.',
    key: 'e',
    champion_id: 7
  },
  {
    name: 'Harpoon',
    description: 'Throw a harpoon that deals damage and drags the enemy towards you and inflicts Snare. Harpoon can be used to pull yourself to a wall.',
    key: 'ex-e',
    champion_id: 7
  },
  {
    name: 'Tendon Swing',
    description: 'Swing your spear in a cone to deal 12 damage and inflict Incapacitate on all enemies in the area.',
    key: 'r',
    champion_id: 7
  },
  {
    name: 'Whirlwind',
    description: 'Spin into a whirlwind dance that deals 112 damage over 3s to nearby enemies, as well as granting you a Shield.',
    key: 'f',
    champion_id: 7
  }
]

const thorn = [
  {
    name: 'Root Claw',
    description: 'Swing your claws to deal 12 damage. Every third hit is a Root Grip that heals you for 8 health and pulls enemies closer.',
    key: 'lmb',
    champion_id: 8
  },
  {
    name: 'Leeching Thorns',
    description: 'Launch 2 leeching thorns, each dealing 12 damage and inflicting Thorns.',
    key: 'rmb',
    champion_id: 8
  },
  {
    name: 'Thorn Barrage',
    description: 'Launch 4 thorns, each dealing 10 damage and inflicting Thorns.',
    key: 'ex-rmb',
    champion_id: 8
  },
  {
    name: 'Burrow',
    description: 'Burrow into the ground and emerge from beneath after duration or upon recast, dealing 14 damage and inflicting Stun to enemies hit. Increases movement speed by 100% and removes any movement impairing effects.',
    key: 'space',
    champion_id: 8
  },
  {
    name: 'Root Network',
    description: 'Burrow yourself and nearby allies into the ground and emerge beneath your enemies dealing 14 and inflicting Stun.',
    key: 'ex-space',
    champion_id: 8
  },
  {
    name: 'Evil Clutch',
    description: 'Grow roots from the ground and pull them towards you, dragging along any enemies in their path and dealing 12 damage.',
    key: 'q',
    champion_id: 8
  },
  {
    name: 'Entangling Roots',
    description: 'Send whirling roots forward, dealing 8 damage and entangling target enemy, healing you for 16 health over 2.5s. Entangled target is granted a shield and is unable to move or cast abilities. Breaking the shield ends the effect.',
    key: 'e',
    champion_id: 8
  },
  {
    name: 'Barbed Husk',
    description: 'Shield a target ally, guarding them from damage and disables. Projectile and melee attacks absorbed by Barbed Husk trigger a volley of thorns that deals 12 damage to nearby enemies. While shielded, the target is unable to move or use abilities.',
    key: 'r',
    champion_id: 8
  },
  {
    name: 'Dead Roots',
    description: 'Burrow yourself and nearby allies into the ground and emerge beneath your enemies dealing 14 and inflicting Stun.',
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
    name: 'Power Blaster',
    description: 'Projectile attack dealing 16 damage. Successful hits reduces the cooldown of Charged Bolt by 1s.',
    key: 'lmb',
    champion_id: 10
  },
  {
    name: 'Transform Weapon',
    description: 'Toggle defensive weapon mode, granting a shield that absorbs 6 damage. Blaster deals 6 damage on enemy hit and applies a shield absorbing 10 damage on ally hit. Shields self for the same amount on both enemy and ally hits. Max shield value: 40.',
    key: 'ex-lmb',
    champion_id: 10
  },
  {
    name: 'Charged Bolt',
    description: 'Hold to charge a projectile for up to 1.2s to increase damage and distance. The projectile deals 8-32 damage and inflicts Spell Block.',
    key: 'rmb',
    champion_id: 10
  },
  {
    name: 'Magnetic Orb',
    description: 'Compress yourself into an orb to dispel movement impairing effects and to increase movement speed by 125%. Deals 16 damage and knocks the first enemy you bump into back.',
    key: 'space',
    champion_id: 10
  },
  {
    name: 'Sky Strike',
    description: 'Counter the next melee or projectile attack. Countering an attack vaults you into the air and fires a plasma blast that deals 22 damage and knocks enemies back.',
    key: 'q',
    champion_id: 10
  },
  {
    name: 'Plasma Wall',
    description: 'Deploy a Plasma Wall at target location. The barrier reduces projectile speed and snares enemies that pass through it.',
    key: 'e',
    champion_id: 10
  },
  {
    name: 'Lockdown',
    description: 'Summon a plasma prison at target location that stuns enemies that pass through it.',
    key: 'ex-e',
    champion_id: 10
  },
  {
    name: 'Mega Sphere',
    description: 'Fire a colossal sphere of volatile energies forward towards target position. Firing Power Blaster or Charged Bolt at Mega Sphere causes an explosion, dealing the fired projectile’s effects to all nearby targets along with 14 bonus damage and inflicting Fading Snare to enemies hit.',
    key: 'r',
    champion_id: 10
  },
  {
    name: 'Pinball',
    description: 'Compress yourself into an orb and dash forward at high speed. Deals 40 damage and throws enemies into the air for 0.6s. Bounces on walls up to a total of three times.',
    key: 'f',
    champion_id: 10
  }
]

const ezmo = [
  {
    name: 'Arcane Fire',
    description: 'Launch a bolt of arcane fire that deals 8 damage.',
    key: 'lmb',
    champion_id: 11
  },
  {
    name: 'Siphon Life',
    description: 'Channel a beam that deals 32 damage and drains 32 health.',
    key: 'ex-lmb',
    champion_id: 11
  },
  {
    name: 'Chaos Grip',
    description: 'Hold to charge a projectile for up to 1.3s to increase damage and distance. The projectile deals 12-20 damage, knocks nearby enemies back and pulls enemies far away towards you.',
    key: 'rmb',
    champion_id: 11
  },
  {
    name: 'Displace',
    description: 'Turn into arcane energy, travel to target location and recharge Arcane Fire. Can be recasted.',
    key: 'space',
    champion_id: 11
  },
  {
    name: 'Arcane Barrier',
    description: 'Negate projectile and melee attacks in front of you. Negating attacks recharges Arcane Fire. You receive 1 charge per 10 damage absorbed or 1 charge for each none damaging source.',
    key: 'q',
    champion_id: 11
  },
  {
    name: 'Arcane Ward',
    description: 'Shield a target ally. Shield absorbs up to 24 damage and restores up to 6 weapon charges if destroyed by damage.',
    key: 'ex-q',
    champion_id: 11
  },
  {
    name: 'Shackle',
    description: 'Strike an area to deal 8 area damage and Root enemies in place.',
    key: 'e',
    champion_id: 11
  },
  {
    name: 'Tome of Destruction',
    description: 'Summon the Tome of Destruction at target location. The tome mimics your Arcane Fire attacks.',
    key: 'r',
    champion_id: 11
  },
  {
    name: 'Grimoire of Chaos',
    description: 'Throw the Grimoire of Chaos to target location. The power of the grimoire draws nearby enemies towards it. It explodes after 2s dealing 55 damage.',
    key: 'f',
    champion_id: 11
  }
]

const iva = [
  {
    name: 'Boomstick',
    description: 'Fire 4 bullets in a cone, each dealing 4 damage.',
    key: 'lmb',
    champion_id: 12
  },
  {
    name: 'Flame Thrower',
    description: 'Channel a flame thrower that deals 50 damage and Ignites enemies affected by Oil.',
    key: 'ex-lmb',
    champion_id: 12
  },
  {
    name: 'ROCKET X-67',
    description: 'Launch a rocket that deals 26 damage on impact and 12 area damage. The explosion Ignites enemies affected by Oil.',
    key: 'rmb',
    champion_id: 12
  },
  {
    name: 'Jet Pack',
    description: 'Fire up your Jet Pack and travel towards target location. Inflicts Oil on enemies below you.',
    key: 'space',
    champion_id: 12
  },
  {
    name: 'Zap',
    description: 'Remove all negative effects and Shield a target ally. Shield absorbs up to 28 damage and increases movement speed by 30%.',
    key: 'q',
    champion_id: 12
  },
  {
    name: 'Tazer',
    description: 'Fire a shot that interrupts the next ability cast and dispels all positive effects. Inflicts Stun when an ability is interrupted.',
    key: 'e',
    champion_id: 12
  },
  {
    name: 'Concussion Shot',
    description: 'Fire a shock shell that deals 10 damage and inflicts Incapacitate.',
    key: 'ex-e',
    champion_id: 12
  },
  {
    name: 'Tractor Beam',
    description: 'Channel a beam that drags enemies towards your position while rendering you immune to melee and projectile attacks from that direction.',
    key: 'r',
    champion_id: 12
  },
  {
    name: 'Machine Gun',
    description: 'Fire a series of piercing projectiles dealing a total of 140 damage.',
    key: 'f',
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
