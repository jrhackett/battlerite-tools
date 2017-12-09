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
  { name: 'Static Hammers', description: 'Hittin an enemy with Static using Bash increases the duration of Static by 1s up to a maximum duration of 6s.', champion_id: 3 },
  { name: 'Tempest', description: 'Landing Storm Mac increases your movement speed by 35% for 2s.', champion_id: 3 },
  { name: 'Thunderbolt', description: 'Storm Mace deals 6 bonus damage to enemies already affected by Static and the Incapacitate duration is increased by 0.5s.', champion_id: 3 },
  { name: 'Twin Hammers', description: 'Storm Mace gains 1 ability charge but cooldown increases by 1s.', champion_id: 3 },
  { name: 'Electric Conduction', description: 'While the Spring effect is active, your next Bash also grants you a 14 health Shield for 3s.', champion_id: 3 },
  { name: 'Lightning Speed', description: 'Melee attack speed increases by 30% for the next 3 swings after using Spring.', champion_id: 3 },
  { name: 'Thundering Spring', description: 'Spring range increases by 25% and haste duration increases by 0.5s.', champion_id: 3 },
  { name: 'Hammer Time', description: 'Countering an attack with Electric Shield reduces the remaining cooldown of Thunderclap by 2.5s.', champion_id: 3 },
  { name: 'Overcharge', description: 'Countering an attack with Electric Shield inflicts Static on nearby enemies and applies a 16 health Shield on nearby allies.', champion_id: 3 },
  { name: 'Lightning Rod', description: 'Each target hit by Thunderclap grants you a 12 health Shield for 3s.', champion_id: 3 },
  { name: 'Rolling Thunder', description: 'Move forward during Thunderclap.', champion_id: 3 },
  { name: 'Torrent', description: 'Thunderclap deals 5 bonus damage and pulls enemies towards you.', champion_id: 3 },
  { name: 'Surge', description: 'Reduces Charged Strike cooldown by 3s and hitting at least one target grants 25% energy.', champion_id: 3 },
  { name: 'Thunderstruck', description: 'Lightning Strike applies a Stun for 1s.', champion_id: 3 },
  { name: 'Positive Charge', description: 'Your damage output increases by 15% when you have an active Electric Shield.', champion_id: 3 }
]

const raigon = [
  { name: 'Binding Light', description: 'Retribution inflicts a Fading Snare for 0.5s. Each weapon charge increases the duration by 0.3s.', champion_id: 4 },
  { name: 'Headlong Rush', description: 'The dash length of Retribution is increased by 20%.', champion_id: 4 },
  { name: 'Acrobatics', description: 'Decrease the minimum range of Heavenly Strike by 50% and increase the maximum range by 30%.', champion_id: 4 },
  { name: 'Hawk Dive', description: 'Heavenly Strike inflicts a 50% Weaken for 2s.', champion_id: 4 },
  { name: 'Overflowing Power', description: 'Hitting an enemy with Heavenly Strike grants you a charge of Slicing Winds. Your Sword Slash consumes a charge to send forth a Slicing Wind that deals 10 damage and heals you for 12 health on hit.', champion_id: 4 },
  { name: 'Royal Descent', description: 'Heavenly Strike deals 6 bonus damage and inflicts a Fading Snare for 1.2s.', champion_id: 4 },
  { name: 'Duelist', description: 'Each deflected attack heals you for 4 health. The first attack deflected grants you a charge of Slicing Winds. Your Sword Slash consumes a charge to send forth a Slicing Wind that deals 10 damage an heals you for 12 health on hit.', champion_id: 4 },
  { name: 'Invigorate', description: 'Move at 100% movement speed during Parry. Heal yourself and nearby allies for 8 when Parry ends.', champion_id: 4 },
  { name: 'Riposte', description: 'Parry ends with a Spinning Slash that hits twice, dealing 8 damage and inflicting a Stun for 0.3s.', champion_id: 4 },
  { name: 'Aerial Strike', description: 'Seismic Shock can be recast to leap to the airborne target and strike them, dealing 6damage and increasing air duration by 0.7s.', champion_id: 4 },
  { name: 'Perilous Height', description: 'When enemies hit by Seismic Shock land, they take 10 damage and nearby enemies take 16 damage.', champion_id: 4 },
  { name: 'Soaring Speed', description: 'Landing Seismic Shock grants you a 70% Fading Haste for 2.5s.', champion_id: 4 },
  { name: 'Dragon Mastery', description: 'Landing Dragon Palm allows you to recast it for 1.5s.', champion_id: 4 },
  { name: 'The Tiger and the Dragon', description: 'Wrath of the Tiger ends with a Heavenly Strike.', champion_id: 4 },
  { name: 'Agility', description: 'Increases movement speed by 10%.', champion_id: 4 }
]

