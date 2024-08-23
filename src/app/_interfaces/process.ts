export interface Process {
  chronos: Chrono[];
  partNumber: string;
  designation: string;
  project: string;
}

export interface InitChrono {
  worker: string;
  measureUser: string;
  workorder: string;
  chronoSteps: ChronoStep[] | [];
}
export interface Chrono {
  id?: number;
  worker: string;
  measureUser: string;
  workorder: string;
  targetTime?: number;
  rank?: number;
  chronoSteps: ChronoStep[] | [];
}

export interface InitChronoStep {
  startTime: Date;
}
export class ChronoStep {
  startTime: Date = new Date();
  endTime?: Date;
  timeType?: TimeType;
  description?: string;
  photo?: string;
}

export type TimeType =
  | 'va'
  | 'deplacement'
  | 'attente'
  | 'recherche_info'
  | 'preparation'
  | 'changement_outils'
  | 'maintenance'
  | 'controle_qualite'
  | 'reglage'
  | 'formation'
  | 'transport_interne'
  | 'communication'
  | 'supervision'
  | 'mouvement_inutile'
  | 'stockage';
