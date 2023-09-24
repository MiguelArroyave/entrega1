import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Anteproyecto} from '../models';
import {AnteproyectoRepository} from '../repositories';

export class AnteproyectoController {
  constructor(
    @repository(AnteproyectoRepository)
    public anteproyectoRepository : AnteproyectoRepository,
  ) {}

  @post('/anteproyectos')
  @response(200, {
    description: 'Anteproyecto model instance',
    content: {'application/json': {schema: getModelSchemaRef(Anteproyecto)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Anteproyecto, {
            title: 'NewAnteproyecto',
            exclude: ['id'],
          }),
        },
      },
    })
    anteproyecto: Omit<Anteproyecto, 'id'>,
  ): Promise<Anteproyecto> {
    return this.anteproyectoRepository.create(anteproyecto);
  }

  @get('/anteproyectos/count')
  @response(200, {
    description: 'Anteproyecto model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Anteproyecto) where?: Where<Anteproyecto>,
  ): Promise<Count> {
    return this.anteproyectoRepository.count(where);
  }

  @get('/anteproyectos')
  @response(200, {
    description: 'Array of Anteproyecto model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Anteproyecto, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Anteproyecto) filter?: Filter<Anteproyecto>,
  ): Promise<Anteproyecto[]> {
    return this.anteproyectoRepository.find(filter);
  }

  @patch('/anteproyectos')
  @response(200, {
    description: 'Anteproyecto PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Anteproyecto, {partial: true}),
        },
      },
    })
    anteproyecto: Anteproyecto,
    @param.where(Anteproyecto) where?: Where<Anteproyecto>,
  ): Promise<Count> {
    return this.anteproyectoRepository.updateAll(anteproyecto, where);
  }

  @get('/anteproyectos/{id}')
  @response(200, {
    description: 'Anteproyecto model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Anteproyecto, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Anteproyecto, {exclude: 'where'}) filter?: FilterExcludingWhere<Anteproyecto>
  ): Promise<Anteproyecto> {
    return this.anteproyectoRepository.findById(id, filter);
  }

  @patch('/anteproyectos/{id}')
  @response(204, {
    description: 'Anteproyecto PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Anteproyecto, {partial: true}),
        },
      },
    })
    anteproyecto: Anteproyecto,
  ): Promise<void> {
    await this.anteproyectoRepository.updateById(id, anteproyecto);
  }

  @put('/anteproyectos/{id}')
  @response(204, {
    description: 'Anteproyecto PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() anteproyecto: Anteproyecto,
  ): Promise<void> {
    await this.anteproyectoRepository.replaceById(id, anteproyecto);
  }

  @del('/anteproyectos/{id}')
  @response(204, {
    description: 'Anteproyecto DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.anteproyectoRepository.deleteById(id);
  }
}