const rook = [
  { name: 'Pummel Rush', description: 'Successful Pummel hits reduce the cooldown of Rush by 0.4s.', champion_id: 5 },
  { name: 'Rook Smash', description: 'Crushing Blow deals 6 bonus damage.', champion_id: 5 },
  { name: 'Squash', description: 'Crushing Blow inflicts a 0.5s Stun.', champion_id: 5 },
  { name: 'Weapon Break', description: 'Crushing Blow deals 2 bonus damage and enemies affected by Armor Break deal 33% less damage.', champion_id: 5 },
  { name: 'Endurance', description: 'Rush cooldown is reduced by 1s, using Rush without hitting an enemy reduces the cooldown by another 3s.', champion_id: 5 },
  { name: 'Frenzy', description: 'Landing Rush causes you to enter Berserk for 1.5s.', champion_id: 5 },
  { name: 'Raging Bull', description: 'Reduces cast time of Rush by 60% and it deals 4 bonus damage while Berserk is active.', champion_id: 5 },
  { name: 'Giant', description: 'Damage taken during Berserk is reduces by 30%.', champion_id: 5 },
  { name: 'Madness', description: 'Berserk movement speed bonus is increased by 30%.', champion_id: 5 },
  { name: 'War Cry', description: 'Casting Berserk reduces the movement speed of all nearby enemies by 50% for 3s.', champion_id: 5 },
  { name: 'Crag', description: 'Boulder Toss inflicts a 1s Fading Snare and cooldown is reduced by 1.5s.', champion_id: 5 },
  { name: 'Crumble', description: 'Boulder Toss deals 2 bonus damage and inflicts Armor Break.', champion_id: 5 },
  { name: 'Earthquake', description: 'Tremor inflicts Armor Break.', champion_id: 5 }
]

const ruh_kaan = [
  { name: 'Grim Edge', description: 'Charged Defiled Blade deals 5 bonus damage.', champion_id: 6 },
  { name: 'Leech Blade', description: 'Charged Defiled Blade heals you for 6 bonus health.', champion_id: 6 },
  { name: 'Taint', description: 'Striking a Cursed target heals you for 3 additional health.', champion_id: 6 },
  { name: 'Wicked Strike', description: 'The duration of Silence inflicted when hitting enemies with Defiled Blade is increased from 0.3s to 0.8s.', champion_id: 6 },
  { name: 'Affliction', description: 'Shadow Bolt inflicts Amplify increasing all damage the target receives by 15% for 3s.', champion_id: 6 },
  { name: 'Agony', description: 'Shadow Bolts deal 6 bonus damage.', champion_id: 6 },
  { name: 'Demonic Hunt', description: 'Sinister Strike gains 1 ability charge but cooldown increased by 2s.', champion_id: 6 },
  { name: 'Nether Chains', description: 'Sinister Strike inflicts Curse.', champion_id: 6 },
  { name: 'Gorge', description: 'Consume\'s cooldown is reduced by 1s. Consuming attacks further reduces the cooldown with 1.5/1/0.5s.', champion_id: 6 },
  { name: 'Shadow Fury', description: 'Absorbing an attack with Consume grants Shadowbolt 2 ability charges.', champion_id: 6 },
  { name: 'Cold Touch', description: 'Claw of the Wicked inflicts Curse.', champion_id: 6 },
  { name: 'Death Grip', description: 'Landing Claw of the Wicked reduces its cooldown by 2s.', champion_id: 6 },
  { name: 'Death\'s Embrace', description: 'Claw of the Wicked inflicts a 1.2s Root.', champion_id: 6 },
  { name: 'Tenacious Demon', description: 'Claw of the Wicked drains 3 more health and range is increased by 12%.', champion_id: 6 },
  { name: 'Hunger', description: 'Shadow Beast pulls all nearby enemies to your position when activated.', champion_id: 6 },
  { name: 'Shadow Prowl', description: 'Shadow Beast increased movement speed by 35%.', champion_id: 6 },
  { name: 'Night Stalker', description: 'Move 16% faster when your weapon is charged.', champion_id: 6 },
  { name: 'Reaper', description: 'Your weapon recharged 30% faster.', champion_id: 6 }
]

