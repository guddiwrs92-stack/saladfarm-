import React from 'react';
import { MessageCircle, Check, Calendar, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { subscriptionPlans } from '../data/products';
import { getSubscriptionWhatsAppUrl } from '../utils/whatsapp';

export const SubscriptionsSection: React.FC = () => {
  const handleEnquire = (plan: (typeof subscriptionPlans)[0]) => {
    const url = getSubscriptionWhatsAppUrl(plan.name, plan.whatsappMessage);
    window.open(url, '_blank');
  };

  return (
    <section id="subscriptions" className="py-16 md:py-24 bg-[#FFFDF7] scroll-mt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[#D93672] mb-2.5">
            <Calendar className="w-3.5 h-3.5" />
            <span>DAILY &amp; MONTHLY SUBSCRIPTIONS</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F2921] tracking-tight">
            Make healthy eating a habit.
          </h2>
          <p className="text-sm sm:text-base text-[#1F2921]/70 mt-3 leading-relaxed">
            Fresh food, planned around your routine. Say goodbye to daily cooking stress with freshly prepared gourmet meals delivered right when you need them.
          </p>
        </div>

        {/* 3-Column Plan Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {subscriptionPlans.map((plan) => {
            const isMonthly = plan.badge === 'MONTHLY';
            const isWeekly = plan.badge === 'WEEKLY';

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 border ${
                  isMonthly
                    ? 'bg-gradient-to-b from-[#315E35]/5 via-white to-white border-[#315E35] shadow-lg ring-1 ring-[#315E35]/20'
                    : 'bg-white border-[#315E35]/15 shadow-sm hover:shadow-md'
                }`}
              >
                {/* Popular Badge on Monthly */}
                {isMonthly && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#315E35] text-white text-[11px] font-extrabold uppercase tracking-wider px-4 py-1 rounded-full shadow-sm">
                    Most Popular Choice
                  </div>
                )}

                <div>
                  {/* Badge & Plan Name */}
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-xs font-black uppercase tracking-wider px-3 py-1 rounded-md ${
                        isMonthly
                          ? 'bg-[#315E35] text-white'
                          : isWeekly
                          ? 'bg-[#F28C28]/15 text-[#F28C28]'
                          : 'bg-[#5FAE45]/15 text-[#315E35]'
                      }`}
                    >
                      {plan.badge} PLAN
                    </span>
                    <span className="text-xs font-bold text-gray-500">
                      {plan.mealsPerCycle}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-[#1F2921] mt-2 mb-2">
                    {plan.name}
                  </h3>

                  <p className="text-xs text-[#1F2921]/70 leading-relaxed mb-6">
                    {plan.subtitle}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-3 pt-4 border-t border-gray-100 mb-6">
                    {plan.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-[#1F2921]/85">
                        <span className="p-1 rounded-full bg-[#5FAE45]/20 text-[#315E35] shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-[#315E35]" />
                        </span>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Flexibility note */}
                  <div className="p-3 bg-[#F2F7EE] rounded-xl text-xs text-[#315E35] font-medium flex items-center gap-2 mb-6">
                    <ShieldCheck className="w-4 h-4 shrink-0 text-[#5FAE45]" />
                    <span>{plan.flexibility}</span>
                  </div>
                </div>

                {/* WhatsApp Action Button */}
                <div>
                  <button
                    type="button"
                    onClick={() => handleEnquire(plan)}
                    className={`w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-sm active:scale-[0.98] cursor-pointer ${
                      isMonthly
                        ? 'bg-[#315E35] hover:bg-[#254929] text-white shadow-md'
                        : 'bg-[#F2F7EE] hover:bg-[#315E35] text-[#315E35] hover:text-white border border-[#315E35]/20'
                    }`}
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Get Plan Details on WhatsApp</span>
                  </button>
                  <p className="text-[10px] text-center text-gray-400 mt-2">
                    Instant custom quote for your dietary goal
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Customization Callout Footer */}
        <div className="mt-12 p-6 rounded-3xl bg-[#F2F7EE] border border-[#315E35]/15 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="p-3 rounded-2xl bg-white text-[#315E35] shadow-xs shrink-0 hidden sm:block">
              <Sparkles className="w-6 h-6 text-[#5FAE45]" />
            </div>
            <div>
              <h4 className="font-bold text-[#1F2921] text-base">
                Have specific macro targets or dietary preferences?
              </h4>
              <p className="text-xs text-[#1F2921]/70 mt-0.5">
                We customize dressings, remove allergens, or adjust protein grams for gym-goers, diabetics, and wellness regimes in Jodhpur.
              </p>
            </div>
          </div>
          <a
            href={getSubscriptionWhatsAppUrl('Custom Meal Plan', "Hi Saladfarm! I'd like a custom dietary meal subscription plan. Can we discuss options?")}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-white hover:bg-gray-50 text-[#315E35] border border-[#315E35]/20 font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-xl transition-all shadow-2xs flex items-center gap-2"
          >
            <span>Talk to Nutrition Team</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
