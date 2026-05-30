import { useState, useMemo } from 'react';
import { 
  Sparkles, 
  MessageSquare, 
  Heart, 
  Eye, 
  TrendingUp, 
  DollarSign, 
  Share2, 
  Download, 
  Plus, 
  Trash2, 
  Printer, 
  CheckCircle, 
  Flame, 
  Video, 
  Scissors, 
  FileText,
  Bookmark,
  ChevronRight,
  Calculator,
  Info,
  ExternalLink,
  Percent,
  Clock,
  Check,
  Instagram,
  Youtube,
  Tv,
  Users
} from 'lucide-react';

// Niche definitions for YouTube Shorts Revenue Predictor
interface NicheInfo {
  name: string;
  minRPM: number;
  maxRPM: number;
  icon: string;
  description: string;
}

const NICHES: NicheInfo[] = [
  { name: 'Finance, Crypto & Investing', minRPM: 0.35, maxRPM: 0.55, icon: '🏦', description: 'Highest advertiser interest with high sponsoring payouts.' },
  { name: 'Tech, AI & Business Software', minRPM: 0.28, maxRPM: 0.42, icon: '💻', description: 'Strong software buyer density and advertiser bid war.' },
  { name: 'Careers & Self Improvement', minRPM: 0.20, maxRPM: 0.32, icon: '📈', description: 'Great for digital courses, productivity, workspace tools.' },
  { name: 'Health, Powerlifting & Fitness', minRPM: 0.16, maxRPM: 0.26, icon: '💪', description: 'Supplements, gym apparel brands & nutrition sponsors.' },
  { name: 'Cosmetic, Skincare & Fashion', minRPM: 0.12, maxRPM: 0.20, icon: '💄', description: 'Heavy brand backing with visual direct-to-consumer catalogs.' },
  { name: 'Adventure Travel & Vlogging', minRPM: 0.10, maxRPM: 0.16, icon: '✈️', description: 'Sponsor integration with hotels, airline memberships.' },
  { name: 'Gaming Clips & Esports Highlights', minRPM: 0.05, maxRPM: 0.10, icon: '🎮', description: 'Extremely high volume but lower average advertiser CTR.' },
  { name: 'Comedy Mainstream & Daily Reels', minRPM: 0.03, maxRPM: 0.07, icon: '🎭', description: 'Massive organic reach, low target specialization.' }
];

