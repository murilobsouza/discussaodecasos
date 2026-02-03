
export interface CaseStage {
  id: number;
  name: string;
  content: string;
  goal: string;
}

export interface ClinicalCase {
  id: number;
  title: string;
  difficulty: 'Fácil' | 'Médio' | 'Difícil';
  stages: CaseStage[];
  finalDiagnosis: string;
  explanation: string;
}

export interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export interface StageFeedback {
  feedback: string;
  score: number;
  justification: string;
  redFlags: string[];
  isReadyForNext: boolean;
}

export enum AppState {
  HOME = 'HOME',
  CASE_DISCUSSION = 'CASE_DISCUSSION',
  RESULTS = 'RESULTS'
}