const shifu = [
  { name: 'Ceremonial Spear', description: 'Impale heals you for 2 health, and an additional 2 health for each weapon charge.', champion_id: 7 },
  { name: 'Spear Lunge', description: 'Increase the lunge distance of Impale by 75%', champion_id: 7 },
  { name: 'Thrust', description: 'Impale deals 2 additional damage and 1 bonus damage for each weapon charge.', champion_id: 7 },
  { name: 'Meditation', description: 'Activating Fleetfoot near an ally heals you and your ally for 14 health each.', champion_id: 7 },
  { name: 'Swift Feet', description: 'Fleetfoot movement speed bonus increases to 50% from 35% and the haste effect lasts for an extra 1.5s.', champion_id: 7 },
  { name: 'The Spear is the Way', description: 'Spear Slash attacks during Fleetfoot grant 8% bonus energy.', champion_id: 7 },
  { name: 'Ferocious Stance', description: 'Increases your maximum weapon charges by 1 and blocking an attack with Kunju grants 1 weapon charge.', champion_id: 7 },
  { name: 'Mantra', description: 'Your next Spear Slash used after blocking an attack with Kunju heals you for 14 health.', champion_id: 7 },
  { name: 'Poised to Strike', description: 'Your next Spear Slash used after blocking an attack with Kunju deals 10 bonus damage.', champion_id: 7 },
  { name: 'Dirty Tricks', description: 'Javelin inflicts a 1.2s Root.', champion_id: 7 },
  { name: 'Javelin Master', description: 'Javelin deals 4 bonus damage and range is increased by 10%.', champion_id: 7 },
  { name: 'Spear Slinger', description: 'Javelin cooldown is reduced by 1s and hitting a wall allows you to recast Javelin for 3s.', champion_id: 7 },
  { name: 'Whirling Blade', description: 'Tendon Swing deals 4 additional damage and grants 15% energy when hitting at least one target.', champion_id: 7 },
  { name: 'Spear Dance', description: 'Whirlwind movement speed bonus is increased to 50% from 20%.', champion_id: 7 }
]

