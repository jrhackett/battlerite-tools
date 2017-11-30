const bakko = [
  { name: 'Axe and Shield', description: 'War Axe hits reduxes the cooldown of Bulwark by 1s.', champion_id: 1 },
  { name: 'Hamstring', description: 'Blood Axe inflicts a Fading Snare for 1.2s.', champion_id: 1 },
  { name: 'Howling Axes', description: 'Blood Axe cooldown is reduced by 1s if the axe hits.', champion_id: 1 },
  { name: 'The Red Axe', description: 'Blood Axe heals you for 4 health plus 2 health for each weapon charge.', champion_id: 1 },
  { name: 'Warlord\'s Axe', description: 'Blood Axe deals 2 bonus damage and an additional 1 bonus damage for each weapon charge.', champion_id: 1 },
  { name: 'Adrenaline Rush', description: 'Valiant Leap causes your next War Axe attack to deal 8 bonus damage.', champion_id: 1 },
  { name: 'Bravery', description: 'Valiant Leap grants 33% damage reduction to self and nearby allies for 2.5s.', champion_id: 1 },
  { name: 'Heroic Leap', description: 'Valiant Leap desls 3 bonus damage and max-range increases by 20%.', champion_id: 1 },
  { name: 'Mobile Defence', description: 'Bulwark increases movement speed by 60%.', champion_id: 1 },
  { name: 'Shield Bash', description: 'Bulwark can be recast to perform a Shield Bash that deals 4 damage and inflicts a 50% Weaken that lasts 2s.', champion_id: 1 },
  { name: 'Adrenaline Slam', description: 'Shield Dash causes your next War Axe to deal 8 bonus damage.', champion_id: 1 },
  { name: 'Raging Ram', description: 'The cooldown of Shield Dash is reduced by 1s and travel distance is increased by 25%.', champion_id: 1 },
  { name: 'Wall Slam', description: 'Shield Dash deals 2 bonus damage and inflicts a 0.6s Stun when slamming an enemy into a wall.', champion_id: 1 },
  { name: 'Rampage', description: 'War Shout increases attack speed of War Axe & Blood Axes by 33% as well as movement speed by 15% for 4s.', champion_id: 1 },
  { name: 'Mammoth Stomp', description: 'Heroic Charge stun duration is increased by 0.75s.', champion_id: 1 },
  { name: 'Inspiration', description: 'Increases your maximum energy by 25% and energy gained from abilities is increased by 10%.', champion_id: 1 }
]

const croak = [
  { name: 'Lethal Toxins', description: 'Toxin Muck deals 2 bonus damage and Toxin deals 4 bonus damage.', champion_id: 2 },
  { name: 'Sever Toxin', description: 'Toxin reduces the target\'s movement speed by 12% and heals you for 8 additional health.', champion_id: 2 },
  { name: 'Spit Spit Spit', description: 'Toxin Muck gains 1 ability charge and the cooldown is increased by 1s.', champion_id: 2 },
  { name: 'frog Strike', description: 'Using Frog Leap from Camouflage increases the damage by 2 and inflicts a Stun that lasts 1s.', champion_id: 2 },
  { name: 'Jungle Toad', description: 'Frog Leap hits heal you for 14 health.', champion_id: 2 },
  { name: 'Precision Leap', description: 'Decrease the minimum range of Frog Leap by 15% and increase the maximum range by 10%.', champion_id: 2 },
  { name: 'Triple Strike', description: 'Frog Leap causes your next 3 Blad Flurry strikes to deal 2 additional damage each.', champion_id: 2 },
  { name: 'Cut to the Chase', description: 'Camouflage duration increased by 1s.', champion_id: 2 },
  { name: 'Venom Strike', description: 'Blade Flurry attacks made from Camouflage inflicts a venom that explodes after 2s dealing 10 area damage.', champion_id: 2 },
  { name: 'Frog Slice', description: 'Using Noxious Lunge during Camouflage increases the range by 75% and inflicts a 50% Weaken that lasts for 2.5s.', champion_id: 2 },
  { name: 'Noxious Reaction', description: 'Noxious Lunge inflicts a 1s Root and reapplies Toxin.', champion_id: 2 },
  { name: 'Trickery', description: 'Noxious Lunge hits reduces the cooldown of Camouflage by 1.5s.', champion_id: 2 },
  { name: 'Frog Frenzy', description: 'Toxin Blades bonus damage is increased by 1 and it increases the attack speed of your next 6 Blade Flurry swings.', champion_id: 2 },
  { name: 'Momentum', description: 'After using Venom Wind movement speed is increased by 40% for 4s.', champion_id: 2 }
]

