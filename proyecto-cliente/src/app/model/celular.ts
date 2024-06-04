export interface Celular {
    marca: string;
    serial: string;
    fechaCompra: Date;
    anioLanzamiento: number;
    precio: number;
    sistemaOperativo: 'Android' | 'iOS';
    gama: 'Alta' | 'Media' | 'Baja';
  }
  