export interface Process {
    chronos: Chrono[]
    partNumber: string
    designation: string
    project: string
}


export interface Chrono {
    id: number;
    worker: string;
    measureUser: string;
    workorder: string;
    targetTime?: number;
    rank?: number;
    chronoSteps: ChronoStep[];
}
export class ChronoStep {
    startTime: Date;
    endTime: Date;
    timeType: TimeType;
    description: string;
    photo?: string;
}



export type TimeType =
    'va' |
    'deplacement' |
    'attente' |
    'recherche_info' |
    'preparation' |
    'changement_outils' |
    'maintenance' |
    'controle_qualite' |
    'reglage' |
    'formation' |
    'transport_interne' |
    'communication' |
    'supervision' |
    'mouvement_inutile' |
    'stockage';