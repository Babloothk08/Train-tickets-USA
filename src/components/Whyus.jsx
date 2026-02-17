import React from 'react';
import { Award, Clock, Leaf, Shield, ArrowRight } from 'lucide-react';

export default function WhyUs() {
    const perks = [
        {
            icon: Leaf,
            color: 'text-emerald-600',
            bg: 'bg-emerald-50',
            title: ' Eco-Friendly Travel Options',
            desc: 'Choose train travel as a more sustainable way to travel across the USA, helping reduce environmental impact compared to other transportation options.'
        },
        {
            icon: Shield,
            color: 'text-blue-600',
            bg: 'bg-blue-50',
            title: 'Safe & Secure Booking',
            desc: 'Book train tickets with confidence using secure payment processing and protected online transactions.'
        },
        {
            icon: Award,
            color: 'text-amber-600',
            bg: 'bg-amber-50',
            title: 'Best Travel Options in One Place',
            desc: 'Compare train routes, schedules, and ticket options to find the most convenient journey for your travel needs.'
        },
        {
            icon: Clock,
            color: 'text-indigo-600',
            bg: 'bg-indigo-50',
            title: 'Reliable Train Schedules',
            desc: 'Access updated train schedules and availability to plan your journey with confidence and convenience.'
        }
    ];

    return (
        <section className="relative py-24 bg-white overflow-hidden font-sans">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-60" />
                <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-slate-50 rounded-full blur-3xl opacity-60" />
            </div>

            <div className="relative max-w-7xl mx-auto px-6">

                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    {/* <span className="text-blue-600 font-semibold tracking-wider text-sm uppercase mb-3 block">
                        The Train Tickets USA  Difference
                    </span> */}
                    <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                       Why Millions Choose TrainTicketsUSA for Train Reservations
                    </h3>
                    <p className="text-slate-500 text-lg md:text-xl leading-relaxed">
                       By offering travelers the ability to search, compare, and reserve train tickets across America, we have simplified the process of booking train travel. With our easy-to-use online booking system, you will find everything you need in order to securely reserve your train seat with confidence and peace of mind knowing that you made the best possible choice when reserving your train seat.

                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {perks.map((perk, idx) => (
                        <div
                            key={idx}
                            className="group relative bg-white p-8 rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-500 hover:-translate-y-2"
                        >
                            {/* Icon Container with semantic colors */}
                            <div className={`w-14 h-14 ${perk.bg} ${perk.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                                <perk.icon className="w-7 h-7" strokeWidth={1.5} />
                            </div>

                            {/* Content */}
                            <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
                                {perk.title}
                            </h4>
                            <p className="text-slate-500 leading-relaxed mb-6">
                                {perk.desc}
                            </p>

                            {/* 'Learn More' Link (Visual only) */}
                            <div className="flex items-center text-sm font-semibold text-slate-900 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                <span className="mr-2">Learn more</span>
                                <ArrowRight className="w-4 h-4" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}