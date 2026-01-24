import React from 'react';
import { Link } from 'react-router-dom';
import WobblyText from './UI/WobblyText';
import AnimatedBlock from './UI/AnimatedBlock';
import BlockyButton from './UI/BlockyButton';

const HomePage: React.FC = () => {
  const handleGitHubClick = () => {
    window.open('https://github.com/google/blockly', '_blank');
  };
  
  const handleBlocklyDocsClick = () => {
    window.open('https://developers.google.com/blockly', '_blank');
  };
  
  return (
    <div className="min-h-screen bg-[#1E1E1E] overflow-x-hidden">
      {/* Animated Background Grid */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(90deg, #007ACC 1px, transparent 1px),
            linear-gradient(#007ACC 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Floating Blocks */}
      <div className="fixed top-10 left-10 w-8 h-8 bg-[#C586C0] animate-float" style={{animationDelay: '0s'}}></div>
      <div className="fixed top-20 right-20 w-6 h-6 bg-[#9CDCFE] animate-float" style={{animationDelay: '0.5s'}}></div>
      <div className="fixed bottom-20 left-1/4 w-10 h-10 bg-[#007ACC] animate-float" style={{animationDelay: '1s'}}></div>
      
      {/* Header */}
      <header className="relative p-6 border-b-4 border-[#007ACC]">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center">
            <div className="text-[#9CDCFE] font-mono font-bold text-2xl tracking-tighter">
              BLOCKLY<span className="text-[#C586C0]">IDE</span>
            </div>
            <div className="flex gap-4">
              <BlockyButton
                onClick={handleGitHubClick}
                color="#252526"
                size="sm"
              >
                GitHub
              </BlockyButton>
              <Link to="https://blockly-ide12.vercel.app/ide">
                <BlockyButton color="#007ACC" size="sm">
                  🚀 Launch IDE
                </BlockyButton>
              </Link>
            </div>
          </div>
        </div>
      </header>
      
      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <WobblyText text="CODE ↔ BLOCKS" intensity={5} size="xl" />
            <WobblyText text="BIDIRECTIONAL IDE" intensity={3} size="lg" />
          </div>
          
          <p className="text-[#9CDCFE] font-mono text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            A <span className="text-[#C586C0] font-bold">hand-coded</span>, blocky-style IDE with 
            real-time bidirectional conversion between visual blocks and code. 
            <span className="block mt-2 text-lg">Play, learn, and create in multiple programming languages.</span>
          </p>
          
          <Link to="https://blockly-ide12.vercel.app/ide">
            <BlockyButton color="#007ACC" size="lg" animated>
              🚀 START CODING NOW
            </BlockyButton>
          </Link>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center mb-12">
            <WobblyText text="FEATURES" intensity={2} size="lg" />
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatedBlock color="#007ACC" draggable>
              <div className="text-center p-4">
                <div className="text-4xl mb-3 mx-auto">📝</div>
                <h3 className="text-xl font-bold font-mono text-white mb-2">Code ↔ Blocks Sync</h3>
                <p className="text-white/80 font-mono text-sm">
                  Real-time bidirectional conversion between code and visual blocks
                </p>
              </div>
            </AnimatedBlock>
            
            <AnimatedBlock color="#C586C0" draggable>
              <div className="text-center p-4">
                <div className="text-4xl mb-3 mx-auto">▶️</div>
                <h3 className="text-xl font-bold font-mono text-white mb-2">Live Execution</h3>
                <p className="text-white/80 font-mono text-sm">
                  Step-by-step execution with variable watching and console output
                </p>
              </div>
            </AnimatedBlock>
            
            <AnimatedBlock color="#9CDCFE" draggable>
              <div className="text-center p-4">
                <div className="text-4xl mb-3 mx-auto">🧱</div>
                <h3 className="text-xl font-bold font-mono text-[#1E1E1E] mb-2">5 Languages</h3>
                <p className="text-[#1E1E1E]/80 font-mono text-sm">
                  JavaScript, Python, PHP, Lua, and Dart support
                </p>
              </div>
            </AnimatedBlock>
            
            <AnimatedBlock color="#5CA65C" draggable>
              <div className="text-center p-4">
                <div className="text-4xl mb-3 mx-auto">🔍</div>
                <h3 className="text-xl font-bold font-mono text-white mb-2">Block Highlighting</h3>
                <p className="text-white/80 font-mono text-sm">
                  Visual execution tracing with current block highlighting
                </p>
              </div>
            </AnimatedBlock>
            
            <AnimatedBlock color="#CE9178" draggable>
              <div className="text-center p-4">
                <div className="text-4xl mb-3 mx-auto">🔥</div>
                <h3 className="text-xl font-bold font-mono text-white mb-2">Firebase Save</h3>
                <p className="text-white/80 font-mono text-sm">
                  Save projects to cloud with Firebase Firestore integration
                </p>
              </div>
            </AnimatedBlock>
          </div>
        </div>
      </section>
      
      {/* Interactive Demo - Exact Blockly Workspace from HTML */}
      <section className="py-16 px-6 border-t-4 border-[#1E1E1E]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center mb-8">
            <WobblyText text="LIVE BLOCKLY WORKSPACE" intensity={2} size="lg" />
          </h2>
          
          <p className="text-center text-[#9CDCFE] font-mono text-lg mb-6 max-w-3xl mx-auto">
            Experience the actual Blockly workspace with real-time code generation and execution.
          </p>
          
          <div className="bg-[#252526] border-4 border-[#1E1E1E] p-6 mb-8">
            {/* Exact Blockly Workspace Container */}
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Blockly Editor Area */}
              <div className="lg:w-2/3 bg-white rounded overflow-hidden">
                <div className="p-4 bg-[#007ACC] text-white font-mono font-bold">
                  🧱 Blockly Visual Editor
                </div>
                
                {/* The exact Blockly HTML structure */}
                <div className="has-tabs">
                  <div className="drop-shadow"></div>
                  <div className="app-container">
                    <div id="blocklyDiv" className="main">
                      {/* Blockly SVG Workspace */}
                      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" className="blocklySvg" width="100%" height="400">
                        <defs>
                          <pattern id="blocklyGridPattern" patternUnits="userSpaceOnUse" width="20" height="20">
                            <line stroke="#e0e0e0" strokeWidth="1" x1="0" y1="10" x2="20" y2="10"></line>
                            <line stroke="#e0e0e0" strokeWidth="1" x1="10" y1="0" x2="10" y2="20"></line>
                          </pattern>
                        </defs>
                        <g className="blocklyWorkspace">
                          <rect height="100%" width="100%" className="blocklyMainBackground" fill="url(#blocklyGridPattern)"></rect>
                          
                          {/* Toolbox */}
                          <g className="blocklyToolbox" transform="translate(0, 0)">
                            <g className="blocklyToolboxCategoryGroup">
                              {[
                                {name: 'Logic', color: '#D1C4E9'},
                                {name: 'Loops', color: '#C0E2C1'},
                                {name: 'Math', color: '#64B6F7'},
                                {name: 'Text', color: '#FFCA28'},
                                {name: 'Lists', color: '#5CA65C'},
                                {name: 'Variables', color: '#EF9A9A'},
                                {name: 'Functions', color: '#CE9178'}
                              ].map((cat, idx) => (
                                <g key={cat.name} transform={`translate(0, ${idx * 40})`}>
                                  <rect width="160" height="36" fill={cat.color} rx="4" ry="4" opacity="0.9"></rect>
                                  <text x="10" y="20" fontFamily="monospace" fontSize="12" fill="#1E1E1E">{cat.name}</text>
                                </g>
                              ))}
                            </g>
                          </g>
                          
                          {/* Main Blocks Area */}
                          <g className="blocklyBlockCanvas" transform="translate(180, 20)">
                            {/* Variable Set Block */}
                            <g transform="translate(0, 0)">
                              <rect width="200" height="40" fill="#EF9A9A" rx="8" ry="8"></rect>
                              <text x="15" y="25" fontFamily="monospace" fontSize="12" fill="white">set</text>
                              <rect x="50" y="10" width="60" height="24" fill="#F4B8B8" rx="4" ry="4"></rect>
                              <text x="55" y="25" fontFamily="monospace" fontSize="12" fill="white">Count</text>
                              <text x="120" y="25" fontFamily="monospace" fontSize="12" fill="white">to</text>
                              <rect x="150" y="10" width="40" height="24" fill="#2196F3" rx="4" ry="4"></rect>
                              <text x="160" y="25" fontFamily="monospace" fontSize="12" fill="white">1</text>
                            </g>
                            
                            {/* While Loop Block */}
                            <g transform="translate(0, 50)">
                              <rect width="300" height="120" fill="#C0E2C1" rx="8" ry="8"></rect>
                              <text x="15" y="25" fontFamily="monospace" fontSize="12" fill="#1E1E1E">repeat</text>
                              <rect x="70" y="10" width="50" height="24" fill="#A5D6A7" rx="4" ry="4"></rect>
                              <text x="75" y="25" fontFamily="monospace" fontSize="12" fill="#1E1E1E">while</text>
                              
                              {/* Condition Block */}
                              <g transform="translate(130, 5)">
                                <rect width="150" height="30" fill="#D1C4E9" rx="4" ry="4"></rect>
                                <rect x="10" y="5" width="40" height="20" fill="#DFD6F0" rx="2" ry="2"></rect>
                                <text x="15" y="18" fontFamily="monospace" fontSize="10" fill="white">Count</text>
                                <text x="60" y="18" fontFamily="monospace" fontSize="10" fill="#1E1E1E">≤</text>
                                <rect x="90" y="5" width="30" height="20" fill="#DFD6F0" rx="2" ry="2"></rect>
                                <text x="95" y="18" fontFamily="monospace" fontSize="10" fill="white">3</text>
                              </g>
                              
                              {/* Loop Body */}
                              <g transform="translate(20, 60)">
                                {/* Print Block */}
                                <g transform="translate(0, 0)">
                                  <rect width="180" height="30" fill="#FFCA28" rx="4" ry="4"></rect>
                                  <text x="10" y="20" fontFamily="monospace" fontSize="12" fill="#1E1E1E">print</text>
                                  <rect x="60" y="5" width="100" height="20" fill="#FFDA69" rx="2" ry="2"></rect>
                                  <text x="65" y="18" fontFamily="monospace" fontSize="10" fill="#1E1E1E">"Hello World!"</text>
                                </g>
                                
                                {/* Increment Block */}
                                <g transform="translate(0, 40)">
                                  <rect width="220" height="30" fill="#EF9A9A" rx="4" ry="4"></rect>
                                  <text x="10" y="20" fontFamily="monospace" fontSize="12" fill="white">set</text>
                                  <rect x="40" y="5" width="50" height="20" fill="#F4B8B8" rx="2" ry="2"></rect>
                                  <text x="45" y="18" fontFamily="monospace" fontSize="10" fill="white">Count</text>
                                  <text x="100" y="20" fontFamily="monospace" fontSize="12" fill="white">to</text>
                                  <rect x="130" y="5" width="80" height="20" fill="#2196F3" rx="2" ry="2"></rect>
                                  <text x="135" y="18" fontFamily="monospace" fontSize="10" fill="white">Count + 1</text>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                    
                    {/* Code Output Area */}
                    <div id="outputDiv" className="main bg-[#1E1E1E] p-4">
                      <div className="mb-4">
                        <select id="generateDropdown" className="bg-[#252526] text-white font-mono p-2 rounded border border-[#007ACC]">
                          <option value="javascript">JavaScript</option>
                          <option value="python">Python</option>
                          <option value="php">PHP</option>
                          <option value="lua">Lua</option>
                          <option value="dart">Dart</option>
                        </select>
                        <br className="next-line" />
                        <select id="languageDropdown" className="bg-[#252526] text-white font-mono p-2 rounded border border-[#007ACC] mt-2">
                          <option value="en">English</option>
                          <option value="es">Español</option>
                          <option value="fr">Français</option>
                        </select>
                      </div>
                      
                      <pre id="codeHolder" className="bg-[#0E0E0E] p-4 rounded font-mono text-sm text-white overflow-x-auto">
{`var Count;

Count = 1;
while (Count <= 3) {
  window.alert('Hello World!');
  Count = Count + 1;
}`}
                      </pre>
                    </div>
                    
                    <div id="playButton" className="play-button mt-4 flex items-center justify-center gap-2 px-6 py-3 bg-[#007ACC] text-white font-mono font-bold rounded cursor-pointer hover:bg-[#005A9E] transition-colors">
                      <span className="material-icons" aria-hidden="true">play_circle_outlined</span>
                      Run
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Side Panel with Info */}
              <div className="lg:w-1/3 flex flex-col gap-4">
                <div className="bg-[#1E1E1E] border-2 border-[#5CA65C] rounded p-4">
                  <div className="text-[#5CA65C] font-mono font-bold mb-2">💡 How It Works</div>
                  <div className="text-white/80 font-mono text-sm">
                    This live demo shows a complete Blockly program that:
                    <ul className="mt-2 ml-4 list-disc">
                      <li>Sets a variable "Count" to 1</li>
                      <li>Enters a while loop that runs while Count ≤ 3</li>
                      <li>Prints "Hello World!" each iteration</li>
                      <li>Increments Count by 1</li>
                      <li>Will execute 3 times total</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-[#1E1E1E] border-2 border-[#C586C0] rounded p-4">
                  <div className="text-[#C586C0] font-mono font-bold mb-2">🔄 Language Conversion</div>
                  <div className="text-white/80 font-mono text-sm">
                    Use the dropdown to see how the same blocks translate to:
                    <div className="mt-2 flex flex-wrap gap-2">
                      {['JavaScript', 'Python', 'PHP', 'Lua', 'Dart'].map((lang) => (
                        <span key={lang} className="px-2 py-1 bg-[#252526] rounded text-xs">{lang}</span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="bg-[#1E1E1E] border-2 border-[#9CDCFE] rounded p-4">
                  <div className="text-[#9CDCFE] font-mono font-bold mb-2">🎮 Interactive Features</div>
                  <div className="text-white/80 font-mono text-sm">
                    In the full IDE, you can:
                    <ul className="mt-2 ml-4 list-disc">
                      <li>Drag and drop blocks</li>
                      <li>Edit code and see blocks update</li>
                      <li>Step through execution</li>
                      <li>Watch variable values</li>
                      <li>Save projects to cloud</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BlockyButton
              onClick={handleBlocklyDocsClick}
              color="#252526"
              size="md"
            >
              📚 Read Blockly Docs
            </BlockyButton>
            <Link to="https://blockly-ide12.vercel.app/ide" className="w-full sm:w-auto">
              <BlockyButton color="#007ACC" size="md" animated>
                🧪 Open Full IDE
              </BlockyButton>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="relative py-8 px-6 border-t-4 border-[#007ACC] mt-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-[#9CDCFE] font-mono mb-4 md:mb-0">
              <div className="text-xl font-bold">BLOCKLY<span className="text-[#C586C0]">IDE</span></div>
              <div className="text-sm opacity-75">A visual programming playground</div>
            </div>
            
            <div className="flex gap-6">
              <button 
                onClick={handleGitHubClick}
                className="text-white/70 hover:text-[#9CDCFE] font-mono text-sm transition-colors"
              >
                GitHub
              </button>
              <Link to="/ide" className="text-white/70 hover:text-[#C586C0] font-mono text-sm transition-colors">
                Launch IDE
              </Link>
              <a 
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleBlocklyDocsClick();
                }}
                className="text-white/70 hover:text-[#5CA65C] font-mono text-sm transition-colors"
              >
                Documentation
              </a>
            </div>
          </div>
          
          <div className="text-center mt-8 pt-6 border-t border-white/10">
            <div className="text-white/50 font-mono text-sm">
              Built with ❤️ using React, TypeScript, Tailwind CSS, and Google Blockly
            </div>
            <div className="text-white/30 font-mono text-xs mt-2">
              This is a demonstration project. Blockly is a Google project.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
