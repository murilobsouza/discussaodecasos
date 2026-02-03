
import React, { useState, useEffect } from 'react';
import { CLINICAL_CASES } from './constants/cases';
import { ClinicalCase, AppState, Message } from './types';
import { getFeedback } from './services/geminiService';

// --- Components ---

const Navbar = () => (
  <nav className="bg-blue-900 text-white p-4 shadow-md sticky top-0 z-50">
    <div className="max-container mx-auto flex justify-between items-center">
      <h1 className="text-xl font-bold flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>
        OftalmoEdu
      </h1>
      <span className="text-sm font-medium opacity-80 hidden sm:block">Discussão de Casos Clínicos</span>
    </div>
  </nav>
);

const Footer = () => (
  <footer className="bg-gray-100 border-t p-6 mt-12 text-center text-gray-600">
    <p className="mb-2">© {new Date().getFullYear()} OftalmoEdu - Portal Educacional</p>
    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-2 rounded-lg inline-block text-sm max-w-2xl">
      <strong>Aviso:</strong> Uso exclusivamente educacional para acadêmicos de medicina.
    </div>
  </footer>
);

// --- Main App ---

export default function App() {
  const [appState, setAppState] = useState<AppState>(AppState.HOME);
  const [currentCase, setCurrentCase] = useState<ClinicalCase | null>(null);
  const [currentStageIndex, setCurrentStageIndex] = useState(0);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isAutoAdvancing, setIsAutoAdvancing] = useState(false);
  const [totalScore, setTotalScore] = useState(0);
  const [stageScores, setStageScores] = useState<number[]>([]);

  const startCase = (c: ClinicalCase) => {
    setCurrentCase(c);
    setCurrentStageIndex(0);
    setMessages([]);
    setTotalScore(0);
    setStageScores(new Array(c.stages.length).fill(0));
    setAppState(AppState.CASE_DISCUSSION);
    setIsAutoAdvancing(false);
  };

  const startRandomCase = () => {
    const randomIndex = Math.floor(Math.random() * CLINICAL_CASES.length);
    startCase(CLINICAL_CASES[randomIndex]);
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading || isAutoAdvancing || !currentCase) return;

    const userMsg: Message = { role: 'user', content: inputValue };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInputValue('');
    setIsLoading(true);

    const feedback = await getFeedback(currentCase, currentStageIndex, inputValue, newMessages);
    
    const aiMsg: Message = { role: 'assistant', content: feedback.feedback };
    setMessages([...newMessages, aiMsg]);
    
    // Update stage score
    const newStageScores = [...stageScores];
    if (feedback.score > newStageScores[currentStageIndex]) {
      newStageScores[currentStageIndex] = feedback.score;
      setStageScores(newStageScores);
      setTotalScore(newStageScores.reduce((a, b) => a + b, 0));
    }

    setIsLoading(false);

    // Automatic Progression Logic
    if (feedback.isReadyForNext) {
      setIsAutoAdvancing(true);
      setTimeout(() => {
        if (currentStageIndex < currentCase.stages.length - 1) {
          setCurrentStageIndex(prev => prev + 1);
          setMessages([]);
          setIsAutoAdvancing(false);
        } else {
          setAppState(AppState.RESULTS);
          setIsAutoAdvancing(false);
        }
      }, 4500); // 4.5 seconds delay to allow reading the feedback
    }
  };

  const renderHome = () => (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-blue-900 mb-4">Discussão de Casos Clínicos – Oftalmologia</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          O tutor de IA guiará a evolução do caso automaticamente conforme seu desempenho.
        </p>
        <button 
          onClick={startRandomCase}
          className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all transform hover:scale-105"
        >
          Iniciar Caso Aleatório
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {CLINICAL_CASES.map((c, index) => (
          <div key={c.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer text-center group" onClick={() => startCase(c)}>
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <span className="text-xl font-bold">{index + 1}</span>
            </div>
            <h3 className="font-bold text-gray-800">Caso {index + 1}</h3>
            <span className={`text-[10px] font-bold uppercase tracking-wider ${
              c.difficulty === 'Fácil' ? 'text-green-500' : 
              c.difficulty === 'Médio' ? 'text-yellow-500' : 
              'text-red-500'
            }`}>
              {c.difficulty}
            </span>
          </div>
        ))}
      </div>
    </div>
  );

  const renderDiscussion = () => {
    if (!currentCase) return null;
    const progress = ((currentStageIndex + 1) / currentCase.stages.length) * 100;

    return (
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8 min-h-[calc(100vh-160px)]">
        {/* Left Panel */}
        <div className="lg:w-1/2 flex flex-col gap-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 flex-1">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-blue-900 font-bold uppercase tracking-wider text-xs">Informações Clínicas</h3>
              <span className="text-sm text-gray-500">Etapa {currentStageIndex + 1} de {currentCase.stages.length}</span>
            </div>
            <div className="w-full bg-gray-100 h-2 rounded-full mb-6">
              <div className="bg-blue-600 h-2 rounded-full transition-all duration-500" style={{ width: `${progress}%` }}></div>
            </div>
            
            <div className="space-y-6 overflow-y-auto max-h-[550px] pr-2">
              {currentCase.stages.slice(0, currentStageIndex + 1).map((s, idx) => (
                <div key={s.id} className={`p-4 rounded-lg border-l-4 ${idx === currentStageIndex ? 'bg-blue-50 border-blue-500' : 'bg-gray-50 border-gray-300 opacity-60'}`}>
                  <h4 className="font-bold text-sm text-blue-800 mb-1">{s.name}</h4>
                  <p className="text-gray-700 leading-relaxed text-sm">{s.content}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-indigo-900 text-white p-5 rounded-2xl shadow-lg flex justify-between items-center">
            <div>
              <span className="text-indigo-200 text-[10px] uppercase font-bold tracking-widest block">Pontuação Acumulada</span>
              <span className="text-2xl font-black">{totalScore} <span className="text-sm opacity-50">/ {currentCase.stages.length * 3}</span></span>
            </div>
            {isAutoAdvancing && (
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg border border-white/20 animate-pulse">
                <span className="text-xs font-bold uppercase">Progredindo...</span>
              </div>
            )}
          </div>
        </div>

        {/* Right Panel */}
        <div className="lg:w-1/2 flex flex-col bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden h-[600px] lg:h-auto">
          <div className="bg-gray-50 p-4 border-b flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-inner">T</div>
              <div>
                <h4 className="font-bold text-gray-800 text-sm">Tutor Especialista</h4>
                <p className="text-[10px] text-green-600 flex items-center gap-1 font-bold">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span> ONLINE
                </p>
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/20">
            {messages.length === 0 && (
              <div className="text-center py-10 px-4">
                <div className="bg-white border p-6 rounded-2xl text-sm italic text-gray-500 shadow-sm max-w-sm mx-auto">
                  "Analise os dados clínicos ao lado e apresente suas hipóteses ou conduta para esta etapa."
                </div>
              </div>
            )}
            {messages.map((m, idx) => (
              <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                  m.role === 'user' 
                    ? 'bg-blue-600 text-white rounded-tr-none shadow-md' 
                    : 'bg-white border border-gray-100 shadow-sm text-gray-800 rounded-tl-none'
                }`}>
                  {m.content}
                </div>
              </div>
            ))}
            {isAutoAdvancing && (
              <div className="flex justify-start">
                <div className="bg-blue-50 border border-blue-100 p-3 rounded-2xl text-[10px] font-bold text-blue-600 uppercase tracking-widest flex gap-2 items-center">
                  Objetivo atingido. Avançando etapa clínica em instantes...
                </div>
              </div>
            )}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border p-3 rounded-2xl text-xs italic text-gray-400 flex gap-2 items-center">
                  <div className="flex gap-1">
                    <div className="w-1 h-1 bg-gray-300 rounded-full animate-bounce"></div>
                    <div className="w-1 h-1 bg-gray-300 rounded-full animate-bounce delay-75"></div>
                    <div className="w-1 h-1 bg-gray-300 rounded-full animate-bounce delay-150"></div>
                  </div>
                  Processando raciocínio...
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSendMessage} className="p-4 border-t bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={isAutoAdvancing ? "Aguarde o avanço da etapa..." : "Escreva sua análise técnica..."}
                disabled={isLoading || isAutoAdvancing}
                className="flex-1 border border-gray-200 rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none disabled:bg-gray-50 transition-all shadow-sm"
              />
              <button 
                type="submit"
                disabled={isLoading || isAutoAdvancing || !inputValue.trim()}
                className="bg-blue-600 text-white w-10 h-10 rounded-xl flex items-center justify-center hover:bg-blue-700 disabled:bg-gray-300 transition-colors shadow-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  const renderResults = () => {
    if (!currentCase) return null;
    const maxPossible = currentCase.stages.length * 3;
    const finalScore = Math.round((totalScore / maxPossible) * 10);

    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          <div className="bg-gradient-to-r from-blue-700 to-indigo-800 p-10 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Discussão Concluída</h2>
            <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <span className="block text-[10px] uppercase tracking-widest opacity-70 mb-1">Score Final</span>
              <span className="text-5xl font-black">{finalScore}<span className="text-xl opacity-50">/10</span></span>
            </div>
          </div>

          <div className="p-8 md:p-12">
            <div className="mb-12">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Diagnóstico Revelado</h3>
              <div className="bg-blue-50 border-l-8 border-blue-600 p-6 rounded-r-xl">
                <h4 className="text-2xl font-extrabold text-blue-900 mb-2">{currentCase.finalDiagnosis}</h4>
                <p className="text-gray-700 leading-relaxed text-sm font-medium">{currentCase.explanation}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Desempenho por Etapa</h3>
                <div className="space-y-3">
                  {currentCase.stages.map((s, idx) => (
                    <div key={s.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100">
                      <span className="text-xs text-gray-600 font-bold">{s.name}</span>
                      <div className="flex gap-1">
                        {[1, 2, 3].map(star => (
                          <div key={star} className={`w-2.5 h-2.5 rounded-full ${star <= (stageScores[idx] || 0) ? 'bg-yellow-400' : 'bg-gray-200'}`}></div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl border border-dashed border-gray-300">
                <h3 className="text-xs font-bold text-gray-800 mb-3 uppercase tracking-wider">Apreciação do Tutor</h3>
                <p className="text-xs text-gray-600 italic">
                  Você concluiu todas as fases da investigação. Revise os pontos clínicos onde sua nota foi menor para fortalecer seu diagnóstico diferencial.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setAppState(AppState.HOME)}
                className="bg-gray-800 text-white font-bold py-3 px-8 rounded-xl hover:bg-black transition-colors text-sm"
              >
                Voltar aos Casos
              </button>
              <button 
                onClick={startRandomCase}
                className="bg-blue-600 text-white font-bold py-3 px-8 rounded-xl hover:bg-blue-700 transition-colors shadow-lg text-sm"
              >
                Novo Caso Aleatório
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      <main className="flex-1">
        {appState === AppState.HOME && renderHome()}
        {appState === AppState.CASE_DISCUSSION && renderDiscussion()}
        {appState === AppState.RESULTS && renderResults()}
      </main>
      <Footer />
    </div>
  );
}
