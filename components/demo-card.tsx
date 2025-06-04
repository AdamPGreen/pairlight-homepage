"use client";

import { useEffect, useState } from "react";
import { Bot } from "lucide-react";

const TOPICS = [
  {
    category: "Cleantech/Energy",
    queries: [
      { topic: "Clean Energy Tech", speakers: [
        { name: "Jane Cooper", company: "Tesla Energy", expertise: "Renewable Energy Innovation", avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200" },
        { name: "Esther Howard", company: "Siemens Green", expertise: "Sustainable Grid Systems", avatar: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=200" },
        { name: "Robert Fox", company: "GE Renewable", expertise: "Clean Energy Storage", avatar: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=200" },
        { name: "Jacob Jones", company: "SunPower", expertise: "Solar Technology", avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200" },
        { name: "Emma Chen", company: "Vestas Wind", expertise: "Wind Energy Systems", avatar: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=200" },
        { name: "Michael Park", company: "NextEra", expertise: "Energy Infrastructure", avatar: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=200" }
      ]},
      { topic: "Green Infrastructure", speakers: [
        { name: "Sarah Miller", company: "Schneider Electric", expertise: "Smart Buildings", avatar: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=200" },
        { name: "David Kim", company: "ABB Group", expertise: "Grid Modernization", avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200" },
        { name: "Lisa Zhang", company: "Bloom Energy", expertise: "Fuel Cell Technology", avatar: "https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg?auto=compress&cs=tinysrgb&w=200" },
        { name: "Tom Harris", company: "Enphase", expertise: "Microgrid Solutions", avatar: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=200" },
        { name: "Nina Patel", company: "ChargePoint", expertise: "EV Infrastructure", avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200" },
        { name: "James Wilson", company: "Orsted", expertise: "Offshore Wind", avatar: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=200" }
      ]}
    ]
  },
  {
    category: "Venture Capital",
    queries: [
      { topic: "Early Stage Investing", speakers: [
        { name: "Alex Rivera", company: "Sequoia Capital", expertise: "Seed Stage Investment", avatar: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=200" },
        { name: "Nina Patel", company: "Andreessen Horowitz", expertise: "Series A Strategy", avatar: "https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg?auto=compress&cs=tinysrgb&w=200" },
        { name: "James Wilson", company: "Kleiner Perkins", expertise: "Startup Valuation", avatar: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=200" },
        { name: "Lisa Zhang", company: "Accel", expertise: "Growth Capital", avatar: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=200" },
        { name: "Chris Lee", company: "Lightspeed", expertise: "Deep Tech Investment", avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200" },
        { name: "Rachel Cohen", company: "NEA", expertise: "Healthcare VC", avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200" }
      ]},
      { topic: "Future of FinTech", speakers: [
        { name: "Maya Sen", company: "Index Ventures", expertise: "Blockchain Investment", avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200" },
        { name: "Tom Harris", company: "Ribbit Capital", expertise: "Digital Banking", avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200" },
        { name: "Elena Costa", company: "Bessemer", expertise: "InsurTech", avatar: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=200" },
        { name: "Kevin Taylor", company: "Tiger Global", expertise: "Payment Tech", avatar: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=200" },
        { name: "Sofia Rodriguez", company: "Founders Fund", expertise: "DeFi", avatar: "https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg?auto=compress&cs=tinysrgb&w=200" },
        { name: "Marcus Wong", company: "General Catalyst", expertise: "RegTech", avatar: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=200" }
      ]}
    ]
  },
  {
    category: "Design/Architecture",
    queries: [
      { topic: "Sustainable Design", speakers: [
        { name: "Sofia Rodriguez", company: "Foster + Partners", expertise: "Eco-friendly Architecture", avatar: "https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg?auto=compress&cs=tinysrgb&w=200" },
        { name: "Marcus Wong", company: "BIG", expertise: "Urban Planning", avatar: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=200" },
        { name: "Anna Schmidt", company: "Gensler", expertise: "Biophilic Design", avatar: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=200" },
        { name: "Kevin Taylor", company: "SOM", expertise: "Green Materials", avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200" },
        { name: "Elena Costa", company: "Zaha Hadid", expertise: "Parametric Design", avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200" },
        { name: "Ben Mitchell", company: "MVRDV", expertise: "Sustainable Cities", avatar: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=200" }
      ]},
      { topic: "Digital Architecture", speakers: [
        { name: "Liam O'Connor", company: "Autodesk", expertise: "Parametric Design", avatar: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=200" },
        { name: "Yuki Tanaka", company: "UNStudio", expertise: "Virtual Spaces", avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200" },
        { name: "Elena Costa", company: "Herzog & de Meuron", expertise: "Digital Fabrication", avatar: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=200" },
        { name: "Ben Mitchell", company: "Snøhetta", expertise: "3D Visualization", avatar: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=200" },
        { name: "Sarah Miller", company: "OMA", expertise: "Computational Design", avatar: "https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg?auto=compress&cs=tinysrgb&w=200" },
        { name: "David Kim", company: "Arup", expertise: "Digital Twin Technology", avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200" }
      ]}
    ]
  }
];

export function DemoCard() {
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [queryIndex, setQueryIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    let typingTimeout: NodeJS.Timeout;
    let searchTimeout: NodeJS.Timeout;
    let resetTimeout: NodeJS.Timeout;

    const startTypingAnimation = () => {
      const currentQuery = TOPICS[categoryIndex].queries[queryIndex].topic;
      let charIndex = 0;

      setIsTyping(true);
      setIsSearching(false);
      setShowResults(false);
      setTypedText("");

      const typeChar = () => {
        if (charIndex < currentQuery.length) {
          setTypedText(currentQuery.slice(0, charIndex + 1));
          charIndex++;
          typingTimeout = setTimeout(typeChar, 100);
        } else {
          setIsTyping(false);
          setIsSearching(true);

          searchTimeout = setTimeout(() => {
            setIsSearching(false);
            setShowResults(true);

            resetTimeout = setTimeout(() => {
              const nextQueryIndex = (queryIndex + 1) % TOPICS[categoryIndex].queries.length;
              if (nextQueryIndex === 0) {
                setCategoryIndex((current) => (current + 1) % TOPICS.length);
              }
              setQueryIndex(nextQueryIndex);
            }, 5000);
          }, 1500);
        }
      };

      typeChar();
    };

    startTypingAnimation();

    return () => {
      clearTimeout(typingTimeout);
      clearTimeout(searchTimeout);
      clearTimeout(resetTimeout);
    };
  }, [categoryIndex, queryIndex]);

  const currentSpeakers = TOPICS[categoryIndex].queries[queryIndex].speakers;

  return (
    <div className="relative h-[600px] w-full">
      <div className="absolute inset-0 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xl overflow-hidden">
        <div className="h-full p-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 rounded-full bg-[#6B85FE] flex items-center justify-center flex-shrink-0">
              <Bot className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="font-medium text-zinc-900 dark:text-zinc-100">Pairlight Match Agent</h3>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-zinc-100 dark:bg-zinc-800 rounded-xl px-4 py-3">
              <p className="text-[15px] text-zinc-900 dark:text-zinc-100">
                {typedText || "Enter topic..."}
              </p>
            </div>

            {isSearching && (
              <p className="text-sm text-zinc-500 pl-1">Building your shortlist...</p>
            )}

            {showResults && (
              <div className="space-y-3">
                {currentSpeakers.map((speaker, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-2 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors"
                    style={{
                      animation: `fadeIn 0.5s ease-out ${index * 0.1}s forwards`,
                      opacity: 0
                    }}
                  >
                    <img 
                      src={speaker.avatar} 
                      alt={speaker.name}
                      className="h-12 w-12 rounded-full object-cover flex-shrink-0"
                    />
                    <div className="min-w-0 flex-1">
                      <h4 className="font-medium text-zinc-900 dark:text-zinc-100 truncate">
                        {speaker.name}
                      </h4>
                      <p className="text-sm">
                        <span className="font-medium text-zinc-700 dark:text-zinc-300 truncate">{speaker.company}</span>
                      </p>
                      <p className="text-sm text-zinc-500 truncate">
                        {speaker.expertise}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}