const thorn = [
  { name: 'Branch Out', description: 'Root Grip range increases by 20%, drags target enemy closer and deals 4 bonus damage.', champion_id: 8 },
  { name: 'Regrowth', description: 'Hitting an enemy with Root Claw reduces incoming damage by 10% for 2.2s. Stacks up to 2 times.', champion_id: 8 },
  { name: 'Hamstring Briars', description: 'Thorns reduces the movement speed of target enemy by 20%.', champion_id: 8 },
  { name: 'Neurotoxin', description: 'Thorns reduxes target\'s damage and healing output by 20% for 2s.', champion_id: 8 },
  { name: 'Parasitic Stems', description: 'Thorns deals 4 bonus damage and heals you for 2 bonus health over its duration.', champion_id: 8 },
  { name: 'Deep Burrow', description: 'Turn invisible during Burrow.', champion_id: 8 },
  { name: 'Fearsome Uprootal', description: 'Landing Burrow grants you a shield absorbing 14 damage for every target hit, lasting up to 3s.', champion_id: 8 },
  { name: 'Impaling Roots', description: 'Moving under an enemy during Burrow sens Impaling Roots upwards, dealing 10 damage to struck enemy after a 0.2s delay.', champion_id: 8 },
  { name: 'Lurker', description: 'Burrow duration increases by 0.5s.', champion_id: 8 },
  { name: 'Grounding Grasp', description: 'Evil Clutch inflicts a 1s root.', champion_id: 8 },
  { name: 'Whiplash', description: 'Landing Evil Clutch grants a Recast to strike nearby enemies dealing 9 damage and inflicting Thorns.', champion_id: 8 },
  { name: 'Creeping Roots', description: 'Entangling Roots spreads towards nearby enemies when the effect is broekn, dealing 4 damage to enemies hits, inflicting Lesser Entangling Roots.', champion_id: 8 },
  { name: 'Sinister Sap', description: 'Entangling Roots cooldown is reduced by 1s and deals 8 damage over its duration.', champion_id: 8 },
  { name: 'Critical Backlash', description: 'Barbed Husk cooldown is reduced by 2s and inflicts Thorns upon enemies hit.', champion_id: 8 },
  { name: 'No Escape', description: 'Burrow underground at the end of Dead Roots.', champion_id: 8 }
]

const ashka = [
  { name: 'Combustion', description: 'Fire Storm bolts deal 2 bonus damage, 8 area damage and inflict Ignite on nearby enemies.', champion_id: 9 },
  { name: 'Heat', description: 'Fire Storm can be cast while moving at 50% movement speed and 30% while channeling.', champion_id: 9 },
  { name: 'Wild Fire', description: 'Fire Storm launches 1 additional projectile but cooldown increases by 1s.', champion_id: 9 },
  { name: 'Blaze', description: 'Your next fireball after using Searing Flight deals 2 bonus damage and inflicts Ignite.', champion_id: 9 },
  { name: 'Burning Feet', description: 'Searing Flight increases movement speed by 40% for 2s.', champion_id: 9 },
  { name: 'Fire Ward', description: 'Searing Flight grants a Shield that absorbs up to 15 damage. The shield lasts for 3s.', champion_id: 9 },
  { name: 'Ember Fire', description: 'Flamestrike heals you for 75% of damage done.', champion_id: 9 },
  { name: 'Eruption', description: 'The radius of Flamestrike is increases by 15% and cooldown is reduced by 1s.', champion_id: 9 },
  { name: 'Inferno', description: 'Flamestrike deals 8 bonus damage and inflicts Ignite.', champion_id: 9 },
  { name: 'Fire Punch', description: 'Molten Fist travel distance increases by 50% and knockback force increases by 25%.', champion_id: 9 },
  { name: 'Knockout', description: 'Knocking an enemy into a wall using Molten Fist inflicts Stun for 1.2s.', champion_id: 9 },
  { name: 'Lava Punch', description: 'Molten Fist cooldown is reduced by 1.5s and hitting an enemy further reduces the cooldown by 1.5s.', champion_id: 9 },
  { name: 'Conflagration', description: 'Fireballs traveling through Firewall turns into Fire Storm bolts.', champion_id: 9 },
  { name: 'Raging Fire', description: 'When Infernal Scorch ends you turn into Raging Fire causing your Fireballs to turn into Fire Storm bolts for the next 3s.', champion_id: 9 },
  { name: 'Inspiration', description: 'Increases your maximum energy by 25% and energy gained from abilities is increased by 10%.', champion_id: 9 },
  { name: 'Magma', description: 'Ignite deals 4 bonus damage when first applied and reduces target\'s movement speed by 10%.' , champion_id: 9 }
]