const freya = [
  { name: 'Static Hammers', description: '', champion_id: 3 },
  { name: 'Tempest', description: '', champion_id: 3 },
  { name: 'Thunderbolt', description: '', champion_id: 3 },
  { name: 'Twin Hammers', description: '', champion_id: 3 },
  { name: 'Electric Conduction', description: '', champion_id: 3 },
  { name: 'Lightning Speed', description: '', champion_id: 3 },
  { name: 'Thundering Spring', description: '', champion_id: 3 },
  { name: 'Hammer Time', description: '', champion_id: 3 },
  { name: 'Overcharge', description: '', champion_id: 3 },
  { name: 'Lightning Rod', description: '', champion_id: 3 },
  { name: 'Rolling Thunder', description: '', champion_id: 3 },
  { name: 'Torrent', description: '', champion_id: 3 },
  { name: 'Surge', description: '', champion_id: 3 },
  { name: 'Thunderstruck', description: '', champion_id: 3 },
  { name: 'Positive Charge', description: '', champion_id: 3 }
]

const raigon = [
  { name: 'Binding Light', description: '', champion_id: 4 },
  { name: 'Headlong Rush', description: '', champion_id: 4 },
  { name: 'Acrobatics', description: '', champion_id: 4 },
  { name: 'Hawk Dive', description: '', champion_id: 4 },
  { name: 'Overflowing Power', description: '', champion_id: 4 },
  { name: 'Royal Descent', description: '', champion_id: 4 },
  { name: 'Duelist', description: '', champion_id: 4 },
  { name: 'Invigorate', description: '', champion_id: 4 },
  { name: 'Riposte', description: '', champion_id: 4 },
  { name: 'Aerial Strike', description: '', champion_id: 4 },
  { name: 'Perilous Height', description: '', champion_id: 4 },
  { name: 'Soaring Speed', description: '', champion_id: 4 },
  { name: 'Dragon Mastery', description: '', champion_id: 4 },
  { name: 'The Tiger and the Dragon', description: '', champion_id: 4 },
  { name: 'Agility', description: '', champion_id: 4 }
]

const rook = [
  { name: 'Pummel Rush', description: '', champion_id: 5 },
  { name: 'Rook Smash', description: '', champion_id: 5 },
  { name: 'Squash', description: '', champion_id: 5 },
  { name: 'Weapon Break', description: '', champion_id: 5 },
  { name: 'Endurance', description: '', champion_id: 5 },
  { name: 'Frenzy', description: '', champion_id: 5 },
  { name: 'Raging Bull', description: '', champion_id: 5 },
  { name: 'Giant', description: '', champion_id: 5 },
  { name: 'Madness', description: '', champion_id: 5 },
  { name: 'War Cry', description: '', champion_id: 5 },
  { name: 'Crag', description: '', champion_id: 5 },
  { name: 'Crumble', description: '', champion_id: 5 },
  { name: 'Earthquake', description: '', champion_id: 5 }
]

const ruh_kaan = [
  { name: 'Grim Edge', description: '', champion_id: 6 },
  { name: 'Leech Blade', description: '', champion_id: 6 },
  { name: 'Taint', description: '', champion_id: 6 },
  { name: 'Wicked Strike', description: '', champion_id: 6 },
  { name: 'Affliction', description: '', champion_id: 6 },
  { name: 'Agony', description: '', champion_id: 6 },
  { name: 'Demonic Hunt', description: '', champion_id: 6 },
  { name: 'Nether Chains', description: '', champion_id: 6 },
  { name: 'Gorge', description: '', champion_id: 6 },
  { name: 'Shadow Fury', description: '', champion_id: 6 },
  { name: 'Cold Touch', description: '', champion_id: 6 },
  { name: 'Death Grip', description: '', champion_id: 6 },
  { name: 'Death\'s Embrace', description: '', champion_id: 6 },
  { name: 'Tenacious Demon', description: '', champion_id: 6 },
  { name: 'Hunger', description: '', champion_id: 6 },
  { name: 'Shadow Prowl', description: '', champion_id: 6 },
  { name: 'Night Stalker', description: '', champion_id: 6 },
  { name: 'Reaper', description: '', champion_id: 6 }
]

