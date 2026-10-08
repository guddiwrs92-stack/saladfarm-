import React from 'react';
import { Leaf, Truck, MessageCircle, CalendarDays } from 'lucide-react';

export const DeliveryTrust: React.FC = () => {
  const pillars = [
    {
      icon: Leaf,
      iconColor: 'text-[#5FAE45]',
      iconBg: 'bg-[#5FAE45]/15',
      title: 'Fresh Ingredients',
      description: 'Prepared fresh for every order with crisp greens washed and prepped daily.'
    },
    {
      icon: Truck,
      iconColor: 'text-[#F28C28]',
      iconBg: 'bg-[#F28C28]/15',
      title: 'Home Delivery',
      description: 'Get your favourite bowls and salads delivered safely to your doorstep.'
    },
    {
      icon: MessageCircle,
      iconColor: 'text-[#315E35]',
      iconBg: 'bg-[#315E35]/15',
      title: 'Easy Ordering',
      description: 'Order directly through WhatsApp with zero payment friction or app downloads.'
    },
    {
      icon: CalendarDays,
      iconColor: 'text-[#D93672]',
      iconBg: 'bg-[#D93672]/15',
      title: 'Subscription Plans',
      description: 'Make healthy eating an effortless routine with daily & monthly meal plans.'
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-[#FFFDF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-extrabold uppercase tracking-wider text-[#315E35]">
            THE SALADFARM STANDARD
          </span>
          <h2 className="font-display text-3xl font-bold text-[#1F2921] mt-1.5">
            Why Saladfarm?
          </h2>
          <p className="text-sm text-[#1F2921]/70 mt-2">
            Wholesome nutrition built with uncompromising attention to flavour, crunch, and hospitality.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-[#315E35]/12 hover:border-[#315E35]/30 shadow-2xs hover:shadow-xs transition-all flex flex-col items-start"
              >
                <div className={`p-3 rounded-xl ${pillar.iconBg} ${pillar.iconColor} mb-4`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base text-[#1F2921] mb-1.5">
                  {pillar.title}
                </h3>
                <p className="text-xs text-[#1F2921]/70 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
