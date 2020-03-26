import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  @EventPattern('messa_printed')
  async handleMessaPrinted(data: Record<string, unknown>) {
    console.log(data.tex);
  }
}
