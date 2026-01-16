import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrometheusController } from './prometheus/prometheus.controller';
import { PrometheusService } from './prometheus/prometheus.service';

@Module({
  imports: [],
  controllers: [AppController, PrometheusController],
  providers: [AppService, PrometheusService],
})
export class AppModule {}