const shifu = [
  { name: 'Ceremonial Spear', description: '', champion_id: 7 },
  { name: 'Spear Lunge', description: '', champion_id: 7 },
  { name: 'Thrust', description: '', champion_id: 7 },
  { name: 'Meditation', description: '', champion_id: 7 },
  { name: 'Swift Feet', description: '', champion_id: 7 },
  { name: 'The Spear is the Way', description: '', champion_id: 7 },
  { name: 'Ferocious Stance', description: '', champion_id: 7 },
  { name: 'Mantra', description: '', champion_id: 7 },
  { name: 'Poised to Strike', description: '', champion_id: 7 },
  { name: 'Dirty Tricks', description: '', champion_id: 7 },
  { name: 'Javelin Master', description: '', champion_id: 7 },
  { name: 'Spear Slinger', description: '', champion_id: 7 },
  { name: 'Whirling Blade', description: '', champion_id: 7 },
  { name: 'Spear Dance', description: '', champion_id: 7 }
]

const thorn = [
  { name: 'Branch Out', description: '', champion_id: 8 },
  { name: 'Regrowth', description: '', champion_id: 8 },
  { name: 'Hamstring Briars', description: '', champion_id: 8 },
  { name: 'Neurotoxin', description: '', champion_id: 8 },
  { name: 'Parasitic Stems', description: '', champion_id: 8 },
  { name: 'Deep Burrow', description: '', champion_id: 8 },
  { name: 'Fearsome Uprootal', description: '', champion_id: 8 },
  { name: 'Impaling Roots', description: '', champion_id: 8 },
  { name: 'Lurker', description: '', champion_id: 8 },
  { name: 'Grounding Grasp', description: '', champion_id: 8 },
  { name: 'Whiplash', description: '', champion_id: 8 },
  { name: 'Creeping Roots', description: '', champion_id: 8 },
  { name: 'Sinister Sap', description: '', champion_id: 8 },
  { name: 'Critical Backlash', description: '', champion_id: 8 },
  { name: 'No Escape', description: '', champion_id: 8 }
]

const ashka = [
  { name: 'Combustion', description: '', champion_id: 9 },
  { name: 'Heat', description: '', champion_id: 9 },
  { name: 'Wild Fire', description: '', champion_id: 9 },
  { name: 'Blaze', description: '', champion_id: 9 },
  { name: 'Burning Feet', description: '', champion_id: 9 },
  { name: 'Fire Ward', description: '', champion_id: 9 },
  { name: 'Ember Fire', description: '', champion_id: 9 },
  { name: 'Eruption', description: '', champion_id: 9 },
  { name: 'Inferno', description: '', champion_id: 9 },
  { name: 'Fire Punch', description: '', champion_id: 9 },
  { name: 'Knockout', description: '', champion_id: 9 },
  { name: 'Lava Punch', description: '', champion_id: 9 },
  { name: 'Conflagration', description: '', champion_id: 9 },
  { name: 'Raging Fire', description: '', champion_id: 9 },
  { name: 'Inspiration', description: '', champion_id: 9 },
  { name: 'Magma', description: '', champion_id: 9 }
]

const destiny = [
  { name: 'Plasma Infusion', description: '', champion_id: 10 },
  { name: 'Power Attachment', description: '', champion_id: 10 },
  { name: 'System Shock', description: '', champion_id: 10 },
  { name: 'Dispatch', description: '', champion_id: 10 },
  { name: 'Globetrotter', description: '', champion_id: 10 },
  { name: 'Violent Revolution', description: '', champion_id: 10 },
  { name: 'Blast Processing', description: '', champion_id: 10 },
  { name: 'Energy Conversion', description: '', champion_id: 10 },
  { name: 'Lasting Plasma', description: '', champion_id: 10 },
  { name: 'Plasma Booster', description: '', champion_id: 10 },
  { name: 'Sizzle', description: '', champion_id: 10 },
  { name: 'Expansion Pack', description: '', champion_id: 10 },
  { name: 'Transformer', description: '', champion_id: 10 }
]

