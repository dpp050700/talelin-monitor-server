import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MonitorModule } from './monitor/monitor.module';
// import { ElasticsearchModule } from '@nestjs/elasticsearch';

@Module({
  imports: [
    MonitorModule,
    // ElasticsearchModule.register({ node: 'http://localhost:9200' }), // host: 'localhost:9200', log: 'trace' }
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
