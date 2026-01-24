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
      
      {/* Interactive Demo - Blockly Workspace */}
      <section className="py-16 px-6 border-t-4 border-[#1E1E1E]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center mb-8">
            <WobblyText text="INTERACTIVE DEMO" intensity={2} size="lg" />
          </h2>
          
          <p className="text-center text-[#9CDCFE] font-mono text-lg mb-6 max-w-3xl mx-auto">
            Experience the power of visual programming. This live demo shows how blocks translate to real code in multiple languages.
          </p>
          
          <div className="bg-[#252526] border-4 border-[#1E1E1E] p-6 mb-8">
            {/* Demo Container */}
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Blockly Workspace */}
              <div className="lg:w-2/3 bg-[#1E1E1E] border-2 border-[#007ACC] rounded overflow-hidden">
                <div className="p-4 bg-[#007ACC] text-white font-mono font-bold">
                  🧱 Visual Block Editor
                </div>
                <div className="p-2">
                  {/* Simulated Blockly Workspace */}
                  <div className="relative bg-white/5 rounded p-2 min-h-[400px]">
                    {/* Toolbox Sidebar */}
                    <div className="absolute left-0 top-0 h-full w-40 bg-[#2D2D30] border-r-2 border-[#007ACC] rounded-l">
                      <div className="p-3">
                        <div className="text-white font-mono text-sm mb-2">Blocks</div>
                        {['Logic', 'Loops', 'Math', 'Text', 'Lists', 'Variables', 'Functions'].map((category, idx) => (
                          <div 
                            key={category}
                            className="mb-1 px-3 py-2 text-white/80 font-mono text-xs rounded border-l-4 cursor-pointer hover:bg-white/10 transition-colors"
                            style={{
                              borderLeftColor: ['#D1C4E9', '#C0E2C1', '#64B6F7', '#FFCA28', '#5CA65C', '#EF9A9A', '#CE9178'][idx]
                            }}
                          >
                            {category}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Main Workspace with Sample Blocks */}
                    <div className="ml-40 p-4">
                      {/* Sample program blocks */}
                      <div className="flex flex-col gap-4">
                        {/* Variable set block */}
                        <div className="flex items-center bg-[#EF9A9A] px-4 py-3 rounded border-2 border-[#F4B8B8] text-white font-mono w-fit">
                          <span className="mr-2">set</span>
                          <span className="bg-white/20 px-2 py-1 rounded">Count</span>
                          <span className="mx-2">to</span>
                          <div className="bg-[#2196F3] px-2 py-1 rounded">1</div>
                        </div>
                        
                        {/* While loop block */}
                        <div className="border-l-4 border-[#C0E2C1] pl-4">
                          <div className="flex items-center bg-[#C0E2C1] px-4 py-3 rounded border-2 border-[#A5D6A7] text-[#1E1E1E] font-mono w-fit">
                            <span className="mr-2">repeat</span>
                            <span className="bg-white/30 px-2 py-1 rounded">while</span>
                            <div className="bg-[#D1C4E9] px-3 py-1 rounded ml-2 flex items-center">
                              <span className="mr-2">Count</span>
                              <span className="mx-1">≤</span>
                              <span className="ml-2 bg-white/30 px-2 py-1 rounded">3</span>
                            </div>
                          </div>
                          
                          {/* Loop body */}
                          <div className="ml-8 mt-2 space-y-2">
                            {/* Print block */}
                            <div className="flex items-center bg-[#FFCA28] px-4 py-3 rounded border-2 border-[#FFDA69] text-[#1E1E1E] font-mono w-fit">
                              <span className="mr-2">print</span>
                              <div className="bg-white/30 px-3 py-1 rounded flex items-center">
                                <span>"Hello World!"</span>
                              </div>
                            </div>
                            
                            {/* Increment block */}
                            <div className="flex items-center bg-[#EF9A9A] px-4 py-3 rounded border-2 border-[#F4B8B8] text-white font-mono w-fit">
                              <span className="mr-2">set</span>
                              <span className="bg-white/20 px-2 py-1 rounded">Count</span>
                              <span className="mx-2">to</span>
                              <div className="bg-[#2196F3] px-3 py-1 rounded flex items-center">
                                <span className="mr-2">Count</span>
                                <span className="mx-1">+</span>
                                <span className="ml-2">1</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Code Output */}
              <div className="lg:w-1/3 flex flex-col">
                <div className="flex-1 bg-[#1E1E1E] border-2 border-[#5CA65C] rounded overflow-hidden">
                  <div className="p-4 bg-[#5CA65C] text-white font-mono font-bold">
                    💻 Generated Code
                  </div>
                  
                  <div className="p-4">
                    <div className="mb-4">
                      <div className="text-[#9CDCFE] font-mono text-sm mb-2">Select language:</div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {['JavaScript', 'Python', 'PHP', 'Lua', 'Dart'].map((lang) => (
                          <button
                            key={lang}
                            className="px-3 py-1 bg-[#252526] text-white/80 font-mono text-xs rounded border border-[#007ACC] hover:bg-[#007ACC] hover:text-white transition-colors"
                          >
                            {lang}
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-[#0E0E0E] rounded p-4 font-mono text-sm overflow-x-auto">
                      <div className="text-[#569CD6]">var <span className="text-[#4EC9B0]">Count</span>;</div>
                      <div className="text-[#D4D4D4]"><br /></div>
                      <div className="text-[#D4D4D4]"><span className="text-[#4EC9B0]">Count</span> = <span className="text-[#B5CEA8]">1</span>;</div>
                      <div className="text-[#D4D4D4]">
                        <span className="text-[#C586C0]">while</span> (<span className="text-[#4EC9B0]">Count</span> <span className="text-[#D4D4D4]">&lt;=</span> <span className="text-[#B5CEA8]">3</span>) {'{'}
                      </div>
                      <div className="text-[#D4D4D4] ml-4">
                        <span className="text-[#9CDCFE]">window</span>.<span className="text-[#DCDCAA]">alert</span>(<span className="text-[#CE9178]">'Hello World!'</span>);
                      </div>
                      <div className="text-[#D4D4D4] ml-4">
                        <span className="text-[#4EC9B0]">Count</span> = <span className="text-[#4EC9B0]">Count</span> + <span className="text-[#B5CEA8]">1</span>;
                      </div>
                      <div className="text-[#D4D4D4]">{'}'}</div>
                    </div>
                    
                    {/* Run Button */}
                    <div className="mt-6 flex justify-center">
                      <button className="flex items-center gap-2 px-6 py-3 bg-[#007ACC] text-white font-mono font-bold rounded border-2 border-[#1E1E1E] hover:bg-[#005A9E] transition-colors">
                        <span className="text-xl">▶️</span>
                        Run Code
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 p-4 bg-[#1E1E1E] border-2 border-[#C586C0] rounded">
                  <div className="text-[#C586C0] font-mono text-sm mb-2">💡 What this program does:</div>
                  <div className="text-white/80 font-mono text-xs">
                    This program initializes a counter variable to 1, then enters a loop that runs 3 times. 
                    Each iteration displays "Hello World!" in an alert box and increments the counter.
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
