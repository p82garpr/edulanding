import React, { useState } from 'react';
import './AIDemoInteractive.css';

const AIDemoInteractive = () => {
  const [selectedExample, setSelectedExample] = useState(null);
  const [currentStep, setCurrentStep] = useState(0); // 0: inicial, 1: OCR, 2: IA evaluando, 3: resultado
  const [extractedCode, setExtractedCode] = useState('');
  const [aiResult, setAiResult] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  // Ejemplos de código predefinidos
  const codeExamples = [
    {
      id: 1,
      name: 'Función Factorial (Python)',
      image: '/app_screenshot/preview.png', // Usaremos una imagen existente
      code: `def factorial(n):
    if n <= 1:
        return 1
    else:
        return n * factorial(n-1)

print(factorial(5))`,
      exercise: 'Implementar una función recursiva que calcule el factorial de un número',
      evaluation: {
        score: 95,
        feedback: 'Excelente implementación recursiva. La lógica es correcta y el código está bien estructurado.',
        strengths: ['Caso base correcto', 'Recursión bien implementada', 'Código limpio'],
        suggestions: ['Considera añadir validación para números negativos', 'Podría beneficiarse de documentación']
      }
    },
    {
      id: 2,
      name: 'Bucle While (Java)',
      image: '/app_screenshot/preview.png',
      code: `public class Contador {
    public static void main(String[] args) {
        int i = 0;
        while (i < 10) {
            System.out.println("Número: " + i);
            i++;
        }
    }
}`,
      exercise: 'Crear un programa que imprima números del 0 al 9 usando un bucle while',
      evaluation: {
        score: 88,
        feedback: 'Implementación correcta del bucle while. El programa cumple con los requisitos.',
        strengths: ['Sintaxis correcta', 'Lógica del bucle apropiada', 'Incremento correcto'],
        suggestions: ['Considera usar nombres de variables más descriptivos', 'Añade comentarios explicativos']
      }
    },
    {
      id: 3,
      name: 'Función con Error (C++)',
      image: '/app_screenshot/preview.png',
      code: `#include <iostream>
using namespace std;

int sumar(int a, int b) {
    return a + b;
}

int main() {
    int x = 5;
    int y = 3;
    cout << "La suma es: " << sumar(x, y) << endl;
    return 0;
}`,
      exercise: 'Implementar una función que calcule el producto de dos números',
      evaluation: {
        score: 65,
        feedback: 'El código está bien escrito pero no cumple con el ejercicio solicitado.',
        strengths: ['Sintaxis correcta', 'Estructura apropiada', 'Compilación exitosa'],
        suggestions: ['La función debe calcular el producto, no la suma', 'Cambiar "a + b" por "a * b"', 'Actualizar el mensaje de salida']
      }
    }
  ];

  const simulateOCR = () => {
    if (!selectedExample) return;
    
    setCurrentStep(1);
    setIsProcessing(true);
    
    // Simular proceso OCR
    setTimeout(() => {
      setExtractedCode('');
      const code = selectedExample.code;
      let currentText = '';
      let index = 0;
      
      const typeWriter = () => {
        if (index < code.length) {
          currentText += code[index];
          setExtractedCode(currentText);
          index++;
          setTimeout(typeWriter, 30);
        } else {
          setTimeout(() => {
            setCurrentStep(2);
            simulateAIEvaluation();
          }, 1000);
        }
      };
      
      typeWriter();
    }, 500);
  };

  const simulateAIEvaluation = () => {
    if (!selectedExample) return;
    
    // Simular procesamiento de IA
    setTimeout(() => {
      setAiResult(selectedExample.evaluation);
      setCurrentStep(3);
      setIsProcessing(false);
    }, 3000);
  };

  const resetDemo = () => {
    setCurrentStep(0);
    setSelectedExample(null);
    setExtractedCode('');
    setAiResult(null);
    setIsProcessing(false);
  };

  const startDemo = (example) => {
    setSelectedExample(example);
    simulateOCR();
  };

  return (
    <section id="ai-demo" className="ai-demo-section">
      <div className="container">
        <div className="section-header animate-fadeInUp">
          <h2>🤖 Prueba la IA en Acción</h2>
          <p>Experimenta cómo funciona la evaluación automática de código con inteligencia artificial mediante una simulación.</p>
        </div>

        <div className="demo-container">
          {currentStep === 0 && (
            <div className="example-selection animate-fadeInUp">
              <h3>Selecciona un ejemplo de código para evaluar:</h3>
              <div className="examples-grid">
                {codeExamples.map((example) => (
                  <div 
                    key={example.id} 
                    className="example-card"
                    onClick={() => startDemo(example)}
                  >
                    <div className="example-preview">
                      <img src={example.image} alt={example.name} />
                    </div>
                    <div className="example-info">
                      <h4>{example.name}</h4>
                      <p>{example.exercise}</p>
                      <button className="btn btn-primary">
                        Evaluar con IA
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {currentStep >= 1 && (
            <div className="processing-container">
              <div className="demo-steps">
                <div className={`step ${currentStep >= 1 ? 'active' : ''} ${currentStep > 1 ? 'completed' : ''}`}>
                  <div className="step-icon">📸</div>
                  <span>OCR - Extrayendo texto</span>
                </div>
                <div className={`step ${currentStep >= 2 ? 'active' : ''} ${currentStep > 2 ? 'completed' : ''}`}>
                  <div className="step-icon">🧠</div>
                  <span>IA - Evaluando código</span>
                </div>
                <div className={`step ${currentStep >= 3 ? 'active' : ''}`}>
                  <div className="step-icon">✅</div>
                  <span>Resultado listo</span>
                </div>
              </div>

              <div className="demo-content">
                <div className="demo-left">
                  <div className="exercise-info">
                    <h4>📝 Ejercicio</h4>
                    <p>{selectedExample?.exercise}</p>
                  </div>

                  {currentStep >= 1 && (
                    <div className="ocr-result">
                      <h4>📸 Código extraído (OCR)</h4>
                      <div className="code-display">
                        <pre>{extractedCode}</pre>
                        {currentStep === 1 && <div className="cursor-blink">|</div>}
                      </div>
                    </div>
                  )}
                </div>

                <div className="demo-right">
                  {currentStep === 2 && (
                    <div className="ai-processing">
                      <div className="ai-brain">
                        <div className="brain-icon">🧠</div>
                        <div className="processing-dots">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </div>
                      <p>La IA está analizando el código...</p>
                      <div className="processing-steps">
                        <div className="step-item">✓ Análisis de sintaxis</div>
                        <div className="step-item">✓ Verificación de lógica</div>
                        <div className="step-item">⏳ Evaluación de solución</div>
                      </div>
                    </div>
                  )}

                  {currentStep === 3 && aiResult && (
                    <div className="ai-result animate-fadeInUp">
                      <div className="result-header">
                        <h4>🎯 Evaluación Completada</h4>
                        <div className="score">
                          <span className="score-value">{aiResult.score}</span>
                          <span className="score-total">/100</span>
                        </div>
                      </div>

                      <div className="feedback">
                        <h5>💬 Feedback de la IA</h5>
                        <p>{aiResult.feedback}</p>
                      </div>

                      <div className="strengths">
                        <h5>✅ Fortalezas</h5>
                        <ul>
                          {aiResult.strengths.map((strength, index) => (
                            <li key={index}>{strength}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="suggestions">
                        <h5>💡 Sugerencias de mejora</h5>
                        <ul>
                          {aiResult.suggestions.map((suggestion, index) => (
                            <li key={index}>{suggestion}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="demo-actions">
                <button className="btn btn-secondary" onClick={resetDemo}>
                  🔄 Probar otro ejemplo
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AIDemoInteractive; 