const ezmo = [
  { name: 'Exhaust', description: '', champion_id: 11 },
  { name: 'Collapse', description: '', champion_id: 11 },
  { name: 'Disruption', description: '', champion_id: 11 },
  { name: 'Warlock\'s Grip', description: '', champion_id: 11 },
  { name: 'Chaos Barrage', description: '', champion_id: 11 },
  { name: 'Whizz', description: '', champion_id: 11 },
  { name: 'Wreak Havoc', description: '', champion_id: 11 },
  { name: 'Arcane Barrage', description: '', champion_id: 11 },
  { name: 'Imp Rush', description: '', champion_id: 11 },
  { name: 'Spell Eater', description: '', champion_id: 11 },
  { name: 'Bolted', description: '', champion_id: 11 },
  { name: 'Face Melt', description: '', champion_id: 11 },
  { name: 'Undermine', description: '', champion_id: 11 },
  { name: 'Tome of Restoration', description: '', champion_id: 11 },
  { name: 'Grimoire of Death', description: '', champion_id: 11 }
]

const iva = [
  { name: 'Boom!', description: '', champion_id: 12 },
  { name: 'Heavy Rocket', description: '', champion_id: 12 },
  { name: 'Stockpile', description: '', champion_id: 12 },
  { name: 'Oil Blaster', description: '', champion_id: 12 },
  { name: 'Rocket Boosters', description: '', champion_id: 12 },
  { name: 'U-Turn', description: '', champion_id: 12 },
  { name: 'Blast Shield', description: '', champion_id: 12 },
  { name: 'Durable Shield', description: '', champion_id: 12 },
  { name: 'Hyperspeed', description: '', champion_id: 12 },
  { name: 'Conductor', description: '', champion_id: 12 },
  { name: 'EMP', description: '', champion_id: 12 },
  { name: 'Igniting Spark', description: '', champion_id: 12 },
  { name: 'Tractor Pulse', description: '', champion_id: 12 },
  { name: 'All Systems Operational', description: '', champion_id: 12 },
  { name: 'Gunge', description: '', champion_id: 12 },
  { name: 'Inspiration', description: '', champion_id: 12 }
]

const jade = [
  { name: 'Gunslinger', description: '', champion_id: 13 },
  { name: 'Deadly Focus', description: '', champion_id: 13 },
  { name: 'Shadow Shot', description: '', champion_id: 13 },
  { name: 'Surprise Shot', description: '', champion_id: 13 },
  { name: 'Blasting Pistols', description: '', champion_id: 13 },
  { name: 'Concussion Bomb', description: '', champion_id: 13 },
  { name: 'Explosive Jump', description: '', champion_id: 13 },
  { name: 'Ambush', description: '', champion_id: 13 },
  { name: 'Farewell Present', description: '', champion_id: 13 },
  { name: 'Through the Shadows', description: '', champion_id: 13 },
  { name: 'Delight', description: '', champion_id: 13 },
  { name: 'Desperado', description: '', champion_id: 13 },
  { name: 'Magic Bullet', description: '', champion_id: 13 },
  { name: 'Black Powder', description: '', champion_id: 13 },
  { name: 'Shrapnel', description: '', champion_id: 13 },
  { name: 'Agility', description: '', champion_id: 13 }
]

const jumong = [
  { name: 'Perfect Shot', description: '', champion_id: 14 },
  { name: 'Power Shot', description: '', champion_id: 14 },
  { name: 'Rejuvenating Shot', description: '', champion_id: 14 },
  { name: 'Marksman', description: '', champion_id: 14 },
  { name: 'Precision', description: '', champion_id: 14 },
  { name: 'Viper', description: '', champion_id: 14 },
  { name: 'Arrow Storm', description: '', champion_id: 14 },
  { name: 'Crippling Hail', description: '', champion_id: 14 },
  { name: 'Deadly Trap', description: '', champion_id: 14 },
  { name: 'Disabling Trap', description: '', champion_id: 14 },
  { name: 'Marked Prey', description: '', champion_id: 14 },
  { name: 'Trapper', description: '', champion_id: 14 },
  { name: 'Panther', description: '', champion_id: 14 },
  { name: 'Deadeye', description: '', champion_id: 14 },
  { name: 'Agility', description: '', champion_id: 14 },
  { name: 'Death Mark', description: '', champion_id: 14 }
]

const taya = [
  { name: 'Breath of Air', description: '', champion_id: 15 },
  { name: 'Cross Cut', description: '', champion_id: 15 },
  { name: 'Heavy Boomerangs', description: '', champion_id: 15 },
  { name: 'Surprise Attack', description: '', champion_id: 15 },
  { name: 'Cold Wind', description: '', champion_id: 15 },
  { name: 'Tailwind', description: '', champion_id: 15 },
  { name: 'Cyclone', description: '', champion_id: 15 },
  { name: 'Gale', description: '', champion_id: 15 },
  { name: 'Wind Fury', description: '', champion_id: 15 },
  { name: 'Vortex', description: '', champion_id: 15 },
  { name: 'Wind Stream', description: '', champion_id: 15 },
  { name: 'Tracking', description: '', champion_id: 15 },
  { name: 'Inspiration', description: '', champion_id: 15 }
]

