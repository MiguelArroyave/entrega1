import {Entity, model, property} from '@loopback/repository';

@model()
export class Anteproyecto extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
  })
  descripciones?: string;

  @property({
    type: 'string',
  })
  plateamiento?: string;

  @property({
    type: 'string',
  })
  hipotesis?: string;

  @property({
    type: 'string',
  })
  objetivo?: string;

  @property({
    type: 'string',
  })
  justificacion?: string;

  @property({
    type: 'string',
  })
  titulo?: string;

  @property({
    type: 'string',
  })
  estado?: string;

  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  idusuario?: string;

  constructor(data?: Partial<Anteproyecto>) {
    super(data);
  }
}

export interface AnteproyectoRelations {
  // describe navigational properties here
}

export type AnteproyectoWithRelations = Anteproyecto & AnteproyectoRelations;
