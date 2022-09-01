import { Module } from '@nestjs/common';
import { ElasticService } from './elastic.service';
import { ElasticsearchModule } from '@nestjs/elasticsearch';

@Module({
  imports: [
    ElasticsearchModule.register({ node: 'http://localhost:9200' }), // host: 'localhost:9200', log: 'trace' }
  ],
  providers: [ElasticService],
  exports: [ElasticService],
})
export class ElasticModule {}