export default function App() {
  // TikTok Calculator States
  const [tkFollowers, setTkFollowers] = useState<number>(150000);
  const [tkLikes, setTkLikes] = useState<number>(12000);
  const [tkViews, setTkViews] = useState<number>(65000);
  const [tkCpmFactor, setTkCpmFactor] = useState<number>(25); // Target CPM selection ($15, $25, $35 or $50)

  // YouTube Shorts Predictor States
  const [ytViews, setYtViews] = useState<number>(1800000); // Monthly views slider
  const [ytNicheIndex, setYtNicheIndex] = useState<number>(1); // Default Tech

  // Instagram Reel Virality States
  const [igSaves, setIgSaves] = useState<number>(4200);
  const [igShares, setIgShares] = useState<number>(5100);
  const [igComments, setIgComments] = useState<number>(750);
  const [igViews, setIgViews] = useState<number>(45000);

  // Audio-to-Video Matcher States
  const [videoLength, setVideoLength] = useState<number>(18); // Durations (seconds)
  const [trendStrength, setTrendStrength] = useState<string>('megaviral'); // megaviral, breakout, steady, saturated

  // Sponsorship Invoice States
  const [invoiceCreator, setInvoiceCreator] = useState<string>('Alex Sterling / @SterlingMedia');
  const [invoiceCreatorEmail, setInvoiceCreatorEmail] = useState<string>('billing@sterlingmedia.studio');
  const [invoiceClient, setInvoiceClient] = useState<string>('Aura Beverages Inc.');
  const [invoiceCampaign, setInvoiceCampaign] = useState<string>('Aura Rush Summer Shorts Series');
  const [invoiceDate, setInvoiceDate] = useState<string>('2026-06-05');
  const [invoiceDueDate, setInvoiceDueDate] = useState<string>('2026-07-05');
  const [invoiceBaseRate, setInvoiceBaseRate] = useState<number>(1850);
  const [invoiceExtraRate, setInvoiceExtraRate] = useState<number>(350);
  const [invoiceExtraDesc, setInvoiceExtraDesc] = useState<string>('Spark ad rights code access (30 days)');
  const [invoiceTerms, setInvoiceTerms] = useState<string>('Net 30');
  const [invoiceId, setInvoiceId] = useState<string>('INV-2026-0819');

  // --- CALCULATIONS ---

  // 1. TikTok Calculations
  const tkCalcs = useMemo(() => {
    // Engagement Rate % based on Views (industry standard view-through)
    const viewsER = tkViews > 0 ? (tkLikes / tkViews) * 100 : 0;
    // Engagement Rate % based on Followers (traditional profile rate)
    const followersER = tkFollowers > 0 ? (tkLikes / tkFollowers) * 100 : 0;

    // Suggested Brand Deal base fee calculated via average CPM on views
    const baseValuation = (tkViews / 1000) * tkCpmFactor;

    // Scale fee up or down relative to followers engagement rate
    let multiplier = 1.0;
    if (followersER >= 8) {
      multiplier = 1.45; // Exceptional multiplier
    } else if (followersER >= 4) {
      multiplier = 1.25; // High performance
    } else if (followersER >= 2) {
      multiplier = 1.10; // Moderate traction
    } else if (followersER < 0.8) {
      multiplier = 0.85; // Low follower multiplier modifier
    }

    const recommendedCharge = Math.round(baseValuation * multiplier);
    const minCharge = Math.max(150, Math.round(recommendedCharge * 0.85));
    const maxCharge = Math.round(recommendedCharge * 1.25);

    return {
      viewsER,
      followersER,
      recommendedCharge,
      minCharge,
      maxCharge
    };
  }, [tkFollowers, tkLikes, tkViews, tkCpmFactor]);

  // 2. YouTube Shorts Predictions
  const ytCalcs = useMemo(() => {
    const activeNiche = NICHES[ytNicheIndex];
    const avgRPM = (activeNiche.minRPM + activeNiche.maxRPM) / 2;
    // Views are divided by 1,000 to apply standard RPM format
    const estMonthlyPayout = (ytViews / 1000) * avgRPM;
    const estYearlyPayout = estMonthlyPayout * 12;

    return {
      activeNiche,
      estMonthlyPayout,
      estYearlyPayout,
      avgRPM
    };
  }, [ytViews, ytNicheIndex]);

  // 3. Instagram Virality Scores
  const igCalcs = useMemo(() => {
    // Algorithm weights: Shares (8x), Saves (5x), Comments (3x)
    const totalWeightedEngagements = (igSaves * 5) + (igShares * 8) + (igComments * 3);
    
    // Algorithmic efficiency threshold calculation: relative density to total Views/Plays
    const densityRatio = igViews > 0 ? (totalWeightedEngagements / igViews) : 0;
    
    // Normalize to score index out of 100 (Where a 12% ratio reflects close to a 100 score)
    let rawScore = (densityRatio * 100) / 0.12;
    if (igViews === 0) {
      const flat = igSaves + igShares + igComments;
      rawScore = (flat / 500) * 100;
    }

    const score = Math.min(100, Math.max(5, Math.round(rawScore)));

    // Determine algorithmic tier categories, colors & progress offsets
    let level = 'Moderate Trend';
    let labelColor = 'text-sky-400';
    let bannerGradient = 'from-sky-500/10 via-sky-500/20 to-sky-400/5';
    let ringColor = '#38bdf8'; // sky-400

    if (score >= 85) {
      level = '🌋 Megaviral Viral Outbreak';
      labelColor = 'text-pink-400 font-bold';
      bannerGradient = 'from-pink-500/10 via-pink-400/20 to-pink-500/5';
      ringColor = '#f472b6'; // pink-400
    } else if (score >= 60) {
      level = '🔥 Exploding Speed Wave';
      labelColor = 'text-amber-400 font-semibold';
      bannerGradient = 'from-amber-500/10 via-amber-400/20 to-amber-500/5';
      ringColor = '#fbbf24'; // amber-400
    } else if (score >= 35) {
      level = '⚡ Strong Organic Growth';
      labelColor = 'text-emerald-400';
      bannerGradient = 'from-emerald-500/10 via-emerald-400/20 to-emerald-500/5';
      ringColor = '#34d399'; // emerald-400
    } else {
      level = '💤 Low Algorithmic Velocity';
      labelColor = 'text-slate-400';
      bannerGradient = 'from-slate-700/10 via-slate-700/20 to-slate-700/5';
      ringColor = '#64748b'; // slate-500
    }

    return {
      score,
      level,
      labelColor,
      bannerGradient,
      ringColor,
      totalWeightedEngagements
    };
  }, [igSaves, igShares, igComments, igViews]);

  // 4. Audio-to-Video Matcher Calculations
  const audioCalcs = useMemo(() => {
    let hookSecs = 1.0;
    let hookSpan = 3.0;
    let summary = '';
    const suggestedCtaTime = Math.max(2, videoLength - Math.max(2, Math.round(videoLength * 0.12)));

    switch (trendStrength) {
      case 'megaviral':
        hookSecs = Math.max(0.4, Number((videoLength * 0.05).toFixed(1)));
        hookSpan = 2.5;
        summary = 'Highly viral mainstream sound with low visual patience. Keep the initial peak visually overwhelming to bypass direct scroll swipes within the first fractions of a second.';
        break;
      case 'breakout':
        hookSecs = Math.max(0.8, Number((videoLength * 0.09).toFixed(1)));
        hookSpan = 3.5;
        summary = 'Rising breakout sound with high listener curiosity. Set up a quick 1-second text mystery before introducing the dynamic peak drop synchronized with the music beats.';
        break;
      case 'steady':
        hookSecs = Math.max(1.5, Number((videoLength * 0.15).toFixed(1)));
        hookSpan = 4.0;
        summary = 'Classic organic track. Standard pacing. Introduce a light story setup or narrative question, syncing your hook clearly with the main audio bridge around 1.5 - 2.0s.';
        break;
      case 'saturated':
        hookSecs = 0.3;
        hookSpan = 2.0;
        summary = 'This track suffers high fatigue. You must disrupt scrolling expectations immediately within 0.3 seconds using a loud visual pattern interrupt or sudden motion transition.';
        break;
    }

    // Protection clamps
    hookSecs = Math.min(hookSecs, videoLength * 0.5);

    return {
      hookSecs,
      hookSpan,
      suggestedCtaTime,
      summary
    };
  }, [videoLength, trendStrength]);

  // Print Window Helper
  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      className="min-h-screen text-white font-sans flex flex-col items-center justify-between pb-12 select-text"
      style={{
        background: 'radial-gradient(circle at 0% 0%, #1a0b3b 0%, #0a0518 50%), radial-gradient(circle at 100% 100%, #2e0854 0%, #0a0518 50%)',
        backgroundColor: '#0a0518'
      }}
    >
      {/* 1. TOP ADVERTISEMENT SPACE PLACEHOLDER */}
      <div className="w-full h-11 bg-white/5 border-b border-white/10 flex items-center justify-center text-[10px] uppercase font-mono tracking-[0.25em] text-white/40 select-none print:hidden">
        📢 Advertisement Space • Premium Partner Integration Slot Available
      </div>

      <div className="w-full max-w-6xl px-4 sm:px-6 md:px-8 mt-8 flex-1">
        
        {/* APP HEADER */}
        <header className="mb-8 flex flex-col md:flex-row items-center justify-between gap-4 border-b border-white/10 pb-6 print:hidden">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 via-purple-600 to-violet-600 flex items-center justify-center shadow-lg shadow-purple-500/25">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-black tracking-tight text-white">
                  Viral Creator Analytics Hub
                </h1>
                <span className="bg-gradient-to-r from-pink-500 to-violet-500 text-[10px] uppercase font-mono px-2 py-0.5 rounded-full font-bold tracking-wider">
                  Live V2.5
                </span>
              </div>
              <p className="text-xs text-white/60">
                5 powerful mini-calculators designed exclusively for social media growth optimization.
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-xs text-white/50 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="font-mono uppercase tracking-wide">Live Algorithm Sync: Active</span>
          </div>
        </header>

        {/* METRIC GRAPHICS GRID (FIRST 4 CALCULATORS) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 print:hidden">
          
          {/* CALCULATOR 1: TIKTOK ENGAGEMENT & BRAND DEAL VALUE */}
          <section id="tiktok-calculator" className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:border-white/20 transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                  <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-200">
                    TikTok Rate & Engagement Evaluator
                  </h2>
                </div>
                <Users className="w-4 h-4 text-cyan-400" />
              </div>

              {/* Sliders Container */}
              <div className="space-y-4">
                {/* Followers */}
                <div>
                  <div className="flex justify-between items-center text-xs mb-1">
                    <span className="text-white/70">Total Profile Followers</span>
                    <span className="font-mono text-cyan-400 font-bold">{tkFollowers.toLocaleString()}</span>
                  </div>
                  <input 
                    type="range" 
                    min="5000" 
                    max="5000000" 
                    step="5000"
                    value={tkFollowers}
                    onChange={(e) => setTkFollowers(Number(e.target.value))}
                    className="w-full accent-cyan-400 cursor-pointer"
                  />
                  <div className="flex justify-between text-[9px] text-white/40 font-mono mt-0.5">
                    <span>5k</span>
                    <span>2.5M</span>
                    <span>5M</span>
                  </div>
                </div>

                {/* Average Video Views */}
                <div>
                  <div className="flex justify-between items-center text-xs mb-1">
                    <span className="text-white/70">Average Video Views</span>
                    <span className="font-mono text-cyan-400 font-bold">{tkViews.toLocaleString()}</span>
                  </div>
                  <input 
                    type="range" 
                    min="1000" 
                    max="1000000" 
                    step="2000"
                    value={tkViews}
                    onChange={(e) => setTkViews(Number(e.target.value))}
                    className="w-full accent-cyan-400 cursor-pointer"
                  />
                  <div className="flex justify-between text-[9px] text-white/40 font-mono mt-0.5">
                    <span>1k</span>
                    <span>500k</span>
                    <span>1M</span>
                  </div>
                </div>

                {/* Average Likes */}
                <div>
                  <div className="flex justify-between items-center text-xs mb-1">
                    <span className="text-white/70">Average Video Likes</span>
                    <span className="font-mono text-cyan-400 font-bold">{tkLikes.toLocaleString()}</span>
                  </div>
                  <input 
                    type="range" 
                    min="50" 
                    max="150000" 
                    step="50"
                    value={tkLikes}
                    onChange={(e) => setTkLikes(Number(e.target.value))}
                    className="w-full accent-cyan-400 cursor-pointer"
                  />
                  <div className="flex justify-between text-[9px] text-white/40 font-mono mt-0.5">
                    <span>50</span>
                    <span>75k</span>
                    <span>150k</span>
                  </div>
                </div>

                {/* CPM Rate Toggle buttons */}
                <div>
                  <span className="text-[10px] text-white/50 block uppercase tracking-wide mb-1.5">CPM Bracket Factor (USD)</span>
                  <div className="grid grid-cols-4 gap-2">
                    {[15, 25, 35, 50].map((rate) => (
                      <button 
                        key={rate}
                        onClick={() => setTkCpmFactor(rate)}
                        className={`text-xs px-2 py-1 rounded font-mono transition-all ${
                          tkCpmFactor === rate 
                            ? 'bg-cyan-500 text-black font-bold' 
                            : 'bg-white/5 text-white/70 hover:bg-white/10'
                        }`}
                      >
                        ${rate} CPM
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Results Output Block */}
            <div className="mt-6 pt-4 border-t border-white/10 grid grid-cols-3 gap-3">
              <div className="bg-white/5 rounded-xl p-2 text-center">
                <p className="text-[9px] text-white/40 uppercase">Views Engagement</p>
                <b className="text-sm font-mono text-cyan-400">{tkCalcs.viewsER.toFixed(1)}%</b>
              </div>
              <div className="bg-white/5 rounded-xl p-2 text-center">
                <p className="text-[9px] text-white/40 uppercase">Follower Ratio</p>
                <b className="text-sm font-mono text-cyan-400">{tkCalcs.followersER.toFixed(1)}%</b>
              </div>
              <div className="bg-white/5 rounded-xl p-2 text-center">
                <p className="text-[9px] text-white/40 uppercase">Ideal Sponsor Fee</p>
                <b className="text-sm font-mono text-cyan-400">${tkCalcs.recommendedCharge}</b>
              </div>
              <div className="col-span-3 bg-cyan-400/10 rounded-xl p-2 text-center border border-cyan-400/25">
                <span className="text-[10px] text-cyan-300 font-semibold block uppercase">Recommend Brand Deal Range</span>
                <span className="text-lg font-mono font-bold text-white">${tkCalcs.minCharge} - ${tkCalcs.maxCharge}</span>
              </div>
            </div>
          </section>

          {/* CALCULATOR 2: YOUTUBE SHORTS RPM REVENUE PREDICTOR */}
          <section id="youtube-shorts-predictor" className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:border-white/20 transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-200">
                    YouTube Shorts RPM Predictor
                  </h2>
                </div>
                <Youtube className="w-4 h-4 text-red-500" />
              </div>

              <div className="space-y-4">
                {/* Select Niche */}
                <div>
                  <label className="text-xs text-white/70 block mb-1">Target Video Niche</label>
                  <select 
                    value={ytNicheIndex} 
                    onChange={(e) => setYtNicheIndex(Number(e.target.value))}
                    className="w-full bg-slate-900 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-red-500"
                  >
                    {NICHES.map((niche, idx) => (
                      <option key={idx} value={idx}>
                        {niche.icon} {niche.name} (${niche.minRPM.toFixed(2)} - ${niche.maxRPM.toFixed(2)} RPM)
                      </option>
                    ))}
                  </select>
                </div>

                {/* Estimated Monthly Views Input or Slider */}
                <div>
                  <div className="flex justify-between items-center text-xs mb-1">
                    <span className="text-white/70 font-medium">Monthly Views Input</span>
                    <span className="font-mono text-red-400 font-bold">{ytViews.toLocaleString()} views</span>
                  </div>
                  <input 
                    type="range" 
                    min="10000" 
                    max="10000000" 
                    step="10000"
                    value={ytViews}
                    onChange={(e) => setYtViews(Number(e.target.value))}
                    className="w-full accent-red-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[9px] text-white/40 font-mono mt-0.5">
                    <span>10k Views</span>
                    <span>5M Views</span>
                    <span>10M Views</span>
                  </div>
                </div>

                {/* Selected Niche summary card */}
                <div className="bg-white/5 border border-white/5 p-3 rounded-xl text-xs">
                  <span className="text-red-400 font-semibold block">Niche Analysis:</span>
                  <p className="text-white/60 text-[11px] leading-relaxed mb-1">
                    {ytCalcs.activeNiche.description} Shorts pool splits are highly optimized in this category.
                  </p>
                  <span className="text-[10px] text-white/40 font-mono block">Estimated Average RPM: ${ytCalcs.avgRPM.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Prediction Outputs */}
            <div className="mt-6 pt-4 border-t border-white/10 grid grid-cols-2 gap-4">
              <div className="bg-white/5 rounded-xl p-3 text-center border border-white/5">
                <p className="text-[10px] text-white/40 uppercase mb-0.5">Est. Monthly Pay</p>
                <b className="text-xl font-mono text-red-400">${Math.round(ytCalcs.estMonthlyPayout).toLocaleString()}</b>
              </div>
              <div className="bg-white/5 rounded-xl p-3 text-center border border-white/5">
                <p className="text-[10px] text-white/40 uppercase mb-0.5">Est. Annual Cashflow</p>
                <b className="text-xl font-mono text-white">${Math.round(ytCalcs.estYearlyPayout).toLocaleString()}</b>
              </div>
            </div>
          </section>

          {/* CALCULATOR 3: INSTAGRAM REEL VIRAL SCORE ESTIMATOR */}
          <section id="instagram-virality" className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:border-white/20 transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-pink-500"></div>
                  <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-200">
                    IG Reel Virality Index Estimator
                  </h2>
                </div>
                <Instagram className="w-4 h-4 text-pink-500" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Save and Share Metrics */}
                <div className="space-y-3">
                  <div>
                    <span className="text-[11px] text-white/50 block">Reel Plays Context</span>
                    <input 
                      type="number" 
                      value={igViews} 
                      onChange={(e) => setIgViews(Math.max(1, Number(e.target.value)))}
                      className="w-full bg-slate-900 border border-white/10 rounded px-2.5 py-1 text-xs outline-none text-white font-mono"
                    />
                  </div>
                  <div>
                    <span className="text-[11px] text-pink-300 block">Saves Count (Weight: 5x)</span>
                    <input 
                      type="number" 
                      value={igSaves} 
                      onChange={(e) => setIgSaves(Math.max(0, Number(e.target.value)))}
                      className="w-full bg-slate-900 border border-white/10 rounded px-2.5 py-1 text-xs outline-none text-white font-mono"
                    />
                  </div>
                  <div>
                    <span className="text-[11px] text-amber-300 block">Shares Count (Weight: 8x)</span>
                    <input 
                      type="number" 
                      value={igShares} 
                      onChange={(e) => setIgShares(Math.max(0, Number(e.target.value)))}
                      className="w-full bg-slate-900 border border-white/10 rounded px-2.5 py-1 text-xs outline-none text-white font-mono"
                    />
                  </div>
                  <div>
                    <span className="text-[11px] text-emerald-300 block">Comments Count (Weight: 3x)</span>
                    <input 
                      type="number" 
                      value={igComments} 
                      onChange={(e) => setIgComments(Math.max(0, Number(e.target.value)))}
                      className="w-full bg-slate-900 border border-white/10 rounded px-2.5 py-1 text-xs outline-none text-white font-mono"
                    />
                  </div>
                </div>

                {/* Progress Wheel Graphic */}
                <div className="flex flex-col items-center justify-center py-2 bg-white/5 rounded-xl border border-white/5 pr-2">
                  <span className="text-[10px] text-white/40 mb-2 uppercase tracking-wide">Virality Score</span>
                  
                  <div className="relative flex items-center justify-center">
                    {/* SVG Circular indicator */}
                    <svg className="w-24 h-24 transform -rotate-90">
                      <circle cx="48" cy="48" r="40" stroke="rgba(255,255,255,0.05)" strokeWidth="8" fill="transparent" />
                      <circle 
                        cx="48" 
                        cy="48" 
                        r="40" 
                        stroke={igCalcs.ringColor} 
                        strokeWidth="8" 
                        fill="transparent" 
                        strokeDasharray="251.2" 
                        strokeDashoffset={251.2 - (251.2 * igCalcs.score) / 100} 
                        className="transition-all duration-500 ease-out"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-2xl font-black font-mono text-white" style={{ textShadow: '0 0 10px rgba(255,255,255,0.1)' }}>{igCalcs.score}</span>
                      <span className="text-[8px] opacity-40 uppercase tracking-widest font-mono">Index</span>
                    </div>
                  </div>

                  <b className={`text-center text-[11px] mt-2 block tracking-tight transition-colors duration-300 ${igCalcs.labelColor}`}>
                    {igCalcs.level}
                  </b>
                </div>
              </div>
            </div>

            <div className="mt-4 bg-white/5 p-2 rounded-lg text-center border border-white/5">
              <p className="text-[10px] text-white/50 leading-relaxed">
                Reel Algorithmic triggers strongly reward high Save-&-Share density. Target &gt;2% share-to-views ratio.
              </p>
            </div>
          </section>

          {/* CALCULATOR 4: AUDIO-TO-VIDEO RETENTION MATCHER */}
          <section id="retention-matcher" className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:border-white/20 transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                  <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-200">
                    Audio-to-Video Retention Matcher
                  </h2>
                </div>
                <Clock className="w-4 h-4 text-emerald-400" />
              </div>

              {/* Sliders and radio selectors */}
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center text-xs mb-1">
                    <span className="text-white/70">Planned Video Duration</span>
                    <span className="font-mono text-emerald-400 font-bold">{videoLength} seconds</span>
                  </div>
                  <input 
                    type="range" 
                    min="5" 
                    max="60" 
                    step="1"
                    value={videoLength}
                    onChange={(e) => setVideoLength(Number(e.target.value))}
                    className="w-full accent-emerald-400 cursor-pointer"
                  />
                  <div className="flex justify-between text-[9px] text-white/40 font-mono mt-0.5">
                    <span>5s</span>
                    <span>30s</span>
                    <span>60s</span>
                  </div>
                </div>

                <div>
                  <span className="text-[11px] text-white/70 block mb-1.5 font-medium">Sound Viral Velocity Trend</span>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { id: 'megaviral', label: '🌋 Megaviral Sound' },
                      { id: 'breakout', label: '🚀 Breakout Wave' },
                      { id: 'steady', label: '📈 Safe Standard' },
                      { id: 'saturated', label: '⚡ Saturated Sound' }
                    ].map((status) => (
                      <button 
                        key={status.id}
                        onClick={() => setTrendStrength(status.id)}
                        className={`text-xs p-2 rounded-lg border text-left transition-all ${
                          trendStrength === status.id 
                            ? 'bg-emerald-400 text-black font-bold border-emerald-300 shadow-sm shadow-emerald-400/20' 
                            : 'bg-slate-900 text-white/70 border-white/10 hover:border-white/20'
                        }`}
                      >
                        {status.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Matcher Blueprint timeline outputs */}
            <div className="mt-5 pt-4 border-t border-white/10">
              <span className="text-[10px] text-white/40 block mb-2 uppercase tracking-wide">Interactive Video-Timeline Match:</span>
              <div className="relative h-6 bg-white/5 rounded-lg overflow-hidden flex items-center border border-white/15">
                {/* Hook segment */}
                <div 
                  className="h-full bg-emerald-400 flex items-center justify-center transition-all duration-300"
                  style={{ width: `${(audioCalcs.hookSecs / videoLength) * 100}%` }}
                >
                  <span className="text-[8px] font-bold text-black px-1">HOOK</span>
                </div>
                {/* Core story peak */}
                <div className="flex-1 h-full bg-violet-500/15 flex items-center justify-center">
                  <span className="text-[8px] font-semibold text-white/60">MAIN SEGMENT</span>
                </div>
                {/* CTA segment */}
                <div 
                  className="h-full bg-pink-500/20 border-l border-white/10 flex items-center justify-center transition-all duration-300"
                  style={{ width: `${((videoLength - audioCalcs.suggestedCtaTime) / videoLength) * 100}%` }}
                >
                  <span className="text-[8px] font-bold text-pink-300">CTA</span>
                </div>
              </div>

              <div className="flex justify-between text-[9px] text-white/40 font-mono mt-2">
                <span>Start (0s)</span>
                <span>Peak Hook at: {audioCalcs.hookSecs}s</span>
                <span>CTA entry: {audioCalcs.suggestedCtaTime}s</span>
                <span>Finish ({videoLength}s)</span>
              </div>

              <div className="mt-3 bg-white/5 p-3 rounded-lg border border-white/5 text-xs text-white/80 leading-relaxed">
                <span className="font-semibold text-emerald-300">Strategy Blueprint: </span>
                {audioCalcs.summary}
              </div>
            </div>
          </section>

        </div>

        {/* SECTION 5: SPONSORSHIP INVOICE GENERATOR CONTAINER (FULL WIDTH) & BRAND STYLING PRINT PREVIEW */}
        <section id="invoice-builder" className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300 relative">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-yellow-400 text-lg">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <b className="text-sm font-semibold uppercase tracking-wider text-slate-200">
                  Tool 5: Sponsorship Creator Invoice Generator
                </b>
                <p className="text-xs text-white/60">
                  Configure campaign billing numbers, preview the instant receipt table below, and print or export.
                </p>
              </div>
            </div>

            <button 
              onClick={handlePrint}
              className="flex items-center gap-2 bg-yellow-400 text-black font-semibold text-xs py-2 px-4 rounded-xl hover:bg-yellow-300 duration-200 cursor-pointer active:scale-95 transition-all outline-none border border-yellow-300/30 print:hidden self-start"
            >
              <Printer className="w-3.5 h-3.5" /> Print / Export Invoice (PDF)
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* INVOICE CONTROLS FORM (LEFT COLUMN) */}
            <div className="lg:col-span-4 space-y-4 print:hidden">
              <h3 className="text-xs font-mono font-semibold tracking-wider text-white/40 uppercase block border-b border-white/5 pb-1">
                BILLING VARIABLES
              </h3>

              <div className="space-y-3 text-xs">
                <div>
                  <label className="block text-white/70 mb-1 font-medium">Invoice reference #</label>
                  <input 
                    type="text" 
                    value={invoiceId} 
                    onChange={(e) => setInvoiceId(e.target.value)}
                    className="w-full bg-slate-900 border border-white/10 rounded-lg px-2.5 py-1.5 text-white font-mono"
                    placeholder="INV-2026-X"
                  />
                </div>

                <div>
                  <label className="block text-white/70 mb-1 font-medium">Creator Handle / Studio Name</label>
                  <input 
                    type="text" 
                    value={invoiceCreator} 
                    onChange={(e) => setInvoiceCreator(e.target.value)}
                    className="w-full bg-slate-900 border border-white/10 rounded-lg px-2.5 py-1.5 text-white"
                  />
                </div>

                <div>
                  <label className="block text-white/70 mb-1 font-medium">Creator Email</label>
                  <input 
                    type="email" 
                    value={invoiceCreatorEmail} 
                    onChange={(e) => setInvoiceCreatorEmail(e.target.value)}
                    className="w-full bg-slate-900 border border-white/10 rounded-lg px-2.5 py-1.5 text-white"
                  />
                </div>

                <div>
                  <label className="block text-white/70 mb-1 font-medium">Sponsor Brand Client Name</label>
                  <input 
                    type="text" 
                    value={invoiceClient} 
                    onChange={(e) => setInvoiceClient(e.target.value)}
                    className="w-full bg-slate-900 border border-white/10 rounded-lg px-2.5 py-1.5 text-white"
                  />
                </div>

                <div>
                  <label className="block text-white/70 mb-1 font-medium">Campaign / Retainer Focus</label>
                  <input 
                    type="text" 
                    value={invoiceCampaign} 
                    onChange={(e) => setInvoiceCampaign(e.target.value)}
                    className="w-full bg-slate-900 border border-white/10 rounded-lg px-2.5 py-1.5 text-white"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-white/70 mb-1 font-medium">Base Integration Rate ($)</label>
                    <input 
                      type="number" 
                      value={invoiceBaseRate} 
                      onChange={(e) => setInvoiceBaseRate(Math.max(0, Number(e.target.value)))}
                      className="w-full bg-slate-900 border border-white/10 rounded-lg px-2.5 py-1.5 text-white font-mono"
                    />
                  </div>
                  <div>
                    <label className="block text-white/70 mb-1 font-medium">Net Terms</label>
                    <input 
                      type="text" 
                      value={invoiceTerms} 
                      onChange={(e) => setInvoiceTerms(e.target.value)}
                      className="w-full bg-slate-900 border border-white/10 rounded-lg px-2.5 py-1.5 text-white"
                      placeholder="e.g. Net 30, Due on Receipt"
                    />
                  </div>
                </div>

                <div className="border-t border-white/5 pt-3">
                  <label className="block text-amber-300 font-medium mb-1">Add-on Item / Extra Deliverable</label>
                  <input 
                    type="text" 
                    value={invoiceExtraDesc} 
                    onChange={(e) => setInvoiceExtraDesc(e.target.value)}
                    className="w-full bg-slate-900 border border-white/10 rounded-lg px-2.5 py-1.5 text-white mb-2"
                    placeholder="e.g. 30 Days Spark Ad Usage code rights"
                  />
                  
                  <label className="block text-white/70 mb-1 font-medium">Add-on Charge ($)</label>
                  <input 
                    type="number" 
                    value={invoiceExtraRate} 
                    onChange={(e) => setInvoiceExtraRate(Math.max(0, Number(e.target.value)))}
                    className="w-full bg-slate-900 border border-white/10 rounded-lg px-2.5 py-1.5 text-white font-mono"
                  />
                </div>
              </div>
            </div>

            {/* LIVE PREVIEW BILL (RIGHT COLUMN) */}
            <div className="lg:col-span-8 bg-white text-black p-8 rounded-xl shadow-2xl relative border border-slate-200 overflow-hidden print:m-0 print:border-none print:shadow-none min-h-[460px]">
              
              {/* Decorative paper watermark decoration */}
              <div className="absolute top-0 right-0 h-4 bg-gradient-to-l from-yellow-400 to-yellow-300 left-0 print:hidden"></div>

              {/* Bill Invoice Header */}
              <div className="flex flex-col sm:flex-row justify-between items-start gap-4 border-b border-slate-200 pb-6 mt-2">
                <div>
                  <span className="font-mono text-xs text-slate-400 block tracking-widest uppercase font-bold">SPONSOR BILLING DOCUMENT</span>
                  <p className="text-3xl font-black text-slate-900 tracking-tight">{invoiceCreator || 'Creator Studio'}</p>
                  <p className="text-xs text-slate-500">{invoiceCreatorEmail || 'creator@billing.com'}</p>
                </div>
                
                <div className="sm:text-right mt-1">
                  <span className="bg-slate-100 text-slate-800 text-[10px] px-2 py-0.5 rounded font-bold font-mono uppercase tracking-wider inline-block">
                    {invoiceId || '#INV-REF'}
                  </span>
                  <p className="text-xs text-slate-500 mt-1">Date Issued: {invoiceDate || '2026-06-05'}</p>
                  <p className="text-xs text-red-500 font-semibold">Payment Terms: {invoiceTerms || 'Net 30'}</p>
                </div>
              </div>

              {/* Client information addresses */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6 text-xs border-b border-slate-100 bg-slate-50/50 px-4 -mx-4">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-mono block mb-1">BILL TO SPONSOR:</span>
                  <p className="font-black text-slate-800 text-sm">{invoiceClient || 'Brand Sponsor co.'}</p>
                  <p className="text-slate-500">Corporate Campaign Integration Program</p>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-mono block mb-1">CAMPAIGN INITIATIVE:</span>
                  <p className="font-semibold text-slate-700">{invoiceCampaign || 'Social Media Reels Contract'}</p>
                  <p className="text-slate-500">Date Due: {invoiceDueDate || '2026-07-05'}</p>
                </div>
              </div>

              {/* Transaction Statement Deliverables Table */}
              <div className="mt-6 mb-8">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-slate-200 text-slate-400 uppercase text-[9px] tracking-wider font-bold">
                      <th className="pb-2 w-3/5">Delivered Creative Assets</th>
                      <th className="pb-2 text-right">Base Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-100">
                      <td className="py-3">
                        <span className="font-semibold text-slate-800 block text-xs">
                          {invoiceCampaign || 'Ad Integration Content'}
                        </span>
                        <span className="text-slate-500 text-[10px]">
                          Complete sponsorship, editing support, audio-sync timing optimization.
                        </span>
                      </td>
                      <td className="py-3 text-right font-mono text-slate-800 text-xs font-bold">
                        ${invoiceBaseRate.toLocaleString()}
                      </td>
                    </tr>

                    {invoiceExtraRate > 0 && invoiceExtraDesc && (
                      <tr className="border-b border-slate-100">
                        <td className="py-3">
                          <span className="font-semibold text-slate-800 block text-xs">
                            {invoiceExtraDesc}
                          </span>
                          <span className="text-slate-500 text-[10px]">
                            Supplemental licensing rights.
                          </span>
                        </td>
                        <td className="py-3 text-right font-mono text-slate-800 text-xs font-bold">
                          ${invoiceExtraRate.toLocaleString()}
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {/* Total Balance block */}
              <div className="border-t border-slate-200 pt-4 flex flex-col items-end">
                <div className="w-72">
                  <div className="flex justify-between items-center text-xs text-slate-500 py-1">
                    <span>Subtotal Due:</span>
                    <span className="font-mono">${(invoiceBaseRate + invoiceExtraRate).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs text-slate-500 py-1">
                    <span>Applicable Tax (0.0%):</span>
                    <span className="font-mono">$0</span>
                  </div>
                  <div className="flex justify-between items-center text-sm border-t border-slate-100 py-2.5 mt-1">
                    <span className="font-bold text-slate-800 uppercase">Grand Total:</span>
                    <span className="text-lg font-black font-mono text-slate-900">
                      ${(invoiceBaseRate + invoiceExtraRate).toLocaleString()}.00 USD
                    </span>
                  </div>
                </div>
              </div>

              {/* Payment credentials */}
              <div className="mt-6 pt-6 border-t border-slate-100 text-[10px] text-slate-400">
                <p className="font-bold uppercase text-slate-500 mb-1">Special Billing Terms & Notes</p>
                <p className="leading-relaxed">
                  Please direct payment to the creator contact email address. Retain invoice copy for accounting writeoffs. Submissions subject to validation metrics.
                </p>
              </div>
            </div>

          </div>
        </section>

      </div>

      {/* 5. BOTTOM ADVERTISEMENT SPACE PLACEHOLDER */}
      <footer className="w-full mt-10 text-center print:hidden">
        <div className="max-w-5xl mx-auto px-4 mb-8">
          <div className="bg-white/5 border border-dashed border-white/10 rounded-xl p-4 text-center select-none">
            <p className="text-[10px] font-mono tracking-widest text-white/30 uppercase">SPONSORED PROMOTIONAL LINK</p>
            <p className="text-xs text-white/50 mt-1">
              Want to auto-publish your content across 8 social platforms with one click? Check our upcoming partner integrations.
            </p>
          </div>
        </div>
        
        <p className="text-[11px] text-white/30 font-mono uppercase tracking-widest">
          Viral Creator Analytics Hub © 2026. All analytics mapped instantly to core algorithm matrices.
        </p>
      </footer>
    </div>
  );
}