const destiny = [
  { name: 'Plasma Infusion', description: 'Firing Power Blaster through a Plasma Wall increases travel distance by 25% and grants you a shield absorbing 6 damage on hit.', champion_id: 10 },
  { name: 'Power Attachment', description: 'Charged Bolt deals 2 - 8 bonus damage.', champion_id: 10 },
  { name: 'System Shock', description: 'Charged Bolts that successfully interrupt have silence duration increased from 1s to 1.5s.', champion_id: 10 },
  { name: 'Dispatch', description: 'Magnetic Orb can be recast to leap to a new target location knocking enemies back when you land.', champion_id: 10 },
  { name: 'Globetrotter', description: 'The duration of Magnetic Orb increases by 0.5s and its movement speed increases by 30%.', champion_id: 10 },
  { name: 'Violent Revolution', description: 'Magnetic Orb deals 6 bonus damage and knockback increases by 20%.', champion_id: 10 },
  { name: 'Blast Processing', description: 'Sky Strike deals 8 bonus damage and its radius is increases by 15%.', champion_id: 10 },
  { name: 'Energy Conversion', description: 'Sky Strikegrants you a shield that aborbs 12 damage and aborbs an additional 8 damage per hit.', champion_id: 10 },
  { name: 'Lasting Plasma', description: 'Plasma Wall duration increases by 0.5s and cooldown is reduced by 1s.', champion_id: 10 },
  { name: 'Plasma Booster', description: 'Moving through a Plasma Wall increases an allied unit\'s movement speed by 30% for 3.5s.', champion_id: 10 },
  { name: 'Sizzle', description: 'An enemy passing through Plasma Wall takes 6 damage and is rooted for 1.2s.', champion_id: 10 },
  { name: 'Expansion Pack', description: 'Mega Sphere cooldown is reduced by 3s and Fading Snare duration increases by 1s.', champion_id: 10 },
  { name: 'Transformer', description: 'Maximum amount of Pinball bounces increases by 2 and transforms you into Magnetic Orb at the end of duration.', champion_id: 10 }
]

const ezmo = [
  { name: 'Exhaust', description: 'Landing 3 consecutive Arcane Fires on the same target inflicts a Fading Snare for 0.4s.', champion_id: 11 },
  { name: 'Collapse', description: 'Chaos Grip deals 2 - 8 bonus damage depending on charge-up.', champion_id: 11 },
  { name: 'Disruption', description: 'Chaos Grip inflicts Silence on target hit for 0.4s to 0.8s depending on charge-up.', champion_id: 11 },
  { name: 'Warlock\'s Grip', description: 'Increases the range of Chaos Grip by 25%.', champion_id: 11 },
  { name: 'Chaos Barrage', description: 'Displace grants 1 extra weapon charges when used.', champion_id: 11 },
  { name: 'Whizz', description: 'Using Displace grants a 50% fading haste that asts for 2s.', champion_id: 11 },
  { name: 'Wreak Havoc', description: 'Displace increases your Arcane Fire attack speed by 30% for 2.5s.', champion_id: 11 },
  { name: 'Arcane Barrage', description: 'Recasting Arcane Barrier consumes all weapon charges to fire a projectile. For each weapon charge consumed the projectile deals 4 damage and heals you for 4 health.', champion_id: 11 },
  { name: 'Imp Rush', description: 'Arcane Barrier increases your movement speed by 40% and cooldown is reduced by 1s.', champion_id: 11 },
  { name: 'Spell Eater', description: 'You gain double amount of charges when absorbing attacks with Arcane Barrier and you recover 4 health for every charge gained.', champion_id: 11 },
  { name: 'Bolted', description: 'Landing Shackle on an enemy grants 1 weapon charge and increases your Arcane Fire range by 50% until your next recharge.', champion_id: 11 },
  { name: 'Face Melt', description: 'Arcane Fire deals 2 bonus damage to enemies rooted by Shackle.', champion_id: 11 },
  { name: 'Undermine', description: 'Shackle reduces target\'s damage and healing output for 50% for 3s.', champion_id: 11 },
  { name: 'Tome of Restoration', description: 'Tom of Destruction leashes on to nearby allies healing them for 4 health per second.', champion_id: 11 },
  { name: 'Grimoire of Death', description: 'Grimoire of Chaos has 40% increased pull force and deals 10 additional damage.', champion_id: 11 }
]

