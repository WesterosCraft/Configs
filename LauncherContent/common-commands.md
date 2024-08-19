# Command Guide

## Utility Commands

- `/fly` allows you to fly in any gamemode
- `/nv` toggles night vision
- `/ptime set <time>` changes the time of day, but only for you.
- `/pweather <weather>` changes the weather, but only for you.
- `/tpa <player_name>` Teleport to a player. They must accept your request.
- `/tpahere` Request someone teleport to you.
- `/gma` Switch to Adventure mode
- `/gmsp` Switch to Spectator mode

## Exploration

- `/warp <location>` warps you to a specific location. For example, `/warp winterfell`
- `/listwarps` This command lists all the warps we have, across every world.
- `/mw tp <worldname>` This command warps you to the spawn of one of our worlds.
- `/mw list` Lists all available worlds to warp to.
- `/mw spawn` Warps to the spawn of the current world you are in.

## Communication

- `/tell <player_name> <message>` Privately message someone. `/w` and `/msg` do the same thing.

## Mod Commands

The WesterosCraft modpack contains several mods to help the project in various ways. Some of these mods have commands of their own. This list is NOT comprehensive, but includes links to the mods for you to look further into how they work.

### [WAILA](https://www.curseforge.com/minecraft/mc-mods/wthit-forge) (What Am I Looking At)

Displays a tooltip at the top enter of your screen when looking at a block.

- `/wailac config open` Lets you configure the mod
- `/wailac overlay <true | false>` Toggles the mod overlay.

### [WesterosTools](https://github.com/WesterosCraft/WesterosTools)

This mod aims to add a few tools to help make your building experience easier. For each of these, be sure you have an item currently selected. You can bind these tools to different items and keep them in the toolbar.

- `/wctools cycler` Identical to the current cycler tool except that it automatically sets unconnect=true when applicable.

- `/wctools extrude` A variant of the cycler tool that toggles the blockstate for a wall, fence, pane, or stair block in a particular direction - either on the side facing the user for right click, or the opposite side for left click.

- `/wctools paint <blockset>`
  A paint tool that can paint over any block set with another block set. Use the command to select from all available blocksets and use right click to paint! You can also left click on a blockset to switch your palette.

### [GriefDefender](https://docs.griefdefender.com/)

GriefDefender is a pretty robust land claiming and anti-griefing plugin used on the WesterosCraft server. It's used primarily to manage plots inside the plot world we call Testeros.

#### Receiving A Plot

If you don't have a plot already, reach out to a moderator or admin to get you one. For now, we are limiting plots to one per builder. This can change in the future.

#### Managing Your Plot

Once you've had a plot made for you, you should have permissions to build on your plot (mods are exempt from this). You have control over several things on your plot, including who can access it. Some useful commands are below:

**Allow another player to build on your plot:**

While standing in your plot, run the command /gd trust player <player_name> <type>

Enter the player name you want to give access to on your plot, and then the type. Types include:

- **public** - which trusts all users to access your plot
- **accessor** - which grants a player access to interact with all blocks except their inventory
- **container** - which grants a player access to interact with all blocks including inventory
- **builder** - grants a player access to build on your plot

So, to grant player geeberry access to build on your plot, you would run this command while standing in it: /gd trust player geeberry builder

You can also allow access to entire groups using the similar syntax. `/gd trust group <group_name> <type>`

### [Schembrush](https://github.com/WesterosCraft/SchematicBrush)

This mod helps place `.schematic` files (like bushes, rocks and trees) easily

To use, equip a tool (like a stick for fishing pole) and type `/schbr &<schemset>` and right-click

- `/schlist` or `/schlist <pagenumber>` lists schems. Theres a lot of them
- `/schset get <schemset>` to get all the schematics within a particular schemset

Builder rank should have access to the brush itself

Terraformers + Mods should have access to create, modify, and delete schems