const varesh = [
  { name: 'Fervor', description: '', champion_id: 16 },
  { name: 'Unlimited Power', description: '', champion_id: 16 },
  { name: 'Devastion', description: '', champion_id: 16 },
  { name: 'Silence', description: '', champion_id: 16 },
  { name: 'Celerity', description: '', champion_id: 16 },
  { name: 'Wonder', description: '', champion_id: 16 },
  { name: 'Zeal', description: '', champion_id: 16 },
  { name: 'Return', description: '', champion_id: 16 },
  { name: 'Ruin', description: '', champion_id: 16 },
  { name: 'Fracture', description: '', champion_id: 16 },
  { name: 'Inhibitor', description: '', champion_id: 16 },
  { name: 'Law Bender', description: '', champion_id: 16 },
  { name: 'Kinetic Judgement', description: '', champion_id: 16 },
  { name: 'Absolute Power', description: '', champion_id: 16 },
  { name: 'Inspiration', description: '', champion_id: 16 },
  { name: 'Synergy', description: '', champion_id: 16 }
]

const blossom = [
  { name: 'Nature\'s Cycle', description: '', champion_id: 17 },
  { name: 'Weakening Pitch', description: '', champion_id: 17 },
  { name: 'Fluttering Grace', description: '', champion_id: 17 },
  { name: 'Kindhearted', description: '', champion_id: 17 },
  { name: 'Cautious', description: '', champion_id: 17 },
  { name: 'Gift of Nature', description: '', champion_id: 17 },
  { name: 'Hop and Skip!', description: '', champion_id: 17 },
  { name: 'Nature\'s Presence', description: '', champion_id: 17 },
  { name: 'Bountiful Tree', description: '', champion_id: 17 },
  { name: 'Healthful Bark', description: '', champion_id: 17 },
  { name: 'Refreshing Seed', description: '', champion_id: 17 },
  { name: 'Pollen', description: '', champion_id: 17 },
  { name: 'Spring Growth', description: '', champion_id: 17 },
  { name: 'Puff', description: '', champion_id: 17 },
  { name: 'Growing Power', description: '', champion_id: 17 }
]

const lucie = [
  { name: 'Vampiric Toxin', description: '', champion_id: 18 },
  { name: 'Weakening Toxin', description: '', champion_id: 18 },
  { name: 'Companion Potion', description: '', champion_id: 18 },
  { name: 'Stimulant', description: '', champion_id: 18 },
  { name: 'Alacrity', description: '', champion_id: 18 },
  { name: 'Blast Shield', description: '', champion_id: 18 },
  { name: 'Siege Barrier', description: '', champion_id: 18 },
  { name: 'Adhesive Component', description: '', champion_id: 18 },
  { name: 'Potency', description: '', champion_id: 18 },
  { name: 'Toxin Reaction', description: '', champion_id: 18 },
  { name: 'Chaos', description: '', champion_id: 18 },
  { name: 'Deadly Brew', description: '', champion_id: 18 },
  { name: 'Hysteria', description: '', champion_id: 18 },
  { name: 'Swift Roll', description: '', champion_id: 18 },
  { name: 'Sticky Goo', description: '', champion_id: 18 },
  { name: 'Agility', description: '', champion_id: 18 }
]

const oldur = [
  { name: 'Dehydration', description: '', champion_id: 19 },
  { name: 'Shared Fate', description: '', champion_id: 19 },
  { name: 'Renew', description: '', champion_id: 19 },
  { name: 'Rewind', description: '', champion_id: 19 },
  { name: 'Chrono Shift', description: '', champion_id: 19 },
  { name: 'Passage of Time', description: '', champion_id: 19 },
  { name: 'Recreate', description: '', champion_id: 19 },
  { name: 'Sand Storm', description: '', champion_id: 19 },
  { name: 'Drain', description: '', champion_id: 19 },
  { name: 'Stolen Power', description: '', champion_id: 19 },
  { name: 'Time Walker', description: '', champion_id: 19 },
  { name: 'Sand Struck', description: '', champion_id: 19 },
  { name: 'Sand Tomb', description: '', champion_id: 19 },
  { name: 'Time Burst', description: '', champion_id: 19 },
  { name: 'Reversal', description: '', champion_id: 19 }
]