const iva = [
  { name: 'Boom!', description: 'Rocket X-67 deals 4 bonus damage.', champion_id: 12 },
  { name: 'Heavy Rocket', description: 'On direct hits, Rocket X-67 inflicts a Fading Snare for 1.5s.', champion_id: 12 },
  { name: 'Stockpile', description: 'Rocket X-67 gains 1 ability charge but cooldown is increased by 1.5s.', champion_id: 12 },
  { name: 'Oil Blaster', description: 'Your next Boomstick after using Jet Pack inflicts Oil.', champion_id: 12 },
  { name: 'Rocket Boosters', description: 'Jet Pack increases movement speed by 50% for 2.5s.', champion_id: 12 },
  { name: 'U-Turn', description: 'After using Jet Pack you can re-activate it to fly back.', champion_id: 12 },
  { name: 'Blast Shield', description: 'Zap knocks nearby enemies back and grants a 30% Fading Haste that lasts 2s.', champion_id: 12 },
  { name: 'Durable Shield', description: 'Zap absorbs 8 more damage and 16 more damage on allies.', champion_id: 12 },
  { name: 'Hyperspeed', description: 'While affected by Zap your Boomstick has no cooldown and your reload duration is reduced by 50%.', champion_id: 12 },
  { name: 'Conductor', description: 'Tazer bounces towards an additional target.', champion_id: 12 },
  { name: 'EMP', description: 'Tazer dispels positive buffs from enemies in an area.', champion_id: 12 },
  { name: 'Igniting Spark', description: 'Tazer deals 8 damage and inflicts Burning Oil when triggered while the target is affected by Oil.', champion_id: 12 },
  { name: 'Tractor Pulse', description: 'Tractor Beam stuns all enemies caught in the beam for 0.5s when the effect and and cooldown is reduces by 3s.', champion_id: 12 },
  { name: 'All Systems Operational', description: 'Machine Gun inflicts Oil on all nearby enemies and launches a Rocket -67 when firing the last bullet.', champion_id: 12 },
  { name: 'Gunge', description: 'Oil further reduces movement speed by 10% and duration increases by 1.5s.', champion_id: 12 },
  { name: 'Inspiration', description: 'Increases your maximum energy by 25% and energy gained from abilities is increases by 10%.', champion_id: 12 }
]

