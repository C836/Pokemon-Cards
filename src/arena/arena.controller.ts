import { Controller, Post, Body } from "@nestjs/common";

import { ArenaService } from "./arena.service";

@Controller('arena')
export class ArenaController {
  constructor(
    private arenaService: ArenaService
  ) {}

  @Post('new')
  async create(): Promise<any> {
    return this.arenaService.create();
  }
}