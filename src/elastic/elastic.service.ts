import { Injectable } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';

@Injectable()
export class ElasticService {
  constructor(private readonly elasticsearchService: ElasticsearchService) {}
  async add(params) {
    await this.elasticsearchService.bulk({
      index: 'stability',
      body: [{ index: { _index: 'stability' } }, params],
    });
  }

  async query() {
    const data = await this.elasticsearchService.search({
      index: 'stability',
      body: {
        query: {
          bool: {
            filter: {
              range: {
                timestamp: {
                  gt: new Date().getTime() - 1000 * 60,
                },
              },
            },
          },
        },
      },
    });
    const res = {
      list: data.hits.hits.map((item) => item._source),
    };
    return res;
  }

  async delete() {
    await this.elasticsearchService.bulk({
      body: [{ delete: { _index: 'stability', _id: 'T66x94IB7_IQDCUorgk7' } }],
    });
  }
}