const jade = [
  { name: 'Gunslinger', description: 'Revolver Shot hits reduce the cooldown of Stealth by 0.35s.', champion_id: 13 },
  { name: 'Deadly Focus', description: 'Snipe deals 6 bonus damage.', champion_id: 13 },
  { name: 'Shadow Shot', description: 'Snipe hits heals you for 8 health.', champion_id: 13 },
  { name: 'Surprise Shot', description: 'Snipe fired during Stealth stuns the enemy for an extra 0.5s.', champion_id: 13 },
  { name: 'Blasting Pistols', description: 'Your next 4 Revolver shots deal 2 bonus damage and grants 2 bonus energy after using Blast Vault.', champion_id: 13 },
  { name: 'Concussion Bomb', description: 'Blast Vault Stun duration is increased by 0.75s.', champion_id: 13 },
  { name: 'Explosive Jump', description: 'Blast Vault max-range increases by 20% and cooldown is reduced by 1s.', champion_id: 13 },
  { name: 'Ambush', description: 'Staleth reset the cooldown of Snipe and Stealth duration increases by 0.3s.', champion_id: 13 },
  { name: 'Farewell Present', description: 'Drop a bomb that explodes after 1s dealing 8 damage and inflicting a 1s Fading Snare when activating Stealth.', champion_id: 13 },
  { name: 'Through the Shadows', description: 'Stealth haste bonus increases by 40%.', champion_id: 13 },
  { name: 'Delight', description: 'Disabling Shot hits heal you for 8 health and successful interrupts heal you for 8 additonal health.', champion_id: 13 },
  { name: 'Desperado', description: 'Landing Disabling Shot instantly reloads Revolver Shot with 6 ammo.', champion_id: 13 },
  { name: 'Magic Bullet', description: 'Disabling Shot pierces enemies.', champion_id: 13 },
  { name: 'Black Powder', description: 'Junk Shot knockback force increases by 25% and knocking an enemy into a wall inflicts a 0.5s Stun.', champion_id: 13 },
  { name: 'Shrapnel', description: 'Explosive Shell projectiles inflcit a 50% Snare for 1.5s.', champion_id: 13 },
  { name: 'Agility', description: 'Increases movement speed by 10%.', champion_id: 13 }
]

const jumong = [
  { name: 'Perfect Shot', description: 'Steady Shot stuns the enemy for 0.5s.', champion_id: 14 },
  { name: 'Power Shot', description: 'Steady Shot deals 6 bonus damage and knock target back.', champion_id: 14 },
  { name: 'Rejuvenating Shot', description: 'Steady Shot heals you for 16 additional health when consuming Seeker\'s Mark.', champion_id: 14 },
  { name: 'Marksman', description: 'Black Arrow hits grant 2 weapon charges.', champion_id: 14 },
  { name: 'Precision', description: 'Black Arrow deals 4 bonus damage and grants 4% bonus energy.', champion_id: 14 },
  { name: 'Viper', description: 'Black Arrow grants a 50% Fading Haste that lasts for 1.5s.', champion_id: 14 },
  { name: 'Arrow Storm', description: 'Increases the radius of Rain of Arrows by 15% and damage by 4.', champion_id: 14 },
  { name: 'Crippling Hail', description: 'Increases the Snare effect of Rain of Arrows from 20% to 35%.', champion_id: 14 },
  { name: 'Deadly Trap', description: 'Your projectiles deal 4 more damage to enemies hit by Bear Trap for 2s.', champion_id: 14 },
  { name: 'Disabling Trap', description: 'Enemies caught in Bear Trap deal 40% reduced damage and receive 40% less healing.', champion_id: 14 },
  { name: 'Marked Prey', description: 'Bear Trap inflicts Seeker\'s Mark.', champion_id: 14 },
  { name: 'Trapper', description: 'Deploy one additional Bear Trap in front of first one.', champion_id: 14 },
  { name: 'Panther', description: 'Prowl duration is increased by 0.5s and cooldown is reduced by 3s.', champion_id: 14 },
  { name: 'Deadeye', description: 'Dragon Slayer deals up to 15 bonus damage.', champion_id: 14 },
  { name: 'Agility', description: 'Increases movement speed by 10%.', champion_id: 14 },
  { name: 'Death Mark', description: 'Consuming Seeker\'s Mark deals 4 bonus damage.', champion_id: 14 }
]

