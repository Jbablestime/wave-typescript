import {
  ChatInputApplicationCommandData,
  CommandInteraction,
  CommandInteractionOptionResolver,
  Guild,
  GuildMember,
  PermissionResolvable,
} from "discord.js";
import { ExtendedClient } from "../structures/Client";

export interface ExtendedInteraction extends CommandInteraction {
  member: GuildMember;
}

export interface ExtendedGuild extends Guild {
  guild: Guild;
}

interface RunOptions {
  interaction: ExtendedInteraction;
  opts: CommandInteractionOptionResolver;
  guild: ExtendedGuild;
  client: ExtendedClient;
}

type RunFunction = (options: RunOptions) => any;

export type CommandType = {
  userPermissions?: PermissionResolvable[];
  clientPermissions?: PermissionResolvable[];
  devOnly?: boolean;
  run: RunFunction;
} & ChatInputApplicationCommandData;
