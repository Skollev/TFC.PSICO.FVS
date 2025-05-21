export interface Usuario {
    id: number;
    version: number;
    nombre: string;
    apellido: string;
    foto: string;
    correo: string;
    username: string;
    password: string;
    rol: string;
}

export interface InformeSesion {
    id: number;
    version: number;
    demanda: string;
    tarea: string;
}

export interface InterfazCita {
    id: number;
    version: number;
    fecha: string;
    link: string;
    confirmada: boolean;
    pagado: boolean;
    paciente: Paciente | null;
    terapeuta: Terapeuta | null;
    informeSesion: InformeSesion | null;
}

export interface Paciente extends Usuario {
    consentimiento: boolean;
    citas: InterfazCita[] | null;
}

export interface Terapeuta extends Usuario {
    colegiacion: string;
    citas: InterfazCita[] | null;
}