"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { Playfair_Display, Inter } from "next/font/google";
import { Star, ChevronDown, ArrowRight, Palette, Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

type Theme = {
    name: string;
    label: string;
    colors: {
        dark: string; // Used for dark backgrounds / light text
        light: string; // Used for light backgrounds / dark text
        accent: string; // Used for highlights
    }
};

const THEMES: Theme[] = [
    {
        name: "original",
        label: "Original",
        colors: { dark: "26 21 18", light: "240 236 229", accent: "204 255 0" } // #1A1512, #F0ECE5, #ccff00
    },
    {
        name: "caramelized",
        label: "Caramelized Pears",
        colors: { dark: "66 16 16", light: "231 214 172", accent: "231 214 172" } // #421010, #E7D6AC
    },
    {
        name: "glacial",
        label: "Glacial Green",
        colors: { dark: "30 58 52", light: "110 181 165", accent: "249 244 219" } // #1e3a34, #6EB5A5, #F9F4DB
    },
    {
        name: "lychee",
        label: "Lychee Pulp",
        colors: { dark: "110 181 165", light: "249 244 219", accent: "236 122 73" } // Green text, #F9F4DB bg
    },
    {
        name: "sunset",
        label: "Sizzling Sunset",
        colors: { dark: "66 16 16", light: "236 122 73", accent: "249 244 219" } // Red text, Orange bg
    }
];

const playfair = Playfair_Display({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
    variable: "--font-playfair",
});

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

const Section = ({
    children,
    className,
    id,
}: {
    children: React.ReactNode;
    className?: string;
    id?: string;
}) => {
    return (
        <section
            id={id}
            className={`min-h-screen w-full relative overflow-hidden flex flex-col justify-center px-6 md:px-20 py-20 ${className}`}
        >
            {children}
        </section>
    );
};

const FadeIn = ({
    children,
    delay = 0,
    className,
}: {
    children: React.ReactNode;
    delay?: number;
    className?: string;
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

const NavBar = () => {
    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="fixed top-0 left-0 w-full z-50 px-6 py-6 md:px-12 flex justify-between items-center mix-blend-difference text-theme-light"
        >
            <Link href="/" className="text-2xl tracking-widest font-light flex items-center gap-2">
                <div className="w-5 h-5 border rounded-full border-current" />
                AXION
            </Link>
            <div className="hidden md:flex gap-8 text-xs tracking-[0.2em] font-medium">
                {["OUR STORY", "SCIENCE", "CAREERS"].map((item) => (
                    <Link key={item} href="#" className="hover:opacity-60 transition-opacity">
                        {item}
                    </Link>
                ))}
                <Link href="#" className="border border-current px-5 py-2 hover:bg-theme-light hover:text-theme-dark transition-colors">
                    CONTACT US
                </Link>
            </div>
        </motion.nav>
    );
};

// SVG Assets for visuals
const WaveMesh = () => (
    <svg className="absolute top-0 right-0 w-full h-full opacity-30 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
        <motion.path
            d="M0,50 Q25,30 50,50 T100,50 L100,100 L0,100 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.5 }}
            transition={{ duration: 3, ease: "easeInOut" }}
        />
        <motion.path
            d="M0,60 Q25,40 50,60 T100,60"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3.5, ease: "easeInOut", delay: 0.2 }}
        />
        {/* Generating many lines for mesh effect */}
        {Array.from({ length: 20 }).map((_, i) => (
            <motion.path
                key={i}
                d={`M0,${40 + i * 3} Q${25 + i},${20 + i * 3} ${50},${40 + i * 3} T100,${40 + i * 3}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="0.05"
                className="text-white/20"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2 + i * 0.1, ease: "easeInOut", delay: i * 0.05 }}
            />
        ))}
    </svg>
);

const BrainWireframe = () => (
    <div className="relative w-full aspect-square border-l border-b border-theme-dark/10 p-8">
        <div className="absolute top-0 right-0 w-12 h-12 bg-theme-dark flex items-center justify-center text-theme-light">
            <Star className="w-6 h-6 animate-spin-slow" />
        </div>

        <svg viewBox="0 0 200 200" className="w-full h-full stroke-theme-dark fill-none stroke-[0.5]">
            {/* Abstract brain-like geometric shape */}
            <motion.path
                d="M40,100 Q60,20 100,40 T160,100 T100,160 T40,100"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 3, ease: "easeInOut" }}
            />
            {Array.from({ length: 15 }).map((_, i) => (
                <motion.circle
                    key={i}
                    cx={100 + Math.cos(i) * 30}
                    cy={100 + Math.sin(i) * 30}
                    r={20 + i * 2}
                    strokeOpacity={0.1 + i * 0.05}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: i * 0.1, duration: 2 }}
                />
            ))}
        </svg>

        {/* Pixel blocks */}
        <div className="absolute top-0 left-0 w-16 h-16 bg-theme-dark" />
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-theme-dark" />
    </div>
)

const Card = ({ title, desc, delay, icon }: { title: string, desc: string, delay: number, icon: React.ReactNode }) => {
    return (
        <FadeIn delay={delay} className="group border border-theme-dark/20 p-8 pt-12 relative hover:bg-theme-dark hover:text-theme-light transition-colors duration-500 overflow-hidden min-h-[400px] flex flex-col justify-end">
            <div className="absolute top-0 left-0 w-full h-2/3 flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity">
                {icon}
            </div>
            <div className="relative z-10">
                <h3 className="text-sm tracking-[0.2em] font-semibold mb-4 uppercase">{title}</h3>
                <div className="w-full h-px bg-current mb-6 opacity-30" />
                <p className="font-serif text-xl leading-relaxed opacity-90">{desc}</p>
            </div>
        </FadeIn>
    )
}

const Marquee = () => {
    return (
        <div className="relative flex overflow-hidden py-10 border-t border-white/20">
            <motion.div
                className="flex whitespace-nowrap gap-20 text-xs tracking-[0.2em] uppercase opacity-70"
                animate={{ x: [0, -1000] }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            >
                {Array.from({ length: 10 }).map((_, i) => (
                    <span key={i}>We&apos;re collaborating with top rehabilitation hospitals to validate Axion&apos;s technology through real-world pilots</span>
                ))}
            </motion.div>
        </div>
    )
}

const ProgressBar = () => {
    const { scrollYProgress } = useScroll();
    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-theme-accent origin-left z-[60]"
            style={{ scaleX: scrollYProgress }}
        />
    )
}

const ThemeSwitcher = ({ currentTheme, onThemeChange }: { currentTheme: Theme, onThemeChange: (t: Theme) => void }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-8 right-8 z-[100] font-sans">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="absolute bottom-16 right-0 bg-theme-light text-theme-dark p-4 rounded-lg shadow-2xl min-w-[240px] border border-theme-dark/10 mb-2"
                    >
                        <h3 className="text-xs tracking-widest uppercase mb-4 opacity-50 font-semibold">Select Theme</h3>
                        <div className="space-y-2">
                            {THEMES.map((theme) => (
                                <button
                                    key={theme.name}
                                    onClick={() => {
                                        onThemeChange(theme);
                                        setIsOpen(false);
                                    }}
                                    className={`w-full text-left px-3 py-2 text-sm rounded-md transition-colors flex items-center justify-between group
                                        ${currentTheme.name === theme.name ? 'bg-theme-dark text-theme-light' : 'hover:bg-theme-dark/5'}`}
                                >
                                    <span className="font-serif italic">{theme.label}</span>
                                    {currentTheme.name === theme.name && <Check className="w-4 h-4" />}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-12 h-12 bg-theme-dark text-theme-light rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
            >
                <Palette className="w-5 h-5" />
            </button>
        </div>
    );
};

export default function Page3() {
    const [theme, setTheme] = useState(THEMES[1]); // Default to Caramelized

    return (
        <div
            className={`selection:bg-theme-accent selection:text-theme-dark ${playfair.variable} ${inter.variable} font-sans bg-theme-light overscroll-none transition-colors duration-700`}
            style={{
                "--theme-dark": theme.colors.dark,
                "--theme-light": theme.colors.light,
                "--theme-accent": theme.colors.accent,
            } as React.CSSProperties}
        >
            <ProgressBar />
            <NavBar />
            <ThemeSwitcher currentTheme={theme} onThemeChange={setTheme} />

            {/* Hero Section */}
            <Section className="bg-theme-dark text-theme-light transition-colors duration-700">
                <div className="absolute inset-0 z-0">
                    <div className="w-full h-full opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent" />
                    <WaveMesh />
                </div>

                <div className="relative z-10 max-w-4xl pt-20">
                    <FadeIn delay={0.2}>
                        <h1 className="font-serif text-5xl md:text-8xl leading-[1.1] mb-8">
                            Transforming neural activity <span className="opacity-80">into human ability.</span>
                        </h1>
                    </FadeIn>
                    <FadeIn delay={0.4}>
                        <p className="text-lg md:text-xl opacity-60 max-w-xl mb-12 leading-relaxed">
                            Axion Click is a neural headband that turns brain signals and eye movements into seamless interactions. With zero effort. And no surgery.
                        </p>
                        <button className="bg-theme-light text-theme-dark px-8 py-4 font-medium tracking-widest text-xs hover:bg-white hover:text-black transition-colors">
                            JOIN THE WAITLIST
                        </button>
                    </FadeIn>
                </div>
            </Section>

            {/* About Section */}
            <Section className="bg-theme-light text-theme-dark transition-colors duration-700">
                <div className="absolute top-0 w-full py-4 border-b border-theme-dark/10 text-center text-xs tracking-[0.2em] opacity-60">
                    70% OF ASSISTIVE TECHNOLOGIES ARE ABANDONED. AXION EXISTS TO CHANGE THAT.
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center pt-20">
                    <div>
                        <FadeIn>
                            <h2 className="font-serif text-5xl md:text-6xl leading-tight mb-12">
                                Reimagining Neural Precision, without Invasion.
                            </h2>
                            <p className="text-lg opacity-80 leading-relaxed max-w-md">
                                Axion&apos;s neural interface captures the same signal once thought possible only through surgery, yet it works entirely from the surface.
                            </p>
                        </FadeIn>
                    </div>

                    <FadeIn delay={0.2} className="relative">
                        <BrainWireframe />
                    </FadeIn>
                </div>
            </Section>

            {/* Feature Section Dark */}
            <Section className="bg-theme-dark text-theme-light min-h-[80vh] transition-colors duration-700">
                <div className="absolute right-0 top-20 opacity-20 hidden md:block">
                    {/* Dot grid */}
                    <div className="grid grid-cols-10 gap-4 w-60">
                        {Array.from({ length: 50 }).map((_, i) => (
                            <div key={i} className="w-1 h-1 bg-current rounded-full" />
                        ))}
                    </div>
                </div>

                <div className="max-w-3xl">
                    <FadeIn>
                        <h2 className="font-serif text-5xl md:text-7xl mb-8">Life, hands-free.</h2>
                        <p className="text-xl opacity-70 mb-12 leading-relaxed max-w-xl">
                            With a lightweight headband and intuitive interface, users can navigate, communicate, and connect using only thought and gaze.
                        </p>
                        <button className="border border-current px-8 py-4 font-medium tracking-widest text-xs hover:bg-white hover:text-black transition-colors">
                            JOIN THE WAITLIST
                        </button>
                    </FadeIn>
                </div>

                <div className="absolute bottom-0 left-0 w-full">
                    <Marquee />
                </div>
            </Section>

            {/* Science Cards Section */}
            <Section className="bg-theme-light text-theme-dark transition-colors duration-700">
                <div className="mb-20 flex justify-between items-end">
                    <FadeIn>
                        <h2 className="font-serif text-5xl md:text-7xl max-w-2xl leading-tight">
                            The science that makes it effortless.
                        </h2>
                        <p className="mt-8 max-w-md opacity-70 leading-relaxed">
                            Axion is designed for comfort, safety, and dignity for the people who need it most, and the clinicians who guide them.
                        </p>
                    </FadeIn>

                    <div className="hidden md:flex gap-4">
                        <button className="w-12 h-12 border border-theme-dark/20 flex items-center justify-center hover:bg-theme-dark hover:text-theme-light transition-colors"><ChevronDown className="rotate-90" /></button>
                        <button className="w-12 h-12 border border-theme-dark/20 flex items-center justify-center hover:bg-theme-dark hover:text-theme-light transition-colors"><ArrowRight /></button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-theme-dark/20">
                    <Card
                        title="EYE MOVEMENT TRACKING"
                        desc="Precise eye tracking technology detects where you're looking on the screen, identifying interactive elements in your field of view."
                        delay={0.1}
                        icon={
                            <svg viewBox="0 0 100 100" className="w-full h-full stroke-current fill-none stroke-[0.5]">
                                {Array.from({ length: 10 }).map((_, i) => (
                                    <circle key={i} cx="50" cy="50" r={10 + i * 4} />
                                ))}
                                <path d="M50,0 L50,100 M0,50 L100,50" />
                            </svg>
                        }
                    />
                    <Card
                        title="NEURAL SIGNAL DETECTION"
                        desc="The headband captures EEG signals that indicate your natural intention to interact, without requiring any conscious effort."
                        delay={0.2}
                        icon={
                            <svg viewBox="0 0 100 100" className="w-full h-full stroke-current fill-none stroke-[0.5]">
                                <path d="M10,50 Q30,10 50,50 T90,50" />
                                <path d="M10,50 Q30,90 50,50 T90,50" />
                                {Array.from({ length: 8 }).map((_, i) => (
                                    <circle key={i} cx="50" cy="50" r={i * 6} strokeOpacity={0.1 + i * 0.1} />
                                ))}
                            </svg>
                        }
                    />
                    <Card
                        title="AI SIGNAL PROCESSING"
                        desc="Advanced AI models analyze the combined eye tracking and EEG patterns in real-time to accurately interpret your intentions."
                        delay={0.3}
                        icon={
                            <svg viewBox="0 0 100 100" className="w-full h-full stroke-current fill-none stroke-[0.5]">
                                <rect x="20" y="20" width="60" height="60" />
                                {Array.from({ length: 10 }).map((_, i) => (
                                    <line key={i} x1="20" y1={20 + i * 6} x2="80" y2={20 + i * 6} />
                                ))}
                            </svg>
                        }
                    />
                </div>
            </Section>

            {/* Footer / Final Section */}
            <Section className="bg-theme-dark text-theme-light pb-0 px-0 md:px-0 transition-colors duration-700">
                <div className="grid grid-cols-1 md:grid-cols-2 h-full w-full flex-grow">
                    <div className="p-12 md:p-24 flex flex-col justify-center">
                        <div className="mb-8 flex gap-4 text-xs tracking-widest opacity-50">
                            <span className="border border-current px-3 py-1">IN DEVELOPMENT</span>
                            <span className="border border-current px-3 py-1">CLINICAL TRIALS</span>
                        </div>
                        <FadeIn>
                            <h2 className="font-serif text-5xl md:text-6xl mb-8 leading-tight">
                                Neural performance, redefined <span className="opacity-30">for real people.</span>
                            </h2>
                            <p className="text-lg opacity-70 mb-12 max-w-md leading-relaxed">
                                Axion achieves breakthrough brain-computer interaction without the risks of invasive procedures. It&apos;s precision that respects the body.
                            </p>
                            <button className="bg-theme-light text-theme-dark px-8 py-4 font-medium tracking-widest text-xs hover:bg-white hover:text-black transition-colors">
                                EXPLORE THE SCIENCE
                            </button>
                        </FadeIn>
                    </div>
                    <div className="relative bg-[#2D0B0A] h-[50vh] md:h-auto overflow-hidden">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1531297461136-82lw9z2.jpg')] bg-cover bg-center opacity-40 grayscale mix-blend-overlay"></div>
                        {/* Abstract mesh overlay */}
                        <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
                            {Array.from({ length: 20 }).map((_, i) => (
                                <line key={i} x1="0" y1={i * 5} x2="100" y2={50 + i * 2} stroke="currentColor" strokeWidth="0.1" />
                            ))}
                        </svg>
                    </div>
                </div>

                <div className="w-full bg-theme-light text-theme-dark py-8 px-6 md:px-12 flex justify-between items-center text-xs tracking-widest pb-12 mt-auto transition-colors duration-700">
                    <div>BACKED BY <span className="font-bold ml-2">South Park Commons</span></div>
                    <div className="w-8 h-8 bg-theme-accent flex items-center justify-center font-bold text-xl text-theme-dark transition-colors duration-700">*</div>
                </div>
            </Section>
        </div>
    );
}