const pearl = [
  { name: 'Rippling Waters', description: '', champion_id: 20 },
  { name: 'Soaking Wet', description: '', champion_id: 20 },
  { name: 'Splash Damage', description: '', champion_id: 20 },
  { name: 'Fountain', description: '', champion_id: 20 },
  { name: 'Ocean Tide', description: '', champion_id: 20 },
  { name: 'Riptide', description: '', champion_id: 20 },
  { name: 'Spring Water', description: '', champion_id: 20 },
  { name: 'Gush', description: '', champion_id: 20 },
  { name: 'Sea Bubble', description: '', champion_id: 20 },
  { name: 'Tsunami', description: '', champion_id: 20 },
  { name: 'Ocean Sage', description: '', champion_id: 20 },
  { name: 'Tasty Fish', description: '', champion_id: 20 },
  { name: 'Water Walk', description: '', champion_id: 20 },
  { name: 'Terror from the Deep', description: '', champion_id: 20 }
]

const pestilus = [
  { name: 'Overlord', description: '', champion_id: 21 },
  { name: 'Blood Leecher', description: '', champion_id: 21 },
  { name: 'Colony', description: '', champion_id: 21 },
  { name: 'Insectivore', description: '', champion_id: 21 },
  { name: 'Defiler', description: '', champion_id: 21 },
  { name: 'Scourge', description: '', champion_id: 21 },
  { name: 'Spores', description: '', champion_id: 21 },
  { name: 'Broodmother', description: '', champion_id: 21 },
  { name: 'Hive Mind', description: '', champion_id: 21 },
  { name: 'Sacrifice', description: '', champion_id: 21 },
  { name: 'Swarm Queen', description: '', champion_id: 21 },
  { name: 'Egg Carrier', description: '', champion_id: 21 },
  { name: 'Spiderling Venom', description: '', champion_id: 21 },
  { name: 'Lord of the Flies', description: '', champion_id: 21 }
]

const poloma = [
  { name: 'Dark Souls', description: '', champion_id: 22 },
  { name: 'Shimmering Bond', description: '', champion_id: 22 },
  { name: 'Into the Realm', description: '', champion_id: 22 },
  { name: 'Soul Theft', description: '', champion_id: 22 },
  { name: 'Specter', description: '', champion_id: 22 },
  { name: 'Spirit Walker', description: '', champion_id: 22 },
  { name: 'Ghostly Strike', description: '', champion_id: 22 },
  { name: 'Phantasm', description: '', champion_id: 22 },
  { name: 'Vengeful Spirit', description: '', champion_id: 22 },
  { name: 'Soul Essence', description: '', champion_id: 22 },
  { name: 'Spiritual Wind', description: '', champion_id: 22 },
  { name: 'Affection', description: '', champion_id: 22 },
  { name: 'Dire Wolf', description: '', champion_id: 22 },
  { name: 'Silver Fang', description: '', champion_id: 22 },
  { name: 'Pixie Dust', description: '', champion_id: 22 },
  { name: 'Condemn', description: '', champion_id: 22 },
  { name: 'Equilibrium', description: '', champion_id: 22 }
]

const sirius = [
  { name: 'Debilitating Slash', description: '', champion_id: 23 },
  { name: 'Lethal Slash', description: '', champion_id: 23 },
  { name: 'Saros Cycle', description: '', champion_id: 23 },
  { name: 'Radiance', description: '', champion_id: 23 },
  { name: 'Sunbath', description: '', champion_id: 23 },
  { name: 'Cosmic Reach', description: '', champion_id: 23 },
  { name: 'Sunwell', description: '', champion_id: 23 },
  { name: 'Daybreak', description: '', champion_id: 23 },
  { name: 'Illumination', description: '', champion_id: 23 },
  { name: 'Sunscreen', description: '', champion_id: 23 },
  { name: 'Lunar Charge', description: '', champion_id: 23 },
  { name: 'Lunatic', description: '', champion_id: 23 },
  { name: 'Moon Stone', description: '', champion_id: 23 },
  { name: 'Celestial Cycle', description: '', champion_id: 23 },
  { name: 'Gravity', description: '', champion_id: 23 }
]

const battlerites = [
  ...bakko,
  ...croak,
  ...freya,
  ...raigon,
  ...rook,
  ...ruh_kaan,
  ...shifu,
  ...thorn,
  ...ashka,
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

module.exports = battlerites
