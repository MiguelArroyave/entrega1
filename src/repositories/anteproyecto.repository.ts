import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Anteproyecto, AnteproyectoRelations} from '../models';

export class AnteproyectoRepository extends DefaultCrudRepository<
  Anteproyecto,
  typeof Anteproyecto.prototype.id,
  AnteproyectoRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Anteproyecto, dataSource);
  }
}