const taya = [
  { name: 'Breath of Air', description: 'During Haste, the first hit of each Razor Boomerang heals you for 6 health.', champion_id: 15 },
  { name: 'Cross Cut', description: 'X-Strike boomerangs deal 4 bonus damage, and an additional 4 damage where its boomerangs intersect.', champion_id: 15 },
  { name: 'Heavy Boomerangs', description: 'X-Strike stun duration increases by 0.2s, and is further increased by 0.2s where the boomerrangs intersect.', champion_id: 15 },
  { name: 'Surprise Attack', description: 'X-Strike can be used while moving at 60% movement speed during Haste.', champion_id: 15 },
  { name: 'Cold Wind', description: 'During Haste, your Razor Boomerangs inflicts a Fading Snare for 0.3s.', champion_id: 15 },
  { name: 'Tailwind', description: 'Haste increases movement speed of nearby allies by 50% for 2.2s.', champion_id: 15 },
  { name: 'Cyclone', description: 'Enemies that are knocked into a wall by Wind Strike are stunned for 0.8s.', champion_id: 15 },
  { name: 'Gale', description: 'Wind Strike spawns a gale that slows projectiles for up to 2s.', champion_id: 15 },
  { name: 'Wind Fury', description: 'Ladning Wind Strike while affected by Haste reapplies Haste.', champion_id: 15 },
  { name: 'Vortex', description: 'Wind Bomb spawns a vortex that pulls enemies towards its center for 2s.', champion_id: 15 },
  { name: 'Wind Stream', description: 'Increases the duration of wind streams spawned by Wind Bomb by 2s. The Haste duration is increased by 1s.', champion_id: 15 },
  { name: 'Tracking', description: 'Each Razor Boomerang hit while mounted deals 2 bonus damage and extends the shield duration by 0.8s up to 5 times.', champion_id: 15 },
  { name: 'Inspiration', description: 'Increases your maximum energy by 25% and energy gained from abilities is increased by 10%.', champion_id: 15 }
]

const varesh = [
  { name: 'Fervor', description: 'Consuming Corruption increases your movement speed by 8% for 5s. Can stack up to 3 times.', champion_id: 16 },
  { name: 'Unlimited Power', description: 'Fading Snare duration when Corruption is consumed by Shatter is increased from 1s to 1.5s, and Corruption is reapplied when consumed by Shatter.', champion_id: 16 },
  { name: 'Devastion', description: 'Hand of Judgement deals 3 bonus damage and hitting an enemy resets its cooldown.', champion_id: 16 },
  { name: 'Silence', description: 'Silence duration when Judgement is consumed increases to 1s from 0.5s.', champion_id: 16 },
  { name: 'Celerity', description: 'Inhibitor\'s Guard increases movement speed by 25% and damage output by 15%.', champion_id: 16 },
  { name: 'Wonder', description: 'Inhibitor\'s Guard absorbs 14 more damage.', champion_id: 16 },
  { name: 'Zeal', description: 'Applying Inhibitor\'s Guard consumes Corruption on nearby enemies inflciting Fading Snare for 1s. The shielded ally is healed 8 health for each Corruption consumed.', champion_id: 16 },
  { name: 'Return', description: 'If Wuju is triggered you can recast it within 1.5s.', champion_id: 16 },
  { name: 'Ruin', description: 'Wuju inflicts Judgement on enemies struck.', champion_id: 16 },
  { name: 'Fracture', description: 'Ability charges of Shatter increase to 3 from 2.', champion_id: 16 },
  { name: 'Inhibitor', description: 'Shatter can be cast while moving at 75% speed.', champion_id: 16 },
  { name: 'Law Bender', description: 'When Shatter consumes Corruption or Judgement the cooldown of Inhibitor\'s Guard is reduced by 1.5s.', champion_id: 16 },
  { name: 'Kinetic Judgement', description: 'Kinetic Energy inflicts Judgement.', champion_id: 16 },
  { name: 'Absolute Power', description: 'Powers Combined repeats itself 1 extra time.', champion_id: 16 },
  { name: 'Inspiration', description: 'Increases your maximum energy by 25% and energy gained from abilities is increased by 10%.', champion_id: 16 },
  { name: 'Synergy', description: 'If both Judgement and Corruption are active on a target, both are reapplied by Hand of Corruption/Judgement.', champion_id: 16 }
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
